import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Miami?",
    a: "House cleaning in Miami costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Miami's diverse housing stock — from Brickell condos to Coconut Grove estates — means pricing varies by size, access, and service type. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Miami, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Miami neighborhoods including Brickell, Coconut Grove, Wynwood, Little Havana, Edgewater, Midtown, and the Upper East Side. Licensed, insured, and background-checked. Bilingual Spanish-speaking team."
  },
  {
    q: "Do you offer cleaning in Miami in Spanish?",
    a: "Yes. TIDYWISE serves Miami's large Spanish-speaking community in both English and Spanish. From booking to service to follow-up, you can communicate with our team in the language you prefer. Hablamos español."
  },
  {
    q: "Do you clean Miami condos, high-rises, and Brickell apartments?",
    a: "Yes. TIDYWISE is experienced with Miami's high-rise and condo market. Our teams navigate building security check-in, service elevator scheduling, and concierge coordination at properties throughout Brickell, Edgewater, Midtown, and Downtown Miami."
  }
];

const HouseCleaningMiami = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Miami FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Miami, FL from $108. Bilingual Spanish-speaking team. Licensed & insured. Brickell, Coconut Grove, Wynwood, Edgewater & all neighborhoods."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-miami"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Miami", url: "https://www.tidywisecleaning.com/blog/house-cleaning-miami" }
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
              House Cleaning in Miami, FL — Condos, Homes & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Miami is South Florida's largest and most diverse market — Brickell high-rises, Coconut Grove estates, Little Havana bungalows, Wynwood lofts, and everything in between. Here's what Miami homeowners and renters need to know about professional cleaning — pricing, what's included, and how to find a service that actually delivers in one of the world's busiest cities.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Miami?</h2>
            <p className="text-muted-foreground mb-4">
              Miami cleaning prices vary by neighborhood and home type — Brickell condos and Coconut Grove estates have different requirements:
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
                    { s: "Standard Cleaning", p: "$108–$400", i: "Vacuuming, mopping, kitchen, bathrooms, dusting all surfaces" },
                    { s: "Deep Cleaning", p: "$208–$550", i: "Standard + baseboards, cabinets, fixtures, inside appliances" },
                    { s: "Move In/Out", p: "$283–$650", i: "Top-to-bottom + inside oven, windows, inspection-ready" },
                    { s: "Airbnb Turnover", p: "Custom quote", i: "Same-day turnaround, linen changes, guest-ready prep" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Miami Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Miami neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Brickell", "Coconut Grove", "Wynwood", "Edgewater", "Midtown Miami",
                "Little Havana", "Upper East Side", "Design District", "Downtown Miami",
                "Overtown", "Little Haiti", "Allapattah", "Coral Way", "Silver Bluff"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Miami's Cleaning Market: What's Different</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "High-rise and condo logistics", b: "Miami's urban core is vertical — Brickell, Edgewater, and Downtown are defined by high-rises with service elevator requirements, concierge check-in, and security protocols. Our teams handle all of it, so your appointment starts on time regardless of building complexity." },
                { t: "Bilingual service", b: "Miami is one of the most Spanish-dominant cities in the US. TIDYWISE's bilingual team communicates in Spanish and English throughout the entire process — booking, service, and follow-up. No lost details, no misunderstood preferences." },
                { t: "Short-term rental volume", b: "Miami's STR market is among the highest-density in the country. TIDYWISE handles same-day Airbnb turnovers, linen management, and guest-ready preparation for hosts throughout the city." },
                { t: "Tropical humidity and air quality", b: "Miami's year-round heat and humidity means mold, mildew, and allergens accumulate faster than in temperate climates. Regular professional cleaning is one of the most effective tools for maintaining healthy indoor air quality in South Florida." },
                { t: "Diverse surfaces and home ages", b: "Miami's housing stock ranges from 1930s bungalows in Little Havana to new construction glass towers in Brickell. Each requires different products and approaches. We use surface-appropriate cleaners for every material." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Miami Cleaning Today</h2>
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
                <Link to="/coral-gables-cleaning" className="text-primary hover:underline">Coral Gables</Link>,{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>,{" "}
                <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>,{" "}
                <Link to="/hialeah-cleaning" className="text-primary hover:underline">Hialeah</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-miami" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningMiami;
