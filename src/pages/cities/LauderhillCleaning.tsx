import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Lauderhill?",
    a: "House cleaning in Lauderhill costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Lauderhill, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Lauderhill neighborhoods including Inverrary, Lawn Acres, Broadview Park, and City Center. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you offer move-in/out cleaning in Lauderhill?",
    a: "Yes. Clean Collective provides move-in and move-out cleaning throughout Lauderhill. Our service covers every inch — from inside appliances and window tracks to baseboards and bathroom grout — everything needed to get your security deposit back."
  },
  {
    q: "How often should Lauderhill homeowners book professional cleaning?",
    a: "Most Lauderhill homeowners book bi-weekly cleaning to stay on top of South Florida's humidity and dust. Clean Collective offers 5–15% discounts on recurring bookings and priority scheduling for regular clients."
  }
];

const LauderhillCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Lauderhill House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Lauderhill FL budget-friendly cleaning services. Inverrary, Sunrise Golf & Lauderhill Isles. Move in/out cleaning available. Call (561) 861-2752!"
        canonicalUrl="https://www.cleancollectives.com/lauderhill-cleaning"
        pageType="county"
        county="Lauderhill"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Lauderhill</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Lauderhill
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Lauderhill, FL. Serving Inverrary, Sunrise Golf Village, 
              Lauderhill Isles, and all Lauderhill neighborhoods. Part of our 
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
              Lauderhill Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Inverrary", "Sunrise Golf Village", "Lauderhill Isles", "Oriole Estates", "Ramblewood", 
                "Lauderhill Lakes", "Lauderhill Mall Area", "Central Park", "Riverland", 
                "Twin Lakes", "Woodlands", "Lauderhill Gardens"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/sunrise-cleaning" className="text-primary hover:underline">Sunrise</Link>, 
              <Link to="/plantation-cleaning" className="text-primary hover:underline ml-1">Plantation</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <RelatedLinks currentPage="/lauderhill-cleaning" pageType="city" cityName="Lauderhill" />
        <Footer />
      </main>
    </>
  );
};

export default LauderhillCleaning;