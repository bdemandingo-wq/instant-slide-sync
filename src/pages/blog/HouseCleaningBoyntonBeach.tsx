import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Boynton Beach?",
    a: "House cleaning in Boynton Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Larger homes in Aberdeen or Valencia Reserve and waterfront properties are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Boynton Beach, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Boynton Beach communities including Aberdeen Country Club, Valencia Reserve, Leisureville, Tuscany Bay, Renaissance Commons, and downtown Boynton Beach. Licensed, insured, and background-checked."
  },
  {
    q: "Do you service active adult and 55+ communities in Boynton Beach?",
    a: "Yes. TIDYWISE serves Boynton Beach's active adult communities including Leisureville, Aberdeen, and Valencia Reserve. Our teams provide reliable, consistent service that residents can count on — same team each visit, no strangers in your home."
  },
  {
    q: "Do you offer seasonal cleaning for Boynton Beach snowbirds?",
    a: "Yes. Boynton Beach has a large seasonal population, particularly in its active adult communities. TIDYWISE offers arrival deep cleans, recurring winter service, and departure cleans with no long-term contracts. Book on your schedule."
  }
];

const HouseCleaningBoyntonBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Boynton Beach FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Boynton Beach, FL from $108. Licensed & insured. Aberdeen, Valencia Reserve, Leisureville & all neighborhoods. Active adult community specialists."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-boynton-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Boynton Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-boynton-beach" }
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
              House Cleaning in Boynton Beach, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Boynton Beach is one of Palm Beach County's fastest-growing cities — a mix of active adult communities, waterfront neighborhoods, young families in newer developments, and a revitalized downtown. Here's what Boynton Beach homeowners need to know about professional cleaning — pricing, neighborhoods, and how to find a trustworthy service.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Boynton Beach?</h2>
            <p className="text-muted-foreground mb-4">
              Boynton Beach cleaning prices are competitive and in line with Palm Beach County averages:
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
                    { s: "Standard Cleaning", p: "$108–$350", i: "Vacuuming, mopping, kitchen, bathrooms, dusting" },
                    { s: "Deep Cleaning", p: "$208–$500", i: "Standard + baseboards, cabinets, fixtures, appliances" },
                    { s: "Move In/Out", p: "$283–$600", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
                    { s: "Recurring Monthly", p: "5% off", i: "Consistent schedule, same team, no surprises" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Boynton Beach Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Boynton Beach neighborhoods, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Aberdeen Country Club", "Valencia Reserve", "Leisureville", "Tuscany Bay",
                "Renaissance Commons", "Quantum Lakes", "The Cascades", "Isles at Hunter's Run",
                "Quail Ridge", "Nautica Sound", "Spring Lake", "Chapel Hill"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Boynton Beach's Diverse Cleaning Needs</h2>
            <p className="text-muted-foreground mb-4">
              Boynton Beach's rapid growth means a wide range of home types with different needs:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Active adult and 55+ communities", b: "Aberdeen, Leisureville, and similar communities have residents who want a reliable, trustworthy team on a consistent schedule. TIDYWISE assigns the same team to recurring clients so you build a real relationship rather than meeting someone new every visit." },
                { t: "Newer planned developments", b: "Boynton Beach's growing western communities like Valencia Reserve and Renaissance Commons have newer construction with open floor plans and large tile areas. Professional cleaning keeps these homes genuinely clean, not just surface-level." },
                { t: "Waterfront and Intracoastal homes", b: "Eastern Boynton Beach along the Intracoastal faces salt air and coastal humidity. Windows, screens, and outdoor surfaces need more frequent attention than inland properties." },
                { t: "Seasonal snowbird scheduling", b: "Boynton Beach's active adult communities have significant seasonal populations. We accommodate flexible winter/spring scheduling with no long-term commitments and clear, upfront pricing." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Boynton Beach Cleaning Today</h2>
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
                <Link to="/delray-beach-cleaning" className="text-primary hover:underline">Delray Beach</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/lake-worth-cleaning" className="text-primary hover:underline">Lake Worth</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-boynton-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningBoyntonBeach;
