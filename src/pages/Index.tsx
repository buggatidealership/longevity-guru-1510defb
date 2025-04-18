
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { Clock, Calculator, ArrowRight, Baby, Ruler, LineChart, Activity, Scissors, Syringe, Beer, Scissors as ScissorsIcon, FileText, Flame, MenuSquare, Weight, Sun, Droplets, PillBottle } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';
import CanonicalFixer from '@/components/CanonicalFixer';

const Index = () => {
  // Count the number of calculator pages (excluding placeholder/coming soon calculators)
  const calculatorCount = 16; // Updated count: added ozempic calculator

  // Add homepage to sitemap
  React.useEffect(() => {
    addUrlToSitemap('', 1.0); // Homepage has highest priority
  }, []);

  // Ensure this exactly matches the actual URL
  const canonicalUrl = "https://longevitycalculator.xyz";

  return (
    <>
      <SEOHead 
        title={`${calculatorCount} Free Calculators | Health & Financial Planning Tools`}
        description="Free, evidence-based calculators and resources for optimizing your health, longevity, financial planning, and overall quality of life."
        canonicalUrl={canonicalUrl}
        keywords="free calculators, health calculators, financial planning tools, life expectancy, retirement calculator, fertility calculator, growth percentile, adult height predictor, metabolism calculator, breast implant calculator, botox calculator, alcohol calculator, baldness calculator, TDEE calculator, macronutrient calculator, ideal body weight calculator, vitamin D calculator, creatine water calculator, ozempic weight loss calculator"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      <CanonicalFixer expectedCanonicalUrl={canonicalUrl} />
      
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
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="relative mx-auto max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight py-3">
                <span className="text-primary relative inline-block mr-3">
                  {calculatorCount}
                </span>
                <span>Free Calculators</span>
              </h1>
              <div className="h-0.5 w-32 bg-gray-200 mx-auto my-4"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ... for smarter lifestyle planning and informed decision-making
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
                    <ScissorsIcon className="h-5 w-5 text-slate-500" />
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
              
              <Link to="/ozempic-weight-loss-calculator" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-green-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-3">
                    <PillBottle className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-1">Ozempic Weight Loss</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Estimate potential weight loss with Ozempic treatment.</p>
                  <span className="text-xs text-green-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="rectangle"
              responsive={true}
            />
          </div>
          
          <div className="mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="3333333333" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </main>
        
        <FooterWithCollapsibleLinks />
      </div>
    </>
  );
};

export default Index;
