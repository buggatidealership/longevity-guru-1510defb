
import React, { lazy, Suspense, useEffect } from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { 
  Clock, Calculator, ArrowRight, Baby, Ruler, LineChart, 
  Activity, Scissors, Syringe, Beer, FileText, Flame, 
  MenuSquare, Weight, Sun, Droplets 
} from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';

// Lazy load the footer for better initial load time
const FooterWithCollapsibleLinks = lazy(() => import('@/components/FooterWithCollapsibleLinks'));

// Define a loading placeholder for lazy-loaded components
const LoadingPlaceholder = () => (
  <div className="h-40 w-full bg-gray-100 animate-pulse rounded-lg"></div>
);

const Index = () => {
  // Count the number of calculator pages
  const calculatorCount = 15;

  // Add homepage to sitemap
  useEffect(() => {
    addUrlToSitemap('', 1.0); // Homepage has highest priority
  }, []);

  // Preload important images and components when the page is idle
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Preload second-screen images
        const imagesToPreload = ['/logo.png'];
        imagesToPreload.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      });
    }
  }, []);

  // Create a simple calculator card component to avoid repetition
  const CalculatorCard = ({ 
    to, 
    icon: Icon, 
    color, 
    title, 
    description 
  }: { 
    to: string;
    icon: React.ElementType;
    color: string;
    title: string;
    description: string;
  }) => (
    <Link to={to} className="group">
      <div className={`border rounded-lg p-4 h-full flex flex-col hover:border-${color}-300 hover:shadow-md transition-all duration-200`}>
        <div className={`w-10 h-10 bg-${color}-50 rounded-full flex items-center justify-center mb-3`}>
          <Icon className={`h-5 w-5 text-${color}-500`} />
        </div>
        <h3 className="font-semibold text-sm mb-2 line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-2 flex-grow">{description}</p>
        <span className={`text-xs text-${color}-500 flex items-center group-hover:underline`}>
          Calculate
          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <SEOHead 
        title={`${calculatorCount} Free Calculators | Health & Financial Planning Tools`}
        description="Free online health and financial calculators for lifespan, retirement, fertility, child growth, metabolism and more. Evidence-based tools to plan your future and make better decisions."
        canonicalUrl="https://longevitycalculator.xyz/"
        keywords="free calculators, health calculators, financial planning tools, life expectancy, retirement calculator, fertility calculator, growth percentile, adult height predictor, metabolism calculator, breast implant calculator, botox calculator, alcohol calculator, baldness calculator, TDEE calculator, macronutrient calculator, ideal body weight calculator, vitamin D calculator, creatine water calculator"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <div className="flex justify-between items-center mb-2">
            <Logo className="" />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/resources"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-gray-600 hover:text-primary"
                      )}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Resources
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Ad Unit with fixed dimensions to prevent layout shift */}
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ height: '90px', overflow: 'hidden' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-2 hero-section">
            <div className="relative mx-auto max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight py-2">
                <span className="text-primary relative inline-block mr-3">
                  {calculatorCount}
                </span>
                <span>Free Calculators</span>
              </h1>
              <div className="h-0.5 w-32 bg-gray-200 mx-auto my-1"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto pb-1">
                ... for smarter lifestyle planning and informed decision-making
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 calculator-grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {/* First row of calculators - high priority */}
              <Link to="/life-expectancy-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Life Expectancy</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Estimate your potential lifespan.</p>
                  <span className="text-xs text-blue-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/retirement-savings-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-green-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-3">
                    <Calculator className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Retirement Savings</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Calculate your savings longevity.</p>
                  <span className="text-xs text-green-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/female-fertility-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-purple-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mb-3">
                    <Baby className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Female Fertility</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Estimate your reproductive timeline.</p>
                  <span className="text-xs text-purple-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/growth-percentile-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-orange-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-3">
                    <Ruler className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Child Growth</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Track children's height and weight percentiles.</p>
                  <span className="text-xs text-orange-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/adult-height-predictor-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-indigo-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mb-3">
                    <LineChart className="h-5 w-5 text-indigo-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Adult Height</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Predict adult height from birth size.</p>
                  <span className="text-xs text-indigo-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              {/* Rest of the calculator cards - can be loaded lazily */}
              <Link to="/metabolism-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-red-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-3">
                    <Activity className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Metabolism</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Calculate your BMR and daily calorie needs.</p>
                  <span className="text-xs text-red-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/breast-implant-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-pink-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center mb-3">
                    <Scissors className="h-5 w-5 text-pink-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Breast Implant</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Estimate implant size and surgery costs.</p>
                  <span className="text-xs text-pink-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/botox-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-cyan-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center mb-3">
                    <Syringe className="h-5 w-5 text-cyan-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Botox Dosage</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Calculate units and treatment costs.</p>
                  <span className="text-xs text-cyan-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/alcohol-impact-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-amber-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-3">
                    <Beer className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Alcohol Impact</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Estimate how drinking affects lifespan.</p>
                  <span className="text-xs text-amber-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/baldness-risk-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-slate-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                    <Scissors className="h-5 w-5 text-slate-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Baldness Risk</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Predict hair loss timeline and risk factors.</p>
                  <span className="text-xs text-slate-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/tdee-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-rose-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center mb-3">
                    <Flame className="h-5 w-5 text-rose-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">TDEE Calculator</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Calculate your total daily energy expenditure.</p>
                  <span className="text-xs text-rose-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link to="/macronutrient-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-purple-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mb-3">
                    <MenuSquare className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Macronutrient</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Determine your ideal protein, carbs, and fat intake.</p>
                  <span className="text-xs text-purple-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>

              <Link to="/ideal-body-weight-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-teal-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mb-3">
                    <Weight className="h-5 w-5 text-teal-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Ideal Body Weight</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Estimate your healthiest body weight using Devine, Robinson, and Hamwi formulas.</p>
                  <span className="text-xs text-teal-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/vitamin-d-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-yellow-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center mb-3">
                    <Sun className="h-5 w-5 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Vitamin D Intake</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Assess your vitamin D levels from diet and sun exposure.</p>
                  <span className="text-xs text-yellow-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              <Link to="/creatine-water-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                    <Droplets className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Creatine Water</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Calculate water needs when taking creatine supplements.</p>
                  <span className="text-xs text-blue-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Ad Unit with fixed dimensions to prevent layout shift */}
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ height: '250px', overflow: 'hidden' }}>
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="rectangle"
              responsive={true}
            />
          </div>
          
          {/* Ad Unit with fixed dimensions to prevent layout shift */}
          <div className="mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ height: '90px', overflow: 'hidden' }}>
            <AdUnit 
              className="w-full"
              slot="3333333333" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </main>
        
        {/* Lazy load the footer component */}
        <Suspense fallback={<LoadingPlaceholder />}>
          <FooterWithCollapsibleLinks />
        </Suspense>
      </div>
    </>
  );
};

export default Index;

