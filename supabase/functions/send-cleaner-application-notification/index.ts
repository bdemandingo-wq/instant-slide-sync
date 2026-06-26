import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://esm.sh/zod@3.23.8";

// HTML-escape user-supplied strings to prevent HTML/script injection in admin email
function escapeHtml(input: unknown): string {
  const s = String(input ?? "");
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ApplicationSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(50),
  hasTransportation: z.boolean(),
  hasSupplies: z.boolean(),
  yearsExperience: z.number().int().min(0).max(80),
  hasInsurance: z.boolean(),
  canProvideReferences: z.boolean(),
  workAreas: z.array(z.string().max(50)).max(20),
  supplyPictures: z.array(z.string().max(500)).max(20),
});

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const ALLOWED_ORIGINS = [
  'https://tidywisecleaning.com',
  'https://www.tidywisecleaning.com',
  'https://ekseakjxarhjujngoklz.supabase.co',
];

const DEV_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:8081',
];

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('Origin') || '';
  const isAllowed = ALLOWED_ORIGINS.includes(origin) ||
    DEV_ORIGINS.includes(origin) ||
    origin.includes('.lovable.app') ||
    origin.includes('.lovableproject.com');

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

interface CleanerApplicationRequest {
  name: string;
  email: string;
  phone: string;
  hasTransportation: boolean;
  hasSupplies: boolean;
  yearsExperience: number;
  hasInsurance: boolean;
  canProvideReferences: boolean;
  workAreas: string[];
  supplyPictures: string[];
}

const workAreaLabels: Record<string, string> = {
  "broward": "Broward County",
  "palm-beach": "Palm Beach County",
  "miami-dade": "Miami Dade County",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Received cleaner application notification request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: getCorsHeaders(req) });
  }

  try {
    const rawBody = await req.json();
    const parsed = ApplicationSchema.safeParse(rawBody);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid application data", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { "Content-Type": "application/json", ...getCorsHeaders(req) } }
      );
    }
    const application = parsed.data;
    console.log("Processing application from:", application.name);

    const workAreasFormatted = application.workAreas
      .map((area) => escapeHtml(workAreaLabels[area] || area))
      .join(", ");

    // Generate signed URLs for supply pictures (valid for 7 days)
    let supplyPicturesHtml = "";
    if (application.supplyPictures.length > 0 && SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      
      const signedUrls: string[] = [];
      for (const filename of application.supplyPictures) {
        // Extract just the filename if it's a full URL (for backwards compatibility)
        const fname = filename.includes('/') ? filename.split('/').pop() : filename;
        
        if (fname) {
          const { data, error } = await supabase.storage
            .from('supply-pictures')
            .createSignedUrl(fname, 60 * 60 * 24 * 7); // 7 days
          
          if (!error && data?.signedUrl) {
            signedUrls.push(data.signedUrl);
          } else {
            console.error('Failed to generate signed URL for:', fname, error);
          }
        }
      }
      
      if (signedUrls.length > 0) {
        supplyPicturesHtml = `
          <div style="margin-top: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Supply Pictures</h3>
            <p style="font-size: 12px; color: #666; margin-bottom: 10px;">Links valid for 7 days</p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              ${signedUrls.map((url) => `
                <a href="${url}" target="_blank" style="display: inline-block;">
                  <img src="${url}" alt="Supply picture" style="max-width: 150px; max-height: 150px; border-radius: 8px; object-fit: cover;" />
                </a>
              `).join("")}
            </div>
          </div>
        `;
      }
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CLEAN COLLECTIVE <support@tidywisecleaning.com>",
        to: ["support@tidywisecleaning.com"],
        subject: `New Cleaner Application from ${escapeHtml(application.name)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; padding: 25px; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);">
              <img src="https://www.tidywisecleaning.com/logo-email.png" alt="CLEAN COLLECTIVE" style="height: 60px; width: auto;" />
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">New Cleaner Application</p>
            </div>
            
            <div style="padding: 20px; background: #f8fafc;">
              <h2 style="color: #1e40af; margin-bottom: 20px;">Application Details</h2>
              
              <div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
                <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${escapeHtml(application.name)}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${escapeHtml(application.email)}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${escapeHtml(application.phone)}</p>
              </div>
              
              <div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
                <h3 style="color: #333; margin-top: 0;">Experience & Qualifications</h3>
                <p style="margin: 5px 0;"><strong>Years of Experience:</strong> ${escapeHtml(application.yearsExperience)}</p>
                <p style="margin: 5px 0;"><strong>Has Transportation:</strong> ${application.hasTransportation ? "✅ Yes" : "❌ No"}</p>
                <p style="margin: 5px 0;"><strong>Has Own Supplies:</strong> ${application.hasSupplies ? "✅ Yes" : "❌ No"}</p>
                <p style="margin: 5px 0;"><strong>Has Insurance:</strong> ${application.hasInsurance ? "✅ Yes" : "❌ No"}</p>
                <p style="margin: 5px 0;"><strong>Can Provide References:</strong> ${application.canProvideReferences ? "✅ Yes" : "❌ No"}</p>
              </div>
              
              <div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
                <h3 style="color: #333; margin-top: 0;">Service Areas</h3>
                <p style="margin: 5px 0;">${workAreasFormatted}</p>
              </div>
              
              ${supplyPicturesHtml}
            </div>
            
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);">
              <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">CLEAN COLLECTIVE - Professional Cleaning Services</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await emailResponse.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...getCorsHeaders(req),
      },
    });
  } catch (error: any) {
    console.error("Error in send-cleaner-application-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
      }
    );
  }
};

serve(handler);
