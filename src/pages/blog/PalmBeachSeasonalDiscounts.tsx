import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const PalmBeachSeasonalDiscounts = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Seasonal Cleaning Discounts Palm Beach 2025 | CLEAN COLLECTIVE"
        pageDescription="Palm Beach County seasonal cleaning discounts 2025. Save 10-20% on cleaning in West Palm Beach, Boca Raton, Jupiter. Limited time offers. Book now!"
        canonicalUrl="https://www.tidywisecleaning.com/blog/palm-beach-seasonal-discounts"
        pageType="blog"
        county="Palm Beach County"
        blogMeta={{ datePublished: "2025-01-10", readTime: "5 min", category: "Local Guides" }}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/palm-beach-county-cleaning" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Palm Beach County Cleaning
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  January 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  3 min read
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Seasonal Discounts for Cleaning Services in Palm Beach
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Looking for affordable 
                <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline mx-1">Palm Beach County cleaning services</Link>? 
                Here are the best seasonal deals and discounts for 2025.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary/20 p-6 rounded-xl mb-8 flex items-start gap-4">
                <Tag className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Current Offer: 10% Off First Clean</h3>
                  <p className="text-muted-foreground mb-0">
                    New customers in <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">Palm Beach County</Link> get 
                    10% off their first cleaning. Call <a href="tel:+15615718725" className="text-primary font-semibold">(561) 571-8725</a> to claim.
                  </p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Recurring Service Discounts in West Palm Beach
              </h2>
              <p className="text-muted-foreground mb-6">
                The best way to save on <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">cleaning in Palm Beach County</Link> is 
                with recurring service. Here's what you save:
              </p>

              <div className="bg-muted p-6 rounded-xl mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Recurring Discounts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Weekly:</strong> 20% off every clean</li>
                  <li>• <strong>Bi-weekly:</strong> 15% off every clean</li>
                  <li>• <strong>Monthly:</strong> 10% off every clean</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Snowbird Season Specials (October-April)
              </h2>
              <p className="text-muted-foreground mb-6">
                Returning to your Palm Beach property for the season? CLEAN COLLECTIVE offers special rates for 
                seasonal residents in Boca Raton, Jupiter, and West Palm Beach. This includes:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Pre-arrival deep cleaning to prep your home</li>
                <li>• Regular maintenance during your stay</li>
                <li>• End-of-season close-up cleaning</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Summer Savings (May-September)
              </h2>
              <p className="text-muted-foreground mb-6">
                Off-season means better availability and special rates! Contact us for current summer 
                promotions in <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">Palm Beach County</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Referral Program
              </h2>
              <p className="text-muted-foreground mb-6">
                Refer a friend in Palm Beach County and you both get $25 off your next cleaning! 
                No limit on referrals.
              </p>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Ready to Save?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get your free quote and ask about current promotions. Call <a href="tel:+15615718725" className="text-primary font-semibold">(561) 571-8725</a> or 
                  <Link to="/#booking" className="text-primary hover:underline ml-1">book online</Link> for 
                  <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County cleaning</Link>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Also serving <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward County</Link> and 
                  <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">Miami-Dade County</Link>.
                </p>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/palm-beach-seasonal-discounts" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default PalmBeachSeasonalDiscounts;
