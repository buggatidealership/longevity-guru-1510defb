
import React from 'react';
import HowHeightPredictionSection from './components/HowHeightPredictionSection';
import FactorsInfluencingHeightSection from './components/FactorsInfluencingHeightSection';
import GrowthSpurtsSection from './components/GrowthSpurtsSection';
import IncreaseHeightSection from './components/IncreaseHeightSection';
import CalculatorSection from './components/CalculatorSection';

const ContentSections: React.FC = () => {
  return (
    <>
      <HowHeightPredictionSection />
      <FactorsInfluencingHeightSection />
      <GrowthSpurtsSection />
      <IncreaseHeightSection />
      <CalculatorSection />
    </>
  );
};

export default ContentSections;
