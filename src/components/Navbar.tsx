import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronDown, Phone } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { trackPhoneCall } from "@/lib/trackPhoneCall";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const scrollToBooking = () => {
  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Focus trap for mobile menu when open
  useEffect(() => {
    if (!isOpen) return;
    const container = mobileMenuRef.current;
    if (!container) return;

    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleBookNowClick = () => {
    if (location.pathname === '/') {
      scrollToBooking();
    } else {
      navigate('/');
      setTimeout(() => scrollToBooking(), 100);
    }
  };

  const handlePricingClick = () => {
    if (location.pathname === '/') {
      scrollToBooking();
    } else {
      navigate('/');
      setTimeout(() => scrollToBooking(), 100);
    }
  };

  const navLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: "/#services", label: "Services", isDropdown: true },
    { href: "/#booking", label: "Pricing", isScroll: true },
    { href: "/service-areas", label: "Areas", isRoute: true },
    { href: "/reviews", label: "Reviews", isRoute: true },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: "/faq", label: "FAQ", isRoute: true },
  ];

  const serviceLinks = [
    { href: "/standard-cleaning", label: "Standard Cleaning" },
    { href: "/deep-cleaning", label: "Deep Cleaning" },
    { href: "/move-in-out-cleaning", label: "Move In/Out Cleaning" },
    { href: "/airbnb-cleaning", label: "Airbnb / Vacation Rental" },
    { href: "/upholstery-cleaning", label: "Upholstery Cleaning" },
    { href: "/office-cleaning", label: "Office Cleaning" },
    { href: "/post-construction-cleaning", label: "Post-Construction" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display text-xl font-bold text-foreground">Clean Collective</span>
          </Link>

          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {serviceLinks.map((service) => (
                      <DropdownMenuItem key={service.href} asChild>
                        <Link to={service.href} className="cursor-pointer">
                          {service.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : link.isScroll ? (
                <button
                  key={link.href}
                  onClick={handlePricingClick}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                >
                  {link.label}
                </button>
              ) : link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              )
            ))}
            {user && (
              <Link
                to="/my-bookings"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                <User className="h-4 w-4" />
                My Bookings
              </Link>
            )}
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+15615718725" className="flex items-center gap-1.5" onClick={() => trackPhoneCall("navbar_desktop")}>
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleBookNowClick}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={hamburgerRef}
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="md:hidden py-4 border-t border-border animate-fade-in relative z-[60] bg-background"
          >
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Services section */}
              <div className="py-2">
                <span className="text-foreground font-medium">Services</span>
                <div className="pl-4 mt-2 space-y-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-left"
                onClick={() => { setIsOpen(false); handlePricingClick(); }}
              >
                Pricing
              </button>
              
              <Link
                to="/service-areas"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Service Areas
              </Link>
              <Link
                to="/reviews"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <Link
                to="/blog"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              {user && (
                <Link
                  to="/my-bookings"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4" />
                  My Bookings
                </Link>
              )}
              <div className="flex gap-2 mt-2">
                <Button variant="outline" className="flex-1 border-primary text-primary" asChild>
                  <a href="tel:+15615718725" className="flex items-center justify-center gap-1.5" onClick={() => trackPhoneCall("navbar_mobile")}>
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </Button>
                <Button className="flex-1 bg-primary text-primary-foreground" onClick={() => { setIsOpen(false); handleBookNowClick(); }}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;