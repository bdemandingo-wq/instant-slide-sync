import { Link } from "react-router-dom";
import { CheckCircle, X, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const AmazonHomeServicesAlternative = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Clean Collective compare to Amazon Home Services for house cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clean Collective is a dedicated South Florida cleaning company, while Amazon Home Services is a marketplace that connects you with third-party providers in your area. Key differences: Clean Collective uses its own trained, insured teams (not third-party contractors), offers flat-rate pricing with no booking fees, uses eco-friendly products, and provides a free re-clean guarantee. Amazon Home Services adds a service fee on top of provider rates and quality can vary by local provider.",
        },
      },
      {
        "@type": "Question",
        name: "Is Amazon Home Services available in South Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon Home Services is available in South Florida, but the quality and coverage of local cleaning providers varies significantly. In South Florida specifically, Clean Collective serves 40+ cities across Broward, Miami-Dade, and Palm Beach counties with consistent quality, local knowledge, and direct accountability.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I use a local cleaning company instead of Amazon Home Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local cleaning company like Clean Collective offers direct accountability — when you call with a problem, you reach the company that actually cleaned your home, not a platform. You also get local expertise (South Florida humidity, mold prevention, hurricane prep), personalized service, and the ability to build a relationship with a consistent team. Amazon Home Services connects you to third-party contractors where quality, consistency, and accountability are less predictable.",
        },
      },
    ],
  };

  const comparison = [
    { feature: "Direct, accountable cleaning teams", cleancollective: true, amazon: false, note: "Amazon uses third-party contractors" },
    { feature: "Flat-rate transparent pricing", cleancollective: true, amazon: false, note: "Amazon adds service fees on top" },
    { feature: "Eco-friendly products included", cleancollective: true, amazon: false, note: "Varies by provider" },
    { feature: "Free re-clean guarantee", cleancollective: true, amazon: true, note: "Amazon has happiness guarantee" },
    { feature: "Same team every visit", cleancollective: true, amazon: false, note: "Provider availability varies" },
    { feature: "South Florida specialized", cleancollective: true, amazon: false, note: "Amazon is a national marketplace" },
    { feature: "Local phone support", cleancollective: true, amazon: false, note: "Amazon routes through their platform" },
    { feature: "No platform middleman", cleancollective: true, amazon: false, note: "" },
    { feature: "Recurring discounts", cleancollective: true, amazon: false, note: "" },
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Amazon Home Services Alternative | Clean Collective Cleaning"
        pageDescription="Amazon Home Services alternative for cleaning in South Florida. Local teams, flat-rate pricing & direct accountability. Fort Lauderdale, Miami, Boca Raton."
        canonicalUrl="https://cleancollectives.com/amazon-home-services-alternative"
        pageType="service"
        additionalSchema={faqSchema}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-sm text-muted-foreground mb-3">Comparing cleaning services</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Amazon Home Services Alternative for House Cleaning in South Florida
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
              Amazon connects you to third-party providers. Clean Collective IS the provider — our own trained, insured team, flat-rate pricing, and direct accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link to="/#booking">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15618612752" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call (561) 861-2752
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Short Version</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">Clean Collective</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> We are the cleaning company — not a middleman</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Flat-rate pricing with no booking surcharges</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Same insured team every visit</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Eco-friendly products included</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Local South Florida expertise</li>
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">Amazon Home Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Marketplace — third-party contractors</li>
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Platform fee added on top of provider rate</li>
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Quality varies by local provider</li>
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Less control over who comes to your home</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Amazon Happiness Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Amazon Home Services works */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              How Amazon Home Services Actually Works
            </h2>
            <p className="text-muted-foreground mb-4">
              Amazon Home Services is a two-sided marketplace. When you book a cleaning, Amazon finds a local third-party service provider in your area and sends them to your home. Amazon takes a cut; the provider keeps the rest.
            </p>
            <p className="text-muted-foreground mb-4">
              This means the cleaner who shows up isn't an Amazon employee — they're an independent contractor or small business that signed up with Amazon's platform. Quality, professionalism, and what's included can vary widely by provider.
            </p>
            <p className="text-muted-foreground">
              Clean Collective is different: we are the cleaning company. Every cleaner is part of our team, trained to our standards, and backed by our liability insurance. When you call us, you speak to the people who actually clean your home.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">Clean Collective</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">Amazon Home Services</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparison.map((row) => (
                    <tr key={row.feature} className="bg-background">
                      <td className="p-4">
                        <span className="font-medium">{row.feature}</span>
                        {row.note && <span className="block text-xs text-muted-foreground mt-0.5">{row.note}</span>}
                      </td>
                      <td className="p-4 text-center">
                        {row.cleancollective ? <CheckCircle className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />}
                      </td>
                      <td className="p-4 text-center">
                        {row.amazon ? <CheckCircle className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* South Florida specific */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Why Local Matters for South Florida Cleaning
            </h2>
            <p className="text-muted-foreground mb-4">
              South Florida has unique cleaning challenges that a national marketplace can't reliably address:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">Humidity and mold prevention.</strong> Year-round humidity at 70-90% means mold is a constant risk. Clean Collective uses products specifically effective against mold spores in Florida conditions. A generic marketplace provider may not know to prioritize this.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">Hurricane season preparation.</strong> We understand pre- and post-storm cleaning needs that are specific to coastal South Florida.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">Condo building access.</strong> We know how to navigate South Florida condo and HOA requirements. Our teams are familiar with building protocols across Broward, Miami-Dade, and Palm Beach County.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">Snowbird scheduling.</strong> We're accustomed to the seasonal patterns of South Florida — return-from-up-north deep cleans, seasonal holds, and flexible scheduling that national platforms don't handle as smoothly.</div>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">FAQ</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-border pb-6">
                  <h3 className="font-semibold text-foreground mb-2">{q.name}</h3>
                  <p className="text-muted-foreground text-sm">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-muted-foreground mb-2">Also comparing against:</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/taskrabbit-alternative" className="text-primary hover:underline">TaskRabbit Alternative</Link>
              <Link to="/molly-maid-alternative" className="text-primary hover:underline">Molly Maid Alternative</Link>
              <Link to="/handy-alternative" className="text-primary hover:underline">Handy Alternative</Link>
              <Link to="/cleaning-service-alternatives" className="text-primary hover:underline">All Cleaning Alternatives</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">
              Skip the Middleman. Book Direct.
            </h2>
            <p className="text-muted-foreground mb-2">Flat-rate pricing. Local team. No platform fees.</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> Licensed & Insured</span>
              <span>5-Star Rated</span>
              <span>Free re-clean guarantee</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link to="/#booking">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15618612752" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call (561) 861-2752
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AmazonHomeServicesAlternative;
