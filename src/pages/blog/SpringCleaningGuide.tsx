import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sun, Droplets, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const SpringCleaningGuide = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Spring Cleaning Guide for South Florida Homes | Clean Collective"
        pageDescription="Complete spring cleaning guide for South Florida homes. Tackle pollen, humidity, and seasonal challenges with our expert tips."
        canonicalUrl="https://www.cleancollective.net/blog/spring-cleaning-guide-south-florida"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-03-01", readTime: "6 min", category: "Guides" }}
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
                Seasonal
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Spring Cleaning Guide for South Florida Homes
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> December 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 6 min read
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Spring in South Florida brings warm breezes, blooming flowers—and a whole lot of pollen. 
                It's the perfect time to give your home a thorough refresh and prepare for the humid months ahead.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-primary" /> Why Spring Cleaning Matters in Florida
              </h2>
              <p className="text-muted-foreground mb-4">
                Unlike northern states where spring cleaning signals the end of being cooped up indoors, 
                South Florida's spring cleaning focuses on:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Removing pollen and allergen buildup</li>
                <li>Preparing for increased humidity</li>
                <li>Checking for mold growth from winter moisture</li>
                <li>Refreshing outdoor living spaces</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-primary" /> Room-by-Room Checklist
              </h2>
              
              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Kitchen</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Deep clean refrigerator inside and out</li>
                <li>Degrease range hood and filters</li>
                <li>Clean inside oven and microwave</li>
                <li>Wipe down all cabinet faces</li>
                <li>Sanitize garbage disposal</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Bathrooms</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Scrub grout and reseal if needed</li>
                <li>Deep clean exhaust fans (mold prevention!)</li>
                <li>Descale showerheads and faucets</li>
                <li>Check for hidden mold under sinks</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Living Areas</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Deep clean ceiling fans (they collect dust!)</li>
                <li>Wash windows inside and out</li>
                <li>Steam clean upholstery and carpets</li>
                <li>Clean air vents and replace HVAC filters</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Wind className="w-6 h-6 text-primary" /> Florida-Specific Tips
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Check AC drip pans:</strong> Clogged pans can cause water damage and mold</li>
                <li><strong>Clean lanai screens:</strong> Pollen and dust accumulate quickly</li>
                <li><strong>Pressure wash exteriors:</strong> Florida's humidity encourages mildew on walls and driveways</li>
                <li><strong>Inspect window seals:</strong> Prepare for summer storms</li>
              </ul>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Let Clean Collective Handle Your Spring Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our deep cleaning service covers all these tasks and more. We know South Florida homes 
                  and use cleaning methods designed for our unique climate.
                </p>
                <Link 
                  to="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Spring Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/spring-cleaning-guide-south-florida" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default SpringCleaningGuide;