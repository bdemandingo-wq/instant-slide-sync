import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in North Miami Beach?",
    a: "House cleaning in North Miami Beach costs $108–$320 for standard cleaning, $208–$480 for deep cleaning, and $283–$580 for move in/out cleaning. North Miami Beach's mix of single-family homes and condos are priced by square footage. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in North Miami Beach, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all North Miami Beach neighborhoods including Point East, Ojus, Ives Dairy Road corridor, and areas near Oleta River State Park. Licensed, insured, and background-checked."
  },
  {
    q: "Do you clean condos and townhomes in North Miami Beach?",
    a: "Yes. North Miami Beach has a high concentration of condos, townhomes, and garden apartments. TIDYWISE cleans all unit types and handles building access requirements including visitor sign-in and parking for managed communities throughout North Miami Beach."
  },
  {
    q: "Is TIDYWISE licensed and insured in North Miami Beach?",
    a: "Yes. TIDYWISE is fully licensed and insured in Miami-Dade County and can provide a certificate of insurance on request. Every cleaner is background-checked before their first assignment. We serve North Miami Beach and all surrounding Miami-Dade communities."
  }
];

const HouseCleaningNorthMiamiBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning North Miami Beach FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in North Miami Beach, FL from $108. Licensed & insured. Point East, Ojus, Ives Dairy Road corridor & all neighborhoods. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-north-miami-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning North Miami Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-north-miami-beach" }
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
              House Cleaning in North Miami Beach, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              North Miami Beach is a distinct city from North Miami — a dense, diverse Miami-Dade community just inland from Sunny Isles Beach with a mix of single-family homes, condos, and established neighborhoods. Here's what North Miami Beach homeowners need to know about professional cleaning, from pricing to what separates a reliable service from the alternatives.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in North Miami Beach?</h2>
            <p className="text-muted-foreground mb-4">
              North Miami Beach cleaning prices are competitive and vary by home size:
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">North Miami Beach Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all North Miami Beach neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Point East", "Ojus", "Ives Dairy Road corridor", "Oleta River area",
                "Scott Lake", "Highland Village", "Griffing Bizcayne",
                "Ives Estates", "Keystone Point-adjacent", "Country Club area"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a North Miami Beach Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Miami-Dade", b: "Request the certificate of insurance before any cleaner enters your home. TIDYWISE provides it within minutes of request. If a service hesitates or can't produce one, walk away." },
                { t: "Background-checked cleaners", b: "Every TIDYWISE cleaner passes a criminal background check before their first assignment — no exceptions." },
                { t: "Experience with condos and managed buildings", b: "North Miami Beach has a high proportion of condos and managed communities with specific access protocols. TIDYWISE teams are accustomed to building sign-in requirements, visitor parking, and HOA compliance." },
                { t: "Consistent teams for recurring clients", b: "Recurring North Miami Beach clients get the same team each visit. You build familiarity, your cleaners learn your preferences, and you stop re-explaining what matters in your home." },
                { t: "Eco-friendly products", b: "Non-toxic, eco-certified products protect household members with respiratory sensitivities — more common in South Florida's high-humidity environment." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book North Miami Beach Cleaning Today</h2>
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
                <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>,{" "}
                <Link to="/sunny-isles-beach-cleaning" className="text-primary hover:underline">Sunny Isles Beach</Link>,{" "}
                <Link to="/north-miami-cleaning" className="text-primary hover:underline">North Miami</Link>,{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-north-miami-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningNorthMiamiBeach;
