import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const MoveInOutCleaningChecklist = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Move In/Out Cleaning Checklist 2025 | Clean Collective"
        pageDescription="Complete move in/out cleaning checklist for South Florida rentals & homes. Get your security deposit back with our professional cleaning guide. Free quote!"
        canonicalUrl="https://cleancollectives.com/blog/move-in-out-cleaning-checklist"
        pageType="blog"
        county="South Florida"
        blogMeta={{
          datePublished: "2025-01-15",
          readTime: "7 min",
          category: "Guides"
        }}
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
                  7 min read
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Ultimate Move In/Out Cleaning Checklist for South Florida
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Moving in or out of a South Florida property? This comprehensive checklist ensures you get your 
                security deposit back and start fresh in your new home.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Why Move In/Out Cleaning Matters
              </h2>
              <p className="text-muted-foreground mb-6">
                In Florida's competitive rental market, landlords expect properties to be returned in pristine condition. 
                A professional <Link to="/#booking" className="text-primary hover:underline">move out cleaning</Link> can 
                mean the difference between getting your full deposit back or losing hundreds of dollars.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Kitchen Deep Clean Checklist
              </h2>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clean inside and outside of all appliances (oven, microwave, refrigerator)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Degrease stovetop, hood, and backsplash</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Wipe down all cabinets inside and out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clean and sanitize sink and disposal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Scrub countertops and remove any stains</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Bathroom Cleaning Checklist
              </h2>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Deep clean toilet, inside and out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Remove soap scum and mold from shower/tub</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clean mirrors and glass shower doors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Wipe down vanity, cabinets, and fixtures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Scrub tile grout and floor</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Living Areas & Bedrooms
              </h2>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Dust all surfaces, ceiling fans, and light fixtures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clean all windows and window sills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Vacuum and mop all floors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Wipe down baseboards and door frames</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clean closet shelves and rods</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Florida-Specific Considerations
              </h2>
              <p className="text-muted-foreground mb-6">
                South Florida's humidity creates unique cleaning challenges. Pay special attention to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Mold and mildew in bathrooms and AC vents</li>
                <li>• Hurricane shutters and tracks (if applicable)</li>
                <li>• Lanai and outdoor living spaces</li>
                <li>• Salt residue on windows near coastal areas</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Let Clean Collective Handle Your Move Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Don't stress about move cleaning! Our professional team serves 
                  <Link to="/broward-county-cleaning" className="text-primary hover:underline mx-1">Broward</Link>,
                  <Link to="/miami-dade-cleaning" className="text-primary hover:underline mx-1">Miami-Dade</Link>, and
                  <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline mx-1">Palm Beach County</Link>.
                  Call <a href="tel:+15618612752" className="text-primary font-semibold">(561) 861-2752</a> or 
                  <Link to="/#booking" className="text-primary hover:underline ml-1">book online</Link>.
                </p>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/move-in-out-cleaning-checklist" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default MoveInOutCleaningChecklist;
