import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const HouseCleaningHollywood = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does house cleaning cost in Hollywood, FL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "House cleaning in Hollywood, FL starts at $118 for a standard clean of a studio or 1-bedroom home. A 3-bedroom home typically runs $178–$248 depending on frequency. Deep cleans start at $208. All prices include eco-friendly products and a satisfaction guarantee.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day cleaning in Hollywood, FL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For same-day or next-day availability in Hollywood, FL, call us directly at (561) 861-2752. We keep slots open for urgent bookings, especially for vacation rentals and move-outs.",
        },
      },
      {
        "@type": "Question",
        name: "What neighborhoods in Hollywood do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We clean homes throughout Hollywood, FL including Hollywood Beach, Downtown Hollywood, West Hollywood, Emerald Hills, Dania Beach, and all surrounding communities in Broward County.",
        },
      },
      {
        "@type": "Question",
        name: "Are your cleaners licensed and insured in Hollywood, FL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every Clean Collective cleaner serving Hollywood is background-checked, licensed, and fully insured. We carry liability insurance and treat your home as if it were our own.",
        },
      },
    ],
  };

  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Hollywood FL | Licensed & Insured | Clean Collective"
        pageDescription="House cleaning in Hollywood, FL from $118. Licensed & insured. Hollywood Beach, Emerald Hills, Dania Beach & all Hollywood neighborhoods. Book now."
        canonicalUrl="https://www.cleancollective.net/blog/house-cleaning-hollywood-florida"
        pageType="article"
        additionalSchema={faqSchema}
      />
      <main className="min-h-screen">
        <Navbar />

        <article className="max-w-3xl mx-auto px-4 py-16 pt-24">
          <header className="mb-10">
            <div className="text-sm text-primary font-medium mb-3">
              <Link to="/hollywood-cleaning" className="hover:underline">Hollywood, FL</Link> · Cleaning Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              House Cleaning in Hollywood, FL: Pricing, Services &amp; What to Expect
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything Hollywood, FL homeowners need to know before booking a cleaning service — pricing by home size, what's included, and how to find a cleaner you can actually trust.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">Updated April 2026 · 5 min read</div>
          </header>

          {/* Pricing Table */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              2026 House Cleaning Prices in Hollywood, FL
            </h2>
            <p className="text-muted-foreground mb-4">
              Prices depend on home size and service type. Here's what Hollywood residents typically pay with Clean Collective:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">Home Size</th>
                    <th className="text-left p-3 font-semibold">Standard Clean</th>
                    <th className="text-left p-3 font-semibold">Deep Clean</th>
                    <th className="text-left p-3 font-semibold">Move Out</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="p-3">Studio / 1BR</td><td className="p-3">$118</td><td className="p-3">$208</td><td className="p-3">$283</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">2 Bedrooms</td><td className="p-3">$178</td><td className="p-3">$278</td><td className="p-3">$353</td></tr>
                  <tr><td className="p-3">3 Bedrooms</td><td className="p-3">$248</td><td className="p-3">$348</td><td className="p-3">$423</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">4 Bedrooms</td><td className="p-3">$313</td><td className="p-3">$438</td><td className="p-3">$513</td></tr>
                  <tr><td className="p-3">5+ Bedrooms</td><td className="p-3">$533+</td><td className="p-3">$658+</td><td className="p-3">$733+</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Save 5–15% with recurring cleanings. Eco-friendly products included.</p>
          </section>

          {/* Neighborhoods */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Hollywood, FL Neighborhoods We Serve
            </h2>
            <p className="text-muted-foreground mb-4">
              Our cleaning teams cover all of Hollywood, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Hollywood Beach", "Downtown Hollywood", "Emerald Hills", "West Hollywood",
                "Dania Beach", "Pembroke Pines border", "Hallandale Beach border", "Lake Forest",
                "Boulevard Heights", "Liberia", "Franklin Park", "Oakwood"].map((area) => (
                <span key={area} className="bg-muted px-3 py-1 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">
              We're also part of our broader{" "}
              <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward County cleaning services</Link>.
              Neighboring cities{" "}
              <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link> and{" "}
              <Link to="/hallandale-beach-cleaning" className="text-primary hover:underline">Hallandale Beach</Link> are also covered.
            </p>
          </section>

          {/* Services */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Cleaning Services Available in Hollywood, FL
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Standard Clean", desc: "Weekly maintenance cleaning — kitchens, bathrooms, floors, dusting. Ideal for keeping up a consistently clean home." },
                { title: "Deep Clean", desc: "Thorough scrub of every surface. Includes inside appliances, baseboards, ceiling fans, and areas standard cleaning skips." },
                { title: "Move In / Move Out", desc: "Leave your old place spotless or prep your new Hollywood home before move-in. Includes closets, cabinets, and more." },
                { title: "Airbnb / Short-Term Rental", desc: "Fast, reliable turnovers for vacation rentals near Hollywood Beach. We restock and make the unit guest-ready." },
              ].map((s) => (
                <div key={s.title} className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Clean Collective */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Why Hollywood Residents Choose Clean Collective
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span> <span><strong className="text-foreground">Transparent pricing</strong> — get your exact price online without calling anyone.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span> <span><strong className="text-foreground">Licensed &amp; insured</strong> — every cleaner is background-checked and bonded.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span> <span><strong className="text-foreground">Eco-friendly products</strong> — safe for kids, pets, and the environment.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span> <span><strong className="text-foreground">Free re-clean guarantee</strong> — if anything's missed, we'll come back at no charge.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">✓</span> <span><strong className="text-foreground">Confirm in 15 minutes</strong> — book online and we'll call to confirm your time fast.</span></li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions — Hollywood, FL Cleaning
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

          {/* CTA */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Get Your Hollywood Cleaning Quote
            </h2>
            <p className="text-muted-foreground mb-6">
              Instant price, no credit card, no phone call required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/#booking"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Instant Quote
              </Link>
              <a
                href="tel:+15618612752"
                className="border border-border px-6 py-3 rounded-lg font-semibold hover:border-primary/50 transition-colors text-foreground"
              >
                Call (561) 861-2752
              </a>
            </div>
          </section>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-hollywood-florida" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningHollywood;
