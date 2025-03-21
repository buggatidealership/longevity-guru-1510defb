
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { Clock, Calculator, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Longevity Calculators | Life Expectancy & Retirement Planning Tools"
        description="Calculate your life expectancy and plan your retirement with our free calculators. Evidence-based tools for longevity planning and financial freedom."
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="max-w-6xl mx-auto pt-8 px-4">
          <Logo className="mb-8" />
          {/* Top Ad Banner */}
          <AdUnit 
            className="mb-6 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] flex items-center justify-center"
            slot="1111111111" 
          />
        </header>
        <main className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Evidence-Based Longevity Calculators</h1>
            <p className="text-xl text-muted-foreground">Tools to help you live longer and plan for a financially secure future</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Life Expectancy Calculator Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Life Expectancy Calculator</h2>
                <p className="text-gray-600 mb-4">Estimate your lifespan based on health factors, lifestyle choices, and demographics.</p>
                <Link to="/lifespan">
                  <Button>
                    Calculate Your Lifespan
                    <TrendingUp className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Retirement Savings Calculator Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Retirement Savings Calculator</h2>
                <p className="text-gray-600 mb-4">Determine how much you can spend daily, monthly, and yearly in retirement.</p>
                <Link to="/retirementsavings">
                  <Button>
                    Plan Your Retirement
                    <TrendingUp className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Middle Ad Banner */}
          <AdUnit 
            className="my-8 p-2 bg-gray-50 rounded-lg text-center min-h-[250px] flex items-center justify-center"
            slot="2222222222" 
          />
          
          {/* Added internal links for SEO */}
          <div className="my-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Our Other Longevity Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
              <Link to="/retirementsavings" className="text-blue-600 hover:underline">Retirement Savings Calculator</Link>
              <Link to="/lifespan" className="text-blue-600 hover:underline">Life Expectancy Calculator</Link>
              <a href="https://longevitycalculator.xyz/#about" className="text-blue-600 hover:underline">About Life Expectancy</a>
              <a href="https://longevitycalculator.xyz/#factors" className="text-blue-600 hover:underline">Longevity Factors</a>
            </div>
          </div>
        </main>
        
        {/* Bottom Ad Banner */}
        <div className="max-w-6xl mx-auto px-4">
          <AdUnit 
            className="mt-8 mb-4 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] flex items-center justify-center"
            slot="3333333333" 
          />
        </div>
        
        <footer className="max-w-6xl mx-auto px-4 py-8">
          <div className="border-t pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
                  <li><Link to="/lifespan" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirementsavings" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/#about" className="text-sm text-gray-600 hover:text-primary">About Life Expectancy</Link></li>
                  <li><Link to="/#factors" className="text-sm text-gray-600 hover:text-primary">Longevity Factors</Link></li>
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
              <Link to="/sitemap.xml" className="hover:text-gray-700">Sitemap</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
