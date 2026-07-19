import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Miami Gardens?",
    a: "House cleaning in Miami Gardens costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Miami Gardens, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Miami Gardens neighborhoods including Carol City, Lake Lucerne, Andover, and Scott Lake. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do your Miami Gardens cleaning teams speak Spanish?",
    a: "Yes. Clean Collective cleaning teams are bilingual (English/Spanish), ensuring clear communication and excellent service throughout Miami Gardens' diverse community."
  },
  {
    q: "How often should Miami Gardens homeowners book professional cleaning?",
    a: "Most Miami Gardens homeowners book bi-weekly cleaning to stay on top of South Florida's humidity and dust. Clean Collective offers 5–15% discounts on recurring bookings with priority scheduling for regular clients."
  }
];

const MiamiGardensCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Miami Gardens House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Miami Gardens FL reliable home cleaning. Hard Rock Stadium area, Andover & Scott Lake. Recurring maintenance plans available. Free quote online!"
        canonicalUrl="https://cleancollectives.com/miami-gardens-cleaning"
        pageType="county"
        county="Miami Gardens"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Miami Gardens</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Miami Gardens
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Miami Gardens, FL. Serving Hard Rock Stadium area, Andover, 
              Scott Lake, and all Miami Gardens neighborhoods. Part of our 
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
              Miami Gardens Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Hard Rock Stadium", "Andover", "Scott Lake", "Carol City", "Opa-locka North", 
                "Bunche Park", "Lake Lucerne", "Sky Lake", "Rolling Oaks", 
                "Norland", "Golden Glades", "Country Club"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/hialeah-cleaning" className="text-primary hover:underline">Hialeah</Link>, 
              <Link to="/north-miami-cleaning" className="text-primary hover:underline ml-1">North Miami</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-miami-gardens" className="text-primary font-semibold hover:underline">
              Read our Miami Gardens cleaning guide — bilingual service, pricing, what to expect →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/miami-gardens-cleaning" pageType="city" cityName="Miami Gardens" />
        <Footer />
      </main>
    </>
  );
};

export default MiamiGardensCleaning;