import { useId, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, Mail, MapPin, Shield, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackPhoneCall } from "@/lib/trackPhoneCall";
import { COMPARE_CLEANING_SERVICES } from "@/data/siteIndex";


// FooterAccordionSection — CSS-driven accordion that collapses on mobile
// and is permanently expanded on md+. Uses the grid-template-rows: 0fr → 1fr
// trick so height transitions smoothly without JS measuring the content.
//
// Critical SEO property: the children are ALWAYS in the DOM. Collapsing
// only changes grid-template-rows + overflow, never unmounts. Google sees
// every <a href> on first paint regardless of mobile open state — no JS
// execution required. Confirmed crawlable behavior for hidden-via-CSS
// content.
interface FooterAccordionSectionProps {
  title: string;
  children: ReactNode;
  /** Outer-section utility classes (col-span, border-t, etc). */
  className?: string;
  /** Override the default font-display semibold heading. */
  headingClassName?: string;
}

function FooterAccordionSection({
  title,
  children,
  className,
  headingClassName,
}: FooterAccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <section
      className={cn(
        // Per-accordion divider on mobile only — separates one accordion
        // from the next within a multi-section row. Desktop relies on the
        // outer section's border-t for grouping.
        "border-b border-background/20 md:border-b-0",
        className,
      )}
    >
      <h3 className="m-0">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className={cn(
            "w-full flex items-center justify-between gap-3 text-left",
            // Tap target on mobile, decorative heading on desktop.
            "py-4 md:py-0 md:mb-4 md:cursor-default",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/40 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded-sm",
            headingClassName ?? "font-display font-semibold",
          )}
        >
          <span>{title}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "w-5 h-5 shrink-0 text-background/60 transition-transform duration-200 md:hidden",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </h3>
      <div
        id={contentId}
        className={cn(
          // grid-template-rows from 0fr to 1fr is the modern smooth-height
          // pattern. The inner `min-h-0 overflow-hidden` clips collapsed
          // content. Desktop forces 1fr so the section is always open.
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          "md:grid-rows-[1fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden md:overflow-visible">
          <div className="pb-4 md:pb-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* flex-col + gap-y-12 gives every direct child a uniform 48px gap.
            No mb/mt math, no compounding spacing, no overlap on any
            viewport. Each child is its own <section>. */}
        <div className="flex flex-col gap-y-8 md:gap-y-12">
          {/* ── 1. Brand + primary 4-section grid ────────────────────── */}
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-0 md:gap-y-8">
              {/* Brand — always visible, no accordion */}
              <div className="lg:col-span-1 mb-6 md:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display text-xl font-bold">TIDYWISE</span>
                </div>
                <p className="text-background/70 text-sm mb-2">
                  A Clean Home. A Clear Mind.
                </p>
                <p className="text-background/60 text-xs mb-4">
                  Professional cleaning services for South Florida homes. Licensed, bonded, and insured.
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href="tel:+15615718725"
                    onClick={() => trackPhoneCall("footer")}
                    className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (561) 571-8725
                  </a>
                  <a
                    href="mailto:support@tidywisecleaning.com"
                    className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    support@tidywisecleaning.com
                  </a>
                  <p className="flex items-center gap-2 text-background/70">
                    <MapPin className="w-4 h-4" />
                    Deerfield Beach, FL
                  </p>
                </div>
              </div>

              <FooterAccordionSection title="Our Services">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/standard-cleaning" className="text-background/70 hover:text-background transition-colors">Standard Cleaning</Link></li>
                  <li><Link to="/deep-cleaning" className="text-background/70 hover:text-background transition-colors">Deep Cleaning</Link></li>
                  <li><Link to="/move-in-out-cleaning" className="text-background/70 hover:text-background transition-colors">Move In/Out Cleaning</Link></li>
                  <li><Link to="/carpet-cleaning" className="text-background/70 hover:text-background transition-colors">Carpet Cleaning</Link></li>
                  <li><Link to="/upholstery-cleaning" className="text-background/70 hover:text-background transition-colors">Upholstery Cleaning</Link></li>
                  <li><Link to="/post-construction-cleaning" className="text-background/70 hover:text-background transition-colors">Post-Construction Cleaning</Link></li>
                  <li><Link to="/office-cleaning" className="text-background/70 hover:text-background transition-colors">Office Cleaning</Link></li>
                  <li><Link to={{ pathname: "/", hash: "#booking" }} className="text-background/70 hover:text-background transition-colors">Get a Quote</Link></li>
                </ul>
              </FooterAccordionSection>

              <FooterAccordionSection title="Broward County">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/fort-lauderdale-cleaning" className="text-background/70 hover:text-background transition-colors">Fort Lauderdale</Link></li>
                  <li><Link to="/hollywood-cleaning" className="text-background/70 hover:text-background transition-colors">Hollywood</Link></li>
                  <li><Link to="/pompano-beach-cleaning" className="text-background/70 hover:text-background transition-colors">Pompano Beach</Link></li>
                  <li><Link to="/coral-springs-cleaning" className="text-background/70 hover:text-background transition-colors">Coral Springs</Link></li>
                  <li><Link to="/pembroke-pines-cleaning" className="text-background/70 hover:text-background transition-colors">Pembroke Pines</Link></li>
                  <li><Link to="/broward-county-cleaning" className="text-background/70 hover:text-background transition-colors">View All Broward →</Link></li>
                </ul>
              </FooterAccordionSection>

              <FooterAccordionSection title="More Cities">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/boca-raton-cleaning" className="text-background/70 hover:text-background transition-colors">Boca Raton</Link></li>
                  <li><Link to="/west-palm-beach-cleaning" className="text-background/70 hover:text-background transition-colors">West Palm Beach</Link></li>
                  <li><Link to="/miami-cleaning" className="text-background/70 hover:text-background transition-colors">Miami</Link></li>
                  <li><Link to="/miami-beach-cleaning" className="text-background/70 hover:text-background transition-colors">Miami Beach</Link></li>
                  <li><Link to="/delray-beach-cleaning" className="text-background/70 hover:text-background transition-colors">Delray Beach</Link></li>
                  <li><Link to="/service-areas" className="text-background/70 hover:text-background transition-colors">View All Cities →</Link></li>
                </ul>
              </FooterAccordionSection>

              <FooterAccordionSection title="Company">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/service-areas" className="text-background/70 hover:text-background transition-colors">Service Areas</Link></li>
                  <li><Link to="/faq" className="text-background/70 hover:text-background transition-colors">FAQ</Link></li>
                  <li><Link to="/reviews" className="text-background/70 hover:text-background transition-colors">Customer Reviews</Link></li>
                  <li><Link to="/blog" className="text-background/70 hover:text-background transition-colors">Blog & Tips</Link></li>
                  <li><Link to="/house-cleaning-cost-south-florida" className="text-background/70 hover:text-background transition-colors">Pricing Guide</Link></li>
                  <li><Link to="/cleaning-service-alternatives" className="text-background/70 hover:text-background transition-colors">Compare Services</Link></li>
                  <li><Link to="/referral-program" className="text-background/70 hover:text-background transition-colors">Referral Program</Link></li>
                  <li><Link to="/contractor-rate-sheet" className="text-background/70 hover:text-background transition-colors">Contractor Rates</Link></li>
                  <li><Link to="/apply" className="text-background/70 hover:text-background transition-colors">Join Our Team</Link></li>
                </ul>
              </FooterAccordionSection>
            </div>
          </section>

          {/* ── 2. Compare Cleaning Services ─────────────────────────── */}
          <section className="md:border-t md:border-background/20 md:pt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 md:gap-y-8">
              <FooterAccordionSection title="Compare Cleaning Services">
                <ul className="space-y-2 text-sm">
                  {COMPARE_CLEANING_SERVICES.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterAccordionSection>

              <FooterAccordionSection
                title="Explore More"
                className="md:col-span-2"
              >
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/service-areas" className="text-background/70 hover:text-background transition-colors">
                      View all service areas →
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-background/70 hover:text-background transition-colors">
                      Browse all cleaning tips &amp; city guides →
                    </Link>
                  </li>
                  <li>
                    <Link to="/sitemap" className="text-background/70 hover:text-background transition-colors">
                      Full sitemap →
                    </Link>
                  </li>
                </ul>
              </FooterAccordionSection>
            </div>
          </section>


          {/* ── 5. Trust signals — always visible, full width ────────── */}
          <section
            aria-label="Trust signals"
            className="border-t border-background/20 pt-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                <span>Eco-Friendly</span>
              </div>
              <Link to="/broward-county-cleaning" className="hover:text-background transition-colors">
                Broward County
              </Link>
              <span aria-hidden="true" className="hidden sm:inline text-background/30">|</span>
              <Link to="/palm-beach-county-cleaning" className="hover:text-background transition-colors">
                Palm Beach County
              </Link>
              <span aria-hidden="true" className="hidden sm:inline text-background/30">|</span>
              <Link to="/miami-dade-cleaning" className="hover:text-background transition-colors">
                Miami-Dade County
              </Link>
            </div>
          </section>

          {/* ── 6. Disclaimer — always visible ───────────────────────── */}
          <section className="border-t border-background/20 pt-6">
            <p className="text-background/50 text-xs text-center max-w-3xl mx-auto">
              TIDYWISE is a licensed and insured cleaning service operating in
              Broward, Miami-Dade, and Palm Beach County, Florida. All cleaners
              are background-checked and professionally trained.
            </p>
          </section>

          {/* ── 7. Bottom bar — always visible ───────────────────────── */}
          <div className="border-t border-background/20 pt-6 pb-20 md:pb-16 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 relative z-50">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} TIDYWISE Cleaning Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/sitemap" className="text-background/70 hover:text-background transition-colors">
                Sitemap
              </Link>
              <Link to="/auth" className="text-background/70 hover:text-background transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
