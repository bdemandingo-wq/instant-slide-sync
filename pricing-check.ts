globalThis.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
} as unknown as Storage;

const { computePrice, SERVICE_PRICE_FLOOR, PRICE_CAP } = await import("./src/lib/pricing.ts");

const standardTiers = [
  { service_type: "standard", tier_index: 0, label: "up to 750 sf", max_sqft: 750, base_price: 150 },
  { service_type: "standard", tier_index: 8, label: "up to 3000 sf", max_sqft: 3000, base_price: 390 },
];

const deepTiers = [
  { service_type: "deep", tier_index: 0, label: "up to 750 sf", max_sqft: 750, base_price: 200 },
];

const examples = [
  { tiers: standardTiers, service: "standard" as const, sqft: 750, frequency: "weekly", addOnIds: [] },
  { tiers: standardTiers, service: "standard" as const, sqft: 750, frequency: "weekly", addOnIds: ["inside_oven"] },
  { tiers: standardTiers, service: "standard" as const, sqft: 3000, frequency: "weekly", addOnIds: [] },
  { tiers: deepTiers, service: "deep" as const, sqft: 750, frequency: "onetime", addOnIds: [] },
];

for (const ex of examples) {
  const result = computePrice(ex.tiers, ex);
  console.log(
    `${ex.sqft}sf ${ex.service} ${ex.frequency}${ex.addOnIds.length ? " + oven" : ""}:`
  );
  console.log(`  basePrice: $${result.basePrice}`);
  console.log(`  baseAfterDiscount (floored): $${result.baseAfterDiscount.toFixed(2)}`);
  console.log(`  addOnsTotal: $${result.addOnsTotal}`);
  console.log(`  total: $${result.total}`);
  console.log(`  range: ${result.range}`);
}

console.log("\nSERVICE_PRICE_FLOOR:", SERVICE_PRICE_FLOOR);
console.log("PRICE_CAP:", PRICE_CAP);
