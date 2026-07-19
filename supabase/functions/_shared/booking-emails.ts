// Booking email helpers powered by Gmail SMTP (denomailer).
// Auth via a Google Workspace app password stored in the
// GMAIL_APP_PASSWORD secret. Callers wrap sends in try/catch so a
// failing email never blocks SMS or the booking itself.

import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 465;
const SMTP_USER = "support@cleancollectives.com";


export const OWNER_EMAILS = [
  "samuel@cleancollectives.com",
  "howell@cleancollectives.com",
  "support@cleancollectives.com",
];

export const BRAND = {
  pink: "#E08AA7",
  mint: "#93E1B9",
  ink: "#1f2937",
  soft: "#f8fafc",
  from: "Clean Collective <support@cleancollectives.com>",
  phone: "(561) 861-2752",
  supportEmail: "support@cleancollectives.com",
};

export interface BookingSummary {
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  serviceType?: string;
  frequency?: string;
  preferredDate?: string;
  address?: string;
  beds?: string | number;
  baths?: string | number;
  sqft?: number;
  addOns?: string[] | string;
  totalPrice?: string | number;
  specialInstructions?: string | null;
  petInfo?: string | null;
}

function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label: string, value: unknown): string {
  const v = value === undefined || value === null || value === "" ? "—" : value;
  return `<tr><td style="padding:6px 12px 6px 0;color:#64748b;font-size:14px;vertical-align:top;"><span style="color:#64748b;">${esc(label)}</span></td><td style="padding:6px 0;color:${BRAND.ink};font-size:14px;"><span style="color:${BRAND.ink};">${esc(v)}</span></td></tr>`;
}

const HEAD_META = `<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light">`;
const LINK_STYLE = `color:${BRAND.ink};text-decoration:underline;`;

export function renderAdminBookingEmail(b: BookingSummary): { subject: string; html: string } {
  const addOns = Array.isArray(b.addOns) ? b.addOns.join(", ") : (b.addOns || "None");
  const subject = `New booking: ${b.customerName ?? "Customer"} — ${b.serviceType ?? "Cleaning"} on ${b.preferredDate ?? "TBD"}`;
  const html = `<!doctype html><html><head>${HEAD_META}</head><body style="margin:0;background:${BRAND.soft};color:${BRAND.ink};font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.soft};padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;">
<tr><td style="background:${BRAND.pink};padding:20px 28px;color:#1f2937;font-size:20px;font-weight:700;"><span style="color:#1f2937;">New Website Booking</span></td></tr>
<tr><td style="padding:24px 28px;background:#ffffff;">
<p style="margin:0 0 16px;color:${BRAND.ink};font-size:15px;"><span style="color:${BRAND.ink};">A new booking just came in through cleancollectives.com. Details below.</span></p>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;padding:8px 0;">
${row("Customer", b.customerName)}
${row("Phone", b.customerPhone)}
${row("Email", b.customerEmail)}
${row("Service", b.serviceType)}
${row("Frequency", b.frequency)}
${row("Date / Time", b.preferredDate)}
${row("Address", b.address)}
${row("Beds / Baths", `${b.beds ?? "—"} bed · ${b.baths ?? "—"} bath`)}
${row("Sq Ft", b.sqft?.toLocaleString?.() ?? b.sqft)}
${row("Add-ons", addOns)}
${row("Total", typeof b.totalPrice === "number" ? `$${b.totalPrice}` : b.totalPrice)}
${row("Notes", b.specialInstructions)}
${row("Pets", b.petInfo)}
</table>
<p style="margin:20px 0 0;color:#64748b;font-size:13px;"><span style="color:#64748b;">Log in to the admin dashboard to confirm and schedule.</span></p>
</td></tr>
<tr><td style="background:${BRAND.mint};padding:14px 28px;color:${BRAND.ink};font-size:12px;"><span style="color:${BRAND.ink};">Clean Collective · <a href="tel:+15618612752" style="${LINK_STYLE}"><span style="color:${BRAND.ink};">${BRAND.phone}</span></a> · <a href="mailto:${BRAND.supportEmail}" style="${LINK_STYLE}"><span style="color:${BRAND.ink};">${BRAND.supportEmail}</span></a></span></td></tr>
</table></td></tr></table></body></html>`;
  return { subject, html };
}

export function renderCustomerBookingEmail(b: BookingSummary): { subject: string; html: string } {
  const subject = `Your Clean Collective booking is confirmed`;
  const total = typeof b.totalPrice === "number" ? `$${b.totalPrice}` : b.totalPrice;
  const html = `<!doctype html><html><head>${HEAD_META}</head><body style="margin:0;background:${BRAND.soft};color:${BRAND.ink};font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.soft};padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;">
<tr><td style="background:${BRAND.pink};padding:28px;color:#1f2937;text-align:center;">
<div style="font-size:24px;font-weight:700;color:#1f2937;"><span style="color:#1f2937;">Thank you${b.customerName ? `, ${esc(b.customerName)}` : ""}!</span></div>
<div style="margin-top:6px;font-size:15px;color:#1f2937;"><span style="color:#1f2937;">Your cleaning is booked with Clean Collective.</span></div>
</td></tr>
<tr><td style="padding:24px 28px;color:${BRAND.ink};font-size:15px;line-height:1.55;background:#ffffff;">
<p style="margin:0 0 16px;color:${BRAND.ink};"><span style="color:${BRAND.ink};">We're excited to make your home sparkle. Here's a quick summary of your booking:</span></p>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${BRAND.soft};border-radius:8px;padding:12px;">
${row("Service", b.serviceType)}
${row("Date / Time", b.preferredDate)}
${row("Address", b.address)}
${row("Total", total)}
</table>
<h3 style="margin:22px 0 8px;font-size:16px;color:${BRAND.ink};"><span style="color:${BRAND.ink};">What happens next</span></h3>
<ol style="margin:0 0 16px 20px;padding:0;color:${BRAND.ink};font-size:14px;line-height:1.6;">
<li style="color:${BRAND.ink};"><span style="color:${BRAND.ink};">Our team will review your booking and text you a confirmation shortly.</span></li>
<li style="color:${BRAND.ink};"><span style="color:${BRAND.ink};">On the day of service, your cleaner will arrive during your selected arrival window.</span></li>
<li style="color:${BRAND.ink};"><span style="color:${BRAND.ink};">After service, we'll do a quick walkthrough to make sure everything is perfect.</span></li>
</ol>
<div style="margin-top:18px;padding:14px;background:${BRAND.mint};border-radius:8px;color:${BRAND.ink};font-size:14px;">
<span style="color:${BRAND.ink};">Need to change or ask about anything? Call or text <a href="tel:+15618612752" style="${LINK_STYLE}"><strong style="color:${BRAND.ink};"><span style="color:${BRAND.ink};">${BRAND.phone}</span></strong></a> or email <a href="mailto:${BRAND.supportEmail}" style="${LINK_STYLE}"><strong style="color:${BRAND.ink};"><span style="color:${BRAND.ink};">${BRAND.supportEmail}</span></strong></a>.</span>
</div>
</td></tr>
<tr><td style="padding:16px 28px;color:#64748b;font-size:12px;text-align:center;background:#ffffff;border-top:1px solid #e2e8f0;">
<span style="color:#64748b;">Clean Collective · Pompano Beach, FL · ${BRAND.phone}<br/>
You're receiving this because you booked a cleaning on cleancollectives.com.</span>
</td></tr>
</table></td></tr></table></body></html>`;
  return { subject, html };
}


export async function sendGmailEmail(opts: {
  appPassword: string;
  from?: string;
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ ok: boolean; id: string | null; error: string | null }> {
  const client = new SMTPClient({
    connection: {
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      tls: true,
      auth: { username: SMTP_USER, password: opts.appPassword },
    },
  });
  try {
    await client.send({
      from: opts.from ?? BRAND.from,
      to: opts.to,
      subject: opts.subject,
      content: "This email requires an HTML-capable client.",
      html: opts.html,
      replyTo: opts.replyTo,
    });
    return { ok: true, id: null, error: null };
  } catch (err: any) {
    return { ok: false, id: null, error: err?.message ?? String(err) };
  } finally {
    try { await client.close(); } catch { /* ignore */ }
  }
}

