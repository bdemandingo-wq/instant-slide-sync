import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight, Clock, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/button";

const AirbnbCleaning = () => {
  const benefits = [
    "Fast turnovers between guests — same-day service available",
    "Linen change, bed making, and towel folding included",
    "Restocking of essentials (toiletries, coffee, etc.)",
    "Checklist-based cleaning for consistent 5-star reviews",
    "Flexible scheduling for last-minute bookings",
    "Deep cleaning add-ons available between long stays"
  ];

  const process = [
    { step: "1", title: "Schedule", description: "Set up recurring turnovers or book on-demand cleanings" },
    { step: "2", title: "Turnover Clean", description: "Our team follows your custom checklist for every clean" },
    { step: "3", title: "Restock & Stage", description: "Essentials restocked and property staged for next guest" },
    { step: "4", title: "Photo Confirmation", description: "Receive photos confirming the property is guest-ready" }
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Airbnb & Vacation Rental Cleaning | South Florida | Clean Collective"
        pageDescription="Airbnb & vacation rental turnover cleaning in South Florida. Same-day turnovers, linen service & checklist-based cleaning for 5-star reviews."
        canonicalUrl="https://www.tidywisecleaning.com/airbnb-cleaning"
      />
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Airbnb & Vacation Rental Cleaning
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Keep your rental guest-ready with fast, reliable turnover cleaning. We help South Florida hosts maintain 5-star standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/booking">Book a Turnover Clean <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15615718725"><Phone className="mr-2 w-5 h-5" /> (561) 571-8725</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">Why Hosts Choose Clean Collective</h2>
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

        {/* Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">Our Turnover Process</h2>
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

        {/* Trust */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /><span className="text-sm font-medium">Licensed & Insured</span></div>
              <div className="flex items-center gap-2"><Star className="w-5 h-5 text-secondary" /><span className="text-sm font-medium">5-Star Rated</span></div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span className="text-sm font-medium">Same-Day Turnovers</span></div>
            </div>
            <Button size="lg" asChild>
              <Link to="/booking">Schedule Your Turnover <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>

        <RelatedLinks pageType="service" currentPage="/airbnb-cleaning" />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
};

export default AirbnbCleaning;
