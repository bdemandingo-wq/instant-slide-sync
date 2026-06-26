// Site-wide internal linking groups for the footer.
// Goal: every page links to every orphaned page so Google can crawl them.
//
// Each export is rendered as its own footer section. Adding a new page
// means appending one line here; the footer updates automatically.
//
// All paths verified to resolve to real routes in src/App.tsx.

export interface FooterLink {
  /** Display name (anchor text). */
  name: string;
  /** Full path, e.g. "/standard-cleaning". */
  path: string;
}

// ---- Group A: All Cleaning Services -----------------------------------------
export const ALL_CLEANING_SERVICES: ReadonlyArray<FooterLink> = [
  { name: "Standard Cleaning",          path: "/standard-cleaning" },
  { name: "Deep Cleaning",              path: "/deep-cleaning" },
  { name: "Move In/Out Cleaning",       path: "/move-in-out-cleaning" },
  { name: "Carpet Cleaning",            path: "/carpet-cleaning" },
  { name: "Upholstery Cleaning",        path: "/upholstery-cleaning" },
  { name: "Post-Construction Cleaning", path: "/post-construction-cleaning" },
  { name: "Office Cleaning",            path: "/office-cleaning" },
];

// ---- Group B: All Service Areas (city /[city]-cleaning pages) ---------------
// Note: /wilton-manors-cleaning is intentionally excluded — that route does
// not exist in App.tsx as of this commit. If it gets added later, append below.
export const CITY_SERVICE_AREAS: ReadonlyArray<FooterLink> = [
  { name: "Fort Lauderdale Cleaning",   path: "/fort-lauderdale-cleaning" },
  { name: "Boca Raton Cleaning",        path: "/boca-raton-cleaning" },
  { name: "Miami Cleaning",             path: "/miami-cleaning" },
  { name: "Miami Beach Cleaning",       path: "/miami-beach-cleaning" },
  { name: "Coral Gables Cleaning",      path: "/coral-gables-cleaning" },
  { name: "Coral Springs Cleaning",     path: "/coral-springs-cleaning" },
  { name: "Pompano Beach Cleaning",     path: "/pompano-beach-cleaning" },
  { name: "Deerfield Beach Cleaning",   path: "/deerfield-beach-cleaning" },
  { name: "Delray Beach Cleaning",      path: "/delray-beach-cleaning" },
  { name: "Boynton Beach Cleaning",     path: "/boynton-beach-cleaning" },
  { name: "Coconut Creek Cleaning",     path: "/coconut-creek-cleaning" },
  { name: "Davie Cleaning",             path: "/davie-cleaning" },
  { name: "Doral Cleaning",             path: "/doral-cleaning" },
  { name: "Hallandale Beach Cleaning",  path: "/hallandale-beach-cleaning" },
  { name: "Hialeah Cleaning",           path: "/hialeah-cleaning" },
  { name: "Hollywood Cleaning",         path: "/hollywood-cleaning" },
  { name: "Homestead Cleaning",         path: "/homestead-cleaning" },
  { name: "Lake Worth Cleaning",        path: "/lake-worth-cleaning" },
  { name: "Lauderhill Cleaning",        path: "/lauderhill-cleaning" },
  { name: "Miami-Dade County Cleaning", path: "/miami-dade-cleaning" },
  { name: "Miami Gardens Cleaning",     path: "/miami-gardens-cleaning" },
  { name: "Miramar Cleaning",           path: "/miramar-cleaning" },
  { name: "North Miami Cleaning",       path: "/north-miami-cleaning" },
  { name: "North Miami Beach Cleaning", path: "/north-miami-beach-cleaning" },
  { name: "Oakland Park Cleaning",      path: "/oakland-park-cleaning" },
  { name: "Parkland Cleaning",          path: "/parkland-cleaning" },
  { name: "Pembroke Pines Cleaning",    path: "/pembroke-pines-cleaning" },
  { name: "Royal Palm Beach Cleaning",  path: "/royal-palm-beach-cleaning" },
  { name: "Sunny Isles Beach Cleaning", path: "/sunny-isles-beach-cleaning" },
  { name: "Tamarac Cleaning",           path: "/tamarac-cleaning" },
  { name: "Wellington Cleaning",        path: "/wellington-cleaning" },
  { name: "Weston Cleaning",            path: "/weston-cleaning" },
  { name: "Broward County Cleaning",    path: "/broward-county-cleaning" },
  { name: "Cooper City Cleaning",       path: "/cooper-city-cleaning" },
];

// ---- Group C: Compare Cleaning Services -------------------------------------
export const COMPARE_CLEANING_SERVICES: ReadonlyArray<FooterLink> = [
  { name: "CLEAN COLLECTIVE vs Handy",                path: "/handy-alternative" },
  { name: "CLEAN COLLECTIVE vs Merry Maids",          path: "/merry-maids-alternative" },
  { name: "CLEAN COLLECTIVE vs Molly Maid",           path: "/molly-maid-alternative" },
  { name: "CLEAN COLLECTIVE vs The Maids",            path: "/the-maids-alternative" },
  { name: "CLEAN COLLECTIVE vs The Florida Maid",     path: "/the-florida-maid-alternative" },
  { name: "CLEAN COLLECTIVE vs TaskRabbit",           path: "/taskrabbit-alternative" },
  { name: "CLEAN COLLECTIVE vs Amazon Home Services", path: "/amazon-home-services-alternative" },
  { name: "Compare All Cleaning Services",    path: "/cleaning-service-alternatives" },
];

// ---- Group D: Cleaning Tips & Guides (blog posts) ---------------------------
export const CLEANING_TIPS_AND_GUIDES: ReadonlyArray<FooterLink> = [
  { name: "Airbnb Cleaning Fort Lauderdale", path: "/blog/airbnb-cleaning-fort-lauderdale" },
  { name: "Airbnb Turnover Cleaning Tips",   path: "/blog/airbnb-turnover-cleaning-tips" },
  { name: "Allergy-Free Home Cleaning",      path: "/blog/allergy-free-home-cleaning" },
  { name: "Bathroom Deep Cleaning Guide",    path: "/blog/bathroom-deep-cleaning-guide" },
  { name: "Condo Cleaning Rules — South FL", path: "/blog/condo-cleaning-rules-south-florida" },
  { name: "Eco-Friendly Cleaning Products",  path: "/blog/eco-friendly-cleaning-products" },
  { name: "Holiday Cleaning Checklist",      path: "/blog/holiday-cleaning-checklist" },
  { name: "Hurricane Season Cleaning Prep",  path: "/blog/hurricane-season-cleaning-prep" },
  { name: "Miami Permit Rules",              path: "/blog/miami-permit-rules" },
  { name: "Mold Prevention — FL Homes",      path: "/blog/mold-prevention-florida-homes" },
  { name: "Move-In Cleaning Miami",          path: "/blog/move-in-cleaning-miami" },
  { name: "Move In/Out Cleaning Checklist",  path: "/blog/move-in-out-cleaning-checklist" },
  { name: "Move-Out Cleaning Boca Raton",    path: "/blog/move-out-cleaning-boca-raton" },
  { name: "Move-Out Cleaning W. Palm Beach", path: "/blog/move-out-cleaning-west-palm-beach" },
  { name: "Palm Beach Seasonal Discounts",   path: "/blog/palm-beach-seasonal-discounts" },
  { name: "Post-Construction Cleaning Guide", path: "/blog/post-construction-cleaning-guide" },
  { name: "Spring Cleaning Guide — S. FL",   path: "/blog/spring-cleaning-guide-south-florida" },
  { name: "How to Prepare for Cleaning",     path: "/blog/how-to-prepare-for-cleaning-service" },
];
