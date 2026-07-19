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
  return `<tr><td style="padding:6px 12px 6px 0;color:#64748b;font-size:14px;vertical-align:top;">${esc(label)}</td><td style="padding:6px 0;color:${BRAND.ink};font-size:14px;">${esc(v)}</td></tr>`;
}

export function renderAdminBookingEmail(b: BookingSummary): { subject: string; html: string } {
  const addOns = Array.isArray(b.addOns) ? b.addOns.join(", ") : (b.addOns || "None");
  const subject = `New booking: ${b.customerName ?? "Customer"} — ${b.serviceType ?? "Cleaning"} on ${b.preferredDate ?? "TBD"}`;
  const html = `<!doctype html><html><body style="margin:0;background:${BRAND.soft};font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.soft};padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;">
<tr><td style="background:${BRAND.pink};padding:20px 28px;color:#ffffff;font-size:20px;font-weight:700;">New Website Booking</td></tr>
<tr><td style="padding:24px 28px;">
<p style="margin:0 0 16px;color:${BRAND.ink};font-size:15px;">A new booking just came in through cleancollectives.com. Details below.</p>
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
<p style="margin:20px 0 0;color:#64748b;font-size:13px;">Log in to the admin dashboard to confirm and schedule.</p>
</td></tr>
<tr><td style="background:${BRAND.mint};padding:14px 28px;color:${BRAND.ink};font-size:12px;">Clean Collective · ${BRAND.phone} · ${BRAND.supportEmail}</td></tr>
</table></td></tr></table></body></html>`;
  return { subject, html };
}

export function renderCustomerBookingEmail(b: BookingSummary): { subject: string; html: string } {
  const subject = `Your Clean Collective booking is confirmed`;
  const total = typeof b.totalPrice === "number" ? `$${b.totalPrice}` : b.totalPrice;
  const html = `<!doctype html><html><body style="margin:0;background:${BRAND.soft};font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.soft};padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;">
<tr><td style="background:${BRAND.pink};padding:28px;color:#ffffff;text-align:center;">
<div style="font-size:24px;font-weight:700;">Thank you${b.customerName ? `, ${esc(b.customerName)}` : ""}!</div>
<div style="margin-top:6px;font-size:15px;opacity:0.95;">Your cleaning is booked with Clean Collective.</div>
</td></tr>
<tr><td style="padding:24px 28px;color:${BRAND.ink};font-size:15px;line-height:1.55;">
<p style="margin:0 0 16px;">We're excited to make your home sparkle. Here's a quick summary of your booking:</p>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${BRAND.soft};border-radius:8px;padding:12px;">
${row("Service", b.serviceType)}
${row("Date / Time", b.preferredDate)}
${row("Address", b.address)}
${row("Total", total)}
</table>
<h3 style="margin:22px 0 8px;font-size:16px;color:${BRAND.ink};">What happens next</h3>
<ol style="margin:0 0 16px 20px;padding:0;color:${BRAND.ink};font-size:14px;line-height:1.6;">
<li>Our team will review your booking and text you a confirmation shortly.</li>
<li>On the day of service, your cleaner will arrive during your selected arrival window.</li>
<li>After service, we'll do a quick walkthrough to make sure everything is perfect.</li>
</ol>
<div style="margin-top:18px;padding:14px;background:${BRAND.mint};border-radius:8px;color:${BRAND.ink};font-size:14px;">
Need to change or ask about anything? Call or text <strong>${BRAND.phone}</strong> or email <strong>${BRAND.supportEmail}</strong>.
</div>
</td></tr>
<tr><td style="padding:16px 28px;color:#64748b;font-size:12px;text-align:center;background:#ffffff;border-top:1px solid #e2e8f0;">
Clean Collective · Pompano Beach, FL · ${BRAND.phone}<br/>
You're receiving this because you booked a cleaning on cleancollectives.com.
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

