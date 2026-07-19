import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Doral?",
    a: "House cleaning in Doral costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Doral, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Doral communities including Doral Isles, Doral Meadows, The Trails, and Landmark at Doral. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do your Doral cleaning teams speak Spanish?",
    a: "Yes. Clean Collective cleaning teams are bilingual (English/Spanish), which is essential in Doral's large Latin community. Clear communication means better service and no misunderstandings about what you need cleaned."
  },
  {
    q: "How often should Doral homeowners book professional cleaning?",
    a: "Most Doral homeowners book bi-weekly cleaning. Doral's newer construction homes with tile throughout benefit from quarterly deep cleaning to maintain grout and keep high-traffic areas looking their best. Clean Collective offers 5–15% discounts on recurring bookings."
  }
];

const DoralCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Doral House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Doral FL professional home & office cleaning. Bilingual staff serving Downtown Doral, Trump National & Isles of Doral. Free estimates. Call (561) 861-2752!"
        canonicalUrl="https://www.cleancollective.net/doral-cleaning"
        pageType="county"
        county="Doral"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Doral</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Doral
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Doral, FL. Serving Trump National Doral, Isles of Doral, 
              Downtown Doral, and all Doral neighborhoods. Part of our 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">Miami-Dade County cleaning services</Link>.
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
              Doral Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Trump National Doral", "Isles of Doral", "Downtown Doral", "Doral Meadows", "Costa del Sol", 
                "Doral Cay", "Doral Isles", "Venetia", "Doral Estates", 
                "Park Square", "Midtown Doral", "Fontainebleau Park"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/hialeah-cleaning" className="text-primary hover:underline">Hialeah</Link>, 
              <Link to="/miami-cleaning" className="text-primary hover:underline ml-1">Miami</Link>, and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">all of Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-doral" className="text-primary font-semibold hover:underline">
              Read our Doral cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/doral-cleaning" pageType="city" cityName="Doral" />
        <Footer />
      </main>
    </>
  );
};

export default DoralCleaning;