import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in West Palm Beach?",
    a: "House cleaning in West Palm Beach costs $118–$500 depending on service type and home size. A standard cleaning for a 1-bedroom starts at $118. A 3-bedroom deep clean runs $350–$430. Move-out cleaning starts at $283. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What areas of West Palm Beach does TIDYWISE serve?",
    a: "TIDYWISE serves all West Palm Beach neighborhoods including Downtown, Northwood, SoSo, El Cid, Flamingo Park, Grandview Heights, Ibis, PGA National, Ibis Golf & Country Club, and surrounding Palm Beach County areas including Greenacres, Royal Palm Beach, and Lake Worth."
  },
  {
    q: "Do you offer recurring house cleaning in West Palm Beach?",
    a: "Yes. TIDYWISE offers weekly, bi-weekly, and monthly recurring cleaning plans in West Palm Beach. Recurring customers save 10–15% per visit compared to one-time rates. Most West Palm Beach clients choose bi-weekly service."
  },
  {
    q: "Are your West Palm Beach cleaners background-checked?",
    a: "Yes. All TIDYWISE cleaning professionals are background-checked, insured, and licensed. We carry full general liability insurance and workers' compensation coverage on every job in West Palm Beach."
  }
];

const HouseCleaningWestPalmBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning West Palm Beach FL | TIDYWISE | From $118"
        pageDescription="House cleaning in West Palm Beach, FL. Background-checked & insured. Downtown WPB, Northwood, El Cid, PGA National & all neighborhoods. Instant quote."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-west-palm-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning West Palm Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-west-palm-beach" }
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
              House Cleaning in West Palm Beach, FL — Pricing, Services & How to Book
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              West Palm Beach homeowners expect a high standard — and TIDYWISE delivers it. Whether you live in a Downtown loft, a Northwood bungalow, or an Ibis estate, our licensed and insured cleaning professionals bring the same five-star standard to every home.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 p-5 bg-muted/40 rounded-xl border">
              <Button asChild><Link to="/#booking">Book Online — Instant Quote</Link></Button>
              <Button variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2"><Phone className="w-4 h-4" /> (561) 571-8725</a>
              </Button>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">House Cleaning Prices in West Palm Beach</h2>
            <div className="rounded-xl border overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Service</th>
                    <th className="text-left px-5 py-3 font-semibold">Home Size</th>
                    <th className="text-right px-5 py-3 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { svc: "Standard Clean", size: "1BR / Studio", p: "$118–$150" },
                    { svc: "Standard Clean", size: "2–3BR Home", p: "$150–$230" },
                    { svc: "Deep Clean", size: "1BR / Studio", p: "$208–$250" },
                    { svc: "Deep Clean", size: "3BR Home", p: "$350–$430" },
                    { svc: "Move-Out Clean", size: "1BR Condo", p: "$283–$350" },
                    { svc: "Move-Out Clean", size: "3BR Home", p: "$450–$530" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                      <td className="px-5 py-3">{row.svc}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.size}</td>
                      <td className="px-5 py-3 text-right text-primary font-bold">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Recurring weekly or bi-weekly clients save 10–15% on every visit.</p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Why West Palm Beach Homeowners Choose TIDYWISE</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { t: "Same team every visit", b: "You get the same cleaner each time — no strangers in your home, no retraining." },
                { t: "Background-checked & insured", b: "Every cleaner passes a background check. We carry full liability and workers' comp coverage." },
                { t: "Eco-friendly products", b: "We use non-toxic, fragrance-free cleaning products safe for kids, pets, and sensitive residents." },
                { t: "Instant online booking", b: "Book in 60 seconds at any time. Same-day availability on select days." },
                { t: "Satisfaction guarantee", b: "If something isn't right, we return within 24 hours to re-clean at no charge." },
                { t: "Transparent pricing", b: "Your quote is your price. No surprise charges after the job." },
              ].map(item => (
                <div key={item.t} className="flex gap-3 items-start p-4 bg-muted/30 rounded-xl border">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm mb-1">{item.t}</p>
                    <p className="text-xs text-muted-foreground">{item.b}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">West Palm Beach Neighborhoods We Serve</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Downtown West Palm Beach", "Northwood", "SoSo (South of Southern)", "El Cid", "Flamingo Park", "Grandview Heights", "Palm Beach Lakes", "Ibis Golf & Country Club", "PGA National", "The Acreage", "Greenacres", "Lake Clarke Shores", "Presidential Estates"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Our Cleaning Services in West Palm Beach</h2>
            <div className="space-y-4 mb-8">
              {[
                { t: "Standard Cleaning", b: "Ideal for maintained homes on a regular schedule. Includes all rooms, kitchen surfaces, bathrooms, dusting, vacuuming, and mopping.", url: "/standard-cleaning" },
                { t: "Deep Cleaning", b: "Tackles buildup in baseboards, inside cabinets, light fixtures, door handles, window sills, and all the areas standard cleaning skips.", url: "/deep-cleaning" },
                { t: "Move-In / Move-Out Cleaning", b: "Inspection-ready cleaning for landlords, renters, and buyers. Includes inside appliances, cabinets, and all surfaces.", url: "/move-in-out-cleaning" },
                { t: "Airbnb Turnover Cleaning", b: "Fast turnovers between guests with fresh linens, restocked amenities, and hotel-quality standards.", url: "/airbnb-cleaning" },
              ].map(item => (
                <div key={item.t} className="border-l-4 border-primary pl-4">
                  <Link to={item.url} className="font-semibold text-primary hover:underline">{item.t}</Link>
                  <p className="text-sm text-muted-foreground mt-1">{item.b}</p>
                </div>
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
              <h2 className="font-display text-2xl font-bold mb-3">Book West Palm Beach House Cleaning</h2>
              <p className="text-primary-foreground/90 mb-5">From $118. Background-checked cleaners. Satisfaction guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                <Link to="/delray-beach-cleaning" className="text-primary hover:underline">Delray Beach</Link>,{" "}
                <Link to="/boynton-beach-cleaning" className="text-primary hover:underline">Boynton Beach</Link>,{" "}
                <Link to="/jupiter-cleaning" className="text-primary hover:underline">Jupiter</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-west-palm-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningWestPalmBeach;
