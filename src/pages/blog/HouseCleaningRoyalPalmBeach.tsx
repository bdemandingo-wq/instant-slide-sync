import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Royal Palm Beach?",
    a: "House cleaning in Royal Palm Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Royal Palm Beach's suburban homes are priced by square footage and number of bathrooms. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Royal Palm Beach, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Royal Palm Beach communities including The Acreage, Crestwood, Versailles, and Royal Palm Beach Commons area. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Royal Palm Beach and The Acreage?",
    a: "Yes. TIDYWISE serves Royal Palm Beach and The Acreage area. The Acreage's larger rural parcels and ranch-style homes have specific cleaning needs — more outdoor tracking and larger square footage. We clean all home types in western Palm Beach County."
  },
  {
    q: "How often should Royal Palm Beach homeowners book professional cleaning?",
    a: "Most Royal Palm Beach homeowners book bi-weekly cleaning. South Florida's year-round humidity means consistent professional cleaning is the most effective way to manage indoor air quality and keep larger suburban homes genuinely clean. Recurring clients save 5–15%."
  }
];

const HouseCleaningRoyalPalmBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Royal Palm Beach FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Royal Palm Beach, FL from $108. Licensed & insured. The Acreage, Crestwood, Versailles & all communities. Western Palm Beach County specialists."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-royal-palm-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Royal Palm Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-royal-palm-beach" }
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
              House Cleaning in Royal Palm Beach, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Royal Palm Beach is western Palm Beach County's established suburban community — family-oriented, well-maintained neighborhoods, and larger homes on generous lots. Adjacent to The Acreage, it's one of the county's most family-friendly areas. Here's what Royal Palm Beach homeowners need to know about professional cleaning.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Royal Palm Beach?</h2>
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
                    { s: "Bi-Weekly Recurring", p: "10% off", i: "Same team, consistent schedule, priority booking" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Royal Palm Beach Communities We Clean</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["The Acreage", "Crestwood", "Versailles", "Madison Green", "Cypress Preserve",
                "Saratoga Lakes", "Royal Palm Beach Commons area", "Emerald Dunes",
                "Tuscany", "La Mancha"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Royal Palm Beach Homes Need Professional Cleaning</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Large family homes with extensive tile", b: "Royal Palm Beach's suburban homes run 2,000–4,000+ square feet with tile throughout. At this size, professional cleaning is genuinely more thorough and time-efficient than what most families can do themselves." },
                { t: "Outdoor tracking from large lots", b: "Royal Palm Beach lots are larger than typical South Florida suburban properties — more yard, more pets, more outdoor space means more outdoor-to-indoor tracking. Regular professional cleaning manages this effectively." },
                { t: "Eco-friendly products for family homes", b: "Royal Palm Beach is a family city. TIDYWISE's non-toxic, eco-certified products are safe for children, pets, and anyone with sensitivities — standard on every service, not an add-on." },
                { t: "Licensed and insured in Palm Beach County", b: "Full general liability insurance, available on request. Background-checked cleaners on every assignment. The basics that any legitimate service provides without hesitation." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Royal Palm Beach Cleaning Today</h2>
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
                <Link to="/wellington-cleaning" className="text-primary hover:underline">Wellington</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/palm-beach-gardens-cleaning" className="text-primary hover:underline">Palm Beach Gardens</Link>,{" "}
                <Link to="/boynton-beach-cleaning" className="text-primary hover:underline">Boynton Beach</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-royal-palm-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningRoyalPalmBeach;
