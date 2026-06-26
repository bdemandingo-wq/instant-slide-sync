import { useState } from "react";
import SEOHead from "@/components/seo/SEOHead";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowLeft, Upload, X } from "lucide-react";
import logo from "@/assets/logo-optimized.webp";

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  hasTransportation: z.boolean(),
  hasSupplies: z.boolean(),
  yearsExperience: z.number().min(0).max(50),
  hasInsurance: z.boolean(),
  canProvideReferences: z.boolean(),
  workAreas: z.array(z.string()).min(1, "Please select at least one work area"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const workAreaOptions = [
  { id: "broward", label: "Broward County" },
  { id: "palm-beach", label: "Palm Beach County" },
  { id: "miami-dade", label: "Miami Dade County" },
];

const CleanerApplication = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      hasTransportation: false,
      hasSupplies: false,
      yearsExperience: 0,
      hasInsurance: false,
      canProvideReferences: false,
      workAreas: [],
    },
  });

  const workAreas = watch("workAreas");

  const handleWorkAreaChange = (areaId: string, checked: boolean) => {
    const current = workAreas || [];
    if (checked) {
      setValue("workAreas", [...current, areaId]);
    } else {
      setValue("workAreas", current.filter((id) => id !== areaId));
    }
  };

  // Cap the upload: at most 5 files, each ≤ 10 MB. Without this an
  // applicant could accidentally pick their whole photo library, kicking
  // off dozens of multi-MB uploads sequentially with no feedback beyond
  // a spinner — long submission times, storage cost burn, drop-off
  // mid-upload. 5×10MB is plenty for ID + work-area photos.
  const MAX_FILES = 5;
  const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const incoming = Array.from(e.target.files);
    const oversize = incoming.filter((f) => f.size > MAX_FILE_BYTES);
    if (oversize.length > 0) {
      toast({
        title: "File too large",
        description: `${oversize[0].name} is over 10 MB. Please choose a smaller image.`,
        variant: "destructive",
      });
      return;
    }
    setUploadedFiles((prev) => {
      const next = [...prev, ...incoming];
      if (next.length > MAX_FILES) {
        toast({
          title: `Up to ${MAX_FILES} files`,
          description: `Keeping the first ${MAX_FILES}.`,
        });
      }
      return next.slice(0, MAX_FILES);
    });
    // Reset the input so re-picking the same file works.
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = async (): Promise<string[]> => {
    const filenames: string[] = [];
    
    for (const file of uploadedFiles) {
      // file.name.split(".").pop() returns undefined for extension-less
      // filenames ("resume", "scan") and the upload key would become
      // "<uuid>.undefined" — works but signals "broken" in storage. Derive
      // from MIME first, fall back to "bin".
      const mimeExt = file.type.split("/")[1];
      const nameExt = file.name.includes(".") ? file.name.split(".").pop() : undefined;
      const fileExt = (nameExt || mimeExt || "bin").toLowerCase().replace(/[^a-z0-9]/g, "");
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      
      const { error } = await supabase.storage
        .from("supply-pictures")
        .upload(fileName, file);
      
      if (error) {
        console.error("Upload error:", error);
        throw error;
      }
      
      // Store just the filename - admins will generate signed URLs to view
      filenames.push(fileName);
    }
    
    return filenames;
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      let pictureUrls: string[] = [];
      
      if (uploadedFiles.length > 0) {
        setUploading(true);
        pictureUrls = await uploadFiles();
        setUploading(false);
      }
      
      const { error } = await supabase.from("cleaner_applications").insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        has_transportation: data.hasTransportation,
        has_supplies: data.hasSupplies,
        years_experience: data.yearsExperience,
        has_insurance: data.hasInsurance,
        can_provide_references: data.canProvideReferences,
        supply_pictures: pictureUrls,
        work_areas: data.workAreas,
      });
      
      if (error) throw error;

      // Send SMS notification via OpenPhone
      try {
        await supabase.functions.invoke("send-sms-notification", {
          body: {
            type: "cleaner_application",
            data: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              yearsExperience: data.yearsExperience,
              hasTransportation: data.hasTransportation,
              hasSupplies: data.hasSupplies,
              hasInsurance: data.hasInsurance,
              workAreas: data.workAreas,
            },
          },
        });
      } catch (smsError) {
        console.error("SMS notification error:", smsError);
      }
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application and get back to you soon.",
      });
      
      navigate("/");
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Cleaning Jobs South Florida | Apply Now | CLEAN COLLECTIVE Careers"
        description="Now hiring experienced cleaners in Broward, Miami-Dade & Palm Beach County. Flexible hours, competitive pay, steady recurring clients. Apply today."
        canonical="https://www.tidywisecleaning.com/apply"
      />
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="CLEAN COLLECTIVE — South Florida house cleaning company logo" className="h-10 w-auto" />
              <span className="font-display text-xl font-bold text-foreground">CLEAN COLLECTIVE</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <header className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apply to Become a Clean Collective Cleaner in South Florida
          </h1>
          <p className="text-muted-foreground mb-4">
            CLEAN COLLECTIVE is hiring experienced, reliable cleaning professionals across{" "}
            <Link to="/broward-county-cleaning" className="text-primary hover:underline">Broward County</Link>,{" "}
            <Link to="/miami-dade-cleaning" className="text-primary hover:underline">Miami-Dade County</Link>, and{" "}
            <Link to="/palm-beach-county-cleaning" className="text-primary hover:underline">Palm Beach County</Link>.
            We serve over 40 South Florida cities including{" "}
            <Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Fort Lauderdale</Link>,{" "}
            <Link to="/miami-cleaning" className="text-primary hover:underline">Miami</Link>,{" "}
            <Link to="/boca-raton-cleaning" className="text-primary hover:underline">Boca Raton</Link>, and{" "}
            <Link to="/west-palm-beach-cleaning" className="text-primary hover:underline">West Palm Beach</Link>.
          </p>
          <p className="text-muted-foreground mb-4">
            We're looking for cleaners who take pride in their work and want consistent, well-paying jobs with a flexible schedule.
            You'll be matched with residential clients booking{" "}
            <Link to="/standard-cleaning" className="text-primary hover:underline">standard cleaning</Link>,{" "}
            <Link to="/deep-cleaning" className="text-primary hover:underline">deep cleaning</Link>,{" "}
            <Link to="/move-in-out-cleaning" className="text-primary hover:underline">move in/out cleaning</Link>, and{" "}
            <Link to="/airbnb-cleaning" className="text-primary hover:underline">Airbnb turnover cleaning</Link> — plus
            opportunities for{" "}
            <Link to="/office-cleaning" className="text-primary hover:underline">commercial office cleaning</Link> and{" "}
            <Link to="/post-construction-cleaning" className="text-primary hover:underline">post-construction cleaning</Link> jobs.
          </p>
          <h2 className="font-display text-xl font-bold text-foreground mt-6 mb-3">What We Look For</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            <li>2+ years of professional cleaning experience preferred</li>
            <li>Reliable transportation to client homes across South Florida</li>
            <li>Your own basic cleaning supplies (we'll supply specialty items)</li>
            <li>Liability insurance (or willingness to obtain it)</li>
            <li>References from prior clients or employers</li>
            <li>Strong attention to detail and consistent reliability</li>
          </ul>
          <h2 className="font-display text-xl font-bold text-foreground mt-6 mb-3">Why Cleaners Choose CLEAN COLLECTIVE</h2>
          <p className="text-muted-foreground mb-4">
            Competitive pay, flexible scheduling, and a steady stream of bookings. Our cleaners average more recurring clients than gig platforms because customers love working with the same trusted team. Read about our quality standards on our{" "}
            <Link to="/faq" className="text-primary hover:underline">FAQ page</Link> or see how we compare to{" "}
            <Link to="/handy-alternative" className="text-primary hover:underline">Handy</Link> and{" "}
            <Link to="/molly-maid-alternative" className="text-primary hover:underline">Molly Maid</Link>.
            Want to see all the cities we serve? Visit our{" "}
            <Link to="/service-areas" className="text-primary hover:underline">South Florida service areas</Link> page.
          </p>
        </header>

        <section className="max-w-3xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Join the Clean Collective Cleaning Team</h2>
          <p className="mb-4">
            Clean Collective is hiring professional cleaners across South Florida — including Deerfield Beach, Boca Raton, Fort Lauderdale, Pompano Beach, Coral Springs, and surrounding Broward and Palm Beach County areas. We're looking for reliable, detail-oriented cleaners who take pride in their work and want to grow with a fast-growing cleaning company.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Why Cleaners Choose Clean Collective</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Competitive pay</strong> — Earn weekly with transparent payment terms</li>
            <li><strong>Flexible scheduling</strong> — Work when you want, where you want</li>
            <li><strong>Steady client base</strong> — We bring the bookings, you bring the quality</li>
            <li><strong>Supportive team</strong> — Real support from real people, not bots</li>
            <li><strong>Growth opportunities</strong> — Top performers get more bookings and bonuses</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">What We Look For</h3>
          <p className="mb-4">
            We hire cleaners with experience in residential cleaning, attention to detail, reliable transportation, and a positive attitude. Whether you're an experienced house cleaner or transitioning from another industry with strong work ethic, we want to hear from you.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">How to Apply</h3>
          <p className="mb-4">
            Fill out the application below. We review every application within 48 hours and reach out to qualified candidates for a brief phone interview. If selected, you'll complete a quick onboarding and start receiving cleaning jobs in your area.
          </p>
        </section>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-display">Application Form</CardTitle>
            <CardDescription>
              Apply to become a CLEAN COLLECTIVE cleaning professional
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(555) 555-5555"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="yearsExperience">Years of Experience *</Label>
                  <Input
                    id="yearsExperience"
                    type="number"
                    min={0}
                    max={50}
                    {...register("yearsExperience", { valueAsNumber: true })}
                    placeholder="0"
                    className="mt-1"
                  />
                  {errors.yearsExperience && (
                    <p className="text-sm text-destructive mt-1">{errors.yearsExperience.message}</p>
                  )}
                </div>
              </div>

              {/* Yes/No Questions */}
              <div className="space-y-4 border-t border-border pt-6">
                <h3 className="font-semibold text-foreground">Requirements</h3>
                
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="hasTransportation"
                    checked={watch("hasTransportation")}
                    onCheckedChange={(checked) => setValue("hasTransportation", !!checked)}
                  />
                  <Label htmlFor="hasTransportation" className="cursor-pointer">
                    Do you have reliable transportation?
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="hasSupplies"
                    checked={watch("hasSupplies")}
                    onCheckedChange={(checked) => setValue("hasSupplies", !!checked)}
                  />
                  <Label htmlFor="hasSupplies" className="cursor-pointer">
                    Do you have your own cleaning supplies?
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="hasInsurance"
                    checked={watch("hasInsurance")}
                    onCheckedChange={(checked) => setValue("hasInsurance", !!checked)}
                  />
                  <Label htmlFor="hasInsurance" className="cursor-pointer">
                    Do you have liability insurance?
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="canProvideReferences"
                    checked={watch("canProvideReferences")}
                    onCheckedChange={(checked) => setValue("canProvideReferences", !!checked)}
                  />
                  <Label htmlFor="canProvideReferences" className="cursor-pointer">
                    Can you provide references?
                  </Label>
                </div>
              </div>

              {/* Work Areas */}
              <div className="space-y-4 border-t border-border pt-6">
                <h3 className="font-semibold text-foreground">Service Areas *</h3>
                <p className="text-sm text-muted-foreground">
                  Select the areas where you can provide cleaning services
                </p>
                
                <div className="space-y-3">
                  {workAreaOptions.map((area) => (
                    <div key={area.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={area.id}
                        checked={workAreas?.includes(area.id)}
                        onCheckedChange={(checked) => handleWorkAreaChange(area.id, !!checked)}
                      />
                      <Label htmlFor={area.id} className="cursor-pointer">
                        {area.label}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.workAreas && (
                  <p className="text-sm text-destructive">{errors.workAreas.message}</p>
                )}
              </div>

              {/* Supply Pictures Upload */}
              <div className="space-y-4 border-t border-border pt-6">
                <h3 className="font-semibold text-foreground">Supply Pictures</h3>
                <p className="text-sm text-muted-foreground">
                  Upload photos of your cleaning supplies (optional)
                </p>
                
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="supplyPictures"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="supplyPictures"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload images
                    </span>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-2"
                      >
                        <span className="text-sm truncate">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {uploading ? "Uploading files..." : "Submitting..."}
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <section className="max-w-3xl mx-auto px-4 py-8 border-t mt-8">
          <h3 className="text-xl font-semibold mb-4">Learn More About Clean Collective</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link to="/" className="text-primary hover:underline">About Clean Collective Cleaning Services</Link></li>
            <li><Link to="/reviews" className="text-primary hover:underline">See Our 4.9★ Customer Reviews</Link></li>
            <li><Link to="/deerfield-beach-cleaning" className="text-primary hover:underline">Cleaning Services in Deerfield Beach</Link></li>
            <li><Link to="/fort-lauderdale-cleaning" className="text-primary hover:underline">Cleaning Services in Fort Lauderdale</Link></li>
            <li><Link to="/boca-raton-cleaning" className="text-primary hover:underline">Cleaning Services in Boca Raton</Link></li>
          </ul>
        </section>
      </main>
    </div>
    </>
  );
};

export default CleanerApplication;
