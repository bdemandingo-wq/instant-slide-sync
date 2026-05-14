import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Palm Beach Gardens?",
    a: "House cleaning in Palm Beach Gardens costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Larger homes in Mirasol, Ballenisles, or Frenchman's Creek are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Palm Beach Gardens, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Palm Beach Gardens communities including PGA National, Mirasol, Ballenisles, Frenchman's Creek, Frenchman's Reserve, Alton, and Avenir. Licensed, insured, and background-checked."
  },
  {
    q: "Do you clean PGA National and Mirasol homes in Palm Beach Gardens?",
    a: "Yes. TIDYWISE is experienced with Palm Beach Gardens' premier golf and country club communities. Our teams handle visitor gate registration, guest passes, HOA parking, and community security at PGA National, Mirasol, Ballenisles, and other gated neighborhoods."
  },
  {
    q: "How often should Palm Beach Gardens homeowners book professional cleaning?",
    a: "Most Palm Beach Gardens homeowners book bi-weekly cleaning. Larger homes in golf communities with extensive tile, multiple bathrooms, and premium finishes benefit from consistent professional cleaning to prevent buildup from South Florida's humidity. Recurring clients save 5–15%."
  }
];

const HouseCleaningPalmBeachGardens = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Palm Beach Gardens FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Palm Beach Gardens, FL from $108. Licensed & insured. PGA National, Mirasol, Ballenisles, Frenchman's Creek & all golf communities. Book now."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-palm-beach-gardens"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Palm Beach Gardens", url: "https://www.tidywisecleaning.com/blog/house-cleaning-palm-beach-gardens" }
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
              House Cleaning in Palm Beach Gardens, FL — Golf Communities, Gated Neighborhoods & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Palm Beach Gardens is home to PGA National — the headquarters of American professional golf — and a city built around master-planned communities, country clubs, and manicured neighborhoods. Cleaning here means gated community access, premium finishes, and the specific standards residents in Mirasol, Ballenisles, and Frenchman's Creek expect. Here's what Palm Beach Gardens homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Palm Beach Gardens?</h2>
            <p className="text-muted-foreground mb-4">
              Palm Beach Gardens cleaning prices reflect the city's large planned community homes:
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
                    { s: "Deep Cleaning", p: "$208–$550", i: "Standard + baseboards, cabinets, fixtures, inside appliances" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Palm Beach Gardens Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Palm Beach Gardens communities, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["PGA National", "Mirasol", "Ballenisles", "Frenchman's Creek", "Frenchman's Reserve",
                "Alton", "Avenir", "Steeplechase", "Bent Tree", "Evergrene",
                "Ibis Golf & Country Club", "Northlake corridor"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Cleaning Palm Beach Gardens Golf Community Homes</h2>
            <p className="text-muted-foreground mb-4">
              Palm Beach Gardens' golf and country club communities share specific characteristics that affect professional cleaning:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Gated community access protocols", b: "PGA National, Mirasol, Ballenisles, and Frenchman's Creek all require advance visitor registration, guest passes, or security badges. Our teams handle this on every visit — no showing up and getting turned away at the gate." },
                { t: "Large open-plan homes with extensive tile", b: "Palm Beach Gardens homes are built big — 3,000 to 6,000+ square feet is common in country club neighborhoods. Tile throughout, multiple bathrooms, and open-plan living areas require a systematic team approach to cover properly." },
                { t: "Premium surfaces and golf views", b: "Custom cabinetry, natural stone countertops, and designer finishes throughout. We use professional-grade, surface-appropriate products rather than generic cleaners that can dull or damage high-end materials." },
                { t: "Pollen and tropical plant tracking", b: "Palm Beach Gardens' landscaped communities are beautiful but generate significant outdoor-to-indoor pollen tracking, especially during winter and spring months. Regular professional cleaning keeps this manageable year-round." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Palm Beach Gardens Cleaning Today</h2>
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
                <Link to="/jupiter-cleaning" className="text-primary hover:underline">Jupiter</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                <Link to="/wellington-cleaning" className="text-primary hover:underline">Wellington</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-palm-beach-gardens" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningPalmBeachGardens;
