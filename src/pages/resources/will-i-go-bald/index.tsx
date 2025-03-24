
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/utils/seoUtils';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';

const WillIGoBald = () => {
  // FAQ items for schema
  const faqItems = [
    {
      question: "Can I really predict baldness?",
      answer: "While no prediction is 100% accurate, you can estimate your baldness risk based on genetic patterns, family history, and early symptoms. Our calculator uses these evidence-based factors to provide a reasonable prediction of your hair loss trajectory."
    },
    {
      question: "Does hair loss skip a generation?",
      answer: "The myth that baldness skips generations isn't scientifically supported. Hair loss genetics are complex and can be inherited from either side of your family. The baldness genes don't 'skip' generations, though their expression may vary between individuals due to multiple genetic and environmental factors."
    },
    {
      question: "How accurate is a baldness calculator?",
      answer: "Baldness calculators provide an estimate based on known risk factors, not a guaranteed prediction. Our calculator considers family history, current hair status, age, and other key factors that scientific research has linked to pattern baldness. While not as definitive as genetic testing, it offers a reasonable assessment of your risk level."
    },
    {
      question: "What's the best age to start preventative treatment?",
      answer: "The best time to start preventative treatment is when you first notice signs of hair thinning or recession, regardless of age. However, treatments are most effective when started early. For those with strong family histories of early baldness, some dermatologists recommend proactive measures in your 20s, even before significant hair loss occurs."
    },
    {
      question: "Can stress cause permanent hair loss?",
      answer: "Acute stress typically causes temporary hair shedding (telogen effluvium) that resolves once the stress is managed. However, chronic stress may accelerate genetic pattern baldness in predisposed individuals. While stress alone rarely causes permanent baldness, it can worsen or trigger pattern hair loss in those with genetic susceptibility."
    }
  ];

  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'Will I Go Bald?', path: '/resources/will-i-go-bald' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "Will I Go Bald? How to Predict Hair Loss with Our Baldness Risk Calculator",
    "https://longevitycalculator.xyz/longevity-calculator-og.png",
    "2024-10-15T08:00:00+00:00",
    "2024-10-15T08:00:00+00:00",
    "Learn the science behind hair loss prediction, discover what causes baldness, and use our calculator to estimate your personal risk of going bald."
  );

  // Generate FAQ schema
  const faqSchema = generateFAQSchema(faqItems);

  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="Will I Go Bald? How to Predict Hair Loss with Our Baldness Risk Calculator"
        description="Learn the science behind hair loss prediction, discover what causes baldness, and use our calculator to estimate your personal risk of going bald."
        canonicalUrl="/resources/will-i-go-bald"
        keywords="baldness risk calculator, will I go bald, hair loss prediction, male pattern baldness, genetic hair loss, balding stages, receding hairline test"
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
                <BreadcrumbPage>Will I Go Bald?</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Will I Go Bald? How to Predict Hair Loss with Our Baldness Risk Calculator</h1>
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

export default WillIGoBald;
