import { Link } from "react-router-dom";
import {
  blogPathToCitySlug,
  citiesBySlug,
  cityNameToSlug,
  cityRoute,
} from "@/data/cityLinkMap";

interface RelatedLinksProps {
  currentPage: string;
  pageType: 'service' | 'city' | 'blog' | 'county';
  county?: string;
  cityName?: string;
}

const services = [
  { name: "Standard Cleaning", link: "/standard-cleaning" },
  { name: "Deep Cleaning", link: "/deep-cleaning" },
  { name: "Move In/Out Cleaning", link: "/move-in-out-cleaning" },
  { name: "Carpet Cleaning", link: "/carpet-cleaning" },
  { name: "Upholstery Cleaning", link: "/upholstery-cleaning" },
];

const topCities = [
  { name: "Fort Lauderdale", link: "/fort-lauderdale-cleaning" },
  { name: "Boca Raton", link: "/boca-raton-cleaning" },
  { name: "West Palm Beach", link: "/west-palm-beach-cleaning" },
  { name: "Miami", link: "/miami-cleaning" },
  { name: "Hollywood", link: "/hollywood-cleaning" },
  { name: "Coral Springs", link: "/coral-springs-cleaning" },
  { name: "Pompano Beach", link: "/pompano-beach-cleaning" },
];

const counties = [
  { name: "Broward County", link: "/broward-county-cleaning" },
  { name: "Palm Beach County", link: "/palm-beach-county-cleaning" },
  { name: "Miami-Dade County", link: "/miami-dade-cleaning" },
];

const comparisons = [
  { name: "vs Molly Maid", link: "/molly-maid-alternative" },
  { name: "vs Merry Maids", link: "/merry-maids-alternative" },
  { name: "vs The Maids", link: "/the-maids-alternative" },
  { name: "vs Handy", link: "/handy-alternative" },
  { name: "All Alternatives", link: "/cleaning-service-alternatives" },
  { name: "Pricing Guide", link: "/house-cleaning-cost-south-florida" },
];

const blogPosts = [
  { name: "House Cleaning Miami", link: "/blog/house-cleaning-miami" },
  { name: "House Cleaning Fort Lauderdale", link: "/blog/house-cleaning-fort-lauderdale" },
  { name: "House Cleaning West Palm Beach", link: "/blog/house-cleaning-west-palm-beach" },
  { name: "House Cleaning Boca Raton", link: "/blog/house-cleaning-boca-raton" },
  { name: "House Cleaning Miami Beach", link: "/blog/house-cleaning-miami-beach" },
  { name: "House Cleaning Coral Springs", link: "/blog/house-cleaning-coral-springs" },
  { name: "House Cleaning Coral Gables", link: "/blog/house-cleaning-coral-gables" },
  { name: "House Cleaning Aventura", link: "/blog/house-cleaning-aventura" },
  { name: "House Cleaning Weston", link: "/blog/house-cleaning-weston" },
  { name: "House Cleaning Parkland", link: "/blog/house-cleaning-parkland" },
  { name: "House Cleaning Wellington", link: "/blog/house-cleaning-wellington" },
  { name: "House Cleaning Deerfield Beach", link: "/blog/house-cleaning-deerfield-beach" },
  { name: "House Cleaning Hialeah", link: "/blog/house-cleaning-hialeah" },
  { name: "House Cleaning Miami Gardens", link: "/blog/house-cleaning-miami-gardens" },
  { name: "House Cleaning Royal Palm Beach", link: "/blog/house-cleaning-royal-palm-beach" },
  { name: "House Cleaning Tamarac", link: "/blog/house-cleaning-tamarac" },
  { name: "House Cleaning Coconut Creek", link: "/blog/house-cleaning-coconut-creek" },
  { name: "House Cleaning Pembroke Pines", link: "/blog/house-cleaning-pembroke-pines" },
  { name: "House Cleaning Pompano Beach", link: "/blog/house-cleaning-pompano-beach" },
  { name: "House Cleaning Delray Beach", link: "/blog/house-cleaning-delray-beach" },
  { name: "Deep vs Standard Cleaning", link: "/blog/deep-cleaning-vs-standard-cleaning" },
  { name: "Move In/Out Checklist", link: "/blog/move-in-out-cleaning-checklist" },
  { name: "Airbnb Turnover Tips", link: "/blog/airbnb-turnover-cleaning-tips" },
];

const RelatedLinks = ({ currentPage, pageType, county, cityName }: RelatedLinksProps) => {
  // Resolve a city slug for both pageType=city (from cityName prop) and
  // pageType=blog (from currentPage path). Falls back to undefined for
  // service / county / topical-blog pages — those keep the generic UI.
  const resolvedSlug =
    pageType === "city" && cityName
      ? cityNameToSlug(cityName)
      : pageType === "blog"
      ? blogPathToCitySlug[currentPage]
      : undefined;
  const resolvedCity = resolvedSlug ? citiesBySlug[resolvedSlug] : undefined;

  const filteredServices = services.filter(s => s.link !== currentPage);
  const filteredCities = topCities.filter(c => c.link !== currentPage);
  const filteredCounties = counties.filter(c => c.link !== currentPage);

  // Blog column: when on a city page show that city's blog guides; on a
  // city blog post show 3 thematically related cities' blog posts; else
  // fall back to the generic featured list.
  const cityBlogGuides =
    pageType === "city" && resolvedCity ? resolvedCity.blogPosts : [];
  const blogColumnTitle =
    pageType === "city" && resolvedCity && cityBlogGuides.length > 0
      ? `Cleaning Guides for ${resolvedCity.name}`
      : "From Our Blog";
  const filteredBlogs =
    cityBlogGuides.length > 0
      ? cityBlogGuides.map((b) => ({ name: b.anchor, link: b.path }))
      : blogPosts.filter(b => b.link !== currentPage).slice(0, 3);

  // Cities column: on a city blog post, replace the static top-cities list
  // with the matching city + nearby neighbors using descriptive anchors.
  const blogServiceArea =
    pageType === "blog" && resolvedCity
      ? [
          { name: `Professional Cleaning in ${resolvedCity.name}`, link: cityRoute(resolvedCity.slug) },
          ...resolvedCity.neighbors
            .map((n) => citiesBySlug[n])
            .filter((c): c is NonNullable<typeof c> => Boolean(c))
            .slice(0, 4)
            .map((c) => ({ name: `Cleaning Services in ${c.name}`, link: cityRoute(c.slug) })),
        ]
      : null;
  const citiesColumnTitle = blogServiceArea ? "Service Areas We Cover" : "Service Areas";

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">
          Explore More CLEAN COLLECTIVE Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              {pageType === 'city' && cityName ? `Cleaning Services in ${cityName}` : 'Our Services'}
            </h3>
            <ul className="space-y-2">
              {filteredServices.map(service => (
                <li key={service.link}>
                  <Link to={service.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {pageType === 'city' && cityName ? `${cityName} ${service.name}` : service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities/Areas Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              {citiesColumnTitle}
            </h3>
            <ul className="space-y-2">
              {blogServiceArea ? (
                blogServiceArea.map((c) => (
                  <li key={c.link}>
                    <Link to={c.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {c.name}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  {filteredCounties.map(c => (
                    <li key={c.link}>
                      <Link to={c.link} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  {filteredCities.slice(0, 4).map(city => (
                    <li key={city.link}>
                      <Link to={city.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {city.name} cleaning service
                      </Link>
                    </li>
                  ))}
                </>
              )}
              <li>
                <Link to="/service-areas" className="text-primary hover:underline text-sm font-medium">
                  View all 40+ cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
              {blogColumnTitle}
            </h3>
            <ul className="space-y-2">
              {filteredBlogs.map(post => (
                <li key={post.link}>
                  <Link to={post.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {post.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/blog" className="text-primary hover:underline text-sm font-medium">
                  More articles →
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold text-foreground mb-3 mt-6 text-sm uppercase tracking-wider">
              Compare & Pricing
            </h3>
            <ul className="space-y-2">
              {comparisons.filter(c => c.link !== currentPage).map(c => (
                <li key={c.link}>
                  <Link to={c.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
