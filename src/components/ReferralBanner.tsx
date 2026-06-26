import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReferralBanner = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-foreground/10 mb-2">
            <Gift className="w-7 h-7 text-secondary-foreground" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
            Tell a Friend. Earn $25.
          </h2>
          <p className="text-secondary-foreground/90 text-lg max-w-lg mx-auto">
            Love CLEAN COLLECTIVE? Share it. When a friend books their first clean, you both get $25 off your next service. No limits — refer as many people as you want.
          </p>
          <Button
            size="lg"
            className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-semibold text-lg px-8 py-6 group"
            asChild
          >
            <Link to="/referral-program" className="flex items-center gap-2">
              Get My Referral Link
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferralBanner;