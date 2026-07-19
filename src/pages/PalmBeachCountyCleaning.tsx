import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Clock, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/seo/GoogleReviews";
import GoogleMapEmbed from "@/components/seo/GoogleMapEmbed";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";

const cities = [
  "West Palm Beach", "Boca Raton", "Delray Beach", "Boynton Beach",
  "Jupiter", "Palm Beach Gardens", "Lake Worth", "Wellington",
  "Royal Palm Beach", "Riviera Beach", "Palm Springs", "Greenacres"
];

const services = [
  { name: "Standard Cleaning", desc: "Weekly & bi-weekly maintenance cleaning for Palm Beach County homes" },
  { name: "Deep Cleaning", desc: "Thorough deep cleaning services in West Palm Beach and Boca Raton" },
  { name: "Move In/Out Cleaning", desc: "Complete move cleaning throughout Palm Beach County" },
];

const faqItems = [
  {
    q: "How much does house cleaning cost in Palm Beach County?",
    a: "House cleaning in Palm Beach County costs $108–$350 for standard cleaning, $208–$500 for deep cleaning, and $283–$600 for move in/out cleaning. Luxury and waterfront properties may be priced by square footage. Clean Collective provides instant online quotes for all Palm Beach County cities."
  },
  {
    q: "What cities in Palm Beach County does Clean Collective serve?",
    a: "Clean Collective serves all major Palm Beach County cities including Boca Raton, West Palm Beach, Delray Beach, Boynton Beach, Jupiter, Palm Beach Gardens, Lake Worth, Wellington, Royal Palm Beach, and surrounding areas. We cover all of Palm Beach County."
  },
  {
    q: "Is Clean Collective licensed and insured in Palm Beach County?",
    a: "Yes. Clean Collective is fully licensed and insured in Palm Beach County, Florida. We carry general liability insurance and can provide a certificate of insurance on request. Every cleaner is background-checked before their first assignment."
  },
  {
    q: "Do you offer seasonal cleaning in Palm Beach County for snowbirds?",
    a: "Yes. Palm Beach County has one of the largest seasonal populations in Florida. Clean Collective accommodates snowbird schedules with flexible booking, no long-term contracts, and thorough seasonal deep cleans — both on arrival in the fall and on departure in the spring."
  }
];

const PalmBeachCountyCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Palm Beach County Cleaning | Clean Collective"
        pageDescription="Top-rated cleaning West Palm Beach & Boca Raton. Licensed & insured. Eco-friendly products. Same-day quotes. Call (561) 861-2752 for 10% off!"
        canonicalUrl="https://www.cleancollective.net/palm-beach-county-cleaning"
        pageType="county"
        county="Palm Beach County"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Palm Beach County</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Palm Beach County Cleaning Services
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Top-rated cleaning in West Palm Beach from South Florida's most trusted <Link to="/" className="text-primary hover:underline">professional cleaning service</Link>. 
              Serving Boca Raton, Delray Beach, Jupiter, and all of Palm Beach County.
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
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Background-Checked Team</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Satisfaction Guaranteed</span>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <GoogleReviews />

        {/* Services */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Seasonal Discounts in Boca Raton & Beyond
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Check our <Link to="/blog/palm-beach-seasonal-discounts" className="text-primary hover:underline">Palm Beach seasonal discounts</Link>. 
              Also serving <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward County</Link> and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">Miami-Dade County</Link>.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={service.name}
                  className="bg-card p-6 rounded-xl shadow-soft border border-border hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <Link to="/#booking" className="text-primary font-medium hover:underline">
                    Book Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Best Cleaning in West Palm Beach & Jupiter
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Eco-Friendly Products</h3>
                <p className="text-muted-foreground">Non-toxic, environmentally safe cleaning in Palm Beach County.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Insured & Bonded</h3>
                <p className="text-muted-foreground">Fully licensed for homes and estates in Boca Raton and beyond.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground">Evening and weekend appointments throughout Palm Beach County.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Served */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Cities We Serve in Palm Beach County
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {cities.map((city) => (
                <span 
                  key={city}
                  className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              Also serving <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward County</Link> and 
              <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">Miami-Dade County</Link>.
            </p>
          </div>
        </section>

        <GoogleMapEmbed />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default PalmBeachCountyCleaning;
