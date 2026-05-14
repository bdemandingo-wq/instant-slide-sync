import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in North Miami?",
    a: "House cleaning in North Miami costs $108–$320 for standard cleaning, $208–$480 for deep cleaning, and $283–$580 for move in/out cleaning. North Miami's mix of single-family homes, condos, and waterfront properties are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in North Miami, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all North Miami neighborhoods including Keystone Islands, Biscayne Park, Arch Creek, Sans Souci Estates, and the Biscayne corridor. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Biscayne waterfront homes in North Miami?",
    a: "Yes. TIDYWISE serves North Miami's Biscayne waterfront and canal-front properties. Salt air and bay exposure create specific cleaning challenges — salt film on windows, screens, and metal surfaces requires regular professional cleaning. Our teams handle it without scratching or damaging surfaces."
  },
  {
    q: "Do you offer move-in and move-out cleaning in North Miami?",
    a: "Yes. North Miami has an active rental market with frequent tenant turnover. TIDYWISE provides thorough move-in and move-out cleaning — appliances, inside cabinets, windows, and baseboards — to get units inspection-ready. Book online for same-week availability."
  }
];

const HouseCleaningNorthMiami = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning North Miami FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in North Miami, FL from $108. Licensed & insured. Keystone Islands, Biscayne Park, Sans Souci & all neighborhoods. Move-in/out specialists."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-north-miami"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning North Miami", url: "https://www.tidywisecleaning.com/blog/house-cleaning-north-miami" }
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
              House Cleaning in North Miami, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              North Miami is one of Miami-Dade's most culturally diverse cities — a mix of Haitian-American, Jamaican, and Latin American communities, Biscayne waterfront properties, and neighborhoods undergoing genuine reinvention. Here's what North Miami homeowners and renters need to know about professional cleaning — pricing, neighborhoods, and what to look for in a trustworthy service.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in North Miami?</h2>
            <p className="text-muted-foreground mb-4">
              North Miami cleaning prices are among the most competitive in Miami-Dade:
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
                    { s: "Standard Cleaning", p: "$108–$320", i: "Vacuuming, mopping, kitchen, bathrooms, dusting" },
                    { s: "Deep Cleaning", p: "$208–$480", i: "Standard + baseboards, cabinets, fixtures, appliances" },
                    { s: "Move In/Out", p: "$283–$580", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
                    { s: "Recurring Bi-Weekly", p: "10% off", i: "Same team, consistent schedule, priority booking" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">North Miami Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all North Miami neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Keystone Islands", "Biscayne Park", "Sans Souci Estates", "Arch Creek",
                "Biscayne corridor", "NE 125th Street area", "North Shore",
                "Enchanted Lake", "Larchmont", "Morningside-adjacent"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a North Miami Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Miami-Dade County", b: "Always request the certificate of insurance before letting any cleaning service into your home. A legitimate company provides it immediately. Never skip this step regardless of how the service was recommended." },
                { t: "Background-checked cleaners", b: "Every TIDYWISE cleaner passes a criminal background check before their first assignment. In a city with an active rental market and frequent move cycles, trust in who you're letting in matters." },
                { t: "Transparent online pricing", b: "If a cleaning company won't give you a price without coming to your home first, the price is almost always higher than what transparent services publish. TIDYWISE shows exact pricing online — no in-home visits required." },
                { t: "Waterfront and coastal experience", b: "North Miami's Biscayne and canal-front properties face salt air challenges that inland homes don't. Ask specifically whether a service has experience with coastal cleaning before booking." },
                { t: "Eco-friendly products", b: "Non-toxic, eco-certified products protect the health of your household — especially important for families with children, elderly residents, or respiratory sensitivities." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book North Miami Cleaning Today</h2>
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
                <Link to="/north-miami-beach-cleaning" className="text-primary hover:underline">North Miami Beach</Link>,{" "}
                <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>,{" "}
                <Link to="/hialeah-cleaning" className="text-primary hover:underline">Hialeah</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-north-miami" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningNorthMiami;
