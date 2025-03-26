
import React from 'react';
import BotoxCalculator from '@/components/BotoxCalculator';
import BotoxPageHeader from '@/components/botox/BotoxPageHeader';
import BotoxFAQSection from '@/components/botox/BotoxFAQSection';
import CalculatorLinksSection from '@/components/botox/CalculatorLinksSection';
import BotoxPageFooter from '@/components/botox/BotoxPageFooter';
import BotoxMainContent from '@/components/botox/BotoxMainContent';

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
      <BotoxMainContent 
        scrollToSection={scrollToSection} 
        handleLinkClick={handleLinkClick} 
      />
      <BotoxPageFooter handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default BotoxCalculatorPage;
