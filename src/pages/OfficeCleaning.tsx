import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight, Clock, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/button";

const OfficeCleaning = () => {
  const benefits = [
    "Flexible scheduling — evenings, weekends, or after hours",
    "OSHA compliant cleaning products and procedures",
    "Breakroom, restroom, and common area sanitation",
    "Floor care including vacuuming, mopping, and waxing",
    "Eco-friendly options available for green offices",
    "Customized cleaning plans for your workspace"
  ];

  const process = [
    { step: "1", title: "Walkthrough", description: "We assess your office space and understand your needs" },
    { step: "2", title: "Custom Plan", description: "A tailored cleaning schedule and checklist is created" },
    { step: "3", title: "Professional Clean", description: "Our trained crew cleans to commercial standards" },
    { step: "4", title: "Quality Check", description: "Supervisors inspect every clean for consistency" }
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Office Cleaning Services | South Florida | Clean Collective"
        pageDescription="Professional office and commercial cleaning in South Florida. OSHA compliant, flexible scheduling, and customized plans for a spotless workspace."
        canonicalUrl="https://www.cleancollective.net/office-cleaning"
      />
      <Navbar />
      <main id="main-content" className="pt-16">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Office & Commercial Cleaning
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Keep your workplace clean, healthy, and professional with our tailored office cleaning services across South Florida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/booking">Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15618612752"><Phone className="mr-2 w-5 h-5" /> (561) 861-2752</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">Why Businesses Choose Clean Collective</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">Our Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.map((item) => (
                <div key={item.step} className="text-center p-6 bg-background rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /><span className="text-sm font-medium">Licensed & Insured</span></div>
              <div className="flex items-center gap-2"><Star className="w-5 h-5 text-secondary" /><span className="text-sm font-medium">5-Star Rated</span></div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm font-medium">Flexible Hours</span></div>
            </div>
            <Button size="lg" asChild>
              <Link to="/booking">Request a Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>

        <RelatedLinks pageType="service" currentPage="/office-cleaning" />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
};

export default OfficeCleaning;
