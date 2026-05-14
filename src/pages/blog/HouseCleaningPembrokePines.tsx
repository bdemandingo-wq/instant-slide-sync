import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Pembroke Pines?",
    a: "House cleaning in Pembroke Pines costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Pembroke Pines, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Pembroke Pines communities including Chapel Trail, Silver Lakes, Pembroke Falls, and Pasadena. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you offer recurring cleaning in Pembroke Pines?",
    a: "Yes. TIDYWISE offers weekly, bi-weekly, and monthly recurring cleaning throughout Pembroke Pines. Recurring clients save 5–15% on every visit and get priority scheduling. Most families in Pembroke Pines book bi-weekly service."
  },
  {
    q: "Do you clean Pembroke Pines homes with pools?",
    a: "Yes. While we don't clean pool water, we do clean pool patios, screen enclosures, and outdoor areas around the pool. Many Pembroke Pines homeowners add patio and screen cleaning to their standard or deep cleaning appointment."
  }
];

const HouseCleaningPembrokePines = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Pembroke Pines FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Pembroke Pines, FL from $108. Licensed & insured. Chapel Trail, Silver Lakes, Pembroke Falls & all Pembroke Pines communities. Book now."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-pembroke-pines"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Pembroke Pines", url: "https://www.tidywisecleaning.com/blog/house-cleaning-pembroke-pines" }
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
              House Cleaning in Pembroke Pines, FL — Pricing, Services & What to Expect
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Pembroke Pines is the largest city in Broward County by population and one of the most active markets for professional cleaning services in South Florida. Here's what Pembroke Pines homeowners need to know about professional cleaning — pricing, what's included, and how to choose a service you can trust.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Pembroke Pines?</h2>
            <p className="text-muted-foreground mb-4">
              Pembroke Pines cleaning prices are consistent with Broward County rates:
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
              All prices include eco-friendly products. Recurring clients save 5–15%.{" "}
              <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">See full South Florida pricing guide →</Link>
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Pembroke Pines Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Pembroke Pines neighborhoods and planned communities, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Chapel Trail", "Silver Lakes", "Pembroke Falls", "Pasadena", "Grand Palms",
                "Emerald Isles", "Pembroke Shores", "Country Isles", "Walnut Creek",
                "Flamingo Gardens", "Century Village", "Towngate", "Harbour Lakes"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Pembroke Pines Home Cleaning: What's Different Here</h2>
            <p className="text-muted-foreground mb-4">
              Pembroke Pines has a uniquely high concentration of large planned communities with pool homes, lake views, and gated entrances. Homes here tend to run 2,000–4,000 square feet, meaning cleaning takes longer and requires a more detailed team approach than a typical city.
            </p>
            <p className="text-muted-foreground mb-4">
              South Florida humidity also means that areas like grout, tile, and window tracks accumulate buildup faster than in drier states. Professional deep cleaning every 1–3 months prevents long-term surface damage and keeps HVAC filters from getting clogged with dust.
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Pembroke Pines Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Licensed and insured in Florida", b: "Always ask for the certificate of insurance. A legitimate cleaning company can email it to you within minutes." },
                { t: "Background-checked cleaners", b: "Pembroke Pines's large pool homes and gated communities mean you're trusting cleaners with significant property. Every TIDYWISE cleaner is background-checked before their first job." },
                { t: "Transparent pricing online", b: "Published rates signal a legitimate operation. If they won't quote without an in-home visit, the price is likely negotiated upward." },
                { t: "Community and HOA experience", b: "Many Pembroke Pines communities have parking and access requirements. TIDYWISE teams know how to navigate gate access, visitor parking, and building rules." },
                { t: "Satisfaction guarantee", b: "TIDYWISE re-cleans for free if you're not satisfied — no hassle, no fine print." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Pembroke Pines Cleaning Today</h2>
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
                <Link to="/miramar-cleaning" className="text-primary hover:underline">Miramar</Link>,{" "}
                <Link to="/davie-cleaning" className="text-primary hover:underline">Davie</Link>,{" "}
                <Link to="/weston-cleaning" className="text-primary hover:underline">Weston</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-pembroke-pines" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningPembrokePines;
