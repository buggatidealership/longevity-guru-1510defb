
import React from 'react';
import TableOfContents from './TableOfContents';
import Overview from './sections/Overview';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import Considerations from './sections/Considerations';
import FAQSection from './FAQSection';
import { AdUnit } from '@/components/AdUnit';

interface AboutSectionProps {
  scrollToSection: (id: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">About The Breast Implant Size Calculator</h2>
      
      <TableOfContents onSectionClick={scrollToSection} />
      
      <div className="space-y-4 text-gray-700">
        <Overview />
        
        <div className="my-4">
          <AdUnit 
            className="w-full"
            slot="4444444444" 
            format="rectangle"
            responsive={true}
          />
        </div>
        
        <HowItWorks />
        <Benefits />
        <Considerations />
        
        {/* FAQ Section included in the About section */}
        <FAQSection />
      </div>
    </div>
  );
};

export default AboutSection;
