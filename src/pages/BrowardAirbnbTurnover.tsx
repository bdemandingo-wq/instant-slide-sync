import { Link } from "react-router-dom";
import { Phone, ArrowRight, Star, Shield, Sparkles, CheckCircle, MapPin, Clock, Camera, Shirt, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BrowardAirbnbTurnover = () => {
  const features = [
    { icon: Clock, title: "Same-Day & Between-Guest Turnovers", description: "Fast turnarounds scheduled around your check-out and check-in times so your listing is always guest-ready." },
    { icon: Shirt, title: "Linen Change & Laundry", description: "Beds stripped and remade with fresh linens. Wash, dry and fold service available so towels and sheets are always clean." },
    { icon: Package, title: "Restocking Essentials", description: "We replenish toilet paper, paper towels, soap, coffee, and host-provided amenities to keep your reviews five stars." },
    { icon: Camera, title: "Photo Checklists for Hosts", description: "Post-clean photos sent to you after every turnover so you can confirm the property is ready from anywhere." },
  ];

  const included = [
    "Full kitchen clean — counters, sink, appliances, dishes",
    "Bathrooms sanitized, mirrors and fixtures polished",
    "Beds stripped, fresh linens and made-up presentation",
    "Floors vacuumed and mopped throughout",
    "Trash removed and bins relined",
    "Surfaces dusted and high-touch points disinfected",
    "Amenities and supplies restocked",
    "Damage and low-stock alerts reported to host",
  ];

  const areas = ["Fort Lauderdale", "Hollywood", "Pompano Beach", "Deerfield Beach", "Pembroke Pines", "Coral Springs", "Plantation", "All of Broward County"];

  const faqs = [
    {
      q: "How fast can you turn over my Airbnb between guests?",
      a: "We schedule turnovers around your check-out and check-in windows and offer same-day service across Broward County. Most standard short-term rentals are cleaned, restocked and photo-confirmed within a few hours of guest departure.",
    },
    {
      q: "Do you change linens and do laundry?",
      a: "Yes. We strip and remake beds with fresh linens every turnover. Wash, dry and fold laundry service is available so your towels and sheets are always clean and ready for the next guest.",
    },
    {
      q: "Will you restock supplies for my guests?",
      a: "Absolutely. We replenish host-provided essentials like toilet paper, paper towels, soap, coffee and welcome amenities, and we alert you when stock runs low so you never get a bad review over a missing item.",
    },
    {
      q: "Do I get proof the property is ready?",
      a: "Yes. After every turnover we send a photo checklist showing the cleaned and staged property, so you can confirm it's guest-ready from anywhere — perfect for remote and out-of-state hosts.",
    },
    {
      q: "Which areas of Broward do you serve?",
      a: "We cover all of Broward County, including Fort Lauderdale, Hollywood, Pompano Beach, Deerfield Beach, Pembroke Pines, Coral Springs and Plantation. Tell us your address and we'll confirm availability.",
    },
    {
      q: "Can I set up recurring turnovers?",
      a: "Yes — most hosts book us on an ongoing basis tied to their booking calendar. We'll coordinate around your reservations so each new guest arrives to a spotless, fully stocked rental.",
    },
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Broward Airbnb Turnover Cleaning | Short-Term Rental | Clean Collective"
        pageDescription="Reliable Airbnb & short-term rental turnover cleaning in Broward County. Same-day between-guest turnovers, linen change, laundry, restocking & photo checklists. Serving Fort Lauderdale, Hollywood, Pompano & Deerfield."
        canonicalUrl="https://www.cleancollectives.com/broward-airbnb-turnover-cleaning"
        pageType="service"
        county="Broward County"
        breadcrumbs={[
          { name: "Home", url: "https://www.cleancollectives.com" },
          { name: "Broward Airbnb Turnover Cleaning", url: "https://www.cleancollectives.com/broward-airbnb-turnover-cleaning" },
        ]}
        faqItems={faqs}
      />
      <main className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                For Airbnb &amp; Short-Term Rental Hosts
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Broward Airbnb Turnover Cleaning
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Reliable, same-day turnovers that keep your short-term rental guest-ready and
                five-star. Linen changes, laundry, restocking and photo checklists across
                Fort Lauderdale, Hollywood, Pompano, Deerfield and all of Broward County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link to="/#booking" className="flex items-center gap-2">
                    Book a Turnover
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15618612752" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    (561) 861-2752
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" /> 140+ 5-star reviews
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" /> Licensed &amp; insured
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Serving all of Broward
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
                Everything Hosts Need Between Guests
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                We handle the full turnover so your listing stays spotless, stocked and ready
                for the next reservation — even when you're not nearby.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                      <p className="text-muted-foreground text-sm">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                What's Included in Every Turnover
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Broward Areas We Serve
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Turnover cleaning for Airbnb, VRBO and short-term rentals across Broward County.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {areas.map((area) => (
                  <span key={area} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <MapPin className="w-4 h-4" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <span className="font-medium">140+ Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-medium">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-6 h-6 text-primary" />
                <span className="font-medium">Same-Day Turnarounds</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">
                Host FAQs
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Book a Turnover for Your Broward Rental
            </h2>
            <p className="text-primary-foreground mb-8 max-w-xl mx-auto">
              Trusted by 140+ five-star clients. Keep your listing guest-ready with reliable,
              photo-confirmed turnovers across Broward County. No credit card required to book.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+15618612752" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (561) 861-2752
                </a>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/#booking">Book a Turnover</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Related Cleaning Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/airbnb-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Airbnb Cleaning</h3>
                <p className="text-muted-foreground text-sm">Short-term rental cleaning services</p>
              </Link>
              <Link to="/deep-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Deep Cleaning</h3>
                <p className="text-muted-foreground text-sm">Thorough cleaning for every corner</p>
              </Link>
              <Link to="/move-in-out-cleaning" className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Move In/Out Cleaning</h3>
                <p className="text-muted-foreground text-sm">Inspection-ready move cleaning</p>
              </Link>
            </div>
          </div>
        </section>

        <RelatedLinks currentPage="/broward-airbnb-turnover-cleaning" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default BrowardAirbnbTurnover;
