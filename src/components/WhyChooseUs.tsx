import { Leaf, ShieldCheck, Clock, DollarSign, Trophy, Smartphone } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use only non-toxic, environmentally safe cleaning products that are safe for kids and pets.",
  },
  {
    icon: ShieldCheck,
    title: "Background-Checked Pros",
    description: "Every team member is thoroughly vetted, trained, and insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your schedule, available 7 days a week with same-day booking options.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hourly surprises. You see the full price before you book — what you see is what you pay.",
  },
  {
    icon: Trophy,
    title: "Satisfaction Guarantee",
    description: "If you're not happy with our work, we'll re-clean for free. No questions asked.",
  },
  {
    icon: Smartphone,
    title: "Easy Online Booking",
    description: "Book in 2 minutes. Get instant confirmation. Manage everything from your phone.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Clean Collective?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just another cleaning service. We're your partners in creating a healthier, happier home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;