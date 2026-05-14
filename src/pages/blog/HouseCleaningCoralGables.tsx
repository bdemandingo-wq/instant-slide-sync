import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Coral Gables?",
    a: "House cleaning in Coral Gables costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Larger Mediterranean estates are priced by square footage and number of bathrooms. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Coral Gables, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Coral Gables neighborhoods including Gables Estates, Biltmore, Coral Gables Country Club, Coconut Grove adjacent areas, and South Miami Heights. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Coral Gables Mediterranean and historic homes?",
    a: "Yes. TIDYWISE has experience with Coral Gables' historic Mediterranean Revival architecture. Our teams understand how to clean and protect natural stone, ornate tile work, vintage fixtures, and delicate surfaces found in Coral Gables' classic homes without causing damage."
  },
  {
    q: "How often should Coral Gables homeowners book professional cleaning?",
    a: "Most Coral Gables homeowners book bi-weekly cleaning for larger homes and estates. Monthly deep cleaning is popular for maintaining natural stone floors and premium finishes. TIDYWISE accommodates seasonal and flexible scheduling with no long-term contracts."
  }
];

const HouseCleaningCoralGables = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Coral Gables FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Coral Gables, FL from $108. Licensed & insured. Gables Estates, Biltmore area, Coral Gables Country Club & all neighborhoods. Mediterranean home specialists."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-coral-gables"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Coral Gables", url: "https://www.tidywisecleaning.com/blog/house-cleaning-coral-gables" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-6">
              <span className="text-xs text-muted-foreground">Local Guides · April 2026</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              House Cleaning in Coral Gables, FL — Mediterranean Homes, Estates & What It Costs
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Coral Gables is one of Miami-Dade's most distinctive cities — tree-lined boulevards, Mediterranean Revival architecture, and some of South Florida's most valuable real estate. Cleaning here isn't generic. Historic homes, natural stone, ornate tile, and high-end finishes require specific expertise. Here's what Coral Gables homeowners need to know.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 p-5 bg-muted/40 rounded-xl border">
              <Button asChild>
                <Link to="/#booking">Get Instant Quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (561) 571-8725
                </a>
              </Button>
              <p className="text-sm text-muted-foreground self-center">4.9 ★ · 127+ reviews · Licensed & insured</p>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Coral Gables?</h2>
            <p className="text-muted-foreground mb-4">
              Coral Gables cleaning prices reflect the city's larger, more detailed homes:
            </p>
            <div className="rounded-xl border overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Service</th>
                    <th className="text-left px-5 py-3 font-semibold">Price Range</th>
                    <th className="text-left px-5 py-3 font-semibold">What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "Standard Cleaning", p: "$108–$400", i: "Vacuuming, mopping, kitchen, bathrooms, dusting all surfaces" },
                    { s: "Deep Cleaning", p: "$208–$550", i: "Standard + baseboards, cabinets, natural stone care, fixtures" },
                    { s: "Move In/Out", p: "$283–$650", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
                    { s: "Monthly Recurring", p: "5% off", i: "Preferred for maintaining premium finishes and natural stone" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-5 py-3 font-medium">{row.s}</td>
                      <td className="px-5 py-3 text-primary font-semibold">{row.p}</td>
                      <td className="px-5 py-3 text-muted-foreground text-xs">{row.i}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              All prices include eco-friendly products. Recurring bookings save 5–15%.{" "}
              <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">See full South Florida pricing guide →</Link>
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Coral Gables Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Coral Gables neighborhoods and surrounding areas:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Gables Estates", "Biltmore", "Coral Gables Country Club", "Cocoplum", "Old Cutler",
                "South Miami Heights", "Riviera", "Sunset", "Ponce-Davis", "Hammocks",
                "Miracle Mile area", "University of Miami area"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Cleaning Coral Gables Homes: What's Different</h2>
            <p className="text-muted-foreground mb-4">
              Coral Gables was built with specific aesthetic standards — and that means specific cleaning requirements:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Natural stone and ornate tile", b: "Many Coral Gables homes have marble, travertine, or custom tile throughout. These require pH-neutral cleaners — standard products can etch and permanently damage stone. We use surface-appropriate products for every material." },
                { t: "Large, detailed homes", b: "The average Coral Gables home is substantially larger than a typical South Florida home. Cleaning takes longer and requires a more systematic team approach to cover everything properly." },
                { t: "Mature landscaping and humidity", b: "Coral Gables' mature tree canopy is beautiful but means heavy pollen seasons and significant outdoor-to-indoor tracking. Professional cleaning keeps this manageable year-round." },
                { t: "High-value surfaces and finishes", b: "Custom woodwork, imported stone, and designer fixtures need specific handling. Always ask a cleaning company exactly what products they use before letting them into a Coral Gables home." },
              ].map(item => (
                <li key={item.t} className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-1">{item.t}</p>
                  <p className="text-sm text-muted-foreground">{item.b}</p>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold mt-10 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-muted/30 rounded-xl border p-5">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary text-primary-foreground rounded-xl text-center">
              <h2 className="font-display text-2xl font-bold mb-3">Book Coral Gables Cleaning Today</h2>
              <p className="text-primary-foreground/90 mb-5">Instant quote. Same-day availability. Satisfaction guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/miami-cleaning" className="text-primary hover:underline">Miami</Link>,{" "}
                <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>,{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>,{" "}
                <Link to="/doral-cleaning" className="text-primary hover:underline">Doral</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-coral-gables" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningCoralGables;
