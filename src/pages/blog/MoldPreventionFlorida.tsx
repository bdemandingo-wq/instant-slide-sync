import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, AlertTriangle, Shield, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const MoldPreventionFlorida = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Mold Prevention Guide for Florida Homes | Clean Collective"
        pageDescription="Florida's humidity creates perfect conditions for mold. Learn how to prevent and address mold issues in your home."
        canonicalUrl="https://www.cleancollective.net/blog/mold-prevention-florida-homes"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-04-15", readTime: "7 min", category: "Tips" }}
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
                Mold Prevention Guide for Florida Homes
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
                Florida's warm, humid climate is paradise—for mold. Understanding how to prevent and 
                address mold is essential for every South Florida homeowner.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-primary" /> Why Florida Homes Are Prone to Mold
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Average humidity levels of 70-90%</li>
                <li>Warm temperatures year-round</li>
                <li>Frequent rain and tropical storms</li>
                <li>AC systems creating condensation</li>
                <li>Poor ventilation in some areas</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" /> Prevention Strategies
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Control Humidity</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Keep indoor humidity below 50% (use a hygrometer)</li>
                <li>Run dehumidifiers in problem areas</li>
                <li>Don't turn off AC when you're away—set to 78°F instead</li>
                <li>Use exhaust fans in bathrooms and kitchen</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Improve Ventilation</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Open closet doors periodically</li>
                <li>Ensure attic has proper ventilation</li>
                <li>Leave bathroom doors open after showers</li>
                <li>Keep furniture away from walls</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Regular Maintenance</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Check AC drip pans and drain lines monthly</li>
                <li>Clean and replace HVAC filters regularly</li>
                <li>Inspect window seals and weatherstripping</li>
                <li>Clean gutters to prevent water backup</li>
                <li>Address leaks immediately</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-primary" /> Common Mold Hotspots
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Bathrooms:</strong> Under sinks, behind toilets, shower corners</li>
                <li><strong>Kitchen:</strong> Under sink, around dishwasher, refrigerator drip pan</li>
                <li><strong>Laundry:</strong> Behind washer, dryer vent area</li>
                <li><strong>AC:</strong> Drip pans, air handlers, ductwork</li>
                <li><strong>Windows:</strong> Sills, frames, and tracks</li>
                <li><strong>Closets:</strong> Back walls, corners, stored items</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Signs You Have Mold</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Musty, earthy smell</li>
                <li>Visible spots (black, green, white, or fuzzy)</li>
                <li>Allergy symptoms when home</li>
                <li>Water stains or discoloration</li>
                <li>Peeling paint or warped surfaces</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">What to Do If You Find Mold</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Small areas (under 10 sq ft):</strong> Clean with bleach solution or commercial mold cleaner</li>
                <li><strong>Larger areas:</strong> Call a professional mold remediation company</li>
                <li><strong>Always:</strong> Fix the moisture source first!</li>
              </ul>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Prevent Mold with Regular Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Regular deep cleaning helps prevent mold growth. Clean Collective cleans mold-prone areas 
                  as part of every service, helping keep your Florida home healthy.
                </p>
                <Link 
                  to="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Preventive Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/mold-prevention-florida-homes" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default MoldPreventionFlorida;