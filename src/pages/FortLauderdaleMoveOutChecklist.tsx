import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight, Printer, ClipboardList, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";
import RelatedLinks from "@/components/seo/RelatedLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ChecklistSection {
  room: string;
  tasks: string[];
}

const CHECKLIST: ChecklistSection[] = [
  {
    room: "Kitchen",
    tasks: [
      "Clean inside and outside of oven, stovetop and range hood",
      "Empty, defrost and wipe inside the refrigerator and freezer",
      "Wipe inside and outside of all cabinets and drawers",
      "Scrub sink, faucet and backsplash",
      "Clean inside microwave and dishwasher",
      "Degrease counters and wipe small-appliance areas",
      "Sweep and mop floor, including under appliances",
    ],
  },
  {
    room: "Bathrooms",
    tasks: [
      "Scrub and disinfect toilet, tub, shower and tile grout",
      "Remove soap scum and hard-water stains from glass and chrome",
      "Wipe inside vanity cabinets and drawers",
      "Clean mirror and polish fixtures",
      "Wipe exhaust fan cover and switch plates",
      "Mop floor and clean baseboards",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    tasks: [
      "Dust ceiling fans, light fixtures and vents",
      "Wipe down closet shelves, rods and doors",
      "Clean baseboards, door frames and switch plates",
      "Spot-clean walls and remove nail holes' dust",
      "Clean window sills, tracks and blinds",
      "Vacuum carpet / mop hard floors throughout",
    ],
  },
  {
    room: "Whole-Home & Final Touches",
    tasks: [
      "Wipe interior windows and patio sliders",
      "Clean laundry area, including inside washer/dryer if staying",
      "Remove all trash and debris",
      "Wipe garage shelving and sweep garage floor",
      "Replace HVAC filter if responsible per lease",
      "Final walk-through against landlord move-out conditions",
    ],
  },
];

const faqItems = [
  {
    q: "What does a move-out cleaning in Fort Lauderdale include?",
    a: "A move-out clean is a top-to-bottom deep clean designed to return a property to inspection-ready condition. It includes inside the oven, refrigerator and cabinets, full bathroom scrub-downs, baseboards, blinds, window sills, interior windows, closets, and floors throughout. The goal is to meet landlord or property-manager standards so you recover your full security deposit.",
  },
  {
    q: "How much does move-out cleaning cost in Fort Lauderdale?",
    a: "Clean Collective move-in/move-out cleaning starts at $300 and scales with home size and condition. A typical 2–3 bedroom apartment or home in Fort Lauderdale runs $300–$600. You'll get an exact, transparent quote online in minutes — no in-home estimate needed.",
  },
  {
    q: "Will a professional move-out clean help me get my deposit back?",
    a: "Yes — cleaning is one of the most common reasons landlords withhold deposits. A professional, inspection-ready clean addresses the exact areas property managers check (appliances, bathrooms, baseboards, floors). Many tenants find the cost of cleaning is far less than the deposit they'd otherwise lose.",
  },
  {
    q: "When should I schedule my move-out cleaning?",
    a: "Book your clean for after your furniture and belongings are removed but before your final walk-through — ideally on your last day or the day before keys are due. Please note Clean Collective does not offer same-day or next-day bookings, so schedule at least two days ahead to lock in your slot.",
  },
];

const FortLauderdaleMoveOutChecklist = () => {
  const printChecklist = () => window.print();

  return (
    <>
      <SEOSchema
        pageTitle="Fort Lauderdale Move-Out Cleaning Checklist (Free & Printable) | Clean Collective"
        pageDescription="Free Fort Lauderdale move-out cleaning checklist — room-by-room tasks to get your full deposit back. Print it, or book an inspection-ready move-out clean from $300."
        canonicalUrl="https://www.cleancollectives.com/fort-lauderdale-move-out-checklist"
        pageType="service"
        county="South Florida"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://www.cleancollectives.com" },
          { name: "Fort Lauderdale Move-Out Checklist", url: "https://www.cleancollectives.com/fort-lauderdale-move-out-checklist" },
        ]}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <ClipboardList className="w-4 h-4" />
                Free Printable Checklist
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Fort Lauderdale Move-Out Cleaning Checklist
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Moving out of a Fort Lauderdale rental? Use this free, room-by-room checklist to leave the
                property inspection-ready and recover your full security deposit. Print it for your move,
                or let Clean Collective handle the whole thing with a professional move-out clean from $300.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link to="/#booking" className="flex items-center gap-2">
                    Book a Move-Out Clean
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={printChecklist} className="flex items-center gap-2">
                  <Printer className="w-5 h-5" />
                  Print Checklist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl text-muted-foreground space-y-4">
            <p>
              Florida landlords and property managers in Broward County inspect a rental against its
              move-in condition before returning a deposit. Cleaning is the single most common reason
              deductions happen — a unit that looks "lived in" rather than "move-in ready" can cost you
              hundreds of dollars. This checklist walks every room so nothing gets missed.
            </p>
            <p>
              Work top to bottom in each room (ceilings and fixtures first, floors last) and tackle the
              kitchen and bathrooms most thoroughly, since those areas get scrutinized hardest. If you'd
              rather skip the labor entirely during an already-stressful move, Clean Collective offers
              inspection-ready move-out cleaning across Fort Lauderdale and all of Broward County.
            </p>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              {CHECKLIST.map((section) => (
                <div key={section.room} className="bg-card border border-border rounded-xl p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    {section.room}
                  </h2>
                  <ul className="space-y-3">
                    {section.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deposit tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-6 text-center">Tips to Protect Your Deposit</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Photograph everything.</strong> Take dated photos of
                every cleaned room before you hand over keys. This documentation is your best defense if a
                landlord disputes the condition later.
              </p>
              <p>
                <strong className="text-foreground">Clean after the truck leaves.</strong> Cleaning an empty
                unit is faster and far more thorough — scuffs and dust hidden behind furniture become
                visible. Schedule your clean for after the move, before the final walk-through.
              </p>
              <p>
                <strong className="text-foreground">Don't forget the small stuff.</strong> Switch plates,
                door frames, blinds, and inside the oven are the details inspectors notice most. A
                professional move-out clean covers all of them automatically.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold mb-4">Skip the Scrubbing — We'll Handle It</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Get an inspection-ready move-out clean in Fort Lauderdale from $300. Transparent pricing,
              background-checked cleaners, satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#booking">Get a Free Quote</Link>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/move-in-out-cleaning">Move-Out Cleaning Details</Link>
              </Button>
            </div>
          </div>
        </section>

        <RelatedLinks currentPage="/fort-lauderdale-move-out-checklist" pageType="service" />
        <Footer />
        <StickyCallButton />
      </main>
    </>
  );
};

export default FortLauderdaleMoveOutChecklist;
