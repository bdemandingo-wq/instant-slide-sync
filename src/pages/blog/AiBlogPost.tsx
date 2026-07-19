import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import DOMPurify from "dompurify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import AuthorBio from "@/components/seo/AuthorBio";
import { supabase } from "@/integrations/supabase/client";

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  published_at: string;
}

const AiBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound || !post) {
    // Render a real archived-post page with full SEO. Canonical points to /blog
    // so search engines consolidate ranking back to the live blog index instead
    // of treating this as an empty page or a soft 404.
    return (
      <>
        <SEOSchema
          pageTitle="Article Archived | Clean Collective Blog"
          pageDescription="This Clean Collective article has been archived. Browse our latest South Florida cleaning guides, tips, and city-specific resources for homeowners and renters."
          canonicalUrl="https://cleancollectives.com/blog"
          pageType="blog"
        />
        <main className="min-h-screen">
          <Navbar />
          <article className="pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              <header className="mb-8">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  This article has been archived
                </h1>
                <p className="text-muted-foreground text-lg">
                  The post you were looking for is no longer published, but our active
                  cleaning guides cover similar topics for South Florida homeowners.
                </p>
              </header>

              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Clean Collective is South Florida's local house cleaning service. We publish
                  guides on the kinds of cleaning challenges that are unique to living
                  here — humidity, salt air, pollen counts, hurricane prep, year-round
                  Airbnb turnover, and the wear-and-tear of pets, pools, and lanais.
                  When older articles are revised, expanded, or merged into newer
                  guides, we keep the URLs you arrived from working so you don't hit
                  a dead end.
                </p>

                <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                  Browse our most-read cleaning guides
                </h2>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li><Link to="/blog" className="text-primary hover:underline">All Clean Collective blog posts</Link> — the full library of cleaning guides for South Florida</li>
                  <li><Link to="/deep-cleaning" className="text-primary hover:underline">Deep cleaning service</Link> — what's included and when to book one</li>
                  <li><Link to="/standard-cleaning" className="text-primary hover:underline">Standard recurring cleaning</Link> — weekly, biweekly, or monthly visits</li>
                  <li><Link to="/move-in-out-cleaning" className="text-primary hover:underline">Move-in / move-out cleaning</Link> — security-deposit-back checklists</li>
                  <li><Link to="/airbnb-cleaning" className="text-primary hover:underline">Airbnb turnover cleaning</Link> — guest-ready in 3 hours or less</li>
                  <li><Link to="/upholstery-cleaning" className="text-primary hover:underline">Upholstery cleaning</Link> — sofas, sectionals, dining chairs</li>
                  <li><Link to="/carpet-cleaning" className="text-primary hover:underline">Carpet cleaning</Link> — steam-extraction service</li>
                </ul>

                <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                  Looking for a specific city?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We serve more than 40 cities across Broward, Palm Beach, and
                  Miami-Dade counties. Visit our{" "}
                  <Link to="/service-areas" className="text-primary hover:underline">service areas page</Link>{" "}
                  for the full list, or jump to a popular market:{" "}
                  <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>,{" "}
                  <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
                  <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,{" "}
                  <Link to="/broward-county-cleaning" className="text-primary hover:underline">all of Broward County</Link>,{" "}
                  <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">Palm Beach County</Link>, or{" "}
                  <Link to="/miami-dade-cleaning" className="text-primary hover:underline">Miami-Dade County</Link>.
                </p>

                <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                  Ready to book?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Get a flat-rate quote in 60 seconds — no hourly billing, no surprise
                  upcharges. We're a fully insured local team with a free re-clean
                  guarantee.{" "}
                  <Link to="/booking" className="text-primary hover:underline">Book online</Link>{" "}
                  or call <a href="tel:+15618612752" className="text-primary hover:underline">(561) 861-2752</a>.
                  Have questions first? Our{" "}
                  <Link to="/faq" className="text-primary hover:underline">FAQ</Link>{" "}
                  covers pricing, what's included, scheduling, and our re-clean policy,
                  and our <Link to="/reviews" className="text-primary hover:underline">customer reviews</Link>{" "}
                  page collects feedback from neighbors across South Florida.
                </p>
              </div>
            </div>
          </article>
          <Footer />
          <StickyCallButton />
        </main>
      </>
    );
  }

  const publishedDate = new Date(post.published_at).toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <>
      <SEOSchema
        pageTitle={post.title.length > 60 ? post.title.slice(0, 57).trimEnd() + "…" : post.title}
        pageDescription={post.excerpt.length > 160 ? post.excerpt.slice(0, 157).trimEnd() + "…" : post.excerpt}
        canonicalUrl={`https://cleancollectives.com${location.pathname}`}
        pageType="blog"
        county="South Florida"
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
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 bg-accent/10 text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  AI Generated
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {post.read_time}
                </span>
              </div>
            </header>

            <div 
              className="prose prose-lg max-w-none [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:mb-4 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:text-muted-foreground [&>ul]:space-y-2 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:text-muted-foreground [&>ol]:space-y-2 [&>ol]:mb-6"
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(post.content, {
                  ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'br', 'span'],
                  ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
                })
              }}
            />

            <div className="bg-primary/10 rounded-xl p-6 mt-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Ready for Professional Cleaning?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let Clean Collective handle your cleaning needs. We serve all of South Florida 
                with eco-friendly, professional cleaning services.
              </p>
              <Link 
                to="/#booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Your Cleaning
              </Link>
            </div>
          </div>
        </article>

        <AuthorBio />
        <RelatedLinks currentPage={`/blog/${slug}`} pageType="blog" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default AiBlogPost;
