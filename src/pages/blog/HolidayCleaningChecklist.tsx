import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Gift, Home, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const HolidayCleaningChecklist = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Holiday Cleaning Checklist for Guests | Clean Collective"
        pageDescription="Get your South Florida home guest-ready for the holidays with our complete cleaning checklist."
        canonicalUrl="https://www.tidywisecleaning.com/blog/holiday-cleaning-checklist"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-11-15", readTime: "5 min", category: "Guides" }}
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
                Holiday Cleaning Checklist: Prepare Your Home for Guests
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
                The holidays are coming and so are your guests! Whether you're hosting a dinner party or 
                welcoming out-of-town family, here's your complete checklist to make your South Florida 
                home sparkle.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Home className="w-6 h-6 text-primary" /> Two Weeks Before
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Declutter common areas and guest rooms</li>
                <li>Deep clean carpets and rugs</li>
                <li>Wash all window treatments</li>
                <li>Clean light fixtures and ceiling fans</li>
                <li>Organize closets where guests might hang coats</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" /> One Week Before
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Deep clean kitchen—inside appliances, cabinets, counters</li>
                <li>Scrub all bathrooms thoroughly</li>
                <li>Clean and organize guest bedroom</li>
                <li>Wash all guest linens and towels</li>
                <li>Clean outdoor spaces and lanai</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-primary" /> Day Before
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Quick vacuum and mop all floors</li>
                <li>Wipe down all surfaces</li>
                <li>Clean mirrors and glass</li>
                <li>Empty all trash cans</li>
                <li>Set out fresh towels and toiletries for guests</li>
                <li>Light a fresh-scented candle or use essential oils</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Guest Room Essentials</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Fresh sheets and extra blankets</li>
                <li>Clean towels and washcloths</li>
                <li>Empty dresser drawer or closet space</li>
                <li>Phone charger and bedside lamp</li>
                <li>Small trash can</li>
                <li>Welcome note with WiFi password</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Guest Bathroom Must-Haves</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Clean towels displayed nicely</li>
                <li>Extra toilet paper visible</li>
                <li>Hand soap and lotion</li>
                <li>Air freshener</li>
                <li>Clean trash can with liner</li>
              </ul>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Too Busy for Holiday Cleaning?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Let Clean Collective handle the deep cleaning so you can focus on decorating and cooking! 
                  Book early—holiday slots fill up fast.
                </p>
                <Link 
                  to="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Holiday Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/holiday-cleaning-checklist" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default HolidayCleaningChecklist;