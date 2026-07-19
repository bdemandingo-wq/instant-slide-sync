import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import CityPageNavigation from "@/components/seo/CityPageNavigation";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in West Palm Beach?",
    a: "House cleaning in West Palm Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in West Palm Beach, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all West Palm Beach neighborhoods including Clematis, Northwood, El Cid, Flamingo Park, and CityPlace. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you clean West Palm Beach condos and historic homes?",
    a: "Yes. Clean Collective cleans all West Palm Beach property types including downtown condos, historic properties in El Cid and Old Northwood, and waterfront homes along the Intracoastal. Our teams understand how to clean vintage details and delicate surfaces without causing damage."
  },
  {
    q: "Do you offer move-out cleaning in West Palm Beach?",
    a: "Yes. Clean Collective provides move-out cleaning throughout West Palm Beach. Our move-out service covers everything from inside the oven and refrigerator to windows and baseboards — everything needed to pass a landlord inspection and protect your security deposit."
  }
];

const WestPalmBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="West Palm Beach House Cleaning | Insured | Clean Collective"
        pageDescription="Professional cleaning West Palm Beach. House & condo cleaning in Clematis, Northwood, El Cid. Licensed & insured. Call (561) 861-2752 for free quote!"
        canonicalUrl="https://cleancollectives.com/west-palm-beach-cleaning"
        pageType="county"
        county="West Palm Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in West Palm Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Cleaning Services in West Palm Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house and condo cleaning in West Palm Beach, FL. Serving Clematis Street, 
              Northwood, El Cid, and all WPB neighborhoods. Part of our 
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
              West Palm Beach Areas We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Clematis Street", "Northwood", "El Cid", "Flamingo Park", "Old Northwood", 
                "SoSo", "Grandview Heights", "Palm Beach Lakes", "City Place", 
                "Downtown WPB", "Howard Park", "Pleasant City"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>, 
              <Link to="/jupiter-cleaning" className="text-primary hover:underline ml-1">Jupiter</Link>, and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">all of Palm Beach County</Link>.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Why West Palm Beach Residents Choose Clean Collective
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Historic Home Specialists</h3>
                <p className="text-muted-foreground">West Palm Beach's historic districts like El Cid and Old Northwood require special care. We understand how to clean and protect vintage details.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Downtown & Condo Ready</h3>
                <p className="text-muted-foreground">From City Place condos to waterfront high-rises, we navigate building requirements and coordinate seamlessly with management.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Local & Reliable</h3>
                <p className="text-muted-foreground">As a Palm Beach County business, we know West Palm Beach inside and out. Count on consistent quality and dependable scheduling.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              West Palm Beach FL Cleaning Services
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
              <p>
                Clean Collective provides comprehensive cleaning services throughout West Palm Beach, from the vibrant 
                downtown Clematis Street district to the charming historic neighborhoods of El Cid and Old 
                Northwood. Our professional team understands the diverse housing stock in WPB, from modern 
                high-rise condos to beautifully preserved Mediterranean Revival homes.
              </p>
              <p>
                West Palm Beach combines urban energy with residential tranquility, and our cleaning services 
                adapt to both. Whether you need regular maintenance for your downtown condo, deep cleaning 
                for your Flamingo Park bungalow, or move-in cleaning for a new rental, we deliver exceptional 
                results every time.
              </p>
              <p>
                Our eco-friendly products are tough on dirt but gentle on your home's surfaces and safe for 
                your family. We're fully licensed and insured, with background-checked cleaners you can trust 
                in your West Palm Beach home.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Moving out of your West Palm Beach home?</p>
            <Link to="/blog/move-out-cleaning-west-palm-beach" className="text-primary font-semibold hover:underline">
              Read our WPB move-out cleaning guide — protect your security deposit →
            </Link>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-west-palm-beach" className="text-primary font-semibold hover:underline">
              Read our West Palm Beach cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/west-palm-beach-cleaning" pageType="city" cityName="West Palm Beach" />
        <Footer />
      </main>
    </>
  );
};

export default WestPalmBeachCleaning;
