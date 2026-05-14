import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does deep cleaning cost in Miami?",
    a: "Deep cleaning in Miami costs $208–$500 depending on home size. A 1-bedroom home or condo starts at $208. A 3-bedroom home runs $350–$430. A 4+ bedroom home or larger condo can reach $500. TIDYWISE provides instant online quotes with transparent pricing."
  },
  {
    q: "What does a deep cleaning include in Miami?",
    a: "A deep cleaning in Miami includes everything in a standard clean (vacuuming, mopping, kitchen and bathroom sanitization, dusting) plus: baseboards, inside kitchen cabinets, light fixtures, door handles, window sills, switch plates, and detailed bathroom scrubbing. It is 30–40% more thorough than a standard cleaning."
  },
  {
    q: "How often should Miami homeowners get a deep cleaning?",
    a: "Miami's humidity and heat accelerate dust, allergen, and mold buildup. Most Miami homeowners benefit from a deep cleaning every 3–6 months in addition to regular standard cleanings. First-time customers often start with a deep clean before switching to bi-weekly standard cleanings."
  },
  {
    q: "Does TIDYWISE serve all Miami neighborhoods for deep cleaning?",
    a: "Yes. TIDYWISE serves all Miami neighborhoods including Brickell, Coconut Grove, Coral Gables, Wynwood, South Beach, Little Havana, Edgewater, and surrounding Miami-Dade County cities. Call (561) 571-8725 to confirm your area."
  }
];

const DeepCleaningServiceMiami = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Deep Cleaning Service Miami FL | TIDYWISE | From $208"
        pageDescription="Deep cleaning in Miami, FL from $208. Licensed & insured. Brickell, Coral Gables, Coconut Grove & all Miami neighborhoods. Instant quote. 4.9 stars."
        canonicalUrl="https://www.tidywisecleaning.com/blog/deep-cleaning-service-miami"
        pageType="blog"
        blogMeta={{ datePublished: "2026-02-01", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "Deep Cleaning Miami", url: "https://www.tidywisecleaning.com/blog/deep-cleaning-service-miami" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-6">
              <span className="text-xs text-muted-foreground">Local Guides · Updated April 2026</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Deep Cleaning Service in Miami, FL — Pricing, What's Included & How to Book
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Miami's year-round heat and humidity mean your home accumulates dust, allergens, and mildew faster than most U.S. cities. A professional deep cleaning tackles what regular cleaning misses — and is essential for Miami homeowners, condo owners, and Airbnb hosts at least every few months.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 p-5 bg-muted/40 rounded-xl border">
              <Button asChild><Link to="/#booking">Get Deep Cleaning Quote</Link></Button>
              <Button variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2"><Phone className="w-4 h-4" /> (561) 571-8725</a>
              </Button>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Deep Cleaning Prices in Miami (2025–2026)</h2>
            <div className="rounded-xl border overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Home Size</th>
                    <th className="text-right px-5 py-3 font-semibold">Deep Cleaning Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "Studio / 1BR (up to 750 sq ft)", p: "$208–$250" },
                    { s: "2BR (750–1,200 sq ft)", p: "$250–$350" },
                    { s: "3BR (1,200–2,000 sq ft)", p: "$350–$430" },
                    { s: "4BR+ (2,000–3,000 sq ft)", p: "$430–$500" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                      <td className="px-5 py-3">{row.s}</td>
                      <td className="px-5 py-3 text-right text-primary font-bold">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What's Included in a Miami Deep Cleaning</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Everything in Standard", items: ["Vacuuming all rooms", "Mopping hard floors", "Kitchen surfaces wiped", "Bathroom sanitization", "Dusting all surfaces", "Trash emptied"] },
                { title: "Deep Clean Extras", items: ["Baseboards scrubbed", "Inside kitchen cabinets", "Light fixtures cleaned", "Door handles disinfected", "Window sills wiped", "Switch plates cleaned"] },
              ].map(col => (
                <div key={col.title} className="bg-muted/30 rounded-xl border p-5">
                  <h3 className="font-semibold mb-3">{col.title}</h3>
                  <ul className="space-y-1.5">
                    {col.items.map(item => (
                      <li key={item} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Miami Homes Need Deep Cleaning More Often</h2>
            <p className="text-muted-foreground mb-4">
              Miami averages 77% relative humidity year-round. This accelerates three things most homeowners underestimate:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Mold and mildew on grout and tile", b: "Bathrooms and kitchens in Miami accumulate mold on grout lines within weeks without regular scrubbing. Deep cleaning removes mold buildup that standard cleaning misses." },
                { t: "Dust mite and allergen buildup", b: "High humidity supports dust mite populations. A professional deep clean removes allergen reservoirs in carpets, upholstery, and hard-to-reach corners." },
                { t: "Salt air residue near the coast", b: "Homes in Brickell, Coconut Grove, South Beach, and Edgewater deal with salt air that leaves a sticky residue on surfaces and accelerates corrosion of fixtures." },
              ].map(item => (
                <li key={item.t} className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-1">{item.t}</p>
                  <p className="text-sm text-muted-foreground">{item.b}</p>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Miami Neighborhoods We Serve</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Brickell", "Coconut Grove", "Coral Gables", "Wynwood", "South Beach", "Little Havana", "Edgewater", "Midtown", "Design District", "Overtown", "Little Haiti", "Downtown Miami", "Doral", "Hialeah", "North Miami", "North Miami Beach", "Aventura", "Sunny Isles Beach"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

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
              <h2 className="font-display text-2xl font-bold mb-3">Book Miami Deep Cleaning Today</h2>
              <p className="text-primary-foreground/90 mb-5">From $208. Instant quote. Eco-friendly products. Satisfaction guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>,{" "}
                <Link to="/coral-gables-cleaning" className="text-primary hover:underline">Coral Gables</Link>,{" "}
                <Link to="/hialeah-cleaning" className="text-primary hover:underline">Hialeah</Link>,{" "}
                <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/deep-cleaning-service-miami" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default DeepCleaningServiceMiami;
