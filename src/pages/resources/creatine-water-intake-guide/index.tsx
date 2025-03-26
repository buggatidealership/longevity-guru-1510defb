
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/utils/seoUtils';
import ResourcePageHeader from '../components/ResourcePageHeader';
import ResourcePageFooter from '../components/ResourcePageFooter';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import HeadCustomization from '@/components/HeadCustomization';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';

const CreatineWaterIntakeGuide = () => {
  // Add URL to sitemap on mount
  React.useEffect(() => {
    addUrlToSitemap('resources/creatine-water-intake-guide', 0.8);
  }, []);
  
  // FAQ items for schema generation
  const faqItems = [
    {
      question: "How much water should I drink while taking creatine?",
      answer: "As a general guideline, you should drink 3-4 liters (100-135 oz) of water daily when taking creatine. During the loading phase (20g/day), increase to 4-5 liters (135-170 oz). Adjust based on your body weight (35-40ml per kg), activity level, and climate. The creatine water calculator can provide a personalized recommendation."
    },
    {
      question: "Why do I need to drink more water when taking creatine?",
      answer: "Creatine causes your muscles to draw in and retain more water (cellular volumization). Without sufficient water intake, this can lead to dehydration symptoms like cramping, digestive discomfort, and reduced performance. Proper hydration ensures optimal creatine benefits while minimizing side effects."
    },
    {
      question: "Can I get dehydrated from taking creatine?",
      answer: "Yes, if you don't increase your water intake. Creatine draws water into your muscles, which means less water is available for other bodily functions. This is why it's important to increase your water intake by at least 500ml for every 5g of creatine you take, especially during the loading phase."
    },
    {
      question: "Should I drink water with my creatine or can I take it dry?",
      answer: "You should always mix creatine with water or another beverage. Taking it dry (dry scooping) can cause choking, digestive discomfort, and poor absorption. Mix it with at least 8oz (240ml) of water for each 5g serving, and continue to drink water throughout the day."
    },
    {
      question: "How can I tell if I'm drinking enough water with creatine?",
      answer: "Monitor your urine color (should be pale yellow to clear), thirst levels, and energy. Signs of dehydration include dark urine, thirst, headaches, dizziness, and muscle cramps. If you experience these symptoms, increase your water intake immediately. For precise guidance, use the creatine water calculator."
    }
  ];

  // Breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Creatine Water Intake Guide", path: "/resources/creatine-water-intake-guide" }
  ];

  // Current date for article schema
  const currentDate = new Date().toISOString();

  // Generate schema markup
  const articleSchema = generateArticleSchema(
    "How Much Water Should You Drink While Taking Creatine?",
    "Learn how to calculate the ideal daily water intake to support safe and effective creatine use based on your body weight and activity level.",
    "resources/creatine-water-intake-guide",
    "2025-02-15T12:00:00Z", // Publication date
    currentDate, // Modified date
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80" // Featured image
  );

  const faqSchema = generateFAQSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // Combine all schemas
  const schemas = [articleSchema, faqSchema, breadcrumbSchema];

  // Critical CSS for performance
  const criticalStyles = `
    .hero-image {opacity: 0; transition: opacity 0.5s ease-in;}
    .hero-image.loaded {opacity: 1;}
  `;

  // Resources to preload - fix the fetchPriority type
  const preloadAssets = [
    {
      href: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
      as: "image",
      fetchPriority: "high" as "high" // Type assertion to ensure it's the correct literal type
    }
  ];

  return (
    <>
      <SEOHead
        title="How Much Water to Drink with Creatine - Hydration Calculator Guide"
        description="Learn how to calculate your ideal daily water intake when taking creatine based on body weight, activity level, and climate. Includes hydration calculator and science-backed guidelines."
        canonicalUrl="https://longevitycalculator.xyz/resources/creatine-water-intake-guide"
        keywords="creatine water intake, hydration with creatine, creatine water calculator, how much water with creatine, creatine hydration guide, water requirements creatine"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80"
        schemas={schemas}
      />
      
      <HeadCustomization 
        preloadAssets={preloadAssets}
        criticalStyles={criticalStyles}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <IntroSection />
          <ContentSections />
          <CallToAction />
          <FAQSection faqs={faqItems} />
        </main>
        
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default CreatineWaterIntakeGuide;
