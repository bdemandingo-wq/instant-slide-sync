import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Building, FileText, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const CondoCleaningRules = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Condo Cleaning Rules & Tips for South Florida | CLEAN COLLECTIVE"
        pageDescription="Navigate HOA rules and building regulations while keeping your South Florida condo spotless."
        canonicalUrl="https://www.tidywisecleaning.com/blog/condo-cleaning-rules-south-florida"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-04-10", readTime: "6 min", category: "Local Guides" }}
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
                Local
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Condo Cleaning Rules & Tips for South Florida
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> December 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 5 min read
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Living in a South Florida condo comes with unique cleaning considerations. From HOA 
                regulations to high-rise logistics, here's what you need to know.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" /> Common HOA & Building Rules
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Service hours:</strong> Most buildings restrict cleaning to 9am-5pm weekdays</li>
                <li><strong>Vendor registration:</strong> Cleaning services often need to be pre-approved</li>
                <li><strong>Elevator use:</strong> Service elevators required for equipment</li>
                <li><strong>Parking:</strong> Visitor parking or loading zones for service vehicles</li>
                <li><strong>Noise restrictions:</strong> Vacuuming may be restricted during certain hours</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Building className="w-6 h-6 text-primary" /> High-Rise Specific Considerations
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Windows & Balconies</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Interior window cleaning is usually your responsibility</li>
                <li>Exterior windows handled by building maintenance</li>
                <li>Balcony cleaning often has specific rules</li>
                <li>Never throw anything over balcony (including mop water!)</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">HVAC & Filters</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Many condos have central HVAC systems</li>
                <li>You may still need to change in-unit filters</li>
                <li>Report AC issues to maintenance promptly</li>
                <li>Keep vents clean to prevent building-wide issues</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" /> Condo Cleaning Tips
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Space-Saving Cleaning</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Use compact cleaning supplies</li>
                <li>Multipurpose cleaners reduce storage needs</li>
                <li>Microfiber cloths are versatile and compact</li>
                <li>Consider a stick vacuum for easy storage</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Shared Spaces</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Keep hallway outside your door clean</li>
                <li>Wipe doormat and entry area regularly</li>
                <li>Report spills in common areas to management</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Ocean-View Condos</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Salt air accelerates corrosion—wipe metal fixtures often</li>
                <li>Clean windows more frequently (salt spray)</li>
                <li>Use dehumidifiers to combat ocean moisture</li>
                <li>Check for rust on balcony furniture</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Before Hiring a Cleaner</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Check if building requires vendor registration</li>
                <li>Provide guest list/access code to security</li>
                <li>Confirm parking arrangements</li>
                <li>Share any specific building rules</li>
              </ul>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  CLEAN COLLECTIVE Knows Condo Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're experienced with South Florida condo buildings and their requirements. 
                  We handle registration, scheduling, and all the logistics.
                </p>
                <Link 
                  to="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Condo Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/condo-cleaning-rules-south-florida" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default CondoCleaningRules;