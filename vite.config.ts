import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";

function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    buildEnd() {
      try {
        execSync("npx tsx src/lib/generate-sitemap.ts", { stdio: "inherit" });
      } catch (e) {
        console.error("⚠️ Sitemap generation failed:", e);
      }
    },
  };
}

// Emits per-route static HTML (dist/<route>/index.html) with title /
// description / canonical / og / twitter pulled from each page's <SEOSchema>.
// Makes non-JS crawlers (Encited, ChatGPT, initial Googlebot fetch) see real
// per-page SEO instead of the homepage placeholder served to the SPA shell.
function prerenderPlugin(): Plugin {
  return {
    name: "prerender-routes",
    apply: "build",
    closeBundle() {
      try {
        execSync("npx tsx src/lib/prerender-routes.ts", { stdio: "inherit" });
      } catch (e) {
        console.error("⚠️ Prerender failed:", e);
      }
    },
  };
}

// All SEO-critical routes to prerender as static HTML
// This makes them visible to Googlebot, AI crawlers, and social preview scrapers
const PRERENDER_ROUTES = [
  // Core pages
  "/",
  "/blog",
  "/service-areas",
  "/faq",
  "/sitemap",

  // Service pages
  "/deep-cleaning",
  "/standard-cleaning",
  "/move-in-out-cleaning",
  "/carpet-cleaning",
  "/upholstery-cleaning",
  "/airbnb-cleaning",
  "/office-cleaning",
  "/post-construction-cleaning",

  // County pages
  "/broward-county-cleaning",
  "/miami-dade-cleaning",
  "/palm-beach-county-cleaning",

  // City pages — Broward County
  "/fort-lauderdale-cleaning",
  "/hollywood-cleaning",
  "/pompano-beach-cleaning",
  "/plantation-cleaning",
  "/sunrise-cleaning",
  "/davie-cleaning",
  "/pembroke-pines-cleaning",
  "/weston-cleaning",
  "/deerfield-beach-cleaning",
  "/miramar-cleaning",
  "/lauderhill-cleaning",
  "/tamarac-cleaning",
  "/coral-springs-cleaning",
  "/coconut-creek-cleaning",
  "/margate-cleaning",
  "/hallandale-beach-cleaning",
  "/parkland-cleaning",
  "/cooper-city-cleaning",
  "/oakland-park-cleaning",
  "/wilton-manors-cleaning",

  // City pages — Palm Beach County
  "/boca-raton-cleaning",
  "/west-palm-beach-cleaning",
  "/delray-beach-cleaning",
  "/boynton-beach-cleaning",
  "/lake-worth-cleaning",
  "/jupiter-cleaning",
  "/palm-beach-gardens-cleaning",
  "/wellington-cleaning",
  "/royal-palm-beach-cleaning",

  // City pages — Miami-Dade County
  "/miami-cleaning",
  "/miami-beach-cleaning",
  "/hialeah-cleaning",
  "/coral-gables-cleaning",
  "/north-miami-cleaning",
  "/north-miami-beach-cleaning",
  "/aventura-cleaning",
  "/sunny-isles-beach-cleaning",
  "/doral-cleaning",
  "/homestead-cleaning",
  "/miami-gardens-cleaning",

  // Blog posts
  "/blog/move-in-out-cleaning-checklist",
  "/blog/deep-cleaning-vs-standard-cleaning",
  "/blog/pet-friendly-cleaning-tips",
  "/blog/hurricane-season-cleaning-prep",
  "/blog/how-to-prepare-for-cleaning-service",
  "/blog/broward-cost-guide",
  "/blog/miami-permit-rules",
  "/blog/palm-beach-seasonal-discounts",
  "/blog/spring-cleaning-guide-south-florida",
  "/blog/eco-friendly-cleaning-products",
  "/blog/allergy-free-home-cleaning",
  "/blog/holiday-cleaning-checklist",
  "/blog/bathroom-deep-cleaning-guide",
  "/blog/kitchen-cleaning-hacks",
  "/blog/airbnb-turnover-cleaning-tips",
  "/blog/mold-prevention-florida-homes",
  "/blog/condo-cleaning-rules-south-florida",
  "/blog/post-construction-cleaning-guide",
  "/blog/house-cleaning-fort-lauderdale",
  "/blog/deep-cleaning-service-miami",
  "/blog/move-out-cleaning-boca-raton",
  "/blog/house-cleaning-west-palm-beach",
  "/blog/airbnb-cleaning-fort-lauderdale",
  "/blog/move-in-cleaning-miami",

  // Competitor comparison pages (highest AI citation value)
  "/molly-maid-alternative",
  "/merry-maids-alternative",
  "/handy-alternative",
  "/the-maids-alternative",
  "/cleaning-service-alternatives",

  // Pricing / cost guide
  "/house-cleaning-cost-south-florida",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    sitemapPlugin(),
    prerenderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
