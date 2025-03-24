
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/schema-utils';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';

const AdultHeightPredictionGuide = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Adult Height Prediction Guide', path: '/resources/adult-height-prediction-guide' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "Adult Height Prediction Guide | How Tall Will I Be?",
    "Wondering how tall you'll be? Learn how to predict adult height using science-backed methods and try our free Adult Height Calculator.",
    "/resources/adult-height-prediction-guide",
    "2024-10-20T08:00:00+00:00",
    "2024-10-20T10:30:00+00:00"
  );
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "Can late bloomers catch up in height?",
      answer: "Yes, late bloomers can catch up in height to some extent. Children who enter puberty later often experience growth for a longer period, which can compensate for their initially slower growth. However, genetics ultimately determine maximum potential height, so late bloomers typically follow their genetic trajectory, just on a delayed timeline."
    },
    {
      question: "What's the most accurate height prediction method?",
      answer: "The most accurate height prediction method is bone age assessment combined with mid-parental height calculations. This clinical approach uses X-rays to determine skeletal maturity alongside genetic factors. For home use, the mid-parental height method (averaging parents' heights with adjustment for gender) provides a reasonable estimate with about 4 inch (10 cm) accuracy in either direction."
    },
    {
      question: "Why do some siblings have big height differences?",
      answer: "Siblings can have significant height differences because height is influenced by multiple genes, not just a single gene from each parent. Each sibling inherits a different combination of these genes. Additionally, non-genetic factors like nutrition, physical activity, sleep quality, and hormone levels during growth years can contribute to height differences between siblings raised in the same household."
    }
  ]);

  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="Adult Height Prediction Guide | How Tall Will I Be?"
        description="Wondering how tall you'll be? Learn how to predict adult height using science-backed methods and try our free Adult Height Calculator."
        canonicalUrl="/resources/adult-height-prediction-guide"
        keywords="height prediction, adult height, how tall will I be, predict height, mid-parental height, growth chart, height calculator"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto px-4 py-6">
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
                <BreadcrumbPage>Adult Height Prediction Guide</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Tall Will I Be? A Science-Backed Guide to Predicting Your Adult Height</h1>
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
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
                  <li><Link to="/life-expectancy-calculator" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirement-savings-calculator" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/resources" className="text-sm text-gray-600 hover:text-primary">Resources</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Longevity Calculator. For educational purposes only.</p>
            <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
              <a href="https://longevitycalculator.xyz/sitemap.xml" className="hover:text-gray-700" target="_blank" rel="noopener noreferrer">Sitemap</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdultHeightPredictionGuide;
