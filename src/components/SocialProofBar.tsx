import { Star, Shield, UserCheck } from "lucide-react";
import { useState, useEffect } from "react";

const microTestimonials = [
  '"CLEAN COLLECTIVE has been cleaning my home for 6 months now. Always on time, thorough, and friendly." — Maria G., Fort Lauderdale',
  '"Used their move-out cleaning service and got my full deposit back. Highly recommend!" — Robert T., Boca Raton',
  '"As a busy mom of 3, CLEAN COLLECTIVE is a lifesaver. The bi-weekly service keeps our home spotless." — Sandra L., Miami Beach',
  '"Their move-in cleaning was so thorough, my landlord actually complimented it." — David R., Pompano Beach',
  '"Background-checked team made me feel completely at ease. 5 stars." — Jennifer M., Coral Springs',
];

const SocialProofBar = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % microTestimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="social-proof" className="py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-semibold">Rated 4.9 on Google</span>
            <span className="opacity-80">· 127+ Verified Reviews</span>
          </div>

          {/* Rotating testimonial */}
          <p className="text-sm opacity-90 max-w-xl text-center md:text-right transition-opacity duration-300">
            {microTestimonials[current]}
          </p>

          {/* Trust badges */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span>Google Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <Shield className="w-4 h-4" />
              <span>Insured</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <UserCheck className="w-4 h-4" />
              <span>Background Checked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;