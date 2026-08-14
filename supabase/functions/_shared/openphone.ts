// Shared OpenPhone helpers used by every function that sends SMS.
// Resolves our OpenPhone phone-number ID at runtime instead of hardcoding
// a stale id from the old TidyWise account.

const OPENPHONE_BASE = "https://api.openphone.com/v1";

// Our Clean Collective OpenPhone number.
export const CLEAN_COLLECTIVE_NUMBER = "+15618612752";

let cachedNumberId: string | null = null;
let cachedForKey: string | null = null;

export async function resolveOpenPhoneNumberId(
  apiKey: string,
  desiredNumber: string = CLEAN_COLLECTIVE_NUMBER,
): Promise<string | null> {
  if (cachedNumberId && cachedForKey === apiKey) return cachedNumberId;

  try {
    const res = await fetch(`${OPENPHONE_BASE}/phone-numbers`, {
      headers: { Authorization: apiKey },
    });
    if (!res.ok) {
      console.error("OpenPhone phone-numbers lookup failed:", res.status, await res.text());
      return null;
    }
    const body: any = await res.json().catch(() => ({}));
    const list: any[] = body?.data ?? body?.phoneNumbers ?? [];
    const norm = (v: unknown) => String(v ?? "").replace(/\D/g, "");
    const target = norm(desiredNumber);
    const match = list.find((n) => norm(n?.phoneNumber ?? n?.number ?? n?.e164) === target);
    if (!match?.id) {
      console.error(
        `OpenPhone number ${desiredNumber} not found in account. Available:`,
        list.map((n) => n?.phoneNumber ?? n?.number),
      );
      return null;
    }
    cachedNumberId = match.id as string;
    cachedForKey = apiKey;
    return cachedNumberId;
  } catch (err) {
    console.error("resolveOpenPhoneNumberId error:", err);
    return null;
  }
}

export async function sendOpenPhoneSms(opts: {
  apiKey: string;
  fromId: string;
  to: string;
  content: string;
}): Promise<{ ok: boolean; id: string | null; error: string | null; raw: string }> {
  try {
    const res = await fetch(`${OPENPHONE_BASE}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: opts.apiKey },
      body: JSON.stringify({ content: opts.content, from: opts.fromId, to: [opts.to] }),
    });
    const raw = await res.text().catch(() => "");
    let body: any = {};
    try { body = raw ? JSON.parse(raw) : {}; } catch { /* ignore */ }
    if (!res.ok) {
      return { ok: false, id: null, error: `HTTP ${res.status}: ${raw.slice(0, 400)}`, raw };
    }
    return { ok: true, id: body?.data?.id ?? body?.id ?? null, error: null, raw };
  } catch (err: any) {
    return { ok: false, id: null, error: err?.message ?? String(err), raw: "" };
  }
}
