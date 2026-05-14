import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const faqItems = [
  {
    q: "How much does house cleaning cost in South Florida?",
    a: "House cleaning in South Florida typically costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices vary based on home size (square footage), number of bedrooms and bathrooms, and service type. TIDYWISE offers transparent pricing with no hidden fees."
  },
  {
    q: "How much does a standard cleaning cost in Fort Lauderdale?",
    a: "Standard cleaning in Fort Lauderdale starts at $108 for homes up to 750 sq ft and ranges up to $350 for larger homes (3,000+ sq ft). This includes vacuuming, mopping, bathroom sanitization, kitchen cleaning, and dusting all rooms."
  },
  {
    q: "How much does deep cleaning cost in Miami or Boca Raton?",
    a: "Deep cleaning in Miami and Boca Raton starts at $208 and goes up to $500 depending on home size. Deep cleaning adds baseboards, inside cabinets, light fixtures, door handles, and window sills on top of the standard cleaning checklist."
  },
  {
    q: "How much does move-out cleaning cost in South Florida?",
    a: "Move-out cleaning in South Florida costs $283–$600 depending on home size. This includes a top-to-bottom clean of all rooms, inside all appliances, windows, and everything needed for a landlord inspection or home sale."
  },
  {
    q: "Are there discounts for recurring cleaning in South Florida?",
    a: "Yes. TIDYWISE offers 15% off weekly service, 10% off bi-weekly service, and 5% off monthly service. Recurring customers also benefit from a consistent team that knows their home."
  },
  {
    q: "What factors affect house cleaning prices in South Florida?",
    a: "The main factors are: home size (square footage), number of bedrooms and bathrooms, type of cleaning (standard vs. deep vs. move-out), frequency of service, and any add-ons (carpet cleaning, inside oven, windows, laundry)."
  }
];

const pricingData = [
  {
    service: "Standard Cleaning",
    description: "Regular maintenance cleaning. Dusting, vacuuming, mopping, kitchen & bathroom sanitization.",
    sizes: [
      { size: "Studio / 1BR (up to 750 sq ft)", price: "$108–$150" },
      { size: "2BR (750–1,200 sq ft)", price: "$150–$200" },
      { size: "3BR (1,200–2,000 sq ft)", price: "$200–$280" },
      { size: "4BR (2,000–3,000 sq ft)", price: "$280–$350" },
    ]
  },
  {
    service: "Deep Cleaning",
    description: "Everything in standard + baseboards, inside cabinets, light fixtures, door handles, window sills.",
    sizes: [
      { size: "Studio / 1BR (up to 750 sq ft)", price: "$208–$250" },
      { size: "2BR (750–1,200 sq ft)", price: "$250–$350" },
      { size: "3BR (1,200–2,000 sq ft)", price: "$350–$430" },
      { size: "4BR (2,000–3,000 sq ft)", price: "$430–$500" },
    ]
  },
  {
    service: "Move In / Move Out Cleaning",
    description: "Top-to-bottom clean for new homes or preparing for inspection. Includes inside appliances and windows.",
    sizes: [
      { size: "Studio / 1BR (up to 750 sq ft)", price: "$283–$350" },
      { size: "2BR (750–1,200 sq ft)", price: "$350–$450" },
      { size: "3BR (1,200–2,000 sq ft)", price: "$450–$530" },
      { size: "4BR (2,000–3,000 sq ft)", price: "$530–$600" },
    ]
  }
];

const addOns = [
  { name: "Interior Windows", price: "+$30" },
  { name: "Inside Oven & Appliances", price: "+$50" },
  { name: "Baseboards (if not included)", price: "+$40" },
  { name: "Interior Walls", price: "+$25" },
  { name: "Laundry (per load)", price: "+$40" },
  { name: "Dishes", price: "+$15" },
];

const cityLinks = [
  { city: "Fort Lauderdale", slug: "fort-lauderdale-cleaning" },
  { city: "Boca Raton", slug: "boca-raton-cleaning" },
  { city: "Miami", slug: "miami-cleaning" },
  { city: "West Palm Beach", slug: "west-palm-beach-cleaning" },
  { city: "Hollywood", slug: "hollywood-cleaning" },
  { city: "Pompano Beach", slug: "pompano-beach-cleaning" },
  { city: "Coral Springs", slug: "coral-springs-cleaning" },
  { city: "Deerfield Beach", slug: "deerfield-beach-cleaning" },
  { city: "Miami Beach", slug: "miami-beach-cleaning" },
  { city: "Aventura", slug: "aventura-cleaning" },
  { city: "Hialeah", slug: "hialeah-cleaning" },
  { city: "Delray Beach", slug: "delray-beach-cleaning" },
];

const HouseCleaningCostGuide = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Cost South Florida 2026 | TIDYWISE"
        pageDescription="South Florida house cleaning prices: standard from $108, deep from $208, move-out from $283. Fort Lauderdale, Miami, Boca Raton & 40+ cities. Instant quote."
        canonicalUrl="https://www.tidywisecleaning.com/house-cleaning-cost-south-florida"
        pageType="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Pricing", url: "https://www.tidywisecleaning.com/house-cleaning-cost-south-florida" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="pt-24 pb-12 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6 text-sm font-medium">
              Updated April 2026 · South Florida Pricing
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Much Does House Cleaning Cost in South Florida? (2025–2026 Guide)
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              House cleaning in South Florida costs <strong>$108–$600</strong> depending on home size, service type, and frequency.
              This guide breaks down exact pricing for Broward, Miami-Dade, and Palm Beach County — with no hidden fees or surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                <Link to="/#booking">Get My Exact Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (561) 571-8725
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-10 bg-muted/40 border-y">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold mb-4">Quick Price Summary</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Standard Cleaning", range: "$108 – $350", note: "Maintenance clean" },
                { label: "Deep Cleaning", range: "$208 – $500", note: "Full detail clean" },
                { label: "Move In/Out", range: "$283 – $600", note: "Inspection-ready" },
              ].map((item) => (
                <div key={item.label} className="bg-background rounded-xl border p-5">
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-primary">{item.range}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              All prices include eco-friendly products. Recurring bookings save up to 15%.
            </p>
          </div>
        </section>

        {/* Detailed Pricing Tables */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <h2 className="font-display text-3xl font-bold">Detailed Pricing by Service & Home Size</h2>
            {pricingData.map((service) => (
              <div key={service.service}>
                <h3 className="text-xl font-bold mb-2">{service.service}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="rounded-xl border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Home Size</th>
                        <th className="text-right px-5 py-3 font-semibold">Price Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.sizes.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                          <td className="px-5 py-3">{row.size}</td>
                          <td className="px-5 py-3 text-right font-medium text-primary">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold mb-4">Add-On Services & Pricing</h2>
            <p className="text-muted-foreground mb-8">Customize your clean with these optional add-ons.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {addOns.map((addon) => (
                <div key={addon.name} className="bg-background rounded-xl border p-4 flex justify-between items-center">
                  <span className="text-sm font-medium">{addon.name}</span>
                  <span className="text-primary font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Affects Price */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6">What Factors Affect Cleaning Prices in South Florida?</h2>
            <div className="space-y-4">
              {[
                { title: "Home Size (sq ft)", body: "The single biggest factor. A studio costs about 60% less than a 4-bedroom home. Prices are calculated per square foot, not per hour." },
                { title: "Number of Bedrooms & Bathrooms", body: "More rooms = more surfaces, more time. Each additional bathroom adds roughly $25–$40 to the total." },
                { title: "Type of Service", body: "Standard cleaning is the baseline. Deep cleaning adds 30–40% due to extra time on baseboards, inside cabinets, and detailed surfaces. Move in/out adds another 10–20%." },
                { title: "Frequency of Booking", body: "Weekly bookings save 15%, bi-weekly saves 10%, monthly saves 5%. One-time cleans are priced at the standard rate." },
                { title: "Condition of the Home", body: "Homes that haven't been professionally cleaned in 6+ months may require a deep clean first, even if you intended to book a standard clean." },
                { title: "Location in South Florida", body: "Pricing is consistent across Broward, Miami-Dade, and Palm Beach County. There's no travel surcharge within our 40+ city service area." },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recurring Discounts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-10">Recurring Cleaning Discounts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { freq: "Weekly", discount: "15% off", example: "Standard 2BR normally $175 → $149" },
                { freq: "Bi-Weekly", discount: "10% off", example: "Standard 2BR normally $175 → $158" },
                { freq: "Monthly", discount: "5% off", example: "Standard 2BR normally $175 → $166" },
              ].map((d) => (
                <div key={d.freq} className="bg-background rounded-xl border p-6 text-center">
                  <p className="text-lg font-semibold mb-2">{d.freq}</p>
                  <p className="text-3xl font-bold text-primary mb-3">{d.discount}</p>
                  <p className="text-xs text-muted-foreground">{d.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Pricing Links */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold mb-4">Pricing by City</h2>
            <p className="text-muted-foreground mb-8">
              Get city-specific cleaning information and pricing for your area.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cityLinks.map(({ city, slug }) => (
                <Link
                  key={city}
                  to={`/${slug}`}
                  className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  House Cleaning in {city}
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Don't see your city?{" "}
              <Link to="/service-areas" className="text-primary hover:underline">View all 40+ cities we serve →</Link>
            </p>
          </div>
        </section>

        {/* Related Services Internal Links */}
        <section className="py-10 bg-muted/30 border-y">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl font-bold mb-4">Compare Services & Alternatives</h2>
            <p className="text-muted-foreground mb-6">
              Learn more about each service type or compare TIDYWISE to other South Florida cleaning options.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <Link to="/standard-cleaning" className="text-primary hover:underline">→ Standard Cleaning Service</Link>
              <Link to="/deep-cleaning" className="text-primary hover:underline">→ Deep Cleaning Service</Link>
              <Link to="/move-in-out-cleaning" className="text-primary hover:underline">→ Move In/Out Cleaning</Link>
              <Link to="/airbnb-cleaning" className="text-primary hover:underline">→ Airbnb Turnover Cleaning</Link>
              <Link to="/post-construction-cleaning" className="text-primary hover:underline">→ Post-Construction Cleaning</Link>
              <Link to="/office-cleaning" className="text-primary hover:underline">→ Office Cleaning</Link>
              <Link to="/molly-maid-alternative" className="text-primary hover:underline">→ vs Molly Maid</Link>
              <Link to="/merry-maids-alternative" className="text-primary hover:underline">→ vs Merry Maids</Link>
              <Link to="/the-maids-alternative" className="text-primary hover:underline">→ vs The Maids</Link>
              <Link to="/handy-alternative" className="text-primary hover:underline">→ vs Handy</Link>
              <Link to="/cleaning-service-alternatives" className="text-primary hover:underline">→ All Alternatives</Link>
              <Link to="/blog" className="text-primary hover:underline">→ Cleaning Tips Blog</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-background rounded-xl border p-6">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Get Your Exact Price in 60 Seconds</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              No consultation needed. Enter your home size and get an instant quote — no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#booking">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+15615718725">(561) 571-8725</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningCostGuide;
