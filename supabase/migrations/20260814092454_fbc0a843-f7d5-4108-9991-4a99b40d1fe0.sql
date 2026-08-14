ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS stripe_customer_id       text,
  ADD COLUMN IF NOT EXISTS stripe_payment_method_id text,
  ADD COLUMN IF NOT EXISTS card_on_file_status      text NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS card_saved_at            timestamptz,
  ADD COLUMN IF NOT EXISTS stripe_setup_session_id  text;