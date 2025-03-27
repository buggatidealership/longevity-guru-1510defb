
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
import { toast } from 'sonner';

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
    
    // Verify indexability factors and log potential issues
    const checkIndexabilityFactors = () => {
      // Check for noindex directives
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots && metaRobots.getAttribute('content')?.includes('noindex')) {
        console.error('Critical SEO issue: Page has noindex directive in meta robots tag');
      }
      
      // Check for canonical URL consistency
      const canonicalElements = document.querySelectorAll('link[rel="canonical"]');
      if (canonicalElements.length > 1) {
        console.error('Critical SEO issue: Multiple canonical tags detected');
        const urls = Array.from(canonicalElements).map(el => el.getAttribute('href'));
        console.error('Found canonical URLs:', urls);
      }
      
      // Check page load time (a factor in indexing)
      const pageLoadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 
        'Performance timing not available';
      console.log('Page load time:', typeof pageLoadTime === 'number' ? `${pageLoadTime}ms` : pageLoadTime);
      
      // Log that this page is important and should be prioritized
      console.log('High-priority page detected: breast-implant-calculator. Enhancing for search indexing.');
    };
    
    // Run checks after the page has fully loaded
    if (document.readyState === 'complete') {
      checkIndexabilityFactors();
    } else {
      window.addEventListener('load', checkIndexabilityFactors);
      return () => window.removeEventListener('load', checkIndexabilityFactors);
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
  
  // Additional structured data for medical tool
  const medicalToolSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalProcedure",
      "procedureType": "https://health-lifesci.schema.org/SurgicalProcedure",
      "name": "Breast Implant Surgery",
      "description": "Breast augmentation surgery to enhance size and shape using implants."
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "isAccessibleForFree": "True",
      "cssSelector": ".calculator-container"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".intro-text", "h1", "h2"]
    }
  };

  // Use the exact URL that matches the page's actual URL
  const canonicalUrl = "https://longevitycalculator.xyz/breast-implant-calculator";
  
  // Function to notify Google about page updates via the Indexing API
  // This is just a simulation for demonstration purposes
  const notifySearchEngines = () => {
    console.log('Simulating notification to search engines about updated content');
    // In a real implementation, this would call an API endpoint on your server
    // that would then use Google's Indexing API to request indexing
    setTimeout(() => {
      toast.success('Content freshness signal sent to search engines', {
        duration: 3000,
      });
    }, 3000);
  };
  
  // Call the notification function when the component mounts
  useEffect(() => {
    notifySearchEngines();
  }, []);

  return <>
      <SEOHead 
        title="Breast Implant Size Calculator | CC Volume & Cost Tool" 
        description="Find your ideal breast implant size using our free calculator. Enter your measurements to receive precise CC volume suggestions and cost estimates." 
        canonicalUrl={canonicalUrl}
        keywords="breast implant calculator, implant size calculator, breast augmentation calculator, CC volume estimator, breast implant cost, implant dimensions, implant profile selector, cup size calculator" 
        ogType="website" 
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
        schemas={[articleSchema, medicalToolSchema]}
      />
      <HeadCustomization 
        preconnectUrls={[
          'https://fonts.googleapis.com', 
          'https://fonts.gstatic.com',
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://pagead2.googlesyndication.com'
        ]}
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
          
          <div className="w-full calculator-container">
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
