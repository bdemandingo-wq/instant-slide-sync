import SEOHead from "@/components/seo/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Shield, Clock, Printer } from "lucide-react";

const ContractorRateSheet = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEOHead
        title="Contractor Rate Sheet | TIDYWISE"
        description="TIDYWISE contractor rate sheet with service pricing for cleaning professionals. Print or save as PDF."
        canonical="https://www.tidywisecleaning.com/contractor-rate-sheet"
      />
    <div className="min-h-screen bg-background">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="container mx-auto px-4 py-12 print:py-4">
        {/* Print Button */}
        <div className="print:hidden mb-6 flex justify-end">
          <Button onClick={handlePrint} variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </Button>
        </div>

        {/* Rate Sheet Content */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 print:border-0 print:shadow-none print:p-0">
          {/* Header */}
          <div className="text-center border-b border-border pb-6 mb-8">
            <h1 className="font-display text-4xl font-bold text-primary mb-2">TIDYWISE</h1>
            <p className="text-lg text-muted-foreground">Professional Cleaning Services</p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <a href="tel:5615718725" className="flex items-center gap-1 text-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                (561) 571-8725
              </a>
              <a href="mailto:support@tidywisecleaning.com" className="flex items-center gap-1 text-foreground hover:text-primary">
                <Mail className="h-4 w-4" />
                support@tidywisecleaning.com
              </a>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Contractor Rate Sheet</h2>
            <p className="text-muted-foreground">Post-Construction & Commercial Cleaning</p>
          </div>

          {/* Post-Construction Cleaning Rates */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
              Post-Construction Cleaning
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <div>
                  <p className="font-medium">Rough Clean</p>
                  <p className="text-sm text-muted-foreground">Initial debris removal, dust & vacuum</p>
                </div>
                <p className="font-bold text-primary">$0.08 - $0.12/sq ft</p>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <div>
                  <p className="font-medium">Final Clean</p>
                  <p className="text-sm text-muted-foreground">Detailed cleaning, windows, fixtures</p>
                </div>
                <p className="font-bold text-primary">$0.12 - $0.18/sq ft</p>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <div>
                  <p className="font-medium">Touch-Up Clean</p>
                  <p className="text-sm text-muted-foreground">Pre-closing punch list items</p>
                </div>
                <p className="font-bold text-primary">$0.05 - $0.08/sq ft</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="font-medium">Complete Package</p>
                  <p className="text-sm text-muted-foreground">Rough + Final + Touch-Up</p>
                </div>
                <p className="font-bold text-primary">$0.20 - $0.30/sq ft</p>
              </div>
            </div>
          </section>

          {/* Volume Discounts */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
              Volume Discounts
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary">5%</p>
                <p className="text-sm text-muted-foreground">3-5 units/month</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary">10%</p>
                <p className="text-sm text-muted-foreground">6-10 units/month</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary">15%</p>
                <p className="text-sm text-muted-foreground">11+ units/month</p>
              </div>
            </div>
          </section>

          {/* Add-On Services */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
              Add-On Services
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between py-1">
                <span>Window Cleaning (interior)</span>
                <span className="font-medium">$3-5/window</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Pressure Washing</span>
                <span className="font-medium">$0.15-0.25/sq ft</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Carpet Cleaning</span>
                <span className="font-medium">$0.25-0.35/sq ft</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Appliance Deep Clean</span>
                <span className="font-medium">$25-50/unit</span>
              </div>
            </div>
          </section>

          {/* Turnaround Times */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
              Standard Turnaround Times
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Under 2,000 sq ft: <strong>1-2 days</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>2,000-5,000 sq ft: <strong>2-3 days</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>5,000-10,000 sq ft: <strong>3-5 days</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Rush service available: <strong>+25%</strong></span>
              </div>
            </div>
          </section>

          {/* Credentials */}
          <section className="mb-8 bg-primary/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Our Credentials
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>$1M General Liability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Workers' Compensation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Background-Checked Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>COI Available Upon Request</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>References Available</span>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3 border-b border-border pb-2">
              Service Areas
            </h3>
            <p className="text-sm text-muted-foreground">
              <strong>Broward County</strong> • <strong>Palm Beach County</strong> • <strong>Miami-Dade County</strong>
            </p>
          </section>

          {/* Footer CTA */}
          <div className="text-center border-t border-border pt-6">
            <p className="text-lg font-semibold mb-2">Ready to get started?</p>
            <p className="text-muted-foreground mb-4">Contact us for a custom quote on your next project</p>
            <div className="flex justify-center gap-4">
              <a href="tel:5615718725" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium print:bg-transparent print:text-primary print:border print:border-primary">
                <Phone className="h-4 w-4" />
                (561) 571-8725
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              tidywisecleaning.com • Serving South Florida Since 2024
            </p>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white; }
          .print\\:hidden { display: none !important; }
          .print\\:border-0 { border: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:p-0 { padding: 0 !important; }
          .print\\:py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
          .print\\:bg-transparent { background: transparent !important; }
          .print\\:text-primary { color: hsl(var(--primary)) !important; }
          .print\\:border { border: 1px solid !important; }
          .print\\:border-primary { border-color: hsl(var(--primary)) !important; }
        }
      `}</style>
    </div>
    </>
  );
};

export default ContractorRateSheet;
