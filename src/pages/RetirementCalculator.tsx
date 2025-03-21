
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
        canonicalUrl="https://lifespan-calculator.com/retirement-calculator"
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
          
          {/* Added internal links for SEO */}
          <div className="my-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Our Other Longevity Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
              <Link to="/retirement-calculator" className="text-blue-600 hover:underline">Retirement Savings Calculator</Link>
              <a href="https://lifespan-calculator.com/#about" className="text-blue-600 hover:underline">About Life Expectancy</a>
              <a href="https://lifespan-calculator.com/#factors" className="text-blue-600 hover:underline">Longevity Factors</a>
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
            <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Life Expectancy Calculator. For educational purposes only.</p>
            <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
              <a href="https://lifespan-calculator.com/privacy" className="hover:text-gray-700">Privacy Policy</a>
              <a href="https://lifespan-calculator.com/terms" className="hover:text-gray-700">Terms of Use</a>
              <a href="https://lifespan-calculator.com/sitemap.xml" className="hover:text-gray-700">Sitemap</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RetirementCalculator;
