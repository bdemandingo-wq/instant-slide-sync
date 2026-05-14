import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Delray Beach?",
    a: "House cleaning in Delray Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Delray Beach, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Delray Beach communities including Mizner Country Club, Polo Club, Lake Ida, and downtown Delray. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you offer seasonal cleaning in Delray Beach for snowbirds?",
    a: "Yes. Many Delray Beach residents are seasonal snowbirds who need reliable cleaning service during the winter season and a thorough deep clean before they leave in spring. TIDYWISE accommodates flexible and seasonal scheduling with no long-term contracts required."
  },
  {
    q: "Do you clean near the Delray Beach downtown area and Atlantic Avenue?",
    a: "Yes. TIDYWISE serves all Delray Beach neighborhoods including homes and condos near Atlantic Avenue, the beach, and downtown Delray. We also serve surrounding communities including Boynton Beach, Boca Raton, and Lake Worth."
  }
];

const HouseCleaningDelrayBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Delray Beach FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Delray Beach, FL from $108. Licensed & insured. Mizner Country Club, Lake Ida, downtown Delray & all neighborhoods. Seasonal service available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-delray-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Delray Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-delray-beach" }
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
              House Cleaning in Delray Beach, FL — Pricing, Services & How to Book
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Delray Beach is one of Palm Beach County's most desirable cities — a mix of beachfront properties, country club communities, and a vibrant downtown. Homeowners here expect quality. Here's what Delray Beach residents need to know about professional cleaning — pricing, neighborhoods served, and how to choose a service worth inviting into your home.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Delray Beach?</h2>
            <p className="text-muted-foreground mb-4">
              Delray Beach cleaning prices are in line with the rest of Palm Beach County:
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
                    { s: "Seasonal Opening/Closing", p: "From $208", i: "Deep clean for snowbird arrivals or departures" },
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
              <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">See full Palm Beach County pricing guide →</Link>
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Delray Beach Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Delray Beach neighborhoods, from beachfront to western communities:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Mizner Country Club", "Polo Club", "Lake Ida", "Pineapple Grove", "Old School Square",
                "Tropic Isle", "Delray Beach Shores", "Rainberry Bay", "Boca Delray",
                "Gleneagles", "Del-Aire", "High Point", "Sherwood Park"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Delray Beach Homeowners Choose Professional Cleaning</h2>
            <p className="text-muted-foreground mb-4">
              Delray Beach attracts a significant seasonal population — snowbirds who use their homes October through April and need reliable service while they're in town, plus a thorough clean before they leave for the summer. Year-round residents deal with South Florida's heat, humidity, and the pollen-heavy fall season that makes allergen control a priority.
            </p>
            <p className="text-muted-foreground mb-4">
              Many Delray Beach homes are in country club and gated communities with specific access requirements. TIDYWISE teams handle visitor gate protocols and parking coordination so appointments run smoothly.
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Delray Beach Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Palm Beach County", b: "Always verify the certificate of insurance. Any reputable service provides it immediately on request." },
                { t: "Background-checked cleaners", b: "Every TIDYWISE cleaner passes a criminal background check before their first assignment — essential in any community where neighbors share access codes and gate information." },
                { t: "Seasonal flexibility", b: "Delray Beach has a large seasonal population. Look for a service that doesn't require long-term contracts and accommodates flexible scheduling for snowbird stays." },
                { t: "Transparent pricing online", b: "Published rates signal a professional, legitimate operation. Services that won't quote without an in-home visit typically charge more." },
                { t: "Satisfaction guarantee", b: "TIDYWISE re-cleans at no charge if you're not completely satisfied — no hoops to jump through." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Delray Beach Cleaning Today</h2>
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
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                <Link to="/boynton-beach-cleaning" className="text-primary hover:underline">Boynton Beach</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/lake-worth-cleaning" className="text-primary hover:underline">Lake Worth</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-delray-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningDelrayBeach;
