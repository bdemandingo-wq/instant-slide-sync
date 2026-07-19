import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Royal Palm Beach?",
    a: "House cleaning in Royal Palm Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Royal Palm Beach, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Royal Palm Beach communities including The Acreage, Countryside, Frontier, Binks Estates, and Saratoga Pines. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you offer recurring cleaning in Royal Palm Beach?",
    a: "Yes. Clean Collective offers weekly, bi-weekly, and monthly recurring cleaning throughout Royal Palm Beach. Recurring clients save 5–15% on every visit and receive priority scheduling. Most Royal Palm Beach families book bi-weekly service."
  },
  {
    q: "How often should Royal Palm Beach homeowners book professional cleaning?",
    a: "Most Royal Palm Beach homeowners book bi-weekly cleaning. The combination of South Florida's humidity and the size of typical Royal Palm Beach homes means regular professional cleaning makes a significant difference in how your home looks and feels."
  }
];

const RoyalPalmBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Royal Palm Beach Cleaning | Insured | Clean Collective"
        pageDescription="Royal Palm Beach FL family-owned cleaning service. Madison Green, Saratoga & Crestwood. Consistent quality at honest prices. Schedule your clean today!"
        canonicalUrl="https://www.cleancollectives.com/royal-palm-beach-cleaning"
        pageType="county"
        county="Royal Palm Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Royal Palm Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Royal Palm Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Royal Palm Beach, FL. Serving Madison Green, Saratoga, 
              Crestwood, and all Royal Palm Beach neighborhoods. Part of our 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County cleaning services</Link>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <a href="tel:+15618612752" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (561) 861-2752
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
              Royal Palm Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Madison Green", "Saratoga", "Crestwood", "Victoria Groves", "Cypress Lakes", 
                "La Mancha", "Willows", "Royal Palm Estates", "Acreage", 
                "Cypress Key", "Loxahatchee Groves", "Sandpiper Village"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/wellington-cleaning" className="text-primary hover:underline">Wellington</Link>, 
              <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline ml-1">West Palm Beach</Link>, and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">all of Palm Beach County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-royal-palm-beach" className="text-primary font-semibold hover:underline">
              Read our Royal Palm Beach cleaning guide — pricing, neighborhoods, what to expect →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/royal-palm-beach-cleaning" pageType="city" cityName="Royal Palm Beach" />
        <Footer />
      </main>
    </>
  );
};

export default RoyalPalmBeachCleaning;