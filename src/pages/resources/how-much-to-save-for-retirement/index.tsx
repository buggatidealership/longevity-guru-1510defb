
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema } from '@/utils/seoUtils';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

const HowMuchToSaveForRetirement = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'How Much to Save for Retirement', path: '/resources/how-much-to-save-for-retirement' }
  ]);

  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "How much should I save for retirement by age 30?",
      answer: "By age 30, aim to have saved the equivalent of your annual salary. If you earn $60,000, your retirement savings target should be approximately $60,000. If you're starting late, increase your savings rate to 15-20% of your income to catch up."
    },
    {
      question: "What is the 4% rule in retirement planning?",
      answer: "The 4% rule suggests you can withdraw 4% of your retirement portfolio in your first year of retirement, then adjust that amount for inflation each year. For example, with $1 million saved, you could withdraw $40,000 the first year. This rule is designed to provide a high probability that your savings will last at least 30 years."
    },
    {
      question: "Do I need to save more if I expect to live longer?",
      answer: "Yes, increased longevity requires larger retirement savings. For each additional decade you expect to live in retirement, consider increasing your savings target by approximately 25%. Modern longevity science suggests many people may live significantly longer than previous generations, making early and consistent saving even more important."
    },
    {
      question: "How do I adjust my retirement savings if I plan to retire early?",
      answer: "For early retirement, increase your savings rate substantially. A general rule is to save 25-30 times your expected annual expenses. For example, if you need $50,000 yearly, aim for $1.25-1.5 million. Additionally, consider healthcare costs before Medicare eligibility and potentially longer retirement periods."
    },
    {
      question: "Should I prioritize debt repayment or retirement savings?",
      answer: "It depends on interest rates. Always contribute enough to get any employer match on retirement accounts. Then prioritize paying off high-interest debt (above 6-7%) before additional retirement savings. For lower-interest debt, balance between debt repayment and retirement contributions, as the compound growth of investments may outpace interest costs."
    }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How Much to Save for Retirement: Real-Life Examples & Guide",
    "Discover exactly how much you should save for retirement based on real-life scenarios. Use our simple guide to secure your financial future.",
    "/resources/how-much-to-save-for-retirement",
    "2024-08-30T12:00:00+00:00", // Publication date
    new Date().toISOString()     // Last modified date
  );

  // Combine all schemas
  const schemas = [breadcrumbSchema, faqSchema, articleSchema];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEOHead 
        title="How Much to Save for Retirement: Real-Life Examples & Guide"
        description="Discover exactly how much you should save for retirement based on real-life scenarios. Use our simple guide to secure your financial future."
        canonicalUrl="/resources/how-much-to-save-for-retirement"
        keywords="retirement savings, retirement calculator, 401k, IRA, how much to save, retirement planning, financial independence, retirement age"
        schemas={schemas}
      />

      {/* Breadcrumb navigation */}
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
            <BreadcrumbPage>How Much to Save for Retirement</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-6">How Much to Save for Retirement: Real-Life Examples & Guide</h1>
        
        <IntroSection />
        <ContentSections />
        <FAQSection />
        <CallToAction />
      </article>
    </div>
  );
};

export default HowMuchToSaveForRetirement;
