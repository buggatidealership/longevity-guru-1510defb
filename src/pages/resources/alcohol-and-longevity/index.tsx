
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema } from '@/utils/schema-utils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

const AlcoholAndLongevity = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Alcohol and Longevity', path: '/resources/alcohol-and-longevity' }
  ]);

  const schemas = [breadcrumbSchema];

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
        <div className="max-w-4xl mx-auto px-4 py-8">
          <IntroSection />
          <ContentSections />
          <FAQSection />
          <CallToAction />
        </div>
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default AlcoholAndLongevity;
