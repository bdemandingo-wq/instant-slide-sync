import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Wilton Manors?",
    a: "House cleaning in Wilton Manors costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Wilton Manors, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Wilton Manors neighborhoods including Jenada Isles, Wilton Manors Estates, and areas near Wilton Drive. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you use eco-friendly cleaning products in Wilton Manors?",
    a: "Yes. Clean Collective uses eco-friendly, non-toxic cleaning products as standard — a priority in Wilton Manors' environmentally conscious community. Our products are effective on Florida's humidity-driven buildup and safe for people and pets."
  },
  {
    q: "How often should Wilton Manors homeowners book professional cleaning?",
    a: "Most Wilton Manors homeowners book bi-weekly cleaning. The older home stock in Wilton Manors, many with tile and wood floors, benefits from regular professional attention to prevent South Florida's humidity from causing long-term surface damage."
  }
];

const WiltonManorsCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Wilton Manors House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Wilton Manors FL LGBTQ-friendly cleaning service. Jenada Isles, Manor Grove & Central Wilton Manors. Inclusive, professional & thorough. Call us!"
        canonicalUrl="https://www.cleancollective.net/wilton-manors-cleaning"
        pageType="county"
        county="Wilton Manors"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Wilton Manors</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Wilton Manors
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Wilton Manors, FL. Serving Jenada Isles, Manor Grove, 
              Central Wilton Manors, and all Wilton Manors neighborhoods. Part of our 
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
              Wilton Manors Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Jenada Isles", "Manor Grove", "Central Wilton Manors", "Wilton Drive", "The Drive", 
                "Colohatchee", "Lakeview", "Richardson", "Galt Mile", 
                "Coral Estates", "Poinsettia Heights", "Middle River"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>, 
              <Link to="/oakland-park-cleaning" className="text-primary hover:underline ml-1">Oakland Park</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <RelatedLinks currentPage="/wilton-manors-cleaning" pageType="city" cityName="Wilton Manors" />
        <Footer />
      </main>
    </>
  );
};

export default WiltonManorsCleaning;