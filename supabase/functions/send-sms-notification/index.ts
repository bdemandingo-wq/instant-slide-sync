import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const OPENPHONE_API_KEY = Deno.env.get("OPENPHONE_API_KEY");
const OPENPHONE_PHONE_NUMBER_ID = "PNr7XukuaV";
const NOTIFY_PHONE_NUMBER = "+15615718725";
const PERSONAL_PHONE_NUMBER = "+18137356859";

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
  return `New website booking!

Customer: ${data.customerName}
Service: ${data.serviceType} (${data.frequency})
Date: ${data.preferredDate}
Address: ${data.address}
Total: $${data.totalPrice}

Log in to your dashboard to view details.`;
}

function formatCustomerBookingSms(data: Record<string, unknown>): string {
  return `Clean Collective: Thanks ${data.customerName ?? ""}! Your ${data.serviceType ?? "cleaning"} booking for ${data.preferredDate ?? ""} is received. Total: $${data.totalPrice ?? ""}. We'll confirm shortly. Reply STOP to opt out.`;
}

function formatApplicationSms(data: Record<string, unknown>): string {
  const workAreas = (data.workAreas as string[])?.join(", ") || "N/A";
  return `🆕 NEW CLEANER APPLICATION!

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Experience: ${data.yearsExperience} years
Areas: ${workAreas}

Log in to your dashboard to review.`;
}

function formatContactSms(data: Record<string, unknown>): string {
  return `🆕 NEW COMMERCIAL INQUIRY!

Name: ${data.name}
Email: ${data.email}
Message: ${data.message}

Log in to your dashboard to respond.`;
}

async function sendOne(opts: {
  to: string;
  message: string;
  recipientType: "admin" | "personal" | "customer";
  messageType: string;
  bookingId?: string;
}) {
  const { to, message, recipientType, messageType, bookingId } = opts;
  let success = false;
  let providerMessageId: string | null = null;
  let errorMessage: string | null = null;

  try {
    const res = await fetch("https://api.openphone.com/v1/messages", {
      method: "POST",
      headers: {
        "Authorization": OPENPHONE_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
        from: OPENPHONE_PHONE_NUMBER_ID,
        to: [to],
      }),
    });
    // Capture raw text first so we can log it if JSON parsing fails — when
    // OpenPhone returns an HTML error page the silent catch(() => ({}))
    // would otherwise hide the root cause of integration failures.
    const rawBody = await res.text().catch(() => "");
    let body: any = {};
    try {
      body = rawBody ? JSON.parse(rawBody) : {};
    } catch (parseErr) {
      console.warn(
        `SMS response not JSON (${recipientType} → ${to}):`,
        rawBody.slice(0, 500),
        parseErr
      );
    }
    if (!res.ok) {
      errorMessage = `HTTP ${res.status}: ${(rawBody || JSON.stringify(body)).slice(0, 500)}`;
      console.error(`SMS error (${recipientType} → ${to}):`, errorMessage);
    } else {
      success = true;
      providerMessageId = body?.data?.id ?? body?.id ?? null;
      console.log(`SMS sent to ${recipientType} (${to})`, providerMessageId);
    }
  } catch (err: any) {
    errorMessage = err?.message ?? String(err);
    console.error(`SMS exception (${recipientType} → ${to}):`, errorMessage);
  }

  // Log every attempt — wrapped so logging failure can't crash the send
  try {
    await supabaseAdmin.from("sms_send_log").insert({
      recipient: to,
      recipient_type: recipientType,
      message_type: messageType,
      success,
      provider_message_id: providerMessageId,
      error_message: errorMessage,
      related_booking_id: bookingId ?? null,
    });
  } catch (logErr) {
    console.error("Failed to insert sms_send_log:", logErr);
  }

  return { success, providerMessageId, errorMessage };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!OPENPHONE_API_KEY) {
      throw new Error("OPENPHONE_API_KEY is not configured");
    }

    const payload: SmsNotificationRequest = await req.json();
    const { type, data, bookingId } = payload;
    console.log("SMS notification:", type, "bookingId:", bookingId ? "yes" : "no");

    let adminMessage: string;
    let customerMessage: string | null = null;
    let trustedCustomerPhone: string | null = null;
    let trustedSmsConsent = false;

    switch (type) {
      case "booking":
        // Anti-spam: verify that the booking row actually exists, and
        // read customerPhone + smsConsent FROM THE ROW — never from the
        // request body. Previously the function trusted the body, so
        // any anonymous caller could POST {type:'booking', smsConsent:
        // true, customerPhone:'+1...'} and Clean Collective would SMS that
        // number from your OpenPhone account.
        if (!bookingId) {
          throw new Error("booking notifications require a bookingId");
        }
        {
          // The booking row is inserted by the (anonymous) client right
          // before this function is invoked. Occasionally the read here
          // races the write and returns null. Retry a few times before
          // giving up so the customer SMS can still use verified values.
          let row: Record<string, unknown> | null = null;
          for (let attempt = 0; attempt < 4; attempt++) {
            const { data: bookingRow } = await supabaseAdmin
              .from("bookings")
              .select("customer_phone, sms_consent, customer_name, service_type, frequency, preferred_date, address, total_price")
              .eq("id", bookingId)
              .maybeSingle();
            if (bookingRow) {
              row = bookingRow as Record<string, unknown>;
              break;
            }
            await new Promise((r) => setTimeout(r, 750));
          }

          // Admin/personal copy uses the request body — it never depends
          // on the DB read, so the team is always notified.
          adminMessage = formatBookingSms(data);

          if (row) {
            // Verified values for the customer-facing SMS.
            customerMessage = formatCustomerBookingSms({
              customerName: row.customer_name,
              serviceType: row.service_type,
              preferredDate: row.preferred_date,
              totalPrice: row.total_price,
            });
            trustedCustomerPhone = (row.customer_phone as string | null) ?? null;
            trustedSmsConsent = row.sms_consent === true;
          } else {
            // Could not verify the booking row in time. Still send the
            // admin/personal alerts (above); just skip the customer SMS
            // since we cannot confirm consent/phone from the DB.
            console.warn(
              "booking row not found after retries; sending admin/personal SMS only:",
              bookingId,
            );
          }
        }
        break;
      case "cleaner_application":
        adminMessage = formatApplicationSms(data);
        break;
      case "contact":
        adminMessage = formatContactSms(data);
        break;
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }

    // Always send to admin + personal — each in its own try/catch via sendOne
    const adminResult = await sendOne({
      to: NOTIFY_PHONE_NUMBER,
      message: adminMessage,
      recipientType: "admin",
      messageType: type,
      bookingId,
    });
    const personalResult = await sendOne({
      to: PERSONAL_PHONE_NUMBER,
      message: adminMessage,
      recipientType: "personal",
      messageType: type,
      bookingId,
    });

    let customerResult: { success: boolean } | null = null;
    if (customerMessage && trustedSmsConsent && trustedCustomerPhone) {
      customerResult = await sendOne({
        to: trustedCustomerPhone,
        message: customerMessage,
        recipientType: "customer",
        messageType: `${type}_customer`,
        bookingId,
      });
    } else if (customerMessage) {
      console.log("Skipping customer SMS — consent or phone missing on booking row.");
    }

    return new Response(
      JSON.stringify({
        success: true,
        admin: adminResult.success,
        personal: personalResult.success,
        customer: customerResult?.success ?? null,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  } catch (error: any) {
    console.error("Error sending SMS notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  }
};

serve(handler);
