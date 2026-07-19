import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Droplets, Sparkles, CheckSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const BathroomDeepCleaningGuide = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Complete Bathroom Deep Cleaning Guide | Clean Collective"
        pageDescription="Step-by-step bathroom deep cleaning guide designed for Florida's humid climate. Tackle mold, soap scum, and grime."
        canonicalUrl="https://www.cleancollectives.com/blog/bathroom-deep-cleaning-guide"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-03-01", readTime: "7 min", category: "Guides" }}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <header className="mb-8">
              <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                Guides
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Complete Bathroom Deep Cleaning Guide
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> December 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 8 min read
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Florida bathrooms face unique challenges: high humidity, hard water, and the constant 
                threat of mold. This guide will help you tackle every corner of your bathroom.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <CheckSquare className="w-6 h-6 text-primary" /> Supplies You'll Need
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>All-purpose bathroom cleaner</li>
                <li>Grout cleaner or baking soda paste</li>
                <li>Glass cleaner</li>
                <li>Toilet bowl cleaner</li>
                <li>Microfiber cloths</li>
                <li>Scrub brush and old toothbrush</li>
                <li>Rubber gloves</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" /> Step-by-Step Process
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">1. Preparation</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Remove all items from counters, shower, and tub</li>
                <li>Take out trash and bath mats</li>
                <li>Open windows or turn on exhaust fan for ventilation</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">2. Shower & Tub</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Spray cleaner and let it sit for 5-10 minutes</li>
                <li>Scrub walls, floor, and fixtures</li>
                <li>Apply grout cleaner with toothbrush</li>
                <li>Descale showerhead (soak in vinegar if needed)</li>
                <li>Clean shower door tracks and glass</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">3. Toilet</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Apply bowl cleaner under rim, let sit</li>
                <li>Clean exterior—lid, seat, base, and behind</li>
                <li>Scrub bowl and flush</li>
                <li>Don't forget the toilet brush holder!</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">4. Sink & Vanity</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Clean sink basin and faucet</li>
                <li>Wipe down countertop</li>
                <li>Clean mirror with glass cleaner</li>
                <li>Organize and wipe cabinet fronts</li>
                <li>Check under sink for mold or leaks</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">5. Floors & Finishing</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Sweep or vacuum floor</li>
                <li>Mop with disinfecting cleaner</li>
                <li>Clean baseboards</li>
                <li>Replace fresh towels and bath mat</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-primary" /> Florida-Specific Tips
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Mold prevention:</strong> Run exhaust fan 30 min after showers</li>
                <li><strong>Hard water:</strong> Use vinegar solutions to remove mineral buildup</li>
                <li><strong>Humidity:</strong> Keep bathroom door open when not in use</li>
                <li><strong>Exhaust fan:</strong> Clean monthly to prevent mold spread</li>
              </ul>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Need Professional Bathroom Cleaning?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our deep cleaning service includes thorough bathroom sanitation. We tackle the grime 
                  so you don't have to!
                </p>
                <Link 
                  to="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Deep Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/bathroom-deep-cleaning-guide" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default BathroomDeepCleaningGuide;