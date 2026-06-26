import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const serviceAreas = [
  {
    county: "Broward County",
    slug: "/broward-county-cleaning",
    cities: ["Fort Lauderdale", "Coral Springs", "Hollywood", "Pompano Beach", "Deerfield Beach"],
  },
  {
    county: "Miami-Dade County",
    slug: "/miami-dade-cleaning",
    cities: ["Miami", "Miami Beach", "Hialeah", "Coral Gables", "Aventura"],
  },
  {
    county: "Palm Beach County",
    slug: "/palm-beach-county-cleaning",
    cities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Boynton Beach", "Jupiter"],
  },
];

const ServiceAreaLinks = () => {
  return (
    <section className="py-16 bg-background" aria-label="Service Areas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Cleaning Services Near You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clean Collective provides <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward County cleaning services</Link>, 
            <Link to="/miami-dade-cleaning" className="text-primary hover:underline ml-1">Miami-Dade cleaning services</Link>, and 
            <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline ml-1">Palm Beach County cleaning services</Link>. 
            Licensed, insured, and ready to transform your space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {serviceAreas.map((area, index) => (
            <Link 
              key={area.county}
              to={area.slug}
              className="group bg-card p-6 rounded-xl shadow-soft border border-border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {area.county}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Top-rated cleaning services in {area.cities.slice(0, 3).join(", ")}, and more.
              </p>
              <span className="text-primary font-medium text-sm group-hover:underline">
                View {area.county} Services →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaLinks;
