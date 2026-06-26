import { Check, X, AlertTriangle } from "lucide-react";

const comparisons = [
  { feature: "Instant online pricing", tidywise: true, others: false },
  { feature: "Background-checked cleaners", tidywise: true, others: "warn" },
  { feature: "Satisfaction guarantee", tidywise: true, others: false },
  { feature: "Eco-friendly products", tidywise: true, others: false },
  { feature: "Online booking & reminders", tidywise: true, others: false },
];

const ComparisonTable = () => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
        Clean Collective vs. Other Services
      </h3>
      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-soft">
        {/* Header */}
        <div className="grid grid-cols-3 bg-muted px-4 py-3 text-sm font-semibold">
          <span className="text-muted-foreground">Feature</span>
          <span className="text-center text-primary">Clean Collective</span>
          <span className="text-center text-muted-foreground">Others</span>
        </div>
        {/* Rows */}
        {comparisons.map((row) => (
          <div key={row.feature} className="grid grid-cols-3 px-4 py-3 border-t border-border text-sm">
            <span className="text-foreground">{row.feature}</span>
            <span className="flex justify-center">
              <Check className="w-5 h-5 text-success" />
            </span>
            <span className="flex justify-center">
              {row.others === "warn" ? (
                <AlertTriangle className="w-5 h-5 text-secondary" />
              ) : (
                <X className="w-5 h-5 text-destructive/60" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;