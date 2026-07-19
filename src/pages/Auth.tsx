import { useState, useEffect } from "react";
import SEOHead from "@/components/seo/SEOHead";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Mail, Lock, User, Phone } from "lucide-react";
import logo from "@/assets/logo-optimized.webp";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetStep, setResetStep] = useState<"email" | "otp" | "newPassword">("email");
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  
  const { signIn, signUp, user, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Route signed-in users to the right place. Admins → /admin; everyone
  // else → /my-bookings. Previously the function sent EVERY user to
  // /admin, which then bounced regular customers back to / with an
  // "Access Denied" — repeat customers literally couldn't log in to
  // their portal.
  useEffect(() => {
    if (!loading && user) {
      navigate(isAdmin ? "/admin" : "/my-bookings");
    }
  }, [user, loading, isAdmin, navigate]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      newErrors.email = emailResult.error.errors[0].message;
    }
    
    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      newErrors.password = passwordResult.error.errors[0].message;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      setErrors({ email: emailResult.error.errors[0].message });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("sms-password-reset", {
        body: { action: "send", email },
      });
      if (error) {
        toast({ title: "Error", description: "Failed to send reset code", variant: "destructive" });
      } else {
        toast({ title: "Code sent!", description: "Check your phone for the 6-digit code." });
        setResetStep("otp");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length !== 6) {
      toast({ title: "Invalid code", description: "Please enter the 6-digit code.", variant: "destructive" });
      return;
    }
    const pwResult = passwordSchema.safeParse(newPassword);
    if (!pwResult.success) {
      setErrors({ password: pwResult.error.errors[0].message });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await supabase.functions.invoke("sms-password-reset", {
        body: { action: "verify", email, otp: otpCode, newPassword },
      });
      const result = response.data as { success?: boolean; error?: string } | null;
      const invokeError = response.error;
      // Treat ANYTHING other than {success:true} as a failure. The old logic
      // only flagged invokeError || result.error which allowed success=false
      // or unexpected response shapes to slip through and toast "Password
      // reset!" without the password actually changing.
      if (invokeError || !result || result.error || result.success !== true) {
        const msg =
          result?.error ||
          (typeof invokeError === 'object' && invokeError?.message) ||
          "Invalid or expired code";
        toast({ title: "Error", description: msg, variant: "destructive" });
      } else {
        toast({ title: "Password reset!", description: "You can now sign in with your new password." });
        setIsForgotPassword(false);
        setResetStep("email");
        setOtpCode("");
        setNewPassword("");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Login failed",
            description: error.message === "Invalid login credentials" 
              ? "Invalid email or password. Please try again." 
              : error.message,
            variant: "destructive",
          });
        }
      } else {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          if (error.message.includes("already registered")) {
            toast({
              title: "Account exists",
              description: "This email is already registered. Please log in instead.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Sign up failed",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Account created!",
            description: "You can now log in with your credentials.",
          });
          setIsLogin(true);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Sign In to Your Clean Collective Account | South Florida Cleaning"
        description="Sign in or create your Clean Collective account to book South Florida house cleaning, track upcoming visits, view past invoices, and manage your service preferences."
        canonical="https://www.cleancollective.net/auth"
      />
    <div className="min-h-screen bg-muted py-12 px-4">
      <div className="max-w-md mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <Card className="shadow-elevated">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <img src={logo} alt="Clean Collective — South Florida house cleaning company logo" className="h-16 w-auto mx-auto mb-4" />
              <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                {isForgotPassword ? "Reset Password" : isLogin ? "Admin Login" : "Create Account"}
              </h1>
              <p className="text-muted-foreground">
                {isForgotPassword
                  ? resetStep === "email"
                    ? "Enter your email to receive a code via SMS"
                    : "Enter the code and your new password"
                  : isLogin ? "Sign in to manage bookings" : "Create your account"}
              </p>
            </div>

            {isForgotPassword ? (
              resetStep === "email" ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@clean collective.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send SMS Code"}
                  </Button>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => { setIsForgotPassword(false); setResetStep("email"); setErrors({}); }}
                      className="text-sm text-primary hover:underline"
                    >
                      Back to login
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp">6-Digit Code</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="otp"
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="123456"
                        className="pl-10 text-center tracking-widest text-lg"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          setErrors((prev) => ({ ...prev, password: undefined }));
                        }}
                        required
                      />
                    </div>
                    {errors.password && (
                      <p className="text-sm text-destructive">{errors.password}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Resetting..." : "Reset Password"}
                  </Button>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => { setResetStep("email"); setOtpCode(""); setNewPassword(""); }}
                      className="text-sm text-primary hover:underline"
                    >
                      Resend code
                    </button>
                  </div>
                </form>
              )
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="John Smith"
                          className="pl-10"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@clean collective.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setErrors((prev) => ({ ...prev, password: undefined }));
                        }}
                        required
                      />
                    </div>
                    {errors.password && (
                      <p className="text-sm text-destructive">{errors.password}</p>
                    )}
                  </div>

                  {isLogin && (
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => { setIsForgotPassword(true); setErrors({}); }}
                        className="text-sm text-muted-foreground hover:text-primary hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setErrors({});
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <section aria-labelledby="auth-info-heading" className="mt-12 max-w-3xl mx-auto bg-background rounded-xl border border-border p-8 space-y-6">
        <h2 id="auth-info-heading" className="font-display text-2xl font-bold text-foreground">
          Manage your Clean Collective cleaning service online
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Your Clean Collective account is the easiest way to stay on top of your South Florida
          cleaning service. Sign in above to book a new appointment, reschedule an
          existing visit, view past invoices and receipts, save your preferred cleaner,
          update your address or gate code, and leave a tip after a job. Everything is
          secured by encrypted email and SMS verification — your home access details and
          payment information are never visible to other clients or shared with third
          parties.
        </p>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">
            What you can do once signed in
          </h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>Book recurring weekly, biweekly, or monthly cleaning visits with one tap</li>
            <li>Reschedule or cancel an upcoming clean without picking up the phone</li>
            <li>View and download your full booking and payment history</li>
            <li>Update saved payment methods, addresses, and pet/parking notes</li>
            <li>Leave reviews or tips for your cleaner directly from your dashboard</li>
            <li>Track your Clean Collective referral credit balance and rewards</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">
            New to Clean Collective?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Clean Collective is South Florida's local house cleaning service — serving{" "}
            <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>,{" "}
            <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>,{" "}
            <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>,
            and dozens of cities across <Link to="/service-areas" className="text-primary hover:underline">our service areas</Link>.
            Browse our cleaning services —{" "}
            <Link to="/standard-cleaning" className="text-primary hover:underline">Standard</Link>,{" "}
            <Link to="/deep-cleaning" className="text-primary hover:underline">Deep</Link>,{" "}
            <Link to="/move-in-out-cleaning" className="text-primary hover:underline">Move-In/Out</Link>,{" "}
            <Link to="/airbnb-cleaning" className="text-primary hover:underline">Airbnb Turnover</Link>, and more —
            then{" "}
            <Link to="/booking" className="text-primary hover:underline">book online in 60 seconds</Link>.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3">
            Trusted, insured, and South-Florida-local
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Every Clean Collective cleaner is background-checked and trained on our 50-point
            quality checklist. We're fully insured, eco-friendly products are standard,
            and every visit comes with our re-clean guarantee. Have questions before you
            sign up? Browse our <Link to="/faq" className="text-primary hover:underline">FAQ</Link>,
            see what neighbors say in our <Link to="/reviews" className="text-primary hover:underline">customer reviews</Link>,
            or check out our <Link to="/blog" className="text-primary hover:underline">cleaning guides and tips</Link>.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Auth;
