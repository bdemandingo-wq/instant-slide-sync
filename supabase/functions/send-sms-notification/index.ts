import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { resolveOpenPhoneNumberId, sendOpenPhoneSms } from "../_shared/openphone.ts";
import {
  OWNER_EMAILS,
  renderAdminBookingEmail,
  renderCustomerBookingEmail,
  sendResendEmail,
  type BookingSummary,
} from "../_shared/booking-emails.ts";

const OPENPHONE_API_KEY = Deno.env.get("OPENPHONE_API_KEY");
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// All three owners get every booking alert.
const OWNER_PHONES = ["+18137356859", "+14076987080", "+18136653189"];

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface SmsNotificationRequest {
  type: "booking" | "cleaner_application" | "contact";
  data: Record<string, unknown>;
  customerPhone?: string;
  smsConsent?: boolean;
  bookingId?: string;
}

function formatBookingSms(data: Record<string, unknown>): string {
  return `New Clean Collective booking!

Customer: ${data.customerName}
Service: ${data.serviceType} (${data.frequency})
Date: ${data.preferredDate}
Address: ${data.address}
Total: $${data.totalPrice}

Log in to your dashboard for details.`;
}

function formatCustomerBookingSms(data: Record<string, unknown>): string {
  return `Clean Collective: Thanks ${data.customerName ?? ""}! Your ${data.serviceType ?? "cleaning"} booking for ${data.preferredDate ?? ""} is received. Total: $${data.totalPrice ?? ""}. We'll confirm shortly. Reply STOP to opt out.`;
}

function formatApplicationSms(data: Record<string, unknown>): string {
  const workAreas = (data.workAreas as string[])?.join(", ") || "N/A";
  return `NEW CLEANER APPLICATION

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Experience: ${data.yearsExperience} years
Areas: ${workAreas}`;
}

function formatContactSms(data: Record<string, unknown>): string {
  return `NEW COMMERCIAL INQUIRY

Name: ${data.name}
Email: ${data.email}
Message: ${data.message}`;
}

async function logSms(entry: {
  to: string;
  recipientType: "owner" | "customer";
  messageType: string;
  success: boolean;
  providerId: string | null;
  errorMessage: string | null;
  bookingId?: string;
}) {
  try {
    await supabaseAdmin.from("sms_send_log").insert({
      recipient: entry.to,
      recipient_type: entry.recipientType,
      message_type: entry.messageType,
      success: entry.success,
      provider_message_id: entry.providerId,
      error_message: entry.errorMessage,
      related_booking_id: entry.bookingId ?? null,
    });
  } catch (err) {
    console.error("sms_send_log insert failed:", err);
  }
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!OPENPHONE_API_KEY) throw new Error("OPENPHONE_API_KEY is not configured");

    const payload: SmsNotificationRequest = await req.json();
    const { type, data, bookingId } = payload;
    console.log("notification:", type, "bookingId:", bookingId ? "yes" : "no");

    // Resolve OpenPhone number id dynamically (cached across invocations
    // in the same isolate). Falls back to null → SMS attempts return an
    // error we log; email path is unaffected.
    const fromId = await resolveOpenPhoneNumberId(OPENPHONE_API_KEY);
    if (!fromId) console.error("OpenPhone number id could not be resolved");

    let adminSmsMessage = "";
    let customerSmsMessage: string | null = null;
    let trustedCustomerPhone: string | null = null;
    let trustedSmsConsent = false;
    let bookingRow: Record<string, unknown> | null = null;

    switch (type) {
      case "booking": {
        if (!bookingId) throw new Error("booking notifications require a bookingId");
        for (let i = 0; i < 4 && !bookingRow; i++) {
          const { data: row } = await supabaseAdmin
            .from("bookings")
            .select(
              "customer_phone, customer_email, customer_name, sms_consent, service_type, frequency, preferred_date, address, beds, baths, sqft, add_ons, total_price, special_instructions, pet_info",
            )
            .eq("id", bookingId)
            .maybeSingle();
          if (row) bookingRow = row as Record<string, unknown>;
          else await new Promise((r) => setTimeout(r, 750));
        }
        adminSmsMessage = formatBookingSms(data);
        if (bookingRow) {
          customerSmsMessage = formatCustomerBookingSms({
            customerName: bookingRow.customer_name,
            serviceType: bookingRow.service_type,
            preferredDate: bookingRow.preferred_date,
            totalPrice: bookingRow.total_price,
          });
          trustedCustomerPhone = (bookingRow.customer_phone as string | null) ?? null;
          trustedSmsConsent = bookingRow.sms_consent === true;
        }
        break;
      }
      case "cleaner_application":
        adminSmsMessage = formatApplicationSms(data);
        break;
      case "contact":
        adminSmsMessage = formatContactSms(data);
        break;
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }

    // ── SMS to all three owners ─────────────────────────────────────
    const ownerResults: { to: string; ok: boolean }[] = [];
    if (fromId) {
      for (const to of OWNER_PHONES) {
        const r = await sendOpenPhoneSms({ apiKey: OPENPHONE_API_KEY, fromId, to, content: adminSmsMessage });
        ownerResults.push({ to, ok: r.ok });
        await logSms({
          to,
          recipientType: "owner",
          messageType: type,
          success: r.ok,
          providerId: r.id,
          errorMessage: r.error,
          bookingId,
        });
      }
    }

    // ── Customer SMS (only if consent + phone verified from DB) ─────
    let customerSmsOk: boolean | null = null;
    if (fromId && customerSmsMessage && trustedSmsConsent && trustedCustomerPhone) {
      let normalized = trustedCustomerPhone.replace(/\D/g, "");
      if (normalized.length === 10) normalized = "+1" + normalized;
      else if (!trustedCustomerPhone.startsWith("+")) normalized = "+" + normalized;
      else normalized = trustedCustomerPhone;
      const r = await sendOpenPhoneSms({
        apiKey: OPENPHONE_API_KEY, fromId, to: normalized, content: customerSmsMessage,
      });
      customerSmsOk = r.ok;
      await logSms({
        to: normalized, recipientType: "customer",
        messageType: `${type}_customer`,
        success: r.ok, providerId: r.id, errorMessage: r.error, bookingId,
      });
    }

    // ── Email notifications (booking only) ──────────────────────────
    let ownerEmailOk: boolean | null = null;
    let customerEmailOk: boolean | null = null;
    if (type === "booking") {
      if (!RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured — skipping booking emails");
      } else {
        const summary: BookingSummary = bookingRow
          ? {
              customerName: bookingRow.customer_name as string,
              customerEmail: bookingRow.customer_email as string,
              customerPhone: bookingRow.customer_phone as string,
              serviceType: bookingRow.service_type as string,
              frequency: bookingRow.frequency as string,
              preferredDate: (data.preferredDate as string) ?? (bookingRow.preferred_date as string),
              address: bookingRow.address as string,
              beds: bookingRow.beds as number | string,
              baths: bookingRow.baths as number | string,
              sqft: bookingRow.sqft as number,
              addOns: (bookingRow.add_ons as string[]) ?? [],
              totalPrice: bookingRow.total_price as number,
              specialInstructions: bookingRow.special_instructions as string,
              petInfo: bookingRow.pet_info as string,
            }
          : {
              customerName: data.customerName as string,
              customerEmail: data.customerEmail as string,
              customerPhone: data.customerPhone as string,
              serviceType: data.serviceType as string,
              frequency: data.frequency as string,
              preferredDate: data.preferredDate as string,
              address: data.address as string,
              beds: data.beds as string,
              baths: data.baths as string,
              sqft: data.sqft as number,
              totalPrice: data.totalPrice as string,
            };

        // Owner email — send once addressed to all three owners
        try {
          const admin = renderAdminBookingEmail(summary);
          const r = await sendResendEmail({
            apiKey: RESEND_API_KEY,
            to: OWNER_EMAILS,
            subject: admin.subject,
            html: admin.html,
            replyTo: summary.customerEmail,
          });
          ownerEmailOk = r.ok;
          if (!r.ok) console.error("Owner email send failed:", r.error);
        } catch (err) {
          console.error("Owner email exception:", err);
        }

        // Customer confirmation email
        if (summary.customerEmail) {
          try {
            const cust = renderCustomerBookingEmail(summary);
            const r = await sendResendEmail({
              apiKey: RESEND_API_KEY,
              to: [summary.customerEmail],
              subject: cust.subject,
              html: cust.html,
            });
            customerEmailOk = r.ok;
            if (!r.ok) console.error("Customer email send failed:", r.error);
          } catch (err) {
            console.error("Customer email exception:", err);
          }
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        owners: ownerResults,
        customerSms: customerSmsOk,
        ownerEmail: ownerEmailOk,
        customerEmail: customerEmailOk,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  } catch (error: any) {
    console.error("send-sms-notification error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};

serve(handler);
