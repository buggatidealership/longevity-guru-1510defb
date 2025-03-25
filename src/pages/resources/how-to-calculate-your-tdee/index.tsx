
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/seoUtils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

const TDEECalculationGuide = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'How to Calculate Your TDEE', path: '/resources/how-to-calculate-your-tdee' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    'How to Calculate Your TDEE & Adjust It for Your Goals',
    'Learn how to accurately calculate your Total Daily Energy Expenditure (TDEE) and customize it for weight loss, muscle gain, or maintenance. Includes examples and science-backed tips.',
    '/resources/how-to-calculate-your-tdee',
    '2025-03-25T10:00:00+00:00',
    '2025-03-25T10:00:00+00:00'
  );

  // Generate FAQ schema
  const faqItems = [
    {
      question: 'How often should I recalculate my TDEE?',
      answer: 'Every 4–6 weeks or after major body changes (e.g., 5+ kg gained/lost).'
    },
    {
      question: 'Can I use a calculator instead of doing the math manually?',
      answer: 'Absolutely. Our TDEE Calculator does the work for you instantly.'
    },
    {
      question: 'What happens if I eat below my TDEE for too long?',
      answer: 'You may experience fatigue, hormonal imbalances, and slower metabolism.'
    },
    {
      question: 'Is TDEE the same as BMR?',
      answer: 'No, they\'re different. BMR is the calories your body needs at rest just to maintain basic functions. TDEE includes BMR plus all additional energy used for daily activities, exercise, and digestion.'
    },
    {
      question: 'How accurate are TDEE calculations?',
      answer: 'TDEE formulas are estimates with about ±10% accuracy. For most people, they provide a good starting point. Track your weight and calorie intake for 2-3 weeks, then adjust based on actual results.'
    }
  ];
  
  const faqSchema = generateFAQSchema(faqItems);

  // Combine all schemas
  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="How to Calculate Your TDEE & Adjust It for Your Goals"
        description="Learn how to accurately calculate your Total Daily Energy Expenditure (TDEE) and customize it for weight loss, muscle gain, or maintenance. Includes examples and science-backed tips."
        canonicalUrl="/resources/how-to-calculate-your-tdee"
        keywords="TDEE, total daily energy expenditure, calorie calculator, weight loss, muscle gain, BMR, maintenance calories, energy balance"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-3xl mx-auto px-4 pb-12">
          <IntroSection />
          <ContentSections />
          <FAQSection />
          <CallToAction />
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default TDEECalculationGuide;
