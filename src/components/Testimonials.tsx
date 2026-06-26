import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const testimonials = [
  {
    name: "Maria G.",
    location: "Fort Lauderdale",
    rating: 5,
    text: "Clean Collective has been cleaning my home for 6 months now. Always on time, thorough, and friendly. My house has never looked better!",
  },
  {
    name: "Robert T.",
    location: "Boca Raton",
    rating: 5,
    text: "Used their move-out cleaning service and got my full deposit back. They cleaned areas I didn't even think about. Highly recommend!",
  },
  {
    name: "Sandra L.",
    location: "Miami Beach",
    rating: 5,
    text: "As a busy mom of 3, Clean Collective is a lifesaver. The bi-weekly service keeps our home spotless and gives me back my weekends.",
  },
  {
    name: "David R.",
    location: "Pompano Beach",
    rating: 5,
    text: "Their move-in cleaning was so thorough, my landlord actually complimented it. Booked again immediately.",
  },
  {
    name: "Jennifer M.",
    location: "Coral Springs",
    rating: 5,
    text: "I was nervous about letting someone into my home but their background-checked team made me feel completely at ease. 5 stars.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Rating summary */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
          </div>
          <span className="text-lg font-semibold text-foreground">4.9</span>
          <span className="text-muted-foreground">from 138 reviews</span>
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Real People. Real Clean Homes.
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Join hundreds of happy South Florida homeowners who trust Clean Collective.
        </p>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-snap-x pb-4 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[320px] md:w-[380px] bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow scroll-snap-center"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full font-medium">
                  Verified Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Google Reviews CTA */}
        <div className="text-center mt-10 space-y-3">
          <p className="text-sm text-muted-foreground">
            Trusted by homeowners across South Florida ⭐ 4.9 on Google
          </p>
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJ49KSUfgd2YgRH2RMjA6X9jM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-input bg-background text-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            See All Reviews on Google
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