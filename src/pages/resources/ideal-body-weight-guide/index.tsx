
import React from 'react';
import SEOHead from '@/components/SEOHead';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { AdUnit } from '@/components/AdUnit';
import { generateArticleSchema, generateFAQSchema } from '@/utils/schema-utils';

const IdealBodyWeightGuide = () => {
  // Article metadata
  const title = "Ideal Body Weight Formulas Explained – What's the Right Weight for You?";
  const description = "Explore the science behind ideal body weight formulas and how to use our free calculator to find your healthiest weight based on height.";
  const publishDate = "2024-05-20T12:00:00+00:00";
  const modifiedDate = "2024-05-20T12:00:00+00:00";
  const slug = "resources/ideal-body-weight-guide";
  
  // Generate FAQ schema items from the FAQ section
  const faqItems = [
    {
      question: "What is an ideal body weight calculator?",
      answer: "An ideal body weight calculator uses mathematical formulas like Devine, Robinson, Hamwi, and others to estimate a weight range considered healthy for your height. These calculators provide a reference point based on population averages, but should be used alongside other health measures like BMI, body composition, and individual health factors."
    },
    {
      question: "How accurate are ideal body weight formulas?",
      answer: "Ideal body weight formulas have limitations in accuracy because they typically only consider height and sometimes gender. They don't account for important factors like muscle mass, body composition, age, ethnicity, or individual health conditions. These formulas provide general estimates rather than precise targets."
    },
    {
      question: "Which ideal body weight formula is most accurate?",
      answer: "No single formula is universally most accurate for everyone. The Devine formula is commonly used in medical settings, particularly for medication dosing. The Modified Devine formula adds adjustments for frame size. For a more comprehensive assessment, it's best to consider multiple formulas alongside other health metrics like BMI, waist circumference, and body fat percentage."
    },
    {
      question: "Why do different ideal weight calculators give different results?",
      answer: "Different calculators use different formulas (Devine, Robinson, Hamwi, Miller, etc.), each developed from different population studies with varying methodologies. Some formulas were developed decades ago with limited diversity in their study populations. Additionally, some calculators may include different adjustment factors for frame size, age, or other variables."
    },
    {
      question: "Should I try to reach my ideal body weight exactly?",
      answer: "No, you shouldn't fixate on reaching an exact number. Ideal body weight formulas provide general guidelines, not precise targets. A healthy weight range typically spans 10-15 pounds. Focus on overall health indicators like energy levels, blood pressure, cholesterol, blood sugar, physical fitness, and sustainable lifestyle habits rather than a specific number on the scale."
    }
  ];
  
  // Generate schema markup
  const articleSchema = generateArticleSchema(
    title,
    description,
    slug,
    publishDate,
    modifiedDate,
    "https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&fit=crop&w=1200&q=80"
  );
  
  const faqSchema = generateFAQSchema(faqItems);
  
  // Combine schemas
  const schemas = [articleSchema, faqSchema];
  
  return (
    <>
      <SEOHead 
        title={title}
        description={description}
        canonicalUrl={`https://longevitycalculator.xyz/${slug}`}
        keywords="ideal body weight, IBW calculator, healthy weight for height, ideal weight calculator, Devine formula, Robinson formula, Hamwi formula, Miller formula, Broca formula"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&fit=crop&w=1200&q=80"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <IntroSection />
          
          <div className="my-6 bg-gray-50 rounded-lg ad-container w-full p-1">
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <ContentSections />
          
          <div className="my-6 bg-gray-50 rounded-lg ad-container w-full p-1">
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <CallToAction />
          
          <FAQSection />
          
          <DisclaimerAlert 
            content="The information provided in this article is for educational purposes only and should not replace professional medical advice. Consult with a healthcare provider before making significant changes to your diet, exercise routine, or health management approach."
            className="mt-10 mb-6"
          />
        </div>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default IdealBodyWeightGuide;
