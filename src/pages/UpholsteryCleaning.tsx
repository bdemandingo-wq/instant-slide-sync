import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight, Sparkles, Clock, Shield, Star, Sofa } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/button";

const UpholsteryCleaning = () => {
  const benefits = [
    "Safe cleaning for all fabric types",
    "Removes embedded dirt, oils, and allergens",
    "Eliminates odors from pets and spills",
    "Extends furniture life and appearance",
    "Eco-friendly and pet-safe solutions",
    "Protects and restores fabric fibers"
  ];

  const items = [
    "Sofas & Sectionals",
    "Armchairs & Recliners",
    "Dining Chairs",
    "Ottomans & Benches",
    "Headboards",
    "Outdoor Cushions"
  ];

  const process = [
    { step: "1", title: "Fabric Assessment", description: "We identify your fabric type and test for colorfastness" },
    { step: "2", title: "Pre-Treatment", description: "Stains and high-use areas receive special attention" },
    { step: "3", title: "Deep Extraction", description: "Professional cleaning removes dirt from fabric fibers" },
    { step: "4", title: "Protection", description: "Optional fabric protection for future stain resistance" }
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Upholstery Cleaning Near Me | South Florida | Clean Collective"
        pageDescription="Professional upholstery and furniture cleaning in Broward, Miami-Dade & Palm Beach County. Sofa, chair & fabric cleaning. Get a custom quote today!"
        canonicalUrl="https://cleancollectives.com/upholstery-cleaning"
        pageType="service"
        county="South Florida"
        breadcrumbs={[
          { name: "Home", url: "https://cleancollectives.com" },
          { name: "Upholstery Cleaning", url: "https://cleancollectives.com/upholstery-cleaning" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sofa className="w-4 h-4" />
                Custom Furniture Care
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Professional Upholstery Cleaning
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Revive your furniture with our expert upholstery cleaning service. 
                We safely clean all fabric types throughout South Florida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <a href="tel:+15618612752" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Get Custom Quote
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#booking" className="flex items-center gap-2">
                    Request Quote Online
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Clean */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                What We Clean
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                Why Choose Professional Upholstery Cleaning?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                Our Upholstery Cleaning Process
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {process.map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-6 h-6 text-primary" />
                <span className="font-medium">4.9 Star Rating</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-6 h-6 text-primary" />
                <span className="font-medium">Same-Day Service</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Related Cleaning Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/carpet-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Carpet Cleaning</h3>
                <p className="text-muted-foreground text-sm">Professional carpet deep cleaning</p>
              </Link>
              <Link to="/deep-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Deep Cleaning</h3>
                <p className="text-muted-foreground text-sm">Thorough cleaning for every corner</p>
              </Link>
              <Link to="/move-in-out-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Move In/Out Cleaning</h3>
                <p className="text-muted-foreground text-sm">Complete move cleaning service</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Get Your Custom Upholstery Cleaning Quote
            </h2>
            <p className="text-primary-foreground mb-8 max-w-xl mx-auto">
              Pricing depends on furniture type, fabric, and condition. 
              Contact us for a personalized quote for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+15618612752" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (561) 861-2752
                </a>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/#booking">Request Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentPage="/upholstery-cleaning" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default UpholsteryCleaning;
