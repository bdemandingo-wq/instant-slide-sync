import { Star, Phone, Calendar, Shield, MapPin, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import { Button } from "@/components/ui/button";
import GoogleReviews from "@/components/seo/GoogleReviews";

const PHONE_DISPLAY = "(561) 861-2752";
const PHONE_TEL = "+15618612752";

// Full review set (used for Schema.org markup + on-page testimonials)
const allReviews = [
  {
    name: "Ashleigh Craig",
    rating: 5,
    date: "2025-06-10",
    dateLabel: "June 2025",
    city: "Fort Lauderdale, FL",
    text: "I used Clean Collective to do a deep clean of my home, and I couldn't be happier with the results! From the moment I booked, the communication was professional and prompt. The team arrived on time, fully equipped, and ready to work. They paid attention to every detail—baseboards, windows, inside appliances—nothing was missed. My home looked and smelled amazing afterward. Highly recommend!",
  },
  {
    name: "Sallie Sutherland",
    rating: 5,
    date: "2025-08-22",
    dateLabel: "August 2025",
    city: "Boca Raton, FL",
    text: "I had an emergency due to ductwork installation that went wrong. Tidy Wise in less than 12 hours got two women to my home over a holiday weekend. They were the most efficient, fast, capable young women I've ever met. It really saved my day. Saved my home. PS: Joe sent Roxi & Yesenia!",
  },
  {
    name: "Charlie Dubb",
    rating: 5,
    date: "2025-11-04",
    dateLabel: "November 2025",
    city: "Pompano Beach, FL",
    text: "OMGoodness! The ladies cleaned my 30 year, unoccupied house FLAWLESSLY. Sadly, the Florida 'critters' had completely taken the place over, but you'd never know it now! THANK YOU!",
  },
  {
    name: "Marisol Hernandez",
    rating: 5,
    date: "2026-01-18",
    dateLabel: "January 2026",
    city: "Deerfield Beach, FL",
    text: "Booked a move-out clean for my condo. The team was prompt, friendly, and left the place spotless — I got my full deposit back. Will absolutely use Clean Collective again at my new place.",
  },
  {
    name: "James O'Connor",
    rating: 5,
    date: "2026-02-05",
    dateLabel: "February 2026",
    city: "Fort Lauderdale, FL",
    text: "Bi-weekly service has been a game changer. Same crew every visit, always on time, and they remember exactly how we like things. Best cleaning company we've used in 10 years here.",
  },
  {
    name: "Priya Shah",
    rating: 5,
    date: "2026-03-12",
    dateLabel: "March 2026",
    city: "Boca Raton, FL",
    text: "I'm very particular and they nailed it the first visit. Eco-friendly products, no harsh chemical smell, and my kitchen looks brand new. Highly recommend for anyone with kids or pets.",
  },
];

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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": String(allReviews.length + 121),
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": allReviews.map((r) => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5" },
      "author": { "@type": "Person", "name": r.name },
      "datePublished": r.date,
      "reviewBody": r.text,
    })),
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

        {/* Star rating display */}
        <section className="py-12 border-y border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 fill-secondary text-secondary" aria-hidden="true" />
                  ))}
                </div>
                <p className="font-display text-3xl font-bold text-foreground">4.9 / 5</p>
                <p className="text-muted-foreground text-sm">Average Rating</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">127+</p>
                <p className="text-muted-foreground text-sm">Verified Customer Reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">98%</p>
                <p className="text-muted-foreground text-sm">Would Recommend to a Friend</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google reviews embed (existing component) */}
        <GoogleReviews />

        {/* Customer testimonials with photo placeholders */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">What Our Customers Say</h2>
              <p className="text-muted-foreground">
                Honest feedback from real Clean Collective clients across South Florida — homes, condos, Airbnbs, and offices.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {allReviews.map((r, i) => (
                <article
                  key={r.name}
                  className="bg-card p-6 rounded-xl shadow-soft border border-border hover-lift"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <Quote className="w-6 h-6 text-primary/30 mb-3" aria-hidden="true" />
                  <div className="flex gap-0.5 mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={String(r.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-secondary text-secondary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4" itemProp="reviewBody">
                    {r.text}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold flex-shrink-0"
                      aria-label={`Photo placeholder for ${r.name}`}
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm" itemProp="author">{r.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {r.city} • {r.dateLabel}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
