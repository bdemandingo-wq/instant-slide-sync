import { Star, Shield, UserCheck } from "lucide-react";

const SocialProofBar = () => {
  return (
    <section id="social-proof" className="py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="https://g.page/r/CffF6_KIHT4JEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <Star className="w-5 h-5 fill-secondary text-secondary" />
            See our reviews on Google
          </a>

          {/* Trust badges */}
          <div className="hidden lg:flex items-center gap-4">
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
