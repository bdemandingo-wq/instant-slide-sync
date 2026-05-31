-- Add attempt-counter column to password_reset_otps so the
-- sms-password-reset function can rate-limit OTP guesses.
--
-- The function previously accepted unlimited wrong-OTP submissions
-- against a 6-digit code (~1M possibilities). An attacker who knew a
-- victim's email could brute-force the OTP in seconds to seconds-of-
-- minutes. With a 5-attempt cap, the realistic success rate drops to
-- 5/1M = 0.0005% per code — and the OTP only lives 10 minutes anyway.

ALTER TABLE public.password_reset_otps
  ADD COLUMN IF NOT EXISTS failed_attempts integer NOT NULL DEFAULT 0;

-- Helpful index for the "find any active OTP for this user" lookup the
-- function does on every verify call.
CREATE INDEX IF NOT EXISTS password_reset_otps_user_active_idx
  ON public.password_reset_otps(user_id, used, expires_at);
