import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Leaf, Sparkles, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";

const EcoFriendlyCleaningProducts = () => {
  return (
    <>
      <SEOSchema
        pageTitle="Eco-Friendly Cleaning Products for Homes | Clean Collective"
        pageDescription="Discover sustainable cleaning products perfect for South Florida's climate. Protect your family and the environment."
        canonicalUrl="https://www.cleancollective.net/blog/eco-friendly-cleaning-products"
        pageType="blog"
        county="South Florida"
        blogMeta={{ datePublished: "2025-02-10", readTime: "6 min", category: "Tips" }}
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
                Tips
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Best Eco-Friendly Cleaning Products for Florida Homes
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
                South Florida's delicate ecosystem—from the Everglades to our beautiful beaches—deserves 
                protection. Using eco-friendly cleaning products is one way to do your part while keeping 
                your home sparkling clean.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-primary" /> Why Go Green in Florida?
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Protect local waterways from chemical runoff</li>
                <li>Safer for pets and children</li>
                <li>Better indoor air quality in humid conditions</li>
                <li>Many work just as well as conventional products</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" /> Top Eco-Friendly Products
              </h2>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">All-Purpose Cleaners</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Seventh Generation:</strong> Plant-based, biodegradable formula</li>
                <li><strong>Method:</strong> Non-toxic with pleasant natural scents</li>
                <li><strong>DIY Option:</strong> Vinegar + water + essential oils</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Bathroom Cleaners</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Ecover:</strong> Tackles hard water and soap scum naturally</li>
                <li><strong>Better Life:</strong> Plant-derived, effective on mold</li>
                <li><strong>Baking soda + tea tree oil:</strong> Natural mold fighter</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Floor Cleaners</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Aunt Fannie's:</strong> Vinegar-based, safe for tile and wood</li>
                <li><strong>ECOS:</strong> Plant-powered, great for humidity</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" /> What to Look For
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>EPA Safer Choice label</li>
                <li>Plant-based or mineral ingredients</li>
                <li>Biodegradable formulas</li>
                <li>Cruelty-free certification</li>
                <li>Recyclable packaging</li>
              </ul>

              <div className="bg-primary/10 rounded-xl p-6 mt-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Clean Collective Uses Eco-Friendly Products
                </h3>
                <p className="text-muted-foreground mb-4">
                  We offer green cleaning options for all our services. Ask about our eco-friendly 
                  cleaning packages when you book!
                </p>
                <Link 
                  to="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Green Cleaning
                </Link>
              </div>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage="/blog/eco-friendly-cleaning-products" pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default EcoFriendlyCleaningProducts;