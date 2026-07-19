import { Link } from "react-router-dom";
import { Phone, Gift, Users, DollarSign, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOSchema from "@/components/seo/SEOSchema";
import StickyCallButton from "@/components/seo/StickyCallButton";

const ReferralProgram = () => {
  const steps = [
    {
      icon: Users,
      title: "Share with Friends",
      description: "Tell your friends and family about Clean Collective cleaning services.",
    },
    {
      icon: Gift,
      title: "They Book & Clean",
      description: "When they book their first cleaning and mention your name, they get $25 off.",
    },
    {
      icon: DollarSign,
      title: "You Earn Credit",
      description: "Once their cleaning is complete, you receive $25 credit toward your next service.",
    },
  ];

  return (
    <>
      <SEOSchema
        pageTitle="Referral Program | Earn $25 Credit | Clean Collective Cleaning"
        pageDescription="Refer a friend to Clean Collective cleaning services and earn $25 credit. Your friend gets $25 off their first cleaning too! South Florida referral program."
        canonicalUrl="https://www.cleancollectives.com/referral-program"
        pageType="home"
        county="South Florida"
      />
      <main className="min-h-screen">
        <Navbar />
        
        <section className="relative min-h-[60vh] flex items-center justify-center pt-16 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Earn While You Share</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Refer a Friend, Get $25
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Love our cleaning service? Share the sparkle with friends and family! 
              When they book their first cleaning, you both save $25.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <a href="tel:+15618612752" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call to Refer: (561) 861-2752
                </a>
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
              <Heart className="w-5 h-5" />
              <span className="font-medium">No limit on referrals—earn unlimited credits!</span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm md:right-[calc(50%-60px)]">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  For You (The Referrer)
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">$25 credit</strong> for each successful referral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">No limit</strong> on how many friends you can refer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Stack credits</strong> toward free cleanings</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  For Your Friend
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">$25 off</strong> their first cleaning service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">No minimum</strong> booking required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Same great service</strong> you already love</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Program Details
            </h2>
            <div className="bg-card border border-border rounded-xl p-8">
              <ul className="space-y-4 text-muted-foreground">
                <li>• Referral credit is applied after the referred friend's first cleaning is complete.</li>
                <li>• Your friend must mention your name when booking to activate the referral.</li>
                <li>• Credits can be used toward any Clean Collective cleaning service.</li>
                <li>• Credits do not expire and can be combined.</li>
                <li>• Both new and existing customers can refer friends.</li>
                <li>• Referred friends must be first-time Clean Collective customers.</li>
                <li>• Clean Collective reserves the right to modify or end this program at any time.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Gift className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Start Referring Today!
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Call us to refer a friend or have them mention your name when booking. 
              It's that simple!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-background text-foreground hover:bg-background/90" asChild>
                <a href="tel:+15618612752">Call (561) 861-2752</a>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                <Link to="/#booking">Book Your Cleaning</Link>
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

export default ReferralProgram;
