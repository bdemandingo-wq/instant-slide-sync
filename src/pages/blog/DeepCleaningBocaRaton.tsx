import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const DeepCleaningBocaRaton = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a deep cleaning cost in Boca Raton?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A deep cleaning in Boca Raton starts at $208 for a studio or 1-bedroom home. A 3-bedroom home typically costs $348, and larger luxury homes of 5+ bedrooms start at $658. Deep cleaning is recommended as your first clean or after any extended absence from your home.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in a deep clean vs a standard clean in Boca Raton?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A deep clean goes beyond the basics — it includes inside appliances (oven, refrigerator), baseboards, ceiling fans, window sills, behind furniture, tile grout scrubbing, and areas that standard bi-weekly cleaning doesn't typically cover. It's the reset your home needs before moving to a recurring schedule.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a deep clean before starting a recurring cleaning schedule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we require a deep clean as the first service for new recurring clients. It gives our team a clean baseline so we can maintain your Boca Raton home efficiently at every subsequent visit. After the first deep clean, recurring standard cleans are significantly faster and more affordable.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a deep clean take in a Boca Raton home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A deep clean for a 2-3 bedroom Boca Raton home typically takes 4-6 hours. Larger homes in communities like Boca West or Broken Sound may take 6-8 hours. We send enough cleaners to complete the job efficiently without cutting corners.",
        },
      },
    ],
  };

  const deepCleanChecklist = [
    "Inside oven and refrigerator",
    "All cabinets wiped inside and out",
    "Ceiling fans and light fixtures",
    "Baseboards and door frames",
    "Window sills and tracks",
    "Behind and under furniture",
    "Tile grout scrubbing",
    "Bathroom tile and glass doors",
    "Cobwebs in corners and ceilings",
    "Inside microwave",
    "All switch plates and outlets",
    "Garage entry areas",
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Deep Cleaning Boca Raton | First Clean Experts"
        pageDescription="Deep cleaning in Boca Raton, FL from $208. Inside appliances, baseboards, grout scrubbing & more. Boca West, Broken Sound, Mizner Park. Book now."
        canonicalUrl="https://www.tidywisecleaning.com/blog/deep-cleaning-service-boca-raton"
        pageType="article"
        additionalSchema={faqSchema}
      />
      <main className="min-h-screen">
        <Navbar />

        <article className="max-w-3xl mx-auto px-4 py-16 pt-24">
          <header className="mb-10">
            <div className="text-sm text-primary font-medium mb-3">
              <Link to="/boca-raton-cleaning" className="hover:underline">Boca Raton, FL</Link> · Deep Cleaning Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Deep Cleaning Service in Boca Raton, FL: What's Included &amp; What It Costs
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything Boca Raton homeowners need to know about deep cleaning — what's covered, how much it costs, and when to book one.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">Updated April 2026 · 6 min read</div>
          </header>

          {/* Intro */}
          <section className="mb-10">
            <p className="text-muted-foreground mb-4">
              Boca Raton homes have a reputation to uphold — and a standard clean just doesn't cut it when you're starting fresh, returning after season, or prepping a luxury rental for guests. That's where a deep clean comes in.
            </p>
            <p className="text-muted-foreground">
              A deep clean is the most thorough service we offer. It covers every surface, corner, and interior — including areas that most cleaners skip. Whether you're a year-round resident in Boca West or a snowbird returning to Broken Sound, this guide covers what you need to know.
            </p>
          </section>

          {/* What's Included */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              What's Included in a Boca Raton Deep Clean
            </h2>
            <p className="text-muted-foreground mb-4">
              Our deep cleaning service covers everything in a standard clean, plus:
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {deepCleanChecklist.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Note:</strong> Deep cleaning is the required first clean for all new recurring clients. It sets the baseline so every subsequent standard clean can be done efficiently and thoroughly.
            </p>
          </section>

          {/* Pricing */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Deep Cleaning Prices in Boca Raton, FL (2026)
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border mb-4">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">Home Size</th>
                    <th className="text-left p-3 font-semibold">Deep Clean (First)</th>
                    <th className="text-left p-3 font-semibold">Standard (Recurring)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="p-3">Studio / 1BR</td><td className="p-3 font-medium">$208</td><td className="p-3 text-muted-foreground">$118</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">2 Bedrooms</td><td className="p-3 font-medium">$278</td><td className="p-3 text-muted-foreground">$178</td></tr>
                  <tr><td className="p-3">3 Bedrooms</td><td className="p-3 font-medium">$348</td><td className="p-3 text-muted-foreground">$248</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">4 Bedrooms</td><td className="p-3 font-medium">$438</td><td className="p-3 text-muted-foreground">$313</td></tr>
                  <tr><td className="p-3">5+ Bedrooms</td><td className="p-3 font-medium">$658+</td><td className="p-3 text-muted-foreground">$533+</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">Eco-friendly products included. Add-ons (windows, carpets, walls) available. Recurring clients save 10–15% on all subsequent visits.</p>
          </section>

          {/* When to Book */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              When Boca Raton Homeowners Book a Deep Clean
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">First-time service</strong> — required for all new clients before starting a recurring schedule.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">Returning from up north</strong> — snowbirds returning to Boca West, Woodfield, or Polo Club often book a deep clean after months away.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">Before listing on Airbnb or VRBO</strong> — a deep-cleaned rental earns better reviews from the start.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">After construction or renovation</strong> — dust and debris accumulate in ways regular cleaning doesn't address.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">Seasonal reset</strong> — spring or fall deep clean before switching to maintenance mode.</span></li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions — Boca Raton Deep Cleaning
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-border pb-6">
                  <h3 className="font-semibold text-foreground mb-2">{q.name}</h3>
                  <p className="text-muted-foreground text-sm">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Related Boca Raton Cleaning Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog/move-out-cleaning-boca-raton" className="text-primary hover:underline">Boca Raton Move-Out Cleaning Guide — Get Your Deposit Back</Link></li>
              <li><Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton Cleaning Services Overview</Link></li>
              <li><Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">Palm Beach County Cleaning Services</Link></li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Book Your Boca Raton Deep Clean
            </h2>
            <p className="text-muted-foreground mb-6">
              Get your exact price online in seconds. No credit card required to book.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/#booking"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Instant Quote
              </Link>
              <a
                href="tel:+15615718725"
                className="border border-border px-6 py-3 rounded-lg font-semibold hover:border-primary/50 transition-colors text-foreground"
              >
                Call (561) 571-8725
              </a>
            </div>
          </section>
        </article>

        <RelatedLinks currentPage="/blog/deep-cleaning-service-boca-raton" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default DeepCleaningBocaRaton;
