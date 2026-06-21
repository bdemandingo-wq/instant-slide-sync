import { useEffect, useMemo, useRef, useState } from "react";
import { Sentry } from "@/lib/sentry";
import SEOHead from "@/components/seo/SEOHead";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { format } from "date-fns";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, User, Mail, Phone, Home, MapPin, MessageSquare, CalendarIcon, AlertTriangle, Shield, Star, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import {
  ADD_ONS,
  FREQUENCIES,
  SERVICES,
  SERVICE_INCLUSIONS,
  AUTO_INCLUDED_ADDONS,
  SQFT_MIN,
  SQFT_MAX,
  SQFT_STEP,
  SQFT_DEFAULT,
  computePrice,
  getServiceMeta,
  loadPricingTiers,
  supportsFrequency,
  estimateHours,
  formatHours,
  isUnitAddOn,
  type ServiceKey,
  type AddOnQuantities,
} from "@/lib/pricing";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Minus, Plus } from "lucide-react";

interface IncomingState {
  service?: ServiceKey;
  sqft?: number;
  frequency?: string;
  addOnIds?: string[];
  addOnQuantities?: AddOnQuantities;
}

// Selectable arrival windows. Value is 24h "HH:mm"; label is customer-friendly.
const TIME_SLOTS: { value: string; label: string }[] = [
  { value: "08:00", label: "8:00 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
];

// Zod schema mirroring DB constraints
const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone must be at least 10 digits")
    .max(20, "Phone too long")
    .regex(/^[\d\s()+\-.]+$/, "Phone contains invalid characters"),
  address: z.string().trim().min(5, "Address required").max(300, "Address too long"),
  baths: z.string().min(1, "Select bathroom count"),
  specialInstructions: z.string().trim().max(2000, "Instructions too long").optional(),
  hasPets: z.boolean(),
  petInfo: z.string().trim().max(500, "Pet info too long").optional(),
  smsConsent: z.literal(true, {
    errorMap: () => ({ message: "SMS consent is required to receive booking updates" }),
  }),
});

type BookingErrors = Partial<Record<keyof z.infer<typeof bookingSchema>, string>>;

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const incoming = (location.state as IncomingState | null) ?? null;

  // Defaults if user lands without state — sensible fallbacks rather than redirect
  const [service, setService] = useState<ServiceKey>(incoming?.service ?? "standard");
  const [sqft, setSqft] = useState<number>(incoming?.sqft ?? SQFT_DEFAULT);
  const [frequency, setFrequency] = useState<string>(incoming?.frequency ?? "onetime");
  const [userAddOnIds, setUserAddOnIds] = useState<string[]>(
    (incoming?.addOnIds ?? []).filter((id) => !(AUTO_INCLUDED_ADDONS[incoming?.service ?? "standard"] ?? []).includes(id))
  );
  const [addOnQuantities, setAddOnQuantities] = useState<AddOnQuantities>(incoming?.addOnQuantities ?? {});
  const [tiers, setTiers] = useState<Awaited<ReturnType<typeof loadPricingTiers>>>([]);
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());

  const [formData, setFormData] = useState({
    name: "",
    email: user?.email ?? "",
    phone: "",
    address: "",
    baths: "",
    specialInstructions: "",
    hasPets: false,
    petInfo: "",
    smsConsent: false,
  });
  const [preferredDate, setPreferredDate] = useState<Date | undefined>();
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [errors, setErrors] = useState<BookingErrors>({});
  const [dateError, setDateError] = useState<string | null>(null);
  const [timeError, setTimeError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Idempotency key generated once per mount; ensures retries don't double-book.
  const idempotencyKey = useRef<string>(crypto.randomUUID());

  // Load pricing tiers + blocked dates on mount. Both fetches need surfaced
  // failures: tiers→[] silently shows $0 pricing, blocked_dates→empty Set
  // means users can book on dates we've explicitly blocked off.
  useEffect(() => {
    loadPricingTiers()
      .then(setTiers)
      .catch((err) => {
        console.error("[BookingForm] Failed to load pricing tiers:", err);
        toast({
          title: "Couldn't load pricing",
          description: "Please refresh the page. If this keeps happening, call us at (561) 571-8725.",
          variant: "destructive",
        });
      });
    supabase
      .from("booking_blocked_dates")
      .select("blocked_date")
      .then(({ data, error }) => {
        if (error) {
          console.error("[BookingForm] Failed to load blocked dates:", error);
          toast({
            title: "Couldn't load schedule",
            description: "Please refresh — the calendar may show unavailable dates as available.",
            variant: "destructive",
          });
          return;
        }
        if (data) setBlockedDates(new Set(data.map((d) => d.blocked_date)));
      });
  }, []);

  // Sync email if user signs in mid-flow
  useEffect(() => {
    if (user?.email && !formData.email) {
      setFormData((prev) => ({ ...prev, email: user.email! }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Date constraints — Eastern time aware (server enforces too).
  // Anchor "today" to Eastern time directly so a user booking from another
  // timezone (PT/MT/HI customer) doesn't see a window shifted by hours
  // around midnight or DST transitions. The server validates the final
  // value via a trigger so this is purely client UX.
  const { minDate, maxDate } = useMemo(() => {
    // Build today's Y/M/D in America/New_York then construct local Dates
    // with those components — the calendar component cares about Date
    // calendar-day comparisons, not the absolute instant.
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date());
    const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? "0");
    const todayET = new Date(get("year"), get("month") - 1, get("day"));
    const min = new Date(todayET);
    min.setDate(min.getDate() + 2);
    min.setHours(0, 0, 0, 0);
    const max = new Date(todayET);
    max.setDate(max.getDate() + 90);
    max.setHours(23, 59, 59, 999);
    return { minDate: min, maxDate: max };
  }, []);

  const autoIncluded = AUTO_INCLUDED_ADDONS[service] ?? [];
  const inclusions = SERVICE_INCLUSIONS[service] ?? [];
  const isCustomService = service === "carpets" || service === "upholstery";
  const showFrequency = supportsFrequency(service);

  // Force one-time when switching to a service that doesn't support frequency
  useEffect(() => {
    if (!showFrequency && frequency !== "onetime") setFrequency("onetime");
  }, [showFrequency, frequency]);

  const addOnIds = useMemo(() => {
    const set = new Set([...userAddOnIds, ...autoIncluded]);
    return Array.from(set);
  }, [userAddOnIds, autoIncluded]);

  const breakdown = useMemo(
    () =>
      computePrice(tiers, {
        service,
        sqft,
        frequency,
        addOnIds,
        addOnQuantities,
      }),
    [tiers, service, sqft, frequency, addOnIds, addOnQuantities],
  );

  const hours = useMemo(() => estimateHours(service, sqft), [service, sqft]);

  const meta = getServiceMeta(service);
  const isCustomQuote = breakdown.isCustom;

  const handleField = <K extends keyof typeof formData>(field: K, value: typeof formData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof BookingErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleAddOn = (id: string) => {
    if (autoIncluded.includes(id)) return;
    setUserAddOnIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      if (!prev.includes(id)) {
        const def = ADD_ONS.find((a) => a.id === id);
        if (def && isUnitAddOn(def) && !addOnQuantities[id]) {
          setAddOnQuantities((q) => ({ ...q, [id]: 1 }));
        }
      }
      return next;
    });
  };

  const adjustQty = (id: string, delta: number) => {
    setAddOnQuantities((prev) => {
      const cur = prev[id] ?? 1;
      const next = Math.max(1, Math.min(20, cur + delta));
      return { ...prev, [id]: next };
    });
  };

  const isDateDisabled = (date: Date) => {
    if (date < minDate || date > maxDate) return true;
    const iso = format(date, "yyyy-MM-dd");
    return blockedDates.has(iso);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // hard guard against double-tap

    // Validate date
    if (!preferredDate) {
      setDateError("Please select a preferred date");
      return;
    }
    setDateError(null);

    // Validate form
    const parsed = bookingSchema.safeParse(formData);
    if (!parsed.success) {
      const next: BookingErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof BookingErrors;
        if (k && !next[k]) next[k] = issue.message;
      }
      setErrors(next);
      toast({
        title: "Please fix the highlighted fields",
        description: "Some required information is missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceLabel = meta?.label ?? service;
      const freqLabel = FREQUENCIES.find((f) => f.key === frequency)?.label ?? frequency;
      const addOnLabels = addOnIds
        .map((id) => {
          const a = ADD_ONS.find((x) => x.id === id);
          if (!a) return null;
          const qty = addOnQuantities[id] ?? 1;
          return isUnitAddOn(a) && !autoIncluded.includes(id) && qty > 1
            ? `${a.label} ×${qty}`
            : a.label;
        })
        .filter(Boolean) as string[];

      // Generate ID client-side so we don't need a post-insert SELECT
      // (anonymous users have no SELECT policy on bookings — by design)
      const bookingId = crypto.randomUUID();

      const bookingData = {
        id: bookingId,
        customer_name: parsed.data.name,
        customer_email: parsed.data.email,
        customer_phone: parsed.data.phone,
        address: parsed.data.address,
        beds: `${sqft.toLocaleString()} sq ft`,
        baths: parsed.data.baths,
        sqft,
        service_type: serviceLabel,
        frequency: freqLabel,
        add_ons: addOnLabels,
        total_price: isCustomQuote ? 0 : breakdown.total,
        preferred_date: format(preferredDate, "yyyy-MM-dd"),
        special_instructions: parsed.data.specialInstructions || null,
        pet_info: parsed.data.hasPets
          ? parsed.data.petInfo || "Yes"
          : null,
        status: "pending" as const,
        idempotency_key: idempotencyKey.current,
      };

      const { error: dbError } = await supabase
        .from("bookings")
        .insert(bookingData);

      if (dbError) {
        // Unique violation on idempotency_key = duplicate submit; recover via RPC
        if (dbError.code === "23505") {
          navigate(`/confirmation/${bookingId}?k=${encodeURIComponent(idempotencyKey.current)}`, { replace: true });
          return;
        }
        console.error("Database error:", dbError);
        Sentry.captureException(dbError, { tags: { area: "booking-submit" } });
        toast({
          title: "Couldn't save your booking",
          description: dbError.message.includes("Bookings must be") || dbError.message.includes("unavailable")
            ? dbError.message
            : "Please try again or call us at (561) 571-8725.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // GA4 conversion
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "booking",
          event_label: serviceLabel,
          value: breakdown.total || 0,
          currency: "USD",
        });
      }

      // Forward booking to external CRM calendar (non-fatal).
      try {
        await supabase.functions.invoke("forward-booking-to-crm", {
          body: {
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone,
            address: parsed.data.address,
            scheduled_at: new Date(`${format(preferredDate, "yyyy-MM-dd")}T14:00:00`).toISOString(),
            service: serviceLabel,
            total_amount: isCustomQuote ? 0 : breakdown.total,
            frequency: freqLabel,
            bathrooms: parsed.data.baths,
            square_footage: sqft.toString(),
            extras: addOnLabels,
            notes: parsed.data.specialInstructions || null,
          },
        });
      } catch (crmErr) {
        console.error("[BookingForm] forward-booking-to-crm failed:", crmErr);
      }



      // SMS notification (admin + personal + customer if consent).
      // Non-fatal to the booking flow but admin needs visibility — previously
      // failures only hit console.error, so a dead OpenPhone integration
      // would silently stop sending us booking alerts and we wouldn't notice
      // until a customer complained nobody contacted them.
      try {
        const { error: smsErr } = await supabase.functions.invoke("send-sms-notification", {
          body: {
            type: "booking",
            bookingId,
            customerPhone: parsed.data.phone,
            smsConsent: parsed.data.smsConsent === true,
            data: {
              bookingId,
              customerName: parsed.data.name,
              customerEmail: parsed.data.email,
              customerPhone: parsed.data.phone,
              address: parsed.data.address,
              serviceType: serviceLabel,
              frequency: freqLabel,
              beds: `${sqft.toLocaleString()} sq ft`,
              baths: parsed.data.baths,
              sqft,
              totalPrice: isCustomQuote ? "Custom Quote" : breakdown.total.toString(),
              preferredDate: format(preferredDate, "EEEE, MMMM d, yyyy"),
              smsConsent: parsed.data.smsConsent === true,
            },
          },
        });
        if (smsErr) {
          console.error("[BookingForm] send-sms-notification returned error:", smsErr);
          Sentry.captureException(smsErr instanceof Error ? smsErr : new Error(String(smsErr)), {
            tags: { area: "booking-sms-notification" },
          });
        }
      } catch (smsError) {
        console.error("[BookingForm] send-sms-notification threw:", smsError);
        Sentry.captureException(smsError instanceof Error ? smsError : new Error(String(smsError)), {
          tags: { area: "booking-sms-notification" },
        });
        // Non-fatal — booking still succeeded
      }

      // Replace history so back button doesn't return to the form
      navigate(`/confirmation/${bookingId}?k=${encodeURIComponent(idempotencyKey.current)}`, { replace: true });
    } catch (error) {
      console.error("Booking error:", error);
      Sentry.captureException(error instanceof Error ? error : new Error(String(error)), {
        tags: { area: "booking-submit" },
      });
      toast({
        title: "Something went wrong",
        description: "Please try again or call us at (561) 571-8725.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Book Cleaning Online | TIDYWISE South Florida"
        description="Book a TIDYWISE house cleaning in 60 seconds. Flat-rate quote, vetted cleaners, free re-clean guarantee. Serving Broward, Palm Beach & Miami-Dade."
        canonical="/booking"
      />
      <main id="main-content" className="min-h-screen bg-muted pb-32 md:pb-12">
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your South Florida Cleaning in 60 Seconds
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Instant pricing. Flexible scheduling. Vetted, insured cleaners.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Easy online booking</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Transparent pricing</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 4.9★ rated by 127+ customers</div>
            </div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto py-12 px-4">
          <button
            onClick={() => navigate("/#booking")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to pricing
          </button>

          {user && (
            <div className="mb-4 text-sm text-muted-foreground">
              Booking as <span className="font-medium text-foreground">{user.email}</span>
            </div>
          )}

          <Card className="shadow-elevated animate-scale-in">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Almost Done!</h2>
                <p className="text-muted-foreground">Lock in your price — takes under 2 minutes.</p>
              </div>

              {/* If tiers failed to load, never let the user submit a $0
                  booking. The pricing-load toast already warned them; this
                  banner reinforces and the disabled submit lower down does
                  the actual blocking. */}
              {tiers.length === 0 && !isCustomService && (
                <div className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm">
                  <p className="font-semibold text-destructive mb-1">Pricing unavailable</p>
                  <p className="text-foreground/80">
                    Please refresh the page. If this keeps happening, call us at (561) 571-8725 and we'll book you over the phone.
                  </p>
                </div>
              )}

              {/* Live Booking Summary */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Your Service</p>
                    <p className="font-semibold text-foreground">
                      {meta?.label}{showFrequency ? ` • ${FREQUENCIES.find((f) => f.key === frequency)?.label}` : ""}
                    </p>
                    <p className="text-sm text-muted-foreground">{sqft.toLocaleString()} sq ft</p>
                    {hours !== null && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        Est. {formatHours(hours)}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Estimated Total</p>
                    {isCustomQuote ? (
                      <p className="text-xl font-bold text-primary">Custom Quote</p>
                    ) : (
                      <>
                        <p className="text-2xl font-bold text-primary">${breakdown.total}</p>
                        {breakdown.needsConfirmation ? (
                          <p className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                            <Phone className="w-3 h-3" aria-hidden="true" />
                            Call to confirm
                          </p>
                        ) : (
                          <p className="text-xs text-muted-foreground">{breakdown.range}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* What's Included */}
                <div className="border-t border-primary/10 pt-3">
                  <p className="text-sm font-medium text-foreground mb-2">What's Included</p>
                  {isCustomService ? (
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      Custom quote — call us at{" "}
                      <a href="tel:+15615718725" className="text-primary font-medium underline">(561) 571-8725</a> for a personalized estimate.
                    </p>
                  ) : (
                    <ul className="space-y-1">
                      {inclusions.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {addOnIds.length > 0 && (
                  <div className="text-sm text-muted-foreground border-t border-primary/10 pt-2">
                    <span className="font-medium text-foreground">Add-ons:</span> {addOnIds.map((id) => ADD_ONS.find((a) => a.id === id)?.label).filter(Boolean).join(", ")}
                  </div>
                )}
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wide">Need Same / Next Day?</p>
                  <p className="text-sm text-amber-700 dark:text-amber-500">
                    Call us directly at <a href="tel:+15615718725" className="font-semibold underline">(561) 571-8725</a> — we'll fit you in.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Service editor (let users tweak from the form) */}
                <fieldset className="space-y-4">
                  <legend className="font-semibold text-foreground flex items-center gap-2">
                    <Home className="w-4 h-4 text-primary" /> Service Details
                  </legend>
                  <div className={`grid grid-cols-1 ${showFrequency ? "sm:grid-cols-2" : ""} gap-4`}>
                    <div className="space-y-2">
                      <Label htmlFor="bf-service">Service Type</Label>
                      <Select value={service} onValueChange={(v) => setService(v as ServiceKey)}>
                        <SelectTrigger id="bf-service"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => <SelectItem key={s.key} value={s.key}>{s.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    {showFrequency && (
                      <div className="space-y-2">
                        <Label htmlFor="bf-freq">Frequency</Label>
                        <Select value={frequency} onValueChange={setFrequency}>
                          <SelectTrigger id="bf-freq"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {FREQUENCIES.map((f) => (
                              <SelectItem key={f.key} value={f.key}>
                                {f.label}{f.baseDiscount > 0 ? ` (${Math.round(f.baseDiscount * 100)}% off)` : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="bf-size">Property Size</Label>
                      <span className="text-primary font-bold text-sm">{sqft.toLocaleString()} sq ft</span>
                    </div>
                    <Slider
                      id="bf-size"
                      value={[sqft]}
                      onValueChange={(v) => setSqft(v[0])}
                      min={SQFT_MIN}
                      max={SQFT_MAX}
                      step={SQFT_STEP}
                      className="py-2"
                      aria-label="Property size in square feet"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{SQFT_MIN.toLocaleString()} sq ft</span>
                      <span>{SQFT_MAX.toLocaleString()} sq ft</span>
                    </div>
                    {hours !== null && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        Estimated time: <span className="font-medium text-foreground">{formatHours(hours)}</span>
                      </p>
                    )}
                  </div>
                </fieldset>

                {/* Add-ons editable (hidden for custom services) */}
                {!isCustomService && (
                  <fieldset className="space-y-3">
                    <legend className="font-semibold text-foreground">Add-Ons (optional)</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ADD_ONS.map((a) => {
                        const isAuto = autoIncluded.includes(a.id);
                        const checked = isAuto || userAddOnIds.includes(a.id);
                        const isUnit = isUnitAddOn(a);
                        const qty = addOnQuantities[a.id] ?? 1;
                        const lineTotal = isAuto ? 0 : a.basePrice * (isUnit ? qty : 1);
                        return (
                          <div
                            key={a.id}
                            className={`flex flex-col gap-2 p-2 rounded-md border text-sm ${
                              isAuto
                                ? "border-border bg-muted opacity-70"
                                : checked
                                  ? "border-primary bg-primary/5"
                                  : "border-border"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Checkbox
                                id={`bf-addon-${a.id}`}
                                checked={checked}
                                disabled={isAuto}
                                onCheckedChange={() => toggleAddOn(a.id)}
                              />
                              <label
                                htmlFor={`bf-addon-${a.id}`}
                                className={`flex-1 flex items-center gap-1.5 flex-wrap ${isAuto ? "cursor-not-allowed" : "cursor-pointer"}`}
                              >
                                <span className="font-medium">{a.label}</span>
                                {isAuto ? (
                                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">Included</Badge>
                                ) : (
                                  <span className="text-muted-foreground text-xs">
                                    ${a.basePrice}{a.unitLabel ? ` ${a.unitLabel}` : ""}
                                  </span>
                                )}
                              </label>
                            </div>
                            {isUnit && checked && !isAuto && (
                              <div className="flex items-center justify-between pl-6">
                                <div className="flex items-center gap-1">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => adjustQty(a.id, -1)}
                                    aria-label={`Decrease ${a.label} quantity`}
                                    disabled={qty <= 1}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="min-w-[2ch] text-center text-sm font-medium" aria-live="polite">{qty}</span>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => adjustQty(a.id, 1)}
                                    aria-label={`Increase ${a.label} quantity`}
                                    disabled={qty >= 20}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                <span className="text-xs font-semibold text-primary">${lineTotal}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </fieldset>
                )}

                {/* Preferred Date */}
                <fieldset className="space-y-4">
                  <legend className="font-semibold text-foreground flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-primary" /> Preferred Cleaning Date
                  </legend>
                  <div className="space-y-2">
                    <Label htmlFor="bf-date">Select Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="bf-date"
                          type="button"
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !preferredDate && "text-muted-foreground")}
                          aria-invalid={!!dateError}
                          aria-describedby={dateError ? "bf-date-error" : undefined}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {preferredDate ? format(preferredDate, "EEEE, MMMM d, yyyy") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={preferredDate}
                          onSelect={(d) => { setPreferredDate(d); if (d) setDateError(null); }}
                          disabled={isDateDisabled}
                          initialFocus
                          fromDate={minDate}
                          toDate={maxDate}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    {dateError && <p id="bf-date-error" className="text-sm text-destructive">{dateError}</p>}
                    <p className="text-xs text-muted-foreground">Bookings open 2–90 days out. Some dates may be unavailable.</p>
                  </div>
                </fieldset>

                {/* Contact */}
                <fieldset className="space-y-4">
                  <legend className="font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Contact Information
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bf-name">Full Name *</Label>
                      <Input
                        id="bf-name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => handleField("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "bf-name-error" : undefined}
                      />
                      {errors.name && <p id="bf-name-error" className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bf-phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                        <Input
                          id="bf-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="(561) 555-0123"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => handleField("phone", e.target.value)}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "bf-phone-error" : undefined}
                        />
                      </div>
                      {errors.phone && <p id="bf-phone-error" className="text-sm text-destructive">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bf-email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                      <Input
                        id="bf-email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => handleField("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "bf-email-error" : undefined}
                      />
                    </div>
                    {errors.email && <p id="bf-email-error" className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                </fieldset>

                {/* Property */}
                <fieldset className="space-y-4">
                  <legend className="font-semibold text-foreground flex items-center gap-2">
                    <Home className="w-4 h-4 text-primary" /> Property
                  </legend>
                  <div className="space-y-2">
                    <Label htmlFor="bf-address">Property Address *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                      <Input
                        id="bf-address"
                        autoComplete="street-address"
                        placeholder="123 Main St, West Palm Beach, FL 33401"
                        className="pl-10"
                        value={formData.address}
                        onChange={(e) => handleField("address", e.target.value)}
                        aria-invalid={!!errors.address}
                        aria-describedby={errors.address ? "bf-address-error" : undefined}
                      />
                    </div>
                    {errors.address && <p id="bf-address-error" className="text-sm text-destructive">{errors.address}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bf-baths">Bathrooms *</Label>
                    <Select value={formData.baths} onValueChange={(v) => handleField("baths", v)}>
                      <SelectTrigger id="bf-baths" aria-invalid={!!errors.baths}>
                        <SelectValue placeholder="Select number of bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {["1", "1.5", "2", "2.5", "3", "3.5", "4+"].map((v) => (
                          <SelectItem key={v} value={v}>{v} {v === "1" ? "Bathroom" : "Bathrooms"}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.baths && <p className="text-sm text-destructive">{errors.baths}</p>}
                  </div>
                </fieldset>

                {/* Notes & Pets */}
                <fieldset className="space-y-4">
                  <legend className="font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" /> Anything we should know?
                  </legend>
                  <div className="space-y-2">
                    <Label htmlFor="bf-notes">Special Instructions <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <Textarea
                      id="bf-notes"
                      placeholder="Access instructions (gate code, lockbox), areas to focus on, etc."
                      rows={3}
                      maxLength={2000}
                      value={formData.specialInstructions}
                      onChange={(e) => handleField("specialInstructions", e.target.value)}
                    />
                    {errors.specialInstructions && <p className="text-sm text-destructive">{errors.specialInstructions}</p>}
                  </div>

                  <label htmlFor="bf-haspets" className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:border-primary/50 transition-colors">
                    <Checkbox
                      id="bf-haspets"
                      checked={formData.hasPets}
                      onCheckedChange={(c) => handleField("hasPets", c === true)}
                    />
                    <span className="flex-1 text-sm">We have pets at home</span>
                  </label>
                  {formData.hasPets && (
                    <div className="space-y-2">
                      <Label htmlFor="bf-petinfo">Pet details <span className="text-muted-foreground font-normal">(breed, temperament — optional)</span></Label>
                      <Input
                        id="bf-petinfo"
                        placeholder="e.g. friendly golden retriever, will be in crate"
                        maxLength={500}
                        value={formData.petInfo}
                        onChange={(e) => handleField("petInfo", e.target.value)}
                      />
                    </div>
                  )}
                </fieldset>

                {/* SMS consent — REQUIRED */}
                <label htmlFor="bf-sms" className="flex items-start gap-3 p-3 rounded-lg border border-border cursor-pointer">
                  <Checkbox
                    id="bf-sms"
                    checked={formData.smsConsent}
                    onCheckedChange={(c) => handleField("smsConsent", c === true)}
                    aria-invalid={!!errors.smsConsent}
                  />
                  <span className="flex-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Text me booking updates *</span> — I agree to receive SMS confirmations and reminders from TIDYWISE at the phone number above. Reply STOP to opt out at any time. Message &amp; data rates may apply.
                  </span>
                </label>
                {errors.smsConsent && <p className="text-sm text-destructive">{errors.smsConsent}</p>}

                <div className="space-y-3 pt-2">
                  <Button type="submit" size="lg" className="w-full text-lg font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending your booking..." : "Confirm My Booking"}
                  </Button>
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> No credit card now</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> Confirmed in 15 min</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-secondary text-secondary" /> Free re-clean guarantee</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <section aria-labelledby="booking-related-heading" className="max-w-4xl mx-auto px-4 pt-12 pb-8 space-y-8">
          <div>
            <h2 id="booking-related-heading" className="font-display text-2xl font-bold text-foreground mb-4">
              Not sure which service to book?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pick the cleaning that matches what your home needs today —{" "}
              <Link to="/standard-cleaning" className="text-primary hover:underline">Standard recurring cleaning</Link>{" "}
              for weekly, biweekly, or monthly maintenance,{" "}
              <Link to="/deep-cleaning" className="text-primary hover:underline">Deep cleaning</Link> for a
              first-time top-to-bottom reset,{" "}
              <Link to="/move-in-out-cleaning" className="text-primary hover:underline">Move-in / move-out cleaning</Link>{" "}
              for security-deposit-back results,{" "}
              <Link to="/airbnb-cleaning" className="text-primary hover:underline">Airbnb turnover cleaning</Link>{" "}
              for short-term rentals,{" "}
              <Link to="/post-construction-cleaning" className="text-primary hover:underline">Post-construction cleanup</Link>,{" "}
              <Link to="/carpet-cleaning" className="text-primary hover:underline">Carpet cleaning</Link>, or{" "}
              <Link to="/upholstery-cleaning" className="text-primary hover:underline">Upholstery cleaning</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Booking from a specific city?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We serve more than 40 South Florida cities — see our full{" "}
              <Link to="/service-areas" className="text-primary hover:underline">service areas</Link>{" "}
              list, or jump to your county:{" "}
              <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward</Link>,{" "}
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">Palm Beach</Link>, or{" "}
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline">Miami-Dade</Link>. Top
              city pages include{" "}
              <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>,{" "}
              <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>, and{" "}
              <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Have questions before you book?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Browse our <Link to="/faq" className="text-primary hover:underline">FAQ</Link> for pricing,
              cancellation, and re-clean policy details, see what neighbors say in our{" "}
              <Link to="/reviews" className="text-primary hover:underline">customer reviews</Link>, or read
              our <Link to="/blog" className="text-primary hover:underline">South Florida cleaning guides</Link>{" "}
              for tips on humidity, salt-air corrosion, post-storm cleanup, and more.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default BookingForm;
