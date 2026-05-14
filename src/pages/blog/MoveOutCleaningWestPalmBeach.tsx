import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const MoveOutCleaningWestPalmBeach = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does move-out cleaning cost in West Palm Beach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Move-out cleaning in West Palm Beach starts at $283 for a studio or 1-bedroom. A 2-bedroom typically costs $353, and a 3-bedroom runs around $423. Larger homes of 4+ bedrooms start at $513. All prices include inside appliances, cabinets, closets, and every room your landlord will inspect.",
        },
      },
      {
        "@type": "Question",
        name: "Will a professional move-out clean help me get my security deposit back?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — a professional move-out clean significantly increases your chances of a full deposit return. Florida landlords commonly deduct for dirty appliances, bathroom grime, and uncleaned carpets. Our move-out service covers all of these, and we provide a detailed checklist so you have documentation of the work completed.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book move-out cleaning in West Palm Beach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book at least 3-5 days before your move-out date to ensure availability. For end-of-month moves (when demand spikes in West Palm Beach), book 1-2 weeks ahead. We do keep same-day slots for emergencies — call (561) 571-8725 if you need urgent service.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to be present during the move-out cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — you don't need to be there. Many West Palm Beach clients give us lockbox or door code access and review photos when we're done. We send before-and-after documentation so you have proof the property was left in great condition.",
        },
      },
    ],
  };

  const moveOutChecklist = [
    "All rooms vacuumed and mopped",
    "Baseboards wiped throughout",
    "Inside oven cleaned",
    "Refrigerator emptied and cleaned inside",
    "All cabinets and drawers wiped inside and out",
    "Bathroom tiles and grout scrubbed",
    "Toilets, sinks, and tubs deep cleaned",
    "Mirrors cleaned streak-free",
    "All closets emptied and wiped",
    "Ceiling fans and light fixtures dusted",
    "Window sills and blinds dusted",
    "Garage swept and entry areas cleaned",
    "Doors and door frames wiped",
    "All trash removed",
    "Light switches and outlets cleaned",
    "Patio or balcony swept (if applicable)",
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Move Out Cleaning West Palm Beach | Deposit Ready"
        pageDescription="Professional move-out cleaning in West Palm Beach, FL from $283. Includes appliances, cabinets, and every room landlords inspect. Licensed & insured. Book now!"
        canonicalUrl="https://www.tidywisecleaning.com/blog/move-out-cleaning-west-palm-beach"
        pageType="article"
        additionalSchema={faqSchema}
      />
      <main className="min-h-screen">
        <Navbar />

        <article className="max-w-3xl mx-auto px-4 py-16 pt-24">
          <header className="mb-10">
            <div className="text-sm text-primary font-medium mb-3">
              <Link to="/west-palm-beach-cleaning" className="hover:underline">West Palm Beach, FL</Link> · Move-Out Cleaning Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Move-Out Cleaning in West Palm Beach, FL: Get Your Security Deposit Back
            </h1>
            <p className="text-muted-foreground text-lg">
              Moving out of a West Palm Beach rental? Here's exactly what a professional move-out clean covers, what it costs, and how to protect your deposit.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">Updated April 2026 · 6 min read</div>
          </header>

          {/* Intro */}
          <section className="mb-10">
            <p className="text-muted-foreground mb-4">
              West Palm Beach is one of Florida's most active rental markets — whether you're in a high-rise downtown near CityPlace, a waterfront condo in Palm Beach Shores, or a house in Flamingo Park, your landlord is going to inspect every corner when you leave.
            </p>
            <p className="text-muted-foreground">
              A professional move-out cleaning is the most reliable way to leave the property in documented, spotless condition — and give yourself the best shot at a full deposit refund.
            </p>
          </section>

          {/* What's Included */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              What's Included in Our West Palm Beach Move-Out Clean
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 mb-4">
              {moveOutChecklist.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              We follow Florida's standard landlord inspection checklist so nothing gets missed.
            </p>
          </section>

          {/* Pricing */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Move-Out Cleaning Prices in West Palm Beach, FL (2026)
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border mb-4">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">Home Size</th>
                    <th className="text-left p-3 font-semibold">Move In / Move Out</th>
                    <th className="text-left p-3 font-semibold">Deep Clean</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="p-3">Studio / 1BR</td><td className="p-3 font-medium">$283</td><td className="p-3 text-muted-foreground">$208</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">2 Bedrooms</td><td className="p-3 font-medium">$353</td><td className="p-3 text-muted-foreground">$278</td></tr>
                  <tr><td className="p-3">3 Bedrooms</td><td className="p-3 font-medium">$423</td><td className="p-3 text-muted-foreground">$348</td></tr>
                  <tr className="bg-muted/30"><td className="p-3">4 Bedrooms</td><td className="p-3 font-medium">$513</td><td className="p-3 text-muted-foreground">$438</td></tr>
                  <tr><td className="p-3">5+ Bedrooms</td><td className="p-3 font-medium">$733+</td><td className="p-3 text-muted-foreground">$658+</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">Carpet cleaning and wall washing available as add-ons. No credit card needed to book.</p>
          </section>

          {/* WPB-specific tips */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              West Palm Beach Rental Market: What Landlords Inspect
            </h2>
            <p className="text-muted-foreground mb-4">
              West Palm Beach landlords typically focus on a few areas when determining deposit deductions:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">Kitchen appliances</strong> — Ovens and refrigerators in WPB rentals see heavy use and are almost always inspected closely. Inside the oven is the #1 source of deposit deductions.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">Bathroom grout and tile</strong> — South Florida humidity accelerates mold and mildew. Landlords expect grout to be clean, not just rinsed.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">Carpets</strong> — If your WPB rental has carpet, add our carpet cleaning service. Landlords can legally deduct carpet cleaning from your deposit.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold">→</span> <span><strong className="text-foreground">Balconies and patios</strong> — Outdoor spaces accumulate salt air residue and are often overlooked by tenants. We sweep and wipe these down as part of our move-out service.</span></li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions — WPB Move-Out Cleaning
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
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Related West Palm Beach Cleaning Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog/house-cleaning-west-palm-beach" className="text-primary hover:underline">House Cleaning in West Palm Beach — Pricing &amp; Services</Link></li>
              <li><Link to="/blog/move-out-cleaning-boca-raton" className="text-primary hover:underline">Move-Out Cleaning in Boca Raton — Get Your Deposit Back</Link></li>
              <li><Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach Cleaning Services Overview</Link></li>
              <li><Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">Palm Beach County Cleaning Services</Link></li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Book Your West Palm Beach Move-Out Clean
            </h2>
            <p className="text-muted-foreground mb-2">
              Get your price in seconds. We'll confirm your appointment within 15 minutes.
            </p>
            <p className="text-sm text-muted-foreground mb-6">Free re-clean guarantee if anything is missed.</p>
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

        <RelatedLinks currentPage="/blog/move-out-cleaning-west-palm-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default MoveOutCleaningWestPalmBeach;
