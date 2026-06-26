import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight, Clock, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/button";

const PostConstructionCleaning = () => {
  const benefits = [
    "Complete dust and debris removal from all surfaces",
    "Window cleaning inside and out — including tracks",
    "Paint splatter, adhesive, and sticker removal",
    "Deep cleaning of all fixtures, cabinets, and appliances",
    "Floor scrubbing, polishing, and grout cleaning",
    "Final detail and inspection before move-in"
  ];

  const process = [
    { step: "1", title: "Assessment", description: "We evaluate the scope of construction debris and cleanup needed" },
    { step: "2", title: "Rough Clean", description: "Remove large debris, dust, and construction materials" },
    { step: "3", title: "Detail Clean", description: "Thorough cleaning of every surface, fixture, and corner" },
    { step: "4", title: "Final Polish", description: "Touch-up cleaning and quality inspection for move-in readiness" }
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Post-Construction Cleaning | South Florida | CLEAN COLLECTIVE"
        pageDescription="Post-construction & renovation cleanup in South Florida. Dust removal, window cleaning, paint splatter cleanup & move-in ready detail."
        canonicalUrl="https://www.tidywisecleaning.com/post-construction-cleaning"
      />
      <Navbar />
      <main id="main-content" className="pt-16">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Post-Construction Cleaning
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Just finished a renovation or new build? We handle the tough cleanup so your space is spotless and move-in ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/booking">Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15615718725"><Phone className="mr-2 w-5 h-5" /> (561) 571-8725</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">What's Included</h2>
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
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm font-medium">Fast Turnaround</span></div>
            </div>
            <Button size="lg" asChild>
              <Link to="/booking">Request a Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>

        <RelatedLinks pageType="service" currentPage="/post-construction-cleaning" />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
};

export default PostConstructionCleaning;
