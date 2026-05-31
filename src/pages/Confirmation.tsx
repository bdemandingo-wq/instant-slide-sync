import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Sentry } from "@/lib/sentry";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Phone, Mail, Star, Gift, Clock, MessageSquare, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Booking {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  address: string;
  beds: string;
  baths: string;
  service_type: string;
  frequency: string;
  add_ons: string[] | null;
  total_price: number;
  preferred_date: string;
  pet_info: string | null;
}

const Confirmation = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const key = searchParams.get("k");

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bookingId) { setLoading(false); return; }
    (async () => {
      // Try authenticated read first (admin or owner)
      let { data, error } = await supabase
        .from("bookings")
        .select("id, customer_name, customer_email, customer_phone, address, beds, baths, service_type, frequency, add_ons, total_price, preferred_date, pet_info")
        .eq("id", bookingId)
        .maybeSingle();

      // Fallback for unauthenticated customers: lookup via idempotency key RPC.
      // Retry up to 3 times with backoff because the booking row might still be
      // committing when the redirect lands (BookingForm uses a client-side UUID
      // and navigates immediately on insert success — replication lag or a
      // transient network blip on the RPC would otherwise render "Booking not
      // found" for a real, valid booking).
      if ((!data || error) && key) {
        const attempts = [0, 500, 1500]; // ms backoff before each try
        for (const delay of attempts) {
          if (delay > 0) await new Promise((r) => setTimeout(r, delay));
          const { data: rpcData, error: rpcErr } = await supabase.rpc(
            "get_booking_by_idempotency_key",
            { _booking_id: bookingId, _idempotency_key: key }
          );
          if (rpcErr) {
            console.warn("[Confirmation] idempotency RPC retry:", rpcErr);
            // Only flag to Sentry on the LAST retry — earlier ones are
            // expected race-window misses that resolve naturally.
            if (attempt === 4) {
              Sentry.captureException(
                rpcErr instanceof Error ? rpcErr : new Error(String(rpcErr.message ?? rpcErr)),
                { tags: { area: "confirmation-idempotency-retry-exhausted" } },
              );
            }
            continue;
          }
          if (rpcData && rpcData.length > 0) {
            data = rpcData[0] as Booking;
            break;
          }
        }
      }
      setBooking((data as Booking) ?? null);
      setLoading(false);
    })();
  }, [bookingId, key]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" aria-label="Loading" />
      </div>
    );
  }

  if (!booking) {
    return (
      <>
        <SEOHead title="Booking Confirmation | TIDYWISE" description="Your booking confirmation" canonical="/confirmation" noIndex={true} />
        <div className="min-h-screen flex items-center justify-center bg-muted">
          <Card className="max-w-md mx-4">
            <CardContent className="p-8 text-center">
              <h1 className="text-xl font-bold mb-2">Booking not found</h1>
              <p className="text-muted-foreground mb-4">
                We couldn't find this booking. If you just submitted one, please check your phone for a confirmation text.
              </p>
              <Button onClick={() => navigate("/")}>Return to Home</Button>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  const addOns = booking.add_ons ?? [];
  // Dropped the `!== "null"` string-literal guard — pet_info is
  // either a real string or SQL null. The defensive check was masking
  // any real future bug that produced the literal string "null".
  const hasPets = !!booking.pet_info;

  return (
    <>
      <SEOHead
        title="Booking Confirmed | TIDYWISE"
        description="Your TIDYWISE cleaning service booking has been confirmed."
        canonical={`/confirmation/${booking.id}`}
        noIndex={true}
      />
      <main id="main-content" className="min-h-screen bg-muted flex items-center justify-center py-12 px-4">
        <Card className="max-w-lg w-full shadow-elevated animate-scale-in">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" aria-hidden="true" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
              <p className="text-muted-foreground">Thanks {booking.customer_name?.trim()?.split(/\s+/)[0] || "for booking"} — we'll text you shortly.</p>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-6 space-y-3">
              <h2 className="font-semibold text-foreground mb-4">Booking Summary</h2>
              <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="font-medium">{booking.customer_name}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Phone</span><span className="font-medium">{booking.customer_phone}</span></div>
              <div className="flex justify-between gap-3"><span className="text-muted-foreground">Address</span><span className="font-medium text-right text-sm max-w-[220px] break-words">{booking.address}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Home</span><span className="font-medium">{booking.beds} / {booking.baths} bath</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="font-medium">{booking.preferred_date}</span></div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-8 space-y-3">
              <h2 className="font-semibold text-foreground mb-4">Service Details</h2>
              <div className="flex justify-between"><span className="text-muted-foreground">Service</span><span className="font-medium">{booking.service_type}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Frequency</span><span className="font-medium">{booking.frequency}</span></div>
              {addOns.length > 0 && (
                <div className="flex justify-between gap-3"><span className="text-muted-foreground">Add-Ons</span><span className="font-medium text-right">{addOns.join(", ")}</span></div>
              )}
              {hasPets && (
                <div className="flex justify-between gap-3"><span className="text-muted-foreground">Pets</span><span className="font-medium text-right">{booking.pet_info}</span></div>
              )}
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Total Price</span>
                  <span className="text-2xl font-bold text-primary">
                    {(() => {
                      const n = Number(booking.total_price);
                      if (!Number.isFinite(n) || n <= 0) return "Custom Quote";
                      return `$${n.toFixed(2)}`;
                    })()}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-display font-bold text-foreground mb-4 text-lg">What happens next</h2>
              <ol className="space-y-4">
                {[
                  { icon: Clock, title: "We'll confirm your cleaner within 15 min", desc: "During business hours (9 AM – 6 PM EST), expect a quick text to lock in your time." },
                  { icon: MessageSquare, title: "Text reminder 24 hours before", desc: "We'll send a friendly SMS so you're never caught off-guard." },
                  { icon: Sparkles, title: "Your cleaner arrives ready to make your home spotless", desc: "Vetted, insured, and equipped with eco-friendly supplies." },
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm" aria-hidden="true">{i + 1}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground flex items-center gap-2">
                        <step.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                        {step.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-muted rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Questions? We're here.</p>
              <div className="flex flex-col sm:flex-row gap-3 text-sm">
                <a href="tel:+15615718725" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="w-4 h-4" aria-hidden="true" /> (561) 571-8725
                </a>
                <a href="mailto:support@tidywisecleaning.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail className="w-4 h-4" aria-hidden="true" /> support@tidywisecleaning.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button variant="outline" className="flex-1" asChild>
                <a href="tel:+15615718725" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" aria-hidden="true" /> Call Us Now
                </a>
              </Button>
              <Button className="flex-1" onClick={() => navigate("/")}>
                <Home className="w-4 h-4 mr-2" aria-hidden="true" /> Back to Home
              </Button>
            </div>

            {booking.frequency === "One-Time" && (
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4 text-center">
                <p className="text-sm font-semibold text-foreground mb-1">Save 10–15% every visit</p>
                <p className="text-xs text-muted-foreground">Ask us about bi-weekly or weekly plans when we call.</p>
              </div>
            )}

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-4 flex gap-3 items-start">
              <Gift className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">Know someone who needs a cleaner?</p>
                <p className="text-xs text-muted-foreground mt-0.5">Refer a friend — when they book, you both get a discount.</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-secondary text-secondary" aria-hidden="true" />
                After your clean, we'd love a Google review — it helps us a lot.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Confirmation;
