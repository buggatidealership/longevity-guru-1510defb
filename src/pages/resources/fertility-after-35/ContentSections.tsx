
import React from 'react';
import FertilityChangesSection from './components/FertilityChangesSection';
import EggQualitySection from './components/EggQualitySection';
import OvarianReserveSection from './components/OvarianReserveSection';
import ConceptionChancesSection from './components/ConceptionChancesSection';
import FertilitySpecialistSection from './components/FertilitySpecialistSection';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-12 prose prose-lg max-w-none">
      <FertilityChangesSection />
      <EggQualitySection />
      <OvarianReserveSection />
      <ConceptionChancesSection />
      <FertilitySpecialistSection />
    </div>
  );
};

export default ContentSections;
