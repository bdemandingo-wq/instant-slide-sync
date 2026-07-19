import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartPulse, Wind, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const AllergyFreeHomeCleaning = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Allergy-Free Home Cleaning Tips | Clean Collective"
        pageDescription="Combat Florida's year-round allergens with proper cleaning techniques. Expert tips for allergy sufferers."
        canonicalUrl="https://www.cleancollective.net/blog/allergy-free-home-cleaning"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-02-20", readTime: "6 min", category: "Tips" }}
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
                Health
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Allergy-Free Home Cleaning Tips for Florida Residents
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> December 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 7 min read
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Florida's warm, humid climate means allergens are a year-round challenge. From pollen 
                to dust mites to mold, your home can become an allergy nightmare without proper cleaning.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <HeartPulse className="w-6 h-6 text-primary" /> Common Florida Allergens
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Pollen:</strong> Oak, pine, and grass pollens are prevalent year-round</li>
                <li><strong>Dust mites:</strong> Thrive in Florida's humidity</li>
                <li><strong>Mold spores:</strong> Constant moisture creates perfect conditions</li>
                <li><strong>Pet dander:</strong> Trapped in humid air longer</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" /> Cleaning Strategies
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Daily Tasks</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Wipe surfaces with damp microfiber cloths (dry dusting spreads allergens)</li>
                <li>Run air purifiers with HEPA filters</li>
                <li>Keep windows closed during high pollen days</li>
                <li>Shower before bed to remove pollen from hair and skin</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Weekly Tasks</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Vacuum with HEPA-filter vacuum</li>
                <li>Wash bedding in hot water (130°F kills dust mites)</li>
                <li>Mop hard floors with allergen-reducing cleaners</li>
                <li>Clean bathroom exhaust fans</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Monthly Tasks</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Replace HVAC filters (use MERV 11 or higher)</li>
                <li>Deep clean upholstered furniture</li>
                <li>Wash curtains and blinds</li>
                <li>Check for hidden mold growth</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Wind className="w-6 h-6 text-primary" /> Pro Tips for Allergy Sufferers
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Keep indoor humidity between 30-50% with a dehumidifier</li>
                <li>Use allergen-proof mattress and pillow covers</li>
                <li>Remove carpeting if possible; opt for hard floors</li>
                <li>Groom pets regularly and keep them off furniture</li>
                <li>Consider professional deep cleaning every 3-6 months</li>
              </ul>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Allergy-Friendly Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Clean Collective offers allergy-conscious cleaning with HEPA vacuums and hypoallergenic products. 
                  Breathe easier in your South Florida home.
                </p>
                <Link 
                  to="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Allergy-Safe Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/allergy-free-home-cleaning" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default AllergyFreeHomeCleaning;