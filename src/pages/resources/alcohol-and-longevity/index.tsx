
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/seoUtils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import { AdUnit } from '@/components/AdUnit';

const AlcoholAndLongevity = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Alcohol and Longevity', path: '/resources/alcohol-and-longevity' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "Alcohol and Longevity: Understanding the Impact on Your Lifespan",
    "Learn how alcohol consumption affects your health, lifespan, and overall wellbeing with evidence-based research on the short and long-term effects of drinking.",
    "/resources/alcohol-and-longevity",
    "2023-11-15T12:00:00+00:00",
    "2024-07-20T14:30:00+00:00"
  );
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "Does moderate drinking actually have health benefits?",
      answer: "The evidence for health benefits from moderate drinking has weakened considerably in recent years. While some older studies suggested cardiovascular benefits from moderate alcohol consumption, more recent and methodologically rigorous research has called these findings into question. Current scientific consensus is that any potential benefits are likely small and outweighed by risks, even at low levels of consumption."
    },
    {
      question: "Is red wine healthier than other alcoholic beverages?",
      answer: "Red wine contains compounds like resveratrol and polyphenols that have shown antioxidant properties in laboratory studies. However, the amounts in wine are relatively small, and you would need to consume unhealthy amounts of alcohol to get meaningful doses. Studies that have isolated the alcohol content from other components generally find that the type of drink makes little difference to overall health outcomes – the primary factor is the amount of ethanol consumed."
    },
    {
      question: "How long does it take for the body to recover from heavy drinking?",
      answer: "Recovery timelines vary depending on drinking history and individual factors. The liver can begin regenerating within days, with fatty liver potentially resolving within 2-6 weeks. Brain function may improve over 1-2 years of abstinence, with some studies showing continued recovery for up to 7+ years. Blood pressure may normalize within weeks to months, and sleep quality typically begins improving within 1-2 months of abstinence."
    },
    {
      question: "How does alcohol affect weight and metabolism?",
      answer: "Alcohol impacts weight through several mechanisms: it's calorie-dense (7 calories/gram), the body prioritizes metabolizing alcohol over burning fat, it often stimulates appetite, disrupts sleep quality which affects metabolism, and impairs workout recovery. Many people who reduce or eliminate alcohol consumption report significant weight loss even without other dietary changes."
    },
    {
      question: "Does genetic makeup affect how alcohol impacts longevity?",
      answer: "Yes, genetic factors significantly influence alcohol's impact. Variations in alcohol metabolism genes (ADH, ALDH) affect how efficiently your body processes alcohol and its toxic byproducts. Differences in liver enzyme production affect susceptibility to liver damage. Family history of alcoholism increases addiction risk by 4-7 times. Some genetic variations also increase the risk of alcohol-related cancers when combined with drinking."
    }
  ]);

  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="Alcohol and Longevity | How Drinking Affects Your Lifespan"
        description="Learn how alcohol consumption affects your health, lifespan, and overall wellbeing with evidence-based research on the short and long-term effects of drinking."
        canonicalUrl="/resources/alcohol-and-longevity"
        keywords="alcohol longevity, drinking health effects, alcohol lifespan impact, moderate drinking health, alcohol consumption, heavy drinking risks"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 py-6">
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
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

export default AlcoholAndLongevity;
