
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

const BotoxDosageGuide = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'How Much Botox Do You Really Need?', path: '/resources/botox-dosage-guide' }
  ]);

  // Generate FAQ schema
  const faqItems = [
    {
      question: "How many units of Botox is too much?",
      answer: "While there's no one-size-fits-all answer, most practitioners consider 50-60 units in one session to be a moderate amount for full-face treatment. Exceeding 100 units in a single session could be considered excessive for cosmetic purposes and increases risk of side effects. The FDA has determined that doses up to 400 units every 12 weeks are safe for certain medical conditions, but cosmetic treatments typically use much less. Always follow your provider's recommendations based on your specific needs."
    },
    {
      question: "How often do I need Botox?",
      answer: "Most people need Botox every 3-4 months when first starting treatments. Over time, as muscles become weaker from regular treatment, some people can extend to 4-6 months between sessions. Factors that may decrease duration include high muscle activity, exercise frequency, metabolism rate, and lower dosing. Your provider can help establish an optimal treatment schedule based on your results."
    },
    {
      question: "Can I split treatments across different areas?",
      answer: "Yes, you can divide your Botox units across multiple areas during one session. Many providers offer combination treatments targeting several areas for a balanced, natural result. Popular combinations include treating crow's feet with forehead lines, or glabellar (frown) lines with forehead. Discussing your priorities with your provider will help determine the most effective distribution of units within your budget."
    },
    {
      question: "How much does a unit of Botox cost?",
      answer: "In the United States, Botox typically costs between $10-25 per unit depending on your location, provider expertise, and whether you're visiting a medical spa, dermatologist, or plastic surgeon. Major metropolitan areas generally have higher prices. Some providers offer package pricing where the per-unit cost decreases when purchasing a certain number of units. Always confirm if the quoted price is per unit or per area before your treatment."
    }
  ];
  
  const faqSchema = generateFAQSchema(faqItems);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How Much Botox Do You Really Need? A Calculator-Based Guide by Treatment Area",
    "https://longevitycalculator.xyz/longevity-calculator-og.png",
    "2024-05-15T08:00:00+00:00",
    "2024-05-15T10:30:00+00:00",
    "Learn how much Botox you actually need for different facial areas. Our calculator-based guide helps you understand dosage factors and typical unit ranges for optimal, natural-looking results."
  );

  const schemas = [breadcrumbSchema, articleSchema, faqSchema];

  return (
    <>
      <SEOHead 
        title="How Much Botox Do You Really Need? A Calculator-Based Guide by Treatment Area"
        description="Learn how much Botox you actually need for different facial areas. Our calculator-based guide helps you understand dosage factors and typical unit ranges for optimal, natural-looking results."
        canonicalUrl="/resources/botox-dosage-guide"
        keywords="botox units by area, how much botox do I need, botox calculator, botox dosage chart, units of botox, forehead botox dosage, botox treatment, botox injection sites"
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
                <BreadcrumbPage>How Much Botox Do You Really Need?</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Much Botox Do You Really Need? A Calculator-Based Guide by Treatment Area</h1>
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
                  <li><Link to="/botox-calculator" className="text-sm text-gray-600 hover:text-primary">Botox Dosage Calculator</Link></li>
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

export default BotoxDosageGuide;
