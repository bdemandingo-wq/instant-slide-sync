import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does Airbnb turnover cleaning cost in Fort Lauderdale?",
    a: "Airbnb turnover cleaning in Fort Lauderdale costs $95–$280 depending on property size. A studio or 1-bedroom unit runs $95–$140. A 2-bedroom property is $140–$190. A 3-bedroom home is $190–$280. TIDYWISE offers flat-rate pricing with no hidden fees so your cost-per-booking stays predictable."
  },
  {
    q: "Can TIDYWISE handle same-day Airbnb turnovers in Fort Lauderdale?",
    a: "Yes. TIDYWISE offers same-day Airbnb turnover cleaning in Fort Lauderdale for eligible bookings. Call (561) 571-8725 before noon for same-day availability. We recommend scheduling at least 24 hours in advance for guaranteed slots."
  },
  {
    q: "Does TIDYWISE restock Airbnb supplies during turnover cleaning?",
    a: "Yes. On request, we restock toilet paper, paper towels, dish soap, hand soap, and other host-provided supplies during every turnover. Bring your own inventory or let us know your preferences and we can coordinate supply restocking for an additional fee."
  },
  {
    q: "Do you offer co-host cleaning management for Fort Lauderdale Airbnb properties?",
    a: "Yes. TIDYWISE offers turnover management for Fort Lauderdale Airbnb hosts who want a hands-off cleaning operation. We coordinate with your Airbnb calendar, confirm checkouts, and handle all scheduling automatically. Contact us for co-host pricing."
  }
];

const checklist = [
  "All rooms vacuumed and mopped",
  "Kitchen deep cleaned — counters, stovetop, sink",
  "Inside microwave and oven wiped",
  "Dishes washed or dishwasher run",
  "Refrigerator cleared of old guest items",
  "Bathrooms scrubbed — toilet, shower, tub, sink",
  "Mirrors polished",
  "Fresh linens and towels set (host-provided)",
  "Beds made with hotel-style tucking",
  "Trash emptied in all rooms",
  "Supplies restocked (toilet paper, soap, paper towels)",
  "Patio/balcony swept and reset",
  "AC filter checked and wiped",
  "Post-clean photo sent to host",
];

const AirbnbCleaningFortLauderdale = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Airbnb Cleaning Fort Lauderdale FL | Turnover Cleaning | TIDYWISE"
        pageDescription="Airbnb turnover cleaning in Fort Lauderdale, FL. Same-day available. Las Olas, Victoria Park, Rio Vista & all Fort Lauderdale short-term rentals. From $95."
        canonicalUrl="https://www.tidywisecleaning.com/blog/airbnb-cleaning-fort-lauderdale"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "Airbnb Cleaning Fort Lauderdale", url: "https://www.tidywisecleaning.com/blog/airbnb-cleaning-fort-lauderdale" }
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
              Airbnb Cleaning in Fort Lauderdale, FL — Turnover Cleaning for STR Hosts
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Fort Lauderdale is one of Florida's top short-term rental markets. Whether you list a condo on Las Olas, a vacation home in Rio Vista, or a beach property near A1A, your listing's rating lives or dies by the cleanliness between guests. TIDYWISE specializes in fast, reliable Airbnb turnover cleaning that gets 5-star reviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 p-5 bg-muted/40 rounded-xl border">
              <Button asChild><Link to="/#booking">Book Airbnb Turnover</Link></Button>
              <Button variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2"><Phone className="w-4 h-4" /> (561) 571-8725</a>
              </Button>
              <p className="text-sm text-muted-foreground self-center">Same-day available</p>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Airbnb Turnover Cleaning Prices in Fort Lauderdale</h2>
            <div className="rounded-xl border overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Property Size</th>
                    <th className="text-right px-5 py-3 font-semibold">Turnover Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: "Studio / 1BR (up to 750 sq ft)", p: "$95–$140" },
                    { s: "2BR property (750–1,200 sq ft)", p: "$140–$190" },
                    { s: "3BR home (1,200–2,000 sq ft)", p: "$190–$280" },
                    { s: "4BR+ home / large property", p: "Custom quote" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                      <td className="px-5 py-3">{row.s}</td>
                      <td className="px-5 py-3 text-right text-primary font-bold">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Volume discounts available for hosts with 3+ properties. Call for multi-property pricing.</p>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What's Included in Every Fort Lauderdale Airbnb Turnover</h2>
            <p className="text-muted-foreground mb-4">Every TIDYWISE Airbnb turnover includes:</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {checklist.map(item => (
                <div key={item} className="flex gap-2 items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Fort Lauderdale STR Neighborhoods We Serve</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Las Olas", "Victoria Park", "Rio Vista", "Colee Hammock", "Coral Ridge", "Lauderdale-by-the-Sea", "Wilton Manors", "Oakland Park", "Tarpon River", "Sailboat Bend", "Poinsettia Heights", "Progresso Village"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Tips for Fort Lauderdale Airbnb Hosts</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Block 3 hours between checkouts and check-ins", b: "Fort Lauderdale beach properties accumulate sand and humidity quickly. Give your cleaner enough time to do the job right and avoid a bad first impression." },
                { t: "Set up an Airbnb co-host relationship", b: "Add TIDYWISE as a co-host on your listing so we get checkout notifications automatically. No more missed cleanings or frantic texts." },
                { t: "Supply a dedicated cleaning closet", b: "Keep a locked closet stocked with extra linens, towels, and host supplies. We'll access it each visit without needing to wait for delivery." },
                { t: "Use a post-clean photo report", b: "We send photo documentation after every turnover so you can verify remotely before guests arrive — especially useful for remote hosts." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Fort Lauderdale Airbnb Turnover</h2>
              <p className="text-primary-foreground/90 mb-5">From $95. Same-day available. Photo report included.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/airbnb-cleaning" className="text-primary hover:underline">Airbnb cleaning statewide</Link>,{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>,{" "}
                <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>, and{" "}
                <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/airbnb-cleaning-fort-lauderdale" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default AirbnbCleaningFortLauderdale;
