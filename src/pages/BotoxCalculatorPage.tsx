
import React from 'react';
import BotoxCalculator from '@/components/BotoxCalculator';
import BotoxPageHeader from '@/components/botox/BotoxPageHeader';
import AboutSection from '@/components/botox/AboutSection';
import BotoxFAQSection from '@/components/botox/BotoxFAQSection';
import CalculatorLinksSection from '@/components/botox/CalculatorLinksSection';
import BotoxPageFooter from '@/components/botox/BotoxPageFooter';
import BotoxMainContent from '@/components/botox/BotoxMainContent';
import SEOHead from '@/components/SEOHead';
import CanonicalFixer from '@/components/CanonicalFixer';

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
      <SEOHead 
        title="Botox Dosage Calculator | Units by Treatment Area"
        description="Calculate the estimated botox units needed for your treatment with our free botox dosage calculator. Get personalized recommendations by treatment area."
        canonicalUrl="https://longevitycalculator.xyz/botox"
        keywords="botox calculator, botox dosage calculator, botox units calculator, botox cost calculator, botox treatment area calculator"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      <CanonicalFixer expectedCanonicalUrl="https://longevitycalculator.xyz/botox" />
      
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
