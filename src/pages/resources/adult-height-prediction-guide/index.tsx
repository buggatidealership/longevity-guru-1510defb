
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

const AdultHeightPredictionGuide = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Adult Height Prediction Guide', path: '/resources/adult-height-prediction-guide' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How Tall Will I Be? | Predicting Your Adult Height Based on Genetics and Science",
    "Wondering how tall you'll be as an adult? Learn how genetics, nutrition, and growth patterns shape your final height—and use our calculator to estimate it.",
    "/resources/adult-height-prediction-guide",
    "2024-10-20T08:00:00+00:00",
    "2024-10-20T10:30:00+00:00"
  );
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "Can late bloomers catch up in height?",
      answer: "Yes, late bloomers can catch up in height to some extent. Children who enter puberty later often experience growth for a longer period, which can compensate for their initially slower growth. However, genetics ultimately determine maximum potential height, so late bloomers typically follow their genetic trajectory, just on a delayed timeline."
    },
    {
      question: "What's the most accurate height prediction method?",
      answer: "The most accurate height prediction method is bone age assessment combined with mid-parental height calculations. This clinical approach uses X-rays to determine skeletal maturity alongside genetic factors. For home use, the mid-parental height method (averaging parents' heights with adjustment for gender) provides a reasonable estimate with about 4 inch (10 cm) accuracy in either direction."
    },
    {
      question: "Why do some siblings have big height differences?",
      answer: "Siblings can have significant height differences because height is influenced by multiple genes, not just a single gene from each parent. Each sibling inherits a different combination of these genes. Additionally, non-genetic factors like nutrition, physical activity, sleep quality, and hormone levels during growth years can contribute to height differences between siblings raised in the same household."
    }
  ]);

  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="How Tall Will I Be? | Predicting Your Adult Height Based on Genetics and Science"
        description="Wondering how tall you'll be as an adult? Learn how genetics, nutrition, and growth patterns shape your final height—and use our calculator to estimate it."
        canonicalUrl="/resources/adult-height-prediction-guide"
        keywords="height prediction, adult height, how tall will I be, predict height, mid-parental height, growth chart, height calculator"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 py-6">
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Tall Will I Be? A Science-Backed Guide to Predicting Your Adult Height</h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            
            <IntroSection />
            
            <div className="my-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
              <AdUnit 
                className="w-full"
                slot="2222222222" 
                format="rectangle"
                responsive={true}
              />
            </div>
            
            <ContentSections />
            
            <div className="my-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
              <AdUnit 
                className="w-full"
                slot="3333333333" 
                format="rectangle"
                responsive={true}
              />
            </div>
            
            <FAQSection />
            <CallToAction />
          </article>
          
          <div className="mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="4444444444" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default AdultHeightPredictionGuide;
