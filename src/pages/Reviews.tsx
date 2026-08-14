import { Phone, Calendar, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import { Button } from "@/components/ui/button";
import GoogleReviews from "@/components/seo/GoogleReviews";

const PHONE_DISPLAY = "(561) 861-2752";
const PHONE_TEL = "+15618612752";

const beforeAfterJobs = [
  { label: "Move-Out Deep Clean", location: "Pompano Beach, FL", note: "30-year unoccupied home — restored to like-new condition" },
  { label: "Post-Construction Cleanup", location: "Boca Raton, FL", note: "Drywall dust, paint splatter, and debris fully removed" },
  { label: "Airbnb Turnover", location: "Fort Lauderdale, FL", note: "Same-day turnaround between guests, 5-star rating maintained" },
];

const Reviews = () => {
  // Review schema (already on homepage but reinforced here for the /reviews page)
  const reviewsPageSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cleancollectives.com/reviews/#business",
    "name": "Clean Collective Cleaning Services",
    "url": "https://cleancollectives.com/reviews",
    "telephone": "+1-561-861-2752",
    "image": "https://cleancollectives.com/og-image.webp",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4611 N Federal Hwy",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33064",
      "addressCountry": "US",
    },
  };

  return (
    <>
      <SEOSchema
        pageTitle="Clean Collective Reviews | Trusted Cleaning Service in South Florida"
        pageDescription="Read genuine reviews from Clean Collective cleaning customers across Fort Lauderdale, Pompano Beach, Deerfield Beach, and Boca Raton. 5-star service guaranteed."
        canonicalUrl="https://cleancollectives.com/reviews"
        pageType="article"
        breadcrumbs={[
          { name: "Home", url: "https://cleancollectives.com" },
          { name: "Reviews", url: "https://cleancollectives.com/reviews" },
        ]}
        additionalSchema={reviewsPageSchema}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> Verified customer reviews
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Reviews from Happy Clean Collective Customers
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              See why families and property managers across Fort Lauderdale, Pompano Beach, Deerfield Beach, and Boca Raton trust Clean Collective for spotless, dependable cleaning every time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/booking">
                  <Calendar className="w-4 h-4 mr-2" /> Book Your Cleaning – Same-Day Available
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="w-4 h-4 mr-2" /> Call {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Google reviews embed (existing component) */}
        <GoogleReviews />

        {/* Before/after photos placeholder */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">Before & After: Real Jobs</h2>
              <p className="text-muted-foreground">
                Photos from recent Clean Collective jobs across Broward and Palm Beach County. More coming soon — share yours and get a referral credit.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {beforeAfterJobs.map((job) => (
                <article key={job.label} className="bg-card border border-border rounded-xl overflow-hidden shadow-soft hover-lift">
                  <div className="grid grid-cols-2 aspect-[2/1]">
                    <div className="bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium relative">
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-foreground/80 text-background text-[10px] uppercase tracking-wide rounded">Before</span>
                      Photo coming soon
                    </div>
                    <div className="bg-secondary/10 flex items-center justify-center text-secondary text-xs font-medium relative">
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] uppercase tracking-wide rounded">After</span>
                      Photo coming soon
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-1">{job.label}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </p>
                    <p className="text-sm text-muted-foreground">{job.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Same-day cleanings often available across Fort Lauderdale, Pompano Beach, Deerfield Beach, and Boca Raton. Licensed, insured, and 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/booking">
                  <Calendar className="w-4 h-4 mr-2" /> Book Your Cleaning – Same-Day Available
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="w-4 h-4 mr-2" /> Call {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Reviews;
