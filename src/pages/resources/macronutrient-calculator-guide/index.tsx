
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema-utils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import CanonicalFixer from '@/components/CanonicalFixer';
import { Helmet } from 'react-helmet';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const MacronutrientCalculatorGuide: React.FC = () => {
  // Define the metadata
  const title = "How to Use the Macronutrient Calculator to Hit Your Health Goals";
  const description = "Learn how to calculate your ideal daily intake of protein, carbs, and fat based on your fitness goals using our free macronutrient calculator.";
  const path = "resources/macronutrient-calculator-guide";
  const canonicalUrl = `https://longevitycalculator.xyz/${path}`;
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
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        keywords="macronutrient calculator, calculate macros, macro diet, protein fat carb ratio, macronutrient breakdown, nutrition calculator, IIFYM calculator, flexible dieting macros"
        schemas={schemas}
      />
      
      {/* Force canonical URL and title with both methods for redundancy */}
      <CanonicalFixer 
        expectedCanonicalUrl={canonicalUrl} 
        pageTitle={title}
      />
      
      {/* Additional canonical enforcement directly with Helmet */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>{title}</title>
        <meta name="description" content={description} />
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
                <BreadcrumbPage>Macronutrient Calculator Guide</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article itemScope itemType="https://schema.org/Article" className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <meta itemProp="headline" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="url" content={canonicalUrl} />
            <link itemProp="mainEntityOfPage" href={canonicalUrl} />
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="headline">{title}</h1>
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
            
            <CallToAction />
            <FAQSection />
            
            {/* Related resources section for internal linking */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  to="/resources/how-to-calculate-your-tdee" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">TDEE Calculator Guide</h3>
                  <p className="text-sm text-gray-600">Learn how to calculate your daily calorie needs for optimal health.</p>
                </Link>
                <Link 
                  to="/macronutrient-calculator" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Macronutrient Calculator</h3>
                  <p className="text-sm text-gray-600">Use our calculator to get personalized macro recommendations.</p>
                </Link>
                <Link 
                  to="/resources/how-to-boost-your-metabolism" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Metabolism Guide</h3>
                  <p className="text-sm text-gray-600">Learn how to optimize your metabolism for better health and energy.</p>
                </Link>
                <Link 
                  to="/resources/ideal-body-weight-guide" 
                  onClick={handleLinkClick}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium mb-1">Ideal Body Weight Guide</h3>
                  <p className="text-sm text-gray-600">Understand what an ideal weight means for your height and frame.</p>
                </Link>
              </div>
            </div>
            
            <DisclaimerAlert 
              content="The information provided in this article is for educational purposes only and should not replace professional medical or nutritional advice. Consult with a registered dietitian or healthcare provider before making significant changes to your diet."
              className="mt-8"
            />
          </article>
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default MacronutrientCalculatorGuide;
