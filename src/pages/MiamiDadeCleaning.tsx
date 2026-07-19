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
  "Miami", "Miami Beach", "Hialeah", "Coral Gables", "Aventura",
  "Kendall", "Doral", "Homestead", "Miami Gardens", "North Miami",
  "Sunny Isles Beach", "Key Biscayne", "Pinecrest", "Coconut Grove"
];

const services = [
  { name: "Standard Cleaning", desc: "Regular maintenance cleaning for Miami-Dade homes and condos" },
  { name: "Deep Cleaning", desc: "Thorough deep cleaning services throughout Miami and surrounding areas" },
  { name: "Move In/Out Cleaning", desc: "Complete move cleaning for apartments and houses in Miami-Dade" },
];

const faqItems = [
  {
    q: "How much does house cleaning cost in Miami-Dade County?",
    a: "House cleaning in Miami-Dade County costs $108–$400 for standard cleaning, $208–$550 for deep cleaning, and $283–$650 for move in/out cleaning. Luxury condos and high-rises may be priced by square footage. Clean Collective provides instant online quotes for all Miami-Dade cities."
  },
  {
    q: "What cities in Miami-Dade County does Clean Collective serve?",
    a: "Clean Collective serves all major Miami-Dade municipalities including Miami, Miami Beach, Hialeah, Coral Gables, Aventura, Doral, North Miami, North Miami Beach, Sunny Isles Beach, Homestead, Miami Gardens, and surrounding areas. We cover all of Miami-Dade County."
  },
  {
    q: "Is Clean Collective licensed and insured in Miami-Dade County?",
    a: "Yes. Clean Collective is fully licensed and insured in Miami-Dade County, Florida. We carry general liability insurance and can provide a certificate of insurance on request. Every cleaner is background-checked before their first assignment."
  },
  {
    q: "Do you clean Miami-Dade condos and high-rise apartments?",
    a: "Yes. Clean Collective specializes in Miami-Dade condo and high-rise cleaning. Our teams are familiar with building access requirements, HOA rules, service elevators, and the unique challenges of the county's dense urban and coastal building stock."
  }
];

const MiamiDadeCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Miami-Dade Cleaning Services | Clean Collective"
        pageDescription="Affordable cleaning Miami services. Licensed & insured. Serving Miami, Miami Beach, Coral Gables. Same-day quotes. Call now for 10% off first clean!"
        canonicalUrl="https://www.cleancollective.net/miami-dade-cleaning"
        pageType="county"
        county="Miami-Dade County"
        faqItems={faqItems}
      />
      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-16 bg-gradient-to-br from-accent/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">Top-Rated in Miami-Dade</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Miami-Dade Cleaning Services
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Affordable cleaning in Miami from South Florida's most trusted <Link to="/" className="text-primary hover:underline">professional cleaning service</Link>. 
              Serving Miami, Miami Beach, Coral Gables, and all of Miami-Dade County.
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
              Professional Cleaning in Miami Beach & Beyond
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Check our <Link to="/blog/miami-permit-rules" className="text-primary hover:underline">Miami-Dade cleaning guide</Link> for local tips. 
              Also serving <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward County</Link> and 
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County</Link>.
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
              Best Cleaning Services in Coral Gables & Miami
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Eco-Friendly Products</h3>
                <p className="text-muted-foreground">Safe, green cleaning products used throughout Miami-Dade.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Insured & Bonded</h3>
                <p className="text-muted-foreground">Fully licensed for condos and homes in Miami.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground">Evening and weekend appointments in Miami-Dade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Served */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Cities We Serve in Miami-Dade County
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
              <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County</Link>.
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

export default MiamiDadeCleaning;
