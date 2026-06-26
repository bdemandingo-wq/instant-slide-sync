import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Deerfield Beach?",
    a: "House cleaning in Deerfield Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Deerfield Beach, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and is based in Deerfield Beach at 65 SW 12th Ave. We serve all Deerfield Beach neighborhoods including Lighthouse Point, Deer Creek, Century Village, and Riverwalk. Licensed, insured, and background-checked."
  },
  {
    q: "Is Clean Collective local to Deerfield Beach?",
    a: "Yes. Clean Collective is headquartered in Deerfield Beach, FL. Being locally based means faster response times, same-day availability, and a genuine commitment to serving our home community. We know Deerfield Beach better than anyone."
  },
  {
    q: "Do you offer vacation rental and Airbnb cleaning in Deerfield Beach?",
    a: "Yes. Deerfield Beach's coastal location attracts a strong vacation rental market. Clean Collective provides same-day Airbnb turnovers, linen changes, and guest-ready preparation throughout Deerfield Beach. Contact us for short-term rental pricing."
  }
];

const DeerfieldBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Deerfield Beach House Cleaning | Insured | Clean Collective"
        pageDescription="Deerfield Beach FL beachside home & condo cleaning. The Cove, Hillsboro Beach & Century Village experts. Eco-friendly options available. Book today!"
        canonicalUrl="https://www.tidywisecleaning.com/deerfield-beach-cleaning"
        pageType="county"
        county="Deerfield Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Deerfield Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Deerfield Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Deerfield Beach, FL. Serving The Cove, Hillsboro Beach, 
              Century Village, and all Deerfield Beach neighborhoods. Part of our 
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
              Deerfield Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["The Cove", "Hillsboro Beach", "Century Village", "Quiet Waters", "Waterways", 
                "Crystal Lake", "Deer Creek", "Deerfield Country Club", "Riviera Isles", 
                "Pines of Deerfield", "Deerfield Lake", "Waterford"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/pompano-beach-cleaning" className="text-primary hover:underline">Pompano Beach</Link>, 
              <Link to="/boca-raton-cleaning" className="text-primary hover:underline ml-1">Boca Raton</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-deerfield-beach" className="text-primary font-semibold hover:underline">
              Read our Deerfield Beach cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/deerfield-beach-cleaning" pageType="city" cityName="Deerfield Beach" />
        <Footer />
      </main>
    </>
  );
};

export default DeerfieldBeachCleaning;