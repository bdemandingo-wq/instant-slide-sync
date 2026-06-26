import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import CityPageNavigation from "@/components/seo/CityPageNavigation";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Hollywood, FL?",
    a: "House cleaning in Hollywood, FL costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. CLEAN COLLECTIVE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Hollywood, FL?",
    a: "CLEAN COLLECTIVE is rated 4.9 stars across 127+ verified reviews and serves all Hollywood neighborhoods including Hollywood Beach, Emerald Hills, Oakwood, Hollywood Hills, and Hollywood Lakes. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Hollywood Beach condos and waterfront properties?",
    a: "Yes. CLEAN COLLECTIVE specializes in Hollywood Beach condo and waterfront property cleaning. Our teams handle beach-area challenges including sand removal, salt air residue on windows and stainless steel, and humidity-related buildup in ground-floor units."
  },
  {
    q: "How often should Hollywood FL homeowners book professional cleaning?",
    a: "Most Hollywood homeowners book bi-weekly cleaning for regular maintenance. Beachfront properties near the Broadwalk may benefit from weekly cleaning given the higher levels of sand and salt air exposure that accumulate faster than inland homes."
  }
];

const HollywoodCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Hollywood House Cleaning | Licensed & Insured | CLEAN COLLECTIVE"
        pageDescription="Trusted house cleaning Hollywood FL. Serving Hollywood Beach, Emerald Hills, Oakwood. Licensed & insured. Same-day quotes. Call (561) 571-8725!"
        canonicalUrl="https://www.tidywisecleaning.com/hollywood-cleaning"
        pageType="county"
        county="Hollywood"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Trusted in Hollywood</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              House Cleaning in Hollywood, FL
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Reliable house cleaning in Hollywood, FL. Serving Hollywood Beach, Emerald Hills, 
              Oakwood, and all Hollywood neighborhoods. Part of our 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">Broward County cleaning services</Link>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (561) 571-8725
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#booking">Get Free Quote</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Eco-Friendly Products</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Flexible Scheduling</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Hollywood Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Hollywood Beach", "Emerald Hills", "Oakwood", "Hollywood Hills", "Hollywood Lakes", 
                "Liberia", "Parkside", "Driftwood", "Boulevard Heights", 
                "South Lake", "North Lake", "Broadwalk"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>, 
              <Link to="/coral-springs-cleaning" className="text-primary hover:underline ml-1">Coral Springs</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Why Hollywood Residents Choose CLEAN COLLECTIVE
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Beach & Broadwalk Experts</h3>
                <p className="text-muted-foreground">We understand Hollywood Beach living. From beachfront condos to inland homes, we tackle sand, salt, and humidity with expert care.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground">Book weekly, bi-weekly, or one-time cleanings. We work around your schedule with same-day availability for Hollywood residents.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Family-Owned Service</h3>
                <p className="text-muted-foreground">As a local South Florida business, we treat every Hollywood home like our own. Fully licensed, insured, and background-checked.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Hollywood FL Cleaning Services
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
              <p>
                CLEAN COLLECTIVE delivers professional cleaning services across Hollywood, Florida—from the famous Hollywood Beach 
                Broadwalk to the upscale neighborhoods of Emerald Hills and Hollywood Hills. Our experienced team 
                understands the diverse housing in Hollywood, from waterfront condos to family homes in established 
                neighborhoods.
              </p>
              <p>
                Hollywood's unique blend of beach living and residential communities means homes face specific 
                cleaning challenges. Whether you're dealing with sand tracked in from the beach, humidity-related 
                issues, or simply need reliable regular cleaning, our team has the expertise to keep your home 
                spotless.
              </p>
              <p>
                We offer comprehensive cleaning options including standard maintenance cleaning, deep cleaning 
                services, and move-in/move-out cleaning. Our eco-friendly products are safe for families, pets, 
                and the environment—perfect for Hollywood's health-conscious community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to know what to expect before booking?</p>
            <Link to="/blog/house-cleaning-hollywood-florida" className="text-primary font-semibold hover:underline">
              Read our Hollywood cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/hollywood-cleaning" pageType="city" cityName="Hollywood" />
        <Footer />
      </main>
    </>
  );
};

export default HollywoodCleaning;
