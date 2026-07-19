import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import { supabase } from "@/integrations/supabase/client";

// Parse "Month YYYY" or ISO date strings to a sortable timestamp
const parsePostDate = (s: string): number => {
  const t = Date.parse(s);
  if (!isNaN(t)) return t;
  const t2 = Date.parse(`1 ${s}`);
  return isNaN(t2) ? 0 : t2;
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  isAiGenerated?: boolean;
}

// Static blog posts (existing content)
const staticBlogPosts: BlogPost[] = [
  // Targeted local SEO posts — newest, highest priority
  {
    slug: "house-cleaning-miami",
    title: "House Cleaning in Miami, FL — Brickell, Wynwood, Coconut Grove & From $108",
    excerpt: "From high-rise condos in Brickell to historic homes in Coconut Grove — Miami's diverse housing stock requires specific expertise. Bilingual service, STR specialists, licensed & insured.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-royal-palm-beach",
    title: "House Cleaning in Royal Palm Beach, FL — Pricing, Services & What to Expect",
    excerpt: "Royal Palm Beach's suburban family homes and proximity to The Acreage mean larger lots, more outdoor tracking, and homes that need consistent professional care. From $108.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-miami-gardens",
    title: "House Cleaning in Miami Gardens, FL — Bilingual Team, From $108",
    excerpt: "Miami-Dade's third-largest city — transparent pricing, background-checked cleaners, and bilingual English/Spanish service for the Hard Rock Stadium area and surrounding neighborhoods.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-coconut-creek",
    title: "House Cleaning in Coconut Creek, FL — Wynmoor Village & Family Homes",
    excerpt: "Wynmoor Village specialists. Coconut Creek's mix of active adult and family communities need a consistent, trusted service. Same team every visit, eco-friendly products, from $108.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-tamarac",
    title: "House Cleaning in Tamarac, FL — Active Adult Communities & From $108",
    excerpt: "Kings Point, Heathgate, Mainlands — Tamarac has Broward's largest concentration of 55+ communities. Same team every visit, eco-certified products, snowbird scheduling available.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-parkland",
    title: "House Cleaning in Parkland, FL — Luxury Homes, Gated Communities & From $108",
    excerpt: "Heron Bay, Woodlands, Watercrest — Parkland's gated communities require advance visitor registration and premium surface expertise. Background-checked cleaners, licensed & insured.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-doral",
    title: "House Cleaning in Doral, FL — Servicio en Español · From $108",
    excerpt: "Clean Collective serves Doral's Latin American community in English and Spanish. Newer luxury planned communities, corporate apartments, and STR cleaning near Miami International Airport.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-north-miami",
    title: "House Cleaning in North Miami, FL — Pricing, Services & What to Expect",
    excerpt: "Keystone Islands, Biscayne Park, Sans Souci — North Miami's diverse neighborhoods and waterfront properties need a reliable, licensed service. Here's what you need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-north-miami-beach",
    title: "House Cleaning in North Miami Beach, FL — Pricing, Services & What to Expect",
    excerpt: "Point East, Ojus, Ives Estates — North Miami Beach's mix of condos and single-family homes near Sunny Isles Beach. Everything you need to know about professional cleaning here.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-plantation",
    title: "House Cleaning in Plantation, FL — Established Homes, Country Clubs & From $108",
    excerpt: "Plantation Golf & Country Club, Jacaranda, Westport — Broward County's most established planned city. Here's what Plantation homeowners need to know about professional cleaning.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-sunrise",
    title: "House Cleaning in Sunrise, FL — Pricing, Services & What to Expect",
    excerpt: "Sunrise Lakes, Welleby, Inverrary — western Broward's diverse mix of active adult communities and family homes. Here's what Sunrise homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-lake-worth",
    title: "House Cleaning in Lake Worth, FL — Pricing, Services & What to Expect",
    excerpt: "Historic bungalows, a thriving arts district, and waterfront lagoon properties — Lake Worth is one of Palm Beach County's most eclectic cities. Here's what homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-wellington",
    title: "House Cleaning in Wellington, FL — Equestrian Estates, Polo Season & From $108",
    excerpt: "The equestrian capital of the world has unique cleaning needs — polo season scheduling, horse property tracking, and luxury estates at Palm Beach Polo and Country Club.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-boynton-beach",
    title: "House Cleaning in Boynton Beach, FL — Pricing, Services & What to Expect",
    excerpt: "Active adult communities, waterfront homes, and fast-growing new developments — here's everything Boynton Beach homeowners need to know about professional cleaning.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-sunny-isles-beach",
    title: "House Cleaning in Sunny Isles Beach, FL — Ultra-Luxury Towers & White-Glove Service",
    excerpt: "Porsche Design Tower, Regalia, Jade Ocean — Sunny Isles Beach demands white-glove standards, exotic surface expertise, and complete discretion. Here's what residents need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-hallandale-beach",
    title: "House Cleaning in Hallandale Beach, FL — Condos, Snowbirds & From $108",
    excerpt: "Golden Isles, oceanfront condos, and a large seasonal population — here's what Hallandale Beach homeowners and seasonal residents need to know about professional cleaning.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-davie",
    title: "House Cleaning in Davie, FL — Ranch Homes, Equestrian Properties & From $108",
    excerpt: "Davie's unique mix of ranch homes, equestrian properties, and suburban neighborhoods creates specific cleaning challenges. Here's what Davie homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-boca-raton",
    title: "House Cleaning in Boca Raton, FL — Country Clubs, Estates & From $108",
    excerpt: "From Boca West Country Club to East Boca condos — snowbird seasonal scheduling, country club access, and luxury home expertise. Everything Boca Raton homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-jupiter",
    title: "House Cleaning in Jupiter, FL — Waterfront Homes, Golf Communities & From $108",
    excerpt: "Jupiter's Intracoastal estates and golf communities need specific expertise — salt air, waterfront challenges, and gated access. Here's what Jupiter homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-palm-beach-gardens",
    title: "House Cleaning in Palm Beach Gardens, FL — Golf Communities, Gated Neighborhoods & From $108",
    excerpt: "PGA National, Mirasol, Ballenisles — Palm Beach Gardens' golf communities have specific access and cleaning requirements. Here's what homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-miramar",
    title: "House Cleaning in Miramar, FL — Pricing, Services & What to Expect",
    excerpt: "Miramar is Broward's largest planned community — large pool homes, gated neighborhoods, and family-friendly service. Everything you need to know about professional cleaning in Miramar.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-hialeah",
    title: "House Cleaning in Hialeah, FL — Servicio en Español · From $108",
    excerpt: "Clean Collective serves Hialeah in English and Spanish. Transparent pricing, background-checked cleaners, and eco-friendly products for Miami-Dade's second-largest city.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-deerfield-beach",
    title: "House Cleaning in Deerfield Beach, FL — Your Local Service, From $108",
    excerpt: "Clean Collective is headquartered in Deerfield Beach — not a franchise from another city. Faster response times, genuine local knowledge, and a commitment to getting it right in our own community.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-coral-gables",
    title: "House Cleaning in Coral Gables, FL — Mediterranean Homes, Estates & What It Costs",
    excerpt: "Coral Gables' Mediterranean Revival architecture and natural stone surfaces require specific expertise. Here's what homeowners need to know about pricing, neighborhoods, and finding the right cleaner.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-aventura",
    title: "House Cleaning in Aventura, FL — Condos, High-Rises & Luxury Homes",
    excerpt: "Williams Island, Turnberry Isle, and Aventura's luxury towers require a different approach than a standard suburban home. Here's what Aventura residents need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-weston",
    title: "House Cleaning in Weston, FL — Pricing, Services & What to Expect",
    excerpt: "Weston's large luxury homes, gated communities, and HOA requirements mean professional cleaning needs specific expertise. Here's everything Weston homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-delray-beach",
    title: "House Cleaning in Delray Beach, FL — Pricing, Services & How to Book",
    excerpt: "Snowbirds, country club residents, and year-round homeowners: here's what Delray Beach homeowners need to know about professional cleaning — pricing, neighborhoods, and seasonal service.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-miami-beach",
    title: "House Cleaning in Miami Beach, FL — Condos, STRs & Everything In Between",
    excerpt: "Oceanfront condos, luxury penthouses, short-term rentals — Miami Beach is a unique cleaning market. Here's everything condo owners and STR hosts need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-pompano-beach",
    title: "House Cleaning in Pompano Beach, FL — Pricing, Services & What to Expect",
    excerpt: "From beachfront condos to western Broward neighborhoods — here's what Pompano Beach homeowners need to know about professional cleaning pricing and coastal-specific challenges.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-pembroke-pines",
    title: "House Cleaning in Pembroke Pines, FL — Pricing, Services & What to Expect",
    excerpt: "Pembroke Pines is Broward County's largest city. Large pool homes, gated planned communities, and HOA access requirements — here's everything homeowners need to know.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-coral-springs",
    title: "House Cleaning in Coral Springs, FL — Pricing, Services & How to Book",
    excerpt: "Everything Coral Springs homeowners should know about professional cleaning — costs, what's included, neighborhoods served, and how to book a trusted local cleaner.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "move-out-cleaning-west-palm-beach",
    title: "Move-Out Cleaning in West Palm Beach, FL — Get Your Security Deposit Back",
    excerpt: "Moving out of a West Palm Beach rental? Here's exactly what a professional move-out clean covers, what it costs, and how to protect your deposit.",
    date: "April 2026",
    readTime: "6 min read",
    category: "Local"
  },
  {
    slug: "deep-cleaning-service-boca-raton",
    title: "Deep Cleaning Service in Boca Raton, FL — What's Included & What It Costs",
    excerpt: "Everything Boca Raton homeowners need to know about deep cleaning — what's covered, how much it costs, and when to book one.",
    date: "April 2026",
    readTime: "6 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-hollywood-florida",
    title: "House Cleaning in Hollywood, FL — Pricing, Services & What to Expect",
    excerpt: "Everything Hollywood, FL homeowners need to know before booking — pricing by home size, what's included, and how to find a cleaner you can trust.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "move-in-cleaning-miami",
    title: "Move-In Cleaning in Miami, FL — Start Fresh in Your New Home",
    excerpt: "Moving into a Miami home or condo? Here's what a professional move-in clean covers, what it costs, and why South Florida humidity makes it essential.",
    date: "April 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "airbnb-cleaning-fort-lauderdale",
    title: "Airbnb Cleaning in Fort Lauderdale — Turnover Cleaning for STR Hosts",
    excerpt: "Running a short-term rental in Fort Lauderdale? Here's everything vacation rental hosts need to know about turnovers, pricing, and getting 5-star reviews.",
    date: "April 2026",
    readTime: "6 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-west-palm-beach",
    title: "House Cleaning in West Palm Beach, FL — Pricing, Services & How to Book",
    excerpt: "A complete guide to house cleaning prices in West Palm Beach, what's included in each service, and how to find a licensed cleaner you can trust.",
    date: "April 2026",
    readTime: "6 min read",
    category: "Local"
  },
  {
    slug: "move-out-cleaning-boca-raton",
    title: "Move-Out Cleaning in Boca Raton, FL — Get Your Deposit Back",
    excerpt: "Moving out of your Boca Raton home? A professional move-out clean is the most reliable way to protect your security deposit.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "deep-cleaning-service-miami",
    title: "Deep Cleaning Service in Miami, FL — Pricing, What's Included & How to Book",
    excerpt: "Miami's humidity, mold risk, and high-rise living make deep cleaning essential. Here's what to expect and what it costs.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Local"
  },
  {
    slug: "house-cleaning-fort-lauderdale",
    title: "House Cleaning in Fort Lauderdale, FL — Everything You Need to Know",
    excerpt: "A complete guide to professional house cleaning in Fort Lauderdale — pricing, what's included, neighborhoods served, and how to book.",
    date: "January 2026",
    readTime: "6 min read",
    category: "Local"
  },
  {
    slug: "move-in-out-cleaning-checklist",
    title: "The Ultimate Move In/Out Cleaning Checklist for South Florida",
    excerpt: "Moving in or out of a South Florida property? This comprehensive checklist ensures you get your security deposit back and start fresh in your new home.",
    date: "January 2025",
    readTime: "7 min read",
    category: "Guides"
  },
  {
    slug: "deep-cleaning-vs-standard-cleaning",
    title: "Deep Cleaning vs Standard Cleaning: Which Do You Need?",
    excerpt: "Not sure whether to book a standard or deep cleaning? Here's everything you need to know to make the right choice for your South Florida home.",
    date: "January 2025",
    readTime: "6 min read",
    category: "Guides"
  },
  {
    slug: "pet-friendly-cleaning-tips",
    title: "Pet-Friendly Home Cleaning Tips for Florida Pet Owners",
    excerpt: "Love your furry friends but struggling with pet hair and odors? Here are expert tips to keep your South Florida home fresh and clean—safely for your pets.",
    date: "January 2025",
    readTime: "6 min read",
    category: "Tips"
  },
  {
    slug: "hurricane-season-cleaning-prep",
    title: "Hurricane Season Home Cleaning & Prep Guide for South Florida",
    excerpt: "Hurricane season runs June 1 - November 30. Here's your complete guide to preparing your home before the storm and cleaning up after.",
    date: "January 2025",
    readTime: "8 min read",
    category: "Seasonal"
  },
  {
    slug: "how-to-prepare-for-cleaning-service",
    title: "How to Prepare for Your Professional Cleaning Service",
    excerpt: "A little preparation goes a long way! Here's how to get the most out of your professional cleaning appointment.",
    date: "January 2025",
    readTime: "5 min read",
    category: "Tips"
  },
  {
    slug: "broward-cost-guide",
    title: "2026 Cost Guide for Cleaning Services in Broward County",
    excerpt: "Planning your cleaning budget? Here's everything you need to know about Broward County cleaning service costs in 2026.",
    date: "January 2025",
    readTime: "5 min read",
    category: "Pricing"
  },
  {
    slug: "miami-permit-rules",
    title: "Miami-Dade Cleaning Service Regulations & Tips",
    excerpt: "Understanding local regulations and best practices for professional cleaning services in Miami-Dade County.",
    date: "January 2025",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "palm-beach-seasonal-discounts",
    title: "Palm Beach County Seasonal Cleaning Discounts & Tips",
    excerpt: "Take advantage of seasonal offers and learn the best times to book cleaning services in Palm Beach County.",
    date: "January 2025",
    readTime: "4 min read",
    category: "Deals"
  },
  {
    slug: "spring-cleaning-guide-south-florida",
    title: "Spring Cleaning Guide for South Florida Homes",
    excerpt: "Spring in South Florida means pollen, humidity, and the perfect time for a deep clean. Get your home ready for the season with our comprehensive guide.",
    date: "December 2024",
    readTime: "6 min read",
    category: "Seasonal"
  },
  {
    slug: "eco-friendly-cleaning-products",
    title: "Best Eco-Friendly Cleaning Products for Florida Homes",
    excerpt: "Protect your family and the environment with these sustainable cleaning solutions perfect for South Florida's unique climate.",
    date: "December 2024",
    readTime: "5 min read",
    category: "Tips"
  },
  {
    slug: "allergy-free-home-cleaning",
    title: "Allergy-Free Home Cleaning Tips for Florida Residents",
    excerpt: "Florida's year-round pollen and humidity can trigger allergies. Learn how to create an allergy-free home with proper cleaning techniques.",
    date: "December 2024",
    readTime: "7 min read",
    category: "Health"
  },
  {
    slug: "holiday-cleaning-checklist",
    title: "Holiday Cleaning Checklist: Prepare Your Home for Guests",
    excerpt: "Expecting holiday visitors? Here's your complete checklist to get your South Florida home guest-ready in no time.",
    date: "December 2024",
    readTime: "5 min read",
    category: "Seasonal"
  },
  {
    slug: "bathroom-deep-cleaning-guide",
    title: "Complete Bathroom Deep Cleaning Guide",
    excerpt: "Tackle soap scum, mold, and grime with our step-by-step bathroom deep cleaning guide designed for Florida's humid climate.",
    date: "December 2024",
    readTime: "8 min read",
    category: "Guides"
  },
  {
    slug: "kitchen-cleaning-hacks",
    title: "10 Kitchen Cleaning Hacks That Save Time",
    excerpt: "Make kitchen cleaning faster and easier with these pro tips from South Florida's cleaning experts.",
    date: "December 2024",
    readTime: "4 min read",
    category: "Tips"
  },
  {
    slug: "airbnb-turnover-cleaning-tips",
    title: "Airbnb & Vacation Rental Turnover Cleaning Tips",
    excerpt: "Maximize your rental reviews with quick and thorough turnover cleaning. Essential tips for South Florida property hosts.",
    date: "December 2024",
    readTime: "6 min read",
    category: "Guides"
  },
  {
    slug: "mold-prevention-florida-homes",
    title: "Mold Prevention Guide for Florida Homes",
    excerpt: "Florida's humidity creates perfect conditions for mold. Learn how to prevent and address mold issues in your home.",
    date: "December 2024",
    readTime: "7 min read",
    category: "Health"
  },
  {
    slug: "condo-cleaning-rules-south-florida",
    title: "Condo Cleaning Rules & Tips for South Florida",
    excerpt: "Navigate HOA rules and building regulations while keeping your South Florida condo spotless.",
    date: "December 2024",
    readTime: "5 min read",
    category: "Local"
  },
  {
    slug: "post-construction-cleaning-guide",
    title: "Post-Construction Cleaning: What to Expect",
    excerpt: "Just finished a renovation? Here's everything you need to know about post-construction cleaning in South Florida.",
    date: "December 2024",
    readTime: "6 min read",
    category: "Guides"
  }
];

const categories = ["All", "Guides", "Tips", "Seasonal", "Pricing", "Local", "Deals", "Health", "Home Care"];

const POSTS_PER_PAGE = 12;

const Blog = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>(staticBlogPosts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;

  const setCurrentPage = (page: number) => {
    const next = new URLSearchParams(searchParams);
    if (page <= 1) next.delete("page");
    else next.set("page", String(page));
    setSearchParams(next, { replace: false });
  };

  useEffect(() => {
    const fetchAiPosts = async () => {
      const { data: aiPosts, error } = await supabase
        .from('blog_posts')
        .select('slug, title, excerpt, category, read_time, published_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching AI blog posts:', error);
        return;
      }

      if (aiPosts && aiPosts.length > 0) {
        const formattedAiPosts: BlogPost[] = aiPosts.map(post => ({
          slug: `ai/${post.slug}`,
          title: post.title,
          excerpt: post.excerpt,
          date: new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          readTime: post.read_time,
          category: post.category,
          isAiGenerated: true
        }));

        // Combine AI posts with static posts, AI posts first
        setAllPosts([...formattedAiPosts, ...staticBlogPosts]);
      }
    };

    fetchAiPosts();
  }, []);

  // Reset to page 1 when category changes
  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  // Sort posts by date (newest first) before filtering/paginating
  const sortedPosts = useMemo(
    () => [...allPosts].sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date)),
    [allPosts]
  );

  const filteredPosts = selectedCategory === "All"
    ? sortedPosts
    : sortedPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  // Inject rel="prev" / rel="next" into <head> for paginated pages
  useEffect(() => {
    const base = "https://www.cleancollective.net/blog";
    const ensureLink = (rel: "prev" | "next", href: string | null) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!href) { el?.remove(); return; }
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };
    ensureLink("prev", safePage > 1 ? (safePage - 1 === 1 ? base : `${base}?page=${safePage - 1}`) : null);
    ensureLink("next", safePage < totalPages ? `${base}?page=${safePage + 1}` : null);
    return () => {
      document.head.querySelector('link[rel="prev"]')?.remove();
      document.head.querySelector('link[rel="next"]')?.remove();
    };
  }, [safePage, totalPages]);

  return (
    <>
      <SEOSchema
        pageTitle="Cleaning Tips & Guides Blog | Clean Collective South Florida"
        pageDescription="Expert cleaning tips, guides, and advice for South Florida homeowners. Learn about deep cleaning, pet-friendly cleaning, hurricane prep, and more from Clean Collective."
        canonicalUrl="https://www.cleancollective.net/blog"
        pageType="blog"
        county="South Florida"
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cleaning Tips & Guides
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert advice for keeping your South Florida home sparkling clean. 
              From seasonal tips to service guides, we've got you covered.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Category Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                    category === selectedCategory 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      {post.isAiGenerated && (
                        <span className="flex items-center gap-1 bg-accent/10 text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          New
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <nav
                aria-label="Blog pagination"
                className="mt-12 flex flex-col items-center gap-3"
              >
                {/* Mobile: simple Prev / indicator / Next */}
                <div className="flex sm:hidden items-center justify-center gap-3 w-full">
                  <button
                    onClick={() => {
                      setCurrentPage(Math.max(1, safePage - 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={safePage === 1}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-muted-foreground" aria-live="polite">
                    Page {safePage} of {totalPages}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentPage(Math.min(totalPages, safePage + 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={safePage === totalPages}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </div>

                {/* Desktop: full numbered controls */}
                <div className="hidden sm:flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      setCurrentPage(Math.max(1, safePage - 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={safePage === 1}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      aria-current={page === safePage ? "page" : undefined}
                      className={`min-w-[40px] px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        page === safePage
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setCurrentPage(Math.min(totalPages, safePage + 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={safePage === totalPages}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </div>

                <p className="hidden sm:block text-sm text-muted-foreground" aria-live="polite">
                  Page {safePage} of {totalPages}
                </p>
              </nav>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready for a Sparkling Clean Home?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let Clean Collective handle the cleaning while you enjoy your free time. 
              Serving Broward, Palm Beach, and Miami-Dade counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+15618612752"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Call (561) 861-2752
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default Blog;
