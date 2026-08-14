import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Miramar?",
    a: "House cleaning in Miramar costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Miramar, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Miramar communities including Monarch Lakes, Sunset Lakes, Riviera Isles, Miramar Country Club, and Nautica. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Miramar gated communities and HOA neighborhoods?",
    a: "Yes. Clean Collective is experienced with Miramar's gated and HOA communities. Our teams handle visitor gate protocols, parking coordination, and community access requirements so your appointment runs smoothly without any hassle."
  },
  {
    q: "How often should Miramar homeowners book professional cleaning?",
    a: "Most Miramar homeowners book bi-weekly service. Miramar's large planned community homes, many with pools and screen enclosures, benefit from regular professional cleaning to prevent South Florida humidity from causing long-term buildup."
  }
];

const MiramarCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Miramar House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Miramar FL affordable house cleaning you can trust. Sunset Lakes, Silver Shores & Riviera Isles. Flexible scheduling. Satisfaction guaranteed!"
        canonicalUrl="https://cleancollectives.com/miramar-cleaning"
        pageType="county"
        county="Miramar"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Miramar</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Miramar
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Miramar, FL. Serving Sunset Lakes, Silver Shores, 
              Riviera Isles, and all Miramar neighborhoods. Part of our 
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
              Miramar Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Sunset Lakes", "Silver Shores", "Riviera Isles", "Miramar Lakes", "Huntington", 
                "Monarch Lakes", "Vizcaya", "Sunset Falls", "Miramar Isles", 
                "Bristol Bay", "Grand Isles", "Palm Cove"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/pembroke-pines-cleaning" className="text-primary hover:underline">Pembroke Pines</Link>, 
              <Link to="/hollywood-cleaning" className="text-primary hover:underline ml-1">Hollywood</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-miramar" className="text-primary font-semibold hover:underline">
              Read our Miramar cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/miramar-cleaning" pageType="city" cityName="Miramar" />
        <Footer />
      </main>
    </>
  );
};

export default MiramarCleaning;