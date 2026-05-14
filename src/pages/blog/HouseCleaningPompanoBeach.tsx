import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Pompano Beach?",
    a: "House cleaning in Pompano Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. TIDYWISE provides instant quotes online."
  },
  {
    q: "Do you clean Airbnb and vacation rentals in Pompano Beach?",
    a: "Yes. TIDYWISE provides Airbnb turnover cleaning and vacation rental cleaning throughout Pompano Beach. We offer same-day turnovers and can handle linen changes, restocking, and guest-ready preparation. Contact us for a custom quote."
  },
  {
    q: "Are TIDYWISE cleaners licensed and insured in Pompano Beach?",
    a: "Yes. TIDYWISE is fully licensed and insured in Broward County. Every cleaner is background-checked before their first assignment. We carry general liability insurance and can provide a certificate of insurance on request."
  },
  {
    q: "How often should I have my Pompano Beach home cleaned?",
    a: "Pompano Beach's coastal humidity and salt air mean homes collect dust and buildup faster than inland properties. Most Pompano Beach homeowners book bi-weekly standard cleaning to maintain their home, with deep cleaning quarterly."
  }
];

const HouseCleaningPompanoBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Pompano Beach FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Pompano Beach, FL from $108. Licensed & insured. Lighthouse Point, Cresthaven, Pompano Beach Highlands & all neighborhoods. Book now."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-pompano-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Pompano Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-pompano-beach" }
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
              House Cleaning in Pompano Beach, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Pompano Beach stretches from the coast to western Broward County, with a mix of beachfront condos, waterfront canal homes, and inland single-family neighborhoods. Finding a cleaning service that actually serves your specific area — and handles coastal home challenges — matters. Here's what Pompano Beach homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Pompano Beach?</h2>
            <p className="text-muted-foreground mb-4">
              Pompano Beach cleaning prices are in line with the rest of Broward County:
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
                    { s: "Airbnb Turnover", p: "Custom quote", i: "Fast turnaround, linen changes, guest-ready" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Pompano Beach Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Pompano Beach neighborhoods from the beach to the western suburbs:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Lighthouse Point", "Cresthaven", "Pompano Beach Highlands", "Crystal Lake",
                "Collier Manor", "Pompano Beach Acres", "McNab", "Cypress Bend",
                "Palm Aire", "Boulevard Heights", "Deerfield Isle", "Santa Barbara"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Pompano Beach Homes Need Specialized Cleaning</h2>
            <p className="text-muted-foreground mb-4">
              Pompano Beach's coastal location creates specific cleaning challenges. Salt air from the Atlantic deposits residue on windows, screens, and exterior-facing surfaces faster than inland homes. Canal-front properties deal with moisture and humidity on their lower floors. And the city's large vacation rental market means many homes need reliable turnover cleaning between guests.
            </p>
            <p className="text-muted-foreground mb-4">
              TIDYWISE teams are familiar with Pompano Beach's coastal conditions — from protecting stainless steel finishes from salt corrosion to keeping tile grout clean in the humid bathrooms that are common in Florida homes built before 2000.
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Pompano Beach Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Broward County", b: "Florida law requires liability insurance. Ask for the COI — a legitimate service sends it without hesitation." },
                { t: "Background-checked cleaners", b: "You're giving access to your home. Every TIDYWISE cleaner passes a criminal background check before their first appointment." },
                { t: "Coastal home experience", b: "Salt air, screen enclosures, and tile-heavy interiors require specific knowledge. Don't assume any cleaner knows how to handle them." },
                { t: "Transparent pricing", b: "Published rates online mean no surprises. Services that require an in-home estimate before quoting typically price higher." },
                { t: "Satisfaction guarantee", b: "TIDYWISE re-cleans for free if you're not satisfied — no excuses, no fine print." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Pompano Beach Cleaning Today</h2>
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
                <Link to="/deerfield-beach-cleaning" className="text-primary hover:underline">Deerfield Beach</Link>,{" "}
                <Link to="/coral-springs-cleaning" className="text-primary hover:underline">Coral Springs</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-pompano-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningPompanoBeach;
