import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Homestead?",
    a: "House cleaning in Homestead costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Homestead, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Homestead neighborhoods as well as Florida City and Redland. We are licensed, insured, and background-check every cleaner before their first appointment."
  },
  {
    q: "Do you serve rural and agricultural properties in Homestead?",
    a: "Yes. Clean Collective serves all Homestead property types including homes in the Redland agricultural area, new construction communities near the Homestead campus, and Florida City. We handle all sizes and configurations."
  },
  {
    q: "How often should Homestead homeowners book professional cleaning?",
    a: "Most Homestead homeowners book bi-weekly cleaning. The combination of South Florida heat, humidity, and outdoor dust means regular professional cleaning makes a significant difference in indoor air quality and overall cleanliness."
  }
];

const HomesteadCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Homestead House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Homestead FL affordable residential cleaning. Redland, Florida City & Leisure City coverage. Honest pricing, no hidden fees. Call (561) 861-2752!"
        canonicalUrl="https://www.cleancollectives.com/homestead-cleaning"
        pageType="county"
        county="Homestead"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Homestead</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Homestead
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Homestead, FL. Serving Redland, Florida City, 
              Leisure City, and all Homestead neighborhoods. Part of our 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">Miami-Dade County cleaning services</Link>.
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
              Homestead Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Redland", "Florida City", "Leisure City", "Homestead Air Force Base", "Keys Gate", 
                "Waterstone", "Cutler Bay", "Naranja", "Princeton", 
                "South Miami Heights", "Palm Drive", "Downtown Homestead"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/miami-cleaning" className="text-primary hover:underline">Miami</Link>, 
              <Link to="/coral-gables-cleaning" className="text-primary hover:underline ml-1">Coral Gables</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <RelatedLinks currentPage="/homestead-cleaning" pageType="city" cityName="Homestead" />
        <Footer />
      </main>
    </>
  );
};

export default HomesteadCleaning;