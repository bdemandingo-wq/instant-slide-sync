import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Doral?",
    a: "House cleaning in Doral costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Doral's newer luxury planned community homes and executive apartments are priced by square footage. TIDYWISE provides instant online quotes in English and Spanish."
  },
  {
    q: "Does TIDYWISE offer Spanish-language service in Doral?",
    a: "Yes. TIDYWISE serves Doral's predominantly Spanish-speaking community — with strong Venezuelan, Colombian, and Cuban populations. Our bilingual team communicates in Spanish throughout booking, service, and follow-up. Hablamos español."
  },
  {
    q: "What is the best cleaning service in Doral, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Doral communities including Downtown Doral, Landmark at Doral, Waterford, Doral Isles, and the Doral business corridor. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Doral corporate apartments and executive rentals?",
    a: "Yes. Doral's proximity to Miami International Airport creates strong demand for corporate housing and executive apartments. TIDYWISE provides same-day Airbnb and short-term rental turnovers, move-in/move-out cleaning, and recurring service for Doral's corporate and STR housing market."
  }
];

const HouseCleaningDoral = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Doral FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Doral, FL from $108. Bilingual Spanish-speaking team. Licensed & insured. Downtown Doral, Landmark at Doral & all communities. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-doral"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Doral", url: "https://www.tidywisecleaning.com/blog/house-cleaning-doral" }
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
              House Cleaning in Doral, FL — Servicio en Español · From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Doral is Miami-Dade's fastest-growing city — a business and residential hub just minutes from Miami International Airport, with a thriving Latin American community and some of the county's newest luxury planned developments. TIDYWISE serves Doral in English and Spanish, with transparent pricing and consistent teams. Here's what Doral homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Doral?</h2>
            <p className="text-muted-foreground mb-4">
              Doral cleaning prices reflect the city's mix of newer luxury homes and corporate apartments:
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
                    { s: "Airbnb / STR Turnover", p: "Custom quote", i: "Same-day turnaround, linen changes, guest-ready prep" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Doral Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Doral neighborhoods, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Downtown Doral", "Landmark at Doral", "Waterford", "Doral Isles",
                "Trump National Doral area", "Doral Commons", "Vineyards",
                "Doral Legacy", "Islands at Doral", "Tuscany at Doral"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Doral Homeowners Choose TIDYWISE</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Bilingual Spanish-speaking team", b: "Doral's community communicates primarily in Spanish. TIDYWISE's bilingual team handles booking, service, and all follow-up in the language you prefer. No miscommunications, no language barriers." },
                { t: "Newer construction expertise", b: "Doral's planned communities — Downtown Doral, Landmark, Waterford — are among Miami-Dade's newest luxury developments. Open floor plans, modern appliances, and premium finishes are standard. We use products appropriate for newer construction materials." },
                { t: "Corporate and STR cleaning", b: "Doral's airport proximity drives a large corporate housing and short-term rental market. TIDYWISE handles same-day turnovers, move-in/move-out cleans, and recurring service for landlords, property managers, and STR hosts throughout Doral." },
                { t: "Transparent pricing with no hidden fees", b: "You see the exact price before you book — in English or Spanish. No in-home estimates, no surprise charges. What you're quoted is what you pay." },
                { t: "Licensed and insured in Miami-Dade County", b: "TIDYWISE carries full general liability insurance. Request the certificate any time — we email it within minutes." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Doral Cleaning Today</h2>
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
                <Link to="/hialeah-cleaning" className="text-primary hover:underline">Hialeah</Link>,{" "}
                <Link to="/coral-gables-cleaning" className="text-primary hover:underline">Coral Gables</Link>,{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-doral" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningDoral;
