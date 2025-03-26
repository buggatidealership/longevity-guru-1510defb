
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { generateBreadcrumbSchema } from '@/utils/seoUtils';
import ResourcePageHeader from './components/ResourcePageHeader';
import ResourcesContent from './components/ResourcesContent';
import ResourcePageFooter from './components/ResourcePageFooter';

const ResourcesIndex = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' }
  ]);

  const schemas = [breadcrumbSchema];

  return (
    <>
      <SEOHead 
        title="Longevity Resources | Health & Wellness Articles"
        description="Explore our collection of evidence-based articles about health, wellness, longevity, and financial planning to help you make better lifestyle decisions."
        canonicalUrl="/resources"
        keywords="longevity resources, health articles, wellness guides, financial planning, healthy living, lifespan extension"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ResourcePageHeader />
        <ResourcesContent />
        <ResourcePageFooter />
      </div>
    </>
  );
};

export default ResourcesIndex;
