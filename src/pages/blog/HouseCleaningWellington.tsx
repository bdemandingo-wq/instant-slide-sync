import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Wellington, FL?",
    a: "House cleaning in Wellington costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Wellington's larger equestrian estates and luxury homes are priced by square footage. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Wellington, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Wellington communities including Palm Beach Polo and Country Club, Versailles, Olympia, Binks Forest, and Equestrian Club Estates. Licensed, insured, and background-checked."
  },
  {
    q: "Do you clean Wellington homes during polo and equestrian season?",
    a: "Yes. Wellington's January–April equestrian and polo season brings a seasonal influx of high-net-worth residents who need reliable cleaning during their stay. TIDYWISE accommodates short-term seasonal bookings, pre-arrival deep cleans, and recurring service through the competition season — no long-term contracts required."
  },
  {
    q: "Do you clean equestrian properties and barn-adjacent homes in Wellington?",
    a: "Yes. TIDYWISE understands the specific cleaning challenges of Wellington's equestrian properties. Homes near horse facilities track significantly more outdoor debris than typical suburban homes. We provide thorough cleaning that accounts for the higher tracking load common in Wellington's equestrian corridors."
  }
];

const HouseCleaningWellington = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Wellington FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Wellington, FL from $108. Licensed & insured. Palm Beach Polo, Versailles, Olympia, equestrian properties & all communities. Polo season scheduling available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-wellington"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Wellington", url: "https://www.tidywisecleaning.com/blog/house-cleaning-wellington" }
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
              House Cleaning in Wellington, FL — Equestrian Estates, Polo Season & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Wellington is the equestrian capital of the world — home to the International Polo Club and the Winter Equestrian Festival, drawing elite riders and owners from January through April each year. It's also a thriving planned community with luxury homes, country clubs, and established neighborhoods. Cleaning here requires understanding both the equestrian lifestyle and the premium standards of Wellington's residential market. Here's what you need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Wellington?</h2>
            <p className="text-muted-foreground mb-4">
              Wellington cleaning prices reflect the community's larger luxury homes and equestrian estates:
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
                    { s: "Standard Cleaning", p: "$108–$400", i: "Vacuuming, mopping, kitchen, bathrooms, dusting" },
                    { s: "Deep Cleaning", p: "$208–$550", i: "Standard + baseboards, cabinets, fixtures, appliances" },
                    { s: "Move In/Out", p: "$283–$650", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
                    { s: "Seasonal Stay Service", p: "Custom quote", i: "Flexible weekly/bi-weekly during polo season stay" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Wellington Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Wellington communities, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Palm Beach Polo and Country Club", "Versailles", "Olympia", "Binks Forest",
                "Equestrian Club Estates", "Paddock Park", "Orange Point",
                "Greenview Shores", "Pinewood East", "Villagewalk"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Cleaning Wellington's Equestrian and Polo Season Homes</h2>
            <p className="text-muted-foreground mb-4">
              Wellington's winter season — January through April — brings a distinct cleaning dynamic:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Pre-arrival deep cleans", b: "Many Wellington properties sit unoccupied through summer and fall. A thorough deep clean before the season starts — removing dust accumulation, refreshing bathrooms, kitchen, and living areas — ensures the home is ready for immediate use on arrival." },
                { t: "Heavy equestrian tracking", b: "Properties near horse facilities or in Wellington's equestrian corridors track substantially more outdoor debris than typical suburban homes — sand, hay, and barn dust. Bi-weekly professional cleaning is the only practical way to manage it during an active season." },
                { t: "Flexible seasonal scheduling", b: "Season regulars need service for January through April, then pause until next year. TIDYWISE accommodates seasonal booking with no long-term contracts — book for the season, pause when you leave, restart when you return." },
                { t: "Luxury finishes and premium surfaces", b: "Wellington's country club homes and equestrian estates have the same premium finishes found in Palm Beach Gardens or Boca Raton — natural stone, custom cabinetry, designer fixtures. We use appropriate products for every surface." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Wellington Cleaning Today</h2>
              <p className="text-primary-foreground/90 mb-5">Instant quote. Seasonal scheduling. Satisfaction guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/palm-beach-gardens-cleaning" className="text-primary hover:underline">Palm Beach Gardens</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                <Link to="/royal-palm-beach-cleaning" className="text-primary hover:underline">Royal Palm Beach</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-wellington" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningWellington;
