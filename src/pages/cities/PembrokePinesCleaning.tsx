import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Pembroke Pines?",
    a: "House cleaning in Pembroke Pines costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Prices are based on home size and number of bathrooms. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Pembroke Pines, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Pembroke Pines communities including Chapel Trail, Silver Lakes, Pembroke Falls, Pasadena, and Grand Palms. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Pembroke Pines gated communities and HOA neighborhoods?",
    a: "Yes. Clean Collective is experienced with Pembroke Pines' large planned communities. Our teams handle visitor gate protocols, parking coordination, and HOA access requirements — making your appointment hassle-free in any gated community."
  },
  {
    q: "Do you clean pool patios and screen enclosures in Pembroke Pines?",
    a: "Yes. While we do not clean pool water, Clean Collective does clean pool patios, screen enclosures, and outdoor areas around the pool. Many Pembroke Pines homeowners add outdoor cleaning to their standard or deep cleaning appointment."
  }
];

const PembrokePinesCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Pembroke Pines House Cleaning | Licensed, Insured | Clean Collective"
        pageDescription="Pembroke Pines cleaning for busy families. Chapel Trail, Silver Lakes & Century Village specialists. Weekly, bi-weekly & deep cleaning. Book your free quote!"
        canonicalUrl="https://www.cleancollectives.com/pembroke-pines-cleaning"
        pageType="county"
        county="Pembroke Pines"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Pembroke Pines</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Pembroke Pines
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Pembroke Pines, FL. Serving Chapel Trail, Silver Lakes, 
              Century Village, and all Pembroke Pines neighborhoods. Part of our 
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
              Pembroke Pines Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Chapel Trail", "Silver Lakes", "Century Village", "Pembroke Falls", "Grand Palms", 
                "Pembroke Isles", "Towngate", "Embassy Lakes", "Pembroke Lakes", 
                "Walnut Creek", "Pembroke Shores", "Monterra"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/miramar-cleaning" className="text-primary hover:underline">Miramar</Link>, 
              <Link to="/hollywood-cleaning" className="text-primary hover:underline ml-1">Hollywood</Link>, and 
              <Link to="/broward-county-cleaning" className="text-primary hover:underline ml-1">all of Broward County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-pembroke-pines" className="text-primary font-semibold hover:underline">
              Read our Pembroke Pines cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/pembroke-pines-cleaning" pageType="city" cityName="Pembroke Pines" />
        <Footer />
      </main>
    </>
  );
};

export default PembrokePinesCleaning;