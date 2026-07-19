-- =====================================================
-- 0. SITE_CONTENT (referenced later, also fixes broken admin manager)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.site_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read site_content" ON public.site_content FOR SELECT USING (true);
CREATE POLICY "Admins insert site_content" ON public.site_content FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update site_content" ON public.site_content FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete site_content" ON public.site_content FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON public.site_content FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- 1. SERVICE_PRICING
-- =====================================================
CREATE TABLE IF NOT EXISTS public.service_pricing (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT NOT NULL,
  tier_index INTEGER NOT NULL,
  max_sqft INTEGER NOT NULL,
  label TEXT NOT NULL,
  base_price NUMERIC NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (service_type, tier_index)
);
ALTER TABLE public.service_pricing ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read service_pricing" ON public.service_pricing FOR SELECT USING (true);
CREATE POLICY "Admins insert service_pricing" ON public.service_pricing FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update service_pricing" ON public.service_pricing FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete service_pricing" ON public.service_pricing FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER update_service_pricing_updated_at BEFORE UPDATE ON public.service_pricing FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.service_pricing (service_type, tier_index, max_sqft, label, base_price) VALUES
  ('standard', 0, 750, 'Up to 750 sf', 108), ('standard', 1, 1000, 'Up to 1000 sf', 143),
  ('standard', 2, 1250, 'Up to 1250 sf', 178), ('standard', 3, 1500, 'Up to 1500 sf', 213),
  ('standard', 4, 1800, 'Up to 1800 sf', 248), ('standard', 5, 2100, 'Up to 2100 sf', 283),
  ('standard', 6, 2400, 'Up to 2400 sf', 313), ('standard', 7, 2700, 'Up to 2700 sf', 368),
  ('standard', 8, 3000, 'Up to 3000 sf', 423), ('standard', 9, 3300, 'Up to 3300 sf', 478),
  ('standard', 10, 3600, 'Up to 3600 sf', 533), ('standard', 11, 4000, 'Up to 4000 sf', 588),
  ('standard', 12, 4400, 'Up to 4400 sf', 643),
  ('deep', 0, 750, 'Up to 750 sf', 208), ('deep', 1, 1000, 'Up to 1000 sf', 243),
  ('deep', 2, 1250, 'Up to 1250 sf', 278), ('deep', 3, 1500, 'Up to 1500 sf', 313),
  ('deep', 4, 1800, 'Up to 1800 sf', 348), ('deep', 5, 2100, 'Up to 2100 sf', 383),
  ('deep', 6, 2400, 'Up to 2400 sf', 438), ('deep', 7, 2700, 'Up to 2700 sf', 493),
  ('deep', 8, 3000, 'Up to 3000 sf', 548), ('deep', 9, 3300, 'Up to 3300 sf', 603),
  ('deep', 10, 3600, 'Up to 3600 sf', 658), ('deep', 11, 4000, 'Up to 4000 sf', 713),
  ('deep', 12, 4400, 'Up to 4400 sf', 768),
  ('moveinout', 0, 750, 'Up to 750 sf', 283), ('moveinout', 1, 1000, 'Up to 1000 sf', 318),
  ('moveinout', 2, 1250, 'Up to 1250 sf', 353), ('moveinout', 3, 1500, 'Up to 1500 sf', 388),
  ('moveinout', 4, 1800, 'Up to 1800 sf', 423), ('moveinout', 5, 2100, 'Up to 2100 sf', 458),
  ('moveinout', 6, 2400, 'Up to 2400 sf', 513), ('moveinout', 7, 2700, 'Up to 2700 sf', 568),
  ('moveinout', 8, 3000, 'Up to 3000 sf', 623), ('moveinout', 9, 3300, 'Up to 3300 sf', 678),
  ('moveinout', 10, 3600, 'Up to 3600 sf', 733), ('moveinout', 11, 4000, 'Up to 4000 sf', 788),
  ('moveinout', 12, 4400, 'Up to 4400 sf', 843),
  ('recurring', 0, 750, 'Up to 750 sf', 108), ('recurring', 1, 1000, 'Up to 1000 sf', 143),
  ('recurring', 2, 1250, 'Up to 1250 sf', 178), ('recurring', 3, 1500, 'Up to 1500 sf', 213),
  ('recurring', 4, 1800, 'Up to 1800 sf', 248), ('recurring', 5, 2100, 'Up to 2100 sf', 283),
  ('recurring', 6, 2400, 'Up to 2400 sf', 313), ('recurring', 7, 2700, 'Up to 2700 sf', 368),
  ('recurring', 8, 3000, 'Up to 3000 sf', 423), ('recurring', 9, 3300, 'Up to 3300 sf', 478),
  ('recurring', 10, 3600, 'Up to 3600 sf', 533), ('recurring', 11, 4000, 'Up to 4000 sf', 588),
  ('recurring', 12, 4400, 'Up to 4400 sf', 643)
ON CONFLICT (service_type, tier_index) DO NOTHING;

-- =====================================================
-- 2. SERVICE_AREAS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.service_areas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  state TEXT NOT NULL DEFAULT 'FL',
  travel_fee NUMERIC NOT NULL DEFAULT 0,
  tier TEXT NOT NULL DEFAULT 'standard',
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.service_areas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read service_areas" ON public.service_areas FOR SELECT USING (true);
CREATE POLICY "Admins insert service_areas" ON public.service_areas FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update service_areas" ON public.service_areas FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete service_areas" ON public.service_areas FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER update_service_areas_updated_at BEFORE UPDATE ON public.service_areas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.service_areas (slug, name, state, travel_fee, tier, sort_order) VALUES
  ('miami-dade-cleaning', 'Miami-Dade County', 'FL', 0, 'standard', 1),
  ('broward-county-cleaning', 'Broward County', 'FL', 0, 'standard', 2),
  ('palm-beach-county-cleaning', 'Palm Beach County', 'FL', 0, 'premium', 3)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. QUOTE_REQUESTS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  frequency TEXT NOT NULL, first_name TEXT NOT NULL, last_name TEXT NOT NULL,
  email TEXT NOT NULL, phone TEXT NOT NULL, address TEXT NOT NULL,
  city TEXT NOT NULL, state TEXT NOT NULL, zip TEXT NOT NULL,
  square_feet TEXT NOT NULL, bedrooms TEXT NOT NULL, bathrooms TEXT NOT NULL,
  current_clean_level TEXT NOT NULL,
  consent_email BOOLEAN NOT NULL DEFAULT false,
  consent_sms BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit quote requests" ON public.quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins view quote_requests" ON public.quote_requests FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update quote_requests" ON public.quote_requests FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete quote_requests" ON public.quote_requests FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER update_quote_requests_updated_at BEFORE UPDATE ON public.quote_requests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON public.quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests(status);

-- =====================================================
-- 4. COMMERCIAL_REQUESTS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.commercial_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL, contact_name TEXT NOT NULL,
  email TEXT NOT NULL, phone TEXT NOT NULL, property_type TEXT NOT NULL,
  square_feet TEXT, frequency TEXT, address TEXT, city TEXT, state TEXT, zip TEXT,
  message TEXT, status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.commercial_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit commercial requests" ON public.commercial_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins view commercial_requests" ON public.commercial_requests FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update commercial_requests" ON public.commercial_requests FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete commercial_requests" ON public.commercial_requests FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER update_commercial_requests_updated_at BEFORE UPDATE ON public.commercial_requests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- 5. CHATBOT_CONVERSATIONS + ABANDONED_LEADS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.chatbot_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  flow_type TEXT NOT NULL CHECK (flow_type IN ('residential', 'commercial')),
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  estimate_amount NUMERIC,
  customer_name TEXT, customer_email TEXT, customer_phone TEXT,
  converted_to_booking BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'in_progress',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.chatbot_conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create chatbot conversations" ON public.chatbot_conversations FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update chatbot conversations" ON public.chatbot_conversations FOR UPDATE USING (true);
CREATE POLICY "Admins view chatbot_conversations" ON public.chatbot_conversations FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete chatbot_conversations" ON public.chatbot_conversations FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER update_chatbot_conversations_updated_at BEFORE UPDATE ON public.chatbot_conversations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE IF NOT EXISTS public.abandoned_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES public.chatbot_conversations(id) ON DELETE CASCADE,
  flow_type TEXT NOT NULL,
  customer_name TEXT, customer_email TEXT NOT NULL, customer_phone TEXT,
  estimate_amount NUMERIC,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  followup_sent BOOLEAN NOT NULL DEFAULT false,
  followup_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS abandoned_leads_followup_idx ON public.abandoned_leads (followup_sent, created_at);
ALTER TABLE public.abandoned_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create abandoned_leads" ON public.abandoned_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins view abandoned_leads" ON public.abandoned_leads FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update abandoned_leads" ON public.abandoned_leads FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete abandoned_leads" ON public.abandoned_leads FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER update_abandoned_leads_updated_at BEFORE UPDATE ON public.abandoned_leads FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- 6. WORK_CARDS + storage bucket
-- =====================================================
CREATE TABLE IF NOT EXISTS public.work_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform TEXT NOT NULL DEFAULT 'instagram' CHECK (platform IN ('instagram', 'tiktok')),
  image_url TEXT NOT NULL,
  caption TEXT NOT NULL DEFAULT '',
  post_url TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.work_cards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read work_cards" ON public.work_cards FOR SELECT USING (true);
CREATE POLICY "Admins insert work_cards" ON public.work_cards FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update work_cards" ON public.work_cards FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete work_cards" ON public.work_cards FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));

INSERT INTO storage.buckets (id, name, public) VALUES ('work-photos', 'work-photos', true) ON CONFLICT (id) DO NOTHING;
CREATE POLICY "Public read work-photos" ON storage.objects FOR SELECT USING (bucket_id = 'work-photos');
CREATE POLICY "Admins upload work-photos" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'work-photos' AND has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete work-photos" ON storage.objects FOR DELETE USING (bucket_id = 'work-photos' AND has_role(auth.uid(), 'admin'::app_role));

INSERT INTO public.site_content (key, value) VALUES
  ('instagram_handle', '@cleancollective'),
  ('instagram_url', 'https://www.instagram.com/cleancollective/'),
  ('tiktok_handle', '@cleancollective'),
  ('tiktok_url', 'https://www.tiktok.com/@cleancollective')
ON CONFLICT (key) DO NOTHING;

-- =====================================================
-- 7. REVIEWS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES public.bookings(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL, location TEXT,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  review_token TEXT UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public view approved reviews" ON public.reviews FOR SELECT USING (status = 'approved');
CREATE POLICY "Admins view all reviews" ON public.reviews FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Anyone can submit review" ON public.reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins update reviews" ON public.reviews FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete reviews" ON public.reviews FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE TRIGGER reviews_updated_at BEFORE UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX IF NOT EXISTS idx_reviews_status ON public.reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_token ON public.reviews(review_token);

-- =====================================================
-- 8. BOOKING_BLOCKED_DATES + booking column adds
-- =====================================================
ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS time_slot TEXT CHECK (time_slot IN ('morning', 'afternoon')),
  ADD COLUMN IF NOT EXISTS review_email_sent_at TIMESTAMPTZ;

CREATE TABLE IF NOT EXISTS public.booking_blocked_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blocked_date DATE NOT NULL UNIQUE,
  reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.booking_blocked_dates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view blocked dates" ON public.booking_blocked_dates FOR SELECT USING (true);
CREATE POLICY "Admins insert blocked_dates" ON public.booking_blocked_dates FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update blocked_dates" ON public.booking_blocked_dates FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete blocked_dates" ON public.booking_blocked_dates FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));
CREATE INDEX IF NOT EXISTS idx_bookings_date_slot ON public.bookings(preferred_date, time_slot);

-- =====================================================
-- Grant admin role to my user
-- =====================================================
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM auth.users WHERE email = 'bdemandingo@gmail.com'
ON CONFLICT DO NOTHING;