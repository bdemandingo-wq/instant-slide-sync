import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Coral Springs?",
    a: "House cleaning in Coral Springs costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Coral Springs, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Coral Springs neighborhoods including Eagle Trace, Heron Bay, Ramblewood, and North Springs. We are licensed, insured, and background-check all cleaners."
  },
  {
    q: "How often should Coral Springs homeowners book professional cleaning?",
    a: "Most Coral Springs homeowners book bi-weekly service to manage South Florida's year-round dust and humidity. Monthly deep cleaning is popular for larger homes. TIDYWISE offers 15% off weekly, 10% off bi-weekly, and 5% off monthly recurring bookings."
  },
  {
    q: "Do you clean Coral Springs condos and townhomes?",
    a: "Yes. TIDYWISE cleans single-family homes, condos, townhomes, and apartments throughout Coral Springs. Our teams are familiar with HOA building access requirements and handle all residence types."
  }
];

const HouseCleaningCoralSprings = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Coral Springs FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Coral Springs, FL from $108. Licensed & insured. Eagle Trace, Heron Bay, Ramblewood & all Coral Springs neighborhoods. Book now."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-coral-springs"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Coral Springs", url: "https://www.tidywisecleaning.com/blog/house-cleaning-coral-springs" }
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
              House Cleaning in Coral Springs, FL — Pricing, Services & How to Book
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Coral Springs is one of Broward County's largest cities, and finding a reliable cleaning service here means looking past the national franchises. Here's everything Coral Springs homeowners should know about professional cleaning — costs, what's included, neighborhoods served, and how to book.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Coral Springs?</h2>
            <p className="text-muted-foreground mb-4">
              Coral Springs cleaning prices are in line with the rest of Broward County. Expect to pay:
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
                    { s: "Recurring Weekly", p: "15% off", i: "Same team, same time, every week" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Coral Springs Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves every Coral Springs neighborhood, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Eagle Trace", "Heron Bay", "Ramblewood", "North Springs", "Coral Springs Country Club",
                "Kensington", "The Isles", "Amber Lakes", "Turtle Run", "Westchester",
                "Wyndham Lakes", "Cypress Run", "Maplewood", "Magnolia Park"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Coral Springs Homes Need Professional Cleaning</h2>
            <p className="text-muted-foreground mb-4">
              Coral Springs sits inland from the coast but still deals with the full force of South Florida's humidity. Families with kids and pets — which make up a large share of Coral Springs households — find that professional cleaning every 2–4 weeks keeps allergens and dust under control in ways that DIY cleaning can't match.
            </p>
            <p className="text-muted-foreground mb-4">
              The city's large single-family homes, many with pools and patio areas, also accumulate dirt faster than condos. Regular professional cleaning protects flooring, grout, and appliances from the premature wear that South Florida's climate accelerates.
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Coral Springs Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Florida", b: "Florida law requires cleaning companies to carry liability insurance. Always ask for the certificate of insurance before letting anyone into your home." },
                { t: "Background-checked cleaners", b: "Reputable services run criminal background checks on every cleaner. Ask directly — if a company can't answer confidently, look elsewhere." },
                { t: "Transparent online pricing", b: "Legitimate local cleaners publish rates. If a company won't quote online or over the phone, expect a higher price and a pushy in-home estimate." },
                { t: "Eco-friendly product options", b: "Many Coral Springs families with young children and pets want non-toxic cleaning products. TIDYWISE uses eco-friendly products as standard." },
                { t: "Satisfaction guarantee", b: "Look for a free re-clean policy in writing. TIDYWISE re-cleans at no charge if you're not satisfied after any appointment." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Coral Springs Cleaning Today</h2>
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
                <Link to="/pompano-beach-cleaning" className="text-primary hover:underline">Pompano Beach</Link>,{" "}
                <Link to="/deerfield-beach-cleaning" className="text-primary hover:underline">Deerfield Beach</Link>,{" "}
                <Link to="/margate-cleaning" className="text-primary hover:underline">Margate</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-coral-springs" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningCoralSprings;
