import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Miami Beach?",
    a: "House cleaning in Miami Beach typically costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Condo and high-rise cleaning may be priced based on square footage. TIDYWISE provides instant quotes online for any Miami Beach property."
  },
  {
    q: "Do you clean Miami Beach condos and high-rise apartments?",
    a: "Yes. TIDYWISE specializes in Miami Beach condo and high-rise cleaning. Our teams are familiar with building access requirements, HOA rules, elevator etiquette, and the unique challenges of oceanfront properties. We service all buildings in South Beach, Mid-Beach, and North Beach."
  },
  {
    q: "Do you offer Airbnb and vacation rental cleaning in Miami Beach?",
    a: "Yes. Miami Beach is one of South Florida's largest short-term rental markets. TIDYWISE provides same-day Airbnb turnovers, linen changes, restocking, and guest-ready preparation throughout Miami Beach. Contact us for STR cleaning rates."
  },
  {
    q: "How do I book a cleaner in Miami Beach?",
    a: "Get an instant quote online at tidywisecleaning.com, or call (561) 571-8725. You can book standard, deep, or move in/out cleaning for the same day or a future date. We serve all Miami Beach neighborhoods including South Beach, Sunset Harbour, Venetian Islands, Surfside, and Bal Harbour."
  }
];

const HouseCleaningMiamiBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Miami Beach FL | Condos & Homes | TIDYWISE"
        pageDescription="House cleaning in Miami Beach, FL from $108. Licensed & insured. South Beach, Mid-Beach, North Beach condos & homes. Same-day Airbnb turnover available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-miami-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Miami Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-miami-beach" }
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
              House Cleaning in Miami Beach, FL — Condos, STRs & Everything In Between
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Miami Beach is a different cleaning market from the rest of South Florida. Oceanfront condos, luxury penthouses, short-term rentals, and aging Art Deco buildings all require different approaches. Here's what Miami Beach residents, condo owners, and vacation rental hosts need to know about professional cleaning — pricing, what's included, and how to find a service you can trust.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Miami Beach?</h2>
            <p className="text-muted-foreground mb-4">
              Miami Beach cleaning prices vary slightly above mainland Miami rates due to building access logistics and the city's higher cost of living:
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
              Final price depends on square footage, number of bathrooms, and condition. Recurring cleaning saves 5–15%.{" "}
              <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">See full South Florida pricing guide →</Link>
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Miami Beach Neighborhoods & Buildings We Service</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE cleans throughout Miami Beach, including:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["South Beach", "Mid-Beach", "North Beach", "Sunset Harbour", "Venetian Islands",
                "La Gorce", "Surfside", "Bal Harbour", "Normandy Isle", "Biscayne Point",
                "Fisher Island", "Star Island", "Palm Island"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Miami Beach Cleaning Is Different</h2>
            <p className="text-muted-foreground mb-4">
              Miami Beach condos and apartments face specific challenges that mainland homes don't:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Ocean salt air", b: "Salt deposits on windows, screens, and stainless steel appliances build up faster than anywhere else in South Florida. Professional-grade products remove salt film without scratching." },
                { t: "High humidity in oceanfront units", b: "Ground-floor and lower-floor units battle moisture and mold risk year-round. Bathroom grout and tile require regular professional attention to prevent permanent staining." },
                { t: "Building access requirements", b: "Many Miami Beach condos require service elevators, visitor badges, and parking validation. Our teams navigate these logistics so you don't have to coordinate." },
                { t: "Short-term rental volume", b: "Miami Beach has one of the densest STR markets in Florida. Same-day Airbnb turnovers between 10am checkout and 3pm check-in require a specialized, time-efficient team." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Miami Beach Cleaning Today</h2>
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
                <Link to="/coral-gables-cleaning" className="text-primary hover:underline">Coral Gables</Link>,{" "}
                <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>,{" "}
                <Link to="/north-miami-beach-cleaning" className="text-primary hover:underline">North Miami Beach</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-miami-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningMiamiBeach;
