import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Margate?",
    a: "House cleaning in Margate costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Margate, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Margate neighborhoods including Century Village, Royal Crest Estates, Boulevard Heights, and Margate Isles. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Century Village and active adult communities in Margate?",
    a: "Yes. Clean Collective serves Century Village and all Margate active adult communities. Our background-checked, insured teams are professional and trustworthy. We work efficiently and quietly with no long-term contracts required."
  },
  {
    q: "How often should Margate homeowners book professional cleaning?",
    a: "Most Margate homeowners book bi-weekly cleaning for regular upkeep. Monthly service is popular with retirees and seasonal residents. Clean Collective offers 5–15% discounts on recurring bookings and same-day availability for urgent needs."
  }
];

const MargateCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Margate House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Margate FL value-priced residential cleaning. Oriole Golf, Coral Gate & Palm Lakes. Weekly, bi-weekly or monthly options. Call (561) 861-2752!"
        canonicalUrl="https://www.cleancollective.net/margate-cleaning"
        pageType="county"
        county="Margate"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Margate</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Margate
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Margate, FL. Serving Oriole Golf & Tennis, Coral Gate, 
              Palm Lakes, and all Margate neighborhoods. Part of our 
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
              Margate Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Oriole Golf & Tennis", "Coral Gate", "Palm Lakes", "Margate Estates", "Lakewood", 
                "Carol Estates", "Margate Gardens", "Royal Palm Isles", "Coral Bay", 
                "Cocobay", "South Margate", "Margate City Center"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/coconut-creek-cleaning" className="text-primary hover:underline">Coconut Creek</Link>, 
              <Link to="/coral-springs-cleaning" className="text-primary hover:underline ml-1">Coral Springs</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <RelatedLinks currentPage="/margate-cleaning" pageType="city" cityName="Margate" />
        <Footer />
      </main>
    </>
  );
};

export default MargateCleaning;