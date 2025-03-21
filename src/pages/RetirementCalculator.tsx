
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import RetirementSavingsCalculator from '@/components/RetirementSavingsCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const RetirementCalculator = () => {
  // Handler to scroll to top when clicking internal links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4">
          <div className="w-full flex justify-center">
            <div className="w-full">
              <RetirementSavingsCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Retirement Savings Calculator</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Our <strong>Retirement Savings Calculator</strong> is a powerful financial planning tool designed to help you determine how long your retirement savings will last. By analyzing your current savings, expected investment returns, and accounting for inflation, our calculator provides personalized projections for your daily, monthly, and yearly spending capacity throughout retirement.
              </p>
              
              <h3 className="text-xl font-medium mt-6">How The Retirement Calculator Works</h3>
              <p>
                The calculator uses a sophisticated financial algorithm that factors in your total retirement savings, current age, life expectancy, expected annual return rate, and anticipated inflation. These key variables are processed through a time-value-of-money calculation to determine sustainable withdrawal rates that help prevent outliving your savings.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personalized Spending Plan:</strong> Get clear guidance on how much you can safely spend each day, month, and year in retirement.
                </li>
                <li>
                  <strong>Inflation-Adjusted Projections:</strong> Our calculator accounts for inflation's impact on your purchasing power over time.
                </li>
                <li>
                  <strong>Variable Scenario Testing:</strong> Adjust parameters to see how changes in investment returns, inflation rates, or life expectancy affect your retirement spending power.
                </li>
                <li>
                  <strong>Long-Term Planning:</strong> Visualize your financial sustainability throughout your retirement years.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Why Retirement Savings Planning Matters</h3>
              <p>
                Planning for retirement is one of the most significant financial challenges people face. With increasing life expectancies and uncertain economic conditions, understanding how long your retirement savings will last is crucial. Studies show that about 40% of Americans worry about outliving their savings, making proper retirement planning essential for financial security and peace of mind.
              </p>
              
              <p>
                Our Retirement Savings Calculator helps address this uncertainty by providing clear, actionable insights into your financial future. By making informed decisions today about saving, investing, and spending in retirement, you can significantly improve your financial security during your retirement years.
              </p>
              
              <DisclaimerAlert className="mt-6" />
            </div>
          </div>
          
          <div className="mt-8 mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <div className="mt-8 mb-6 p-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Free Longevity Calculators</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <Link to="/retirementsavings" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow block">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/lifespan" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow block">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
            </div>
          </div>
        </main>
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
                <ul className="space-y-2">
                  <li><Link to="/lifespan" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirementsavings" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                  <li><Link to="/terms" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
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

export default RetirementCalculator;
