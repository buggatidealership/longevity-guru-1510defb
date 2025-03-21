
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LongevityCalculatorPage from "./pages/LongevityCalculatorPage";
import RetirementCalculator from "./pages/RetirementCalculator";
import NotFound from "./pages/NotFound";
import HeadCustomization from "./components/HeadCustomization";

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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lifespan" element={<LongevityCalculatorPage />} />
          <Route path="/retirementsavings" element={<RetirementCalculator />} />
          <Route path="/retirement-calculator" element={<RetirementCalculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
