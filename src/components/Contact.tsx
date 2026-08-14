import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(561) 861-2752",
    subtitle: "Available 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@cleancollectives.com",
    subtitle: "Reply within 15 min (9 AM – 6 PM EST)",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Broward, Palm Beach & Miami-Dade",
    subtitle: "South Florida",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send SMS notification via OpenPhone
    try {
      await supabase.functions.invoke("send-sms-notification", {
        body: {
          type: "contact",
          data: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        },
      });
    } catch (smsError) {
      console.error("SMS notification error:", smsError);
    }

    toast({
      title: "Message Sent!",
      description: "We respond within 15 minutes during business hours (9 AM – 6 PM EST).",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Commercial Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for commercial cleaning services? Fill out the form below to discuss your project needs and get a custom quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="shadow-elevated animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name</Label>
                  <Input
                    id="contact-name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Your Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Your Message</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    aria-required="true"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full font-semibold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
