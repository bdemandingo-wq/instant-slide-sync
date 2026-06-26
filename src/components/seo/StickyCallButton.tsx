import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { trackPhoneCall } from "@/lib/trackPhoneCall";

const StickyCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const phoneNumber = "(561) 571-8725";
  const telLink = "tel:+15615718725";

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide entirely on the booking flow & confirmation pages so it doesn't cover form CTAs
  const path = location.pathname;
  const isBookingFlow = path === "/booking" || path.startsWith("/confirmation");
  if (isBookingFlow) return null;
  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-auto md:right-6 z-40 animate-fade-in"
      role="complementary"
      aria-label="Quick contact"
    >
      {/* Mobile: Full-width bar */}
      <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3 flex gap-2">
        <Button
          size="lg"
          className="flex-1 bg-primary text-primary-foreground font-semibold"
          asChild
        >
          <a href={telLink} onClick={() => trackPhoneCall("sticky_mobile")} className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span>Call Now</span>
          </a>
        </Button>
        <Button
          size="lg"
          className="flex-1 bg-primary text-primary-foreground font-semibold"
          asChild
        >
          <a href="#booking" className="flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <span>Get Quote</span>
          </a>
        </Button>
      </div>

      {/* Desktop: Floating button */}
      <div className="hidden md:block">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground shadow-elevated font-semibold text-lg py-6 px-8 hover:scale-105 transition-transform"
          asChild
        >
          <a 
            href={telLink} 
            onClick={() => trackPhoneCall("sticky_desktop")}
            className="flex items-center justify-center gap-3"
            aria-label={`Call CLEAN COLLECTIVE now at ${phoneNumber}`}
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span>Call Now: {phoneNumber}</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCallButton;
