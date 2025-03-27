
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import BreastImplantCalculator from '@/components/BreastImplantCalculator';
import PageHeader from './breast-implant/PageHeader';
import AboutSection from './breast-implant/AboutSection';
import FAQSection from './breast-implant/FAQSection';
import RelatedCalculators from './breast-implant/RelatedCalculators';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { AdUnit } from '@/components/AdUnit';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';

const BreastImplantCalculatorPage = () => {
  // Handler to scroll to top when clicking internal links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <>
      <SEOHead 
        title="Breast Implant Size Calculator | CC Volume & Cost Tool" 
        description="Calculate your ideal breast implant size in CC based on measurements and desired outcome. Our free calculator estimates implant volumes, costs, and helps you prepare for your breast augmentation consultation." 
        canonicalUrl="https://longevitycalculator.xyz/breastimplant" 
        keywords="breast implant calculator, implant size calculator, breast augmentation calculator, CC volume estimator, breast implant cost, implant dimensions, implant profile selector, cup size calculator" 
        ogType="website" 
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png" 
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <PageHeader />
        
        <main className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Breast Implant Size Calculator</h1>
          <p className="text-gray-600 max-w-2xl mb-6 text-center">
            Calculate your ideal breast implant size in CC based on measurements and desired outcome.
          </p>
          
          <div className="mb-6 bg-gray-100 rounded-lg ad-container w-full p-1">
            <AdUnit className="w-full" slot="3333333333" format="horizontal" responsive={true} />
          </div>
          
          <DisclaimerAlert content="This calculator provides estimates only and should not replace professional medical advice. Results are based on general data and may not apply to your specific situation." className="mb-6" />
          
          <div className="w-full">
            <BreastImplantCalculator />
          </div>
          
          <AboutSection scrollToSection={id => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }} />
          
          <div className="mt-8 mb-6 bg-gray-100 rounded-lg ad-container w-full p-1">
            <AdUnit className="w-full" slot="2222222222" format="horizontal" responsive={true} />
          </div>
          
          <RelatedCalculators handleLinkClick={handleLinkClick} />
        </main>
        
        <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />
      </div>
    </>;
};

export default BreastImplantCalculatorPage;
