import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/seo/StickyCallButton";
import SEOHead from "@/components/seo/SEOHead";

const faqs = [
  {
    category: "Services",
    questions: [
      {
        q: "What cleaning services do you offer?",
        a: "We offer Standard Cleaning, Deep Cleaning, and Move In/Out Cleaning for residential properties. Our services include dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and more. We also offer add-ons like inside oven, inside refrigerator, and window cleaning."
      },
      {
        q: "What's the difference between Standard and Deep Cleaning?",
        a: "Standard Cleaning is your regular maintenance clean—perfect for homes that are already in good condition. Deep Cleaning is more thorough and includes detailed cleaning of baseboards, inside cabinets, light fixtures, and areas often missed during regular cleaning. We recommend starting with a Deep Clean, then switching to Standard for maintenance."
      },
      {
        q: "Do you bring your own cleaning supplies?",
        a: "Yes! Our team arrives fully equipped with professional-grade, eco-friendly cleaning supplies and equipment. If you prefer we use specific products (due to allergies or preferences), just let us know when booking."
      },
      {
        q: "Do you offer commercial cleaning?",
        a: "Yes! We offer both residential and commercial cleaning services. Contact us to discuss your commercial cleaning needs and get a custom quote."
      }
    ]
  },
  {
    category: "Booking & Scheduling",
    questions: [
      {
        q: "How do I book a cleaning?",
        a: "You can book online through our website (click 'Book Now'), call us at (561) 571-8725, or use our AI chat assistant. We respond within 15 minutes during business hours (9 AM – 6 PM EST)."
      },
      {
        q: "Can I book same-day or next-day cleaning?",
        a: "For same-day or next-day bookings, please call us directly at (561) 571-8725. Online bookings require at least 2 days advance notice to ensure we can schedule the right team for your home."
      },
      {
        q: "What areas do you serve?",
        a: "We serve all of Broward County, Palm Beach County, and Miami-Dade County. This includes cities like Fort Lauderdale, Boca Raton, Miami, Hollywood, West Palm Beach, and 40+ other cities. Check our Service Areas page for the full list."
      },
      {
        q: "How long does a cleaning take?",
        a: "Cleaning time depends on your home size and the type of service. Standard cleaning for a 3-bedroom home typically takes 2-3 hours. Deep cleaning takes 4-6 hours. We'll give you an estimate when you book."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How much does cleaning cost?",
        a: "Pricing depends on your home size, number of bathrooms, and the type of service. Standard cleaning for a 3-bedroom home starts around $160-$220. Deep cleaning is typically 1.5-2x more. Use our online calculator for an instant estimate!"
      },
      {
        q: "Do you offer discounts for recurring cleanings?",
        a: "Yes! We offer 15-20% off for weekly and bi-weekly cleaning schedules. The more frequently you book, the more you save. Ask about our recurring cleaning packages."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, debit cards, and digital payments. Payment is collected after the cleaning is complete and you're satisfied with our work."
      },
      {
        q: "Are there any hidden fees?",
        a: "No hidden fees! The price we quote is the price you pay. If your cleaning requires significantly more work than expected, we'll discuss it with you first before any additional charges."
      }
    ]
  },
  {
    category: "Trust & Safety",
    questions: [
      {
        q: "Are your cleaners background-checked?",
        a: "Absolutely. Every team member undergoes a thorough background check before joining CLEAN COLLECTIVE. Your safety and peace of mind are our top priorities."
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes, CLEAN COLLECTIVE is fully licensed, bonded, and insured. This protects both you and our team in the unlikely event of any issues."
      },
      {
        q: "What if something is damaged during cleaning?",
        a: "We take great care with your belongings, but accidents can happen. If something is damaged, report it within 24 hours and we'll work with you to make it right. Our insurance covers accidental damage."
      },
      {
        q: "What if I'm not satisfied with the cleaning?",
        a: "Your satisfaction is guaranteed! If you're not happy with any aspect of our cleaning, let us know within 24 hours and we'll come back to re-clean the areas of concern at no extra charge."
      }
    ]
  },
  {
    category: "Preparation & Pets",
    questions: [
      {
        q: "Do I need to be home during the cleaning?",
        a: "You don't have to be! Many clients provide a key, lockbox code, or garage code. Just let us know your preference when booking. If you're home, we'll work around you."
      },
      {
        q: "What should I do before the cleaners arrive?",
        a: "Light tidying helps us focus on cleaning rather than organizing. Put away personal items and valuables, clear dishes from the sink, and let us know about any areas needing special attention. Check our blog for detailed prep tips!"
      },
      {
        q: "Do you clean homes with pets?",
        a: "Absolutely! We love pets. Just let us know about your furry friends when booking so we can be prepared. If you have an anxious or aggressive pet, please secure them in a safe area during the cleaning."
      },
      {
        q: "Do you use pet-safe cleaning products?",
        a: "Yes, we use eco-friendly, pet-safe products. If you have specific concerns or prefer certain products, let us know and we'll accommodate your needs."
      }
    ]
  },
  {
    category: "Cancellations & Changes",
    questions: [
      {
        q: "What is your cancellation policy?",
        a: "We understand plans change! Please give us at least 24 hours notice to cancel or reschedule. Cancellations with less than 24 hours notice may incur a fee."
      },
      {
        q: "Can I reschedule my cleaning?",
        a: "Yes! You can reschedule with at least 24 hours notice at no charge. Just call us at (561) 571-8725 or reply to your confirmation email."
      },
      {
        q: "What if my cleaner can't make it?",
        a: "If your assigned cleaner is unavailable, we'll send an equally qualified team member or contact you to reschedule. We always ensure you're taken care of."
      }
    ]
  }
];

const FAQ = () => {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (
    <>
      <SEOHead
        title="Cleaning Service FAQ South Florida | CLEAN COLLECTIVE"
        description="Find answers about CLEAN COLLECTIVE cleaning services, pricing, booking & cancellations. Serving 40+ South Florida cities. Call (561) 571-8725."
        canonical="https://www.tidywisecleaning.com/faq"
        schemaJson={[
          faqSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tidywisecleaning.com" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.tidywisecleaning.com/faq" }
            ]
          }
        ]}
      />
      
      <main className="min-h-screen">
        <Navbar />
        
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions? We've got answers. If you can't find what you're looking for, 
              don't hesitate to reach out!
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <div key={category.category} className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="bg-card border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're here to help! Reach out and we'll respond within 15 minutes during business hours (9 AM – 6 PM EST).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+15615718725" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (561) 571-8725
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#contact">Send a Message</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default FAQ;
