import { Link } from "react-router-dom";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";

const serviceAreas = {
  broward: {
    name: "Broward County",
    link: "/broward-county-cleaning",
    cities: [
      { name: "Fort Lauderdale", link: "/fort-lauderdale-cleaning" },
      { name: "Hollywood", link: "/hollywood-cleaning" },
      { name: "Pompano Beach", link: "/pompano-beach-cleaning" },
      { name: "Plantation", link: "/plantation-cleaning" },
      { name: "Sunrise", link: "/sunrise-cleaning" },
      { name: "Davie", link: "/davie-cleaning" },
      { name: "Pembroke Pines", link: "/pembroke-pines-cleaning" },
      { name: "Weston", link: "/weston-cleaning" },
      { name: "Deerfield Beach", link: "/deerfield-beach-cleaning" },
      { name: "Miramar", link: "/miramar-cleaning" },
      { name: "Lauderhill", link: "/lauderhill-cleaning" },
      { name: "Tamarac", link: "/tamarac-cleaning" },
      { name: "Coral Springs", link: "/coral-springs-cleaning" },
      { name: "Coconut Creek", link: "/coconut-creek-cleaning" },
      { name: "Margate", link: "/margate-cleaning" },
      { name: "Hallandale Beach", link: "/hallandale-beach-cleaning" },
      { name: "Parkland", link: "/parkland-cleaning" },
      { name: "Cooper City", link: "/cooper-city-cleaning" },
      { name: "Oakland Park", link: "/oakland-park-cleaning" },
      { name: "Wilton Manors", link: "/wilton-manors-cleaning" },
    ]
  },
  palmBeach: {
    name: "Palm Beach County",
    link: "/palm-beach-county-cleaning",
    cities: [
      { name: "Boca Raton", link: "/boca-raton-cleaning" },
      { name: "West Palm Beach", link: "/west-palm-beach-cleaning" },
      { name: "Delray Beach", link: "/delray-beach-cleaning" },
      { name: "Boynton Beach", link: "/boynton-beach-cleaning" },
      { name: "Lake Worth", link: "/lake-worth-cleaning" },
      { name: "Jupiter", link: "/jupiter-cleaning" },
      { name: "Palm Beach Gardens", link: "/palm-beach-gardens-cleaning" },
      { name: "Wellington", link: "/wellington-cleaning" },
      { name: "Royal Palm Beach", link: "/royal-palm-beach-cleaning" },
    ]
  },
  miamiDade: {
    name: "Miami-Dade County",
    link: "/miami-dade-cleaning",
    cities: [
      { name: "Miami", link: "/miami-cleaning" },
      { name: "Miami Beach", link: "/miami-beach-cleaning" },
      { name: "Hialeah", link: "/hialeah-cleaning" },
      { name: "Coral Gables", link: "/coral-gables-cleaning" },
      { name: "North Miami", link: "/north-miami-cleaning" },
      { name: "North Miami Beach", link: "/north-miami-beach-cleaning" },
      { name: "Aventura", link: "/aventura-cleaning" },
      { name: "Sunny Isles Beach", link: "/sunny-isles-beach-cleaning" },
      { name: "Doral", link: "/doral-cleaning" },
      { name: "Homestead", link: "/homestead-cleaning" },
      { name: "Miami Gardens", link: "/miami-gardens-cleaning" },
    ]
  }
};

const ServiceAreas = () => {
  // Build ItemList schema for all cities
  const allCities = [
    ...serviceAreas.broward.cities,
    ...serviceAreas.palmBeach.cities,
    ...serviceAreas.miamiDade.cities,
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Clean Collective Service Areas in South Florida",
    "description": "Complete list of cities served by Clean Collective cleaning services",
    "numberOfItems": allCities.length,
    "itemListElement": allCities.map((city, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${city.name} Cleaning Services`,
      "url": `https://www.tidywisecleaning.com${city.link}`
    }))
  };

  return (
    <>
      <SEOSchema
        pageTitle="House Cleaning Near Me South Florida | 40+ Cities | Clean Collective"
        pageDescription="House cleaning near me? Clean Collective serves 40+ cities across Broward, Palm Beach & Miami-Dade counties. Find your city for local pricing."
        canonicalUrl="https://www.tidywisecleaning.com/service-areas"
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "https://www.tidywisecleaning.com" },
          { name: "Service Areas", url: "https://www.tidywisecleaning.com/service-areas" }
        ]}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">40+ Cities Served</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Service Areas
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
              Looking for house cleaning near me in South Florida? Clean Collective serves homeowners and businesses 
              across 40+ cities in Broward, Miami-Dade, and Palm Beach County. 
              Find your city below to see local pricing and availability.
            </p>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <a href="tel:+15615718725" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (561) 571-8725
              </a>
            </Button>
          </div>
        </section>

        {/* Counties Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(serviceAreas).map(([key, county]) => (
                <div key={key} className="bg-card border border-border rounded-xl p-6">
                  <Link 
                    to={county.link}
                    className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors block mb-6"
                  >
                    {county.name}
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    {county.cities.map((city) => (
                      <Link
                        key={city.name}
                        to={city.link}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm py-1"
                      >
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        {city.name}
                      </Link>
                    ))}
                  </div>
                  <Link 
                    to={county.link}
                    className="inline-block mt-6 text-primary font-medium hover:underline"
                  >
                    View all {county.name} services →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clean Collective for South Florida */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">
              South Florida house cleaning, done by people who actually live here
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Clean Collective was founded by a Deerfield Beach family who got tired of dealing
              with no-show cleaners, surprise upcharges, and out-of-state booking
              services. We started with a single team, a 50-point quality checklist, and
              a promise: every Clean Collective clean is performed by background-checked,
              W-2 employees — never gig workers — and we re-clean for free if you're
              ever unhappy. That standard now covers more than 40 cities across Broward,
              Palm Beach, and Miami-Dade counties, and every one of those cities is
              served by cleaners who know the area, the HOAs, the gate codes, and the
              specific challenges of cleaning a home in the South Florida climate.
            </p>

            <h3 className="font-display text-xl font-semibold text-foreground pt-4">
              What we mean by "South-Florida-specific cleaning"
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cleaning in South Florida isn't the same as cleaning anywhere else. Our
              cleaners are trained on the things that matter here: salt-air corrosion on
              chrome and stainless, mildew prevention in shower grout (year-round
              humidity makes it constant), pollen and mold counts that spike during
              storm season, post-storm debris cleanup, hardwood-floor care in 70%+
              indoor humidity, sliding glass door tracks that fill with sand, lanai
              and pool deck pressure-washing, and the seasonal turnover dynamics of
              snowbird condos and Airbnb vacation rentals. Whether you're in a Mizner
              Park condo, a Weston single-family, an Airbnb on Hollywood Beach, or a
              high-rise in Sunny Isles, the team that arrives is trained on the
              specific challenges of your property type.
            </p>

            <h3 className="font-display text-xl font-semibold text-foreground pt-4">
              What's included on every visit
            </h3>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Background-checked, W-2 cleaner — same team where possible on recurring plans</li>
              <li>Eco-friendly cleaning products (low-VOC, pet-safe, no harsh fumes)</li>
              <li>50-point quality checklist signed off by a lead cleaner before they leave</li>
              <li>Full liability insurance and bonding on every team</li>
              <li>Free re-clean within 24 hours if you spot anything we missed</li>
              <li>Flat-rate transparent pricing — what you book is what you pay</li>
              <li>Online booking, rescheduling, and tipping through your Clean Collective account</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-foreground pt-4">
              Don't see your city above?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The 40+ cities listed above are where we currently have dedicated coverage,
              but we routinely book one-time and recurring cleans in adjacent communities
              across Broward, Palm Beach, and Miami-Dade. If your city isn't listed,
              <a href="tel:+15615718725" className="text-primary hover:underline"> give us a quick call</a>
              {" "}and we'll let you know if we can serve your address. New service areas
              get added every month based on customer demand. You can also browse our
              full <Link to="/blog" className="text-primary hover:underline">South Florida cleaning blog</Link>{" "}
              for guides on{" "}
              <Link to="/deep-cleaning" className="text-primary hover:underline">deep cleaning</Link>,{" "}
              <Link to="/move-in-out-cleaning" className="text-primary hover:underline">move-in/move-out cleaning</Link>,{" "}
              <Link to="/airbnb-cleaning" className="text-primary hover:underline">Airbnb turnover cleaning</Link>, and{" "}
              <Link to="/standard-cleaning" className="text-primary hover:underline">recurring weekly service</Link>,
              or jump straight to <Link to="/booking" className="text-primary hover:underline">online booking</Link>.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Serving All of South Florida
            </h2>
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458065.2665095421!2d-80.46975045!3d26.0112014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6185055db8b%3A0xb4d7c8a9c3f7c9a6!2sSouth%20Florida!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clean Collective Service Area Map"
              />
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              Don't see your city? <a href="tel:+15615718725" className="text-primary font-medium hover:underline">Call us</a> – we may still be able to help!
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Book Your Cleaning?
            </h2>
            <p className="text-primary-foreground mb-8 max-w-xl mx-auto">
              Get a free quote in minutes. Response time: 15 minutes or less!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#booking">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+15615718725">Call (561) 571-8725</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default ServiceAreas;
