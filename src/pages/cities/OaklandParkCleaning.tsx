import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Oakland Park?",
    a: "House cleaning in Oakland Park costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. CLEAN COLLECTIVE provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Oakland Park, FL?",
    a: "CLEAN COLLECTIVE is rated 4.9 stars across 127+ verified reviews and serves all Oakland Park neighborhoods including Jenada Isles, Oakland Park Lakes, Liberty Heights, and North Andrews Gardens. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you offer move-in/out cleaning in Oakland Park?",
    a: "Yes. CLEAN COLLECTIVE provides move-in and move-out cleaning throughout Oakland Park. Our service includes everything from inside appliances and window tracks to baseboards and bathroom grout — everything needed to protect your security deposit."
  },
  {
    q: "How often should Oakland Park homeowners book professional cleaning?",
    a: "Most Oakland Park homeowners book bi-weekly cleaning for regular upkeep. Monthly deep cleaning helps prevent the buildup that South Florida's humidity and heat accelerate. CLEAN COLLECTIVE offers 5–15% discounts on recurring bookings."
  }
];

const OaklandParkCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Oakland Park House Cleaning | Licensed & Insured | CLEAN COLLECTIVE"
        pageDescription="Oakland Park FL trusted residential cleaning. Coral Heights, Lake Ridge & Royal Palm Isles. Move-in, move-out & deep cleaning available. Book now!"
        canonicalUrl="https://www.tidywisecleaning.com/oakland-park-cleaning"
        pageType="county"
        county="Oakland Park"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Oakland Park</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Oakland Park
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Oakland Park, FL. Serving Coral Heights, Lake Ridge, 
              Royal Palm Isles, and all Oakland Park neighborhoods. Part of our 
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
              Oakland Park Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Coral Heights", "Lake Ridge", "Royal Palm Isles", "Floranada", "North Andrews Gardens", 
                "Lake Emerald", "Oakland Park Boulevard", "Prospect Park", "Corals", 
                "Oakland Estates", "Middle River Terrace", "Twin Lakes"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>, 
              <Link to="/wilton-manors-cleaning" className="text-primary hover:underline ml-1">Wilton Manors</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <RelatedLinks currentPage="/oakland-park-cleaning" pageType="city" cityName="Oakland Park" />
        <Footer />
      </main>
    </>
  );
};

export default OaklandParkCleaning;