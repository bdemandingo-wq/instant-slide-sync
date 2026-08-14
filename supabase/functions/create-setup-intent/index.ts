// Creates a Stripe SetupIntent so the customer can enter a card INLINE in the
// booking form (Stripe Elements) before "Confirm My Booking".
//
// Nothing is charged: the card is saved off_session and charged after the
// cleaning is complete.
//
// Adapted from the TidyWise site's version. Deliberate differences, all verified:
//   - no rate limit: check_rate_limit does not exist in this database
//   - no publishable key: the frontend holds it in src/config/stripe.ts, so this
//     function must not require or return one
//   - ORG_ID is a hardcoded literal, not a secret. TidyWise reads it from
//     CRM_ORGANIZATION_ID and omits the metadata entirely when unset — a silent
//     failure mode that makes every saved card invisible to the CRM.

import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import Stripe from "npm:stripe@14.25.0";

// The CRM matches Stripe customers to this organisation on exactly this value.
// get-customer-card filters: c.metadata?.organization_id === organizationId
const ORG_ID = "0ddb3567-4641-48c8-8ff7-4bf1b87681da";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
  if (!stripeKey) return json({ error: "Stripe is not configured" }, 500);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const email = String(body?.email ?? "").trim().slice(0, 255);
  const name  = String(body?.name  ?? "").trim().slice(0, 200);
  const phone = String(body?.phone ?? "").trim().slice(0, 40);
  if (!EMAIL_RE.test(email)) return json({ error: "A valid email is required" }, 400);

  try {
    const stripe = new Stripe(stripeKey, { apiVersion: "2024-06-20" });

    // Match on email, then ensure EVERY matching customer carries the org id.
    // Without this backfill a customer created by any other flow stays
    // permanently invisible to the CRM, even once a card is attached.
    const existing = await stripe.customers.list({ email, limit: 10 });
    for (const c of existing.data) {
      if (c.metadata?.organization_id !== ORG_ID) {
        try {
          await stripe.customers.update(c.id, {
            metadata: { ...(c.metadata ?? {}), organization_id: ORG_ID },
          });
        } catch (err) {
          console.error("Customer metadata backfill failed:", c.id, err);
        }
      }
    }

    const customer = existing.data[0] ??
      (await stripe.customers.create({
        email,
        name: name || undefined,
        phone: phone || undefined,
        metadata: { organization_id: ORG_ID },
      }));

    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      usage: "off_session",
      payment_method_types: ["card"],
      metadata: { source: "booking_form_inline", organization_id: ORG_ID },
    });

    return json({
      clientSecret: setupIntent.client_secret,
      customerId: customer.id,
      setupIntentId: setupIntent.id,
    });
  } catch (err) {
    console.error("create-setup-intent failed:", err);
    return json({ error: "Could not start secure card entry" }, 502);
  }
});
