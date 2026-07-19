import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";

const StandardCleaning = () => {
  const included = [
    "Dust all surfaces and furniture",
    "Vacuum all floors and carpets",
    "Mop hard floors",
    "Clean kitchen counters and appliance exteriors",
    "Sanitize bathrooms (toilet, sink, shower/tub)",
    "Clean mirrors and glass surfaces",
    "Make beds and tidy rooms",
    "Empty trash bins",
    "Wipe down light switches and door handles",
    "General tidying and organizing",
  ];

  const frequencies = [
    {
      name: "Weekly",
      discount: "20% off",
      description: "Best for busy families and those who want a consistently clean home",
      popular: false,
    },
    {
      name: "Bi-Weekly",
      discount: "15% off",
      description: "Most popular choice—perfect balance of clean and cost",
      popular: true,
    },
    {
      name: "Monthly",
      discount: "10% off",
      description: "Great for maintaining a clean home between deep cleans",
      popular: false,
    },
    {
      name: "One-Time",
      discount: "Standard rate",
      description: "Perfect for special occasions or trying our service",
      popular: false,
    },
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Standard House Cleaning South Florida | From $150 | Clean Collective"
        pageDescription="Affordable house cleaning in Fort Lauderdale, Boca Raton & Miami from $150. Vacuuming, mopping, kitchen & bath cleaning. Book online today!"
        canonicalUrl="https://www.cleancollectives.com/standard-cleaning"
        pageType="service"
        county="South Florida"
        breadcrumbs={[
          { name: "Home", url: "https://www.cleancollectives.com" },
          { name: "Standard Cleaning", url: "https://www.cleancollectives.com/standard-cleaning" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Regular Maintenance Clean</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Standard Cleaning Services
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Keep your home consistently clean with our regular maintenance service. 
              Perfect for homes that are already in good condition and need ongoing upkeep 
              to stay fresh and tidy.
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
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> 2-3 Hour Service</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Up to 20% Off Recurring</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Same Cleaner Each Visit</span>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
              What's Included
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Our standard cleaning covers all the essentials to keep your home looking 
              its best between visits.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-8 text-muted-foreground">
              Need more? Add-ons available: inside oven, inside fridge, window cleaning, and more.
            </p>
          </div>
        </section>

        {/* Frequency Options */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
              Choose Your Frequency
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Save money with recurring cleanings. The more often we clean, the less time 
              it takes—and the more you save!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {frequencies.map((freq, index) => (
                <div 
                  key={index} 
                  className={`bg-card rounded-xl p-6 text-center relative ${
                    freq.popular ? "border-2 border-primary" : "border border-border"
                  }`}
                >
                  {freq.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{freq.name}</h3>
                  <p className="text-primary font-bold text-lg mb-3">{freq.discount}</p>
                  <p className="text-sm text-muted-foreground">{freq.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Standard Cleaning Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">1-2 Bedroom</h3>
                <p className="text-3xl font-bold text-primary mb-2">$120-$160</p>
                <p className="text-sm text-muted-foreground">2-2.5 hours</p>
              </div>
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Common
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">3 Bedroom</h3>
                <p className="text-3xl font-bold text-primary mb-2">$160-$220</p>
                <p className="text-sm text-muted-foreground">2.5-3 hours</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">4+ Bedroom</h3>
                <p className="text-3xl font-bold text-primary mb-2">$220-$300</p>
                <p className="text-sm text-muted-foreground">3-4 hours</p>
              </div>
            </div>
            
            <p className="text-center mt-8 text-muted-foreground">
              Prices shown are one-time rates. Recurring clients save 10-20%!
              <Link to="/#booking" className="text-primary hover:underline ml-1">Get your personalized quote.</Link>
            </p>
          </div>
        </section>

        {/* Compare Services */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              If your home hasn't been professionally cleaned in a while, we recommend starting 
              with a Deep Cleaning, then switching to Standard for maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/deep-cleaning">View Deep Cleaning</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/blog/deep-cleaning-vs-standard-cleaning">Compare Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Star className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready for Regular Cleaning?
            </h2>
            <p className="text-primary-foreground mb-8 max-w-xl mx-auto">
              Join hundreds of happy South Florida homeowners who trust Clean Collective for their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#booking">Book Standard Cleaning</Link>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <a href="tel:+15618612752">Call (561) 861-2752</a>
              </Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentPage="/standard-cleaning" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default StandardCleaning;
