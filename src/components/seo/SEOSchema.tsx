import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOSchemaProps {
  pageTitle: string;
  pageDescription: string;
  canonicalUrl: string;
  pageType?: 'home' | 'county' | 'blog' | 'service' | 'city' | 'article';
  county?: string;
  cityName?: string;
  blogMeta?: {
    datePublished?: string;
    dateModified?: string;
    readTime?: string;
    category?: string;
  };
  faqItems?: Array<{ q: string; a: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  additionalSchema?: object;
}

const WEBSITE = "https://www.cleancollective.net";
const BUSINESS_NAME = "Clean Collective Cleaning Services";
const PHONE = "+1-561-861-2752";

/**
 * Force every canonical URL to the www apex. Prevents non-www duplicates
 * from ever appearing in canonical / og:url / hreflang / JSON-LD.
 */
const normalizeCanonical = (input: string): string => {
  if (!input) return WEBSITE;
  const path = input
    .replace(/^https?:\/\/(www\.)?cleancollective\.com/i, "")
    .replace(/^https?:\/\/[^/]+/i, "");
  const cleanPath = path.startsWith("/") || path === "" ? path : `/${path}`;
  return `${WEBSITE}${cleanPath}`;
};

// Top-level business schema. Uses @type: LocalBusiness so Google's review
// snippet parser recognizes aggregateRating and review on this node — the
// CleaningService subtype does technically inherit from LocalBusiness but
// Search Console flags ratings/reviews when @type is the more specific
// CleaningService string. The "additionalType" link below preserves the
// cleaning-specific signal without confusing the parser.
const cleaningServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/CleaningService",
  "@id": `${WEBSITE}/#business`,
  "name": BUSINESS_NAME,
  "alternateName": ["Clean Collective", "Clean Collective Cleaning", "Clean Collective House Cleaning"],
  "description": "Clean Collective is a professional residential and commercial cleaning company serving 40+ cities across Broward, Miami-Dade, and Palm Beach County, Florida. We offer standard cleaning, deep cleaning, move-in/out cleaning, carpet cleaning, and upholstery cleaning.",
  "url": WEBSITE,
  "telephone": PHONE,
  "email": "support@cleancollectives.com",
  "foundingDate": "2023",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Debit Card",
  "image": [`${WEBSITE}/og-image.webp`, `${WEBSITE}/logo.webp`],
  "logo": `${WEBSITE}/logo.webp`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4611 N Federal Hwy",
    "addressLocality": "Deerfield Beach",
    "addressRegion": "FL",
    "postalCode": "33064",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 26.2890, "longitude": -80.0940 },
  "hasMap": "https://maps.google.com/?q=Clean Collective+Cleaning+Deerfield+Beach+FL",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "09:00", "closes": "15:00" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "areaServed": [
    { "@type": "City", "name": "Fort Lauderdale", "sameAs": "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida" },
    { "@type": "City", "name": "Boca Raton", "sameAs": "https://en.wikipedia.org/wiki/Boca_Raton,_Florida" },
    { "@type": "City", "name": "West Palm Beach", "sameAs": "https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida" },
    { "@type": "City", "name": "Miami", "sameAs": "https://en.wikipedia.org/wiki/Miami" },
    { "@type": "City", "name": "Hollywood", "sameAs": "https://en.wikipedia.org/wiki/Hollywood,_Florida" },
    { "@type": "City", "name": "Pompano Beach" },
    { "@type": "City", "name": "Coral Springs" },
    { "@type": "City", "name": "Deerfield Beach" },
    { "@type": "City", "name": "Miami Beach" },
    { "@type": "City", "name": "Aventura" },
    { "@type": "AdministrativeArea", "name": "Broward County", "sameAs": "https://en.wikipedia.org/wiki/Broward_County,_Florida" },
    { "@type": "AdministrativeArea", "name": "Miami-Dade County", "sameAs": "https://en.wikipedia.org/wiki/Miami-Dade_County,_Florida" },
    { "@type": "AdministrativeArea", "name": "Palm Beach County", "sameAs": "https://en.wikipedia.org/wiki/Palm_Beach_County,_Florida" }
  ],
  "knowsAbout": ["House Cleaning", "Deep Cleaning", "Move-In Cleaning", "Move-Out Cleaning", "Carpet Cleaning", "Upholstery Cleaning", "Eco-Friendly Cleaning", "Commercial Cleaning"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Clean Collective Cleaning Services Menu",
    "itemListElement": [
      { "@type": "Offer", "name": "Standard House Cleaning", "description": "Regular maintenance cleaning for homes. Includes all rooms dusted and vacuumed, kitchen and bathrooms sanitized, floors mopped, trash emptied.", "price": "150", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "150", "maxPrice": "780", "priceCurrency": "USD" }, "itemOffered": { "@type": "Service", "name": "Standard Cleaning", "serviceType": "House Cleaning" } },
      { "@type": "Offer", "name": "Deep House Cleaning", "description": "Comprehensive deep cleaning including baseboards, inside cabinets, light fixtures, and all surfaces.", "price": "250", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "250", "maxPrice": "1440", "priceCurrency": "USD" }, "itemOffered": { "@type": "Service", "name": "Deep Cleaning", "serviceType": "Deep House Cleaning" } },
      { "@type": "Offer", "name": "Move In / Move Out Cleaning", "description": "Complete top-to-bottom cleaning for move-ins and move-outs. Includes inside appliances, windows, and inspection-ready clean.", "price": "300", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "300", "maxPrice": "1700", "priceCurrency": "USD" }, "itemOffered": { "@type": "Service", "name": "Move In/Out Cleaning", "serviceType": "Move Out Cleaning" } },
      { "@type": "Offer", "name": "Carpet Cleaning", "description": "Professional deep extraction carpet cleaning for all carpet types. Includes stain treatment and odor elimination.", "itemOffered": { "@type": "Service", "name": "Carpet Cleaning", "serviceType": "Carpet Cleaning" } },
      { "@type": "Offer", "name": "Upholstery Cleaning", "description": "Expert furniture and fabric cleaning for sofas, chairs, and all upholstered items.", "itemOffered": { "@type": "Service", "name": "Upholstery Cleaning", "serviceType": "Upholstery Cleaning" } }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Ashleigh Craig" },
      "datePublished": "2025-06-10",
      "reviewBody": "I used Clean Collective to do a deep clean of my home, and I couldn't be happier with the results! The team arrived on time, fully equipped, and ready to work. They paid attention to every detail—baseboards, windows, inside appliances—nothing was missed."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Sallie Sutherland" },
      "datePublished": "2025-08-22",
      "reviewBody": "Tidy Wise in less than 12 hours got two women to my home over a holiday weekend. They were the most efficient, fast, capable young women I've ever met. It really saved my day."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Charlie Dubb" },
      "datePublished": "2025-11-04",
      "reviewBody": "The ladies cleaned my 30 year, unoccupied house FLAWLESSLY. Sadly, the Florida 'critters' had completely taken the place over, but you'd never know it now! THANK YOU!"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/cleancollective",
    "https://www.instagram.com/cleancollective",
    "https://g.page/clean collective-cleaning",
    "https://www.yelp.com/biz/clean collective-cleaning-deerfield-beach"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${WEBSITE}/#website`,
  "url": WEBSITE,
  "name": BUSINESS_NAME,
  "description": "Professional house cleaning in Fort Lauderdale, Boca Raton, West Palm Beach & 40+ South Florida cities",
  "publisher": { "@id": `${WEBSITE}/#business` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": `${WEBSITE}/service-areas?q={search_term_string}` },
    "query-input": "required name=search_term_string"
  }
};

// videoSchema removed — Google's VideoObject parser requires contentUrl
// or embedUrl, and the previous declaration had neither plus a fabricated
// duration/uploadDate for a video that doesn't actually exist. Search
// Console was flagging it as an invalid VideoObject which can crowd out
// the valid LocalBusiness rich result. Re-add this block ONLY when a
// real video is published with a proper contentUrl.

const SEOSchema = ({
  pageTitle,
  pageDescription,
  canonicalUrl,
  pageType = 'home',
  county,
  cityName,
  blogMeta,
  faqItems,
  breadcrumbs,
  additionalSchema
}: SEOSchemaProps) => {
  const isHome = pageType === 'home';
  // Normalize incoming canonical to guarantee www apex everywhere downstream
  // (canonical link, og:url, JSON-LD @id/url, breadcrumbs).
  // eslint-disable-next-line no-param-reassign
  canonicalUrl = normalizeCanonical(canonicalUrl);

  // Hreflang self-references the URL the user/crawler actually requested. Falls
  // back to canonicalUrl when window isn't available (initial server-render).
  // This decouples hreflang from canonical so pages whose canonical points
  // elsewhere (e.g. archived blog posts canonicalized to /blog) still emit a
  // self-referencing hreflang for the audit and for search engine compliance.
  const hreflangUrl = typeof window !== 'undefined'
    ? `${WEBSITE}${window.location.pathname}`
    : canonicalUrl;

  const ogImageUrl = `${WEBSITE}/og-image.webp`;

  // Update the static description, canonical, OG, Twitter, and hreflang tags
  // shipped in index.html in place. This keeps the tags present in the static
  // HTML for non-JS audit crawlers AND ensures per-route values for JS crawlers
  // without producing duplicate tags via Helmet injection.
  useEffect(() => {
    const setMeta = (selector: string, value: string) => {
      const tag = document.querySelector<HTMLMetaElement>(selector);
      if (tag && value) tag.content = value;
    };
    const setLinkHref = (selector: string, value: string) => {
      const tag = document.querySelector<HTMLLinkElement>(selector);
      if (tag && value) tag.href = value;
    };

    setMeta('meta[name="description"]', pageDescription);
    setLinkHref('link[rel="canonical"]', canonicalUrl);

    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', pageDescription);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', ogImageUrl);

    setMeta('meta[name="twitter:title"]', pageTitle);
    setMeta('meta[name="twitter:description"]', pageDescription);
    setMeta('meta[name="twitter:image"]', ogImageUrl);

    setLinkHref('link[rel="alternate"][hreflang="en-us"]', hreflangUrl);
    setLinkHref('link[rel="alternate"][hreflang="x-default"]', hreflangUrl);
  }, [pageTitle, pageDescription, canonicalUrl, hreflangUrl, ogImageUrl]);

  // Build breadcrumb schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  } : pageType !== 'home' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": WEBSITE },
      ...(county && pageType === 'city' ? [
        { "@type": "ListItem", "position": 2, "name": `${county} Cleaning`, "item": `${WEBSITE}/${county.toLowerCase().replace(/\s+/g, '-').replace('county', 'county-cleaning')}` },
        { "@type": "ListItem", "position": 3, "name": cityName ? `${cityName} Cleaning` : pageTitle, "item": canonicalUrl }
      ] : [
        { "@type": "ListItem", "position": 2, "name": pageTitle.replace(' | Clean Collective', ''), "item": canonicalUrl }
      ])
    ]
  } : null;

  // FAQ schema
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  } : null;

  // Blog schema
  const blogPostingSchema = pageType === 'blog' ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": pageTitle,
    "description": pageDescription,
    "url": canonicalUrl,
    "image": `${WEBSITE}/og-image.webp`,
    "datePublished": blogMeta?.datePublished || "2025-01-15",
    "dateModified": blogMeta?.dateModified || "2025-03-08",
    "author": { "@type": "Organization", "name": BUSINESS_NAME, "url": WEBSITE },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_NAME,
      "logo": { "@type": "ImageObject", "url": `${WEBSITE}/logo.webp` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    ...(blogMeta?.category && { "articleSection": blogMeta.category }),
    ...(blogMeta?.readTime && { "timeRequired": `PT${blogMeta.readTime.replace(/\D/g, '')}M` })
  } : null;

  // Service schema
  const serviceSchema = pageType === 'service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageTitle.replace(' | Clean Collective', ''),
    "description": pageDescription,
    "url": canonicalUrl,
    "provider": { "@id": `${WEBSITE}/#business` },
    "areaServed": { "@type": "AdministrativeArea", "name": "South Florida" },
    "termsOfService": `${WEBSITE}/faq`,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "108",
      "highPrice": "600",
      "offerCount": "7"
    }
  } : null;

  // City-specific LocalBusiness schema — use cityName or county prop (city pages pass city name via county)
  const resolvedCity = cityName || (pageType === 'city' || pageType === 'county' ? county : null);
  const cityLocalBusinessSchema = resolvedCity ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${canonicalUrl}/#localbusiness`,
    "name": `${BUSINESS_NAME} — ${resolvedCity}`,
    "description": pageDescription,
    "url": canonicalUrl,
    "telephone": PHONE,
    "email": "support@cleancollectives.com",
    "priceRange": "$$",
    "image": `${WEBSITE}/og-image.webp`,
    "logo": `${WEBSITE}/logo.webp`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4611 N Federal Hwy",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33064",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": resolvedCity,
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "09:00", "closes": "15:00" }
    ],
    // Per-city LocalBusiness intentionally has no aggregateRating or review.
    // The 4.9/127 figures are global, not city-scoped, so attaching them per
    // page would constitute self-serving reviews and trip Search Console.
    // Ratings/reviews are carried by the canonical homepage schema only.
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Cleaning Services in ${resolvedCity}`,
      "itemListElement": [
        { "@type": "Offer", "name": `Standard Cleaning in ${resolvedCity}`, "price": "150", "priceCurrency": "USD" },
        { "@type": "Offer", "name": `Deep Cleaning in ${resolvedCity}`, "price": "250", "priceCurrency": "USD" },
        { "@type": "Offer", "name": `Move In/Out Cleaning in ${resolvedCity}`, "price": "300", "priceCurrency": "USD" }
      ]
    },
    "sameAs": [`${WEBSITE}/#business`]
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* og:type is per-page (article vs website) — keep it dynamic via Helmet. */}
      <meta property="og:type" content={(pageType === 'blog' || pageType === 'article') ? 'article' : 'website'} />

      {/* Geo Tags — same on every page, fine to inject via Helmet. */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Deerfield Beach" />
      <meta name="geo.position" content="26.2890;-80.0940" />
      <meta name="ICBM" content="26.2890, -80.0940" />

      {/* description, canonical, OG title/description/url/image, Twitter, and
          hreflang tags are managed via useEffect above on the static tags
          shipped in index.html — keeps the static HTML covered for non-JS
          crawlers AND avoids duplicate tags. */}
      
      {/* Homepage schemas */}
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(cleaningServiceSchema)}
        </script>
      )}
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      )}
      {/* videoSchema render removed — see comment above its definition.
          Restore alongside the schema once a real video URL exists. */}

      {/* Non-home pages get a simplified business reference */}
      {!isHome && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "additionalType": "https://schema.org/CleaningService",
            "@id": `${WEBSITE}/#business`,
            "name": BUSINESS_NAME,
            "url": WEBSITE,
            "telephone": PHONE
          })}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {blogPostingSchema && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {cityLocalBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(cityLocalBusinessSchema)}
        </script>
      )}
      {additionalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(additionalSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOSchema;
