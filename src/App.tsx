
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LongevityCalculatorPage from "./pages/LongevityCalculatorPage";
import RetirementCalculator from "./pages/RetirementCalculator";
import FertilityCalculator from "./pages/FertilityCalculator";
import GrowthPercentilePage from "./pages/GrowthPercentilePage";
import AdultHeightPredictorPage from "./pages/AdultHeightPredictorPage";
import MetabolismCalculatorPage from "./pages/MetabolismCalculatorPage";
import BreastImplantCalculatorPage from "./pages/BreastImplantCalculatorPage";
import BotoxCalculatorPage from "./pages/BotoxCalculatorPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import HeadCustomization from "./components/HeadCustomization";
import { useState, useEffect } from "react";

// Configure the query client with optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (renamed from cacheTime in newer versions)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark the app as loaded after first render
    setIsLoaded(true);
    
    // Add performance marker
    if (window.performance && window.performance.mark) {
      window.performance.mark('app-rendered');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HeadCustomization 
          preconnectUrls={[
            'https://www.googletagmanager.com',
            'https://pagead2.googlesyndication.com',
            'https://cdn.gpteng.co'
          ]}
          preloadAssets={[
            { href: '/src/index.css', as: 'style' }
          ]}
          dnsPrefetch={[
            'https://www.googletagmanager.com',
            'https://pagead2.googlesyndication.com',
            'https://cdn.gpteng.co'
          ]}
          preloadFonts={true}
          deferScripts={true}
        />
        <BrowserRouter>
          <div className={`app-container ${isLoaded ? 'app-loaded' : 'app-loading'}`}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lifespan" element={<LongevityCalculatorPage />} />
              <Route path="/retirementsavings" element={<RetirementCalculator />} />
              <Route path="/fertility" element={<FertilityCalculator />} />
              <Route path="/growth" element={<GrowthPercentilePage />} />
              <Route path="/adultheight" element={<AdultHeightPredictorPage />} />
              <Route path="/metabolism" element={<MetabolismCalculatorPage />} />
              <Route path="/breastimplant" element={<BreastImplantCalculatorPage />} />
              <Route path="/botox" element={<BotoxCalculatorPage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
