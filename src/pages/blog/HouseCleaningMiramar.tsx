import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Miramar?",
    a: "House cleaning in Miramar costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Miramar's large suburban homes with pools and multiple bathrooms are priced by square footage. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Miramar, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Miramar communities including Silver Lakes, Monarch Lakes, Chapel Trail, Royal Palm Ranches, and Riviera Isles. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Miramar gated communities?",
    a: "Yes. TIDYWISE serves Miramar's gated and planned communities throughout the city. Our teams handle visitor gate protocols, HOA parking requirements, and community access at Silver Lakes, Monarch Lakes, and other Miramar communities — no complications with your appointment."
  },
  {
    q: "How often should Miramar homeowners book professional cleaning?",
    a: "Most Miramar homeowners with families book bi-weekly cleaning. Miramar's large pool homes with 4+ bedrooms benefit from consistent professional cleaning to manage South Florida's humidity-driven dust buildup. Recurring clients save 5–15% off every visit."
  }
];

const HouseCleaningMiramar = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Miramar FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Miramar, FL from $108. Licensed & insured. Silver Lakes, Monarch Lakes, Chapel Trail & all Miramar communities. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-miramar"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Miramar", url: "https://www.tidywisecleaning.com/blog/house-cleaning-miramar" }
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
              House Cleaning in Miramar, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Miramar is one of Broward County's largest cities — a sprawling planned community with large suburban homes, pools, and established neighborhoods. With over 140,000 residents and homes that routinely run 2,000–4,000+ square feet, professional cleaning is a practical necessity rather than a luxury. Here's what Miramar homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Miramar?</h2>
            <p className="text-muted-foreground mb-4">
              Miramar cleaning prices are in line with standard Broward County rates:
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Miramar Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Miramar neighborhoods, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Silver Lakes", "Monarch Lakes", "Chapel Trail", "Royal Palm Ranches", "Riviera Isles",
                "Sunset Lakes", "Vizcaya Lakes", "Island Club", "Grand Palms",
                "Harbour Lakes", "Huntington", "Melrose Pines"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Miramar Homes Need Professional Cleaning</h2>
            <p className="text-muted-foreground mb-4">
              Miramar's planned communities were built with large families in mind — homes here routinely have 4–5 bedrooms, multiple bathrooms, tile throughout, and screen-enclosed pools. At this size and complexity, keeping a home genuinely clean between professional visits is a significant undertaking.
            </p>
            <p className="text-muted-foreground mb-4">
              South Florida's year-round humidity means dust, mold spores, and allergens accumulate faster than in drier climates. Regular professional cleaning isn't just about appearance — it's about maintaining indoor air quality in a climate that actively works against it.
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Miramar Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Broward County", b: "Always ask for the certificate of insurance before letting any service into your home. A legitimate company provides it within minutes." },
                { t: "Background-checked cleaners", b: "Every TIDYWISE cleaner passes a criminal background check before their first assignment. In a large family home, trust in the people you're letting in matters." },
                { t: "Consistent teams", b: "Miramar's bi-weekly clients benefit most from the same team every visit. You don't re-explain your preferences, and your cleaners learn what matters most in your specific home." },
                { t: "Eco-friendly products", b: "With young children and pets common in Miramar's family-oriented neighborhoods, non-toxic, eco-certified cleaning products are a practical requirement — not an optional upgrade." },
                { t: "Transparent online pricing", b: "Legitimate services publish their rates online. If a company won't quote without an in-home visit, expect the price to be higher than what transparent services charge." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Miramar Cleaning Today</h2>
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
                <Link to="/pembroke-pines-cleaning" className="text-primary hover:underline">Pembroke Pines</Link>,{" "}
                <Link to="/weston-cleaning" className="text-primary hover:underline">Weston</Link>,{" "}
                <Link to="/davie-cleaning" className="text-primary hover:underline">Davie</Link>,{" "}
                <Link to="/hollywood-cleaning" className="text-primary hover:underline">Hollywood</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-miramar" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningMiramar;
