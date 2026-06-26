import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Davie?",
    a: "House cleaning in Davie costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Larger equestrian properties and estates may be priced by square footage. CLEAN COLLECTIVE provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Davie, FL?",
    a: "CLEAN COLLECTIVE is rated 4.9 stars across 127+ verified reviews and serves all Davie neighborhoods including Rolling Oaks, Pine Island Ridge, Ivanhoe Estates, and Flamingo Gardens adjacent areas. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean large Davie properties and equestrian estates?",
    a: "Yes. CLEAN COLLECTIVE serves all Davie property types including larger homes on acreage, equestrian estates, and ranch-style properties. Our teams are experienced with the unique cleaning challenges of Davie's rural and semi-rural residential areas."
  },
  {
    q: "How often should Davie homeowners book professional cleaning?",
    a: "Most Davie homeowners book bi-weekly cleaning for standard homes. For larger equestrian properties or homes with more outdoor exposure, monthly deep cleaning is recommended. CLEAN COLLECTIVE accommodates all sizes with no long-term contracts."
  }
];

const DavieCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Davie House Cleaning | Licensed & Insured | CLEAN COLLECTIVE"
        pageDescription="Davie FL home cleaning near Nova Southeastern. Pine Island Ridge & Rolling Hills residents love our attention to detail. Insured cleaners. Book now!"
        canonicalUrl="https://www.tidywisecleaning.com/davie-cleaning"
        pageType="county"
        county="Davie"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Davie</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Davie
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Davie, FL. Serving Nova Southeastern area, Pine Island Ridge, 
              Rolling Hills, and all Davie neighborhoods. Part of our 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">Broward County cleaning services</Link>.
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
              Davie Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Nova Southeastern", "Pine Island Ridge", "Rolling Hills", "Davie Ranches", "Arrowhead", 
                "Forest Ridge", "Long Lake Ranches", "Flamingo Gardens", "Shenandoah", 
                "Orange Drive Manor", "Ivanhoe", "Country Estates"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/plantation-cleaning" className="text-primary hover:underline">Plantation</Link>, 
              <Link to="/weston-cleaning" className="text-primary hover:underline ml-1">Weston</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-davie" className="text-primary font-semibold hover:underline">
              Read our Davie cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/davie-cleaning" pageType="city" cityName="Davie" />
        <Footer />
      </main>
    </>
  );
};

export default DavieCleaning;