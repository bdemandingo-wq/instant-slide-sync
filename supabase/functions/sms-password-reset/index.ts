import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const OPENPHONE_API_KEY = Deno.env.get("OPENPHONE_API_KEY");
const OPENPHONE_PHONE_NUMBER_ID = "PNr7XukuaV";
const ADMIN_PHONE_NUMBER = "+15618612752";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { action, email, otp, newPassword } = await req.json();

    if (action === "send") {
      // Find user by email
      const { data: userData, error: userError } = await supabase.auth.admin.listUsers();
      if (userError) throw new Error("Failed to look up user");

      const user = userData.users.find((u) => u.email === email);
      if (!user) {
        // Don't reveal if email exists or not
        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // CRITICAL: the OTP must go to THE USER, not to admin. Previously the
      // SMS recipient was hardcoded to ADMIN_PHONE_NUMBER which meant every
      // password reset SMS landed on the same admin device — the requesting
      // user never received their own code. Resolve the user's phone via
      // Supabase auth.users.phone first (set when account was created with
      // phone OTP) and fall back to the profiles/customers table for users
      // who signed up via email only.
      let userPhone = (user as any).phone as string | null | undefined;
      if (!userPhone) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("phone")
          .eq("id", user.id)
          .maybeSingle();
        userPhone = (profile as any)?.phone ?? null;
      }
      if (!userPhone) {
        return new Response(
          JSON.stringify({
            error:
              "No phone number on file for that account. Please contact support to reset your password.",
          }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      // Normalize to E.164 — OpenPhone rejects ambiguous formats.
      const normalizedPhone = userPhone.startsWith("+")
        ? userPhone.replace(/[^\d+]/g, "")
        : `+1${userPhone.replace(/\D/g, "")}`;

      // Generate 6-digit OTP
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      // Invalidate old OTPs
      await supabase
        .from("password_reset_otps")
        .update({ used: true })
        .eq("user_id", user.id)
        .eq("used", false);

      // Store OTP
      const { error: insertError } = await supabase
        .from("password_reset_otps")
        .insert({ user_id: user.id, otp_code: otpCode, expires_at: expiresAt.toISOString() });

      if (insertError) throw new Error("Failed to create reset code");

      // Send SMS via OpenPhone
      if (!OPENPHONE_API_KEY) throw new Error("OpenPhone API key not configured");

      const smsResponse = await fetch("https://api.openphone.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: OPENPHONE_API_KEY,
        },
        body: JSON.stringify({
          content: `Your Clean Collective password reset code is: ${otpCode}\n\nThis code expires in 10 minutes.`,
          from: OPENPHONE_PHONE_NUMBER_ID,
          to: [normalizedPhone],
        }),
      });

      if (!smsResponse.ok) {
        const errText = await smsResponse.text();
        console.error("OpenPhone error:", errText);
        throw new Error("Failed to send SMS");
      }

      console.log(`OTP sent via SMS to user phone (user.id=${user.id})`);

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "verify") {
      // Find user by email
      const { data: userData } = await supabase.auth.admin.listUsers();
      const user = userData?.users.find((u) => u.email === email);
      if (!user) {
        return new Response(JSON.stringify({ error: "Invalid code" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Check OTP
      const { data: otpData, error: otpError } = await supabase
        .from("password_reset_otps")
        .select("*")
        .eq("user_id", user.id)
        .eq("otp_code", otp)
        .eq("used", false)
        .gte("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (otpError || !otpData) {
        return new Response(JSON.stringify({ error: "Invalid or expired code" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Mark OTP as used
      await supabase
        .from("password_reset_otps")
        .update({ used: true })
        .eq("id", otpData.id);

      // Update password
      const { error: updateError } = await supabase.auth.admin.updateUserById(user.id, {
        password: newPassword,
      });

      if (updateError) {
        return new Response(JSON.stringify({ error: "Failed to update password" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      console.log("Password reset successful for:", email);

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("SMS password reset error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
