import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Coconut Creek?",
    a: "House cleaning in Coconut Creek costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and bathrooms. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Coconut Creek, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Coconut Creek neighborhoods including Wynmoor Village, The Hammocks, Lyons West, and Winston Park. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you use eco-friendly products in Coconut Creek?",
    a: "Yes. Clean Collective uses eco-friendly, non-toxic cleaning products as standard — important for families with young children, pets, and anyone who prioritizes environmental responsibility. Ask about our green cleaning options."
  },
  {
    q: "Do you clean Wynmoor Village and active adult communities in Coconut Creek?",
    a: "Yes. Clean Collective serves Wynmoor Village and all Coconut Creek active adult communities. Our teams are professional, discreet, and familiar with the community access requirements and building rules."
  }
];

const CoconutCreekCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Coconut Creek House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Coconut Creek FL professional home cleaning. Wynmoor community specialists. Palm Beach Farms & Cypress Bend. Licensed & insured. Schedule today!"
        canonicalUrl="https://www.cleancollectives.com/coconut-creek-cleaning"
        pageType="county"
        county="Coconut Creek"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Coconut Creek</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Coconut Creek
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Coconut Creek, FL. Serving Wynmoor, Palm Beach Farms, 
              Cypress Bend, and all Coconut Creek neighborhoods. Part of our 
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
              Coconut Creek Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Wynmoor", "Palm Beach Farms", "Cypress Bend", "Winston Park", "Banyan Trails", 
                "Cocobay", "Turtle Run", "Regency Lakes", "Country Woods", 
                "Victoria Park", "Palm Vista", "Cypress Lake"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/parkland-cleaning" className="text-primary hover:underline">Parkland</Link>, 
              <Link to="/margate-cleaning" className="text-primary hover:underline ml-1">Margate</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-coconut-creek" className="text-primary font-semibold hover:underline">
              Read our Coconut Creek cleaning guide — Wynmoor Village, pricing, what to expect →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/coconut-creek-cleaning" pageType="city" cityName="Coconut Creek" />
        <Footer />
      </main>
    </>
  );
};

export default CoconutCreekCleaning;