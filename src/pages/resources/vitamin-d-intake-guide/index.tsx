
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/schema-utils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import { AdUnit } from '@/components/AdUnit';

const VitaminDIntakeGuide = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Vitamin D Intake Guide', path: '/resources/vitamin-d-intake-guide' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How to Calculate Your Ideal Vitamin D Intake",
    "Learn how to calculate the optimal daily vitamin D dosage for your body using science-backed guidelines, based on age, weight, and lifestyle factors.",
    "/resources/vitamin-d-intake-guide",
    "2024-08-30T12:00:00+00:00",
    "2024-08-30T12:00:00+00:00",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
  );

  // FAQ Schema
  const faqSchema = generateFAQSchema([
    {
      question: "How much vitamin D should I take daily?",
      answer: "Most adults need 600-800 IU (15-20 mcg) of vitamin D daily. However, your ideal intake depends on factors like age, skin tone, sun exposure, and existing blood levels. Adults with minimal sun exposure or darker skin may need 1,000-2,000 IU daily, while those with deficiency might require 4,000-5,000 IU under medical supervision."
    },
    {
      question: "Can I get enough vitamin D from sunlight alone?",
      answer: "It depends on several factors. Fair-skinned individuals might produce 10,000-20,000 IU from 15-30 minutes of midday summer sun exposure. However, this varies based on latitude, season, cloud cover, skin tone, and sunscreen use. During winter months in northern latitudes, most people cannot produce sufficient vitamin D from sunlight and require dietary sources or supplements."
    },
    {
      question: "What foods are high in vitamin D?",
      answer: "Few foods naturally contain significant vitamin D. The best sources include fatty fish (salmon, mackerel, sardines), fish liver oils, egg yolks, and some mushrooms exposed to UV light. Fortified foods like milk, orange juice, and cereals can provide vitamin D as well, but typically in smaller amounts than supplements."
    },
    {
      question: "Is it possible to take too much vitamin D?",
      answer: "Yes. Vitamin D toxicity, though rare, can occur with excessive supplementation, typically at doses above 10,000 IU daily over extended periods. Symptoms include high blood calcium levels, nausea, vomiting, weakness, and kidney problems. You cannot overdose from sun exposure as your body regulates production. Always follow healthcare provider recommendations for supplementation."
    },
    {
      question: "How do I know if I'm deficient in vitamin D?",
      answer: "Common symptoms of vitamin D deficiency include fatigue, bone pain, muscle weakness, mood changes, and impaired wound healing. However, many people have no obvious symptoms. The only reliable way to determine your vitamin D status is through a blood test measuring 25-hydroxyvitamin D levels. Levels below 20 ng/mL (50 nmol/L) indicate deficiency."
    }
  ]);

  // Combine all schemas
  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="Vitamin D Intake Calculator Guide – Dosage by Age, Weight & Sunlight"
        description="Use our guide to calculate your ideal vitamin D dosage based on age, body weight, and lifestyle. Includes calculator, dosage tips, and deficiency signs."
        canonicalUrl="/resources/vitamin-d-intake-guide"
        keywords="vitamin D calculator, vitamin D dosage, vitamin D intake, daily vitamin D requirements, vitamin D supplements, vitamin D deficiency, optimal vitamin D levels, vitamin D by age, vitamin D by weight"
        schemas={schemas}
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 pb-12">
          <IntroSection />
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
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
          
          <CallToAction />
          
          <FAQSection />
          
          <div className="mt-12 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
            <h3 className="text-lg font-medium text-yellow-800">Medical Disclaimer</h3>
            <p className="mt-2 text-sm text-yellow-700">
              This article is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or treatment before undertaking a new healthcare regimen. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
          </div>
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default VitaminDIntakeGuide;
