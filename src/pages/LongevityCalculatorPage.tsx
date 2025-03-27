import React from 'react';
import LongevityCalculator from '@/components/LongevityCalculator';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import Logo from '@/components/Logo';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import CanonicalFixer from '@/components/CanonicalFixer';

const LongevityCalculatorPage: React.FC = () => {
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
        title="Life Expectancy Calculator | Predict Your Lifespan" 
        description="Calculate your life expectancy with our free interactive calculator. Answer questions about lifestyle, health, and family history to estimate your potential lifespan." 
        canonicalUrl="https://longevitycalculator.xyz/life-expectancy-calculator" 
        keywords="life expectancy calculator, lifespan calculator, longevity calculator, life calculator, how long will i live, death calculator, predict life expectancy" 
        ogType="website" 
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png" 
      />
      <CanonicalFixer expectedCanonicalUrl="https://longevitycalculator.xyz/life-expectancy-calculator" />
      
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Life Expectancy Calculator
          </h1>
          <p className="text-gray-600 max-w-2xl mb-6 text-center">
            Estimate how long you might live based on your current lifestyle, health
            choices, and family history.
          </p>

          <div className="w-full">
            <LongevityCalculator />
          </div>
        </main>
        
        <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default LongevityCalculatorPage;
