import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import RelatedLinks from "@/components/seo/RelatedLinks";

const faqItems = [
  {
    q: "How much does house cleaning cost in Delray Beach?",
    a: "House cleaning in Delray Beach costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Seasonal opening and closing cleans start at $208. Clean Collective provides instant online quotes with no hidden fees."
  },
  {
    q: "What is the best cleaning service in Delray Beach, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Delray Beach communities including Mizner Country Club, Polo Club, Lake Ida, and downtown Atlantic Avenue. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you offer seasonal cleaning in Delray Beach for snowbirds?",
    a: "Yes. Many Delray Beach residents are seasonal snowbirds who need reliable cleaning during the winter season and a thorough deep clean before they leave in spring. Clean Collective accommodates flexible scheduling with no long-term contracts required."
  },
  {
    q: "Do you service Delray Beach country clubs and gated communities?",
    a: "Yes. Clean Collective is experienced with Delray Beach's country club and gated communities including Mizner Country Club, Polo Club, and Gleneagles. Our teams handle visitor gate protocols, parking coordination, and HOA requirements smoothly."
  }
];

const DelrayBeachCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Delray Beach House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Delray Beach FL professional house cleaning. Atlantic Avenue, Tropic Isle & Lake Ida residents trust Clean Collective. Recurring or one-time cleans. Get a quote!"
        canonicalUrl="https://www.cleancollective.net/delray-beach-cleaning"
        pageType="county"
        county="Delray Beach"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Delray Beach</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Best Cleaning Service in Delray Beach
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Professional house cleaning in Delray Beach, FL. Serving Atlantic Avenue area, Tropic Isle, 
              Lake Ida, and all Delray Beach neighborhoods. Part of our 
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
              Delray Beach Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Atlantic Avenue", "Tropic Isle", "Lake Ida", "Pineapple Grove", "Marina Historic District", 
                "Del-Ida Park", "Seagate", "Tropic Palms", "Rainberry Bay", 
                "Kings Point", "Polo Trace", "Delray Shores"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>, 
              <Link to="/boynton-beach-cleaning" className="text-primary hover:underline ml-1">Boynton Beach</Link>, and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">all of Palm Beach County</Link>.
            </p>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Moving out of your Delray Beach home?</p>
            <Link to="/blog/move-out-cleaning-boca-raton" className="text-primary font-semibold hover:underline">
              Read our move-out cleaning guide for South Palm Beach — protect your deposit →
            </Link>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-delray-beach" className="text-primary font-semibold hover:underline">
              Read our Delray Beach cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/delray-beach-cleaning" pageType="city" cityName="Delray Beach" />
        <Footer />
      </main>
    </>
  );
};

export default DelrayBeachCleaning;