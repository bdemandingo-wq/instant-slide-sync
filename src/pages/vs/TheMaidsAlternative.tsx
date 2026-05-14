import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const faqItems = [
  {
    q: "How does TIDYWISE compare to The Maids in South Florida?",
    a: "TIDYWISE is a locally owned South Florida cleaning company based in Deerfield Beach, FL. Unlike The Maids, which is a national franchise using a 22-step cleaning system with team rotations, TIDYWISE offers transparent online pricing, same-day booking, and dedicated cleaners who get to know your home. Standard cleaning starts at $150 with no franchise fees added to your price."
  },
  {
    q: "Is TIDYWISE more affordable than The Maids?",
    a: "TIDYWISE publishes pricing online — standard cleaning from $150, deep cleaning from $250, and move in/out from $300. The Maids does not publish pricing and requires an in-home estimate. TIDYWISE customers avoid franchise royalty fees that national chains pass on in their pricing."
  },
  {
    q: "Does TIDYWISE use a team or a single cleaner?",
    a: "TIDYWISE sends a dedicated team to your home for thorough, efficient cleaning. Unlike The Maids' rotating team system where you may get a different crew each visit, TIDYWISE aims to send consistent cleaners who know your preferences and your home."
  },
  {
    q: "What South Florida areas does TIDYWISE cover as a The Maids alternative?",
    a: "TIDYWISE serves 40+ cities across Broward County (Fort Lauderdale, Hollywood, Coral Springs), Miami-Dade County (Miami, Hialeah, Coral Gables, Aventura), and Palm Beach County (Boca Raton, West Palm Beach, Delray Beach, Jupiter). Call (561) 571-8725 to confirm your area."
  }
];

const comparisonRows = [
  { feature: "Published pricing online", tidywise: true, competitor: false },
  { feature: "Instant online booking", tidywise: true, competitor: false },
  { feature: "Same-day availability", tidywise: true, competitor: false },
  { feature: "Eco-friendly products included", tidywise: true, competitor: false },
  { feature: "Background-checked cleaners", tidywise: true, competitor: true },
  { feature: "Satisfaction guarantee", tidywise: true, competitor: true },
  { feature: "Locally owned (South Florida)", tidywise: true, competitor: false },
  { feature: "No franchise fees in pricing", tidywise: true, competitor: false },
  { feature: "Consistent team per home", tidywise: true, competitor: false },
  { feature: "Recurring discounts up to 15%", tidywise: true, competitor: false },
];

const TheMaidsAlternative = () => {
  return (
    <>
      <SEOSchema
        pageTitle="The Maids Alternative South Florida | TIDYWISE Cleaning"
        pageDescription="Best The Maids alternative in South Florida. Transparent pricing from $118, instant booking, same team every visit. Fort Lauderdale, Miami, Boca Raton."
        canonicalUrl="https://www.tidywisecleaning.com/the-maids-alternative"
        pageType="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "The Maids Alternative", url: "https://www.tidywisecleaning.com/the-maids-alternative" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="relative min-h-[55vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Locally Owned · No Franchise Fees</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Better The Maids Alternative in South Florida
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              TIDYWISE delivers consistent, professional cleaning without the franchise markups or rotating crews.
              Transparent pricing. Instant booking. Dedicated cleaners who know your home.
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-4">TIDYWISE vs The Maids</h2>
            <p className="text-center text-muted-foreground mb-10">
              A direct comparison of what you get with each service.
            </p>
            <div className="rounded-xl border overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-primary">TIDYWISE</th>
                    <th className="text-center px-6 py-4 font-semibold text-muted-foreground">The Maids</th>
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6">Why South Florida Homeowners Are Switching</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Maids operates through a franchise system, which means the local franchise owner pays royalties to the national brand — costs that ultimately get passed to you as the customer. TIDYWISE is independently owned and operated in Deerfield Beach, FL, keeping prices lean and accountability local.
              </p>
              <p>
                The Maids is known for their "22-step cleaning system" with rotating teams. While systematic, this means a different crew each visit — nobody who knows where your breakables are, your pet's name, or that you prefer unscented products. TIDYWISE prioritizes consistency: the same cleaners, learning your preferences over time.
              </p>
              <p>
                Most importantly: TIDYWISE shows you pricing upfront. Standard cleaning from $150, deep cleaning from $250, move in/out from $300. Book online in minutes — no waiting for an in-home estimate.
              </p>
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

        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-muted-foreground mb-4">Also comparing other services?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "vs Molly Maid", to: "/molly-maid-alternative" },
                { label: "vs Merry Maids", to: "/merry-maids-alternative" },
                { label: "vs Handy", to: "/handy-alternative" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-primary underline underline-offset-2 hover:opacity-80">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Book a Cleaner Who Knows Your Home?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Get an instant quote. No in-home estimate. Cancel anytime. Satisfaction guaranteed.
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

export default TheMaidsAlternative;
