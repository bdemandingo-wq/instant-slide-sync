// Single source of truth for pricing across HeroEstimator, PricingCalculator,
// and BookingForm. Tier data is loaded from the `service_pricing` table at
// runtime; this module only owns the catalog metadata and the math.

import { supabase } from "@/integrations/supabase/client";

export type ServiceKey =
  | "standard"
  | "deep"
  | "moveinout"
  | "postconstruction"
  | "carpets"
  | "upholstery";

export interface ServiceMeta {
  key: ServiceKey;
  label: string;
  /** If true, the service has tiered pricing in `service_pricing`. */
  tiered: boolean;
}

/** Canonical service catalog — used in Hero, Calculator, BookingForm, Services. */
export const SERVICES: ServiceMeta[] = [
  { key: "standard", label: "Standard Cleaning", tiered: true },
  { key: "deep", label: "Deep Cleaning", tiered: true },
  { key: "moveinout", label: "Move In/Out", tiered: true },
  { key: "postconstruction", label: "Post-Construction", tiered: true },
  { key: "carpets", label: "Carpet Cleaning", tiered: false },
  { key: "upholstery", label: "Upholstery Cleaning", tiered: false },
];

export const getServiceMeta = (key: string): ServiceMeta | undefined =>
  SERVICES.find((s) => s.key === key);

export interface FrequencyOpt {
  key: string;
  label: string;
  /** Discount applied to the base service price ONLY (never to add-ons). */
  baseDiscount: number;
}

/**
 * Frequency discounts. Per business rule, ONLY apply to Standard cleans.
 * Deep / Move-In/Out / Post-Construction are typically one-time and the
 * UI hides the frequency selector for those services.
 */
export const FREQUENCIES: FrequencyOpt[] = [
  { key: "onetime",  label: "One-Time",   baseDiscount: 0 },
  { key: "monthly",  label: "Monthly",    baseDiscount: 0.05 },
  { key: "biweekly", label: "Bi-Weekly",  baseDiscount: 0.15 },
  { key: "weekly",   label: "Weekly",     baseDiscount: 0.20 },
];

/**
 * Add-on definition. `unit` controls quantity behavior:
 * - "flat":          single checkbox; total = basePrice
 * - "per_pet" | "per_blind" | "per_load" | "per_window":
 *                    quantity stepper (1-20); total = basePrice × qty
 */
export type AddOnUnit =
  | "flat"
  | "per_pet"
  | "per_blind"
  | "per_load"
  | "per_window";

export interface AddOnDef {
  id: string;
  label: string;
  basePrice: number;
  unit: AddOnUnit;
  /** Display label shown next to the quantity stepper, e.g. "per pet". */
  unitLabel?: string;
}

export const ADD_ONS: AddOnDef[] = [
  { id: "inside_oven",       label: "Inside Oven",            basePrice: 50, unit: "flat" },
  { id: "inside_fridge",     label: "Inside Fridge",          basePrice: 50, unit: "flat" },
  { id: "inside_dishwasher", label: "Inside Dishwasher",      basePrice: 50, unit: "flat" },
  { id: "pet_hair",          label: "Extra Pet Hair Shed",    basePrice: 25, unit: "per_pet",    unitLabel: "per pet" },
  { id: "window_blinds",     label: "Wet Wipe Window Blinds", basePrice: 10, unit: "per_blind",  unitLabel: "per blind" },
  { id: "laundry",           label: "Wash & Fold Laundry",    basePrice: 25, unit: "per_load",   unitLabel: "per load" },
  { id: "dishes",            label: "Sink of Dishes",         basePrice: 25, unit: "flat" },
  { id: "windows",           label: "Interior Windows",       basePrice: 6,  unit: "per_window", unitLabel: "per window" },
];

export const isUnitAddOn = (a: AddOnDef): boolean => a.unit !== "flat";

export const PRICE_FLOOR = 99;
export const PRICE_CAP = 5000;

/** Raw sqft slider config — used by Hero & Calculator. */
export const SQFT_MIN = 500;
export const SQFT_MAX = 10000;
export const SQFT_STEP = 100;
export const SQFT_DEFAULT = 1250;

/** Sqft above this requires extrapolation + custom-quote confirmation. */
export const SQFT_EXTRAPOLATE_ABOVE = 6000;

/** Per-sqft rate used when sqft > SQFT_EXTRAPOLATE_ABOVE. */
export const EXTRAPOLATE_RATE_PER_SQFT: Record<ServiceKey, number> = {
  standard: 0.130,
  deep: 0.240,
  moveinout: 0.280,
  postconstruction: 0.420,
  carpets: 0,
  upholstery: 0,
};

/**
 * Per-sqft cleaning rate used to estimate how long a job will take.
 * Returns sqft/minute. Hours = sqft / (rate * 60).
 */
export const TIME_SQFT_PER_MIN: Record<ServiceKey, number> = {
  standard: 8,
  deep: 5,
  moveinout: 4,
  postconstruction: 2.5,
  carpets: 0,
  upholstery: 0,
};

export function estimateHours(service: ServiceKey, sqft: number): number | null {
  const rate = TIME_SQFT_PER_MIN[service];
  if (!rate) return null;
  return sqft / (rate * 60);
}

export function formatHours(h: number): string {
  if (h < 1) {
    const mins = Math.max(15, Math.round(h * 60 / 15) * 15);
    return `${mins} min`;
  }
  // Round to nearest 0.25 hour
  const rounded = Math.round(h * 4) / 4;
  const whole = Math.floor(rounded);
  const frac = rounded - whole;
  const fracLabel = frac === 0 ? "" : frac === 0.25 ? "¼" : frac === 0.5 ? "½" : "¾";
  const out = whole > 0 ? `${whole}${fracLabel}` : `${fracLabel || "0"}`;
  return `${out} hour${rounded === 1 ? "" : "s"}`;
}

/**
 * What's included per service (verbatim copy — do not modify wording).
 */
export const SERVICE_INCLUSIONS: Record<ServiceKey, string[]> = {
  standard: [
    "Dusting all reachable surfaces",
    "Vacuuming carpets and rugs",
    "Mopping all hard floors",
    "Cleaning kitchen counters, stovetop exterior, and sinks",
    "Cleaning bathrooms (toilets, tubs, showers, sinks, mirrors)",
    "Emptying trash bins",
    "Making beds (linens left by client)",
    "General tidying",
  ],
  deep: [
    "Everything in Standard, PLUS:",
    "Walls (spot cleaning)",
    "Baseboards",
    "Reachable ceiling fans",
    "Inside of oven and fridge",
    "Light fixtures",
    "Sliding door tracks",
    "Detailed bathroom scrubbing",
    "Detailed kitchen degreasing",
  ],
  moveinout: [
    "Everything in Deep, PLUS:",
    "Inside of all cabinets and drawers",
    "Inside dishwasher",
    "Window sills",
    "Door frames",
    "Light switches and outlet covers",
  ],
  postconstruction: [
    "Everything in Move-In/Out, PLUS:",
    "Removing paint chippings",
    "Removing construction dust from all surfaces",
    "Vacuuming inside vents and registers",
    "Wiping down all newly installed fixtures",
  ],
  carpets: [],
  upholstery: [],
};

/**
 * Add-ons baked into the base price for each service.
 * Render as checked + disabled with an "Included" badge; contribute $0 to total.
 */
export const AUTO_INCLUDED_ADDONS: Record<ServiceKey, string[]> = {
  standard: [],
  deep: ["inside_oven", "inside_fridge"],
  moveinout: ["inside_oven", "inside_fridge", "inside_dishwasher"],
  postconstruction: ["inside_oven", "inside_fridge", "inside_dishwasher"],
  carpets: [],
  upholstery: [],
};

/** Services that allow recurring frequency discounts. */
export const SUPPORTS_FREQUENCY: ServiceKey[] = ["standard"];
export const supportsFrequency = (s: ServiceKey): boolean =>
  SUPPORTS_FREQUENCY.includes(s);

// ----- DB tier loading + caching -----

interface PricingTier {
  service_type: string;
  tier_index: number;
  label: string;
  max_sqft: number;
  base_price: number;
}

let tierCache: PricingTier[] | null = null;
let tierCachePromise: Promise<PricingTier[]> | null = null;

export async function loadPricingTiers(): Promise<PricingTier[]> {
  if (tierCache) return tierCache;
  if (tierCachePromise) return tierCachePromise;
  tierCachePromise = (async () => {
    // Retry with exponential backoff on transient failures so a single
    // network blip doesn't leave the booking form showing "Pricing
    // unavailable" until the user refreshes. Stops after 3 attempts
    // so a sustained outage falls through to the empty-array banner
    // path.
    const delays = [0, 600, 1500];
    let lastError: unknown = null;
    for (const ms of delays) {
      if (ms > 0) await new Promise((r) => setTimeout(r, ms));
      try {
        const { data, error } = await supabase
          .from("service_pricing")
          .select("service_type, tier_index, label, max_sqft, base_price")
          .eq("is_active", true)
          .order("service_type")
          .order("tier_index");
        if (error || !data) {
          lastError = error;
          continue;
        }
        tierCache = data as PricingTier[];
        return tierCache;
      } catch (err) {
        lastError = err;
      }
    }
    console.error("[loadPricingTiers] failed after retries", lastError);
    tierCachePromise = null;
    return [];
  })();
  return tierCachePromise;
}

/**
 * Resolve the base price for a given (service, sqft).
 * - For sqft <= 6000: pick smallest tier whose max_sqft covers the request.
 * - For sqft > 6000: extrapolate using EXTRAPOLATE_RATE_PER_SQFT.
 * Returns null if the service is not tiered (custom-quote service).
 */
export function resolveTierBasePrice(
  tiers: PricingTier[],
  service: ServiceKey,
  sqft: number,
): number | null {
  const meta = getServiceMeta(service);
  if (!meta || !meta.tiered) return null;

  if (sqft > SQFT_EXTRAPOLATE_ABOVE) {
    const rate = EXTRAPOLATE_RATE_PER_SQFT[service] ?? 0;
    return Math.round(sqft * rate);
  }

  const subset = tiers
    .filter((t) => t.service_type === service)
    .sort((a, b) => a.max_sqft - b.max_sqft);
  if (subset.length === 0) return null;
  const match = subset.find((t) => sqft <= t.max_sqft) ?? subset[subset.length - 1];
  return Number(match.base_price);
}

export type AddOnQuantities = Record<string, number>;

export interface PriceBreakdown {
  basePrice: number;
  baseAfterDiscount: number;
  addOnsTotal: number;
  total: number;
  /** True if this service has no tiered pricing (carpets/upholstery). */
  isCustom: boolean;
  /** True if sqft is above the extrapolation threshold — needs phone confirmation. */
  needsConfirmation: boolean;
  /** Estimated range string (low–high) for display. */
  range: string;
}

export function computePrice(
  tiers: PricingTier[],
  opts: {
    service: ServiceKey;
    sqft: number;
    frequency: string;
    addOnIds: string[];
    /** Quantity per add-on id. Defaults to 1 for unit add-ons; ignored for flat. */
    addOnQuantities?: AddOnQuantities;
  },
): PriceBreakdown {
  const meta = getServiceMeta(opts.service);
  const isCustom = !meta?.tiered;

  if (isCustom) {
    return {
      basePrice: 0,
      baseAfterDiscount: 0,
      addOnsTotal: 0,
      total: 0,
      isCustom: true,
      needsConfirmation: false,
      range: "Custom",
    };
  }

  const basePrice = resolveTierBasePrice(tiers, opts.service, opts.sqft) ?? 0;
  const needsConfirmation = opts.sqft > SQFT_EXTRAPOLATE_ABOVE;

  // Frequency discounts only apply to services that support it (Standard).
  const allowFreqDiscount = supportsFrequency(opts.service);
  const freq = FREQUENCIES.find((f) => f.key === opts.frequency) ?? FREQUENCIES[0];
  const discount = allowFreqDiscount ? freq.baseDiscount : 0;
  const baseAfterDiscount = basePrice * (1 - discount);

  // Auto-included add-ons are baked into the base price → skip them in the sum.
  const autoIncluded = new Set(AUTO_INCLUDED_ADDONS[opts.service] ?? []);
  const addOnsTotal = opts.addOnIds.reduce((sum, id) => {
    if (autoIncluded.has(id)) return sum;
    const a = ADD_ONS.find((x) => x.id === id);
    if (!a) return sum;
    const qty = a.unit === "flat"
      ? 1
      : Math.max(1, Math.min(20, Math.round(opts.addOnQuantities?.[id] ?? 1)));
    return sum + a.basePrice * qty;
  }, 0);

  let total = baseAfterDiscount + addOnsTotal;
  total = Math.max(PRICE_FLOOR, Math.min(PRICE_CAP, total));
  total = Math.round(total);

  // Display range: ±10% around total
  const low = Math.round(total * 0.9);
  const high = Math.round(total * 1.1);
  const range = `$${low}–$${high}`;

  return {
    basePrice,
    baseAfterDiscount,
    addOnsTotal,
    total,
    isCustom: false,
    needsConfirmation,
    range,
  };
}
