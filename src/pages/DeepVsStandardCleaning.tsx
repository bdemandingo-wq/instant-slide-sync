import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TaskRow {
  task: string;
  area: string;
  standard: boolean;
  deep: boolean;
}

const TASKS: TaskRow[] = [
  { area: "Kitchen", task: "Counters, sink & stovetop wiped and sanitized", standard: true, deep: true },
  { area: "Kitchen", task: "Exterior of appliances cleaned", standard: true, deep: true },
  { area: "Kitchen", task: "Inside oven & microwave cleaned", standard: false, deep: true },
  { area: "Kitchen", task: "Inside refrigerator cleaned", standard: false, deep: true },
  { area: "Kitchen", task: "Inside cabinets & drawers wiped", standard: false, deep: true },
  { area: "Kitchen", task: "Backsplash & grout scrubbed", standard: false, deep: true },
  { area: "Bathrooms", task: "Toilets, showers & sinks scrubbed and disinfected", standard: true, deep: true },
  { area: "Bathrooms", task: "Mirrors & chrome polished", standard: true, deep: true },
  { area: "Bathrooms", task: "Tile & grout deep scrubbed", standard: false, deep: true },
  { area: "Bathrooms", task: "Inside vanity & cabinets wiped", standard: false, deep: true },
  { area: "Bedrooms & Living", task: "Surfaces dusted, beds made", standard: true, deep: true },
  { area: "Bedrooms & Living", task: "Floors vacuumed & mopped", standard: true, deep: true },
  { area: "Bedrooms & Living", task: "Trash emptied & liners replaced", standard: true, deep: true },
  { area: "Whole Home", task: "Detailed baseboard cleaning", standard: false, deep: true },
  { area: "Whole Home", task: "Door frames, doors & light switches wiped", standard: false, deep: true },
  { area: "Whole Home", task: "Light fixtures & ceiling fans dusted", standard: false, deep: true },
  { area: "Whole Home", task: "Window sills & blinds cleaned", standard: false, deep: true },
  { area: "Whole Home", task: "Behind & under movable furniture", standard: false, deep: true },
  { area: "Whole Home", task: "Air vent & register dusting", standard: false, deep: true },
  { area: "Whole Home", task: "Wall spot cleaning", standard: false, deep: true },
];

const faqItems = [
  {
    q: "What is the difference between a standard cleaning and a deep cleaning?",
    a: "A standard cleaning maintains an already-clean home: surfaces, kitchen and bathrooms, floors, and trash on a recurring basis. A deep cleaning includes everything in a standard clean plus detail work that builds up over time — inside the oven, fridge and cabinets, baseboards, door frames, blinds, light fixtures, grout, and behind furniture. If your home hasn't been professionally cleaned in 3+ months, start with a deep clean.",
  },
  {
    q: "How much does each cleaning cost in South Florida?",
    a: "TIDYWISE standard cleaning starts at $150 and deep cleaning starts at $250. Final pricing depends on home size and condition. A 3-bedroom deep clean typically runs $250–$350 and takes 4–5 hours. You can get an exact, transparent quote online in minutes — no in-home estimate required.",
  },
  {
    q: "How often should I book a deep clean versus a standard clean?",
    a: "Most South Florida homeowners book an initial deep clean, then switch to recurring standard cleans every 1–4 weeks to maintain it. We recommend a deep clean quarterly, plus before hosting guests, after illness, or before listing a home for sale. Florida humidity and dust also make periodic deep cleans worthwhile for allergy control.",
  },
  {
    q: "Which clean is right for a first-time TIDYWISE client?",
    a: "We recommend a deep clean for your first visit. It resets the home to a high baseline so future recurring standard cleans stay efficient and affordable. After the first deep clean, most clients keep their home looking great with standard maintenance visits.",
  },
];

const grouped = TASKS.reduce<Record<string, TaskRow[]>>((acc, row) => {
  (acc[row.area] ||= []).push(row);
  return acc;
}, {});

const Cell = ({ on }: { on: boolean }) =>
  on ? (
    <CheckCircle className="w-5 h-5 text-primary mx-auto" aria-label="Included" />
  ) : (
    <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" aria-label="Not included" />
  );

const DeepVsStandardCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Deep Cleaning vs Standard Cleaning | Task-by-Task Comparison | TIDYWISE"
        pageDescription="See exactly what's included in a deep clean vs a standard clean. Side-by-side task checklist by room, South Florida pricing & a free quote. Compare before you book."
        canonicalUrl="https://www.tidywisecleaning.com/deep-cleaning-vs-standard-cleaning"
        pageType="service"
        county="South Florida"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Deep Cleaning vs Standard Cleaning", url: "https://www.tidywisecleaning.com/deep-cleaning-vs-standard-cleaning" },
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Compare Before You Book
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Deep Cleaning vs Standard Cleaning
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Not sure which clean you need? Here's a clear, task-by-task breakdown of exactly what's
                included in a TIDYWISE standard clean versus a deep clean — by room — so you can book
                with confidence across Fort Lauderdale, Boca Raton, Miami & 40+ South Florida cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link to="/#booking" className="flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15615718725" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    (561) 571-8725
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick summary cards */}
        <section className="py-12 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Standard Cleaning</h2>
                <p className="text-3xl font-bold text-primary mb-3">From $150</p>
                <p className="text-muted-foreground text-sm">
                  Ongoing maintenance for an already-clean home. Surfaces, kitchen, bathrooms, floors and
                  trash — ideal as a weekly, bi-weekly or monthly recurring visit.
                </p>
              </div>
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Deep Cleaning</h2>
                <p className="text-3xl font-bold text-primary mb-3">From $250</p>
                <p className="text-muted-foreground text-sm">
                  Everything in a standard clean plus detailed build-up work: inside appliances, cabinets,
                  baseboards, grout, blinds and more. Best for first cleans and quarterly resets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              What's Included: Task-by-Task
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Every task we perform, grouped by room, with a clear check for each service.
            </p>
            <div className="rounded-xl border overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-4 py-4 font-semibold">Task</th>
                    <th className="text-center px-4 py-4 font-semibold w-28">Standard</th>
                    <th className="text-center px-4 py-4 font-semibold w-28 text-primary">Deep</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(grouped).map(([area, rows]) => (
                    <Fragment key={area}>
                      <tr className="bg-muted/40">
                        <td colSpan={3} className="px-4 py-2 font-semibold text-foreground">{area}</td>
                      </tr>
                      {rows.map((row, i) => (
                        <tr key={`${area}-${i}`} className="border-t border-border">
                          <td className="px-4 py-3 text-foreground">{row.task}</td>
                          <td className="px-4 py-3"><Cell on={row.standard} /></td>
                          <td className="px-4 py-3"><Cell on={row.deep} /></td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              Need a custom scope? Add-ons like inside windows, laundry and refrigerator detailing can be
              included on request. <Link to="/#booking" className="text-primary hover:underline">Tell us what you need →</Link>
            </p>
          </div>
        </section>

        {/* Which to choose */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Which Clean Should You Choose?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Choose a standard clean</strong> if your home is already in
                good shape and you want to keep it that way. It's the most cost-effective option for recurring
                weekly, bi-weekly, or monthly visits and focuses on the surfaces that get dirty fastest —
                kitchens, bathrooms, and floors.
              </p>
              <p>
                <strong className="text-foreground">Choose a deep clean</strong> if it's your first professional
                cleaning, it's been more than three months since the last one, or you're prepping for guests, a
                move, or a home sale. Deep cleaning tackles the buildup standard visits don't reach. In humid
                South Florida, a quarterly deep clean also helps control dust, allergens, and grout grime.
              </p>
              <p>
                Most TIDYWISE clients book an initial deep clean, then maintain it with affordable recurring
                standard cleans. You'll get a transparent, upfront quote online — no in-home estimate, no
                surprises.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Book the Right Clean?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Get an instant, transparent quote for a standard or deep clean. Serving Broward, Palm Beach,
              and Miami-Dade counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#booking">Get a Free Quote</Link>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/deep-cleaning">Deep Cleaning Details</Link>
              </Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentPage="/deep-cleaning-vs-standard-cleaning" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default DeepVsStandardCleaning;
