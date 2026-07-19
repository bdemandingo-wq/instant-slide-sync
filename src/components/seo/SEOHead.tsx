import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaJson?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const WEBSITE = "https://www.cleancollective.net";
const DEFAULT_OG_IMAGE = `${WEBSITE}/og-image.webp`;

/**
 * Force every canonical URL to the www apex (https://www.cleancollective.net).
 * Accepts absolute URLs (www or non-www, http or https) and relative paths.
 * This guarantees Google never sees a non-www canonical, even if a caller
 * passes a stale value or a relative path.
 */
const normalizeCanonical = (input: string): string => {
  if (!input) return WEBSITE;
  // Strip protocol + any host variant (www / non-www, http / https) to get the path
  const path = input
    .replace(/^https?:\/\/(www\.)?cleancollective\.com/i, "")
    .replace(/^https?:\/\/[^/]+/i, ""); // any other accidental host
  const cleanPath = path.startsWith("/") || path === "" ? path : `/${path}`;
  return `${WEBSITE}${cleanPath}`;
};

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
  schemaJson,
}: SEOHeadProps) => {
  const image = ogImage || DEFAULT_OG_IMAGE;
  const canonicalUrl = normalizeCanonical(canonical);
  // hreflang self-references the URL actually being viewed, not the canonical.
  // Lets the tag stay self-referencing on pages whose canonical points elsewhere.
  const hreflangUrl = typeof window !== 'undefined'
    ? `${WEBSITE}${window.location.pathname}`
    : canonicalUrl;
  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const schemas = schemaJson
    ? Array.isArray(schemaJson)
      ? schemaJson
      : [schemaJson]
    : [];

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

    setMeta('meta[name="description"]', description);
    setLinkHref('link[rel="canonical"]', canonicalUrl);

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', image);

    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);

    setLinkHref('link[rel="alternate"][hreflang="en-us"]', hreflangUrl);
    setLinkHref('link[rel="alternate"][hreflang="x-default"]', hreflangUrl);
  }, [title, description, canonicalUrl, hreflangUrl, image]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="robots" content={robotsContent} />

      {/* description, canonical, OG/Twitter, and hreflang tags are managed via
          useEffect above on the static tags shipped in index.html — keeps the
          static HTML covered for non-JS crawlers AND avoids duplicate tags. */}

      {/* Schema JSON-LD */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
