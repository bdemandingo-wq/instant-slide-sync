import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Hialeah?",
    a: "House cleaning in Hialeah costs $108–$300 for standard cleaning, $208–$450 for deep cleaning, and $283–$550 for move in/out cleaning. Hialeah's mix of single-family homes, townhomes, and apartments are priced by square footage and number of bathrooms. TIDYWISE provides instant online quotes."
  },
  {
    q: "Does TIDYWISE offer Spanish-language service in Hialeah?",
    a: "Yes. TIDYWISE serves Hialeah's predominantly Spanish-speaking community. You can communicate with our team in Spanish throughout the booking process, during service, and for any follow-up questions. Hablamos español."
  },
  {
    q: "What is the best cleaning service in Hialeah, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Hialeah neighborhoods including Hialeah Gardens, Palm Springs North, Amelia Earhart area, and West Hialeah. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean apartments and townhomes in Hialeah?",
    a: "Yes. TIDYWISE cleans Hialeah's full range of home types — single-family homes, townhomes, condos, and apartments. Pricing is based on square footage and number of bathrooms, so apartment clients typically pay at the lower end of our standard range."
  }
];

const HouseCleaningHialeah = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Hialeah FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Hialeah, FL from $108. Spanish-speaking team. Licensed & insured. Hialeah Gardens, Palm Springs North & all neighborhoods. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-hialeah"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Hialeah", url: "https://www.tidywisecleaning.com/blog/house-cleaning-hialeah" }
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
              House Cleaning in Hialeah, FL — Servicio en Español · From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Hialeah is Miami-Dade's second-largest city and one of South Florida's most culturally vibrant communities — predominantly Cuban-American, with a strong sense of neighborhood identity and high standards for home. TIDYWISE serves Hialeah homeowners in English and Spanish, with transparent pricing and no-surprise billing. Here's what you need to know.
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
              <p className="text-sm text-muted-foreground self-center">4.9 ★ · 127+ reviews · Hablamos español</p>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Hialeah?</h2>
            <p className="text-muted-foreground mb-4">
              Hialeah cleaning prices are among the most competitive in Miami-Dade:
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
                    { s: "Standard Cleaning", p: "$108–$300", i: "Vacuuming, mopping, kitchen, bathrooms, dusting" },
                    { s: "Deep Cleaning", p: "$208–$450", i: "Standard + baseboards, cabinets, fixtures, appliances" },
                    { s: "Move In/Out", p: "$283–$550", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Hialeah Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Hialeah neighborhoods, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Hialeah Gardens", "Palm Springs North", "Amelia Earhart area", "West Hialeah",
                "East Hialeah", "Hialeah Park area", "Okeechobee corridor",
                "Palm Lakes", "Bright Horizons area", "Northwest Hialeah"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Hialeah Homeowners Choose TIDYWISE</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Spanish-speaking team", b: "Our bilingual cleaners and customer service staff communicate in Spanish and English. Book in the language you're comfortable with — every detail will be understood correctly." },
                { t: "Transparent pricing with no hidden fees", b: "You'll see the exact price before you book — no in-home estimates required, no fees added at the end. Hialeah homeowners tell us this alone sets TIDYWISE apart from local competitors." },
                { t: "Licensed and insured in Miami-Dade County", b: "TIDYWISE carries full general liability insurance. Request the certificate of insurance any time — we'll email it within minutes. Always verify insurance before letting any cleaner into your home." },
                { t: "Background-checked cleaners", b: "Every TIDYWISE cleaner passes a criminal background check before their first assignment — essential regardless of how your cleaner was recommended." },
                { t: "Eco-friendly products safe for families", b: "Our cleaning products are non-toxic and eco-certified — important for households with children, elderly residents, or anyone with respiratory sensitivities." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Hialeah Cleaning Today</h2>
              <p className="text-primary-foreground/90 mb-5">Instant quote. Same-day availability. Hablamos español.</p>
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
                <Link to="/doral-cleaning" className="text-primary hover:underline">Doral</Link>,{" "}
                <Link to="/miami-gardens-cleaning" className="text-primary hover:underline">Miami Gardens</Link>,{" "}
                <Link to="/north-miami-cleaning" className="text-primary hover:underline">North Miami</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-hialeah" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningHialeah;
