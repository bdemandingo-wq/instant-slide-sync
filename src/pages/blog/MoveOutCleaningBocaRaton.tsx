import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does move-out cleaning cost in Boca Raton?",
    a: "Move-out cleaning in Boca Raton costs $283–$600 depending on home size. A 1-bedroom condo starts at $283. A 3-bedroom home runs $450–$530. A 4+ bedroom home can reach $600. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "Will move-out cleaning help me get my security deposit back in Boca Raton?",
    a: "Yes. A professional move-out clean that meets landlord or management company standards is one of the best ways to secure your full security deposit. TIDYWISE has helped hundreds of South Florida renters pass move-out inspections. We include inside appliances, windows, and all surfaces."
  },
  {
    q: "How long does a move-out cleaning take in Boca Raton?",
    a: "A move-out cleaning in Boca Raton typically takes 3–6 hours depending on home size. A 1–2 bedroom condo takes 3–4 hours. A 3–4 bedroom home takes 5–6 hours. We recommend booking at least 24 hours before your inspection."
  },
  {
    q: "Does TIDYWISE offer same-day move-out cleaning in Boca Raton?",
    a: "Yes, same-day booking is available subject to availability. Call (561) 571-8725 for same-day move-out cleaning in Boca Raton and surrounding Palm Beach County areas."
  }
];

const checklist = [
  "All rooms vacuumed and mopped",
  "Kitchen deep cleaned — counters, cabinets (inside & out), sink",
  "Inside oven cleaned",
  "Inside refrigerator cleaned",
  "Dishwasher wiped inside",
  "Bathrooms scrubbed — toilet, tub, shower, tiles, grout",
  "All mirrors and glass cleaned",
  "Baseboards and moldings wiped",
  "Door frames and handles disinfected",
  "Light fixtures and ceiling fans cleaned",
  "Window sills and blinds wiped",
  "Walls spot-cleaned",
  "Closets vacuumed and wiped",
  "All trash removed",
  "Final walkthrough to confirm inspection-ready",
];

const MoveOutCleaningBocaRaton = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Move-Out Cleaning Boca Raton, FL | TIDYWISE"
        pageDescription="Move-out cleaning in Boca Raton, FL from $283. Get your deposit back. Licensed & insured. Mizner Park, Boca West, Royal Palm & all Boca neighborhoods."
        canonicalUrl="https://www.tidywisecleaning.com/blog/move-out-cleaning-boca-raton"
        pageType="blog"
        blogMeta={{ datePublished: "2026-02-15", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "Move-Out Cleaning Boca Raton", url: "https://www.tidywisecleaning.com/blog/move-out-cleaning-boca-raton" }
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
              Move-Out Cleaning in Boca Raton, FL — Get Your Deposit Back
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Moving out of a Boca Raton home or condo? A professional move-out clean is the single most reliable way to get your security deposit back. TIDYWISE specializes in inspection-ready move-out cleaning for Boca Raton's homes, condos, and apartments — from Mizner Park to Boca West.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 p-5 bg-muted/40 rounded-xl border">
              <Button asChild><Link to="/#booking">Book Move-Out Cleaning</Link></Button>
              <Button variant="outline" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2"><Phone className="w-4 h-4" /> (561) 571-8725</a>
              </Button>
              <p className="text-sm text-muted-foreground self-center">Same-day available</p>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Move-Out Cleaning Prices in Boca Raton</h2>
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
                    { s: "Studio / 1BR condo (up to 750 sq ft)", p: "$283–$350" },
                    { s: "2BR home/condo (750–1,200 sq ft)", p: "$350–$450" },
                    { s: "3BR home (1,200–2,000 sq ft)", p: "$450–$530" },
                    { s: "4BR+ home (2,000+ sq ft)", p: "$530–$600" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                      <td className="px-5 py-3">{row.s}</td>
                      <td className="px-5 py-3 text-right text-primary font-bold">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Complete Move-Out Cleaning Checklist</h2>
            <p className="text-muted-foreground mb-4">Everything included in every TIDYWISE move-out clean:</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {checklist.map(item => (
                <div key={item} className="flex gap-2 items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Boca Raton Neighborhoods & Communities We Serve</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Mizner Park", "Royal Palm Yacht Club", "Boca West", "Boca Pointe", "Via Verde", "The Addison", "Boca Isles", "Broken Sound", "St. Andrews", "Woodfield Hunt Club", "Boca del Mar", "Palmetto Park"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Tips to Pass Your Boca Raton Move-Out Inspection</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Book at least 24 hours before inspection", b: "Give yourself a buffer. Same-day cleans are available but scheduling early ensures a thorough job without rushing." },
                { t: "Remove all personal belongings first", b: "Our team cleans every surface — we need clear access to all rooms, closets, and cabinets before we start." },
                { t: "Document the clean with photos", b: "After the cleaning, take timestamped photos of every room. This protects you if the landlord disputes the condition later." },
                { t: "Request your specific landlord's checklist", b: "Some Boca Raton landlords have specific expectations (e.g., cleaned blinds, inside microwave). Share it with us and we'll make sure every item is covered." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Boca Raton Move-Out Cleaning</h2>
              <p className="text-primary-foreground/90 mb-5">From $283. Same-day available. Satisfaction guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/delray-beach-cleaning" className="text-primary hover:underline">Delray Beach</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/boynton-beach-cleaning" className="text-primary hover:underline">Boynton Beach</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/move-out-cleaning-boca-raton" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default MoveOutCleaningBocaRaton;
