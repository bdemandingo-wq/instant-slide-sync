import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Sunny Isles Beach?",
    a: "House cleaning in Sunny Isles Beach costs $150–$500 for standard cleaning, $250–$700 for deep cleaning, and $350–$800 for move in/out cleaning. Ultra-luxury towers like Porsche Design Tower, Regalia, and Mansions at Acqualina are priced by unit size and complexity. TIDYWISE provides instant quotes."
  },
  {
    q: "What is the best cleaning service in Sunny Isles Beach, FL?",
    a: "TIDYWISE is rated 4.9 stars across 127+ verified reviews and serves Sunny Isles Beach's premier towers including Porsche Design Tower, Regalia, Jade Ocean, Acqualina, Armani Casa, and Trump Royale. We are licensed, insured, and background-check every cleaner — essential for ultra-luxury buildings."
  },
  {
    q: "Do you offer discreet cleaning service in Sunny Isles Beach?",
    a: "Yes. TIDYWISE understands that Sunny Isles Beach's international clientele values discretion. Our teams operate professionally and quietly in luxury tower settings, respect client privacy, and are trained to work in high-security buildings with minimal disruption."
  },
  {
    q: "Can you handle Sunny Isles Beach luxury condo cleaning with white-glove standards?",
    a: "Yes. TIDYWISE provides the white-glove standards Sunny Isles Beach residents expect. We use professional-grade, surface-appropriate products for marble, exotic stone, custom cabinetry, and designer fixtures. Satisfaction is guaranteed — we re-clean for free if anything falls short."
  }
];

const HouseCleaningSunnyIslesBeach = () => {
  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Sunny Isles Beach FL | TIDYWISE"
        pageDescription="House cleaning in Sunny Isles Beach, FL. Ultra-luxury tower specialists. Porsche Design Tower, Regalia, Jade Ocean, Acqualina & all buildings. Discreet, white-glove service."
        canonicalUrl="https://www.tidywisecleaning.com/blog/house-cleaning-sunny-isles-beach"
        pageType="blog"
        blogMeta={{ datePublished: "2026-04-13", dateModified: "2026-04-13", category: "Local Guides" }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Blog", url: "https://www.tidywisecleaning.com/blog" },
          { name: "House Cleaning Sunny Isles Beach", url: "https://www.tidywisecleaning.com/blog/house-cleaning-sunny-isles-beach" }
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
              House Cleaning in Sunny Isles Beach, FL — Ultra-Luxury Towers & White-Glove Service
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Sunny Isles Beach is South Florida's ultra-luxury vertical market — the Porsche Design Tower, Regalia, Jade Ocean, and Acqualina define a city where price-per-square-foot rivals the world's most expensive addresses. Cleaning here isn't a standard service. It requires white-glove standards, surface expertise, building security fluency, and complete discretion. Here's what Sunny Isles Beach residents need to know.
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
              <p className="text-sm text-muted-foreground self-center">4.9 ★ · 127+ reviews · White-glove service</p>
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">Sunny Isles Beach Towers We Service</h2>
            <p className="text-muted-foreground mb-4">
              TIDYWISE cleans throughout Sunny Isles Beach's premier luxury towers:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Porsche Design Tower", "Regalia", "Jade Ocean", "Jade Signature",
                "Acqualina", "Mansions at Acqualina", "Armani Casa", "Trump Royale",
                "Trump Palace", "Marenas Beach Resort", "Sole on the Ocean", "Ocean Reserve"].map(n => (
                <span key={n} className="text-sm bg-muted px-3 py-1 rounded-full border">{n}</span>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mt-10 mb-4">What Ultra-Luxury Cleaning Requires</h2>
            <p className="text-muted-foreground mb-4">
              Sunny Isles Beach residences have specific cleaning requirements that most services cannot meet:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { t: "Exotic stone and rare materials", b: "Residences in Porsche Design Tower, Regalia, and similar buildings use imported marble, onyx, rare woods, and designer tile throughout. These require pH-neutral, stone-safe products applied by someone who knows what they're working with. The wrong cleaner on the wrong surface causes permanent damage that no guarantee covers." },
                { t: "Building security and access protocols", b: "Sunny Isles Beach's ultra-luxury towers have rigorous security — advance scheduling, concierge notification, security escort, and vehicle validation. Our teams navigate these requirements professionally on every visit." },
                { t: "Discretion and privacy", b: "Sunny Isles Beach's international clientele expects complete discretion. TIDYWISE operates quietly and professionally in high-security settings. Our teams don't discuss clients, buildings, or what they observe inside units." },
                { t: "Full-floor and penthouse scale", b: "Many Sunny Isles Beach units are 3,000–8,000+ square feet across a single floor. Cleaning at this scale requires a full team working systematically, not a single cleaner cutting corners to finish within budget." },
                { t: "Ocean exposure and salt residue", b: "Direct Atlantic Ocean exposure means salt film accumulates on every surface that faces the water — floor-to-ceiling glass, outdoor terraces, stainless fixtures. We remove it safely without scratching or streaking." },
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
              <h2 className="font-display text-2xl font-bold mb-3">Book Sunny Isles Beach Cleaning Today</h2>
              <p className="text-primary-foreground/90 mb-5">Instant quote. White-glove service. Satisfaction guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" asChild><Link to="/#booking">Get Instant Quote</Link></Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+15615718725">(561) 571-8725</a>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
              <p>Also serving:{" "}
                <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>,{" "}
                <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>,{" "}
                <Link to="/hallandale-beach-cleaning" className="text-primary hover:underline">Hallandale Beach</Link>,{" "}
                <Link to="/north-miami-beach-cleaning" className="text-primary hover:underline">North Miami Beach</Link>, and{" "}
                <Link to="/miami-dade-cleaning" className="text-primary hover:underline">all of Miami-Dade County</Link>.
              </p>
            </div>
          </div>
        </article>

        <RelatedLinks currentPage="/blog/house-cleaning-sunny-isles-beach" pageType="blog" />
        <Footer />
      </main>
    </>
  );
};

export default HouseCleaningSunnyIslesBeach;
