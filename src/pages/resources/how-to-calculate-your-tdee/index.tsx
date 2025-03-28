
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/schema-utils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import CanonicalFixer from '@/components/CanonicalFixer';
import { Helmet } from 'react-helmet';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const TDEECalculationGuide = () => {
  // Define page title and description
  const pageTitle = "How to Calculate Your TDEE & Adjust It for Your Goals";
  const pageDescription = "Learn how to accurately calculate your Total Daily Energy Expenditure (TDEE) and customize it for weight loss, muscle gain, or maintenance. Includes examples and science-backed tips.";
  const canonicalUrl = "https://longevitycalculator.xyz/resources/how-to-calculate-your-tdee";
  
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'How to Calculate Your TDEE', path: '/resources/how-to-calculate-your-tdee' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    pageTitle,
    pageDescription,
    '/resources/how-to-calculate-your-tdee',
    '2025-03-25T10:00:00+00:00',
    '2025-03-25T10:00:00+00:00'
  );

  // Generate FAQ schema
  const faqItems = [
    {
      question: 'How often should I recalculate my TDEE?',
      answer: "Every 4–6 weeks or after major body changes (e.g., 5+ kg gained/lost). Your metabolism adapts as your body composition changes, so regular recalculation ensures you're working with accurate numbers."
    },
    {
      question: 'Can I use a calculator instead of doing the math manually?',
      answer: 'Absolutely. Our TDEE Calculator does the work for you instantly. It uses the same formulas but saves you time and prevents calculation errors.'
    },
    {
      question: 'What happens if I eat below my TDEE for too long?',
      answer: 'You may experience fatigue, hormonal imbalances, and slower metabolism. Long-term severe caloric restriction can lead to nutrient deficiencies, muscle loss, and metabolic adaptation that makes further weight loss more difficult.'
    },
    {
      question: 'Is TDEE the same as BMR?',
      answer: "No, they're different. BMR is the calories your body needs at rest just to maintain basic functions. TDEE includes BMR plus all additional energy used for daily activities, exercise, and digestion."
    },
    {
      question: 'How accurate are TDEE calculations?',
      answer: 'TDEE formulas are estimates with about ±10% accuracy. For most people, they provide a good starting point. Track your weight and calorie intake for 2-3 weeks, then adjust based on actual results.'
    }
  ];
  
  const faqSchema = generateFAQSchema(faqItems);

  // Combine all schemas
  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  // Handler for internal link clicks - scrolls to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        keywords="TDEE, total daily energy expenditure, calorie calculator, weight loss, muscle gain, BMR, maintenance calories, energy balance"
        schemas={schemas}
      />
      
      {/* Force canonical URL and title with both methods for redundancy */}
      <CanonicalFixer 
        expectedCanonicalUrl={canonicalUrl} 
        pageTitle={pageTitle}
      />
      
      {/* Additional canonical enforcement directly with Helmet */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* ResourcePageHeader already includes breadcrumbs, do not add duplicate breadcrumbs here */}
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 pb-12">
          {/* Remove duplicate breadcrumbs that were here */}
          
          <article itemScope itemType="https://schema.org/Article" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <meta itemProp="headline" content={pageTitle} />
            <meta itemProp="description" content={pageDescription} />
            <meta itemProp="url" content={canonicalUrl} />
            <link itemProp="mainEntityOfPage" href={canonicalUrl} />
            
            {/* Only one H1 per page for proper SEO */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">{pageTitle}</h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            
            <IntroSection />
            
            <div className="my-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
              <AdUnit 
                className="w-full"
                slot="1111111111" 
                format="rectangle"
                responsive={true}
              />
            </div>
            
            <ContentSections />
            
            <div className="my-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
              <AdUnit 
                className="w-full"
                slot="2222222222" 
                format="rectangle"
                responsive={true}
              />
            </div>
            
            <FAQSection />
            <CallToAction />
            
            {/* Related resources section for internal linking */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  to="/resources/macronutrient-calculator-guide" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Macronutrient Calculator Guide</h3>
                  <p className="text-sm text-gray-600">Learn how to optimize your protein, carb, and fat intake for your goals.</p>
                </Link>
                <Link 
                  to="/resources/how-to-boost-your-metabolism" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">How to Boost Your Metabolism</h3>
                  <p className="text-sm text-gray-600">Discover science-backed methods to increase your metabolic rate.</p>
                </Link>
                <Link 
                  to="/resources/how-to-use-your-bmi" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">How to Use Your BMI</h3>
                  <p className="text-sm text-gray-600">Understand what BMI actually means and its limitations for health assessment.</p>
                </Link>
                <Link 
                  to="/resources/ideal-body-weight-guide" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Ideal Body Weight Guide</h3>
                  <p className="text-sm text-gray-600">Learn about ideal body weight formulas and how to interpret them.</p>
                </Link>
              </div>
            </div>
            
            <DisclaimerAlert 
              content="The information provided in this article is for educational purposes only and should not replace professional medical advice. Consult with a healthcare provider before making significant changes to your diet, exercise routine, or health management approach."
              className="mt-8"
            />
          </article>
          
          {/* Additional JSON-LD FAQ schema for enhanced crawler visibility */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              })
            }}
          />
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default TDEECalculationGuide;
