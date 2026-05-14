import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Hallandale Beach?",
    a: "House cleaning in Hallandale Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Condos and high-rises are priced by square footage. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Hallandale Beach, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Hallandale Beach communities including Golden Isles, Village at Gulfstream Park, Hallandale Beach oceanfront, and Avant-Garde. Licensed, insured, and background-checked."
  },
  {
    q: "Do you offer snowbird and seasonal cleaning in Hallandale Beach?",
    a: "Yes. Hallandale Beach has a significant seasonal population. TIDYWISE accommodates snowbird schedules with arrival deep cleans, recurring winter service, and departure cleans — all with no long-term contracts. Book on your schedule, pause when you leave."
  },
  {
    q: "Do you clean Hallandale Beach condos and high-rises?",
    a: "Yes. TIDYWISE is experienced with Hallandale Beach condo and high-rise cleaning. Our teams handle building access protocols, service elevator scheduling, and visitor badge requirements so your appointment starts on time."
  }
];

const HouseCleaningHallandaleBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Hallandale Beach FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Hallandale Beach, FL from $108. Licensed & insured. Golden Isles, Gulfstream Park area, oceanfront condos & all neighborhoods. Snowbird scheduling available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-hallandale-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Hallandale Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-hallandale-beach" }
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
              House Cleaning in Hallandale Beach, FL — Condos, Snowbirds & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Hallandale Beach sits right on the Broward-Miami-Dade county line — a compact coastal city with oceanfront condos, the Gulfstream Park entertainment district, and a large seasonal population. Whether you're a year-round resident or spending winter in Florida, here's what you need to know about professional cleaning in Hallandale Beach.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Hallandale Beach?</h2>
            <p className="text-muted-foreground mb-4">
              Hallandale Beach cleaning prices are competitive — most units are condos priced by square footage:
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
                    { s: "Standard Cleaning", p: "$108–$350", i: "Vacuuming, mopping, kitchen, bathrooms, dusting all surfaces" },
                    { s: "Deep Cleaning", p: "$208–$500", i: "Standard + baseboards, cabinets, salt residue, fixtures" },
                    { s: "Move In/Out", p: "$283–$600", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
                    { s: "Seasonal Arrival/Departure", p: "Custom quote", i: "Full deep clean for snowbird arrival or departure" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Hallandale Beach Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Hallandale Beach neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Golden Isles", "Avant-Garde", "Village at Gulfstream Park", "Hallandale Beach oceanfront",
                "Three Islands", "Foster City", "Diplomat area", "Atlantic Shores",
                "Lake Shore Colony", "Boulevard Gardens"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What Makes Hallandale Beach Cleaning Unique</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Coastal salt air on every surface", b: "Hallandale Beach's oceanfront and Intracoastal location means salt film accumulates on windows, screens, balcony railings, and stainless steel faster than inland homes. Our teams remove salt buildup without scratching surfaces." },
                { t: "Condo and high-rise logistics", b: "Most Hallandale Beach residences are in mid-rise or high-rise buildings with service elevator requirements, visitor sign-in, and building-specific access protocols. We navigate these on every visit." },
                { t: "Snowbird seasonal scheduling", b: "A significant portion of Hallandale Beach residents are seasonal. We offer arrival deep cleans in fall, regular winter service, and departure cleans in spring — with no long-term contracts and easy pause/resume." },
                { t: "Short-term rental preparation", b: "Hallandale Beach condos are popular short-term rental properties. TIDYWISE provides same-day Airbnb turnovers, linen preparation, and guest-ready cleaning for STR hosts throughout the city." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Hallandale Beach Cleaning Today</h2>
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
                <Link to="/hollywood-cleaning" className="text-primary hover:underline">Hollywood</Link>,{" "}
                <Link to="/sunny-isles-beach-cleaning" className="text-primary hover:underline">Sunny Isles Beach</Link>,{" "}
                <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-hallandale-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningHallandaleBeach;
