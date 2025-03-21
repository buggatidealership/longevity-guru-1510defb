
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
        title="Retirement Savings Calculator | Calculate Your Savings Longevity"
        description="Calculate how much you can spend daily, monthly, and yearly in retirement based on your savings. Free retirement spending calculator."
        canonicalUrl="https://longevitycalculator.xyz/retirementsavings"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          {/* Top Ad Banner - Highly visible placement */}
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
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Left sidebar ad - Visible on desktop */}
            <div className="hidden md:block md:w-64 lg:w-72 md:flex-shrink-0">
              <div className="sticky top-4 bg-gray-50 rounded-lg text-center" style={{ minHeight: '600px' }}>
                <AdUnit 
                  className="w-full h-full"
                  slot="5555555555" 
                  format="vertical"
                  responsive={false}
                />
              </div>
            </div>
            
            {/* Main Calculator */}
            <div className="flex-1 max-w-3xl mx-auto md:mx-0">
              <RetirementSavingsCalculator />
              
              {/* Mobile-only ad after calculator - Visible only on mobile */}
              <div className="block md:hidden mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
                <AdUnit 
                  className="w-full"
                  slot="5555555555" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
            </div>
          </div>
          
          {/* Middle Ad Banner - Strategic placement between sections */}
          <div className="mt-8 mb-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="rectangle"
              responsive={true}
            />
          </div>
          
          {/* Educational content section to improve engagement and ad visibility */}
          <div className="mt-4 mb-6 p-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Retirement Planning Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-lg p-3">
                <h3 className="font-semibold text-sm mb-1">Start Early</h3>
                <p className="text-xs text-gray-600">The power of compound interest means starting early can significantly increase your retirement savings.</p>
              </div>
              
              <div className="border rounded-lg p-3">
                <h3 className="font-semibold text-sm mb-1">Diversify Investments</h3>
                <p className="text-xs text-gray-600">Spread your investments across different asset classes to reduce risk and maximize returns.</p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-3">Free Longevity Calculators</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <Link to="/retirementsavings" className="text-xs text-blue-500 hover:underline font-medium">Calculate →</Link>
              </div>
              
              <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <Link to="/lifespan" className="text-xs text-blue-500 hover:underline font-medium">Calculate →</Link>
              </div>
            </div>
          </div>
        </main>
        
        {/* Bottom Ad Banner - Above footer */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="3333333333" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </div>
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
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
                  <li><Link to="/lifespan" className="text-sm text-gray-600 hover:text-primary">Life Expectancy</Link></li>
                  <li><Link to="/retirementsavings" className="text-sm text-gray-600 hover:text-primary">Retirement Planning</Link></li>
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
