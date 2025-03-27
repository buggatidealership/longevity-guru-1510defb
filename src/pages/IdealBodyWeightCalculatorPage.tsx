import React from 'react';
import IdealBodyWeightCalculator from '@/components/IdealBodyWeightCalculator';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import CanonicalFixer from '@/components/CanonicalFixer';

const IdealBodyWeightCalculatorPage: React.FC = () => {
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
        title="Ideal Body Weight Calculator | Find Your Healthy Weight Range"
        description="Calculate your ideal body weight range with our free calculator. Get personalized weight estimates based on height, gender, and frame size using multiple formulas."
        canonicalUrl="https://longevitycalculator.xyz/ideal-body-weight-calculator"
        keywords="ideal body weight calculator, healthy weight calculator, IBW calculator, ideal weight calculator, healthy weight range"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      <CanonicalFixer expectedCanonicalUrl="https://longevitycalculator.xyz/ideal-body-weight-calculator" />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-6 bg-gray-100 rounded-lg ad-container w-full p-1">
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4">
          <div className="w-full">
            <IdealBodyWeightCalculator />
          </div>
          
          <div className="mt-8 mb-6 p-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Free Longevity Calculators</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <Link to="/retirementsavings" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/lifespan" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/fertility" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/growth" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Child Growth</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
            </div>
          </div>
        </main>
        
        <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default IdealBodyWeightCalculatorPage;
