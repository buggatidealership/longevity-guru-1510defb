
import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import BreastImplantCalculator from '@/components/BreastImplantCalculator';
import PageHeader from './breast-implant/PageHeader';
import AboutSection from './breast-implant/AboutSection';
import FAQSection from './breast-implant/FAQSection';
import RelatedCalculators from './breast-implant/RelatedCalculators';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { AdUnit } from '@/components/AdUnit';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import CanonicalFixer from '@/components/CanonicalFixer';
import HeadCustomization from '@/components/HeadCustomization';
import { generateArticleSchema } from '@/utils/seoUtils';

const BreastImplantCalculatorPage = () => {
  // Handler to scroll to top when clicking internal links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Effect to encourage Google to index this page
  useEffect(() => {
    // Update the page title with a timestamp to show freshness
    document.title = `Breast Implant Size Calculator | CC Volume & Cost Tool (Updated ${new Date().toLocaleDateString()})`;
    
    // Check if page has canonical issues
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical || canonical.getAttribute('href') !== 'https://longevitycalculator.xyz/breast-implant-calculator') {
      console.warn('Canonical link issue detected, fixing with CanonicalFixer component');
    }
  }, []);

  // Script to ensure all external links have proper rel attributes
  useEffect(() => {
    const fixExternalLinks = () => {
      const externalLinks = document.querySelectorAll('a[target="_blank"]');
      externalLinks.forEach(link => {
        if (!link.getAttribute('rel') || !link.getAttribute('rel').includes('noopener')) {
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
    };

    // Run on mount and after a small delay to catch dynamic content
    fixExternalLinks();
    const timer = setTimeout(fixExternalLinks, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate structured data for this calculator
  const articleSchema = generateArticleSchema(
    "Breast Implant Size Calculator: Find Your Ideal Implant Size in CC", 
    "Our free breast implant calculator helps you find your ideal implant size based on your measurements. Get personalized suggestions for CC volume, cost estimates, and expected results.",
    "/breast-implant-calculator",
    "2024-08-24T12:00:00+00:00",
    new Date().toISOString(),
    "https://longevitycalculator.xyz/longevity-calculator-og.png"
  );

  // Use the exact URL that matches the page's actual URL
  const canonicalUrl = "https://longevitycalculator.xyz/breast-implant-calculator";

  return <>
      <SEOHead 
        title="Breast Implant Size Calculator | CC Volume & Cost Tool" 
        description="Find your ideal breast implant size using our free calculator. Enter your measurements to receive precise CC volume suggestions and cost estimates." 
        canonicalUrl={canonicalUrl}
        keywords="breast implant calculator, implant size calculator, breast augmentation calculator, CC volume estimator, breast implant cost, implant dimensions, implant profile selector, cup size calculator" 
        ogType="website" 
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
        schemas={[articleSchema]}
      />
      <HeadCustomization 
        preconnectUrls={['https://fonts.googleapis.com', 'https://fonts.gstatic.com']}
        preloadAssets={[
          { href: '/longevity-calculator-og.png', as: 'image' }
        ]} 
      />
      <CanonicalFixer expectedCanonicalUrl={canonicalUrl} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <PageHeader />
        
        <main className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Breast Implant Size Calculator</h1>
          <p className="text-gray-600 max-w-2xl mb-6 text-center mx-auto">
            Calculate your ideal breast implant size in CC based on measurements and desired outcome.
          </p>
          
          <div className="mb-6 bg-gray-100 rounded-lg ad-container w-full p-1">
            <AdUnit className="w-full" slot="3333333333" format="horizontal" responsive={true} />
          </div>
          
          <DisclaimerAlert content="This calculator provides estimates only and should not replace professional medical advice. Results are based on general data and may not apply to your specific situation." className="mb-6" />
          
          <div className="w-full">
            <BreastImplantCalculator />
          </div>
          
          <AboutSection scrollToSection={id => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }} />
          
          <div className="mt-8 mb-6 bg-gray-100 rounded-lg ad-container w-full p-1">
            <AdUnit className="w-full" slot="2222222222" format="horizontal" responsive={true} />
          </div>
          
          <RelatedCalculators handleLinkClick={handleLinkClick} />
        </main>
        
        <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />
      </div>
    </>;
};

export default BreastImplantCalculatorPage;
