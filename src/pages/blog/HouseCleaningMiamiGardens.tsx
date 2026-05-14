import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Miami Gardens?",
    a: "House cleaning in Miami Gardens costs $108–$300 for standard cleaning, $208–$450 for deep cleaning, and $283–$550 for move in/out cleaning. Miami Gardens' single-family homes and townhomes are priced by square footage. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Miami Gardens, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Miami Gardens neighborhoods including Norland, Scott Lake, Lake Lucerne, Rolling Oaks, and the Hard Rock Stadium area. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Does TIDYWISE serve Spanish-speaking customers in Miami Gardens?",
    a: "Yes. TIDYWISE's bilingual team serves Miami Gardens in both English and Spanish. From booking to service to follow-up, you can communicate with us in the language you prefer. Hablamos español."
  },
  {
    q: "Do you offer move-in and move-out cleaning in Miami Gardens?",
    a: "Yes. Miami Gardens has an active residential market. TIDYWISE provides thorough move-in and move-out cleaning — appliances, inside cabinets, windows, and baseboards — to get properties inspection-ready quickly. Book online for prompt scheduling."
  }
];

const HouseCleaningMiamiGardens = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Miami Gardens FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Miami Gardens, FL from $108. Bilingual team. Licensed & insured. Norland, Scott Lake, Rolling Oaks & all neighborhoods. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-miami-gardens"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Miami Gardens", url: "https://www.tidywisecleaning.com/blog/house-cleaning-miami-gardens" }
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
              House Cleaning in Miami Gardens, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Miami Gardens is Miami-Dade's third-largest city — a predominantly African-American and Caribbean-American community home to Hard Rock Stadium and a growing base of working and middle-class families. Professional cleaning here is about reliability, trust, and transparent pricing. Here's what Miami Gardens homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Miami Gardens?</h2>
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
                    { s: "Standard Cleaning", p: "$108–$300", i: "Vacuuming, mopping, kitchen, bathrooms, dusting" },
                    { s: "Deep Cleaning", p: "$208–$450", i: "Standard + baseboards, cabinets, fixtures, appliances" },
                    { s: "Move In/Out", p: "$283–$550", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Miami Gardens Neighborhoods We Clean</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Norland", "Scott Lake", "Lake Lucerne", "Rolling Oaks", "Hard Rock Stadium area",
                "Bunche Park", "Andover", "Carol City", "Three Lakes",
                "Miami Gardens Drive corridor"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Miami Gardens Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Miami-Dade County", b: "Always request the certificate of insurance before any cleaner enters your home. TIDYWISE emails it within minutes of request. If a service hesitates, that's your answer." },
                { t: "Background-checked cleaners", b: "Every TIDYWISE cleaner passes a criminal background check before their first assignment — no exceptions. Your home and family's safety comes first." },
                { t: "Transparent pricing with no surprise fees", b: "You see the exact price before you book. No in-home estimate visits required. No extra charges after the job. What's quoted is what you pay." },
                { t: "Eco-friendly products safe for families", b: "Non-toxic, eco-certified products protect household members — especially important for families with young children, elderly residents, or anyone with respiratory health concerns." },
                { t: "Reliable scheduling", b: "Miami Gardens homeowners tell us that reliability — showing up as scheduled, every time — is more important than any other factor when choosing a cleaning service." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Miami Gardens Cleaning Today</h2>
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
                <Link to="/hialeah-cleaning" className="text-primary hover:underline">Hialeah</Link>,{" "}
                <Link to="/north-miami-cleaning" className="text-primary hover:underline">North Miami</Link>,{" "}
                <Link to="/doral-cleaning" className="text-primary hover:underline">Doral</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-miami-gardens" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningMiamiGardens;
