import { Link } from "react-router-dom";
import { CheckCircle, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const TaskRabbitAlternative = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Clean Collective better than TaskRabbit for house cleaning in South Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For house cleaning specifically in South Florida, Clean Collective is typically a better choice than TaskRabbit. Clean Collective offers dedicated cleaning teams (not gig workers), transparent flat-rate pricing, eco-friendly products, liability insurance, and a free re-clean guarantee. TaskRabbit uses individual taskers whose pricing, quality, and insurance coverage vary significantly.",
        },
      },
      {
        "@type": "Question",
        name: "Why do people look for TaskRabbit alternatives for cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common reasons people look for TaskRabbit cleaning alternatives include: inconsistent quality between different taskers, variable pricing that's hard to predict upfront, concerns about background checks on individual workers, no guarantee of the same cleaner each visit, and limited accountability if something goes wrong.",
        },
      },
      {
        "@type": "Question",
        name: "How does Clean Collective pricing compare to TaskRabbit cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clean Collective offers flat-rate pricing starting at $118 for a standard clean, with exact prices based on home size. TaskRabbit pricing varies by individual tasker (typically $50-80/hour), making it harder to predict the final cost and easier for costs to escalate. Clean Collective prices are transparent and fixed — what you see is what you pay.",
        },
      },
    ],
  };

  const comparison = [
    { feature: "Dedicated cleaning teams", cleancollective: true, taskrabbit: false, note: "TaskRabbit uses individual gig workers" },
    { feature: "Flat-rate transparent pricing", cleancollective: true, taskrabbit: false, note: "TaskRabbit charges hourly (hard to predict)" },
    { feature: "Liability insurance included", cleancollective: true, taskrabbit: false, note: "Individual tasker coverage varies" },
    { feature: "Background-checked cleaners", cleancollective: true, taskrabbit: true, note: "" },
    { feature: "Eco-friendly products", cleancollective: true, taskrabbit: false, note: "Taskers bring their own supplies" },
    { feature: "Free re-clean guarantee", cleancollective: true, taskrabbit: false, note: "" },
    { feature: "Recurring cleaning discounts", cleancollective: true, taskrabbit: false, note: "" },
    { feature: "Same team every visit", cleancollective: true, taskrabbit: false, note: "" },
    { feature: "South Florida specialized", cleancollective: true, taskrabbit: false, note: "TaskRabbit is generalist, not cleaning-focused" },
  ];

  return (
    <>
      <SEOSchema
        pageTitle="TaskRabbit Alternative | Clean Collective House Cleaning"
        pageDescription="Better than TaskRabbit for house cleaning in South Florida. Clean Collective: flat-rate pricing, insured dedicated teams & satisfaction guarantee. Compare and book now."
        canonicalUrl="https://cleancollectives.com/taskrabbit-alternative"
        pageType="service"
        additionalSchema={faqSchema}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-sm text-muted-foreground mb-3">Comparing cleaning services</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Best TaskRabbit Alternative for House Cleaning in South Florida
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
              TaskRabbit is great for odd jobs. For regular house cleaning, there's a better option — dedicated cleaning teams, flat-rate prices, and a satisfaction guarantee.
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
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">TL;DR — Key Differences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">Clean Collective</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Dedicated cleaning-only company</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Flat-rate pricing — no hourly surprises</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Fully insured teams, not solo gig workers</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Eco-friendly products included</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Free re-clean if anything missed</li>
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">TaskRabbit</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Hourly pricing — final cost unpredictable</li>
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Individual gig workers, not dedicated teams</li>
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Insurance coverage varies by tasker</li>
                  <li className="flex gap-2"><X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> Must supply cleaning products yourself</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Good for one-off handyman tasks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why people look for alternatives */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Why People Look for a TaskRabbit Cleaning Alternative
            </h2>
            <p className="text-muted-foreground mb-4">
              TaskRabbit is a marketplace for gig workers. It's versatile — you can find someone to assemble furniture, fix a leaky faucet, or clean your home. But that versatility creates problems when you're booking a cleaner:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">Unpredictable pricing.</strong> TaskRabbit charges by the hour. A 2-hour job can become 4 hours if the tasker is slow or thorough — and your final bill doubles. Clean Collective charges flat rates based on home size, so you know exactly what you'll pay before anyone shows up.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">Quality varies widely.</strong> Each tasker on TaskRabbit sets their own standards. One might be a professional cleaner; the next might be someone trying to earn side income. Clean Collective teams are trained cleaning specialists, not generalists.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">No guarantee of the same cleaner.</strong> Recurring cleaning works best when the same team learns your home. TaskRabbit can't guarantee consistency. Clean Collective builds long-term cleaning relationships.</div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">→</span>
                <div><strong className="text-foreground">Supply your own products.</strong> Most TaskRabbit cleaners expect you to provide all cleaning supplies. Clean Collective brings professional eco-friendly products.</div>
              </li>
            </ul>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">Clean Collective</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">TaskRabbit</th>
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
                        {row.taskrabbit ? <CheckCircle className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Clean Collective Pricing vs TaskRabbit — No Surprises
            </h2>
            <p className="text-muted-foreground mb-4">
              TaskRabbit taskers typically charge $50–$80/hour for cleaning. A 3-bedroom home that takes 4 hours = $200–$320, and that estimate can easily increase. Clean Collective charges flat rates:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">Home Size</th>
                    <th className="text-left p-3 font-semibold">Clean Collective Standard</th>
                    <th className="text-left p-3 font-semibold">Typical TaskRabbit*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="p-3">Studio / 1BR</td><td className="p-3 font-medium text-primary">$118 flat</td><td className="p-3 text-muted-foreground">$100–$160 est.</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">2 Bedrooms</td><td className="p-3 font-medium text-primary">$178 flat</td><td className="p-3 text-muted-foreground">$150–$240 est.</td></tr>
                  <tr><td className="p-3">3 Bedrooms</td><td className="p-3 font-medium text-primary">$248 flat</td><td className="p-3 text-muted-foreground">$200–$320 est.</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">4 Bedrooms</td><td className="p-3 font-medium text-primary">$313 flat</td><td className="p-3 text-muted-foreground">$250–$400 est.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">*TaskRabbit estimates based on typical hourly rates. Actual costs vary by tasker and can be higher.</p>
          </div>
        </section>

        {/* Who TaskRabbit is better for */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              When TaskRabbit is Actually the Right Choice
            </h2>
            <p className="text-muted-foreground mb-3">To be fair — TaskRabbit is excellent for:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Furniture assembly or mounting</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Moving help and lifting</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Small handyman tasks</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Odd jobs where you want flexibility</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              For professional <strong>house cleaning</strong> in South Florida — especially recurring cleaning, deep cleans, or move-out cleans — a dedicated cleaning company like Clean Collective is the better call.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
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

        {/* Related comparisons */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-muted-foreground mb-2">Also comparing against:</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/molly-maid-alternative" className="text-primary hover:underline">Molly Maid Alternative</Link>
              <Link to="/merry-maids-alternative" className="text-primary hover:underline">Merry Maids Alternative</Link>
              <Link to="/handy-alternative" className="text-primary hover:underline">Handy Alternative</Link>
              <Link to="/the-maids-alternative" className="text-primary hover:underline">The Maids Alternative</Link>
              <Link to="/cleaning-service-alternatives" className="text-primary hover:underline">All Cleaning Alternatives</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to Switch? Get Your Instant Quote
            </h2>
            <p className="text-muted-foreground mb-6">
              No hourly surprises. No gig worker roulette. Just a flat price and a clean home.
            </p>
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

export default TaskRabbitAlternative;
