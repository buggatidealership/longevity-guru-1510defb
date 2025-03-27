
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/utils/seoUtils';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';

const OzempicWeightLossCalculatorGuide = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canonical = "https://longevitycalculator.xyz/resources/ozempic-weight-loss-calculator-guide";
  
  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How to Calculate Your Weight Loss with Ozempic – Complete Guide",
    "Accurately estimate your weight loss results on Ozempic. Learn how to use our free calculator, interpret your results, and maximize your outcomes.",
    "/resources/ozempic-weight-loss-calculator-guide",
    "2025-03-28T12:00:00+00:00",
    new Date().toISOString()
  );
  
  // Generate FAQ schema from the FAQ items
  const faqItems = [
    {
      question: "How quickly can you see weight loss results with Ozempic?",
      answer: "Most people begin to see initial weight loss results with Ozempic within 4-6 weeks after starting treatment. However, significant weight loss typically occurs after 12-16 weeks of consistent use, especially as the dose is gradually increased. Individual results vary based on starting weight, dosage, diet, exercise habits, and metabolic factors."
    },
    {
      question: "What factors influence weight loss on Ozempic?",
      answer: "Several factors affect weight loss results on Ozempic: starting BMI (higher BMIs often see more dramatic initial loss), dosage (higher doses generally produce greater results), consistency of use, dietary habits, physical activity levels, genetic factors, age, and the presence of other health conditions. For optimal results, Ozempic should be used alongside healthy eating and regular exercise."
    },
    {
      question: "Are Ozempic weight loss results permanent?",
      answer: "Ozempic weight loss results are not automatically permanent. Studies show that when patients discontinue Ozempic, most regain about two-thirds of their lost weight within a year. Maintaining weight loss requires either continuing the medication long-term or implementing sustainable lifestyle changes including diet, exercise, and behavior modifications that can help maintain results after stopping the medication."
    },
    {
      question: "How does the Ozempic weight loss calculator work?",
      answer: "The Ozempic weight loss calculator uses clinical trial data and statistical models to estimate potential weight loss based on your starting weight, BMI, dosage, treatment duration, and other factors. It provides a personalized projection showing expected weight loss over time, offering both average and range estimates to account for individual variability."
    },
    {
      question: "Can Ozempic help me reach my target weight?",
      answer: "Ozempic can be an effective tool for reaching your target weight, especially if you have obesity or are overweight with weight-related health conditions. Clinical trials show average weight loss of 15-20% of body weight over 68 weeks at the highest doses. However, results vary significantly between individuals, and Ozempic works best when combined with dietary changes and increased physical activity."
    },
    {
      question: "Is it normal for weight loss to slow down after a few months on Ozempic?",
      answer: "Yes, it's completely normal for weight loss to plateau after several months on Ozempic. Most patients experience their most rapid weight loss during the first 3-6 months of treatment. As your body adapts and your weight decreases, the rate of loss typically slows. This is a normal biological response and doesn't mean the medication has stopped working. Dose adjustments or lifestyle modifications may help overcome plateaus."
    }
  ];
  
  const faqSchema = generateFAQSchema(faqItems);
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Ozempic Weight Loss Calculator Guide', path: '/resources/ozempic-weight-loss-calculator-guide' }
  ]);
  
  // Medical webpage schema
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalEntity",
      "name": "Ozempic (semaglutide) for Weight Loss"
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Patients seeking information about weight loss with Ozempic"
    },
    "lastReviewed": new Date().toISOString().split('T')[0],
    "specialty": ["Endocrinology", "Weight Management"]
  };

  return (
    <>
      <SEOHead 
        title="Ozempic Weight Loss Calculator Guide | Estimate Your Results"
        description="Accurately estimate your weight loss results on Ozempic. Learn how to use our free calculator, interpret your results, and maximize your outcomes."
        canonicalUrl={canonical}
        keywords="ozempic weight loss calculator, semaglutide weight loss, calculate ozempic results, ozempic weight loss timeline, ozempic dosage calculator, expected weight loss ozempic"
        schemas={[articleSchema, faqSchema, breadcrumbSchema, medicalWebPageSchema]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-3xl mx-auto px-4 pb-12">
          <IntroSection />
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit className="w-full" slot="1111111111" format="horizontal" responsive={true} />
          </div>
          
          <ContentSections />
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit className="w-full" slot="2222222222" format="rectangle" responsive={true} />
          </div>
          
          <CallToAction />
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit className="w-full" slot="3333333333" format="horizontal" responsive={true} />
          </div>
          
          <FAQSection faqItems={faqItems} />
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
            <p className="font-semibold mb-1">Medical Disclaimer:</p>
            <p>
              This article is for informational purposes only and does not constitute medical advice. Ozempic (semaglutide) is a prescription medication that should only be used under the supervision of a healthcare provider. The weight loss calculator provides estimates based on clinical data and should not replace professional medical guidance. Always consult with a healthcare provider regarding treatment options, potential side effects, and whether Ozempic is appropriate for your individual situation.
            </p>
          </div>
        </main>
        
        <ResourcePageFooter handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default OzempicWeightLossCalculatorGuide;
