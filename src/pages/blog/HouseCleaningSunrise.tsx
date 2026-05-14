import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Sunrise, FL?",
    a: "House cleaning in Sunrise costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Sunrise's mix of suburban homes, condos, and active adult communities are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Sunrise, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Sunrise communities including Sunrise Lakes, Welleby, Sawgrass Lakes, Springtree, and Inverrary. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Sunrise Lakes and other active adult communities in Sunrise?",
    a: "Yes. TIDYWISE serves Sunrise Lakes and all of Sunrise's active adult and age-restricted communities. Our teams provide reliable, consistent service on a schedule that works for you — including building or community access coordination and consistent team assignments."
  },
  {
    q: "How often should Sunrise homeowners book professional cleaning?",
    a: "Most Sunrise homeowners book monthly or bi-weekly cleaning. South Florida's humidity means dust and allergens accumulate faster than in drier climates — regular professional cleaning keeps this manageable year-round. Recurring clients save 5–15%."
  }
];

const HouseCleaningSunrise = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Sunrise FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Sunrise, FL from $108. Licensed & insured. Sunrise Lakes, Welleby, Sawgrass Lakes, Inverrary & all neighborhoods. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-sunrise"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Sunrise", url: "https://www.tidywisecleaning.com/blog/house-cleaning-sunrise" }
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
              House Cleaning in Sunrise, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Sunrise is western Broward County's commercial and residential hub — home to Sawgrass Mills Mall, a major arena, and a diverse mix of neighborhoods ranging from Sunrise Lakes' active adult community to newer family developments near the Sawgrass Expressway. Here's what Sunrise homeowners need to know about professional cleaning.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Sunrise?</h2>
            <p className="text-muted-foreground mb-4">
              Sunrise cleaning prices are competitive and in line with Broward County averages:
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Sunrise Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Sunrise neighborhoods, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Sunrise Lakes", "Welleby", "Sawgrass Lakes", "Springtree", "Inverrary",
                "Sunrise Golf Village", "Sabal Palm", "Country Isles",
                "Sunset Strip", "Broadview Park"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Sunrise's Active Adult and Family Communities</h2>
            <p className="text-muted-foreground mb-4">
              Sunrise has two distinct residential profiles that drive different cleaning needs:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Sunrise Lakes and active adult communities", b: "Sunrise Lakes is one of Broward's largest age-restricted communities — residents want a reliable, trustworthy team on a predictable schedule. TIDYWISE assigns consistent teams to recurring clients so you're never meeting someone new." },
                { t: "Suburban family homes near Sawgrass", b: "Newer developments in western Sunrise cater to working families — larger homes, multiple bathrooms, kids, and pets. Eco-friendly products and consistent cleaning are priorities for these households." },
                { t: "Condo and townhome communities", b: "Sunrise has a significant condo inventory, particularly in Inverrary and along University Drive. Building access requirements, visitor parking, and HOA compliance are part of every visit." },
                { t: "Humidity and indoor air quality", b: "Western Broward's inland location doesn't have ocean breezes to offset South Florida's humidity. Dust and allergens accumulate quickly — professional cleaning at regular intervals is the most effective defense." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Sunrise Cleaning Today</h2>
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
                <Link to="/plantation-cleaning" className="text-primary hover:underline">Plantation</Link>,{" "}
                <Link to="/tamarac-cleaning" className="text-primary hover:underline">Tamarac</Link>,{" "}
                <Link to="/lauderhill-cleaning" className="text-primary hover:underline">Lauderhill</Link>,{" "}
                <Link to="/coral-springs-cleaning" className="text-primary hover:underline">Coral Springs</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-sunrise" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningSunrise;
