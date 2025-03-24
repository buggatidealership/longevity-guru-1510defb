
import React from 'react';
import UnderstandingImplantSizesSection from './components/UnderstandingImplantSizesSection';
import CalculatorUsageSection from './components/CalculatorUsageSection';
import AppearanceFactorsSection from './components/AppearanceFactorsSection';
import BiggerNotBetterSection from './components/BiggerNotBetterSection';
import TestimonialsSection from './components/TestimonialsSection';
import KeyTakeawaysSection from './components/KeyTakeawaysSection';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-10">
      <UnderstandingImplantSizesSection />
      <CalculatorUsageSection />
      <AppearanceFactorsSection />
      <BiggerNotBetterSection />
      <TestimonialsSection />
      <KeyTakeawaysSection />
    </div>
  );
};

export default ContentSections;
