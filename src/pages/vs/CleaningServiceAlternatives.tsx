import { Link } from "react-router-dom";
import { CheckCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";

const PAGE_TITLE = "Best Cleaning Service Alternatives South Florida | TIDYWISE";
const PAGE_DESCRIPTION = "Compare top cleaning service alternatives in South Florida — Molly Maid, Merry Maids, The Maids, Handy vs TIDYWISE. Transparent pricing from $108. Instant quotes.";

const faqItems = [
  {
    q: "What are the best alternatives to national cleaning franchises in South Florida?",
    a: "The best alternatives to Molly Maid, Merry Maids, and The Maids in South Florida are locally owned cleaning companies like TIDYWISE. Local companies offer transparent pricing, consistent teams, and no franchise fees — typically at a lower cost than national chains. TIDYWISE serves 40+ cities across Broward, Miami-Dade, and Palm Beach County with standard cleaning from $150."
  },
  {
    q: "What should I look for in a house cleaning service in South Florida?",
    a: "Look for: (1) transparent published pricing, (2) background-checked and insured cleaners, (3) a satisfaction guarantee, (4) eco-friendly product options, (5) flexible scheduling including weekends, and (6) consistent cleaners rather than a rotating crew. TIDYWISE meets all of these criteria."
  },
  {
    q: "Is it better to hire a local cleaning company or a national franchise in Florida?",
    a: "Local cleaning companies often offer better value in Florida because they don't pass franchise royalty fees to customers. They also tend to offer more flexible pricing, local accountability, and consistent cleaning teams. National franchises like Molly Maid and Merry Maids have higher overhead costs that show up in your bill."
  },
  {
    q: "How much does house cleaning cost compared to national franchise services in South Florida?",
    a: "TIDYWISE charges $108–$350 for standard cleaning depending on home size — typically 10–20% less than national franchise estimates, which often require an in-home consultation before quoting. TIDYWISE pricing is published online with no hidden fees."
  }
];

const alternatives = [
  {
    name: "Molly Maid",
    type: "National Franchise",
    pricing: "Not published — requires estimate",
    pros: ["National brand recognition", "Consistent cleaning system", "Insured"],
    cons: ["Franchise fees increase cost", "No online pricing", "No instant booking"],
    bestFor: "Those who prefer brand familiarity",
    slug: "/molly-maid-alternative"
  },
  {
    name: "Merry Maids",
    type: "National Franchise (ServiceMaster)",
    pricing: "Not published — requires consultation",
    pros: ["Established reputation", "Background checks", "Satisfaction policy"],
    cons: ["Consultation required", "Higher cost due to franchise model", "No same-day booking"],
    bestFor: "Customers prioritizing a well-known brand",
    slug: "/merry-maids-alternative"
  },
  {
    name: "The Maids",
    type: "National Franchise",
    pricing: "Not published — in-home estimate required",
    pros: ["22-step cleaning system", "Background checks", "Team-based cleaning"],
    cons: ["Rotating crews (no consistency)", "No transparent pricing", "Higher price point"],
    bestFor: "Those who want a systematic cleaning protocol",
    slug: "/the-maids-alternative"
  },
  {
    name: "Handy",
    type: "Gig Platform",
    pricing: "Published — from ~$90",
    pros: ["Online booking", "Published pricing", "Wide availability"],
    cons: ["Independent contractors (not employees)", "Variable quality", "No company liability"],
    bestFor: "Budget-conscious customers comfortable with gig platforms",
    slug: "/handy-alternative"
  },
  {
    name: "TaskRabbit",
    type: "Gig Marketplace",
    pricing: "Hourly — $50–80/hr (unpredictable total)",
    pros: ["Wide range of tasks", "Background checks", "Flexibility"],
    cons: ["Hourly pricing adds up fast", "Generalist taskers — not cleaning specialists", "Must provide your own supplies", "No same team each visit"],
    bestFor: "One-off odd jobs, not regular house cleaning",
    slug: "/taskrabbit-alternative"
  },
  {
    name: "Amazon Home Services",
    type: "National Marketplace",
    pricing: "Varies by local provider + Amazon fee",
    pros: ["Familiar platform", "Happiness Guarantee", "Easy booking"],
    cons: ["Third-party contractors — not Amazon employees", "Platform fee on top of provider rate", "Quality varies by local provider", "No South Florida specialization"],
    bestFor: "Those already on Amazon ecosystem who want convenience",
    slug: "/amazon-home-services-alternative"
  },
  {
    name: "TIDYWISE ✓ Recommended",
    type: "Local South Florida Company",
    pricing: "From $108 — published online",
    pros: ["Instant online quotes", "Background-checked employees", "Eco-friendly products", "Satisfaction guarantee", "Locally owned — no franchise fees", "Same-day booking", "Consistent team"],
    cons: ["Serves South Florida only (not nationwide)"],
    bestFor: "South Florida homeowners wanting reliable, transparent, local cleaning",
    slug: "/#booking",
    highlight: true
  }
];

const CleaningServiceAlternatives = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Best Cleaning Service Alternatives 2026 | TidyWise"
        pageDescription="Comparing cleaning services in South Florida? See why TidyWise beats Handy, Molly Maid & local competitors. 4.9★ rated, transparent pricing, vetted cleaners."
        canonicalUrl="https://www.tidywisecleaning.com/cleaning-service-alternatives"
        pageType="service"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Cleaning Service Alternatives", url: "https://www.tidywisecleaning.com/cleaning-service-alternatives" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="relative min-h-[50vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6 text-sm font-medium">
              Updated April 2026 · South Florida
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Best House Cleaning Services in South Florida (Honest Comparison)
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              We compare the most popular cleaning services in Broward, Miami-Dade, and Palm Beach County — including Molly Maid, Merry Maids, The Maids, Handy, and TIDYWISE. Honest pros, cons, and pricing for each.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/#booking">Get TIDYWISE Quote</Link>
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

        {/* Quick comparison table */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-center mb-10">At-a-Glance Comparison</h2>
            <div className="overflow-x-auto rounded-xl border shadow-sm">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold">Service</th>
                    <th className="text-center px-4 py-4 font-semibold">Type</th>
                    <th className="text-center px-4 py-4 font-semibold">Online Pricing</th>
                    <th className="text-center px-4 py-4 font-semibold">Instant Booking</th>
                    <th className="text-center px-4 py-4 font-semibold">Eco-Friendly</th>
                    <th className="text-center px-4 py-4 font-semibold">Locally Owned</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "TIDYWISE", type: "Local Co.", pricing: true, booking: true, eco: true, local: true, highlight: true },
                    { name: "Molly Maid", type: "Franchise", pricing: false, booking: false, eco: false, local: false },
                    { name: "Merry Maids", type: "Franchise", pricing: false, booking: false, eco: false, local: false },
                    { name: "The Maids", type: "Franchise", pricing: false, booking: false, eco: false, local: false },
                    { name: "Handy", type: "Gig App", pricing: true, booking: true, eco: false, local: false },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? "bg-primary/5 font-medium" : i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="px-5 py-3">
                        {row.highlight ? <span className="text-primary font-bold">{row.name} ⭐</span> : row.name}
                      </td>
                      <td className="px-4 py-3 text-center text-muted-foreground text-xs">{row.type}</td>
                      {[row.pricing, row.booking, row.eco, row.local].map((val, j) => (
                        <td key={j} className="px-4 py-3 text-center">
                          {val
                            ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                            : <span className="text-muted-foreground text-xs">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed breakdown of each */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <h2 className="font-display text-3xl font-bold text-center mb-10">Detailed Breakdown</h2>
            {alternatives.map((alt) => (
              <div key={alt.name} className={`rounded-xl border p-6 bg-background ${alt.highlight ? "border-primary ring-1 ring-primary/20" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${alt.highlight ? "text-primary" : ""}`}>{alt.name}</h3>
                    <p className="text-sm text-muted-foreground">{alt.type} · {alt.pricing}</p>
                  </div>
                  <Link to={alt.slug}>
                    <Button size="sm" variant={alt.highlight ? "default" : "outline"}>
                      {alt.highlight ? "Get Quote" : "Full Comparison →"}
                    </Button>
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-green-600 mb-2">PROS</p>
                    <ul className="space-y-1">
                      {alt.pros.map((p) => (
                        <li key={p} className="text-sm flex gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-500 mb-2">CONS</p>
                    <ul className="space-y-1">
                      {alt.cons.map((c) => (
                        <li key={c} className="text-sm flex gap-2 text-muted-foreground">
                          <span className="mt-0.5 flex-shrink-0">✕</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm"><span className="font-semibold">Best for:</span> {alt.bestFor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to look for */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6">How to Choose a Cleaning Service in South Florida</h2>
            <div className="space-y-4">
              {[
                { title: "1. Transparent pricing", body: "Any service that won't quote you online is likely more expensive once they arrive. Legitimate local cleaners publish their rates." },
                { title: "2. Background checks and insurance", body: "You're letting people into your home. Confirm cleaners are background-checked employees (not unverified gig workers) and that the company carries liability insurance." },
                { title: "3. Satisfaction guarantee", body: "The best cleaning companies stand behind their work. Look for a free re-clean policy, not just 'we'll make it right' language." },
                { title: "4. Eco-friendly products", body: "Especially important for families with children, pets, or allergies. Ask whether non-toxic products are standard or an add-on cost." },
                { title: "5. Consistent team", body: "A rotating crew doesn't learn your preferences. A dedicated team gets better at cleaning your home over time." },
                { title: "6. Local accountability", body: "If something goes wrong, a local company is easier to hold accountable than a national franchise or gig app with a dispute form." },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-center mb-10">What South Florida Customers Say About TIDYWISE</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Ashleigh Craig", location: "Fort Lauderdale", text: "The team arrived on time, fully equipped, and ready to work. They paid attention to every detail — baseboards, windows, inside appliances — nothing was missed." },
                { name: "Sallie Sutherland", location: "Boca Raton", text: "In less than 12 hours they got two women to my home over a holiday weekend. The most efficient, capable young women I've ever met. It really saved my day." },
                { name: "Charlie Dubb", location: "West Palm Beach", text: "The ladies cleaned my 30 year, unoccupied house FLAWLESSLY. Sadly, the Florida 'critters' had completely taken the place over, but you'd never know it now!" },
              ].map((t) => (
                <div key={t.name} className="bg-background rounded-xl border p-5">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 italic">"{t.text}"</p>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-muted/30 rounded-xl border p-6">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Book South Florida's Top-Rated Local Cleaner?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              4.9 stars · 127+ verified reviews · Instant online quotes · No consultation needed.
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

export default CleaningServiceAlternatives;
