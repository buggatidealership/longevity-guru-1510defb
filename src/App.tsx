
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import LongevityCalculatorPage from "./pages/LongevityCalculatorPage";
import RetirementCalculator from "./pages/RetirementCalculator";
import FertilityCalculator from "./pages/FertilityCalculator";
import GrowthPercentilePage from "./pages/GrowthPercentilePage";
import AdultHeightPredictorPage from "./pages/AdultHeightPredictorPage";
import MetabolismCalculatorPage from "./pages/MetabolismCalculatorPage";
import BreastImplantCalculatorPage from "./pages/BreastImplantCalculatorPage";
import BotoxCalculatorPage from "./pages/BotoxCalculatorPage";
import AlcoholCalculatorPage from "./pages/AlcoholCalculatorPage";
import BaldnessRiskCalculatorPage from "./pages/BaldnessRiskCalculatorPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import HeadCustomization from "./components/HeadCustomization";
// Import resource pages
import ResourcesIndex from "./pages/resources";
import HowToIncreaseLifeExpectancy from "./pages/resources/how-to-increase-life-expectancy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HeadCustomization 
        preconnectUrls={[
          'https://www.googletagmanager.com',
          'https://pagead2.googlesyndication.com'
        ]}
        preloadAssets={[
          { href: '/src/index.css', as: 'style' }
        ]}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* SEO-optimized descriptive URLs */}
          <Route path="/life-expectancy-calculator" element={<LongevityCalculatorPage />} />
          <Route path="/retirement-savings-calculator" element={<RetirementCalculator />} />
          <Route path="/female-fertility-calculator" element={<FertilityCalculator />} />
          <Route path="/child-growth-percentile-calculator" element={<GrowthPercentilePage />} />
          <Route path="/adult-height-predictor-calculator" element={<AdultHeightPredictorPage />} />
          <Route path="/metabolism-calculator" element={<MetabolismCalculatorPage />} />
          <Route path="/breast-implant-size-calculator" element={<BreastImplantCalculatorPage />} />
          <Route path="/botox-dosage-calculator" element={<BotoxCalculatorPage />} />
          <Route path="/alcohol-impact-calculator" element={<AlcoholCalculatorPage />} />
          <Route path="/baldness-risk-calculator" element={<BaldnessRiskCalculatorPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Resource Articles */}
          <Route path="/resources" element={<ResourcesIndex />} />
          <Route path="/resources/how-to-increase-life-expectancy" element={<HowToIncreaseLifeExpectancy />} />
          
          {/* Legacy URL routes for backward compatibility */}
          <Route path="/lifespan" element={<LongevityCalculatorPage />} />
          <Route path="/retirementsavings" element={<RetirementCalculator />} />
          <Route path="/fertility" element={<FertilityCalculator />} />
          <Route path="/growth" element={<GrowthPercentilePage />} />
          <Route path="/adultheight" element={<AdultHeightPredictorPage />} />
          <Route path="/metabolism" element={<MetabolismCalculatorPage />} />
          <Route path="/breastimplant" element={<BreastImplantCalculatorPage />} />
          <Route path="/botox" element={<BotoxCalculatorPage />} />
          <Route path="/alcohol" element={<AlcoholCalculatorPage />} />
          <Route path="/baldness" element={<BaldnessRiskCalculatorPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
