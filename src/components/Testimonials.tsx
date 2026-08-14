import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Real People. Real Clean Homes.
        </h2>

        <div className="text-center mt-10 space-y-3">
          <a
            href="https://g.page/r/CffF6_KIHT4JEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-input bg-background text-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            See our reviews on Google
          </a>
        </div>

        {/* CTA */}
        <div className="text-center mt-6 space-y-3">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            📍 Serving 30+ cities across South Florida →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
