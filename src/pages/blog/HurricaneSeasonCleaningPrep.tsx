import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, CloudRain } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const HurricaneSeasonCleaningPrep = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Hurricane Season Cleaning & Prep Guide | Clean Collective"
        pageDescription="Prepare your South Florida home for hurricane season. Pre-storm cleaning checklist, post-storm cleanup tips, and professional cleaning services. Be ready!"
        canonicalUrl="https://www.tidywisecleaning.com/blog/hurricane-season-cleaning-prep"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-05-01", readTime: "8 min", category: "Guides" }}
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
                  8 min read
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Hurricane Season Home Cleaning & Prep Guide for South Florida
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Hurricane season runs June 1 - November 30. Here's your complete guide to preparing 
                your home before the storm and cleaning up after.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl mb-8 flex items-start gap-4">
                <CloudRain className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground m-0 mb-2">Hurricane Season Reminder</h3>
                  <p className="text-muted-foreground m-0">
                    South Florida averages 6-8 tropical systems per season. Being prepared isn't optional—it's essential!
                  </p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Pre-Storm Cleaning Checklist
              </h2>
              <p className="text-muted-foreground mb-6">
                When a storm is approaching, a clean and organized home makes preparations easier and safer:
              </p>

              <div className="bg-muted p-6 rounded-xl mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Outdoor Prep</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clear gutters and downspouts of debris</li>
                  <li>• Clean and secure hurricane shutters</li>
                  <li>• Remove or secure all patio furniture</li>
                  <li>• Trim trees and remove dead branches</li>
                  <li>• Clear drains around your property</li>
                  <li>• Clean lanai screens (damaged screens become projectiles)</li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-xl mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Indoor Prep</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deep clean refrigerator and freezer (you may lose power)</li>
                  <li>• Organize and clean closets (you'll need quick access to supplies)</li>
                  <li>• Launder all bedding and towels (you may not have water/power after)</li>
                  <li>• Clean and fill bathtubs (emergency water supply)</li>
                  <li>• Stock cleaning supplies (bleach, mops, buckets, trash bags)</li>
                  <li>• Document valuables with photos</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Post-Storm Cleanup Guide
              </h2>
              <p className="text-muted-foreground mb-6">
                After a hurricane passes, cleaning up safely is critical. Here's what to do:
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-4">
                Safety First
              </h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Wait for official all-clear before returning home</li>
                <li>• Photograph all damage before cleaning for insurance</li>
                <li>• Wear protective gear (gloves, masks, closed-toe shoes)</li>
                <li>• Watch for downed power lines and gas leaks</li>
                <li>• Don't walk through standing water</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-4">
                Immediate Cleaning Priorities
              </h3>
              <div className="bg-muted p-6 rounded-xl mb-8">
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                  <li><strong>Remove standing water</strong> - Use wet vacuums, mops, and pumps</li>
                  <li><strong>Discard spoiled food</strong> - If power was out 4+ hours, toss perishables</li>
                  <li><strong>Ventilate</strong> - Open windows and doors when safe to prevent mold</li>
                  <li><strong>Clean and disinfect</strong> - Floodwater contains contaminants</li>
                  <li><strong>Remove wet materials</strong> - Carpet, drywall, insulation that got wet</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                Preventing Mold After a Storm
              </h2>
              <p className="text-muted-foreground mb-6">
                Florida's humidity plus water damage equals mold risk. Act within 24-48 hours:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Run dehumidifiers and fans continuously</li>
                <li>• Clean surfaces with mold-killing solutions (bleach 1:10 ratio)</li>
                <li>• Remove and discard wet carpet padding</li>
                <li>• Cut out wet drywall at least 12" above waterline</li>
                <li>• Check HVAC system before running</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">
                When to Call Professionals
              </h2>
              <p className="text-muted-foreground mb-6">
                Some post-storm cleaning requires professional help:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Significant water damage or flooding</li>
                <li>• Visible mold growth</li>
                <li>• Sewage backup</li>
                <li>• Structural damage</li>
                <li>• When you're overwhelmed and need help getting back to normal</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Clean Collective is Here for You
                </h3>
                <p className="text-muted-foreground mb-4">
                  Whether you need pre-storm prep or post-storm cleanup, Clean Collective serves 
                  <Link to="/broward-county-cleaning" className="text-primary hover:underline mx-1">Broward</Link>,
                  <Link to="/miami-dade-cleaning" className="text-primary hover:underline mx-1">Miami-Dade</Link>, and
                  <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline mx-1">Palm Beach County</Link>.
                  Call <a href="tel:+15615718725" className="text-primary font-semibold">(561) 571-8725</a> for emergency cleaning services.
                </p>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/hurricane-season-cleaning-prep" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default HurricaneSeasonCleaningPrep;
