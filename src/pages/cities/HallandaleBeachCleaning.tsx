import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Hallandale Beach?",
    a: "House cleaning in Hallandale Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and bathrooms. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Hallandale Beach, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Hallandale Beach neighborhoods including Gulfstream Village, Avant-Garde, Hillcrest communities, and Three Islands. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Hallandale Beach condos and beachfront properties?",
    a: "Yes. Clean Collective cleans all Hallandale Beach property types including beachfront condos, ocean towers, and single-family homes. Our teams handle salt air challenges, building access protocols, and HOA requirements throughout the city."
  },
  {
    q: "Do you offer move-in/out cleaning in Hallandale Beach?",
    a: "Yes. Clean Collective provides move-in and move-out cleaning throughout Hallandale Beach. Our service covers everything from inside the oven and refrigerator to windows and baseboards — everything needed to pass a landlord inspection and get your deposit back."
  }
];

const HallandaleBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Hallandale Beach House Cleaning | Insured | Clean Collective"
        pageDescription="Hallandale Beach FL oceanfront condo & house cleaning. Golden Isles, Gulfstream Park & The Hemispheres. Building-approved cleaners. Book online!"
        canonicalUrl="https://www.cleancollective.net/hallandale-beach-cleaning"
        pageType="county"
        county="Hallandale Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Hallandale Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Hallandale Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Hallandale Beach, FL. Serving Golden Isles, Gulfstream Park area, 
              The Hemispheres, and all Hallandale Beach neighborhoods. Part of our 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">Broward County cleaning services</Link>.
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
              Hallandale Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Golden Isles", "Gulfstream Park", "The Hemispheres", "Ocean Marine Yacht Club", "Parkview", 
                "Three Islands", "The Village", "Hallandale Beach Blvd", "Diplomat", 
                "Foster Road", "Beach Club", "Atlantic Shores"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/hollywood-cleaning" className="text-primary hover:underline">Hollywood</Link>, 
              <Link to="/aventura-cleaning" className="text-primary hover:underline ml-1">Aventura</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-hallandale-beach" className="text-primary font-semibold hover:underline">
              Read our Hallandale Beach cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/hallandale-beach-cleaning" pageType="city" cityName="Hallandale Beach" />
        <Footer />
      </main>
    </>
  );
};

export default HallandaleBeachCleaning;