(globalThis as any).localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const { computePrice } = await import("./src/lib/pricing");
const { ServiceKey } = await import("./src/lib/pricing");

const tiers = [
  { service_type: "standard", tier_index: 0, label: "up to 750 sf", max_sqft: 750, base_price: 150 },
  { service_type: "standard", tier_index: 1, label: "up to 1000 sf", max_sqft: 1000, base_price: 150 },
  { service_type: "standard", tier_index: 2, label: "up to 1250 sf", max_sqft: 1250, base_price: 163 },
  { service_type: "standard", tier_index: 8, label: "up to 3000 sf", max_sqft: 3000, base_price: 390 },
  { service_type: "deep", tier_index: 0, label: "up to 750 sf", max_sqft: 750, base_price: 200 },
];

const scenarios = [
  { service: "standard" as import("./src/lib/pricing").ServiceKey, sqft: 750, frequency: "weekly", addOnIds: [], label: "750sf standard, weekly, no add-ons" },
  { service: "standard" as import("./src/lib/pricing").ServiceKey, sqft: 750, frequency: "weekly", addOnIds: ["inside_oven"], label: "750sf standard, weekly, with $50 oven" },
  { service: "standard" as import("./src/lib/pricing").ServiceKey, sqft: 3000, frequency: "weekly", addOnIds: [], label: "3000sf standard, weekly" },
  { service: "deep" as import("./src/lib/pricing").ServiceKey, sqft: 750, frequency: "onetime", addOnIds: [], label: "750sf deep clean, one-time" },
];

for (const s of scenarios) {
  const result = computePrice(tiers, {
    service: s.service,
    sqft: s.sqft,
    frequency: s.frequency,
    addOnIds: s.addOnIds,
  });
  console.log(`${s.label}:`);
  console.log(`  basePrice=${result.basePrice}, baseAfterDiscount=${result.baseAfterDiscount}, addOnsTotal=${result.addOnsTotal}, total=${result.total}`);
  console.log(`  range=${result.range}`);
}
