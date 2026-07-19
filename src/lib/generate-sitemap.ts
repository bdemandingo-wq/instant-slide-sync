import { readFileSync, writeFileSync, statSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

// Handle ESM/CJS interop for @babel/traverse
const traverse = (typeof _traverse === "function" ? _traverse : (_traverse as any).default) as typeof _traverse;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, "../..");

// ======== CONFIGURATION ========
const BASE_URL = "https://cleancollectives.com";
const ROUTER_FILE_PATH = resolve(__dirname, "../App.tsx");
const OUTPUT_PATH = resolve(__dirname, "../../public/sitemap.xml");

// Routes to exclude from the sitemap (internal/auth pages)
const IGNORE_PATHS: string[] = [
  "/auth",
  "/admin",
  "/my-bookings",
  "/confirmation",
  "/booking",
  "*",
];
// ================================

function generateSitemap() {
  const source = readFileSync(ROUTER_FILE_PATH, "utf-8");

  const ast = parse(source, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  // Build a map of ComponentName -> source file path from `lazy(() => import("..."))` declarations
  const componentImportMap = new Map<string, string>();
  traverse(ast, {
    VariableDeclarator(path) {
      const id = path.node.id;
      if (id.type !== "Identifier") return;
      const init = path.node.init;
      if (
        !init ||
        init.type !== "CallExpression" ||
        init.callee.type !== "Identifier" ||
        init.callee.name !== "lazy"
      ) return;
      const arrow = init.arguments[0];
      if (!arrow || arrow.type !== "ArrowFunctionExpression") return;
      const body = arrow.body;
      if (body.type !== "CallExpression" || body.callee.type !== "Import") return;
      const arg = body.arguments[0];
      if (!arg || arg.type !== "StringLiteral") return;
      componentImportMap.set(id.name, arg.value);
    },
  });

  type DiscoveredRoute = { path: string; componentName: string | null };
  const routes: DiscoveredRoute[] = [];

  traverse(ast, {
    JSXOpeningElement(path) {
      const nameNode = path.node.name;
      if (nameNode.type !== "JSXIdentifier" || nameNode.name !== "Route") return;

      const pathAttr = path.node.attributes.find(
        (attr) =>
          attr.type === "JSXAttribute" &&
          attr.name.type === "JSXIdentifier" &&
          attr.name.name === "path",
      );
      if (
        !pathAttr ||
        pathAttr.type !== "JSXAttribute" ||
        !pathAttr.value ||
        pathAttr.value.type !== "StringLiteral"
      ) return;

      const routePath = pathAttr.value.value;

      if (
        IGNORE_PATHS.includes(routePath) ||
        routePath.includes(":") ||
        routePath.includes("*")
      ) return;

      const elementAttr = path.node.attributes.find(
        (attr) =>
          attr.type === "JSXAttribute" &&
          attr.name.type === "JSXIdentifier" &&
          attr.name.name === "element",
      );

      let componentName: string | null = null;
      if (
        elementAttr &&
        elementAttr.type === "JSXAttribute" &&
        elementAttr.value &&
        elementAttr.value.type === "JSXExpressionContainer"
      ) {
        const expr = elementAttr.value.expression;
        if (expr.type === "JSXElement") {
          const elName = expr.openingElement.name;
          if (elName.type === "JSXIdentifier") {
            if (elName.name === "Navigate") return; // skip redirects
            componentName = elName.name;
          }
        }
      }

      routes.push({ path: routePath, componentName });
    },
  });

  // Assign priorities based on route depth/type
  function getPriority(route: string): string {
    if (route === "/") return "1.0";
    if (["/service-areas", "/standard-cleaning", "/deep-cleaning", "/move-in-out-cleaning", "/carpet-cleaning", "/upholstery-cleaning", "/airbnb-cleaning", "/office-cleaning", "/post-construction-cleaning"].includes(route)) return "0.9";
    if (route.match(/^\/(broward|miami-dade|palm-beach)-.*cleaning$/)) return "0.9";
    if (route === "/blog" || route === "/faq") return "0.8";
    if (route.startsWith("/blog/")) return "0.7";
    if (["/referral-program", "/apply"].includes(route)) return "0.6";
    if (route === "/sitemap") return "0.3";
    return "0.8";
  }

  function getChangefreq(route: string): string {
    if (route.startsWith("/blog/")) return "monthly";
    if (["/faq", "/referral-program", "/apply", "/sitemap", "/contractor-rate-sheet"].includes(route)) return "monthly";
    return "weekly";
  }

  const today = new Date().toISOString().split("T")[0];

  // Resolve lastmod from the actual page component's file mtime when we can,
  // so blog posts/landing pages reflect when the source was last edited
  // instead of every URL sharing today's bulk-static date.
  function resolveLastmod(componentName: string | null): string {
    if (!componentName) return today;
    const importPath = componentImportMap.get(componentName);
    if (!importPath) return today;
    // importPath is relative to App.tsx (e.g. "./pages/Blog" or "@/components/...")
    // We only handle "./..." paths since those are the page components.
    if (!importPath.startsWith("./")) return today;
    const candidates = [".tsx", ".ts", ".jsx", ".js"].map((ext) =>
      resolve(dirname(ROUTER_FILE_PATH), importPath + ext),
    );
    for (const file of candidates) {
      if (existsSync(file)) {
        try {
          return statSync(file).mtime.toISOString().split("T")[0];
        } catch {
          /* fall through */
        }
      }
    }
    return today;
  }

  const urls = routes
    .map(({ path: route, componentName }) => {
      const lastmod = resolveLastmod(componentName);
      return `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${getChangefreq(route)}</changefreq>\n    <priority>${getPriority(route)}</priority>\n  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  writeFileSync(OUTPUT_PATH, sitemap, "utf-8");
  console.log(`✅ Sitemap generated with ${routes.length} URLs → ${OUTPUT_PATH}`);
}

generateSitemap();
