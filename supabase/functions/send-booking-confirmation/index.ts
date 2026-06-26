import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const OPENPHONE_API_KEY = Deno.env.get("OPENPHONE_API_KEY");
const OPENPHONE_PHONE_NUMBER_ID = "PNr7XukuaV";
const ADMIN_PHONE_NUMBER = "+15615718725";
const PERSONAL_PHONE_NUMBER = "+18137356859";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Caller must supply a bookingId — the function reads phone, consent,
// and all message-bearing fields from the row itself, never trusting
// the body. Closes the open SMS-spam relay the prior schema-only
// validation left wide open: anyone could POST a hand-crafted body to
// send Clean Collective-branded SMS to any phone they wanted.
const requestSchema = z.object({
  bookingId: z.string().uuid(),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    const parseResult = requestSchema.safeParse(rawData);
    if (!parseResult.success) {
      return new Response(
        JSON.stringify({ error: "bookingId (uuid) required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!OPENPHONE_API_KEY) throw new Error("OpenPhone API key not configured");

    // Authoritative booking data from DB, NOT request body.
    const { data: row } = await supabaseAdmin
      .from("bookings")
      .select(
        "customer_name, customer_email, customer_phone, sms_consent, address, beds, baths, sqft, frequency, service_type, add_ons, total_price, preferred_date, special_instructions, pet_info",
      )
      .eq("id", parseResult.data.bookingId)
      .maybeSingle();
    if (!row) {
      return new Response(
        JSON.stringify({ error: "Booking not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const booking = row as Record<string, unknown>;

    // Format customer phone number (E.164)
    let customerPhone = String(booking.customer_phone ?? "").replace(/\D/g, "");
    if (customerPhone.length === 10) {
      customerPhone = "+1" + customerPhone;
    } else if (!customerPhone.startsWith("+")) {
      customerPhone = "+" + customerPhone;
    }

    const addOns = Array.isArray(booking.add_ons) ? (booking.add_ons as string[]) : [];
    const addOnsList = addOns.length > 0 ? addOns.join(", ") : "None";
    const sqft = typeof booking.sqft === "number" ? booking.sqft : 0;

    // SMS to admin
    const adminSms = `New website booking!\n\nCustomer: ${booking.customer_name}\nPhone: ${booking.customer_phone}\nEmail: ${booking.customer_email}\nService: ${booking.service_type}\nDate: ${booking.preferred_date}\nAddress: ${booking.address}\n${booking.beds} bed, ${booking.baths} bath (${sqft.toLocaleString()} sq ft)\nFrequency: ${booking.frequency}\nAdd-Ons: ${addOnsList}\nTotal: $${booking.total_price}\n${booking.special_instructions ? `Notes: ${booking.special_instructions}` : ""}${booking.pet_info ? `\nPets: ${booking.pet_info}` : ""}\n\nLog in to your dashboard to view details.`;

    const adminRes = await fetch("https://api.openphone.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: OPENPHONE_API_KEY },
      body: JSON.stringify({ content: adminSms, from: OPENPHONE_PHONE_NUMBER_ID, to: [ADMIN_PHONE_NUMBER] }),
    });

    if (!adminRes.ok) {
      console.error("Admin SMS error:", await adminRes.text());
    } else {
      console.log("Admin SMS sent");
    }

    // Send to personal number
    const personalRes = await fetch("https://api.openphone.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: OPENPHONE_API_KEY },
      body: JSON.stringify({ content: adminSms, from: OPENPHONE_PHONE_NUMBER_ID, to: [PERSONAL_PHONE_NUMBER] }),
    });

    if (!personalRes.ok) {
      console.error("Personal SMS error:", await personalRes.text());
    } else {
      console.log("Personal SMS sent");
    }

    // SMS to customer — gated on sms_consent stored on the booking row.
    // Prior version sent regardless of consent → TCPA exposure.
    if (booking.sms_consent === true && customerPhone && customerPhone.length > 5) {
      const customerSms = `✅ CLEAN COLLECTIVE Booking Confirmed!\n\n📅 Date: ${booking.preferred_date}\n🧽 Service: ${booking.service_type}\n📍 Address: ${booking.address}\n🏠 ${booking.beds} bed, ${booking.baths} bath (${sqft.toLocaleString()} sq ft)\n🔄 Frequency: ${booking.frequency}\n💰 Total: $${booking.total_price}\n\nPlease be home for the final walkthrough.\n\nThank you for choosing CLEAN COLLECTIVE! Reply STOP to opt out. 💙`;

      const customerRes = await fetch("https://api.openphone.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: OPENPHONE_API_KEY },
        body: JSON.stringify({ content: customerSms, from: OPENPHONE_PHONE_NUMBER_ID, to: [customerPhone] }),
      });

      if (!customerRes.ok) {
        console.error("Customer SMS error:", await customerRes.text());
      } else {
        console.log("Customer SMS sent to:", customerPhone);
      }
    } else {
      console.log("Customer SMS skipped — consent or phone missing on booking row.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Booking confirmation error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
