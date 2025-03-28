
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import { createCalculatorSEOProps, getCanonicalPath } from '@/utils/canonical-utils';
import { generateArticleSchema, generateFAQSchema } from '@/utils/schema-utils';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

const UnderstandingBMRPage: React.FC = () => {
  // Create SEO props
  const seoProps = createCalculatorSEOProps(
    "Understanding and Calculating Your Basal Metabolic Rate (BMR)",
    "Learn what Basal Metabolic Rate (BMR) is, why it's important, and how to calculate your BMR to manage your weight and energy needs effectively.",
    "/resources/understanding-bmr"
  );

  // Schema markup for the article
  const articleSchema = generateArticleSchema(
    "Understanding and Calculating Your Basal Metabolic Rate (BMR)",
    "Comprehensive guide to understanding BMR, its significance, calculation methods, and practical applications for weight management and fitness.",
    "/resources/understanding-bmr",
    "2023-06-15", // Publication date
    new Date().toISOString() // Last modified date
  );

  // FAQ schema markup
  const faqSchema = generateFAQSchema([
    {
      question: "What is Basal Metabolic Rate (BMR)?",
      answer: "Basal Metabolic Rate (BMR) is the number of calories your body needs to perform basic life-sustaining functions while at complete rest. These functions include breathing, blood circulation, cell production, and maintaining body temperature. BMR represents the minimum amount of energy required to keep your body functioning."
    },
    {
      question: "How do I calculate my BMR?",
      answer: "You can calculate your BMR using established formulas like the Harris-Benedict equation or the Mifflin-St Jeor equation. The Mifflin-St Jeor equation is considered more accurate: For men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5. For women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161."
    },
    {
      question: "Why is BMR important for weight management?",
      answer: "BMR is crucial for weight management because it helps you understand your body's baseline caloric needs. Knowing your BMR allows you to create an appropriate caloric deficit for weight loss or surplus for weight gain. Without understanding your BMR, you might over or underestimate your caloric needs, making it difficult to achieve your weight management goals."
    },
    {
      question: "Does muscle mass affect BMR?",
      answer: "Yes, muscle mass significantly affects BMR. Muscle tissue is metabolically active and burns more calories at rest compared to fat tissue. This is why individuals with higher muscle mass typically have a higher BMR. Regular strength training can help increase muscle mass and subsequently raise your BMR, making it easier to maintain or lose weight."
    },
    {
      question: "Can my BMR change over time?",
      answer: "Yes, your BMR can change over time due to various factors. Age naturally decreases BMR (approximately 2-3% per decade after age 20). Changes in weight, muscle mass, hormonal balance, and overall health status can also affect your BMR. Significant weight loss can temporarily lower your BMR as your body adapts to conserve energy."
    }
  ]);

  // Combine schemas
  const schemas = [articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title={seoProps.title}
        description={seoProps.description}
        canonicalUrl={seoProps.canonicalUrl}
        keywords={seoProps.keywords}
        ogType="article"
        ogImage={seoProps.ogImage}
        schemas={schemas}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <nav className="mb-8">
            <ol className="flex flex-wrap text-sm text-gray-600">
              <li className="after:content-['/'] after:mx-2">
                <Link to="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li className="after:content-['/'] after:mx-2">
                <Link to="/resources" className="hover:text-blue-600">Resources</Link>
              </li>
              <li className="text-gray-900 font-medium">
                Understanding BMR
              </li>
            </ol>
          </nav>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding and Calculating Your Basal Metabolic Rate (BMR)
            </h1>
            
            <p className="text-lg text-gray-700 mb-6">
              Learn what Basal Metabolic Rate is, why it matters for your health, and how to calculate it accurately.
            </p>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="mr-4">Published: June 15, 2023</span>
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="w-full bg-gray-100 rounded-lg p-2 mb-8">
              <AdUnit 
                slot="1111111111"
                format="horizontal"
                responsive={true}
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <IntroSection />
            <ContentSections />
            <FAQSection />
            <CallToAction />
          </div>

          <div className="mt-12 w-full bg-gray-100 rounded-lg p-2">
            <AdUnit 
              slot="2222222222"
              format="horizontal"
              responsive={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderstandingBMRPage;
