import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Plantation, FL?",
    a: "House cleaning in Plantation costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Plantation's larger established homes and country club properties are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Plantation, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Plantation communities including Plantation Acres, Plantation Golf & Country Club, The Pointe, Jacaranda, and Westport. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Plantation Golf & Country Club homes?",
    a: "Yes. TIDYWISE serves Plantation's country club and gated communities. Our teams handle visitor gate registration, HOA parking requirements, and community access at Plantation Golf & Country Club and other gated Plantation neighborhoods — so your appointment runs without complications."
  },
  {
    q: "How often should Plantation homeowners book professional cleaning?",
    a: "Most Plantation homeowners with larger homes book bi-weekly cleaning. Plantation's established single-family homes with 3–5 bedrooms and multiple bathrooms benefit from consistent professional service to manage South Florida's humidity-driven buildup. Recurring clients save 5–15%."
  }
];

const HouseCleaningPlantation = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Plantation FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Plantation, FL from $108. Licensed & insured. Plantation Golf & Country Club, Jacaranda, Westport & all neighborhoods. Book now."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-plantation"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Plantation", url: "https://www.tidywisecleaning.com/blog/house-cleaning-plantation" }
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
              House Cleaning in Plantation, FL — Established Homes, Country Clubs & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Plantation is one of Broward County's most established communities — a well-planned city of tree-lined streets, mature neighborhoods, and quality single-family homes. Plantation Golf & Country Club, Jacaranda, and the city's other established communities have maintained their character for decades. Here's what Plantation homeowners need to know about professional cleaning.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Plantation?</h2>
            <p className="text-muted-foreground mb-4">
              Plantation cleaning prices are in line with Broward County averages for established single-family homes:
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Plantation Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Plantation neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Plantation Golf & Country Club", "Jacaranda", "Westport", "Plantation Acres",
                "The Pointe", "Sunrise Golf Village", "Cobblestone Creek",
                "Lago Mar", "Central Park", "Lauderdale West"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Plantation Homes Need Professional Cleaning</h2>
            <p className="text-muted-foreground mb-4">
              Plantation's established homes — many built in the 1970s through 1990s — have specific characteristics that affect cleaning:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Larger floor plans with lots of tile", b: "Plantation's single-family homes run 2,000–4,000+ square feet with tile throughout. At this size, professional cleaning is genuinely more thorough and efficient than what most homeowners can do themselves." },
                { t: "Mature landscaping and pollen", b: "Plantation's beautiful mature tree canopy creates heavy pollen seasons. Outdoor-to-indoor tracking is significant, particularly from screen-enclosed pools and covered patios that connect to living spaces." },
                { t: "Country club community access", b: "Plantation Golf & Country Club has visitor registration requirements. Our teams handle gate check-in, HOA parking compliance, and community security sign-in on every visit." },
                { t: "Eco-friendly products for family homes", b: "Plantation is a family-oriented city. TIDYWISE's non-toxic, eco-certified products are safe for children and pets — not an optional add-on, but standard on every service." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Plantation Cleaning Today</h2>
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
                <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>,{" "}
                <Link to="/davie-cleaning" className="text-primary hover:underline">Davie</Link>,{" "}
                <Link to="/weston-cleaning" className="text-primary hover:underline">Weston</Link>,{" "}
                <Link to="/sunrise-cleaning" className="text-primary hover:underline">Sunrise</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-plantation" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningPlantation;
