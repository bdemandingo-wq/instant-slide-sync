import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Plantation?",
    a: "House cleaning in Plantation costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Plantation, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Plantation neighborhoods including Jacaranda Country Club, Plantation Isles, Lauderdale West, Midtown Plantation, and Plantation Acres. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Jacaranda Country Club and Plantation gated communities?",
    a: "Yes. Clean Collective is experienced with Plantation's gated and country club communities. Our teams handle visitor access protocols, parking coordination, and HOA requirements so every appointment runs smoothly."
  },
  {
    q: "How often should Plantation homeowners book professional cleaning?",
    a: "Most Plantation homeowners book bi-weekly cleaning for regular maintenance. South Florida's humidity and Plantation's large family homes mean professional cleaning every two weeks keeps allergens and dust at manageable levels. Recurring clients save 5–15%."
  }
];

const PlantationCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Plantation House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Plantation FL trusted home cleaning since 2020. Jacaranda, Plantation Acres & Central Park. Standard & deep cleaning options. Get 10% off first clean!"
        canonicalUrl="https://www.tidywisecleaning.com/plantation-cleaning"
        pageType="county"
        county="Plantation"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Plantation</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Plantation
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Plantation, FL. Serving Jacaranda, Plantation Acres, 
              Central Park, and all Plantation neighborhoods. Part of our 
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
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Same-Day Quotes</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Plantation Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Jacaranda", "Plantation Acres", "Central Park", "Sunrise Golf Village", "Plantation Gardens", 
                "Plantation Isles", "Hawkes Bluff", "Plantation Palms", "Volunteer Park", 
                "Plantation Colony", "Plantation Park", "Indian Trace"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/davie-cleaning" className="text-primary hover:underline">Davie</Link>, 
              <Link to="/sunrise-cleaning" className="text-primary hover:underline ml-1">Sunrise</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-plantation" className="text-primary font-semibold hover:underline">
              Read our Plantation cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/plantation-cleaning" pageType="city" cityName="Plantation" />
        <Footer />
      </main>
    </>
  );
};

export default PlantationCleaning;