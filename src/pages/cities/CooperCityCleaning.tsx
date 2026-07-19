import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Cooper City?",
    a: "House cleaning in Cooper City costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Cooper City, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Cooper City communities including Rock Creek, Embassy Lakes, Monterra, and Flamingo Gardens adjacent areas. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you offer recurring cleaning in Cooper City?",
    a: "Yes. Clean Collective offers weekly, bi-weekly, and monthly recurring cleaning throughout Cooper City. Recurring clients save 5–15% on every visit and get priority scheduling. Most Cooper City families book bi-weekly service."
  },
  {
    q: "Are Clean Collective cleaning products safe for kids and pets in Cooper City?",
    a: "Yes. Clean Collective uses eco-friendly, non-toxic cleaning products that are safe for children and pets. Cooper City's family-oriented community means many of our clients have young kids and animals — our products are specifically chosen with this in mind."
  }
];

const CooperCityCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Cooper City House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Cooper City FL family-focused home cleaning. Rock Creek, Embassy Lakes & Country Glen. Kid-safe & pet-friendly products. Schedule today!"
        canonicalUrl="https://www.cleancollectives.com/cooper-city-cleaning"
        pageType="county"
        county="Cooper City"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Cooper City</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Cooper City
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Cooper City, FL. Serving Rock Creek, Embassy Lakes, 
              Country Glen, and all Cooper City neighborhoods. Part of our 
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
              Cooper City Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Rock Creek", "Embassy Lakes", "Country Glen", "Flamingo Gardens", "Cooper Colony", 
                "Countryside", "Palm Lake Estates", "Timberlake", "Waldrep Dairy", 
                "Monterra", "Forest Lake", "Broadview Park"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/davie-cleaning" className="text-primary hover:underline">Davie</Link>, 
              <Link to="/pembroke-pines-cleaning" className="text-primary hover:underline ml-1">Pembroke Pines</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <RelatedLinks currentPage="/cooper-city-cleaning" pageType="city" cityName="Cooper City" />
        <Footer />
      </main>
    </>
  );
};

export default CooperCityCleaning;