
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema } from '@/utils/seoUtils';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

const HowToIncreaseLifeExpectancy = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'How to Increase Life Expectancy', path: '/resources/how-to-increase-life-expectancy' }
  ]);

  // Generate FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "Can lifestyle changes genuinely increase life expectancy?",
      answer: "Yes, research consistently shows that lifestyle modifications like regular exercise, healthy diet, adequate sleep, and stress management can significantly increase life expectancy. Studies suggest these changes can add 10+ years to your life."
    },
    {
      question: "Which exercise is best for longevity?",
      answer: "A combination of moderate aerobic activity (like brisk walking or swimming) for 150 minutes weekly and strength training twice weekly offers the best longevity benefits. The most important factor is consistency rather than intensity."
    },
    {
      question: "What simple dietary change most impacts lifespan?",
      answer: "Reducing processed food consumption and increasing plant-based foods (vegetables, fruits, nuts, whole grains) has the most significant impact on longevity. The Mediterranean diet pattern is particularly associated with longer lifespans in multiple studies."
    },
    {
      question: "How much sleep is optimal for longevity?",
      answer: "Research indicates 7-8 hours of quality sleep per night is optimal for longevity. Both regularly sleeping less than 6 or more than 9 hours is associated with increased mortality risk."
    },
    {
      question: "At what age should I start making lifestyle changes for longevity?",
      answer: "The earlier you adopt healthy lifestyle habits, the greater the benefits, but research shows it's never too late to start. Even beginning healthy habits in your 50s, 60s, or 70s can significantly improve health outcomes and extend life expectancy."
    }
  ]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How to Increase Life Expectancy: 10 Proven Ways to Live Longer",
    "Discover 10 science-backed lifestyle changes proven to increase your life expectancy. Learn simple steps to live longer, healthier, and happier.",
    "/resources/how-to-increase-life-expectancy",
    "2024-08-24T12:00:00+00:00", // Publication date
    new Date().toISOString()     // Last modified date
  );

  // Combine all schemas
  const schemas = [breadcrumbSchema, faqSchema, articleSchema];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEOHead 
        title="How to Increase Life Expectancy: 10 Proven Ways to Live Longer"
        description="Discover 10 science-backed lifestyle changes proven to increase your life expectancy. Learn simple steps to live longer, healthier, and happier."
        canonicalUrl="/resources/how-to-increase-life-expectancy"
        keywords="increase life expectancy, live longer, longevity tips, healthy lifestyle, extend lifespan, longevity science"
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
            <BreadcrumbPage>How to Increase Life Expectancy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-6">How to Increase Life Expectancy: 10 Proven Ways to Live Longer</h1>
        
        <IntroSection />
        <ContentSections />
        <FAQSection />
        <CallToAction />
      </article>
    </div>
  );
};

export default HowToIncreaseLifeExpectancy;
