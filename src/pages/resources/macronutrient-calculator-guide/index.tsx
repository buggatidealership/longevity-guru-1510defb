
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema-utils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

const MacronutrientCalculatorGuide: React.FC = () => {
  // Define the metadata
  const title = "How to Use the Macronutrient Calculator to Hit Your Health Goals";
  const description = "Learn how to calculate your ideal daily intake of protein, carbs, and fat based on your fitness goals using our free macronutrient calculator.";
  const path = "resources/macronutrient-calculator-guide";
  const datePublished = "2024-12-15T12:00:00+00:00";
  const dateModified = "2024-12-15T12:00:00+00:00";
  
  // Generate article schema
  const articleSchema = generateArticleSchema(
    title,
    description,
    path,
    datePublished,
    dateModified,
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
  );
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "What is a macronutrient calculator?",
      answer: "A macronutrient calculator is a tool that determines your ideal daily intake of protein, carbohydrates, and fats based on your age, sex, height, weight, activity level, and fitness goals. It provides personalized nutrition recommendations to help you achieve weight loss, maintenance, or muscle building objectives."
    },
    {
      question: "How accurate is a macronutrient calculator?",
      answer: "Macronutrient calculators provide a good starting point based on scientific formulas like the Mifflin-St Jeor equation. However, individual metabolism varies, so you should treat the results as an initial guideline and adjust based on your body's response over 2-3 weeks of consistent tracking."
    },
    {
      question: "How much protein do I need to build muscle?",
      answer: "For muscle building, research suggests consuming 1.6-2.2g of protein per kg of bodyweight daily. Our macronutrient calculator typically recommends around 25% of calories from protein when the 'Build Muscle' goal is selected, which falls within this range for most individuals."
    },
    {
      question: "Should I adjust my macros on rest days?",
      answer: "Many people benefit from adjusting macros on rest days, typically by reducing carbohydrates by 15-20% and slightly increasing fats to maintain similar overall calories. Protein intake usually remains consistent regardless of training schedule to support muscle recovery and maintenance."
    },
    {
      question: "How often should I recalculate my macros?",
      answer: "Recalculate your macros every 8-12 weeks, or whenever you experience a significant change in weight (more than 5-10 lbs), activity level, or training goals. Regular adjustments ensure your nutrition plan remains aligned with your evolving body composition and fitness objectives."
    }
  ]);
  
  // Generate breadcrumbs schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: title, path: `/${path}` }
  ]);
  
  // Combine all schemas
  const schemas = [articleSchema, faqSchema, breadcrumbSchema];

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalUrl={`/${path}`}
        keywords="macronutrient calculator, calculate macros, macro diet, protein fat carb ratio, macronutrient breakdown, nutrition calculator, IIFYM calculator, flexible dieting macros"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <IntroSection />
          <ContentSections />
          <CallToAction />
          <FAQSection />
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default MacronutrientCalculatorGuide;
