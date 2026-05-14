import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const faqItems = [
  {
    q: "How does TIDYWISE compare to Molly Maid in South Florida?",
    a: "TIDYWISE is a locally owned cleaning company based in Deerfield Beach, FL serving Broward, Miami-Dade, and Palm Beach County. Unlike Molly Maid, which is a national franchise, TIDYWISE offers transparent online pricing, same-day quotes, and background-checked cleaners with no franchise fees passed to customers. Standard cleaning starts at $150."
  },
  {
    q: "Is TIDYWISE cheaper than Molly Maid?",
    a: "TIDYWISE offers transparent pricing starting at $150 for standard cleaning, $250 for deep cleaning, and $300 for move in/out cleaning. Molly Maid does not publish pricing online and requires an in-home estimate. Many South Florida customers report TIDYWISE is competitively priced with greater scheduling flexibility."
  },
  {
    q: "Does TIDYWISE use eco-friendly products like Molly Maid?",
    a: "Yes. TIDYWISE uses eco-friendly, non-toxic cleaning products that are safe for children and pets — at no extra charge. This is included in every cleaning service."
  },
  {
    q: "Can I book TIDYWISE online instead of waiting for an estimate?",
    a: "Yes. TIDYWISE offers instant online quotes and same-day booking at tidywisecleaning.com. No waiting for an in-home estimate or sales call required."
  }
];

const comparisonRows = [
  { feature: "Transparent online pricing", tidywise: true, competitor: false },
  { feature: "Same-day booking", tidywise: true, competitor: false },
  { feature: "Eco-friendly products included", tidywise: true, competitor: false },
  { feature: "Background-checked cleaners", tidywise: true, competitor: true },
  { feature: "Satisfaction guarantee", tidywise: true, competitor: true },
  { feature: "Locally owned (South Florida)", tidywise: true, competitor: false },
  { feature: "No franchise fees added to price", tidywise: true, competitor: false },
  { feature: "Instant online quote", tidywise: true, competitor: false },
  { feature: "Flexible 7-day scheduling", tidywise: true, competitor: false },
  { feature: "Recurring discount (up to 15% off)", tidywise: true, competitor: false },
];

const MollyMaidAlternative = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Molly Maid Alternative South Florida | TIDYWISE Cleaning"
        pageDescription="Best Molly Maid alternative in South Florida. Transparent pricing, same-day booking & eco-friendly cleaning. Fort Lauderdale, Boca Raton, Miami & 40+ cities."
        canonicalUrl="https://www.tidywisecleaning.com/molly-maid-alternative"
        pageType="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Molly Maid Alternative", url: "https://www.tidywisecleaning.com/molly-maid-alternative" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="relative min-h-[55vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">South Florida's Local Choice</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Better Molly Maid Alternative in South Florida
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              TIDYWISE is a locally owned cleaning company serving Broward, Miami-Dade, and Palm Beach County.
              Transparent pricing. Instant online booking. No franchise markups. Starting at $150.
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

        {/* Comparison Table */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-4">TIDYWISE vs Molly Maid</h2>
            <p className="text-center text-muted-foreground mb-10">
              See why South Florida homeowners choose TIDYWISE over national franchise chains.
            </p>
            <div className="rounded-xl border overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-primary">TIDYWISE</th>
                    <th className="text-center px-6 py-4 font-semibold text-muted-foreground">Molly Maid</th>
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

        {/* Pricing Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-4">Transparent Pricing — No Surprises</h2>
            <p className="text-center text-muted-foreground mb-10">
              Unlike Molly Maid, we publish our prices. No in-home estimate required.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Standard Cleaning", price: "From $150", desc: "Dusting, vacuuming, kitchen & bathroom sanitization, mopping" },
                { name: "Deep Cleaning", price: "From $250", desc: "Everything in standard + baseboards, inside cabinets, light fixtures" },
                { name: "Move In/Out", price: "From $300", desc: "Top-to-bottom clean including inside appliances and windows" },
              ].map((tier) => (
                <div key={tier.name} className="bg-background rounded-xl border p-6">
                  <h3 className="font-semibold text-lg mb-1">{tier.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">{tier.price}</p>
                  <p className="text-sm text-muted-foreground">{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Recurring customers save up to 15% · Eco-friendly products always included
            </p>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6">Why Choose a Local South Florida Cleaner Over a National Franchise?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                National cleaning franchises like Molly Maid operate through local franchise owners who pay royalty fees — costs that get passed on to you. TIDYWISE is independently owned and operated in Deerfield Beach, FL. Every dollar stays local, and every cleaner is personally vetted by our team.
              </p>
              <p>
                We serve over 40 cities across Broward, Miami-Dade, and Palm Beach County, including{" "}
                <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                <Link to="/miami-cleaning" className="text-primary hover:underline">Miami</Link>, and{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>.
              </p>
              <p>
                Our 4.9-star rating across 127+ verified reviews reflects what happens when a local team treats every home like it's their own.
              </p>
            </div>
          </div>
        </section>

        {/* Related comparisons & service links */}
        <section className="py-12 bg-muted/20 border-y">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-muted-foreground mb-4">Compare more cleaning options:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "vs Merry Maids", to: "/merry-maids-alternative" },
                { label: "vs The Maids", to: "/the-maids-alternative" },
                { label: "vs Handy", to: "/handy-alternative" },
                { label: "All Alternatives", to: "/cleaning-service-alternatives" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary underline underline-offset-2 hover:opacity-80">{l.label}</Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              See <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">house cleaning costs</Link>, {" "}
              <Link to="/deep-cleaning" className="text-primary hover:underline">deep cleaning</Link>, {" "}
              <Link to="/standard-cleaning" className="text-primary hover:underline">standard cleaning</Link>, or our {" "}
              <Link to="/service-areas" className="text-primary hover:underline">full South Florida service areas</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-background rounded-xl border p-6">
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
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Switch? Book Your First Clean Today.</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Get an instant quote online. No sales call. No in-home estimate. Cancel anytime.
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

export default MollyMaidAlternative;
