
import React from 'react';
import WhyPredictingHeightMattersSection from './components/WhyPredictingHeightMattersSection';
import HeightCalculatorWorksSection from './components/HeightCalculatorWorksSection';
import PredictionAccuracySection from './components/PredictionAccuracySection';
import FinalHeightFactorsSection from './components/FinalHeightFactorsSection';
import OptimalGrowthTipsSection from './components/OptimalGrowthTipsSection';
import TalkToDoctorSection from './components/TalkToDoctorSection';
import CalculatorSection from './components/CalculatorSection';

const ContentSections: React.FC = () => {
  return (
    <>
      <WhyPredictingHeightMattersSection />
      <HeightCalculatorWorksSection />
      <PredictionAccuracySection />
      <FinalHeightFactorsSection />
      <OptimalGrowthTipsSection />
      <TalkToDoctorSection />
      <CalculatorSection />
    </>
  );
};

export default ContentSections;
