import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Wellington?",
    a: "House cleaning in Wellington costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Larger equestrian estates may be priced by square footage. CLEAN COLLECTIVE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Wellington, FL?",
    a: "CLEAN COLLECTIVE is rated 4.9 stars across 127+ verified reviews and serves all Wellington communities including Palm Beach Polo Club, Wellington Preserve, Paddock Park, Mallet Hill, and Olympia. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Wellington equestrian estates and large properties?",
    a: "Yes. CLEAN COLLECTIVE serves all Wellington property types including equestrian estates and large luxury homes. Wellington's international polo and equestrian scene means many homes require thorough, professional cleaning — we handle all sizes and specifications."
  },
  {
    q: "Do you offer seasonal cleaning during Wellington's equestrian season?",
    a: "Yes. Wellington's world-class equestrian season brings a significant influx of seasonal residents from January through April. CLEAN COLLECTIVE accommodates flexible seasonal scheduling with no long-term contracts — including arrival deep cleans and departure cleans."
  }
];

const WellingtonCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Wellington House Cleaning | Licensed & Insured | CLEAN COLLECTIVE"
        pageDescription="Wellington FL equestrian community cleaning experts. Olympia, Polo West & The Isles. Trusted by Wellington families since 2020. Get 10% off first clean!"
        canonicalUrl="https://www.tidywisecleaning.com/wellington-cleaning"
        pageType="county"
        county="Wellington"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Wellington</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Wellington
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Wellington, FL. Serving Olympia, Polo West, 
              The Isles, and all Wellington neighborhoods. Part of our 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County cleaning services</Link>.
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
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Same-Day Quotes</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Wellington Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Olympia", "Polo West", "The Isles", "Versailles", "Grand Isles", 
                "Sugar Pond Manor", "Wellington Shores", "Meadow Wood", "Palm Beach Polo", 
                "Aero Club", "Wellington View", "Greenview Shores"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/royal-palm-beach-cleaning" className="text-primary hover:underline">Royal Palm Beach</Link>, 
              <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline ml-1">West Palm Beach</Link>, and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">all of Palm Beach County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-wellington" className="text-primary font-semibold hover:underline">
              Read our Wellington cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/wellington-cleaning" pageType="city" cityName="Wellington" />
        <Footer />
      </main>
    </>
  );
};

export default WellingtonCleaning;