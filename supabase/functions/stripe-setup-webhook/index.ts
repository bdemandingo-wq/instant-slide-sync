// Stripe webhook: records the saved payment method once card setup completes.
// No charge is involved.
//
// verify_jwt = false — Stripe cannot send a Supabase JWT. Authenticity is
// enforced by verifying the Stripe signature against STRIPE_WEBHOOK_SECRET,
// BEFORE anything else runs. Unsigned or mis-signed requests are rejected 400.

import { createClient } from "npm:@supabase/supabase-js@2";
import Stripe from "npm:stripe@14.25.0";

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const stripeKey    = Deno.env.get("STRIPE_SECRET_KEY");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!stripeKey || !webhookSecret) {
    console.error("Stripe env not configured");
    return new Response("Stripe not configured", { status: 500 });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2024-06-20" });
  const signature = req.headers.get("stripe-signature");
  const raw = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      raw,
      signature ?? "",
      webhookSecret,
      undefined,
      Stripe.createSubtleCryptoProvider(),
    );
  } catch (err) {
    console.error("Signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    if (event.type === "setup_intent.succeeded") {
      const intent = event.data.object as Stripe.SetupIntent;
      const bookingId = intent.metadata?.booking_id;
      const paymentMethodId =
        typeof intent.payment_method === "string"
          ? intent.payment_method
          : intent.payment_method?.id ?? null;
      const customerId =
        typeof intent.customer === "string" ? intent.customer : intent.customer?.id ?? null;

      if (bookingId && paymentMethodId) {
        const { error } = await supabase
          .from("bookings")
          .update({
            stripe_payment_method_id: paymentMethodId,
            stripe_customer_id: customerId ?? undefined,
            card_on_file_status: "saved",
            card_saved_at: new Date().toISOString(),
          })
          .eq("id", bookingId);
        if (error) console.error("Booking update failed:", error);
      }

      // Make the saved card the default for future off-session charges.
      if (paymentMethodId && customerId) {
        try {
          await stripe.customers.update(customerId, {
            invoice_settings: { default_payment_method: paymentMethodId },
          });
        } catch (err) {
          console.error("Default payment method update failed:", err);
        }
      }
    } else if (event.type === "setup_intent.setup_failed") {
      const intent = event.data.object as Stripe.SetupIntent;
      const bookingId = intent.metadata?.booking_id;
      if (bookingId) {
        await supabase
          .from("bookings")
          .update({ card_on_file_status: "failed" })
          .eq("id", bookingId);
      }
    }
  } catch (err) {
    console.error("Webhook handling error:", err);
    return new Response("Handler error", { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
