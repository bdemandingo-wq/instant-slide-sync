import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import CityPageNavigation from "@/components/seo/CityPageNavigation";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Miami?",
    a: "House cleaning in Miami costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Condo and high-rise cleaning may vary based on square footage and building access requirements. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Miami, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Miami neighborhoods including Brickell, Wynwood, Coconut Grove, Little Havana, and the Design District. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Miami condos and high-rise apartments?",
    a: "Yes. Clean Collective specializes in Miami condo and high-rise cleaning. Our teams are familiar with building access requirements, HOA rules, and the unique challenges of humid Miami properties. We service all Miami-Dade buildings."
  },
  {
    q: "How often should Miami homeowners book professional cleaning?",
    a: "Miami's humidity and heat mean homes accumulate dust and mold risk faster than drier climates. Most Miami homeowners book bi-weekly cleaning for regular maintenance. Monthly deep cleaning is popular for condos with tile and grout that need more attention."
  }
];

const MiamiCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Miami House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Miami FL house & condo cleaning you can count on. Brickell, Wynwood, Coconut Grove & Little Havana. Same-day availability. Book now!"
        canonicalUrl="https://www.cleancollective.net/miami-cleaning"
        pageType="county"
        county="Miami"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Miami</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Miami
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Miami, FL. Serving Brickell, Wynwood, 
              Coconut Grove, Little Havana, and all Miami neighborhoods. Part of our 
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
              Miami Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Brickell", "Wynwood", "Coconut Grove", "Little Havana", "Design District", 
                "Midtown", "Edgewater", "Downtown Miami", "Coral Way", 
                "Little Haiti", "Overtown", "Upper East Side"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/miami-beach-cleaning" className="text-primary hover:underline">Miami Beach</Link>, 
              <Link to="/coral-gables-cleaning" className="text-primary hover:underline ml-1">Coral Gables</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        {/* Why Choose Clean Collective in Miami */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Why Miami Residents Choose Clean Collective
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Condo Specialists</h3>
                <p className="text-muted-foreground text-sm">
                  From Brickell high-rises to Coconut Grove estates, we understand Miami living. Our teams are building-approved and familiar with condo regulations.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Bilingual Teams</h3>
                <p className="text-muted-foreground text-sm">
                  Our Miami cleaning teams are bilingual (English/Spanish), ensuring clear communication and excellent service for all our clients.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Humidity Experts</h3>
                <p className="text-muted-foreground text-sm">
                  Miami humidity means mold risk. Our eco-friendly products and techniques help prevent mold growth while keeping your home fresh and clean.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-miami" className="text-primary font-semibold hover:underline">
              Read our Miami cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/miami-cleaning" pageType="city" cityName="Miami" />
        <Footer />
      </main>
    </>
  );
};

export default MiamiCleaning;