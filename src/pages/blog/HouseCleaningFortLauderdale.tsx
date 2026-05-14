import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Fort Lauderdale?",
    a: "House cleaning in Fort Lauderdale costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size (square footage) and number of bathrooms. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best house cleaning service in Fort Lauderdale?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Fort Lauderdale neighborhoods including Las Olas, Victoria Park, Rio Vista, Coral Ridge, and Harbor Beach. We are licensed, insured, and background-check all cleaners."
  },
  {
    q: "Do house cleaners in Fort Lauderdale need to be licensed?",
    a: "Yes. In Florida, cleaning companies operating as businesses should be licensed and carry general liability insurance. TIDYWISE is fully licensed and insured in Broward County, protecting your home and belongings during every clean."
  },
  {
    q: "How often should I have my Fort Lauderdale home cleaned professionally?",
    a: "Most Fort Lauderdale homeowners book bi-weekly cleaning to keep homes consistently clean. With South Florida's humidity and dust, monthly deep cleaning is also popular. TIDYWISE offers 15% off weekly, 10% off bi-weekly, and 5% off monthly bookings."
  }
];

const HouseCleaningFortLauderdale = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Fort Lauderdale FL | TIDYWISE | From $108"
        pageDescription="House cleaning in Fort Lauderdale, FL from $118. Licensed & insured. Las Olas, Victoria Park, Coral Ridge & all Fort Lauderdale neighborhoods. Book now."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-fort-lauderdale"
        pageType="blog"
        blogMeta={{ datePublished: "2026-01-15", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Fort Lauderdale", url: "https://www.tidywisecleaning.com/blog/house-cleaning-fort-lauderdale" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-6">
              <span className="text-xs text-muted-foreground">Local Guides · Updated April 2026</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              House Cleaning in Fort Lauderdale, FL — Everything You Need to Know
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Finding reliable house cleaning in Fort Lauderdale means looking past the national franchise ads and choosing a service that actually knows your neighborhood. Here's what Fort Lauderdale homeowners should know about professional cleaning costs, what to look for, and how to book.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Fort Lauderdale?</h2>
            <p className="text-muted-foreground mb-4">
              Fort Lauderdale house cleaning prices are consistent with the rest of Broward County. Expect to pay:
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
              <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">See full pricing guide →</Link>
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Fort Lauderdale Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves every Fort Lauderdale neighborhood, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Las Olas", "Victoria Park", "Rio Vista", "Coral Ridge", "Harbor Beach", "Lauderdale Beach", "Riviera Isles", "Tarpon River", "Sailboat Bend", "Flagler Village", "Colee Hammock", "Sunrise Key", "Lauderdale Isles", "Lake Ridge", "Croissant Park"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Fort Lauderdale Homes Need Regular Professional Cleaning</h2>
            <p className="text-muted-foreground mb-4">
              South Florida's humidity and heat accelerate dust, mold growth, and allergen buildup faster than in drier climates. Fort Lauderdale homes near the water also deal with salt air — which can leave residue on surfaces and accelerate wear.
            </p>
            <p className="text-muted-foreground mb-4">
              Professional cleaning every 2–4 weeks removes allergens, prevents mold on grout and tile, and keeps your home in the condition South Florida's real estate market demands. Many Fort Lauderdale Airbnb and vacation rental hosts book TIDYWISE for same-day turnovers.
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Fort Lauderdale Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Florida", b: "Florida requires cleaning businesses to carry liability insurance. Always verify — ask for the certificate of insurance." },
                { t: "Background-checked cleaners", b: "You're inviting people into your home. Reputable services run criminal background checks on every cleaner before their first job." },
                { t: "Transparent published pricing", b: "Avoid services that won't quote online. Legitimate local cleaners publish rates — if they can't quote without an in-home visit, expect a higher price." },
                { t: "Eco-friendly product options", b: "In Fort Lauderdale's warm, humid climate, strong chemical cleaners are common but harsh on surfaces and indoor air quality. Ask if non-toxic products are standard or extra." },
                { t: "Satisfaction guarantee", b: "Look for a free re-clean policy — not just 'we'll talk about it.' TIDYWISE re-cleans for free if you're not satisfied." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Fort Lauderdale Cleaning Today</h2>
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
                <Link to="/hollywood-cleaning" className="text-primary hover:underline">Hollywood</Link>,{" "}
                <Link to="/pompano-beach-cleaning" className="text-primary hover:underline">Pompano Beach</Link>,{" "}
                <Link to="/coral-springs-cleaning" className="text-primary hover:underline">Coral Springs</Link>,{" "}
                <Link to="/deerfield-beach-cleaning" className="text-primary hover:underline">Deerfield Beach</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-fort-lauderdale" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningFortLauderdale;
