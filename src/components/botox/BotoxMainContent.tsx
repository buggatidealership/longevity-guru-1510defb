
import React from 'react';
import { AdUnit } from '@/components/AdUnit';
import BotoxCalculator from '@/components/BotoxCalculator';
import AboutSection from '@/components/botox/AboutSection';
import BotoxFAQSection from '@/components/botox/BotoxFAQSection';
import CalculatorLinksSection from '@/components/botox/CalculatorLinksSection';

interface BotoxMainContentProps {
  scrollToSection: (id: string) => void;
  handleLinkClick: () => void;
}

const BotoxMainContent: React.FC<BotoxMainContentProps> = ({ 
  scrollToSection,
  handleLinkClick
}) => {
  return (
    <main className="max-w-4xl mx-auto px-4">
      <div className="w-full">
        <BotoxCalculator />
      </div>
      
      {/* About This Calculator Section */}
      <AboutSection scrollToSection={scrollToSection} />
      
      <div className="my-4">
        <AdUnit 
          className="w-full"
          slot="8888888888" 
          format="rectangle"
          responsive={true}
        />
      </div>
      
      {/* FAQ Section */}
      <BotoxFAQSection />
      
      <div className="mt-8 mb-6 bg-gray-100 rounded-lg w-full p-1">
        <AdUnit 
          className="w-full"
          slot="9999999999" 
          format="horizontal"
          responsive={true}
        />
      </div>
      
      {/* Calculator Links Section */}
      <CalculatorLinksSection handleLinkClick={handleLinkClick} />
    </main>
  );
};

export default BotoxMainContent;
