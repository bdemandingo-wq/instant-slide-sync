import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in North Miami?",
    a: "House cleaning in North Miami costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in North Miami, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all North Miami neighborhoods including Biscayne Gardens, Arch Creek, Sans Souci Estates, and Keystone Islands. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do your North Miami cleaning teams speak Spanish?",
    a: "Yes. Clean Collective cleaning teams are bilingual (English/Spanish), ensuring clear communication and thorough service throughout North Miami's diverse community."
  },
  {
    q: "How often should North Miami homeowners book professional cleaning?",
    a: "Most North Miami homeowners book bi-weekly cleaning for regular maintenance. South Florida's humidity means dust and allergen buildup happens faster than in drier climates. Clean Collective offers 5–15% discounts on recurring bookings."
  }
];

const NorthMiamiCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="North Miami House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="North Miami FL dependable house cleaning. Sans Souci, Keystone Point & Biscayne Gardens. Pet-friendly & eco-conscious. Book your estimate online!"
        canonicalUrl="https://www.cleancollectives.com/north-miami-cleaning"
        pageType="county"
        county="North Miami"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in North Miami</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in North Miami
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in North Miami, FL. Serving Sans Souci, Keystone Point, 
              Biscayne Gardens, and all North Miami neighborhoods. Part of our 
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
              North Miami Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Sans Souci", "Keystone Point", "Biscayne Gardens", "Arch Creek", "Griffing Park", 
                "Bay Point", "Palm Grove", "Enchanted Lake", "Keystone Islands", 
                "North Miami Downtown", "Highland Village", "Eastern Shores"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/north-miami-beach-cleaning" className="text-primary hover:underline">North Miami Beach</Link>, 
              <Link to="/aventura-cleaning" className="text-primary hover:underline ml-1">Aventura</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-north-miami" className="text-primary font-semibold hover:underline">
              Read our North Miami cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/north-miami-cleaning" pageType="city" cityName="North Miami" />
        <Footer />
      </main>
    </>
  );
};

export default NorthMiamiCleaning;