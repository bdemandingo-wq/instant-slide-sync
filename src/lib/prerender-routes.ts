/**
 * Build-time per-route static HTML generator for tidywisecleaning.com.
 *
 * Reads dist/index.html, walks src/App.tsx to discover every static Route +
 * its page component, opens each component file, regex-extracts the title /
 * description / canonical from its <SEOSchema> JSX, and writes
 * dist/<route>/index.html with those values baked into <title>,
 * <meta name="description">, <link rel="canonical">, og:*, twitter:*.
 *
 * Non-JS crawlers (Encited, ChatGPT, initial Googlebot fetch) see real
 * per-page SEO instead of the homepage placeholder shipped in index.html.
 * React mounts normally over `#root` for real users.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = (typeof _traverse === "function" ? _traverse : (_traverse as any).default) as typeof _traverse;

const BASE_URL = "https://www.tidywisecleaning.com";

const IGNORE_ROUTES = new Set<string>([
  "/auth",
  "/admin",
  "/my-bookings",
  "/confirmation",
  "/booking",
  "*",
]);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type RouteMeta = {
  title: string;
  description: string;
  canonical: string;
};

type Route = {
  path: string;
  componentName: string;
  sourceFile: string;
};

/**
 * Parse App.tsx and return { path, componentName, sourceFile } for every
 * static Route whose element references a lazy-imported component.
 */
function discoverRoutes(projectRoot: string): Route[] {
  const appPath = resolve(projectRoot, "src/App.tsx");
  const source = readFileSync(appPath, "utf-8");
  const ast = parse(source, { sourceType: "module", plugins: ["jsx", "typescript"] });

  const componentImportMap = new Map<string, string>();
  traverse(ast, {
    VariableDeclarator(path) {
      const id = path.node.id;
      if (id.type !== "Identifier") return;
      const init = path.node.init;
      if (!init || init.type !== "CallExpression" || init.callee.type !== "Identifier" || init.callee.name !== "lazy") return;
      const arrow = init.arguments[0];
      if (!arrow || arrow.type !== "ArrowFunctionExpression") return;
      const body = arrow.body;
      if (body.type !== "CallExpression" || body.callee.type !== "Import") return;
      const arg = body.arguments[0];
      if (!arg || arg.type !== "StringLiteral") return;
      componentImportMap.set(id.name, arg.value);
    },
    ImportDeclaration(path) {
      // Also capture eager (non-lazy) default imports — e.g. import Index from "./pages/Index"
      const source = path.node.source.value;
      if (!source.startsWith("./") && !source.startsWith("@/")) return;
      for (const spec of path.node.specifiers) {
        if (spec.type === "ImportDefaultSpecifier") {
          componentImportMap.set(spec.local.name, source);
        }
      }
    },
  });

  const routes: Route[] = [];
  traverse(ast, {
    JSXOpeningElement(path) {
      const nameNode = path.node.name;
      if (nameNode.type !== "JSXIdentifier" || nameNode.name !== "Route") return;

      const pathAttr = path.node.attributes.find(
        (a) => a.type === "JSXAttribute" && a.name.type === "JSXIdentifier" && a.name.name === "path",
      );
      if (!pathAttr || pathAttr.type !== "JSXAttribute" || !pathAttr.value || pathAttr.value.type !== "StringLiteral") return;
      const routePath = pathAttr.value.value;
      if (IGNORE_ROUTES.has(routePath) || routePath.includes(":") || routePath.includes("*")) return;

      const elementAttr = path.node.attributes.find(
        (a) => a.type === "JSXAttribute" && a.name.type === "JSXIdentifier" && a.name.name === "element",
      );
      if (!elementAttr || elementAttr.type !== "JSXAttribute" || !elementAttr.value || elementAttr.value.type !== "JSXExpressionContainer") return;
      const expr = elementAttr.value.expression;
      if (expr.type !== "JSXElement") return;
      const elName = expr.openingElement.name;
      if (elName.type !== "JSXIdentifier") return;
      if (elName.name === "Navigate") return;

      const componentName = elName.name;
      const importPath = componentImportMap.get(componentName);
      if (!importPath) return;

      const sourceFile = importPath.replace(/^@\//, "src/").replace(/^\.\//, "src/");
      routes.push({ path: routePath, componentName, sourceFile });
    },
  });

  return routes;
}

/**
 * Pull title / description / canonical out of either a <SEOSchema /> OR
 * <SEOHead /> JSX block. Both component names appear in this codebase;
 * the prior regex only matched SEOSchema, so pages using SEOHead (FAQ,
 * Sitemap, ContractorRateSheet, etc.) silently inherited the homepage's
 * meta in their static HTML — costing them SEO-specific titles.
 *
 * SEOSchema uses prop names pageTitle/pageDescription/canonicalUrl.
 * SEOHead uses title/description/canonical. We try both shapes per
 * file so a future renamed prop on either component still parses.
 */
function extractMetaFromComponent(projectRoot: string, sourceFile: string, routePath: string): RouteMeta | null {
  const candidates = [
    resolve(projectRoot, `${sourceFile}.tsx`),
    resolve(projectRoot, `${sourceFile}.ts`),
    resolve(projectRoot, `${sourceFile}/index.tsx`),
  ];
  const file = candidates.find((c) => existsSync(c));
  if (!file) return null;

  const src = readFileSync(file, "utf-8");

  // Match whichever SEO component shows up first.
  const seoSchemaMatch = src.match(/<SEOSchema[\s\S]*?\/>/);
  const seoHeadMatch = src.match(/<SEOHead[\s\S]*?\/>/);
  const block = seoSchemaMatch?.[0] ?? seoHeadMatch?.[0];
  if (!block) return null;

  // SEOSchema prop names: pageTitle, pageDescription, canonicalUrl.
  // SEOHead prop names:   title,     description,     canonical.
  const titleMatch =
    block.match(/pageTitle\s*=\s*"([^"]+)"/) ||
    block.match(/pageTitle\s*=\s*\{?\s*`([^`]+)`/) ||
    block.match(/\btitle\s*=\s*"([^"]+)"/) ||
    block.match(/\btitle\s*=\s*\{?\s*`([^`]+)`/);
  const descMatch =
    block.match(/pageDescription\s*=\s*"([^"]+)"/) ||
    block.match(/\bdescription\s*=\s*"([^"]+)"/);
  const canonicalMatch =
    block.match(/canonicalUrl\s*=\s*"([^"]+)"/) ||
    block.match(/\bcanonical\s*=\s*"([^"]+)"/);

  if (!titleMatch || !descMatch) return null;

  const canonical = canonicalMatch?.[1] ?? `${BASE_URL}${routePath}`;

  return {
    title: titleMatch[1].trim(),
    description: descMatch[1].trim(),
    canonical: canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`,
  };
}

/**
 * Replace the OG / Twitter / canonical / title / description tags in the
 * source index.html with per-route values. Keeps tag order intact.
 */
function patchHead(html: string, meta: RouteMeta): string {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = meta.canonical;
  const ogImage = `${BASE_URL}/og-image.webp`;

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta name="description" content="${description}" />`,
  );

  // og:* — title / description / url / image
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta property="og:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta property="og:description" content="${description}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta property="og:url" content="${canonical}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta property="og:image" content="${ogImage}" />`,
  );

  // twitter:*
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta name="twitter:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?\s*>/i,
    `<meta name="twitter:image" content="${ogImage}" />`,
  );

  // canonical
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?\s*>/i,
    `<link rel="canonical" href="${canonical}" />`,
  );

  return out;
}

function routeToFile(distDir: string, route: string): string {
  if (route === "/") return join(distDir, "index.html");
  return join(distDir, route.replace(/^\//, ""), "index.html");
}

export function prerenderRoutes(projectRoot: string): { written: number; skipped: number } {
  const distDir = resolve(projectRoot, "dist");
  const sourceHtmlPath = join(distDir, "index.html");
  if (!existsSync(sourceHtmlPath)) {
    throw new Error(`prerender: ${sourceHtmlPath} not found — has vite build run?`);
  }
  const sourceHtml = readFileSync(sourceHtmlPath, "utf-8");

  const routes = discoverRoutes(projectRoot);
  let written = 0;
  let skipped = 0;
  for (const route of routes) {
    const meta = extractMetaFromComponent(projectRoot, route.sourceFile, route.path);
    if (!meta) {
      skipped++;
      continue;
    }
    const html = patchHead(sourceHtml, meta);
    const dest = routeToFile(distDir, route.path);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, html);
    written++;
  }
  return { written, skipped };
}

const isDirectInvocation =
  typeof process !== "undefined" &&
  process.argv[1] &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1]);

if (isDirectInvocation) {
  const projectRoot = resolve(process.cwd());
  const { written, skipped } = prerenderRoutes(projectRoot);
  console.log(`[prerender] wrote ${written} routes, skipped ${skipped}`);
}
