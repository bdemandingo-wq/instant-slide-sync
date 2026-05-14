import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const faqItems = [
  {
    q: "How is TIDYWISE different from Handy cleaning service?",
    a: "Handy is a gig-economy platform that connects you with independent contractors — quality and consistency can vary by booking. TIDYWISE is a dedicated cleaning company with a trained, vetted, and insured team. Every TIDYWISE cleaner passes a background check and is covered by our company's liability insurance. We serve 40+ cities across South Florida starting at $150."
  },
  {
    q: "Is TIDYWISE more reliable than Handy in South Florida?",
    a: "TIDYWISE maintains a 4.9-star rating across 127+ verified reviews and a satisfaction guarantee — if you're not happy, we re-clean for free. Unlike platform-based services, you work directly with our team, not a rotating pool of gig workers."
  },
  {
    q: "Does TIDYWISE cost more than Handy?",
    a: "TIDYWISE pricing starts at $150 for standard cleaning and is competitively priced with Handy. Unlike Handy, TIDYWISE includes eco-friendly products and does not charge service fees or platform markups on top of the cleaner's rate."
  },
  {
    q: "What South Florida cities does TIDYWISE serve instead of Handy?",
    a: "TIDYWISE serves 40+ cities including Fort Lauderdale, Miami, Boca Raton, West Palm Beach, Hollywood, Coral Springs, Deerfield Beach, Hialeah, Aventura, and more across Broward, Miami-Dade, and Palm Beach County."
  }
];

const comparisonRows = [
  { feature: "Dedicated in-house cleaning team", tidywise: true, competitor: false },
  { feature: "Company liability insurance", tidywise: true, competitor: false },
  { feature: "Background-checked cleaners", tidywise: true, competitor: true },
  { feature: "Consistent same team", tidywise: true, competitor: false },
  { feature: "Eco-friendly products included", tidywise: true, competitor: false },
  { feature: "No platform service fees", tidywise: true, competitor: false },
  { feature: "Satisfaction guarantee (free re-clean)", tidywise: true, competitor: false },
  { feature: "Transparent pricing online", tidywise: true, competitor: true },
  { feature: "Locally operated in South Florida", tidywise: true, competitor: false },
  { feature: "Commercial & Airbnb cleaning", tidywise: true, competitor: false },
];

const HandyAlternative = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Handy Alternative South Florida | TIDYWISE House Cleaning"
        pageDescription="Looking for a Handy alternative in South Florida? TidyWise offers vetted cleaners, transparent pricing, and 4.9★ service. Book online or call (561) 571-8725."
        canonicalUrl="https://www.tidywisecleaning.com/handy-alternative"
        pageType="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Handy Alternative", url: "https://www.tidywisecleaning.com/handy-alternative" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="relative min-h-[55vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">A Real Team. Not a Gig Platform.</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The More Reliable Handy Alternative in South Florida
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              TIDYWISE is a dedicated cleaning company — not a gig platform. A trained, insured, and background-checked team
              shows up every time. Serving Fort Lauderdale, Miami, Boca Raton & 40+ South Florida cities.
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
            <p className="text-sm text-muted-foreground">4.9 ★ · 127+ verified reviews · Licensed & insured</p>
          </div>
        </section>

        {/* Why gig platforms fall short */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6">The Problem with Gig Cleaning Platforms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Apps like Handy work by matching you with whichever independent contractor is available — meaning you might get a different person every single visit, with varying skill levels and no consistent quality standard.
              </p>
              <p>
                If something goes wrong (a broken item, a no-show, a poor clean), you're navigating a platform's dispute process — not talking to a local business that stands behind its work.
              </p>
              <p>
                TIDYWISE is different. We're a South Florida cleaning company with a real team, real insurance, and a real satisfaction guarantee: if you're not happy with your clean, we come back and fix it — free.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-10">TIDYWISE vs Handy</h2>
            <div className="rounded-xl border overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-primary">TIDYWISE</th>
                    <th className="text-center px-6 py-4 font-semibold text-muted-foreground">Handy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="px-6 py-4">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.tidywise
                          ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitor
                          ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related comparisons & service links */}
        <section className="py-12 bg-muted/20 border-y">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-muted-foreground mb-4">Compare more cleaning options:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "vs Molly Maid", to: "/molly-maid-alternative" },
                { label: "vs Merry Maids", to: "/merry-maids-alternative" },
                { label: "vs The Maids", to: "/the-maids-alternative" },
                { label: "All Alternatives", to: "/cleaning-service-alternatives" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary underline underline-offset-2 hover:opacity-80">{l.label}</Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Explore <Link to="/standard-cleaning" className="text-primary hover:underline">standard cleaning</Link>, {" "}
              <Link to="/deep-cleaning" className="text-primary hover:underline">deep cleaning</Link>, {" "}
              <Link to="/move-in-out-cleaning" className="text-primary hover:underline">move in/out</Link>, or see {" "}
              <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">house cleaning costs in South Florida</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Done with Inconsistent Gig Cleaners? Try TIDYWISE.</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Satisfaction guaranteed. Same-day booking. Real team. Real results.
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
      </main>
    </>
  );
};

export default HandyAlternative;
