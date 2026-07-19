import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Shield, Sparkles, CheckCircle, MapPin, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PriceItem {
  id: string;
  name: string;
  unit: string;
  min: number;
  max: number;
  note: string;
}

const ITEMS: PriceItem[] = [
  { id: "sofa", name: "Sofa (2–3 seat)", unit: "per sofa", min: 90, max: 160, note: "Standard fabric couch, both sides cleaned" },
  { id: "sectional", name: "Sectional (4+ seat)", unit: "per sectional", min: 150, max: 280, note: "Large L-shape or modular sectionals" },
  { id: "loveseat", name: "Loveseat / Armchair", unit: "each", min: 50, max: 110, note: "Smaller seating, recliners, accent chairs" },
  { id: "mattress", name: "Mattress", unit: "per mattress", min: 70, max: 150, note: "Queen/king, sanitize + stain treatment" },
  { id: "rug", name: "Area Rug", unit: "per rug", min: 60, max: 180, note: "Priced by size; wool & delicate cost more" },
  { id: "carpet-room", name: "Carpet (per room)", unit: "per room", min: 45, max: 90, note: "Up to ~250 sq ft per room" },
  { id: "stairs", name: "Carpeted Stairs", unit: "per flight", min: 40, max: 75, note: "Standard flight of 12–14 steps" },
];

const formatRange = (min: number, max: number) =>
  min === max ? `$${min}` : `$${min}–$${max}`;

const UpholsteryCarpetPricing = () => {
  const [qty, setQty] = useState<Record<string, number>>({});

  const setItemQty = (id: string, value: number) =>
    setQty((prev) => ({ ...prev, [id]: Math.max(0, value) }));

  const { totalMin, totalMax, selectedCount } = useMemo(() => {
    let min = 0;
    let max = 0;
    let count = 0;
    for (const item of ITEMS) {
      const n = qty[item.id] ?? 0;
      if (n > 0) {
        min += item.min * n;
        max += item.max * n;
        count += n;
      }
    }
    return { totalMin: min, totalMax: max, selectedCount: count };
  }, [qty]);

  const factors = [
    "Fabric type — delicate, wool, silk, or microfiber require gentler methods",
    "Level of soiling, pet stains, and odor treatment needed",
    "Item size and number of cushions or sections",
    "Set-in stains that need specialized spot treatment",
    "Travel distance within Broward, Palm Beach, or Miami-Dade",
    "Bundling multiple items usually lowers the per-item price",
  ];

  const faqs = [
    {
      q: "How much does upholstery cleaning cost in South Florida?",
      a: "Most upholstery jobs run $50–$280 per item. A standard sofa is typically $90–$160, a large sectional $150–$280, and an armchair or loveseat $50–$110. Final pricing depends on fabric, soiling, and how many pieces you bundle together.",
    },
    {
      q: "How much is carpet cleaning per room?",
      a: "Carpet cleaning runs about $45–$90 per room for areas up to roughly 250 sq ft, plus $40–$75 per flight of carpeted stairs. Heavily soiled rooms, pet treatment, or high-pile carpet may fall at the higher end of the range.",
    },
    {
      q: "What affects the price of upholstery and carpet cleaning?",
      a: "Fabric and carpet type, the amount of soiling, pet stains and odors, item size, set-in stains needing special treatment, and travel distance all affect price. Bundling several items in one visit usually reduces the per-item cost.",
    },
    {
      q: "Do you offer free quotes?",
      a: "Yes. Every quote is free and there's no credit card required. Tell us what you'd like cleaned and we'll confirm an exact price for your home in Boca Raton, Fort Lauderdale, or anywhere across Broward and Miami-Dade.",
    },
    {
      q: "How long does it take for upholstery and carpets to dry?",
      a: "With our professional extraction equipment, most upholstery and carpets are dry within 4–8 hours. Airflow and humidity affect drying time, and we can recommend tips to speed it up.",
    },
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Upholstery & Carpet Cleaning Prices | South Florida | Clean Collective"
        pageDescription="See typical upholstery & carpet cleaning prices in South Florida. Sofa, sectional, mattress, area rug & per-room carpet costs, plus a free estimate calculator. Serving Boca Raton, Fort Lauderdale & Broward."
        canonicalUrl="https://cleancollectives.com/upholstery-carpet-cleaning-pricing"
        pageType="service"
        county="South Florida"
        breadcrumbs={[
          { name: "Home", url: "https://cleancollectives.com" },
          { name: "Upholstery & Carpet Cleaning Prices", url: "https://cleancollectives.com/upholstery-carpet-cleaning-pricing" },
        ]}
        faqItems={faqs}
      />
      <main className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Transparent Pricing Guide
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Upholstery &amp; Carpet Cleaning Prices in South Florida
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Clear, upfront price ranges for sofas, sectionals, mattresses, area rugs and
                carpet — plus a quick calculator to estimate your total. Proudly serving
                Boca Raton, Fort Lauderdale, Broward and Miami-Dade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link to="/#booking" className="flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15618612752" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    (561) 861-2752
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" /> 140+ 5-star reviews
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" /> Licensed &amp; insured
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Serving all of South Florida
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
                Typical Price Ranges by Item
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                These are typical South Florida rates for professional upholstery and carpet
                cleaning. Your exact quote depends on fabric, soiling and the number of items —
                see "What affects the price" below.
              </p>
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-foreground">Item</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Price Range</th>
                      <th className="px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ITEMS.map((item) => (
                      <tr key={item.id} className="border-t border-border">
                        <td className="px-4 py-3 text-foreground font-medium">
                          {item.name}
                          <span className="block text-xs text-muted-foreground font-normal">{item.unit}</span>
                        </td>
                        <td className="px-4 py-3 text-foreground whitespace-nowrap">{formatRange(item.min, item.max)}</td>
                        <td className="px-4 py-3 text-muted-foreground text-sm hidden sm:table-cell">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
                Free Estimate Calculator
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                Pick the items you'd like cleaned to see an estimated price range. No email required.
              </p>
              <div className="bg-card rounded-xl border border-border p-4 sm:p-6 space-y-3">
                {ITEMS.map((item) => {
                  const n = qty[item.id] ?? 0;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-b-0"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{formatRange(item.min, item.max)} {item.unit}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          aria-label={`Remove one ${item.name}`}
                          onClick={() => setItemQty(item.id, n - 1)}
                          disabled={n === 0}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold text-foreground" aria-live="polite">{n}</span>
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          aria-label={`Add one ${item.name}`}
                          onClick={() => setItemQty(item.id, n + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 bg-primary text-primary-foreground rounded-xl p-6 text-center">
                <p className="text-sm opacity-90 mb-1">Estimated price range</p>
                <p className="font-display text-4xl font-bold mb-2">
                  {selectedCount === 0 ? "$0" : formatRange(totalMin, totalMax)}
                </p>
                <p className="text-sm opacity-90 mb-5">
                  {selectedCount === 0
                    ? "Add items above to see your estimate"
                    : `${selectedCount} item${selectedCount > 1 ? "s" : ""} selected · final price confirmed in your free quote`}
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/#booking" className="flex items-center gap-2">
                    Get My Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Estimates are for guidance only. Your exact price is confirmed after a quick,
                no-obligation assessment.
              </p>
            </div>
          </div>
        </section>

        {/* What affects price */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                What Affects the Price?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {factors.map((factor, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <span className="font-medium">140+ Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-medium">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-medium">Boca Raton · Fort Lauderdale · Broward · Miami</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Get a Free Upholstery &amp; Carpet Cleaning Quote
            </h2>
            <p className="text-primary-foreground mb-8 max-w-xl mx-auto">
              Trusted by 140+ five-star clients across Boca Raton, Fort Lauderdale, Broward
              and Miami-Dade. No credit card required — just tell us what you need cleaned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+15618612752" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (561) 861-2752
                </a>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/#booking">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Related Cleaning Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/carpet-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Carpet Cleaning</h3>
                <p className="text-muted-foreground text-sm">Deep extraction & stain removal</p>
              </Link>
              <Link to="/upholstery-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Upholstery Cleaning</h3>
                <p className="text-muted-foreground text-sm">Professional furniture & fabric care</p>
              </Link>
              <Link to="/deep-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Deep Cleaning</h3>
                <p className="text-muted-foreground text-sm">Thorough cleaning for every corner</p>
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPage="/upholstery-carpet-cleaning-pricing" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default UpholsteryCarpetPricing;
