import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const faqItems = [
  {
    q: "How does TIDYWISE compare to Merry Maids in South Florida?",
    a: "TIDYWISE is a locally owned South Florida cleaning company offering transparent online pricing starting at $150, same-day booking, and background-checked cleaners. Unlike Merry Maids, a ServiceMaster franchise, TIDYWISE operates without franchise fees — meaning lower prices and more flexibility for customers across Broward, Miami-Dade, and Palm Beach County."
  },
  {
    q: "Does TIDYWISE offer the same services as Merry Maids?",
    a: "Yes and more. TIDYWISE offers standard cleaning, deep cleaning, move in/out cleaning, carpet cleaning, upholstery cleaning, Airbnb turnover cleaning, post-construction cleaning, and office cleaning — all across 40+ South Florida cities."
  },
  {
    q: "Can I book TIDYWISE without a consultation like Merry Maids requires?",
    a: "Yes. TIDYWISE provides instant online quotes without requiring an in-home consultation or sales call. You can book same-day at tidywisecleaning.com."
  },
  {
    q: "What areas does TIDYWISE serve as a Merry Maids alternative?",
    a: "TIDYWISE serves 40+ cities across Broward County (Fort Lauderdale, Hollywood, Coral Springs, Deerfield Beach), Miami-Dade County (Miami, Hialeah, Coral Gables), and Palm Beach County (Boca Raton, West Palm Beach, Delray Beach)."
  }
];

const comparisonRows = [
  { feature: "Published pricing online", tidywise: true, competitor: false },
  { feature: "Instant online booking", tidywise: true, competitor: false },
  { feature: "Same-day availability", tidywise: true, competitor: false },
  { feature: "Eco-friendly products (included)", tidywise: true, competitor: false },
  { feature: "Background-checked cleaners", tidywise: true, competitor: true },
  { feature: "Satisfaction guarantee", tidywise: true, competitor: true },
  { feature: "Locally owned & operated", tidywise: true, competitor: false },
  { feature: "No franchise fees in pricing", tidywise: true, competitor: false },
  { feature: "Airbnb turnover cleaning", tidywise: true, competitor: false },
  { feature: "Recurring discounts (up to 15%)", tidywise: true, competitor: false },
];

const MerryMaidsAlternative = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Merry Maids Alternative South Florida | TIDYWISE Cleaning"
        pageDescription="Best Merry Maids alternative in South Florida. Instant booking, transparent pricing from $118, eco-friendly cleaning. Fort Lauderdale, Miami, Boca Raton."
        canonicalUrl="https://www.tidywisecleaning.com/merry-maids-alternative"
        pageType="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Merry Maids Alternative", url: "https://www.tidywisecleaning.com/merry-maids-alternative" }
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
              The Better Merry Maids Alternative in South Florida
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              TIDYWISE is locally owned, instantly bookable, and competitively priced — no franchise markups,
              no waiting for a consultation. Serving 40+ cities across South Florida.
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
            <h2 className="font-display text-3xl font-bold text-center mb-4">TIDYWISE vs Merry Maids</h2>
            <p className="text-center text-muted-foreground mb-10">
              A side-by-side look at what you get with each service.
            </p>
            <div className="rounded-xl border overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-primary">TIDYWISE</th>
                    <th className="text-center px-6 py-4 font-semibold text-muted-foreground">Merry Maids</th>
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

        {/* Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-10">Every Service Merry Maids Offers — And More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Standard Cleaning", price: "From $150", link: "/standard-cleaning" },
                { name: "Deep Cleaning", price: "From $250", link: "/deep-cleaning" },
                { name: "Move In/Out", price: "From $300", link: "/move-in-out-cleaning" },
                { name: "Airbnb Cleaning", price: "Custom quote", link: "/airbnb-cleaning" },
                { name: "Carpet Cleaning", price: "Custom quote", link: "/carpet-cleaning" },
                { name: "Upholstery Cleaning", price: "Custom quote", link: "/upholstery-cleaning" },
                { name: "Office Cleaning", price: "Custom quote", link: "/office-cleaning" },
                { name: "Post-Construction", price: "Custom quote", link: "/post-construction-cleaning" },
              ].map((s) => (
                <Link key={s.name} to={s.link} className="bg-background rounded-xl border p-4 hover:border-primary transition-colors">
                  <p className="font-semibold text-sm mb-1">{s.name}</p>
                  <p className="text-primary text-sm font-medium">{s.price}</p>
                </Link>
              ))}
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
                { label: "vs The Maids", to: "/the-maids-alternative" },
                { label: "vs Handy", to: "/handy-alternative" },
                { label: "All Alternatives", to: "/cleaning-service-alternatives" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary underline underline-offset-2 hover:opacity-80">{l.label}</Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Browse our <Link to="/service-areas" className="text-primary hover:underline">South Florida service areas</Link> or compare {" "}
              <Link to="/standard-cleaning" className="text-primary hover:underline">standard</Link>, {" "}
              <Link to="/deep-cleaning" className="text-primary hover:underline">deep</Link>, and {" "}
              <Link to="/move-in-out-cleaning" className="text-primary hover:underline">move in/out cleaning</Link> services.
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
            <h2 className="font-display text-3xl font-bold mb-4">Book Your First Clean — No Consultation Needed</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Instant quote online. Cancel anytime. Satisfaction guaranteed or we re-clean for free.
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

export default MerryMaidsAlternative;
