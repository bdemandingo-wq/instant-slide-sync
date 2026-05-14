import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Davie, FL?",
    a: "House cleaning in Davie costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Davie's mix of ranch homes, equestrian properties, and suburban houses are priced by square footage and number of bathrooms. TIDYWISE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Davie, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Davie communities including Pine Island Ridge, Long Lake Ranches, Laurel Oaks, Imagination Farms, and the downtown Davie area. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean equestrian and ranch properties in Davie?",
    a: "Yes. TIDYWISE understands the specific cleaning challenges of Davie's ranch-style and equestrian properties — heavy tracking from outdoor living areas, barn dust, and the large open-plan interiors typical of ranch homes. We clean properties throughout Davie's agricultural and equestrian corridors."
  },
  {
    q: "How often should Davie homeowners book professional cleaning?",
    a: "Most Davie homeowners book bi-weekly cleaning. Properties near horse facilities track more outdoor debris indoors than typical suburban homes, making consistent professional cleaning especially valuable. Recurring clients save 5–15% off every visit."
  }
];

const HouseCleaningDavie = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Davie FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Davie, FL from $108. Licensed & insured. Pine Island Ridge, Long Lake Ranches, equestrian properties & all Davie neighborhoods. Same-day available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-davie"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Davie", url: "https://www.tidywisecleaning.com/blog/house-cleaning-davie" }
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
              House Cleaning in Davie, FL — Ranch Homes, Equestrian Properties & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Davie is unlike any other Broward County city — a community that maintained its agricultural and equestrian character even as South Florida urbanized around it. Ranch-style homes, horse properties, and large suburban lots sit alongside newer planned communities. Cleaning here has specific requirements that a standard suburban service may not anticipate. Here's what Davie homeowners need to know.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Davie?</h2>
            <p className="text-muted-foreground mb-4">
              Davie cleaning prices are in line with Broward County averages, though large ranch properties are priced by square footage:
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
              All prices include eco-friendly products. Recurring bookings save 5–15%.{" "}
              <Link to="/house-cleaning-cost-south-florida" className="text-primary hover:underline">See full South Florida pricing guide →</Link>
            </p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Davie Communities We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Davie neighborhoods, from equestrian estates to planned communities:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Pine Island Ridge", "Long Lake Ranches", "Laurel Oaks", "Imagination Farms",
                "Stirling Road corridor", "Griffin Road area", "Nova Southeastern area",
                "Flamingo Ranch Estates", "Kensington", "Chapel Trail area"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Cleaning Davie's Ranch and Equestrian Properties</h2>
            <p className="text-muted-foreground mb-4">
              Davie's agricultural heritage means many properties have cleaning challenges that standard suburban homes don't:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Heavy outdoor tracking", b: "Properties with horses, large yards, or unpaved areas track significantly more dirt, sand, and organic material indoors than typical suburban homes. This requires more thorough floor cleaning and more frequent professional visits to stay ahead of buildup." },
                { t: "Large open-plan interiors", b: "Davie's ranch-style homes typically have large square footage with open floor plans, high ceilings, and extensive tile. These take longer to clean properly — and benefit from the systematic approach a professional team provides." },
                { t: "Screen enclosures and outdoor living areas", b: "Pool cages, covered patios, and outdoor kitchens are standard in Davie. We clean screen-enclosed areas as part of comprehensive service, including pool deck surroundings and covered lanai spaces." },
                { t: "Eco-friendly products for families and animals", b: "Many Davie households have children, dogs, horses, or other animals. TIDYWISE uses non-toxic, eco-certified products — safe for all family members and safe if tracked back outside near animals." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Davie Cleaning Today</h2>
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
                <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>,{" "}
                <Link to="/weston-cleaning" className="text-primary hover:underline">Weston</Link>,{" "}
                <Link to="/plantation-cleaning" className="text-primary hover:underline">Plantation</Link>,{" "}
                <Link to="/pembroke-pines-cleaning" className="text-primary hover:underline">Pembroke Pines</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-davie" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningDavie;
