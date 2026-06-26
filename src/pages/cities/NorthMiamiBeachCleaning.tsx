import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in North Miami Beach?",
    a: "House cleaning in North Miami Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. CLEAN COLLECTIVE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in North Miami Beach, FL?",
    a: "CLEAN COLLECTIVE is rated 4.9 stars across 127+ verified reviews and serves all North Miami Beach neighborhoods including Keystone Point, Ojus, Sans Souci, and Ives Dairy. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean North Miami Beach condos and coastal properties?",
    a: "Yes. CLEAN COLLECTIVE cleans all North Miami Beach property types including condos, high-rises, and single-family homes. Our teams handle salt air challenges, building access requirements, and the unique needs of coastal properties."
  },
  {
    q: "Do you offer Airbnb and vacation rental cleaning in North Miami Beach?",
    a: "Yes. CLEAN COLLECTIVE provides Airbnb turnover cleaning, linen changes, and guest-ready preparation throughout North Miami Beach. Contact us for short-term rental cleaning rates and availability."
  }
];

const NorthMiamiBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="North Miami Beach Cleaning | Insured | CLEAN COLLECTIVE"
        pageDescription="North Miami Beach FL home & apartment cleaning. Eastern Shores, Skylake & Ojus specialists. Flexible scheduling. Get 10% off your first clean!"
        canonicalUrl="https://www.tidywisecleaning.com/north-miami-beach-cleaning"
        pageType="county"
        county="North Miami Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in North Miami Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in North Miami Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in North Miami Beach, FL. Serving Eastern Shores, Skylake, 
              Ojus, and all North Miami Beach neighborhoods. Part of our 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">Miami-Dade County cleaning services</Link>.
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
              North Miami Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Eastern Shores", "Skylake", "Ojus", "Winston Towers", "Highland Lakes", 
                "Interama", "Fulford", "Uleta", "Greynolds Park", 
                "Biscayne Shores", "Palm Springs North", "Norland"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/aventura-cleaning" className="text-primary hover:underline">Aventura</Link>, 
              <Link to="/sunny-isles-beach-cleaning" className="text-primary hover:underline ml-1">Sunny Isles Beach</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-north-miami-beach" className="text-primary font-semibold hover:underline">
              Read our North Miami Beach cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/north-miami-beach-cleaning" pageType="city" cityName="North Miami Beach" />
        <Footer />
      </main>
    </>
  );
};

export default NorthMiamiBeachCleaning;