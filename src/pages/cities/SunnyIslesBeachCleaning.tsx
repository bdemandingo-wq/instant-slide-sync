import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Sunny Isles Beach?",
    a: "House cleaning in Sunny Isles Beach costs $108–$500+ for standard cleaning, $208–$600+ for deep cleaning, and $283–$700+ for move in/out cleaning. Ultra-luxury condos are priced by square footage and specific requirements. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Sunny Isles Beach, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Sunny Isles Beach luxury towers including Acqualina, Jade Signature, Porsche Design Tower, and Turnberry Ocean Club. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Sunny Isles Beach luxury condos and ultra-high-rise towers?",
    a: "Yes. Clean Collective specializes in Sunny Isles Beach luxury condo cleaning. Our teams deliver white-glove service with complete discretion, handling building security protocols, concierge coordination, and the precise standards expected in Sunny Isles' world-class towers."
  },
  {
    q: "Do you offer Airbnb and short-term rental cleaning in Sunny Isles Beach?",
    a: "Yes. Many Sunny Isles Beach luxury units operate as short-term rentals. Clean Collective provides same-day turnovers, linen changes, and guest-ready preparation. We understand the premium standards required in this market. Contact us for STR cleaning rates."
  }
];

const SunnyIslesBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Sunny Isles Beach Cleaning | Insured | Clean Collective"
        pageDescription="Sunny Isles Beach FL high-rise condo cleaning. Oceania, Acqualina & Golden Beach towers. Building-approved, insured teams. Call (561) 861-2752!"
        canonicalUrl="https://www.cleancollective.net/sunny-isles-beach-cleaning"
        pageType="county"
        county="Sunny Isles Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Sunny Isles Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Sunny Isles Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Sunny Isles Beach, FL. Serving Golden Beach, Oceania, 
              Acqualina, and all Sunny Isles Beach neighborhoods. Part of our 
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
              Sunny Isles Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Golden Beach", "Oceania", "Acqualina", "Trump Towers", "Jade Beach", 
                "Porsche Design Tower", "Chateau Beach", "Regalia", "Turnberry Ocean Colony", 
                "Pinnacle", "The Armani", "Collins Avenue"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>, 
              <Link to="/miami-beach-cleaning" className="text-primary hover:underline ml-1">Miami Beach</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-sunny-isles-beach" className="text-primary font-semibold hover:underline">
              Read our Sunny Isles Beach cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/sunny-isles-beach-cleaning" pageType="city" cityName="Sunny Isles Beach" />
        <Footer />
      </main>
    </>
  );
};

export default SunnyIslesBeachCleaning;