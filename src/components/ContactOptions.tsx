import { CalendarDays, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactOptions = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for a Cleaner Home?
          </h2>
          <p className="text-muted-foreground">Choose how you'd like to get started</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="#booking"
            className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg hover:-translate-y-1 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Book Online</h3>
            <p className="text-sm text-muted-foreground">Get an instant quote and pick your date.</p>
          </a>

          <a
            href="tel:+15615718725"
            className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg hover:-translate-y-1 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground">(561) 571-8725 · Mon–Sun 8am–7pm</p>
          </a>

          <button
            onClick={() => {
              const chatBtn = document.getElementById('chatbot-toggle') as HTMLElement;
              if (chatBtn) chatBtn.click();
            }}
            className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg hover:-translate-y-1 transition-all group text-left"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2 text-center">Chat With Us</h3>
            <p className="text-sm text-muted-foreground text-center">Questions? Our AI assistant can help 24/7.</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;