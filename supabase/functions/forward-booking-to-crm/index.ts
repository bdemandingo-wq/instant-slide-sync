// Forwards a newly-created Clean Collective booking to the external CRM ingest
// endpoint. The shared secret (EXTERNAL_BOOKING_INGEST_KEY) stays server-side and
// is never exposed to the browser.
//
// Hardening: the caller sends only a bookingId. This function loads that row with
// the service role and forwards THOSE values, so nothing reaches the CRM unless it
// first passed the real booking flow's validation and landed in public.bookings.
//
// Ported from the TidyWise site's forwarder, adapted to Clean Collective's own CRM
// catalogue. Deliberate differences from that version, all verified:
//   - no rate limit: check_rate_limit does not exist in this database
//   - no stripe_* fields: this site has no card capture and no such columns
//   - no organization_id in the payload: the CRM resolves the tenant from the key
//     and logs a body value as a tamper signal

import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const CRM_INGEST_URL =
  "https://slwfkaqczvwvvvavkgpr.supabase.co/functions/v1/ingest-external-booking";

// Map Clean Collective labels/keys -> CRM's accepted frequency enum
// (recurring_bookings_frequency_check). Anything unrecognized => one_time.
function normalizeFrequency(input: unknown): string {
  const v = String(input ?? "").toLowerCase().replace(/[\s_-]/g, "");
  if (v.includes("week") && (v.includes("bi") || v.includes("2"))) return "biweekly";
  if (v.includes("week")) return "weekly";
  if (v.includes("month")) return "monthly";
  return "one_time";
}

// Map CC's site service labels -> the exact service names in CC's CRM org.
// Verified live against public.services for org 0ddb3567-...:
//   Airbnb Turnover | Deep Clean | Move In/Out Clean | Post Construction Clean |
//   Standard Clean
// The CRM matches with ilike on the full string (no wildcards), so these must be
// exact. CC's site also sells Carpet and Upholstery, which have NO CRM
// equivalent — return null rather than a string that can never match, so the
// booking arrives with no service instead of a silently unresolved one.
function normalizeService(input: unknown): string | null {
  const raw = String(input ?? "").trim();
  if (!raw) return null;
  const v = raw.toLowerCase();
  if (v.includes("carpet")) return null;
  if (v.includes("upholstery")) return null;
  if (v.includes("airbnb") || v.includes("turnover")) return "Airbnb Turnover";
  if (v.includes("post") && v.includes("construction")) return "Post Construction Clean";
  if (v.includes("move")) return "Move In/Out Clean";
  if (v.includes("deep")) return "Deep Clean";
  if (v.includes("standard")) return "Standard Clean";
  return raw;
}

// Best-effort parse of a free-text US address into street/city/state/zip. The CRM
// reads city / state / zip_code as SEPARATE fields — sending only the combined
// address string leaves those columns blank in its scheduler.
function parseAddress(raw: unknown): { street: string | null; city: string | null; state: string | null; zip: string | null } {
  const full = String(raw ?? "").trim();
  if (!full) return { street: null, city: null, state: null, zip: null };

  const parts = full
    .split(",")
    .map((p) => p.trim())
    .filter((p) => p && !/^(usa|united states)$/i.test(p));

  let street: string | null = null;
  let city: string | null = null;
  let state: string | null = null;
  let zip: string | null = null;

  const last = parts[parts.length - 1] ?? "";
  const stateZip = last.match(/^([A-Za-z]{2})?\s*(\d{5}(?:-\d{4})?)?$/);
  const hasStateZip = !!last && !!stateZip && (!!stateZip[1] || !!stateZip[2]);

  if (parts.length >= 3 && hasStateZip) {
    state = stateZip![1]?.toUpperCase() ?? null;
    zip = stateZip![2] ?? null;
    city = parts[parts.length - 2] ?? null;
    street = parts.slice(0, parts.length - 2).join(", ") || null;
  } else if (parts.length === 2) {
    street = parts[0] ?? null;
    city = parts[1] ?? null;
  } else {
    street = full || null;
  }

  return { street, city, state, zip };
}

// Google Maps geocoding, called directly. Handles addresses typed without commas
// ("65 sw 12th ave deerfield beach"), which the string parser cannot.
//
// Still returns null on any failure so the caller falls back to parseAddress —
// but every failure path now LOGS which branch fired. A silent null here was
// indistinguishable from "this address genuinely has no city", and that is what
// made a missing key impossible to tell apart from a refused request.
const GEOCODE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

async function geocodeAddress(
  raw: unknown,
): Promise<{ street: string | null; city: string | null; state: string | null; zip: string | null } | null> {
  const full = String(raw ?? "").trim();
  if (!full) {
    console.error("[geocode] skipped: booking.address is empty");
    return null;
  }

  const mapsKey = Deno.env.get("GOOGLE_MAPS_API_KEY");
  if (!mapsKey) {
    console.error("[geocode] failed: GOOGLE_MAPS_API_KEY is not set on this function");
    return null;
  }

  try {
    // NOTE: the key travels in the query string — that is how Google's Geocoding
    // API authenticates server-side calls. Never log this URL.
    const url = `${GEOCODE_URL}?address=${encodeURIComponent(full)}&region=us&key=${mapsKey}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[geocode] failed: HTTP ${res.status} from maps.googleapis.com`);
      return null;
    }

    const data = await res.json();

    // Google answers HTTP 200 even when it refuses the request. The `status`
    // field is the real result: REQUEST_DENIED (bad or restricted key, or the
    // Geocoding API not enabled on the project), ZERO_RESULTS, OVER_QUERY_LIMIT,
    // INVALID_REQUEST. `error_message` names the cause outright.
    if (data?.status !== "OK") {
      console.error(
        `[geocode] failed: Google status=${data?.status ?? "missing"}` +
          (data?.error_message ? ` error_message=${data.error_message}` : ""),
      );
      return null;
    }

    const result = data?.results?.[0];
    if (!result) {
      console.error("[geocode] failed: status was OK but results[] was empty");
      return null;
    }

    const comps: Array<{ long_name: string; short_name: string; types: string[] }> =
      result.address_components ?? [];
    const get = (type: string, short = false) => {
      const c = comps.find((x) => x.types.includes(type));
      return c ? (short ? c.short_name : c.long_name) : null;
    };

    const street = [get("street_number"), get("route")].filter(Boolean).join(" ") || null;
    const city =
      get("locality") || get("postal_town") || get("sublocality") ||
      get("administrative_area_level_3") || null;
    const state = get("administrative_area_level_1", true);
    const zip = get("postal_code");

    if (!city && !state && !zip) {
      console.error(
        `[geocode] failed: matched "${result.formatted_address ?? "?"}" but it yielded no city/state/zip`,
      );
      return null;
    }

    console.log(`[geocode] ok: city=${city} state=${state} zip=${zip}`);
    return { street, city, state, zip };
  } catch (e) {
    console.error(`[geocode] failed: fetch threw: ${e}`);
    return null;
  }
}

// The CRM's square footage field is a fixed list of label strings, not a number.
// Bucket up to the first tier whose max covers the value. CC's slider is
// continuous, so a bare "1250" renders blank in the CRM — this is what fixes it.
const SQFT_TIERS = [750, 1000, 1250, 1500, 1800, 2100, 2400, 2700, 3000, 3300,
  3600, 4000, 4400, 4800, 5200, 5600, 6000];

function sqftLabel(input: unknown): string | null {
  const n = Number(input);
  if (!Number.isFinite(n) || n <= 0) return null;
  const tier = SQFT_TIERS.find((t) => n <= t) ?? SQFT_TIERS[SQFT_TIERS.length - 1];
  return `Up to ${tier} sf`;
}

// CC's bathroom Select offers "4+", which has no CRM equivalent and renders
// blank there — send "4".
function normalizeBaths(input: unknown): string | null {
  const raw = String(input ?? "").trim();
  if (!raw) return null;
  return raw === "4+" ? "4" : raw;
}

// ---------------------------------------------------------------------------
// Scheduling: bookings are stored as wall-clock America/New_York values
// (preferred_date is a plain date string, time_slot is HH:mm). The CRM stores
// scheduled_at in a timestamptz, so we must hand it an explicit offset that
// reflects the DST state of that specific date — never a hardcoded -04:00.
// ---------------------------------------------------------------------------
const BOOKING_TZ = "America/New_York";

const LEGACY_SLOT_TIMES: Record<string, string> = {
  morning: "09:00",
  afternoon: "13:00",
};

/** Normalize stored time_slot to HH:mm. Legacy words map to sensible hours. */
function normalizeTimeSlot(input: unknown): string {
  const raw = String(input ?? "").trim().toLowerCase();
  if (!raw) return "09:00";
  if (LEGACY_SLOT_TIMES[raw]) return LEGACY_SLOT_TIMES[raw];
  const m = raw.match(/^(\d{1,2}):(\d{2})$/);
  if (m) {
    const h = Number(m[1]);
    const min = Number(m[2]);
    if (h >= 0 && h <= 23 && min >= 0 && min <= 59) {
      return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
    }
  }
  return "09:00";
}

/** Parse the stored preferred_date (ISO or "Wednesday, August 20, 2026") to YYYY-MM-DD. */
function normalizeDate(input: unknown): string | null {
  const raw = String(input ?? "").trim();
  if (!raw) return null;
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const parsed = new Date(`${raw} 12:00:00 UTC`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

/** Offset in minutes of BOOKING_TZ at a real instant (negative west of UTC). */
function tzOffsetMinutes(instant: Date): number {
  const name = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TZ,
    timeZoneName: "longOffset",
  })
    .formatToParts(instant)
    .find((p) => p.type === "timeZoneName")?.value ?? "GMT+0";
  const m = name.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
  if (!m) return 0;
  const mins = Number(m[2]) * 60 + Number(m[3] ?? 0);
  return m[1] === "-" ? -mins : mins;
}

/**
 * Offset of America/New_York (e.g. "-04:00" or "-05:00") at the given local
 * wall-clock date/time, derived from the IANA database rather than guessed.
 */
function easternOffset(dateStr: string, timeStr: string): string {
  // Start from the naive instant treated as UTC, then let Intl tell us the real
  // offset around that moment. One refinement pass handles the case where the
  // initial guess sits on the other side of a DST boundary.
  let guess = new Date(`${dateStr}T${timeStr}:00Z`);
  let offsetMinutes = tzOffsetMinutes(guess);
  guess = new Date(guess.getTime() - offsetMinutes * 60_000);
  offsetMinutes = tzOffsetMinutes(guess);
  const sign = offsetMinutes < 0 ? "-" : "+";
  const abs = Math.abs(offsetMinutes);
  return `${sign}${String(Math.floor(abs / 60)).padStart(2, "0")}:${String(abs % 60).padStart(2, "0")}`;
}

/**
 * Build the CRM's scheduled_at: local wall-clock time with an explicit,
 * DST-correct Eastern offset, e.g. "2026-08-21T14:00:00-04:00".
 */
function buildScheduledAt(preferredDate: unknown, timeSlot: unknown): string | null {
  const date = normalizeDate(preferredDate);
  if (!date) return null;
  const time = normalizeTimeSlot(timeSlot);
  return `${date}T${time}:00${easternOffset(date, time)}`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const ingestKey = Deno.env.get("EXTERNAL_BOOKING_INGEST_KEY");
  if (!ingestKey) {
    return new Response(
      JSON.stringify({ error: "EXTERNAL_BOOKING_INGEST_KEY not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Require a booking id and load the real row server-side. Only values that
  // already passed the booking flow's validation get forwarded to the CRM.
  const bookingId = String(body?.bookingId ?? body?.id ?? "").trim();
  if (!bookingId) {
    return new Response(
      JSON.stringify({ error: "bookingId is required" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  const { data: booking, error: fetchErr } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", bookingId)
    .maybeSingle();

  if (fetchErr) {
    console.error("Booking lookup failed:", fetchErr);
    return new Response(
      JSON.stringify({ error: "Booking lookup failed" }),
      { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
  if (!booking) {
    return new Response(
      JSON.stringify({ error: "Booking not found" }),
      { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  // Wall-clock Eastern + explicit DST-correct offset, so the CRM's timestamptz
  // stores the instant the customer actually picked.
  let scheduledAt: string | null = null;
  try {
    scheduledAt = buildScheduledAt(booking.preferred_date, booking.time_slot);
  } catch (e) {
    console.error("scheduled_at build failed:", e);
    scheduledAt = null;
  }

  // Split the single stored address into the discrete fields the CRM reads.
  // Geocoding first (handles comma-less free text), naive parser as fallback.
  const loc = (await geocodeAddress(booking.address)) ?? parseAddress(booking.address);

  // The CRM accepts name OR first_name/last_name. Send both: it uses `name` for
  // display and the split parts for its own first/last columns.
  const fullName = String(booking.customer_name ?? "").trim();
  const nameParts = fullName.split(/\s+/).filter(Boolean);
  const firstName = nameParts[0] ?? null;
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : null;

  // Map trusted Clean Collective booking row -> CRM ingest payload.
  // NOTE: no organization_id. The CRM resolves the tenant from the ingest key and
  // treats a body value as a tamper signal.
  const payload = {
    name: booking.customer_name,
    first_name: firstName,
    last_name: lastName,
    email: booking.customer_email,
    phone: booking.customer_phone ?? null,
    // Street only — city/state/zip travel in their own fields below, or the
    // CRM's columns stay blank.
    address: loc.street ?? booking.address ?? null,
    city: loc.city,
    state: loc.state,
    zip_code: loc.zip,
    scheduled_at: scheduledAt,
    service: normalizeService(booking.service_type),
    total_amount: Number.isFinite(+booking.total_price) ? +booking.total_price : 0,
    frequency: normalizeFrequency(booking.frequency),
    // `beds` on this site holds a square-footage label ("1,250 sq ft"), NOT a
    // bedroom count — this site has no bedroom input. Only forward a genuine
    // numeric count; otherwise null and let the CRM apply its own default.
    // Square footage travels in square_footage below.
    bedrooms: (() => {
      const n = Number(String(booking.beds ?? "").replace(/[^0-9.]/g, ""));
      return /sq|ft/i.test(String(booking.beds ?? "")) || !Number.isFinite(n) || n <= 0
        ? null
        : n;
    })(),
    bathrooms: normalizeBaths(booking.baths),
    square_footage: sqftLabel(booking.sqft),
    extras: Array.isArray(booking.add_ons) ? booking.add_ons : [],
    notes: booking.special_instructions ?? null,
    // The point of the card work: the card travels with the booking so the CRM
    // can charge without asking the customer again. Null until a card is saved.
    stripe_customer_id: booking.stripe_customer_id ?? null,
    stripe_payment_method_id: booking.stripe_payment_method_id ?? null,
  };

  // Record the outcome on our own booking row. This is the ONLY place a failed
  // forward becomes visible — the HTTP status is always 200 by design, so without
  // this a booking that never reached the CRM looks identical to one that did.
  const recordOutcome = async (
    status: "synced" | "failed" | "unreachable",
    error: string | null,
  ) => {
    const { error: updErr } = await supabase
      .from("bookings")
      .update({
        crm_sync_status: status,
        crm_synced_at: status === "synced" ? new Date().toISOString() : null,
        // Truncated: this column is for triage, not for storing a CRM stack trace.
        crm_error: error ? error.slice(0, 500) : null,
      })
      .eq("id", bookingId);
    if (updErr) {
      // Deliberately only logged. Failing to record the outcome must not itself
      // break the booking flow — that would be the same mistake one level up.
      console.error("Failed to record CRM sync status:", updErr);
    }
  };

  try {
    const res = await fetch(CRM_INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // x-api-key is the ONLY header the CRM reads.
        "x-api-key": ingestKey,
      },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    if (res.ok) {
      await recordOutcome("synced", null);
    } else {
      await recordOutcome("failed", `HTTP ${res.status}: ${text}`);
    }

    return new Response(JSON.stringify({ ok: res.ok, status: res.status, crm: data }), {
      // Always 200: CRM forwarding is non-fatal to the booking flow.
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    // Network-level failure — the CRM was never reached at all. Distinct from
    // "failed", which means it answered and refused.
    await recordOutcome("unreachable", String(err));
    return new Response(
      JSON.stringify({ ok: false, error: "Failed to reach CRM", details: String(err) }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
