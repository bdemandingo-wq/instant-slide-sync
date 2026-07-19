import { useEffect, useState } from "react";
import SEOHead from "@/components/seo/SEOHead";
import { Sentry } from "@/lib/sentry";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Home, Calendar, MapPin, Phone, Mail, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-optimized.webp";

interface Booking {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  address: string;
  sqft: number;
  beds: string;
  baths: string;
  service_type: string;
  frequency: string;
  preferred_date: string;
  total_price: number;
  status: string;
  created_at: string;
  special_instructions: string | null;
  pet_info: string | null;
  add_ons: string[] | null;
}

const CustomerPortal = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("customer_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        // Previously this only console.errored and left bookings=[] so the
        // user saw "No bookings yet" indefinitely with no path to recover.
        // Surface it so they can retry.
        console.error("[CustomerPortal] Failed to load bookings:", error);
        Sentry.captureException(
          error instanceof Error ? error : new Error(String(error)),
          { tags: { area: "customer-portal-load-bookings" } },
        );
        setFetchError(error.message || "Failed to load bookings.");
        setBookings([]);
      } else {
        setFetchError(null);
        setBookings(data || []);
      }
      setLoading(false);
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "cancelled":
        return "bg-red-500/10 text-red-600 border-red-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="My Bookings | Clean Collective"
        description="View and manage your Clean Collective cleaning service bookings. Track upcoming and past appointments."
        canonical="https://cleancollectives.com/my-bookings"
        noIndex={true}
      />
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Clean Collective — South Florida house cleaning company logo" className="h-10 w-auto" />
              <span className="font-display text-xl font-bold text-foreground">Clean Collective</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-display font-bold text-foreground">My Bookings</h1>
          <p className="text-muted-foreground mt-2">
            View and track all your cleaning appointments
          </p>
        </div>

        {fetchError ? (
          <Card className="text-center py-12 border-destructive/40">
            <CardContent>
              <Calendar className="h-12 w-12 mx-auto text-destructive mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Couldn't load your bookings</h3>
              <p className="text-muted-foreground mb-6">
                Something went wrong on our end. Please refresh — if the issue persists, call us at (561) 861-2752.
              </p>
              <Button onClick={() => window.location.reload()}>Refresh</Button>
            </CardContent>
          </Card>
        ) : bookings.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No bookings yet</h3>
              <p className="text-muted-foreground mb-6">
                You haven't made any cleaning appointments yet.
              </p>
              <Button asChild>
                <Link to="/#booking">Book Your First Cleaning</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{booking.service_type}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Booked on {new Date(booking.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={`${getStatusColor(booking.status)} capitalize w-fit`}>
                      {booking.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Preferred Date</p>
                          <p className="text-sm text-muted-foreground">{booking.preferred_date}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Address</p>
                          <p className="text-sm text-muted-foreground">{booking.address}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Home className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Property Details</p>
                          <p className="text-sm text-muted-foreground">
                            {booking.sqft} sq ft • {booking.beds} beds • {booking.baths} baths
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Frequency</p>
                        <p className="text-sm text-muted-foreground">{booking.frequency}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">Total Price</p>
                        <p className="text-2xl font-bold text-primary">${booking.total_price}</p>
                      </div>
                      {booking.add_ons && booking.add_ons.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-foreground mb-2">Add-ons</p>
                          <div className="flex flex-wrap gap-2">
                            {booking.add_ons.map((addon, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {addon}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {(booking.special_instructions || booking.pet_info) && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {booking.special_instructions && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">Special Instructions</p>
                            <p className="text-sm text-muted-foreground">{booking.special_instructions}</p>
                          </div>
                        )}
                        {booking.pet_info && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">Pet Information</p>
                            <p className="text-sm text-muted-foreground">{booking.pet_info}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Contact Support */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-foreground">Need to make changes?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us to reschedule or cancel your booking
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="tel:+15618612752"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  (561) 861-2752
                </a>
                <a 
                  href="mailto:support@cleancollectives.com" 
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
    </>
  );
};

export default CustomerPortal;
