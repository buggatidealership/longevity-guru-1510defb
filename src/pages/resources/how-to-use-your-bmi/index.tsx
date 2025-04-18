
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

const HowToUseYourBMI = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'How to Use Your BMI', path: '/resources/how-to-use-your-bmi' }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How to Use Your BMI Score Effectively | Free BMI Calculator",
    "Understand how to interpret your BMI, what your score means, and how it can help with your health goals.",
    "/resources/how-to-use-your-bmi",
    "2024-05-15T08:00:00+00:00",
    "2024-05-15T10:30:00+00:00"
  );
  
  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "What is a healthy BMI?",
      answer: "According to standard guidelines, a BMI between 18.5 and 24.9 is considered normal or healthy for most adults. However, what's truly healthy can vary based on individual factors including ethnic background and muscle mass."
    },
    {
      question: "Why doesn't BMI work for athletes or bodybuilders?",
      answer: "BMI doesn't distinguish between muscle and fat. Muscle tissue is denser and heavier than fat tissue, so athletic or muscular individuals often have higher BMIs despite having healthy body fat percentages."
    },
    {
      question: "Are there better alternatives to BMI?",
      answer: "Several measurements can provide more comprehensive health insights than BMI alone, including waist circumference, waist-to-hip ratio, body fat percentage, DEXA scans, and bioelectrical impedance analysis."
    }
  ]);

  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="How to Use Your BMI Score Effectively | Free BMI Calculator"
        description="Understand how to interpret your BMI, what your score means, and how it can help with your health goals."
        canonicalUrl="/resources/how-to-use-your-bmi"
        keywords="BMI, body mass index, BMI calculator, BMI limitations, healthy weight, BMI categories, BMI accuracy, interpret BMI"
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
                <BreadcrumbPage>How to Use Your BMI</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Use Your BMI Score Effectively</h1>
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

export default HowToUseYourBMI;
