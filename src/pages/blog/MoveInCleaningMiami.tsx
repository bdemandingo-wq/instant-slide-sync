import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does move-in cleaning cost in Miami?",
    a: "Move-in cleaning in Miami costs $208–$500 depending on home size. A 1-bedroom condo starts at $208. A 2-bedroom runs $250–$350. A 3-bedroom home is $350–$430. A 4+ bedroom or large Miami home can reach $500. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What does a move-in cleaning include in Miami?",
    a: "A TIDYWISE move-in cleaning in Miami includes: all rooms vacuumed and mopped, kitchen deep cleaned including inside cabinets and appliances, bathrooms scrubbed top to bottom, baseboards and moldings wiped, window sills and blinds cleaned, light fixtures dusted, and walls spot-cleaned. We leave your new home move-in ready."
  },
  {
    q: "How far in advance should I book a move-in cleaning in Miami?",
    a: "Book at least 48 hours before your move-in date. Miami's rental market moves fast — same-day availability is limited. For condo moves in Brickell, Edgewater, or Midtown with building access restrictions, book 3–5 days in advance to coordinate elevator access."
  },
  {
    q: "Do you clean inside appliances during Miami move-in cleaning?",
    a: "Yes. TIDYWISE move-in cleaning in Miami includes inside the refrigerator, oven, microwave, and dishwasher at no extra charge. This is standard for our move-in service — we want your kitchen completely clean before your groceries arrive."
  }
];

const checklist = [
  "All rooms vacuumed and mopped",
  "Kitchen deep cleaned — counters, cabinets (inside & out), sink",
  "Inside oven cleaned",
  "Inside refrigerator wiped down",
  "Inside microwave cleaned",
  "Dishwasher interior wiped",
  "Bathrooms scrubbed — toilet, shower, tub, tiles, grout",
  "All mirrors polished",
  "Baseboards and moldings cleaned",
  "Window sills and blinds wiped",
  "Light fixtures and ceiling fans dusted",
  "Door frames and handles disinfected",
  "Switch plates cleaned",
  "Closets vacuumed and wiped",
  "Walls spot-cleaned",
  "All trash removed",
];

const MoveInCleaningMiami = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Move-In Cleaning Miami FL | TIDYWISE | From $208"
        pageDescription="Move-in cleaning in Miami, FL from $208. Start fresh in your new home. Brickell, Coral Gables, Coconut Grove & all Miami neighborhoods. Licensed & insured."
        canonicalUrl="https://www.tidywisecleaning.com/blog/move-in-cleaning-miami"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "Move-In Cleaning Miami", url: "https://www.tidywisecleaning.com/blog/move-in-cleaning-miami" }
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
              Move-In Cleaning in Miami, FL — Start Fresh in Your New Home
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Moving into a new Miami home or condo? Even "clean" units left by previous tenants harbor dust, mold spores, grease, and allergens — especially in Miami's humid climate. A professional move-in clean gives you a truly fresh start before you unpack a single box.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 p-5 bg-muted/40 rounded-xl border">
              <Button asChild><Link to="/#booking">Book Move-In Cleaning</Link></Button>
              <Button variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2"><Phone className="w-4 h-4" /> (561) 571-8725</a>
              </Button>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Move-In Cleaning Prices in Miami</h2>
            <div className="rounded-xl border overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Home Size</th>
                    <th className="text-right px-5 py-3 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "Studio / 1BR condo (up to 750 sq ft)", p: "$208–$250" },
                    { s: "2BR home/condo (750–1,200 sq ft)", p: "$250–$350" },
                    { s: "3BR home (1,200–2,000 sq ft)", p: "$350–$430" },
                    { s: "4BR+ home (2,000–3,000 sq ft)", p: "$430–$500" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                      <td className="px-5 py-3">{row.s}</td>
                      <td className="px-5 py-3 text-right text-primary font-bold">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Complete Move-In Cleaning Checklist</h2>
            <p className="text-muted-foreground mb-4">Every TIDYWISE Miami move-in clean covers:</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {checklist.map(item => (
                <div key={item} className="flex gap-2 items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why Move-In Cleaning Matters in Miami</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Miami's humidity breeds mold fast", b: "A vacant unit with closed windows and high humidity can develop mold on grout lines, behind appliances, and inside cabinets within weeks. A professional move-in clean removes existing spores before they spread." },
                { t: "Previous tenants leave more than you think", b: "Grease behind the stove, dust inside light fixtures, hard water stains in the shower — these are invisible at first glance but obvious once you're living there. Our cleaners are trained to find and remove them." },
                { t: "Allergen reset for sensitive residents", b: "Pet dander, dust mites, and pollen from previous occupants accumulate in corners, carpets, and HVAC grilles. A thorough move-in clean gives allergy sufferers a clean baseline." },
              ].map(item => (
                <li key={item.t} className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-1">{item.t}</p>
                  <p className="text-sm text-muted-foreground">{item.b}</p>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Miami Neighborhoods We Serve</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Brickell", "Coconut Grove", "Coral Gables", "Wynwood", "Edgewater", "Midtown", "Design District", "South Beach", "Little Havana", "Downtown Miami", "Little Haiti", "Doral", "Hialeah", "Aventura", "Sunny Isles Beach", "North Miami", "North Miami Beach"].map(n => (
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Miami Move-In Cleaning</h2>
              <p className="text-primary-foreground/90 mb-5">From $208. Includes inside appliances. Satisfaction guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/blog/deep-cleaning-service-miami" className="text-primary hover:underline">Deep cleaning in Miami</Link>,{" "}
                <Link to="/blog/move-out-cleaning-boca-raton" className="text-primary hover:underline">Move-out cleaning in Boca Raton</Link>,{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/move-in-cleaning-miami" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default MoveInCleaningMiami;
