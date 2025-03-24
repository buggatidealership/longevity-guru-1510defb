
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/schema-utils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import CallToAction from './CallToAction';
import { AdUnit } from '@/components/AdUnit';

const HowToPredictChildsAdultHeight = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'How to Predict Your Child\'s Adult Height', path: '/resources/how-to-predict-your-childs-adult-height' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How to Predict Your Child's Adult Height with Confidence",
    "Learn how to estimate your child's adult height using science-backed methods. Discover what influences growth and when to consult your pediatrician.",
    "/resources/how-to-predict-your-childs-adult-height",
    "2024-10-25T08:00:00+00:00",
    "2024-10-25T10:30:00+00:00"
  );
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "How accurate are child height predictions?",
      answer: "Height predictions for children typically have an accuracy range of ±2–3 inches. The mid-parental height formula provides a scientific estimate based on genetics, but other factors like nutrition, sleep, physical activity, and medical conditions can influence the final adult height. Regular tracking with a pediatrician can improve prediction accuracy over time."
    },
    {
      question: "What is the mid-parental height formula?",
      answer: "The mid-parental height formula estimates a child's potential adult height based on their parents' heights. For boys: add the father's height and mother's height, add 5 inches (13 cm), then divide by 2. For girls: add the father's height and mother's height, subtract 5 inches (13 cm), then divide by 2. This provides a target height with approximately 2-3 inches of variation in either direction."
    },
    {
      question: "When should I be concerned about my child's growth?",
      answer: "You should consult a pediatrician if: your child's height falls below the 3rd percentile or above the 97th percentile on growth charts; there's a significant drop across multiple percentile lines; you notice early or delayed puberty signs; your child experiences a sudden growth plateau; or if there's a significant imbalance between height and weight. Regular checkups are essential for monitoring healthy growth patterns."
    }
  ]);

  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="How to Predict Your Child's Adult Height with Confidence"
        description="Learn how to estimate your child's adult height using science-backed methods. Discover what influences growth and when to consult your pediatrician."
        canonicalUrl="/resources/how-to-predict-your-childs-adult-height"
        keywords="child height predictor, predict adult height, how tall will my child be, growth chart calculator, mid-parental height formula"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 py-6">
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Predict Your Child's Adult Height with Confidence</h1>
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

export default HowToPredictChildsAdultHeight;
