import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Coconut Creek?",
    a: "House cleaning in Coconut Creek costs $108–$320 for standard cleaning, $208–$480 for deep cleaning, and $283–$580 for move in/out cleaning. Coconut Creek's mix of homes and Wynmoor Village condos are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Coconut Creek, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Coconut Creek communities including Wynmoor Village, Winston Park, Banyan Trails, and Wiles Road corridor. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Wynmoor Village in Coconut Creek?",
    a: "Yes. TIDYWISE serves Wynmoor Village — one of South Florida's largest active adult communities. Our teams are familiar with Wynmoor's community access procedures, visitor registration, and the consistent, trust-based service that residents expect."
  },
  {
    q: "How often should Coconut Creek homeowners book professional cleaning?",
    a: "Monthly or bi-weekly cleaning is most popular in Coconut Creek. South Florida's year-round humidity means regular professional cleaning is the most effective way to manage indoor air quality and keep homes genuinely clean. Recurring clients save 5–15%."
  }
];

const HouseCleaningCoconutCreek = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Coconut Creek FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Coconut Creek, FL from $108. Licensed & insured. Wynmoor Village, Winston Park, Banyan Trails & all communities. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-coconut-creek"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Coconut Creek", url: "https://www.tidywisecleaning.com/blog/house-cleaning-coconut-creek" }
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
              House Cleaning in Coconut Creek, FL — Wynmoor Village, Family Homes & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Coconut Creek is home to Wynmoor Village — one of South Florida's largest and most established active adult communities — alongside newer family neighborhoods and planned developments. The city's diverse mix of residents share a common need: a reliable cleaning service they can trust on a consistent schedule. Here's what Coconut Creek homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Coconut Creek?</h2>
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
                    { s: "Monthly Recurring", p: "5% off", i: "Same team, consistent schedule, no long-term contracts" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Coconut Creek Communities We Clean</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Wynmoor Village", "Winston Park", "Banyan Trails", "Lyons Gate",
                "Wiles Road corridor", "Butterfly World area", "Hillsboro Pines",
                "Sawgrass Pointe", "Cocobay", "Regency Lakes"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Coconut Creek Residents Choose TIDYWISE</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Wynmoor Village specialists", b: "Wynmoor Village is a self-contained active adult community with its own access protocols and community standards. TIDYWISE teams are familiar with visitor registration and can navigate the community efficiently so your appointment starts on time." },
                { t: "Same team, every visit", b: "Consistency matters more than any other single factor for recurring clients. You shouldn't have to re-explain your preferences every time. TIDYWISE assigns dedicated recurring teams so the relationship builds over time." },
                { t: "Licensed and insured in Broward County", b: "Full general liability insurance, certificate available on request within minutes. Background checks on every cleaner. These aren't marketing bullets — they're the baseline for any service you should let into your home." },
                { t: "Eco-friendly products", b: "Non-toxic, eco-certified products on every service — important for Coconut Creek's health-conscious community and anyone with respiratory concerns." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Coconut Creek Cleaning Today</h2>
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
                <Link to="/margate-cleaning" className="text-primary hover:underline">Margate</Link>,{" "}
                <Link to="/tamarac-cleaning" className="text-primary hover:underline">Tamarac</Link>,{" "}
                <Link to="/coral-springs-cleaning" className="text-primary hover:underline">Coral Springs</Link>,{" "}
                <Link to="/deerfield-beach-cleaning" className="text-primary hover:underline">Deerfield Beach</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-coconut-creek" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningCoconutCreek;
