import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// Restrict CORS to specific origins
const ALLOWED_ORIGINS = [
  'https://cleancollectives.com',
  'https://www.cleancollectives.com',
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

// Validate chat messages schema
const messageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string().max(10000),
});

const chatRequestSchema = z.object({
  messages: z.array(messageSchema).max(50),
});

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate input
    const parseResult = chatRequestSchema.safeParse(rawData);
    if (!parseResult.success) {
      console.error("Validation error:", parseResult.error.errors);
      return new Response(
        JSON.stringify({ error: "Invalid input data" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const { messages } = parseResult.data;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are a helpful AI assistant for Clean Collective, a professional cleaning service in South Florida. Be friendly, concise, and helpful. Answer questions about cleaning services, booking, and general inquiries.

Clean Collective FAQ Knowledge Base:

SERVICES:
- We offer residential, commercial, deep cleaning, move-in/move-out, and post-construction cleaning.
- Standard cleaning includes dusting, vacuuming, mopping, bathroom and kitchen cleaning, surface wipe-downs, and trash removal.
- We offer add-ons like carpet cleaning, window cleaning, and more.
- We clean both homes and businesses.
- Every cleaning plan can be customized to fit your needs and priorities.

SUPPLIES & PRODUCTS:
- We bring all necessary supplies and equipment.
- We use high-quality, eco-friendly products and can accommodate special requests.
- We're happy to use preferred products or equipment upon request.

TEAM & QUALITY:
- All cleaners are background-checked and professionally trained before working with clients.
- We are fully licensed, bonded, and insured.
- We try to send the same team whenever possible for consistency.
- We maintain high standards through team training, quality checks, and customer feedback.
- Our cleaners are trained to handle all items with care.
- We follow strict safety and sanitation procedures, including using clean equipment, proper protective gear when needed, and ensuring our team is healthy before each job.

SCHEDULING & ACCESS:
- We offer flexible scheduling, including evenings and weekends.
- Cleaning time depends on the size of the space and the type of service. We'll give you an estimate before we begin.
- We follow secure procedures for keys and access, respecting your privacy.
- We ask for at least 24 hours' notice for cancellations or rescheduling.
- Yes, we offer emergency cleaning services. If you need urgent cleaning, give us a call and we'll do our best to help as quickly as possible.

PRICING & PAYMENT:
- All estimates are free. You can get one by phone or online.
- Rates are based on the size of the space, service type, and cleaning frequency. Pricing is always transparent.
- We accept credit cards and online payments. Payment is typically due after service is completed unless otherwise arranged.
- Any extra services outside the original scope will be discussed and approved before being added.
- We offer discounted rates for weekly, bi-weekly, and monthly cleanings, plus seasonal and referral specials.
- No contract is required. You can book one-time cleanings or choose recurring service for discounted rates.

SATISFACTION & SUPPORT:
- If you're not satisfied, we'll return to re-clean the area at no extra charge.
- Customer satisfaction is very important to us. If there's ever an issue, contact us right away and we'll make it right.
- You can reach us by phone at (561) 861-2752, email, or through our website.
- You can view reviews online or request references.

Always be helpful, professional, and encourage users to book a cleaning or contact Clean Collective for more details.` 
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    const corsHeaders = getCorsHeaders(req);
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
