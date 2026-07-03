// Forwards a newly-created Clean Collective booking to the external CRM ingest endpoint.
// The shared secret (EXTERNAL_BOOKING_INGEST_KEY) stays server-side and is never
// exposed to the browser. Failures are non-fatal to the booking flow.

import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const CRM_INGEST_URL =
  "https://slwfkaqczvwvvvavkgpr.supabase.co/functions/v1/ingest-external-booking";

// Map Clean Collective labels/keys -> CRM's accepted frequency enum
// (recurring_bookings_frequency_check). Anything unrecognized => one_time.
function normalizeFrequency(input: unknown): string {
  const v = String(input ?? "").toLowerCase().replace(/[\s_-]/g, "");
  if (v.includes("week") && (v.includes("bi") || v.includes("2"))) return "biweekly";
  if (v.includes("week")) return "weekly";
  if (v.includes("month")) return "monthly";
  return "one_time";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const ingestKey = Deno.env.get("EXTERNAL_BOOKING_INGEST_KEY");
  if (!ingestKey) {
    return new Response(
      JSON.stringify({ error: "EXTERNAL_BOOKING_INGEST_KEY not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Map Clean Collective booking fields -> CRM ingest payload
  const payload = {
    organization_id: "0ddb3567-4641-48c8-8ff7-4bf1b87681da",
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    address: body.address ?? null,
    scheduled_at: body.scheduled_at,
    service: body.service ?? null,
    total_amount: Number.isFinite(+body.total_amount) ? +body.total_amount : 0,
    frequency: normalizeFrequency(body.frequency),
    bathrooms: body.bathrooms ?? null,
    square_footage: body.square_footage ?? null,
    extras: Array.isArray(body.extras) ? body.extras : [],
    notes: body.notes ?? null,
  };

  try {
    const res = await fetch(CRM_INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ingestKey,
      },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
    return new Response(JSON.stringify({ ok: res.ok, status: res.status, crm: data }), {
      status: res.ok ? 200 : 502,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to reach CRM", details: String(err) }),
      { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
