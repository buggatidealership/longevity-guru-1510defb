
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { Clock, Calculator, ArrowRight, Baby, Ruler, LineChart, Activity, Scissors, Syringe, Beer, Scissors as ScissorsIcon } from 'lucide-react';

const Index = () => {
  // Count the number of calculator pages (excluding placeholder/coming soon calculators)
  const calculatorCount = 10; // Current count: lifespan, retirement, fertility, growth, adult height, metabolism, breast implant, botox, alcohol, baldness

  return (
    <>
      <SEOHead 
        title={`${calculatorCount} Free Calculators | Health & Financial Planning Tools`}
        description="Free online health and financial calculators for lifespan, retirement, fertility, child growth, metabolism and more. Evidence-based tools to plan your future and make better decisions."
        canonicalUrl="https://longevitycalculator.xyz/"
        keywords="free calculators, health calculators, financial planning tools, life expectancy, retirement calculator, fertility calculator, growth percentile, adult height predictor, metabolism calculator, breast implant calculator, botox calculator, alcohol calculator, baldness calculator"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
              
              <Link to="/child-growth-percentile-calculator" className="group">
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
              
              <Link to="/breast-implant-size-calculator" className="group">
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
              
              <Link to="/botox-dosage-calculator" className="group">
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
              
              {[...Array(2)].map((_, index) => (
                <div key={index} className="border border-dashed rounded-lg p-4 h-full flex flex-col opacity-40">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-gray-400 font-medium text-xs">Soon</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Coming Soon</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">New calculator coming soon.</p>
                  <span className="text-xs text-gray-400 flex items-center">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              ))}
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
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
                  <li><Link to="/life-expectancy-calculator" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirement-savings-calculator" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/child-growth-percentile-calculator" className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
                  <li><Link to="/adult-height-predictor-calculator" className="text-sm text-gray-600 hover:text-primary">Adult Height Predictor</Link></li>
                  <li><Link to="/metabolism-calculator" className="text-sm text-gray-600 hover:text-primary">Metabolism Calculator</Link></li>
                  <li><Link to="/breast-implant-size-calculator" className="text-sm text-gray-600 hover:text-primary">Breast Implant Size Calculator</Link></li>
                  <li><Link to="/botox-dosage-calculator" className="text-sm text-gray-600 hover:text-primary">Botox Dosage Calculator</Link></li>
                  <li><Link to="/alcohol-impact-calculator" className="text-sm text-gray-600 hover:text-primary">Alcohol Impact Calculator</Link></li>
                  <li><Link to="/baldness-risk-calculator" className="text-sm text-gray-600 hover:text-primary">Baldness Risk Calculator</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Longevity Calculator. For educational purposes only.</p>
            <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
              <a href="https://longevitycalculator.xyz/sitemap.xml" className="hover:text-gray-700" target="_blank" rel="noopener noreferrer">Sitemap</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
