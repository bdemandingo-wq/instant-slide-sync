import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Boca Raton?",
    a: "House cleaning in Boca Raton costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Larger estates in Boca West, Broken Sound, or Royal Palm Yacht & Country Club are priced by square footage. TIDYWISE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Boca Raton, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves all Boca Raton neighborhoods including Boca West Country Club, Broken Sound, Woodfield Country Club, The Sanctuary, Mizner Park, and East Boca. Licensed, insured, and background-checked. Based nearby in Deerfield Beach."
  },
  {
    q: "Do you offer seasonal and snowbird cleaning in Boca Raton?",
    a: "Yes. Boca Raton has one of Florida's largest seasonal populations. TIDYWISE accommodates snowbird schedules with no long-term contracts — including deep arrival cleans in October/November, recurring service through winter, and departure cleans in April/May. Call or book online for seasonal scheduling."
  },
  {
    q: "Can TIDYWISE clean Boca Raton country club and gated communities?",
    a: "Yes. TIDYWISE is familiar with Boca Raton's gated communities including Boca West, Broken Sound, Woodfield, St. Andrews, and Polo Club. Our teams handle visitor gate check-in, HOA parking, and community access protocols so your appointment starts on time."
  }
];

const HouseCleaningBocaRaton = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Boca Raton FL | From $108 | TIDYWISE"
        pageDescription="House cleaning in Boca Raton, FL from $108. Licensed & insured. Boca West, Broken Sound, Woodfield & all neighborhoods. Snowbird seasonal scheduling available."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-boca-raton"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Boca Raton", url: "https://www.tidywisecleaning.com/blog/house-cleaning-boca-raton" }
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
              House Cleaning in Boca Raton, FL — Country Clubs, Estates & From $108
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Boca Raton is one of South Florida's most affluent markets — country club estates, luxury condos, and a significant seasonal population that demands flexible, high-quality service. Here's what Boca Raton homeowners need to know about professional cleaning — pricing, neighborhoods, snowbird scheduling, and how to find a service worth trusting in your home.
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">How Much Does House Cleaning Cost in Boca Raton?</h2>
            <p className="text-muted-foreground mb-4">
              Boca Raton cleaning prices reflect the city's larger, more detailed homes — most estates run well above average South Florida square footage:
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
                    { s: "Seasonal Arrival/Departure", p: "Custom quote", i: "Full deep clean tailored to snowbird arrival or departure" },
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

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Boca Raton Neighborhoods We Clean</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE serves all Boca Raton neighborhoods, from East Boca condos to West Boca estates:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Boca West Country Club", "Broken Sound", "Woodfield Country Club", "The Sanctuary",
                "St. Andrews Country Club", "Royal Palm Yacht & Country Club", "Polo Club",
                "Mizner Park area", "East Boca Beach", "Boca Lago", "Mission Bay",
                "Boca Del Mar"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Seasonal Cleaning for Boca Raton Snowbirds</h2>
            <p className="text-muted-foreground mb-4">
              Boca Raton's seasonal population is one of Florida's largest — thousands of homeowners arrive in October and November and depart in April and May. Managing a home that sits unoccupied for months requires a specific approach:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Arrival deep cleans", b: "A thorough top-to-bottom clean when you return for the season — removing dust accumulation, refreshing bathrooms and kitchen, and getting your home guest-ready quickly." },
                { t: "Recurring winter service", b: "Weekly or bi-weekly cleaning through the season keeps your home in shape while you're in residence. Same team each time means you don't re-explain preferences every visit." },
                { t: "Departure cleans", b: "A comprehensive clean before you leave for the summer — so your home is in clean condition while unoccupied and ready for your return the following season." },
                { t: "No long-term contracts", b: "TIDYWISE doesn't require annual commitments. Book seasonal service on your schedule, pause when you leave, resume when you return." },
              ].map(item => (
                <li key={item.t} className="border-l-4 border-primary pl-4">
                  <p className="font-semibold mb-1">{item.t}</p>
                  <p className="text-sm text-muted-foreground">{item.b}</p>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What to Look for in a Boca Raton Cleaning Service</h2>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Experience with luxury homes and estates", b: "Boca Raton's country club homes have custom finishes, natural stone, and premium appliances. Ask specifically what products are used on stone surfaces — standard cleaners can permanently etch marble and travertine." },
                { t: "Gated community access experience", b: "Boca West, Broken Sound, and Woodfield all require advance visitor registration and security compliance. A service unfamiliar with these procedures can cost you a wasted afternoon." },
                { t: "Licensed and insured in Palm Beach County", b: "Always request the certificate of insurance before letting any service into a Boca Raton home. A legitimate company provides it within minutes." },
                { t: "Background-checked cleaners", b: "Every TIDYWISE cleaner passes a criminal background check before their first assignment — especially important when providing access codes or guest passes to gated communities." },
                { t: "Satisfaction guarantee", b: "TIDYWISE re-cleans for free if you're not satisfied. No fine print." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Boca Raton Cleaning Today</h2>
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
                <Link to="/delray-beach-cleaning" className="text-primary hover:underline">Delray Beach</Link>,{" "}
                <Link to="/deerfield-beach-cleaning" className="text-primary hover:underline">Deerfield Beach</Link>,{" "}
                <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                <Link to="/boynton-beach-cleaning" className="text-primary hover:underline">Boynton Beach</Link>, and{" "}
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">all of Palm Beach County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-boca-raton" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningBocaRaton;
