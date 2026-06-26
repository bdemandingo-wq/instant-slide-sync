import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Coral Gables?",
    a: "House cleaning in Coral Gables costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Larger Mediterranean estates may be priced by square footage. CLEAN COLLECTIVE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Coral Gables, FL?",
    a: "CLEAN COLLECTIVE is rated 4.9 stars across 127+ verified reviews and serves all Coral Gables neighborhoods including Gables Estates, Biltmore, Coral Gables Country Club, and Coconut Grove adjacent areas. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Coral Gables Mediterranean and historic homes?",
    a: "Yes. CLEAN COLLECTIVE has experience with Coral Gables' historic Mediterranean Revival architecture. Our teams understand how to clean and protect delicate materials, natural stone, ornate tile work, and vintage details without causing damage."
  },
  {
    q: "How often should Coral Gables homeowners book professional cleaning?",
    a: "Most Coral Gables homeowners book bi-weekly cleaning for larger homes and estates. Monthly deep cleaning is popular for maintaining natural stone floors and high-end finishes. CLEAN COLLECTIVE accommodates seasonal and flexible scheduling with no long-term contracts."
  }
];

const CoralGablesCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Coral Gables House Cleaning | Licensed & Insured | CLEAN COLLECTIVE"
        pageDescription="Coral Gables FL upscale residential cleaning. Miracle Mile, Cocoplum & Riviera estates. Discreet, professional & detail-oriented. Free consultation!"
        canonicalUrl="https://www.tidywisecleaning.com/coral-gables-cleaning"
        pageType="county"
        county="Coral Gables"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Coral Gables</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Coral Gables
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Coral Gables, FL. Serving Miracle Mile, Cocoplum, 
              Riviera, and all Coral Gables neighborhoods. Part of our 
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
              Coral Gables Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Miracle Mile", "Cocoplum", "Riviera", "Coral Gables Country Club", "Gables Estates", 
                "Old Spanish Village", "Crafts Section", "Douglas Entrance", "South Gables", 
                "North Gables", "University Park", "Biltmore"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/miami-cleaning" className="text-primary hover:underline">Miami</Link>, 
              <Link to="/miami-beach-cleaning" className="text-primary hover:underline ml-1">Miami Beach</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Not sure which service to book?</p>
            <Link to="/blog/deep-cleaning-vs-standard-cleaning" className="text-primary font-semibold hover:underline">
              Deep Clean vs Standard Clean — which one does your home actually need? →
            </Link>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-coral-gables" className="text-primary font-semibold hover:underline">
              Read our Coral Gables cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/coral-gables-cleaning" pageType="city" cityName="Coral Gables" />
        <Footer />
      </main>
    </>
  );
};

export default CoralGablesCleaning;