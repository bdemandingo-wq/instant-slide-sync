import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Lake Worth?",
    a: "House cleaning in Lake Worth costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices depend on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Lake Worth, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Lake Worth neighborhoods including College Park, Parrot Cove, the Historic Lake Worth Beach area, and South Palm Beach. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean Lake Worth historic district homes?",
    a: "Yes. Clean Collective cleans all Lake Worth property types including vintage bungalows, historic homes in the downtown district, and newer construction. Our teams understand how to clean delicate surfaces and older fixtures without causing damage."
  },
  {
    q: "How often should Lake Worth homeowners book professional cleaning?",
    a: "Most Lake Worth homeowners book bi-weekly cleaning. The Palm Beach County humidity means dust and allergens build up faster than in drier climates. Clean Collective offers 5–15% off recurring weekly, bi-weekly, and monthly cleaning."
  }
];

const LakeWorthCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Lake Worth House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Lake Worth Beach FL thorough home cleaning. Downtown, Palm Beach Farms & Atlantis area. Affordable rates, background-checked cleaners. Schedule now!"
        canonicalUrl="https://www.tidywisecleaning.com/lake-worth-cleaning"
        pageType="county"
        county="Lake Worth"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Lake Worth Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Lake Worth Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Lake Worth Beach, FL. Serving Downtown Lake Worth, Palm Beach Farms, 
              Atlantis, and all Lake Worth neighborhoods. Part of our 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County cleaning services</Link>.
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
              Lake Worth Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Downtown Lake Worth", "Palm Beach Farms", "Atlantis", "College Park", "Lucerne Lakes", 
                "Lake Worth Corridor", "Paradise Palms", "Palm Beach National", "South Palm Beach", 
                "Lake Worth Heights", "Mango Groves", "Winston Trails"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>, 
              <Link to="/boynton-beach-cleaning" className="text-primary hover:underline ml-1">Boynton Beach</Link>, and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">all of Palm Beach County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-lake-worth" className="text-primary font-semibold hover:underline">
              Read our Lake Worth cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/lake-worth-cleaning" pageType="city" cityName="Lake Worth" />
        <Footer />
      </main>
    </>
  );
};

export default LakeWorthCleaning;