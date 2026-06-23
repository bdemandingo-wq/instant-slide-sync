import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToHash from "@/components/ScrollToHash";
import { AuthProvider } from "@/contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import usePageTracking from "@/hooks/usePageTracking";
import Index from "./pages/Index";

// Lazy load non-critical routes
const BookingForm = lazy(() => import("./pages/BookingForm"));
const Confirmation = lazy(() => import("./pages/Confirmation"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const CustomerPortal = lazy(() => import("./pages/CustomerPortal"));
const CleanerApplication = lazy(() => import("./pages/CleanerApplication"));
const NotFound = lazy(() => import("./pages/NotFound"));

// County landing pages
const BrowardCountyCleaning = lazy(() => import("./pages/BrowardCountyCleaning"));
const MiamiDadeCleaning = lazy(() => import("./pages/MiamiDadeCleaning"));
const PalmBeachCountyCleaning = lazy(() => import("./pages/PalmBeachCountyCleaning"));

// City landing pages - Broward
const FortLauderdaleCleaning = lazy(() => import("./pages/cities/FortLauderdaleCleaning"));
const HollywoodCleaning = lazy(() => import("./pages/cities/HollywoodCleaning"));
const PompanoBeachCleaning = lazy(() => import("./pages/cities/PompanoBeachCleaning"));
const PlantationCleaning = lazy(() => import("./pages/cities/PlantationCleaning"));
const SunriseCleaning = lazy(() => import("./pages/cities/SunriseCleaning"));
const DavieCleaning = lazy(() => import("./pages/cities/DavieCleaning"));
const PembrokePinesCleaning = lazy(() => import("./pages/cities/PembrokePinesCleaning"));
const WestonCleaning = lazy(() => import("./pages/cities/WestonCleaning"));
const DeerfieldBeachCleaning = lazy(() => import("./pages/cities/DeerfieldBeachCleaning"));
const MiramarCleaning = lazy(() => import("./pages/cities/MiramarCleaning"));
const LauderhillCleaning = lazy(() => import("./pages/cities/LauderhillCleaning"));
const TamaracCleaning = lazy(() => import("./pages/cities/TamaracCleaning"));
const CoralSpringsCleaning = lazy(() => import("./pages/cities/CoralSpringsCleaning"));
const CoconutCreekCleaning = lazy(() => import("./pages/cities/CoconutCreekCleaning"));
const MargateCleaning = lazy(() => import("./pages/cities/MargateCleaning"));
const HallandaleBeachCleaning = lazy(() => import("./pages/cities/HallandaleBeachCleaning"));
const ParklandCleaning = lazy(() => import("./pages/cities/ParklandCleaning"));
const CooperCityCleaning = lazy(() => import("./pages/cities/CooperCityCleaning"));
const OaklandParkCleaning = lazy(() => import("./pages/cities/OaklandParkCleaning"));
const WiltonManorsCleaning = lazy(() => import("./pages/cities/WiltonManorsCleaning"));

// City landing pages - Palm Beach
const BocaRatonCleaning = lazy(() => import("./pages/cities/BocaRatonCleaning"));
const WestPalmBeachCleaning = lazy(() => import("./pages/cities/WestPalmBeachCleaning"));
const DelrayBeachCleaning = lazy(() => import("./pages/cities/DelrayBeachCleaning"));
const BoyntonBeachCleaning = lazy(() => import("./pages/cities/BoyntonBeachCleaning"));
const LakeWorthCleaning = lazy(() => import("./pages/cities/LakeWorthCleaning"));
const JupiterCleaning = lazy(() => import("./pages/cities/JupiterCleaning"));
const PalmBeachGardensCleaning = lazy(() => import("./pages/cities/PalmBeachGardensCleaning"));
const WellingtonCleaning = lazy(() => import("./pages/cities/WellingtonCleaning"));
const RoyalPalmBeachCleaning = lazy(() => import("./pages/cities/RoyalPalmBeachCleaning"));

// City landing pages - Miami-Dade
const MiamiBeachCleaning = lazy(() => import("./pages/cities/MiamiBeachCleaning"));
const MiamiCleaning = lazy(() => import("./pages/cities/MiamiCleaning"));
const HialeahCleaning = lazy(() => import("./pages/cities/HialeahCleaning"));
const CoralGablesCleaning = lazy(() => import("./pages/cities/CoralGablesCleaning"));
const NorthMiamiCleaning = lazy(() => import("./pages/cities/NorthMiamiCleaning"));
const NorthMiamiBeachCleaning = lazy(() => import("./pages/cities/NorthMiamiBeachCleaning"));
const AventuraCleaning = lazy(() => import("./pages/cities/AventuraCleaning"));
const SunnyIslesBeachCleaning = lazy(() => import("./pages/cities/SunnyIslesBeachCleaning"));
const DoralCleaning = lazy(() => import("./pages/cities/DoralCleaning"));
const HomesteadCleaning = lazy(() => import("./pages/cities/HomesteadCleaning"));
const MiamiGardensCleaning = lazy(() => import("./pages/cities/MiamiGardensCleaning"));

// Blog posts
const BrowardCostGuide = lazy(() => import("./pages/blog/BrowardCostGuide"));
const MiamiPermitRules = lazy(() => import("./pages/blog/MiamiPermitRules"));
const PalmBeachSeasonalDiscounts = lazy(() => import("./pages/blog/PalmBeachSeasonalDiscounts"));
const MoveInOutCleaningChecklist = lazy(() => import("./pages/blog/MoveInOutCleaningChecklist"));
const DeepCleaningVsStandardCleaning = lazy(() => import("./pages/blog/DeepCleaningVsStandardCleaning"));
const PetFriendlyCleaningTips = lazy(() => import("./pages/blog/PetFriendlyCleaningTips"));
const HurricaneSeasonCleaningPrep = lazy(() => import("./pages/blog/HurricaneSeasonCleaningPrep"));
const HowToPrepareForCleaningService = lazy(() => import("./pages/blog/HowToPrepareForCleaningService"));
const SpringCleaningGuide = lazy(() => import("./pages/blog/SpringCleaningGuide"));
const EcoFriendlyCleaningProducts = lazy(() => import("./pages/blog/EcoFriendlyCleaningProducts"));
const AllergyFreeHomeCleaning = lazy(() => import("./pages/blog/AllergyFreeHomeCleaning"));
const HolidayCleaningChecklist = lazy(() => import("./pages/blog/HolidayCleaningChecklist"));
const BathroomDeepCleaningGuide = lazy(() => import("./pages/blog/BathroomDeepCleaningGuide"));
const KitchenCleaningHacks = lazy(() => import("./pages/blog/KitchenCleaningHacks"));
const AirbnbTurnoverCleaningTips = lazy(() => import("./pages/blog/AirbnbTurnoverCleaningTips"));
const MoldPreventionFlorida = lazy(() => import("./pages/blog/MoldPreventionFlorida"));
const CondoCleaningRules = lazy(() => import("./pages/blog/CondoCleaningRules"));
const PostConstructionCleaningGuide = lazy(() => import("./pages/blog/PostConstructionCleaningGuide"));
const AiBlogPost = lazy(() => import("./pages/blog/AiBlogPost"));

// Competitor comparison pages
const MollyMaidAlternative = lazy(() => import("./pages/vs/MollyMaidAlternative"));
const MerryMaidsAlternative = lazy(() => import("./pages/vs/MerryMaidsAlternative"));
const HandyAlternative = lazy(() => import("./pages/vs/HandyAlternative"));
const TheMaidsAlternative = lazy(() => import("./pages/vs/TheMaidsAlternative"));
const CleaningServiceAlternatives = lazy(() => import("./pages/vs/CleaningServiceAlternatives"));
const TaskRabbitAlternative = lazy(() => import("./pages/vs/TaskRabbitAlternative"));
const AmazonHomeServicesAlternative = lazy(() => import("./pages/vs/AmazonHomeServicesAlternative"));

// Programmatic SEO pages
const HouseCleaningCostGuide = lazy(() => import("./pages/HouseCleaningCostGuide"));

// Targeted local blog posts
const HouseCleaningFortLauderdale = lazy(() => import("./pages/blog/HouseCleaningFortLauderdale"));
const DeepCleaningServiceMiami = lazy(() => import("./pages/blog/DeepCleaningServiceMiami"));
const MoveOutCleaningBocaRaton = lazy(() => import("./pages/blog/MoveOutCleaningBocaRaton"));
const HouseCleaningWestPalmBeach = lazy(() => import("./pages/blog/HouseCleaningWestPalmBeach"));
const AirbnbCleaningFortLauderdale = lazy(() => import("./pages/blog/AirbnbCleaningFortLauderdale"));
const MoveInCleaningMiami = lazy(() => import("./pages/blog/MoveInCleaningMiami"));
const HouseCleaningHollywood = lazy(() => import("./pages/blog/HouseCleaningHollywood"));
const DeepCleaningBocaRaton = lazy(() => import("./pages/blog/DeepCleaningBocaRaton"));
const MoveOutCleaningWestPalmBeach = lazy(() => import("./pages/blog/MoveOutCleaningWestPalmBeach"));
const HouseCleaningCoralSprings = lazy(() => import("./pages/blog/HouseCleaningCoralSprings"));
const HouseCleaningPembrokePines = lazy(() => import("./pages/blog/HouseCleaningPembrokePines"));
const HouseCleaningPompanoBeach = lazy(() => import("./pages/blog/HouseCleaningPompanoBeach"));
const HouseCleaningMiamiBeach = lazy(() => import("./pages/blog/HouseCleaningMiamiBeach"));
const HouseCleaningDelrayBeach = lazy(() => import("./pages/blog/HouseCleaningDelrayBeach"));
const HouseCleaningWeston = lazy(() => import("./pages/blog/HouseCleaningWeston"));
const HouseCleaningAventura = lazy(() => import("./pages/blog/HouseCleaningAventura"));
const HouseCleaningCoralGables = lazy(() => import("./pages/blog/HouseCleaningCoralGables"));
const HouseCleaningDeerfield = lazy(() => import("./pages/blog/HouseCleaningDeerfield"));
const HouseCleaningBocaRaton = lazy(() => import("./pages/blog/HouseCleaningBocaRaton"));
const HouseCleaningJupiter = lazy(() => import("./pages/blog/HouseCleaningJupiter"));
const HouseCleaningPalmBeachGardens = lazy(() => import("./pages/blog/HouseCleaningPalmBeachGardens"));
const HouseCleaningMiramar = lazy(() => import("./pages/blog/HouseCleaningMiramar"));
const HouseCleaningHialeah = lazy(() => import("./pages/blog/HouseCleaningHialeah"));
const HouseCleaningDavie = lazy(() => import("./pages/blog/HouseCleaningDavie"));
const HouseCleaningHallandaleBeach = lazy(() => import("./pages/blog/HouseCleaningHallandaleBeach"));
const HouseCleaningSunnyIslesBeach = lazy(() => import("./pages/blog/HouseCleaningSunnyIslesBeach"));
const HouseCleaningBoyntonBeach = lazy(() => import("./pages/blog/HouseCleaningBoyntonBeach"));
const HouseCleaningWellington = lazy(() => import("./pages/blog/HouseCleaningWellington"));
const HouseCleaningDoral = lazy(() => import("./pages/blog/HouseCleaningDoral"));
const HouseCleaningNorthMiami = lazy(() => import("./pages/blog/HouseCleaningNorthMiami"));
const HouseCleaningNorthMiamiBeach = lazy(() => import("./pages/blog/HouseCleaningNorthMiamiBeach"));
const HouseCleaningPlantation = lazy(() => import("./pages/blog/HouseCleaningPlantation"));
const HouseCleaningSunrise = lazy(() => import("./pages/blog/HouseCleaningSunrise"));
const HouseCleaningLakeWorth = lazy(() => import("./pages/blog/HouseCleaningLakeWorth"));
const HouseCleaningMiami = lazy(() => import("./pages/blog/HouseCleaningMiami"));
const HouseCleaningParkland = lazy(() => import("./pages/blog/HouseCleaningParkland"));
const HouseCleaningTamarac = lazy(() => import("./pages/blog/HouseCleaningTamarac"));
const HouseCleaningCoconutCreek = lazy(() => import("./pages/blog/HouseCleaningCoconutCreek"));
const HouseCleaningMiamiGardens = lazy(() => import("./pages/blog/HouseCleaningMiamiGardens"));
const HouseCleaningRoyalPalmBeach = lazy(() => import("./pages/blog/HouseCleaningRoyalPalmBeach"));

// /blog/ai/:slug renders AiBlogPost (same component as /blog/:slug). The
// component sets canonical to /blog/<slug>, so search engines consolidate to
// the preferred URL while old /blog/ai/* links keep working with full SEO meta.

// New pages
const Blog = lazy(() => import("./pages/Blog"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const FAQ = lazy(() => import("./pages/FAQ"));
const DeepCleaning = lazy(() => import("./pages/DeepCleaning"));
const StandardCleaning = lazy(() => import("./pages/StandardCleaning"));
const MoveInOutCleaning = lazy(() => import("./pages/MoveInOutCleaning"));
const CarpetCleaning = lazy(() => import("./pages/CarpetCleaning"));
const UpholsteryCleaning = lazy(() => import("./pages/UpholsteryCleaning"));
const UpholsteryCarpetPricing = lazy(() => import("./pages/UpholsteryCarpetPricing"));
const ReferralProgram = lazy(() => import("./pages/ReferralProgram"));
const ContractorRateSheet = lazy(() => import("./pages/ContractorRateSheet"));
const AirbnbCleaning = lazy(() => import("./pages/AirbnbCleaning"));
const OfficeCleaning = lazy(() => import("./pages/OfficeCleaning"));
const PostConstructionCleaning = lazy(() => import("./pages/PostConstructionCleaning"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Reviews = lazy(() => import("./pages/Reviews"));

const queryClient = new QueryClient();

// Wrapper component to use hooks inside Router
const AppRoutes = () => {
  usePageTracking();
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Legacy route commonly used by old links */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirmation/:bookingId" element={<Confirmation />} />
        {/* Legacy: /confirmation without an id redirects home */}
        <Route path="/confirmation" element={<Navigate to="/" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/my-bookings" element={<CustomerPortal />} />
        <Route path="/apply" element={<CleanerApplication />} />
        
        {/* New Pages */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/deep-cleaning" element={<DeepCleaning />} />
        <Route path="/standard-cleaning" element={<StandardCleaning />} />
        <Route path="/move-in-out-cleaning" element={<MoveInOutCleaning />} />
        <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
        <Route path="/upholstery-cleaning" element={<UpholsteryCleaning />} />
        <Route path="/upholstery-carpet-cleaning-pricing" element={<UpholsteryCarpetPricing />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
        <Route path="/contractor-rate-sheet" element={<ContractorRateSheet />} />
        <Route path="/airbnb-cleaning" element={<AirbnbCleaning />} />
        <Route path="/office-cleaning" element={<OfficeCleaning />} />
        <Route path="/post-construction-cleaning" element={<PostConstructionCleaning />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/reviews" element={<Reviews />} />
        
        {/* County Landing Pages */}
        <Route path="/broward-county-cleaning" element={<BrowardCountyCleaning />} />
        <Route path="/miami-dade-cleaning" element={<MiamiDadeCleaning />} />
        <Route path="/palm-beach-county-cleaning" element={<PalmBeachCountyCleaning />} />
        
        {/* City Landing Pages - Broward */}
        <Route path="/fort-lauderdale-cleaning" element={<FortLauderdaleCleaning />} />
        <Route path="/hollywood-cleaning" element={<HollywoodCleaning />} />
        <Route path="/pompano-beach-cleaning" element={<PompanoBeachCleaning />} />
        <Route path="/plantation-cleaning" element={<PlantationCleaning />} />
        <Route path="/sunrise-cleaning" element={<SunriseCleaning />} />
        <Route path="/davie-cleaning" element={<DavieCleaning />} />
        <Route path="/pembroke-pines-cleaning" element={<PembrokePinesCleaning />} />
        <Route path="/weston-cleaning" element={<WestonCleaning />} />
        <Route path="/deerfield-beach-cleaning" element={<DeerfieldBeachCleaning />} />
        <Route path="/miramar-cleaning" element={<MiramarCleaning />} />
        <Route path="/lauderhill-cleaning" element={<LauderhillCleaning />} />
        <Route path="/tamarac-cleaning" element={<TamaracCleaning />} />
        <Route path="/coral-springs-cleaning" element={<CoralSpringsCleaning />} />
        
        {/* City Landing Pages - Palm Beach */}
        <Route path="/boca-raton-cleaning" element={<BocaRatonCleaning />} />
        <Route path="/west-palm-beach-cleaning" element={<WestPalmBeachCleaning />} />
        <Route path="/delray-beach-cleaning" element={<DelrayBeachCleaning />} />
        <Route path="/boynton-beach-cleaning" element={<BoyntonBeachCleaning />} />
        <Route path="/lake-worth-cleaning" element={<LakeWorthCleaning />} />
        <Route path="/jupiter-cleaning" element={<JupiterCleaning />} />
        <Route path="/palm-beach-gardens-cleaning" element={<PalmBeachGardensCleaning />} />
        <Route path="/wellington-cleaning" element={<WellingtonCleaning />} />
        <Route path="/royal-palm-beach-cleaning" element={<RoyalPalmBeachCleaning />} />
        
        {/* City Landing Pages - Miami-Dade */}
        <Route path="/miami-beach-cleaning" element={<MiamiBeachCleaning />} />
        <Route path="/miami-cleaning" element={<MiamiCleaning />} />
        <Route path="/hialeah-cleaning" element={<HialeahCleaning />} />
        <Route path="/coral-gables-cleaning" element={<CoralGablesCleaning />} />
        <Route path="/north-miami-cleaning" element={<NorthMiamiCleaning />} />
        <Route path="/north-miami-beach-cleaning" element={<NorthMiamiBeachCleaning />} />
        <Route path="/aventura-cleaning" element={<AventuraCleaning />} />
        <Route path="/sunny-isles-beach-cleaning" element={<SunnyIslesBeachCleaning />} />
        <Route path="/doral-cleaning" element={<DoralCleaning />} />
        <Route path="/homestead-cleaning" element={<HomesteadCleaning />} />
        <Route path="/miami-gardens-cleaning" element={<MiamiGardensCleaning />} />
        
        {/* City Landing Pages - Broward (additional) */}
        <Route path="/coconut-creek-cleaning" element={<CoconutCreekCleaning />} />
        <Route path="/margate-cleaning" element={<MargateCleaning />} />
        <Route path="/hallandale-beach-cleaning" element={<HallandaleBeachCleaning />} />
        <Route path="/parkland-cleaning" element={<ParklandCleaning />} />
        <Route path="/cooper-city-cleaning" element={<CooperCityCleaning />} />
        <Route path="/oakland-park-cleaning" element={<OaklandParkCleaning />} />
        <Route path="/wilton-manors-cleaning" element={<WiltonManorsCleaning />} />
        
        {/* Blog Posts */}
        <Route path="/blog/broward-cost-guide" element={<BrowardCostGuide />} />
        <Route path="/blog/miami-permit-rules" element={<MiamiPermitRules />} />
        <Route path="/blog/palm-beach-seasonal-discounts" element={<PalmBeachSeasonalDiscounts />} />
        <Route path="/blog/move-in-out-cleaning-checklist" element={<MoveInOutCleaningChecklist />} />
        <Route path="/blog/deep-cleaning-vs-standard-cleaning" element={<DeepCleaningVsStandardCleaning />} />
        <Route path="/blog/pet-friendly-cleaning-tips" element={<PetFriendlyCleaningTips />} />
        <Route path="/blog/hurricane-season-cleaning-prep" element={<HurricaneSeasonCleaningPrep />} />
        <Route path="/blog/how-to-prepare-for-cleaning-service" element={<HowToPrepareForCleaningService />} />
        <Route path="/blog/spring-cleaning-guide-south-florida" element={<SpringCleaningGuide />} />
        <Route path="/blog/eco-friendly-cleaning-products" element={<EcoFriendlyCleaningProducts />} />
        <Route path="/blog/allergy-free-home-cleaning" element={<AllergyFreeHomeCleaning />} />
        <Route path="/blog/holiday-cleaning-checklist" element={<HolidayCleaningChecklist />} />
        <Route path="/blog/bathroom-deep-cleaning-guide" element={<BathroomDeepCleaningGuide />} />
        <Route path="/blog/kitchen-cleaning-hacks" element={<KitchenCleaningHacks />} />
        <Route path="/blog/airbnb-turnover-cleaning-tips" element={<AirbnbTurnoverCleaningTips />} />
        <Route path="/blog/mold-prevention-florida-homes" element={<MoldPreventionFlorida />} />
        <Route path="/blog/condo-cleaning-rules-south-florida" element={<CondoCleaningRules />} />
        <Route path="/blog/post-construction-cleaning-guide" element={<PostConstructionCleaningGuide />} />
        
        {/* Competitor comparison pages */}
        <Route path="/molly-maid-alternative" element={<MollyMaidAlternative />} />
        <Route path="/merry-maids-alternative" element={<MerryMaidsAlternative />} />
        <Route path="/handy-alternative" element={<HandyAlternative />} />
        <Route path="/the-maids-alternative" element={<TheMaidsAlternative />} />
        <Route path="/cleaning-service-alternatives" element={<CleaningServiceAlternatives />} />
        <Route path="/taskrabbit-alternative" element={<TaskRabbitAlternative />} />
        <Route path="/amazon-home-services-alternative" element={<AmazonHomeServicesAlternative />} />

        {/* Programmatic SEO pages */}
        <Route path="/house-cleaning-cost-south-florida" element={<HouseCleaningCostGuide />} />

        {/* Targeted local blog posts */}
        <Route path="/blog/house-cleaning-fort-lauderdale" element={<HouseCleaningFortLauderdale />} />
        <Route path="/blog/deep-cleaning-service-miami" element={<DeepCleaningServiceMiami />} />
        <Route path="/blog/move-out-cleaning-boca-raton" element={<MoveOutCleaningBocaRaton />} />
        <Route path="/blog/house-cleaning-west-palm-beach" element={<HouseCleaningWestPalmBeach />} />
        <Route path="/blog/airbnb-cleaning-fort-lauderdale" element={<AirbnbCleaningFortLauderdale />} />
        <Route path="/blog/move-in-cleaning-miami" element={<MoveInCleaningMiami />} />
        <Route path="/blog/house-cleaning-hollywood-florida" element={<HouseCleaningHollywood />} />
        <Route path="/blog/deep-cleaning-service-boca-raton" element={<DeepCleaningBocaRaton />} />
        <Route path="/blog/move-out-cleaning-west-palm-beach" element={<MoveOutCleaningWestPalmBeach />} />
        <Route path="/blog/house-cleaning-coral-springs" element={<HouseCleaningCoralSprings />} />
        <Route path="/blog/house-cleaning-pembroke-pines" element={<HouseCleaningPembrokePines />} />
        <Route path="/blog/house-cleaning-pompano-beach" element={<HouseCleaningPompanoBeach />} />
        <Route path="/blog/house-cleaning-miami-beach" element={<HouseCleaningMiamiBeach />} />
        <Route path="/blog/house-cleaning-delray-beach" element={<HouseCleaningDelrayBeach />} />
        <Route path="/blog/house-cleaning-weston" element={<HouseCleaningWeston />} />
        <Route path="/blog/house-cleaning-aventura" element={<HouseCleaningAventura />} />
        <Route path="/blog/house-cleaning-coral-gables" element={<HouseCleaningCoralGables />} />
        <Route path="/blog/house-cleaning-deerfield-beach" element={<HouseCleaningDeerfield />} />
        <Route path="/blog/house-cleaning-boca-raton" element={<HouseCleaningBocaRaton />} />
        <Route path="/blog/house-cleaning-jupiter" element={<HouseCleaningJupiter />} />
        <Route path="/blog/house-cleaning-palm-beach-gardens" element={<HouseCleaningPalmBeachGardens />} />
        <Route path="/blog/house-cleaning-miramar" element={<HouseCleaningMiramar />} />
        <Route path="/blog/house-cleaning-hialeah" element={<HouseCleaningHialeah />} />
        <Route path="/blog/house-cleaning-davie" element={<HouseCleaningDavie />} />
        <Route path="/blog/house-cleaning-hallandale-beach" element={<HouseCleaningHallandaleBeach />} />
        <Route path="/blog/house-cleaning-sunny-isles-beach" element={<HouseCleaningSunnyIslesBeach />} />
        <Route path="/blog/house-cleaning-boynton-beach" element={<HouseCleaningBoyntonBeach />} />
        <Route path="/blog/house-cleaning-wellington" element={<HouseCleaningWellington />} />
        <Route path="/blog/house-cleaning-doral" element={<HouseCleaningDoral />} />
        <Route path="/blog/house-cleaning-north-miami" element={<HouseCleaningNorthMiami />} />
        <Route path="/blog/house-cleaning-north-miami-beach" element={<HouseCleaningNorthMiamiBeach />} />
        <Route path="/blog/house-cleaning-plantation" element={<HouseCleaningPlantation />} />
        <Route path="/blog/house-cleaning-sunrise" element={<HouseCleaningSunrise />} />
        <Route path="/blog/house-cleaning-lake-worth" element={<HouseCleaningLakeWorth />} />
        <Route path="/blog/house-cleaning-miami" element={<HouseCleaningMiami />} />
        <Route path="/blog/house-cleaning-parkland" element={<HouseCleaningParkland />} />
        <Route path="/blog/house-cleaning-tamarac" element={<HouseCleaningTamarac />} />
        <Route path="/blog/house-cleaning-coconut-creek" element={<HouseCleaningCoconutCreek />} />
        <Route path="/blog/house-cleaning-miami-gardens" element={<HouseCleaningMiamiGardens />} />
        <Route path="/blog/house-cleaning-royal-palm-beach" element={<HouseCleaningRoyalPalmBeach />} />

        {/* Old /blog/ai/ URLs render the same component as /blog/:slug.
            AiBlogPost's canonical points to /blog/<slug> for SEO consolidation. */}
        <Route path="/blog/ai/:slug" element={<AiBlogPost />} />

        {/* Dynamic Blog Posts */}
        <Route path="/blog/:slug" element={<AiBlogPost />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToHash />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
