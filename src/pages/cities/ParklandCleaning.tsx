import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Parkland?",
    a: "House cleaning in Parkland costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Parkland's larger luxury homes may be priced based on square footage. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Parkland, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Parkland communities including Parkland Golf & Country Club, Heron Bay, Watercrest, Parkland Reserve, and Meadow Run. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Parkland Golf & Country Club and gated communities?",
    a: "Yes. Clean Collective is experienced with Parkland's gated and country club communities. Our background-checked teams handle gate access, visitor parking, and HOA protocols — delivering high-end results consistent with Parkland's luxury standards."
  },
  {
    q: "How often should Parkland homeowners book professional cleaning?",
    a: "Most Parkland homeowners book bi-weekly cleaning for larger homes. Monthly deep cleaning is popular for maintaining high-end finishes, natural stone, and the premium features common in Parkland's luxury homes. Recurring clients save 5–15%."
  }
];

const ParklandCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Parkland House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Parkland FL premium estate cleaning. Heron Bay, Parkland Golf & The Estates. Trusted by Parkland's finest homes. Get your custom quote!"
        canonicalUrl="https://cleancollectives.com/parkland-cleaning"
        pageType="county"
        county="Parkland"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Parkland</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Parkland
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Parkland, FL. Serving Heron Bay, Parkland Golf & Country Club, 
              The Estates, and all Parkland neighborhoods. Part of our 
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
              Parkland Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Heron Bay", "Parkland Golf & Country Club", "The Estates", "Watercrest", "Cypress Head", 
                "Parkland Isles", "MiraLago", "Pine Tree Estates", "Parkland Reserve", 
                "Fox Ridge", "The Terraces", "Cascades"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/coral-springs-cleaning" className="text-primary hover:underline">Coral Springs</Link>, 
              <Link to="/coconut-creek-cleaning" className="text-primary hover:underline ml-1">Coconut Creek</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-parkland" className="text-primary font-semibold hover:underline">
              Read our Parkland cleaning guide — gated communities, luxury home pricing, what to expect →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/parkland-cleaning" pageType="city" cityName="Parkland" />
        <Footer />
      </main>
    </>
  );
};

export default ParklandCleaning;