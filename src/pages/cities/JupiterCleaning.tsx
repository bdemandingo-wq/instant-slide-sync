import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Jupiter?",
    a: "House cleaning in Jupiter costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Larger waterfront homes and estates may be priced by square footage. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Jupiter, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Jupiter communities including Admirals Cove, Abacoa, Jonathan's Landing, Rialto, and Frenchman's Creek. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Jupiter waterfront and boating community homes?",
    a: "Yes. Clean Collective is experienced with Jupiter's waterfront and boating communities. Our teams handle the unique cleaning challenges of dock-access homes, coastal salt air exposure, and the larger estate properties common throughout Jupiter."
  },
  {
    q: "Do you offer seasonal cleaning in Jupiter for part-time residents?",
    a: "Yes. Jupiter attracts many seasonal residents and snowbirds. Clean Collective accommodates flexible scheduling with no long-term contracts — including deep cleaning for arrival in season and closing cleans before you head north for the summer."
  }
];

const JupiterCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Jupiter House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Jupiter FL coastal home cleaning specialists. Abacoa, Jupiter Inlet & The Bluffs. Eco-friendly products safe for pets & kids. Call (561) 861-2752!"
        canonicalUrl="https://cleancollectives.com/jupiter-cleaning"
        pageType="county"
        county="Jupiter"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Jupiter</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Jupiter
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Jupiter, FL. Serving Abacoa, Jupiter Inlet, 
              The Bluffs, and all Jupiter neighborhoods. Part of our 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County cleaning services</Link>.
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
              Jupiter Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Abacoa", "Jupiter Inlet", "The Bluffs", "Admirals Cove", "Jupiter Country Club", 
                "Jupiter Farms", "Jonathans Landing", "Tequesta", "River Ridge", 
                "Indian Creek", "Jupiter Hills", "Pennock Point"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/palm-beach-gardens-cleaning" className="text-primary hover:underline">Palm Beach Gardens</Link>, 
              <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline ml-1">West Palm Beach</Link>, and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">all of Palm Beach County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-jupiter" className="text-primary font-semibold hover:underline">
              Read our Jupiter cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/jupiter-cleaning" pageType="city" cityName="Jupiter" />
        <Footer />
      </main>
    </>
  );
};

export default JupiterCleaning;