import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import RetirementSavingsCalculator from '@/components/RetirementSavingsCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const RetirementCalculator = () => {
  return (
    <>
      <SEOHead 
        title="Retirement Savings Calculator | Plan Your Retirement Income"
        description="Calculate how much you can spend daily, monthly, and yearly in retirement based on your savings. Free retirement spending calculator."
        canonicalUrl="https://longevitycalculator.xyz/retirementsavings"
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
          <div className="flex flex-col md:flex-row gap-6">            
            {/* Main Calculator */}
            <div className="flex-1">
              <RetirementSavingsCalculator />
            </div>
          </div>
          
          {/* Middle Ad Banner */}
          <AdUnit 
            className="my-8 p-2 bg-gray-50 rounded-lg text-center min-h-[250px] flex items-center justify-center"
            slot="2222222222" 
          />
          
          {/* SEO-optimized calculators section - redesigned to be more compact */}
          <div className="my-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Free Longevity Calculators</h2>
            <p className="text-gray-600 mb-4">Discover our suite of research-backed calculators to help you live longer and plan for a financially secure future.</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <Link to="/retirementsavings" className="text-xs text-blue-600 hover:underline font-medium">Calculate →</Link>
              </div>
              
              <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <Link to="/lifespan" className="text-xs text-blue-600 hover:underline font-medium">Calculate →</Link>
              </div>
              
              {/* Placeholder for future calculators that will maintain the same compact design */}
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

export default RetirementCalculator;
