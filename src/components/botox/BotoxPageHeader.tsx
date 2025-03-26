
import React from 'react';
import { AdUnit } from '@/components/AdUnit';
import Logo from '@/components/Logo';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import SEOHead from '@/components/SEOHead';
import { generateWebPageSchema } from '@/utils/schema-utils';

const BotoxPageHeader: React.FC = () => {
  const pageTitle = "Botox Dosage Calculator | Units and Cost Estimator Tool";
  const pageDescription = "Calculate Botox units needed for different facial areas and estimate treatment costs. Our free Botox calculator provides personalized dosage recommendations for forehead, crow's feet, and more.";
  const canonicalUrl = "https://longevitycalculator.xyz/botox";
  
  // Create schema
  const webPageSchema = generateWebPageSchema(
    pageTitle,
    pageDescription,
    "/botox",
    new Date().toISOString()
  );
  
  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        keywords="botox calculator, botox dosage, botox units, botox cost calculator, botox price estimator, forehead botox, crow's feet units, glabellar lines, cosmetic injection planner"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
        schemas={[webPageSchema]}
      />
      <header className="max-w-6xl mx-auto pt-4 px-4">
        <Logo className="mb-2" />
        <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
          <AdUnit 
            className="w-full"
            slot="7777777777" 
            format="horizontal"
            responsive={true}
          />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Botox Dosage Calculator</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
          Calculate the recommended Botox units for different facial areas and estimate treatment costs.
        </p>
        
        <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
          <AdUnit 
            className="w-full"
            slot="6666666666" 
            format="horizontal"
            responsive={true}
          />
        </div>
        
        <DisclaimerAlert 
          content="This calculator provides general estimates based on common dosage ranges. Actual treatment should be determined by a qualified healthcare provider."
          className="mb-6"
        />
      </div>
    </>
  );
};

export default BotoxPageHeader;
