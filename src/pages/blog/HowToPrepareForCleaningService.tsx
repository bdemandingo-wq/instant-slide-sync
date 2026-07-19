import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const HowToPrepareForCleaningService = () => {
  return (
    <>
      <SEOSchema
        pageTitle="How to Prepare for Your Cleaning Service Visit | Clean Collective"
        pageDescription="Get the most from your professional cleaning service. Simple prep tips to maximize results. What to do before cleaners arrive. South Florida cleaning experts."
        canonicalUrl="https://www.cleancollectives.com/blog/how-to-prepare-for-cleaning-service"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-02-01", readTime: "5 min", category: "Tips" }}
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
                  5 min read
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How to Prepare for Your Professional Cleaning Service
              </h1>
              
              <p className="text-lg text-muted-foreground">
                A little preparation goes a long way! Here's how to get the most out of your 
                <Link to="/#booking" className="text-primary hover:underline mx-1">professional cleaning</Link> appointment.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary/10 p-6 rounded-xl mb-8 flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-muted-foreground m-0">
                  <strong>Pro Tip:</strong> You don't need to clean before the cleaners come! But a few simple 
                  steps help us focus on deep cleaning instead of tidying up.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Before the Cleaning Team Arrives
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-4">
                1. Declutter Surfaces
              </h3>
              <p className="text-muted-foreground mb-6">
                The more surfaces are clear, the more we can clean! Consider putting away:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Mail and papers on counters</li>
                <li>• Toys scattered on floors</li>
                <li>• Clothes on furniture</li>
                <li>• Personal items on bathroom counters</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-4">
                2. Secure Valuables
              </h3>
              <p className="text-muted-foreground mb-6">
                While our cleaners are thoroughly vetted and background-checked, it's always wise to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Put away jewelry, cash, and important documents</li>
                <li>• Secure medications in a cabinet</li>
                <li>• Note the location of any breakable heirlooms</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-4">
                3. Handle the Dishes
              </h3>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <p className="text-muted-foreground m-0">
                  Standard cleaning doesn't typically include washing dishes. If you'd like clean 
                  counters and a sanitized sink, load the dishwasher or clear the sink beforehand. 
                  Let us know if you'd like dish washing as an add-on service!
                </p>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-4">
                4. Prepare Your Pets
              </h3>
              <p className="text-muted-foreground mb-6">
                We love pets! But for their comfort and our team's safety:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Let us know about pets when booking</li>
                <li>• Secure anxious or aggressive pets in a safe room</li>
                <li>• Inform us if doors need to stay closed</li>
                <li>• Note any pet areas that need special attention</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-4">
                5. Provide Access Information
              </h3>
              <p className="text-muted-foreground mb-6">
                Make sure we can get in! When booking, let us know:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Will you be home, or should we use a lockbox/code?</li>
                <li>• Any gate codes or building access requirements</li>
                <li>• Parking instructions</li>
                <li>• Where to find cleaning supplies (if you prefer we use yours)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                What You Don't Need to Do
              </h2>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Don't pre-clean:</strong> That's what we're here for!</li>
                  <li>• <strong>Don't move furniture:</strong> We handle it</li>
                  <li>• <strong>Don't buy supplies:</strong> We bring everything (unless you prefer otherwise)</li>
                  <li>• <strong>Don't stress about the mess:</strong> We've seen it all!</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Communicate Your Priorities
              </h2>
              <p className="text-muted-foreground mb-6">
                Every home is different! When booking or before we arrive, let us know:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Any areas that need extra attention</li>
                <li>• Rooms or items to avoid</li>
                <li>• Allergies or sensitivities to products</li>
                <li>• If you prefer eco-friendly/pet-safe products</li>
                <li>• Any special instructions for your home</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                After the Cleaning
              </h2>
              <p className="text-muted-foreground mb-6">
                We want you to be 100% satisfied! After your cleaning:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Do a walk-through while we're still there</li>
                <li>• Let us know immediately if something was missed</li>
                <li>• Leave a review if you're happy—we appreciate it!</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Ready to Book?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Clean Collective makes professional cleaning easy. We serve 
                  <Link to="/broward-county-cleaning" className="text-primary hover:underline mx-1">Broward</Link>,
                  <Link to="/miami-dade-cleaning" className="text-primary hover:underline mx-1">Miami-Dade</Link>, and
                  <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline mx-1">Palm Beach County</Link>.
                  Call <a href="tel:+15618612752" className="text-primary font-semibold">(561) 861-2752</a> or 
                  <Link to="/#booking" className="text-primary hover:underline ml-1">book online</Link>—response in 15 minutes or less!
                </p>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/how-to-prepare-for-cleaning-service" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default HowToPrepareForCleaningService;
