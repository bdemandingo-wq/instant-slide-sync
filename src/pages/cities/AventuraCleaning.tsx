import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Aventura?",
    a: "House cleaning in Aventura costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Luxury high-rise condos may be priced based on square footage. CLEAN COLLECTIVE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Aventura, FL?",
    a: "CLEAN COLLECTIVE is rated 4.9 stars across 127+ verified reviews and serves all Aventura communities including Williams Island, Turnberry Isle, Harbor Centre, and Aventura Circle. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Aventura condos and luxury high-rises?",
    a: "Yes. CLEAN COLLECTIVE specializes in Aventura condo and high-rise cleaning. Our teams handle building access protocols, service elevator use, and HOA requirements for Aventura's luxury towers."
  },
  {
    q: "Do you offer Airbnb and vacation rental cleaning in Aventura?",
    a: "Yes. Aventura has a strong short-term rental market. CLEAN COLLECTIVE provides same-day Airbnb turnovers, linen changes, and guest-ready preparation throughout Aventura. Contact us for short-term rental cleaning rates."
  }
];

const AventuraCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Aventura House Cleaning | Licensed & Insured | CLEAN COLLECTIVE"
        pageDescription="Aventura FL luxury condo & high-rise cleaning specialists. Serving Turnberry, Williams Island & Aventura Mall area. Eco-friendly products. Book online now!"
        canonicalUrl="https://www.tidywisecleaning.com/aventura-cleaning"
        pageType="county"
        county="Aventura"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Aventura</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Aventura
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Aventura, FL. Serving Aventura Mall area, Turnberry, 
              Williams Island, and all Aventura neighborhoods. Part of our 
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
              Aventura Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Aventura Mall", "Turnberry", "Williams Island", "Porto Vita", "The Point", 
                "Hamptons South", "Oceanview", "Mystic Pointe", "Biscayne Yacht Club", 
                "Aventura Lakes", "Country Club Drive", "Portsview"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/sunny-isles-beach-cleaning" className="text-primary hover:underline">Sunny Isles Beach</Link>, 
              <Link to="/hallandale-beach-cleaning" className="text-primary hover:underline ml-1">Hallandale Beach</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-aventura" className="text-primary font-semibold hover:underline">
              Read our Aventura cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/aventura-cleaning" pageType="city" cityName="Aventura" />
        <Footer />
      </main>
    </>
  );
};

export default AventuraCleaning;