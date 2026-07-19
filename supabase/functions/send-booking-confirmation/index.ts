import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { resolveOpenPhoneNumberId, sendOpenPhoneSms } from "../_shared/openphone.ts";
import {
  OWNER_EMAILS,
  renderAdminBookingEmail,
  renderCustomerBookingEmail,
  sendGmailEmail,
  type BookingSummary,
} from "../_shared/booking-emails.ts";

const OPENPHONE_API_KEY = Deno.env.get("OPENPHONE_API_KEY");
const GMAIL_APP_PASSWORD = Deno.env.get("GMAIL_APP_PASSWORD");


const OWNER_PHONES = ["+18137356859", "+14076987080", "+18136653189"];

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const requestSchema = z.object({ bookingId: z.string().uuid() });

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const rawData = await req.json();
    const parsed = requestSchema.safeParse(rawData);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: "bookingId (uuid) required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (!OPENPHONE_API_KEY) throw new Error("OPENPHONE_API_KEY not configured");

    const { data: row } = await supabaseAdmin
      .from("bookings")
      .select(
        "customer_name, customer_email, customer_phone, sms_consent, address, beds, baths, sqft, frequency, service_type, add_ons, total_price, preferred_date, special_instructions, pet_info",
      )
      .eq("id", parsed.data.bookingId)
      .maybeSingle();

    if (!row) {
      return new Response(JSON.stringify({ error: "Booking not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const booking = row as Record<string, unknown>;

    const fromId = await resolveOpenPhoneNumberId(OPENPHONE_API_KEY);
    if (!fromId) console.error("Could not resolve OpenPhone number id");

    let customerPhone = String(booking.customer_phone ?? "").replace(/\D/g, "");
    if (customerPhone.length === 10) customerPhone = "+1" + customerPhone;
    else if (!customerPhone.startsWith("+")) customerPhone = "+" + customerPhone;

    const addOns = Array.isArray(booking.add_ons) ? (booking.add_ons as string[]) : [];
    const addOnsList = addOns.length ? addOns.join(", ") : "None";
    const sqft = typeof booking.sqft === "number" ? booking.sqft : 0;

    const adminSms = `New Clean Collective booking!\n\nCustomer: ${booking.customer_name}\nPhone: ${booking.customer_phone}\nEmail: ${booking.customer_email}\nService: ${booking.service_type}\nDate: ${booking.preferred_date}\nAddress: ${booking.address}\n${booking.beds} bed, ${booking.baths} bath (${sqft.toLocaleString()} sq ft)\nFrequency: ${booking.frequency}\nAdd-Ons: ${addOnsList}\nTotal: $${booking.total_price}${booking.special_instructions ? `\nNotes: ${booking.special_instructions}` : ""}${booking.pet_info ? `\nPets: ${booking.pet_info}` : ""}`;

    // Owner SMS blast
    if (fromId) {
      for (const to of OWNER_PHONES) {
        const r = await sendOpenPhoneSms({ apiKey: OPENPHONE_API_KEY, fromId, to, content: adminSms });
        if (!r.ok) console.error(`Owner SMS ${to} failed:`, r.error);
      }
    }

    // Customer SMS (consent-gated)
    if (fromId && booking.sms_consent === true && customerPhone.length > 5) {
      const customerSms = `Clean Collective Booking Confirmed!\n\nDate: ${booking.preferred_date}\nService: ${booking.service_type}\nAddress: ${booking.address}\n${booking.beds} bed, ${booking.baths} bath (${sqft.toLocaleString()} sq ft)\nFrequency: ${booking.frequency}\nTotal: $${booking.total_price}\n\nThank you! Reply STOP to opt out.`;
      const r = await sendOpenPhoneSms({ apiKey: OPENPHONE_API_KEY, fromId, to: customerPhone, content: customerSms });
      if (!r.ok) console.error("Customer SMS failed:", r.error);
    }

    // Emails
    if (RESEND_API_KEY) {
      const summary: BookingSummary = {
        customerName: booking.customer_name as string,
        customerEmail: booking.customer_email as string,
        customerPhone: booking.customer_phone as string,
        serviceType: booking.service_type as string,
        frequency: booking.frequency as string,
        preferredDate: booking.preferred_date as string,
        address: booking.address as string,
        beds: booking.beds as string | number,
        baths: booking.baths as string | number,
        sqft,
        addOns,
        totalPrice: booking.total_price as number,
        specialInstructions: booking.special_instructions as string,
        petInfo: booking.pet_info as string,
      };

      try {
        const admin = renderAdminBookingEmail(summary);
        const r = await sendResendEmail({
          apiKey: RESEND_API_KEY, to: OWNER_EMAILS,
          subject: admin.subject, html: admin.html,
          replyTo: summary.customerEmail,
        });
        if (!r.ok) console.error("Owner email failed:", r.error);
      } catch (e) { console.error("Owner email exception:", e); }

      if (summary.customerEmail) {
        try {
          const cust = renderCustomerBookingEmail(summary);
          const r = await sendResendEmail({
            apiKey: RESEND_API_KEY, to: [summary.customerEmail],
            subject: cust.subject, html: cust.html,
          });
          if (!r.ok) console.error("Customer email failed:", r.error);
        } catch (e) { console.error("Customer email exception:", e); }
      }
    } else {
      console.error("RESEND_API_KEY not configured — skipping booking emails");
    }

    return new Response(JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("send-booking-confirmation error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
