import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, PawPrint } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const PetFriendlyCleaningTips = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Pet-Friendly Cleaning Tips for Florida Homes | Clean Collective"
        pageDescription="Keep your Florida home fresh with pets. Tips for pet hair, odors & stains. Pet-safe products & pro cleaning."
        canonicalUrl="https://www.tidywisecleaning.com/blog/pet-friendly-cleaning-tips"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-01-25", readTime: "7 min", category: "Tips" }}
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
                Pet-Friendly Home Cleaning Tips for Florida Pet Owners
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Love your furry friends but struggling with pet hair and odors? Here are expert tips to 
                keep your South Florida home fresh and clean—safely for your pets.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary/10 p-6 rounded-xl mb-8 flex items-start gap-4">
                <PawPrint className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-muted-foreground m-0">
                  Florida's year-round warmth means more outdoor time for pets—and more dirt, pollen, and 
                  allergens tracked into your home. Regular cleaning is essential for pet households!
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Tackling Pet Hair Like a Pro
              </h2>
              <p className="text-muted-foreground mb-6">
                Pet hair is the #1 complaint from pet owners. Here's how to stay on top of it:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Vacuum at least twice weekly with a HEPA-filter vacuum</li>
                <li>• Use a rubber squeegee on upholstery—it works like magic!</li>
                <li>• Dampen a rubber glove and wipe surfaces to collect hair</li>
                <li>• Wash pet bedding weekly in hot water</li>
                <li>• Consider tile or laminate flooring—easier to clean than carpet</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Eliminating Pet Odors
              </h2>
              <p className="text-muted-foreground mb-6">
                Florida's humidity can intensify pet odors. Combat them with these strategies:
              </p>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Baking soda:</strong> Sprinkle on carpets, let sit 15 minutes, then vacuum</li>
                  <li>• <strong>Enzyme cleaners:</strong> Break down pet accident residue at the source</li>
                  <li>• <strong>Air purifiers:</strong> HEPA models reduce dander and odors</li>
                  <li>• <strong>Regular AC filter changes:</strong> Every 1-2 months with pets</li>
                  <li>• <strong>Open windows:</strong> When humidity allows, fresh air helps</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Pet-Safe Cleaning Products
              </h2>
              <p className="text-muted-foreground mb-6">
                Many common cleaning products are toxic to pets. Avoid:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Bleach and ammonia (especially around cats)</li>
                <li>• Phenol-based cleaners</li>
                <li>• Essential oils like tea tree, peppermint, and citrus (toxic to cats)</li>
                <li>• Products with formaldehyde</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                <strong>Safe alternatives:</strong> Vinegar and water solutions, hydrogen peroxide (diluted), 
                and certified pet-safe cleaning products. At Clean Collective, we use eco-friendly, pet-safe products 
                upon request.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Cleaning Up After Accidents
              </h2>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Quick Action Steps:</h3>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Blot (don't rub!) the area immediately with paper towels</li>
                  <li>Apply enzyme-based cleaner and let sit 10-15 minutes</li>
                  <li>Blot again with clean cloth</li>
                  <li>Sprinkle baking soda, let dry, then vacuum</li>
                  <li>For stubborn stains, repeat or call a professional</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Preparing for Professional Cleaning
              </h2>
              <p className="text-muted-foreground mb-6">
                When booking a <Link to="/#booking" className="text-primary hover:underline">professional cleaning service</Link>, 
                let us know about your pets! We ask about pets during booking so our team can:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Use pet-safe products</li>
                <li>• Be prepared for pet hair removal</li>
                <li>• Know if pets will be home (and their temperament)</li>
                <li>• Pay extra attention to pet areas</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Pet-Friendly Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Clean Collective loves pets! We serve pet owners across 
                  <Link to="/broward-county-cleaning" className="text-primary hover:underline mx-1">Broward</Link>,
                  <Link to="/miami-dade-cleaning" className="text-primary hover:underline mx-1">Miami-Dade</Link>, and
                  <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline mx-1">Palm Beach County</Link>.
                  Call <a href="tel:+15615718725" className="text-primary font-semibold">(561) 571-8725</a> or 
                  <Link to="/#booking" className="text-primary hover:underline ml-1">book online</Link>!
                </p>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/pet-friendly-cleaning-tips" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default PetFriendlyCleaningTips;
