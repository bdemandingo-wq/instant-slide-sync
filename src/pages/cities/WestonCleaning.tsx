import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Weston?",
    a: "House cleaning in Weston costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Weston's larger luxury homes may be priced by square footage. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Weston, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Weston communities including Windmill Ranch Estates, The Ridges, Savanna, Sector 7, and Bonaventure. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Weston gated communities and HOA neighborhoods?",
    a: "Yes. Clean Collective is experienced with Weston's premier planned communities. Our teams handle visitor gate protocols, HOA parking requirements, and building access at Windmill Ranch, The Ridges, and all Weston gated communities."
  },
  {
    q: "How often should Weston homeowners book professional cleaning?",
    a: "Most Weston homeowners book bi-weekly cleaning. Weston's large luxury homes with extensive tile, pool areas, and premium finishes benefit from regular professional cleaning to prevent the buildup that South Florida's humidity accelerates. Recurring clients save 5–15%."
  }
];

const WestonCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Weston House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Weston FL premium residential cleaning. Weston Hills, Savanna & The Ridges experts. Pet-safe products. Background-checked cleaners. Schedule today!"
        canonicalUrl="https://www.cleancollective.net/weston-cleaning"
        pageType="county"
        county="Weston"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Weston</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Weston
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Weston, FL. Serving Weston Hills, Savanna, 
              The Ridges, and all Weston neighborhoods. Part of our 
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
              Weston Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Weston Hills", "Savanna", "The Ridges", "Bonaventure", "Windmill Ranches", 
                "Country Isles", "Tequesta Trace", "Indian Trace", "Emerald Estates", 
                "The Landings", "Weston Town Center", "Falcon Trace"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/davie-cleaning" className="text-primary hover:underline">Davie</Link>, 
              <Link to="/pembroke-pines-cleaning" className="text-primary hover:underline ml-1">Pembroke Pines</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-weston" className="text-primary font-semibold hover:underline">
              Read our Weston cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/weston-cleaning" pageType="city" cityName="Weston" />
        <Footer />
      </main>
    </>
  );
};

export default WestonCleaning;