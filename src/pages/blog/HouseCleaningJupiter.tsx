import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Jupiter, FL?",
    a: "House cleaning in Jupiter costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Waterfront and estate homes in Jonathan's Landing, Admirals Cove, or Jupiter Island are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Jupiter, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Jupiter communities including Abacoa, Jonathan's Landing, Admirals Cove, Jupiter Island, Rialto, Botanica, and Pennock Point. Licensed, insured, and background-checked."
  },
  {
    q: "Do you clean waterfront and Intracoastal homes in Jupiter?",
    a: "Yes. TIDYWISE has extensive experience cleaning Jupiter's waterfront and Intracoastal homes. Salt air, dock exposure, and marine environments accelerate corrosion and buildup on windows, screens, and metal surfaces. Our teams remove salt film and residue without scratching glass or damaging fixtures."
  },
  {
    q: "Do you service Jupiter's golf and gated communities?",
    a: "Yes. TIDYWISE is familiar with Jupiter's gated communities and golf club access protocols. We handle visitor gate registration, HOA parking compliance, and security sign-in at Jonathan's Landing, Admirals Cove, and other communities so your appointment runs without complications."
  }
];

const HouseCleaningJupiter = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Jupiter FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Jupiter, FL from $108. Licensed & insured. Abacoa, Jonathan's Landing, Admirals Cove, Jupiter Island & all communities. Waterfront home specialists."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-jupiter"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Jupiter", url: "https://www.tidywisecleaning.com/blog/house-cleaning-jupiter" }
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
              House Cleaning in Jupiter, FL — Waterfront Homes, Golf Communities & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jupiter is one of Palm Beach County's most desirable addresses — waterfront homes, Intracoastal estates, golf club communities, and a growing year-round population. Cleaning here means dealing with salt air, marine environments, and the specific access requirements of Jupiter's gated neighborhoods. Here's what Jupiter homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Jupiter?</h2>
            <p className="text-muted-foreground mb-4">
              Jupiter cleaning prices reflect the market's larger homes and waterfront properties:
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
                    { s: "Deep Cleaning", p: "$208–$550", i: "Standard + baseboards, cabinets, salt residue removal, fixtures" },
                    { s: "Move In/Out", p: "$283–$650", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Jupiter Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Jupiter communities and surrounding areas:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Abacoa", "Jonathan's Landing", "Admirals Cove", "Jupiter Island",
                "Rialto", "Botanica", "Pennock Point", "Harbour Isles",
                "Shores of Jupiter", "The Bluffs", "Indian Creek", "Tequesta"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Cleaning Jupiter's Waterfront Homes</h2>
            <p className="text-muted-foreground mb-4">
              Jupiter's Intracoastal and waterfront homes face cleaning challenges that inland properties don't:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Salt air and marine residue", b: "Homes on the Intracoastal or near the inlet accumulate salt film on windows, screens, stainless steel appliances, and outdoor fixtures year-round. Our teams remove salt buildup without scratching glass or damaging metal surfaces." },
                { t: "Screen enclosures and dock areas", b: "Pool cages and screen enclosures trap pollen, salt, and organic debris. We clean screen-enclosed areas as part of comprehensive service rather than treating them as afterthoughts." },
                { t: "Premium surfaces throughout", b: "Jupiter's waterfront homes typically have natural stone, custom tile, and high-end finishes. We use surface-appropriate products for marble, travertine, and designer fixtures — never generic cleaners that can cause permanent damage." },
                { t: "Seasonal scheduling flexibility", b: "Many Jupiter homeowners split time between Florida and other states. We accommodate seasonal schedules with no long-term contracts and can pause and resume service as needed." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Jupiter Cleaning Today</h2>
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
                <Link to="/palm-beach-gardens-cleaning" className="text-primary hover:underline">Palm Beach Gardens</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                <Link to="/wellington-cleaning" className="text-primary hover:underline">Wellington</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-jupiter" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningJupiter;
