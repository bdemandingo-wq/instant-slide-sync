import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";

const MoveInOutCleaning = () => {
  const included = [
    "All Deep Cleaning services",
    "Inside all cabinets and closets",
    "Inside all appliances (oven, fridge, microwave, dishwasher)",
    "Inside drawers and pantry shelves",
    "Light fixtures and ceiling fans",
    "Window sills, tracks, and blinds",
    "Baseboards and door frames",
    "Wall spot cleaning and switch plates",
    "Bathroom deep sanitization",
    "Garage sweep (if applicable)",
    "Patio/lanai cleaning (if applicable)",
    "Final walkthrough",
  ];

  const moveOutBenefits = [
    "Get your security deposit back",
    "Meet landlord/HOA requirements",
    "Leave on good terms",
    "Save time during stressful move",
  ];

  const moveInBenefits = [
    "Start fresh in a clean home",
    "Sanitize before unpacking",
    "Remove previous tenant residue",
    "Peace of mind from day one",
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Move In Move Out Cleaning South Florida | Clean Collective"
        pageDescription="Move-out cleaning for full deposit back. Move-in cleaning for a fresh start. Fort Lauderdale, Miami & 40+ South Florida cities."
        canonicalUrl="https://www.cleancollectives.com/move-in-out-cleaning"
        pageType="service"
        county="South Florida"
        breadcrumbs={[
          { name: "Home", url: "https://www.cleancollectives.com" },
          { name: "Move In/Out Cleaning", url: "https://www.cleancollectives.com/move-in-out-cleaning" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Get Your Deposit Back</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Move In/Out Cleaning
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Moving is stressful enough. Let us handle the cleaning so you can focus on 
              your move. Our thorough move cleaning helps you get your deposit back and 
              start fresh in your new home.
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
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Inside All Appliances</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Inside All Cabinets</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Deposit-Ready Clean</span>
            </div>
          </div>
        </section>

        {/* Move Out vs Move In */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Moving Out?
                </h2>
                <ul className="space-y-3 mb-6">
                  {moveOutBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">
                  We clean to landlord and property management standards, helping ensure 
                  you get your full security deposit back.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Moving In?
                </h2>
                <ul className="space-y-3 mb-6">
                  {moveInBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">
                  Start your new chapter in a spotless home. We sanitize every surface 
                  before you move in your belongings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
              What's Included
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Our move cleaning is the most comprehensive service we offer—designed to meet 
              landlord expectations and exceed your standards.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Move Cleaning Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">1-2 Bedroom</h3>
                <p className="text-3xl font-bold text-primary mb-2">$200-$300</p>
                <p className="text-sm text-muted-foreground">4-5 hours</p>
              </div>
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Common
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">3 Bedroom</h3>
                <p className="text-3xl font-bold text-primary mb-2">$300-$400</p>
                <p className="text-sm text-muted-foreground">5-6 hours</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">4+ Bedroom</h3>
                <p className="text-3xl font-bold text-primary mb-2">$400-$550</p>
                <p className="text-sm text-muted-foreground">6-8 hours</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-muted-foreground">
              Prices vary based on home size and condition. Empty homes clean faster than occupied ones.
              <Link to="/#booking" className="text-primary hover:underline ml-1">Get your exact quote.</Link>
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Tips for Move Cleaning
            </h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <span><strong className="text-foreground">Book early:</strong> Schedule your cleaning at least 1 week before your move-out date.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <span><strong className="text-foreground">Empty first:</strong> Remove all belongings before we arrive for the best results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <span><strong className="text-foreground">Utilities on:</strong> Ensure water and electricity are still connected for our visit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <span><strong className="text-foreground">Take photos:</strong> Document the clean for your landlord and records.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Star className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Moving Soon? Book Your Cleaning Today
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Serving Broward, Palm Beach, and Miami-Dade counties. Response in 15 minutes or less!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link to="/#booking">Book Move Cleaning</Link>
              </Button>
              <Button size="lg" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90" asChild>
                <Link to="/blog/move-in-out-cleaning-checklist">View Checklist</Link>
              </Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentPage="/move-in-out-cleaning" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default MoveInOutCleaning;
