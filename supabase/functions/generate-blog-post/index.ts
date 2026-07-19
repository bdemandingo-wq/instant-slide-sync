import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Restricted CORS - only allow specific origins
const ALLOWED_ORIGINS = [
  'https://cleancollectives.com',
  'https://cleancollectives.com',
  'https://ekseakjxarhjujngoklz.supabase.co',
];

const DEV_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:3000',
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
  };
}

const CLEANING_TOPICS = [
  "Quick cleaning hacks for busy Florida professionals",
  "How to maintain a clean home during hurricane season",
  "Pet-friendly cleaning solutions for South Florida homes",
  "Best practices for cleaning luxury condos in Miami",
  "Seasonal deep cleaning checklist for Florida homeowners",
  "How to prevent sand and salt buildup in coastal homes",
  "Green cleaning tips for eco-conscious Floridians",
  "Organizing tips for small apartments in Fort Lauderdale",
  "How to clean and maintain tile floors in humid climates",
  "Tips for keeping your Airbnb spotless between guests",
  "Cleaning tips for homes with allergies in humid Florida",
  "How to maintain outdoor furniture in the Florida sun",
  "Best products for removing mildew in bathrooms",
  "Kitchen deep cleaning tips for holiday entertaining",
  "How to prepare your home for professional cleaners",
  "Decluttering strategies for a stress-free home",
  "Cleaning tips for new parents in South Florida",
  "How to maintain pristine white surfaces in your home",
  "Tips for cleaning after a Florida rainstorm",
  "How to keep your garage clean and organized",
  "Cleaning checklist for vacation rental properties",
  "Best practices for cleaning glass and mirrors",
  "How to deep clean upholstery and fabric furniture",
  "Tips for maintaining hardwood floors in humid climates",
  "Cleaning tips for home offices and workspaces",
  "How to clean and sanitize children's toys and playrooms",
  "Best practices for cleaning outdoor pools and patios",
  "Tips for removing tough stains from carpets",
  "How to maintain a clean and fresh-smelling closet",
  "Cleaning tips for multi-generational Florida homes"
];

const CATEGORIES = ["Tips", "Guides", "Seasonal", "Health", "Home Care"];

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !SUPABASE_ANON_KEY) {
      throw new Error('Supabase credentials not configured');
    }

    // ============ AUTHENTICATION CHECK ============
    // Check if this is an internal cron call using a dedicated server-side secret.
    // We intentionally do NOT accept the public anon key here, since it is exposed
    // in client-side code and would let anyone bypass admin auth.
    const authHeader = req.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '').trim();

    const CRON_SECRET = Deno.env.get('CRON_SECRET');
    const isCronCall = !!CRON_SECRET && token === CRON_SECRET;
    
    console.log('Auth check - isCronCall:', isCronCall);
    
    if (isCronCall) {
      console.log('Internal cron job call detected - bypassing user auth');
    } else {
      // Manual call - require admin user authentication
      if (!authHeader?.startsWith('Bearer ')) {
        console.log('Missing or invalid Authorization header');
        return new Response(JSON.stringify({ error: 'Unauthorized: Missing authentication' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Create a client with the user's token to verify their identity
      const userSupabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        global: { headers: { Authorization: authHeader } }
      });

      // Verify the user is authenticated
      const { data: { user }, error: authError } = await userSupabase.auth.getUser();
      if (authError || !user) {
        console.log('Auth verification failed:', authError?.message);
        return new Response(JSON.stringify({ error: 'Unauthorized: Invalid token' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      console.log('User authenticated:', user.id);

      // ============ ADMIN ROLE CHECK ============
      // Use service role client to check admin status (bypasses RLS)
      const adminCheckSupabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      
      const { data: roleData, error: roleError } = await adminCheckSupabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (roleError) {
        console.error('Role check failed:', roleError.message);
        return new Response(JSON.stringify({ error: 'Failed to verify permissions' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      if (!roleData) {
        console.log('User is not an admin:', user.id);
        return new Response(JSON.stringify({ error: 'Forbidden: Admin access required' }), {
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      console.log('Admin access verified for user:', user.id);
    }

    // ============ BLOG GENERATION LOGIC ============
    // Use service role client for database operations
    const serviceSupabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Get existing blog post slugs to avoid duplicates
    const { data: existingPosts } = await serviceSupabase
      .from('blog_posts')
      .select('slug, title');

    const existingTitles = new Set((existingPosts || []).map((p: { title: string }) => p.title.toLowerCase()));

    // Pick a random topic that hasn't been used
    let topic = CLEANING_TOPICS[Math.floor(Math.random() * CLEANING_TOPICS.length)];
    let attempts = 0;
    while (existingTitles.has(topic.toLowerCase()) && attempts < 10) {
      topic = CLEANING_TOPICS[Math.floor(Math.random() * CLEANING_TOPICS.length)];
      attempts++;
    }

    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

    console.log(`Generating blog post about: ${topic}`);

    // Generate blog content using Lovable AI
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a professional content writer for Clean Collective, a cleaning service company in South Florida. 
Write engaging, SEO-optimized blog posts about cleaning tips and home care.
Your content should be helpful, practical, and relevant to South Florida homeowners.
Focus on actionable advice that readers can implement immediately.
Include local references to Miami, Fort Lauderdale, Palm Beach, and other South Florida areas when appropriate.`
          },
          {
            role: 'user',
            content: `Write a blog post about: "${topic}"

Return your response in the following JSON format:
{
  "title": "SEO-optimized title (50-60 characters)",
  "excerpt": "Engaging summary (150-160 characters)",
  "content": "Full blog post content in HTML format with proper headings (h2, h3), paragraphs, and lists. Around 800-1200 words.",
  "read_time": "X min read"
}

The content should include:
- An engaging introduction
- 3-5 main sections with subheadings
- Practical tips and actionable advice
- A call-to-action mentioning Clean Collective services
- Proper HTML formatting (use <h2>, <h3>, <p>, <ul>, <li>, <strong> tags)`
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded, please try again later' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Payment required for AI usage' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    const aiContent = aiData.choices?.[0]?.message?.content;

    if (!aiContent) {
      throw new Error('No content generated from AI');
    }

    console.log('AI response received, parsing content...');

    // Parse the JSON response from AI
    let blogData;
    try {
      // Extract JSON from the response (handle markdown code blocks)
      const jsonMatch = aiContent.match(/```json\s*([\s\S]*?)\s*```/) || 
                        aiContent.match(/```\s*([\s\S]*?)\s*```/) ||
                        [null, aiContent];
      const jsonStr = jsonMatch[1] || aiContent;
      blogData = JSON.parse(jsonStr.trim());
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      console.log('Raw AI content:', aiContent);
      throw new Error('Failed to parse AI-generated content');
    }

    // Generate slug from title
    const slug = blogData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 100);

    // Check if slug already exists
    const { data: existingSlug } = await serviceSupabase
      .from('blog_posts')
      .select('slug')
      .eq('slug', slug)
      .single();

    if (existingSlug) {
      console.log('Slug already exists, skipping:', slug);
      return new Response(JSON.stringify({ 
        message: 'Blog post with similar title already exists',
        skipped: true 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Insert the new blog post
    const { data: newPost, error: insertError } = await serviceSupabase
      .from('blog_posts')
      .insert({
        title: blogData.title,
        slug: slug,
        excerpt: blogData.excerpt,
        content: blogData.content,
        category: category,
        read_time: blogData.read_time || '5 min read',
        is_published: true,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Failed to insert blog post:', insertError);
      throw new Error(`Failed to save blog post: ${insertError.message}`);
    }

    console.log('Blog post created successfully:', newPost.title);

    return new Response(JSON.stringify({ 
      success: true, 
      post: {
        id: newPost.id,
        title: newPost.title,
        slug: newPost.slug,
        category: newPost.category
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error generating blog post:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
