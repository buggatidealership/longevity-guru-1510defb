
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema } from '@/utils/seoUtils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import CanonicalFixer from '@/components/CanonicalFixer';
import { Helmet } from 'react-helmet';

const AlcoholAndLongevity = () => {
  // Define page title and description
  const pageTitle = "Alcohol and Longevity | How Drinking Affects Your Lifespan";
  const pageDescription = "Learn how alcohol consumption affects your health, lifespan, and overall wellbeing with evidence-based research on the short and long-term effects of drinking.";
  const canonicalUrl = "https://longevitycalculator.xyz/resources/alcohol-and-longevity";
  
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Alcohol and Longevity', path: '/resources/alcohol-and-longevity' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    pageTitle,
    pageDescription,
    '/resources/alcohol-and-longevity',
    '2024-11-10T12:00:00+00:00',
    '2024-11-10T12:00:00+00:00'
  );

  // Combine all schemas
  const schemas = [breadcrumbSchema, articleSchema];

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        keywords="alcohol longevity, drinking health effects, alcohol lifespan impact, moderate drinking health, alcohol consumption, heavy drinking risks"
        schemas={schemas}
      />
      
      {/* Force canonical URL and title with both methods for redundancy */}
      <CanonicalFixer 
        expectedCanonicalUrl={canonicalUrl} 
        pageTitle={pageTitle}
      />
      
      {/* Additional canonical enforcement directly with Helmet */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>{pageTitle}</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <article itemScope itemType="https://schema.org/Article">
            <meta itemProp="headline" content={pageTitle} />
            <meta itemProp="description" content={pageDescription} />
            <meta itemProp="url" content={canonicalUrl} />
            <link itemProp="mainEntityOfPage" href={canonicalUrl} />
            
            <IntroSection />
            <ContentSections />
            <FAQSection />
            <CallToAction />
          </article>
        </div>
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default AlcoholAndLongevity;
