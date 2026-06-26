import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";

const faqItems = [
  {
    q: "How does CLEAN COLLECTIVE compare to The Florida Maid?",
    a: "CLEAN COLLECTIVE is a locally owned cleaning company based in Deerfield Beach, FL, serving 40+ cities across Broward, Miami-Dade, and Palm Beach County. We publish transparent pricing online — standard cleaning from $150, deep cleaning from $250, move in/out from $300 — and let you book instantly without waiting for an in-home estimate. Every clean is backed by our satisfaction guarantee.",
  },
  {
    q: "Does CLEAN COLLECTIVE offer transparent pricing like a quote upfront?",
    a: "Yes. Unlike many local maid services that require a phone call or in-home visit before quoting, CLEAN COLLECTIVE shows pricing online and gives you an exact, upfront estimate in minutes. There are no hidden trip charges or surprise add-ons — what you're quoted is what you pay.",
  },
  {
    q: "What is the CLEAN COLLECTIVE satisfaction guarantee?",
    a: "If anything isn't cleaned to your standard, let us know within 24 hours and we'll return to make it right at no extra cost. We stand behind every visit with background-checked, professionally trained cleaners and a 4.9-star average across 127+ verified reviews.",
  },
  {
    q: "Which South Florida areas does CLEAN COLLECTIVE serve as a Florida Maid alternative?",
    a: "CLEAN COLLECTIVE serves Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, Boca Raton, Delray Beach, West Palm Beach, Miami, Miami Beach, Aventura, Coral Gables, and 40+ other cities across Broward, Palm Beach, and Miami-Dade counties. Call (561) 571-8725 to confirm your area.",
  },
];

const comparisonRows = [
  { feature: "Transparent pricing published online", clean collective: true, competitor: false },
  { feature: "Instant online quote & booking", clean collective: true, competitor: false },
  { feature: "Same-day availability", clean collective: true, competitor: false },
  { feature: "Satisfaction guarantee (24-hr re-clean)", clean collective: true, competitor: false },
  { feature: "Background-checked cleaners", clean collective: true, competitor: true },
  { feature: "Eco-friendly products included", clean collective: true, competitor: false },
  { feature: "Locally owned in South Florida", clean collective: true, competitor: true },
  { feature: "Recurring discounts up to 15%", clean collective: true, competitor: false },
  { feature: "Serves 40+ South Florida cities", clean collective: true, competitor: false },
  { feature: "No in-home estimate required", clean collective: true, competitor: false },
];

const FloridaMaidAlternative = () => {
  return (
    <>
      <SEOSchema
        pageTitle="The Florida Maid Alternative | Transparent Pricing | CLEAN COLLECTIVE"
        pageDescription="Looking for a Florida Maid alternative? CLEAN COLLECTIVE offers transparent online pricing from $150, instant booking & a satisfaction guarantee across Fort Lauderdale, Boca Raton & Miami."
        canonicalUrl="https://www.tidywisecleaning.com/the-florida-maid-alternative"
        pageType="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "The Florida Maid Alternative", url: "https://www.tidywisecleaning.com/the-florida-maid-alternative" },
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="relative min-h-[55vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Transparent Pricing · Satisfaction Guaranteed</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Better Florida Maid Alternative
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              CLEAN COLLECTIVE delivers professional home cleaning across South Florida with upfront pricing,
              instant online booking, and a satisfaction guarantee on every visit — no in-home estimate,
              no surprise charges, no guessing what you'll pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <Link to="/#booking">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (561) 571-8725
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">4.9 ★ · 127+ verified reviews · Licensed &amp; insured</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-4">CLEAN COLLECTIVE vs The Florida Maid</h2>
            <p className="text-center text-muted-foreground mb-10">
              A direct comparison focused on what matters most: transparent pricing and a guarantee you can trust.
            </p>
            <div className="rounded-xl border overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-primary">CLEAN COLLECTIVE</th>
                    <th className="text-center px-6 py-4 font-semibold text-muted-foreground">The Florida Maid</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="px-6 py-4">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.clean collective ? <CheckCircle className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitor ? <CheckCircle className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-muted-foreground text-xs mt-4">
              Comparison reflects publicly available information and CLEAN COLLECTIVE's standard service offering. Details may vary by provider.
            </p>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6">Why South Florida Homeowners Switch to CLEAN COLLECTIVE</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The biggest frustration with many local maid services is not knowing what you'll pay until
                someone visits your home or you sit through a phone call. CLEAN COLLECTIVE removes that friction
                entirely: our pricing is published online, and you get an exact quote in minutes. Standard
                cleaning starts at $150, deep cleaning at $250, and move in/out at $300.
              </p>
              <p>
                Just as important is accountability. Every CLEAN COLLECTIVE clean is backed by a satisfaction
                guarantee — if something isn't right, we return within 24 hours and fix it at no charge.
                Our cleaners are background-checked, professionally trained, and rated 4.9 stars across
                127+ verified reviews.
              </p>
              <p>
                We're locally owned in Deerfield Beach and serve 40+ cities across Broward, Palm Beach,
                and Miami-Dade counties, with eco-friendly products included and recurring discounts up to
                15%. It's professional cleaning without the markups or the mystery pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-muted-foreground mb-4">Also comparing other services?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "vs The Maids", to: "/the-maids-alternative" },
                { label: "vs Molly Maid", to: "/molly-maid-alternative" },
                { label: "vs Merry Maids", to: "/merry-maids-alternative" },
                { label: "Compare all", to: "/cleaning-service-alternatives" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary underline underline-offset-2 hover:opacity-80">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-muted/30 rounded-xl border p-6">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Get Transparent Pricing in Minutes</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              No in-home estimate. No surprise fees. Just an honest quote and a guaranteed clean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#booking">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+15615718725">(561) 571-8725</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default FloridaMaidAlternative;
