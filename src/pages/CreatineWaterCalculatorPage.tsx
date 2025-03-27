import React from 'react';
import CreatineWaterCalculator from '@/components/CreatineWaterCalculator';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import CanonicalFixer from '@/components/CanonicalFixer';

const CreatineWaterCalculatorPage: React.FC = () => {
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
        title="Creatine Water Calculator | Hydration & Supplementation Guide"
        description="Calculate your optimal water intake when using creatine supplements with our free calculator. Get personalized hydration recommendations for maximum benefits."
        canonicalUrl="https://longevitycalculator.xyz/creatine-water-calculator"
        keywords="creatine water calculator, creatine hydration calculator, water intake with creatine, creatine supplementation, creatine water needs"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      <CanonicalFixer expectedCanonicalUrl="https://longevitycalculator.xyz/creatine-water-calculator" />
      
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
            <CreatineWaterCalculator />
          </div>
          
          <div className="mt-8 mb-6 p-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Related Calculators</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <Link to="/tdee-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">TDEE Calculator</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/macronutrient-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Macronutrient Calculator</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/vitamin-d-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Vitamin D Calculator</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/ozempic-weight-loss-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Ozempic Weight Loss Calculator</h3>
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

export default CreatineWaterCalculatorPage;
