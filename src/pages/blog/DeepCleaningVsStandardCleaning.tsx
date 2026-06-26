import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const DeepCleaningVsStandardCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Deep vs Standard Cleaning Differences | Clean Collective"
        pageDescription="Learn the difference between deep cleaning and standard cleaning. Find which type is right for your South Florida home. Free quotes available!"
        canonicalUrl="https://www.tidywisecleaning.com/blog/deep-cleaning-vs-standard-cleaning"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-01-20", readTime: "8 min", category: "Guides" }}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  January 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Deep Cleaning vs Standard Cleaning: Which Do You Need?
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Not sure whether to book a standard or deep cleaning? Here's everything you need to know 
                to make the right choice for your South Florida home.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                What is Standard Cleaning?
              </h2>
              <p className="text-muted-foreground mb-6">
                Standard cleaning is your regular maintenance clean—perfect for homes that are already in 
                reasonably good condition. It's what most people book for weekly or bi-weekly 
                <Link to="/#booking" className="text-primary hover:underline mx-1">cleaning services</Link>.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Standard Cleaning Includes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dusting all surfaces and furniture</li>
                  <li>• Vacuuming and mopping floors</li>
                  <li>• Cleaning kitchen counters and appliance exteriors</li>
                  <li>• Sanitizing bathrooms (toilet, sink, shower/tub)</li>
                  <li>• Making beds and tidying rooms</li>
                  <li>• Emptying trash bins</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                What is Deep Cleaning?
              </h2>
              <p className="text-muted-foreground mb-6">
                Deep cleaning is a thorough, intensive clean that reaches areas often missed during regular 
                cleaning. It's ideal for first-time clients, seasonal refreshes, or homes that haven't been 
                professionally cleaned in a while.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Deep Cleaning Includes Everything Above, Plus:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Inside oven and microwave cleaning</li>
                  <li>• Inside refrigerator cleaning</li>
                  <li>• Cleaning inside cabinets and drawers</li>
                  <li>• Detailed baseboard and door frame cleaning</li>
                  <li>• Light fixture and ceiling fan cleaning</li>
                  <li>• Window sill and blind cleaning</li>
                  <li>• Grout scrubbing in bathrooms</li>
                  <li>• Behind and under furniture cleaning</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Price Comparison
              </h2>
              <p className="text-muted-foreground mb-6">
                Deep cleaning typically costs 1.5-2x more than standard cleaning due to the additional time 
                and detail involved. Here's a comparison for a typical 3-bedroom home:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-muted p-6 rounded-xl">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Standard Cleaning</h4>
                  <p className="text-2xl font-bold text-primary mb-2">$160-$220</p>
                  <p className="text-sm text-muted-foreground">2-3 hours • Maintenance focus</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">Deep Cleaning</h4>
                  <p className="text-2xl font-bold text-primary mb-2">$250-$350</p>
                  <p className="text-sm text-muted-foreground">4-6 hours • Comprehensive</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                When to Choose Deep Cleaning
              </h2>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• First time booking with a new cleaning service</li>
                <li>• Haven't had professional cleaning in 3+ months</li>
                <li>• Before or after hosting guests</li>
                <li>• Seasonal deep clean (we recommend quarterly)</li>
                <li>• After illness in the household</li>
                <li>• Before listing your home for sale</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Our Recommendation
              </h2>
              <p className="text-muted-foreground mb-6">
                For best results, we recommend starting with a deep cleaning, then switching to regular 
                standard cleanings (weekly or bi-weekly) to maintain that fresh feeling. This approach 
                keeps your home consistently clean and is more cost-effective long-term.
              </p>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Book Your Cleaning Today
                </h3>
                <p className="text-muted-foreground mb-4">
                  Clean Collective serves 
                  <Link to="/broward-county-cleaning" className="text-primary hover:underline mx-1">Broward</Link>,
                  <Link to="/miami-dade-cleaning" className="text-primary hover:underline mx-1">Miami-Dade</Link>, and
                  <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline mx-1">Palm Beach County</Link>.
                  Call <a href="tel:+15615718725" className="text-primary font-semibold">(561) 571-8725</a> or 
                  <Link to="/#booking" className="text-primary hover:underline ml-1">book online</Link> for a free quote!
                </p>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/deep-cleaning-vs-standard-cleaning" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default DeepCleaningVsStandardCleaning;
