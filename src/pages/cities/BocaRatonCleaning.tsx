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
    q: "How much does house cleaning cost in Boca Raton?",
    a: "House cleaning in Boca Raton costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Country club and luxury homes may be priced based on square footage. Clean Collective provides instant online quotes."
  },
  {
    q: "What is the best cleaning service in Boca Raton, FL?",
    a: "Clean Collective is rated 4.9 stars across 127+ verified reviews and serves all Boca Raton communities including Boca West, Broken Sound, Woodfield Country Club, and Royal Palm Yacht Club. We are licensed, insured, and background-check every cleaner."
  },
  {
    q: "Do you service Boca Raton country clubs and gated communities?",
    a: "Yes. Clean Collective is experienced with country club and gated community access in Boca Raton. Our teams handle visitor gate protocols, parking coordination, and HOA requirements so appointments run smoothly at Boca West, Broken Sound, and similar communities."
  },
  {
    q: "Do you offer seasonal cleaning in Boca Raton for snowbirds?",
    a: "Yes. Clean Collective accommodates Boca Raton's large seasonal population with flexible scheduling and no long-term contracts. We offer deep cleaning for snowbird arrivals in October/November and a thorough closing clean when you leave for the summer."
  }
];

const BocaRatonCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Boca Raton House Cleaning | Licensed & Insured | Clean Collective"
        pageDescription="Top-rated cleaning Boca Raton. Professional house & condo cleaning. Serving Mizner Park, Royal Palm, Boca West. Licensed & insured. Call (561) 861-2752!"
        canonicalUrl="https://cleancollectives.com/boca-raton-cleaning"
        pageType="county"
        county="Boca Raton"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Boca Raton</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Top-Rated Cleaning in Boca Raton
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Premium house and condo cleaning in Boca Raton, FL. Serving Mizner Park, Royal Palm Yacht Club, 
              Boca West, and all Boca communities. Part of our 
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
              Boca Raton Communities We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Mizner Park", "Royal Palm Yacht Club", "Boca West", "Woodfield Country Club", 
                "The Sanctuary", "Boca Grove", "Polo Club", "St. Andrews", "Broken Sound", 
                "Town Center", "Camino Gardens", "Palmetto Park"].map((area) => (
                <span key={area} className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/delray-beach-cleaning" className="text-primary hover:underline">Delray Beach</Link>, 
              <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline ml-1">West Palm Beach</Link>, and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">all of Palm Beach County</Link>.
            </p>
          </div>
        </section>

        {/* Why Choose Clean Collective in Boca Raton */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Why Boca Raton Residents Choose Clean Collective
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Country Club Standards</h3>
                <p className="text-muted-foreground text-sm">
                  Boca Raton is known for elegance. Our cleaners deliver white-glove service that meets the standards of Boca West, Broken Sound, and other premier communities.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Seasonal Flexibility</h3>
                <p className="text-muted-foreground text-sm">
                  Whether you are a year-round resident or snowbird, we offer flexible scheduling to match your Boca Raton lifestyle and seasonal needs.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Trusted & Vetted</h3>
                <p className="text-muted-foreground text-sm">
                  Every Clean Collective cleaner is background-checked, insured, and trained to handle luxury properties with care and discretion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">First time booking a cleaner?</p>
              <Link to="/blog/deep-cleaning-service-boca-raton" className="text-primary font-semibold hover:underline">
                Read our Boca Raton deep cleaning guide — what's included, pricing &amp; when to book →
              </Link>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Moving out of your Boca Raton home?</p>
              <Link to="/blog/move-out-cleaning-boca-raton" className="text-primary font-semibold hover:underline">
                Read our move-out cleaning guide — get your deposit back →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Want to learn more before booking?</p>
            <Link to="/blog/house-cleaning-boca-raton" className="text-primary font-semibold hover:underline">
              Read our Boca Raton cleaning guide — pricing, neighborhoods, what's included →
            </Link>
          </div>
        </section>

        <RelatedLinks currentPage="/boca-raton-cleaning" pageType="city" cityName="Boca Raton" />
        <Footer />
      </main>
    </>
  );
};

export default BocaRatonCleaning;
