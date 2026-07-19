import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Pompano Beach?",
    a: "House cleaning in Pompano Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Pompano Beach, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Pompano Beach neighborhoods including Lighthouse Point, Cresthaven, Pompano Beach Highlands, Crystal Lake, and Palm Aire. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you handle salt air and coastal cleaning challenges in Pompano Beach?",
    a: "Yes. Pompano Beach's coastal location means faster salt air buildup on windows, screens, and stainless steel. Clean Collective teams are trained to remove salt film without scratching surfaces, and to address the humidity issues common in coastal Broward homes."
  },
  {
    q: "Do you offer Airbnb and vacation rental cleaning in Pompano Beach?",
    a: "Yes. Pompano Beach has a strong vacation rental market. Clean Collective provides same-day Airbnb turnovers, linen changes, and guest-ready preparation throughout Pompano Beach. Contact us for short-term rental cleaning rates."
  }
];

const PompanoBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Pompano Beach House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Pompano Beach FL coastal home cleaning. Lighthouse Point, Palm Aire & Cypress Creek. Salt-air safe cleaning methods. Free estimates available!"
        canonicalUrl="https://cleancollectives.com/pompano-beach-cleaning"
        pageType="county"
        county="Pompano Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Pompano Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Pompano Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Pompano Beach, FL. Serving Lighthouse Point, Palm Aire, 
              Cypress Creek, and all Pompano Beach neighborhoods. Part of our 
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
              Pompano Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Lighthouse Point", "Palm Aire", "Cypress Creek", "Cresthaven", "Collier Manor", 
                "Highlands", "Kendall Green", "Leisureville", "Mainlands", "Palm Aire Country Club",
                "Pompano Beach Highlands", "Terra Mar"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>, 
              <Link to="/deerfield-beach-cleaning" className="text-primary hover:underline ml-1">Deerfield Beach</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to know what's included before booking?</p>
            <Link to="/blog/house-cleaning-fort-lauderdale" className="text-primary font-semibold hover:underline">
              Read our Broward County cleaning guide — pricing, what's included &amp; how to book →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/pompano-beach-cleaning" pageType="city" cityName="Pompano Beach" />
        <Footer />
      </main>
    </>
  );
};

export default PompanoBeachCleaning;