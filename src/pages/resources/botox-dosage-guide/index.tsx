
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

const BotoxDosageGuide = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Botox Dosage Guide', path: '/resources/botox-dosage-guide' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How Much Botox Do You Really Need? A Calculator-Based Guide by Treatment Area",
    "Learn exactly how much Botox you might need for specific facial areas based on clinical practice, and understand how factors like gender, age, and muscle strength affect your optimal dosage.",
    "/resources/botox-dosage-guide",
    "2023-11-15T08:00:00+00:00",
    new Date().toISOString()
  );
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "How many units of Botox is too much?",
      answer: "While there's no one-size-fits-all answer, most practitioners consider 50-60 units in one session to be a moderate amount for full-face treatment. Exceeding 100 units in a single session could be considered excessive for cosmetic purposes and increases risk of side effects. The FDA has determined that doses up to 400 units every 12 weeks are safe for certain medical conditions, but cosmetic treatments typically use much less."
    },
    {
      question: "How often do I need Botox?",
      answer: "Most people need Botox every 3-4 months when first starting treatments. Over time, as muscles become weaker from regular treatment, some people can extend to 4-6 months between sessions. Factors that may decrease duration include high muscle activity, exercise frequency, metabolism rate, and lower dosing."
    },
    {
      question: "Can I split treatments across different areas?",
      answer: "Yes, you can divide your Botox units across multiple areas during one session. Many providers offer combination treatments targeting several areas for a balanced, natural result. Popular combinations include treating crow's feet with forehead lines, or glabellar (frown) lines with forehead."
    },
    {
      question: "How much does a unit of Botox cost?",
      answer: "In the United States, Botox typically costs between $10-25 per unit depending on your location, provider expertise, and whether you're visiting a medical spa, dermatologist, or plastic surgeon. Major metropolitan areas generally have higher prices. Some providers offer package pricing where the per-unit cost decreases when purchasing a certain number of units."
    }
  ]);

  // Add HowTo schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Determine Your Optimal Botox Dosage",
    "description": "A step-by-step guide to understanding how much Botox you might need for different facial areas based on your characteristics.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Understand Botox Units",
        "text": "Learn what a unit of Botox means and how dosages are measured."
      },
      {
        "@type": "HowToStep",
        "name": "Know Standard Ranges",
        "text": "Familiarize yourself with typical unit ranges for different facial areas."
      },
      {
        "@type": "HowToStep",
        "name": "Consider Personal Factors",
        "text": "Take into account your gender, age, muscle strength, and treatment goals."
      },
      {
        "@type": "HowToStep",
        "name": "Use the Calculator",
        "text": "Try our Botox Dosage Calculator for personalized estimates."
      },
      {
        "@type": "HowToStep",
        "name": "Consult a Professional",
        "text": "Discuss your calculator results with a qualified provider."
      }
    ]
  };

  const schemas = [breadcrumbSchema, articleSchema, faqSchema, howToSchema];

  return (
    <>
      <SEOHead 
        title="How Much Botox Do You Really Need? A Calculator-Based Guide by Treatment Area"
        description="Learn exactly how much Botox you might need for specific facial areas based on clinical practice, and understand how factors like gender, age, and muscle strength affect your optimal dosage."
        canonicalUrl="/resources/botox-dosage-guide"
        keywords="botox units by area, how much botox do I need, botox calculator, botox dosage chart, units of botox, forehead botox dosage, glabellar botox, crow's feet botox, jawline botox, neck botox"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 py-6">
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Much Botox Do You Really Need? A Calculator-Based Guide by Treatment Area</h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            
            <div className="my-6">
              <img 
                src="https://images.unsplash.com/photo-1621798986237-93d793afafc2?auto=format&fit=crop&w=1200&q=80" 
                alt="Botox treatment being administered by medical professional" 
                className="w-full rounded-xl shadow-md object-cover"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 italic mt-2 text-center">
                Precise dosing is crucial for natural-looking Botox results.
              </p>
            </div>
            
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

export default BotoxDosageGuide;
