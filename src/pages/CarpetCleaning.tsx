import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight, Sparkles, Clock, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/button";

const CarpetCleaning = () => {
  const benefits = [
    "Deep extraction removes embedded dirt and allergens",
    "Safe for all carpet types including wool and synthetic",
    "Fast drying times with professional equipment",
    "Eco-friendly cleaning solutions available",
    "Stain treatment and odor elimination included",
    "Extends carpet life and maintains warranty"
  ];

  const process = [
    { step: "1", title: "Inspection", description: "We assess your carpet type, stains, and high-traffic areas" },
    { step: "2", title: "Pre-Treatment", description: "Stains and spots receive specialized treatment solutions" },
    { step: "3", title: "Deep Cleaning", description: "Professional extraction removes dirt from deep fibers" },
    { step: "4", title: "Final Grooming", description: "Carpets are groomed for even drying and appearance" }
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Carpet Cleaning Services Near Me | South Florida | Clean Collective"
        pageDescription="Professional carpet cleaning in Broward, Miami-Dade & Palm Beach County. Deep extraction, stain removal & eco-friendly options. Get a custom quote today!"
        canonicalUrl="https://www.cleancollective.net/carpet-cleaning"
        pageType="service"
        county="South Florida"
        breadcrumbs={[
          { name: "Home", url: "https://www.cleancollective.net" },
          { name: "Carpet Cleaning", url: "https://www.cleancollective.net/carpet-cleaning" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Custom Carpet Care
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Professional Carpet Cleaning
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Restore your carpets to like-new condition. Our deep cleaning service removes 
                embedded dirt, allergens, and stubborn stains throughout South Florida.
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

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                Why Choose Our Carpet Cleaning Service?
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                Our Carpet Cleaning Process
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
              <Link to="/upholstery-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Upholstery Cleaning</h3>
                <p className="text-muted-foreground text-sm">Professional furniture and fabric cleaning</p>
              </Link>
              <Link to="/deep-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Deep Cleaning</h3>
                <p className="text-muted-foreground text-sm">Thorough cleaning for every corner</p>
              </Link>
              <Link to="/standard-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Standard Cleaning</h3>
                <p className="text-muted-foreground text-sm">Regular maintenance cleaning</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Get Your Custom Carpet Cleaning Quote
            </h2>
            <p className="text-primary-foreground mb-8 max-w-xl mx-auto">
              Every carpet is unique. Contact us for a personalized quote based on 
              your carpet type, size, and cleaning needs.
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

        <RelatedLinks currentPage="/carpet-cleaning" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default CarpetCleaning;
