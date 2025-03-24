
import React from 'react';
import { AdUnit } from '@/components/AdUnit';
import BotoxCalculator from '@/components/BotoxCalculator';
import BotoxPageHeader from '@/components/botox/BotoxPageHeader';
import AboutSection from '@/components/botox/AboutSection';
import BotoxFAQSection from '@/components/botox/BotoxFAQSection';
import CalculatorLinksSection from '@/components/botox/CalculatorLinksSection';
import BotoxPageFooter from '@/components/botox/BotoxPageFooter';

const BotoxCalculatorPage = () => {
  // Handler to scroll to top when clicking internal links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // For internal section navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BotoxPageHeader />

      <main className="max-w-4xl mx-auto px-4">
        <div className="w-full flex justify-center">
          <div className="w-full">
            <BotoxCalculator />
          </div>
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
        
        <div className="mt-8 mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
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
      
      <BotoxPageFooter handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default BotoxCalculatorPage;
