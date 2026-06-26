import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/seo/StickyCallButton";

const Sitemap = () => {
  const baseUrl = "https://www.tidywisecleaning.com";
  
  // Schema markup for sitemap page (SiteNavigationElement)
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap | CLEAN COLLECTIVE Cleaning Services",
    "description": "Complete sitemap for CLEAN COLLECTIVE Cleaning Services. Find all our service pages, city locations, and helpful blog articles.",
    "url": `${baseUrl}/sitemap`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Home",
          "url": baseUrl
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Standard Cleaning",
          "url": `${baseUrl}/standard-cleaning`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Deep Cleaning",
          "url": `${baseUrl}/deep-cleaning`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Move In/Out Cleaning",
          "url": `${baseUrl}/move-in-out-cleaning`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Service Areas",
          "url": `${baseUrl}/service-areas`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Blog",
          "url": `${baseUrl}/blog`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 7,
          "name": "FAQ",
          "url": `${baseUrl}/faq`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 8,
          "name": "Book a Cleaning",
          "url": `${baseUrl}/booking`
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sitemap",
        "item": `${baseUrl}/sitemap`
      }
    ]
  };
  const services = [
    { name: "Standard Cleaning", path: "/standard-cleaning" },
    { name: "Deep Cleaning", path: "/deep-cleaning" },
    { name: "Move In/Out Cleaning", path: "/move-in-out-cleaning" },
    { name: "Carpet Cleaning", path: "/carpet-cleaning" },
    { name: "Upholstery Cleaning", path: "/upholstery-cleaning" },
  ];

  const counties = [
    { name: "Broward County Cleaning", path: "/broward-county-cleaning" },
    { name: "Miami-Dade County Cleaning", path: "/miami-dade-cleaning" },
    { name: "Palm Beach County Cleaning", path: "/palm-beach-county-cleaning" },
  ];

  const browardCities = [
    { name: "Fort Lauderdale", path: "/fort-lauderdale-cleaning" },
    { name: "Hollywood", path: "/hollywood-cleaning" },
    { name: "Pompano Beach", path: "/pompano-beach-cleaning" },
    { name: "Plantation", path: "/plantation-cleaning" },
    { name: "Sunrise", path: "/sunrise-cleaning" },
    { name: "Davie", path: "/davie-cleaning" },
    { name: "Pembroke Pines", path: "/pembroke-pines-cleaning" },
    { name: "Weston", path: "/weston-cleaning" },
    { name: "Deerfield Beach", path: "/deerfield-beach-cleaning" },
    { name: "Miramar", path: "/miramar-cleaning" },
    { name: "Lauderhill", path: "/lauderhill-cleaning" },
    { name: "Tamarac", path: "/tamarac-cleaning" },
    { name: "Coral Springs", path: "/coral-springs-cleaning" },
    { name: "Coconut Creek", path: "/coconut-creek-cleaning" },
    { name: "Margate", path: "/margate-cleaning" },
    { name: "Hallandale Beach", path: "/hallandale-beach-cleaning" },
    { name: "Parkland", path: "/parkland-cleaning" },
    { name: "Cooper City", path: "/cooper-city-cleaning" },
    { name: "Oakland Park", path: "/oakland-park-cleaning" },
    { name: "Wilton Manors", path: "/wilton-manors-cleaning" },
  ];

  const palmBeachCities = [
    { name: "Boca Raton", path: "/boca-raton-cleaning" },
    { name: "West Palm Beach", path: "/west-palm-beach-cleaning" },
    { name: "Delray Beach", path: "/delray-beach-cleaning" },
    { name: "Boynton Beach", path: "/boynton-beach-cleaning" },
    { name: "Lake Worth", path: "/lake-worth-cleaning" },
    { name: "Jupiter", path: "/jupiter-cleaning" },
    { name: "Palm Beach Gardens", path: "/palm-beach-gardens-cleaning" },
    { name: "Wellington", path: "/wellington-cleaning" },
    { name: "Royal Palm Beach", path: "/royal-palm-beach-cleaning" },
  ];

  const miamiDadeCities = [
    { name: "Miami", path: "/miami-cleaning" },
    { name: "Miami Beach", path: "/miami-beach-cleaning" },
    { name: "Hialeah", path: "/hialeah-cleaning" },
    { name: "Coral Gables", path: "/coral-gables-cleaning" },
    { name: "North Miami", path: "/north-miami-cleaning" },
    { name: "North Miami Beach", path: "/north-miami-beach-cleaning" },
    { name: "Aventura", path: "/aventura-cleaning" },
    { name: "Sunny Isles Beach", path: "/sunny-isles-beach-cleaning" },
    { name: "Doral", path: "/doral-cleaning" },
    { name: "Homestead", path: "/homestead-cleaning" },
    { name: "Miami Gardens", path: "/miami-gardens-cleaning" },
  ];

  // Featured blog posts only — the full list lives at /blog and in sitemap.xml.
  // Keeping the sitemap page lean (under the 150-link audit threshold) without
  // hiding any URL from search engines.
  const blogPosts = [
    { name: "Move In/Out Cleaning Checklist", path: "/blog/move-in-out-cleaning-checklist" },
    { name: "Deep Cleaning vs Standard Cleaning", path: "/blog/deep-cleaning-vs-standard-cleaning" },
    { name: "Broward County Cost Guide", path: "/blog/broward-cost-guide" },
    { name: "Spring Cleaning Guide", path: "/blog/spring-cleaning-guide-south-florida" },
    { name: "Post-Construction Cleaning Guide", path: "/blog/post-construction-cleaning-guide" },
  ];

  const pages = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Referral Program", path: "/referral-program" },
    { name: "Book a Cleaning", path: "/booking" },
    { name: "Join Our Team", path: "/apply" },
  ];

  return (
    <>
      <SEOHead
        title="Sitemap | CLEAN COLLECTIVE Cleaning Services"
        description="Complete sitemap for CLEAN COLLECTIVE Cleaning Services. Find all our service pages, city locations, and helpful blog articles."
        canonical={`${baseUrl}/sitemap`}
        schemaJson={[sitemapSchema, breadcrumbSchema]}
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Navigate all pages and services offered by CLEAN COLLECTIVE Cleaning Services across South Florida.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Main Pages */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Main Pages</h2>
                <ul className="space-y-2">
                  {pages.map((page) => (
                    <li key={page.path}>
                      <Link to={page.path} className="text-primary hover:underline">
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Our Services</h2>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.path}>
                      <Link to={service.path} className="text-primary hover:underline">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Counties */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Service Counties</h2>
                <ul className="space-y-2">
                  {counties.map((county) => (
                    <li key={county.path}>
                      <Link to={county.path} className="text-primary hover:underline">
                        {county.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Broward Cities */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Broward County Cities</h2>
                <ul className="space-y-2 columns-2">
                  {browardCities.map((city) => (
                    <li key={city.path}>
                      <Link to={city.path} className="text-primary hover:underline text-sm">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Palm Beach Cities */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Palm Beach County Cities</h2>
                <ul className="space-y-2">
                  {palmBeachCities.map((city) => (
                    <li key={city.path}>
                      <Link to={city.path} className="text-primary hover:underline text-sm">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Miami-Dade Cities */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Miami-Dade County Cities</h2>
                <ul className="space-y-2">
                  {miamiDadeCities.map((city) => (
                    <li key={city.path}>
                      <Link to={city.path} className="text-primary hover:underline text-sm">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blog Posts — featured selection, full archive at /blog */}
              <div className="bg-card border border-border rounded-xl p-6 lg:col-span-3">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Featured Blog Articles</h2>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {blogPosts.map((post) => (
                    <li key={post.path}>
                      <Link to={post.path} className="text-primary hover:underline text-sm">
                        {post.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  <Link to="/blog" className="text-primary font-medium hover:underline">
                    Browse all cleaning guides &amp; city blog posts →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready for a Sparkling Clean Home?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book your cleaning service today. Serving Broward, Palm Beach, and Miami-Dade counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+15615718725"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Call (561) 571-8725
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

export default Sitemap;
