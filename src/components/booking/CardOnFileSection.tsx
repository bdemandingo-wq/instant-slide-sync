// Inline Stripe Elements card capture for the booking form.
//
// Nothing is charged here — this confirms a SetupIntent (usage "off_session")
// so the card is on file and can be charged after the cleaning is complete.
//
// The publishable key comes from src/config/stripe.ts; there is deliberately no
// env var and no publishable key returned from the edge function.

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { Lock } from "lucide-react";
import { STRIPE_PUBLISHABLE_KEY } from "@/config/stripe";
import { supabase } from "@/integrations/supabase/client";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export type CardResult = { customerId: string; paymentMethodId: string } | null;

export interface CardOnFileHandle {
  /** Confirms the card. Never throws — returns null when the card is skipped or fails. */
  confirmCard: (details: { name: string; email: string; phone: string }) => Promise<CardResult>;
}

interface Props {
  email: string;
  name: string;
  phone: string;
}

const CardOnFileInner = forwardRef<CardOnFileHandle, Props>(({ email, name, phone }, ref) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<string | null>(null);
  const intent = useRef<{ clientSecret: string; customerId: string } | null>(null);
  const requestedFor = useRef<string>("");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // Create the SetupIntent as soon as we have a usable email, so the customer
  // isn't waiting on a round-trip at submit time.
  const ensureIntent = async () => {
    if (intent.current) return intent.current;
    if (!emailValid) return null;
    try {
      const { data, error } = await supabase.functions.invoke("create-setup-intent", {
        body: { email: email.trim(), name, phone },
      });
      if (error || !data?.clientSecret) {
        console.error("[CardOnFile] create-setup-intent failed:", error ?? data);
        return null;
      }
      intent.current = { clientSecret: data.clientSecret, customerId: data.customerId };
      return intent.current;
    } catch (err) {
      console.error("[CardOnFile] create-setup-intent threw:", err);
      return null;
    }
  };

  useEffect(() => {
    const key = email.trim().toLowerCase();
    if (!emailValid || requestedFor.current === key) return;
    requestedFor.current = key;
    intent.current = null;
    void ensureIntent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, emailValid]);

  useImperativeHandle(ref, () => ({
    async confirmCard(details) {
      setCardError(null);
      try {
        if (!stripe || !elements) return null;
        const card = elements.getElement(CardElement);
        if (!card) return null;

        const si = await ensureIntent();
        if (!si) return null;

        const { setupIntent, error } = await stripe.confirmCardSetup(si.clientSecret, {
          payment_method: {
            card,
            billing_details: {
              name: details.name || undefined,
              email: details.email || undefined,
              phone: details.phone || undefined,
            },
          },
        });

        if (error || !setupIntent?.payment_method) {
          if (error?.message) setCardError(error.message);
          console.error("[CardOnFile] confirmCardSetup failed:", error);
          return null;
        }

        const paymentMethodId =
          typeof setupIntent.payment_method === "string"
            ? setupIntent.payment_method
            : setupIntent.payment_method.id;

        return { customerId: si.customerId, paymentMethodId };
      } catch (err) {
        console.error("[CardOnFile] confirmCard threw:", err);
        return null;
      }
    },
  }));

  return (
    <fieldset className="space-y-3 rounded-lg border border-border p-4">
      <legend className="px-1 text-sm font-semibold text-foreground flex items-center gap-2">
        <Lock className="w-4 h-4 text-primary" aria-hidden="true" /> Card on file
      </legend>
      <p className="text-sm text-muted-foreground">
        Your card is stored securely by Stripe. Nothing is charged today.
      </p>
      <div className="rounded-md border border-input bg-background px-3 py-3">
        <CardElement
          options={{
            hidePostalCode: false,
            style: {
              base: {
                fontSize: "16px",
                color: "hsl(var(--foreground))",
                "::placeholder": { color: "hsl(var(--muted-foreground))" },
              },
            },
          }}
          onChange={(e) => setCardError(e.error?.message ?? null)}
        />
      </div>
      {cardError && <p className="text-sm text-destructive">{cardError}</p>}
    </fieldset>
  );
});
CardOnFileInner.displayName = "CardOnFileInner";

const CardOnFileSection = forwardRef<CardOnFileHandle, Props>((props, ref) => (
  <Elements stripe={stripePromise}>
    <CardOnFileInner {...props} ref={ref} />
  </Elements>
));
CardOnFileSection.displayName = "CardOnFileSection";

export default CardOnFileSection;
