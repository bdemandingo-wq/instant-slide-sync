import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import CityPageNavigation from "@/components/seo/CityPageNavigation";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Fort Lauderdale?",
    a: "House cleaning in Fort Lauderdale costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Fort Lauderdale, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Fort Lauderdale neighborhoods including Las Olas, Victoria Park, Rio Vista, and Coral Ridge. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Fort Lauderdale condos and waterfront homes?",
    a: "Yes. Clean Collective specializes in Fort Lauderdale condo and waterfront home cleaning. Our teams are familiar with Las Olas Isles canal home access, building elevator protocols, and the unique challenges of coastal living."
  },
  {
    q: "How often should Fort Lauderdale homeowners book professional cleaning?",
    a: "Most Fort Lauderdale homeowners book bi-weekly standard cleaning to manage South Florida's year-round humidity and dust. Coastal homes near the beach may benefit from weekly cleaning to combat salt air residue and buildup."
  }
];

const FortLauderdaleCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Fort Lauderdale House Cleaning | Insured | Clean Collective"
        pageDescription="Best cleaning in Fort Lauderdale. Licensed & insured house cleaning. Same-day quotes. Serving Las Olas, Victoria Park, Rio Vista. Call (561) 861-2752!"
        canonicalUrl="https://www.cleancollective.net/fort-lauderdale-cleaning"
        pageType="county"
        county="Fort Lauderdale"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Fort Lauderdale</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Fort Lauderdale
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Fort Lauderdale, FL. Serving Las Olas, Victoria Park, 
              Rio Vista, Coral Ridge, and all Fort Lauderdale neighborhoods. Part of our 
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
              Fort Lauderdale Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Las Olas", "Victoria Park", "Rio Vista", "Coral Ridge", "Harbor Beach", 
                "Lauderdale Beach", "Riviera Isles", "Tarpon River", "Sailboat Bend", 
                "Flagler Village", "Colee Hammock", "Sunrise Key"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/hollywood-cleaning" className="text-primary hover:underline">Hollywood</Link>, 
              <Link to="/coral-springs-cleaning" className="text-primary hover:underline ml-1">Coral Springs</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        {/* Why Choose Clean Collective in Fort Lauderdale */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Why Fort Lauderdale Residents Choose Clean Collective
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Local Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  We understand Fort Lauderdale homes, from beachfront condos to historic Victoria Park properties. Our cleaners know the unique challenges of South Florida living.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground text-sm">
                  Book weekly, bi-weekly, or one-time cleanings that fit your schedule. Same-day availability for urgent cleaning needs throughout Fort Lauderdale.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground text-sm">
                  Not happy? We will re-clean for free. Our Fort Lauderdale customers consistently rate us 5 stars for quality and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-fort-lauderdale" className="text-primary font-semibold hover:underline">
              Read our Fort Lauderdale cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/fort-lauderdale-cleaning" pageType="city" cityName="Fort Lauderdale" />
        <Footer />
      </main>
    </>
  );
};

export default FortLauderdaleCleaning;
