
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/schema-utils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import CanonicalFixer from '@/components/CanonicalFixer';
import { Helmet } from 'react-helmet';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';

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
  
  // Generate FAQ items
  const faqItems = [
    {
      question: 'Is moderate alcohol consumption good for health?',
      answer: 'Despite some studies suggesting moderate drinking might benefit heart health, recent research indicates there is no "safe" level of alcohol consumption. Even light drinking is associated with increased risks of certain cancers and other health issues. Any potential benefits are generally outweighed by risks.'
    },
    {
      question: 'How does alcohol affect lifespan?',
      answer: 'Regular alcohol consumption can reduce lifespan by contributing to liver disease, cardiovascular problems, increased cancer risk, compromised immune function, and higher accident risk. Studies suggest that heavy drinkers may lose 10-12 years of life expectancy compared to non-drinkers.'
    },
    {
      question: 'What counts as "moderate" drinking?',
      answer: 'According to the U.S. Dietary Guidelines, moderate drinking is defined as up to 1 drink per day for women and up to 2 drinks per day for men. A standard drink contains about 14 grams of pure alcohol, which is approximately 12 oz of beer, 5 oz of wine, or 1.5 oz of distilled spirits.'
    },
    {
      question: 'Does quitting alcohol reverse the damage?',
      answer: 'Many alcohol-related health issues can improve or partially reverse after quitting. Liver function may improve within weeks to months, cardiovascular health can begin to recover, and cancer risk gradually decreases. The extent of recovery depends on the duration and intensity of drinking and any permanent damage that occurred.'
    }
  ];
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema(faqItems);

  // Combine all schemas
  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  // Handler for internal link clicks - scrolls to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        <meta name="description" content={pageDescription} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumbs for better navigation and SEO */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/resources">Resources</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Alcohol and Longevity</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article itemScope itemType="https://schema.org/Article" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <meta itemProp="headline" content={pageTitle} />
            <meta itemProp="description" content={pageDescription} />
            <meta itemProp="url" content={canonicalUrl} />
            <link itemProp="mainEntityOfPage" href={canonicalUrl} />
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">{pageTitle}</h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            
            <IntroSection />
            
            <div className="my-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
              <AdUnit 
                className="w-full"
                slot="1111111111" 
                format="rectangle"
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
            
            <FAQSection />
            <CallToAction />
            
            {/* Related resources section for internal linking */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  to="/resources/how-to-increase-life-expectancy" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">How to Increase Life Expectancy</h3>
                  <p className="text-sm text-gray-600">Discover science-backed ways to extend your lifespan and improve longevity.</p>
                </Link>
                <Link 
                  to="/resources/how-to-calculate-your-tdee" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">TDEE Calculator Guide</h3>
                  <p className="text-sm text-gray-600">Learn how to calculate your daily calorie needs for optimal health.</p>
                </Link>
                <Link 
                  to="/life-expectancy-calculator" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Life Expectancy Calculator</h3>
                  <p className="text-sm text-gray-600">Use our calculator to estimate your life expectancy based on lifestyle factors.</p>
                </Link>
                <Link 
                  to="/resources/how-to-boost-your-metabolism" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Metabolism Guide</h3>
                  <p className="text-sm text-gray-600">Learn how to optimize your metabolism for better health and energy.</p>
                </Link>
              </div>
            </div>
            
            <DisclaimerAlert 
              content="The information provided in this article is for educational purposes only and should not replace professional medical advice. Consult with a healthcare provider regarding alcohol consumption and its effects on your individual health situation."
              className="mt-8"
            />
          </article>
          
          {/* Additional JSON-LD FAQ schema for enhanced crawler visibility */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              })
            }}
          />
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default AlcoholAndLongevity;
