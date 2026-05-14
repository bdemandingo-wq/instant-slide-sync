import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Lake Worth?",
    a: "House cleaning in Lake Worth costs $108–$320 for standard cleaning, $208–$480 for deep cleaning, and $283–$580 for move in/out cleaning. Lake Worth's mix of historic bungalows, newer builds, and waterfront properties are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Lake Worth, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Lake Worth neighborhoods including Lake Worth Beach, Tropical Ridge, College Park, Pinewood, and downtown Lake Worth. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean older and historic homes in Lake Worth?",
    a: "Yes. Lake Worth has a significant stock of older bungalows and historic homes from the 1920s–1950s. TIDYWISE cleans all home types and ages — we're careful with older finishes, plaster walls, and vintage fixtures that require a gentler approach than newer construction."
  },
  {
    q: "Do you offer move-in and move-out cleaning in Lake Worth?",
    a: "Yes. Lake Worth's active rental market means frequent turnover. TIDYWISE provides thorough move-in and move-out cleaning — appliances, inside cabinets, windows, baseboards, and bathrooms — to get properties inspection-ready. Book online for prompt availability."
  }
];

const HouseCleaningLakeWorth = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Lake Worth FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Lake Worth, FL from $108. Licensed & insured. Lake Worth Beach, Tropical Ridge, College Park & all neighborhoods. Historic home specialists."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-lake-worth"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Lake Worth", url: "https://www.tidywisecleaning.com/blog/house-cleaning-lake-worth" }
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
              House Cleaning in Lake Worth, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Lake Worth is one of Palm Beach County's most eclectic communities — a city with a thriving arts district, historic bungalows dating back to the 1920s, waterfront properties along Lake Worth Lagoon, and a diverse, creative community. Professional cleaning here means respecting the character of older homes while delivering a genuinely thorough result. Here's what Lake Worth homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Lake Worth?</h2>
            <p className="text-muted-foreground mb-4">
              Lake Worth cleaning prices are among the most affordable in Palm Beach County:
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Lake Worth Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Lake Worth neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Lake Worth Beach", "Tropical Ridge", "College Park", "Pinewood",
                "Downtown Lake Worth arts district", "Lake Clarke Shores-adjacent",
                "Lakeside Green", "Palm Beach Leisureville",
                "Waterfront Lagoon area", "North Lake Worth"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Cleaning Lake Worth's Diverse Home Stock</h2>
            <p className="text-muted-foreground mb-4">
              Lake Worth's housing stock spans nearly a century — each era with its own quirks:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Historic bungalows and older construction", b: "Lake Worth has a significant number of homes built in the 1920s through 1950s — plaster walls, hardwood floors, vintage tile, and older fixtures. We clean with appropriate products and techniques that don't damage older materials." },
                { t: "Waterfront and lagoon properties", b: "Properties along Lake Worth Lagoon and the Intracoastal face salt air and coastal humidity. Windows, screens, and outdoor surfaces require more frequent professional cleaning than inland homes." },
                { t: "Active rental and arts community", b: "Lake Worth's diverse, creative community includes a high proportion of renters and frequent movers. TIDYWISE's move-in/move-out cleaning service is especially popular here — getting units inspection-ready quickly for both tenants and landlords." },
                { t: "Eco-friendly products as standard", b: "Lake Worth's community values environmental responsibility. TIDYWISE uses eco-certified, non-toxic products on every service — not an add-on, but standard practice." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Lake Worth Cleaning Today</h2>
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
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/boynton-beach-cleaning" className="text-primary hover:underline">Boynton Beach</Link>,{" "}
                <Link to="/delray-beach-cleaning" className="text-primary hover:underline">Delray Beach</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-lake-worth" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningLakeWorth;
