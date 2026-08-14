import { Shield, Award, Leaf, Clock, Star } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "Licensed & Insured",
  },
  {
    icon: Award,
    label: "5-Star Rated",
  },
  {
    icon: Leaf,
    label: "Eco-Friendly",
  },
  {
    icon: Clock,
    label: "Same-Day Quotes",
  },
];

interface TrustBadgesProps {
  variant?: "light" | "dark";
  showReview?: boolean;
}

const TrustBadges = ({ variant = "light", showReview = false }: TrustBadgesProps) => {
  const textColor = variant === "dark" ? "text-foreground" : "text-background";
  const bgColor = variant === "dark" ? "bg-muted" : "bg-background/20";
  const mutedColor = variant === "dark" ? "text-muted-foreground" : "text-background";
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-center gap-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${bgColor} ${textColor} text-sm`}
          >
            <badge.icon className="w-4 h-4" />
            <span className="font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
      
      {showReview && (
        <div className={`flex items-center justify-center gap-2 ${mutedColor} text-sm`}>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
            ))}
          </div>
          <span>See our reviews on Google</span>
        </div>
      )}
    </div>
  );
};

export default TrustBadges;
