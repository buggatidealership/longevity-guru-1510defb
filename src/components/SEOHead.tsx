
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ensureCanonicalUrl } from '../utils/canonical-utils';

interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  schemas?: SchemaMarkup[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Longevity Calculators | Free Health & Financial Planning Tools',
  description = 'Free online calculators and tools for health assessment, financial planning, lifestyle optimization, and personal development. Evidence-based resources for better decision-making.',
  canonicalUrl = 'https://longevitycalculator.xyz/',
  ogType = 'website',
  ogImage = 'https://longevitycalculator.xyz/longevity-calculator-og.png',
  keywords = 'calculators, health tools, financial planning, lifestyle calculators, personal development, decision-making tools, free calculators, online tools',
  schemas = [],
}) => {
  // Make sure the canonical URL is using the correct domain and format
  const correctedCanonicalUrl = ensureCanonicalUrl(canonicalUrl);
  
  // Check if we're on a search page
  const isSearchPage = 
    typeof window !== 'undefined' && 
    window.location.search.includes('?s=');
    
  // Check if we're on the homepage
  const isHomePage = 
    typeof window !== 'undefined' && 
    window.location.pathname === '/';
    
  // Special handling for the fertility calculator page - checking if we're on that path
  const isFertilityCalculatorPage = 
    typeof window !== 'undefined' && 
    (window.location.pathname === '/female-fertility-calculator' || 
     window.location.pathname.includes('female-fertility-calculator'));
  
  // Create schema markup HTML strings - convert objects to stringified JSON
  const createSchemaMarkup = () => {
    if (!schemas || schemas.length === 0) return null;
    
    return schemas.map((schema, index) => {
      // Ensure the schema is properly serialized
      const safeSchema = JSON.stringify(schema, (key, value) => {
        // Handle any non-serializable values here
        if (typeof value === 'symbol') {
          return value.toString();
        }
        return value;
      });
      
      return (
        <script key={`schema-${index}`} type="application/ld+json">
          {safeSchema}
        </script>
      );
    });
  };
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Only add canonical link if NOT on fertility calculator page (handled in index.html) 
          and NOT on search pages */}
      {!isFertilityCalculatorPage && !isSearchPage && (
        <link rel="canonical" href={correctedCanonicalUrl} data-dynamic="true" />
      )}
      
      {/* For search pages, explicitly set noindex */}
      {isSearchPage && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      
      {/* For homepage, explicitly set index and canonical */}
      {isHomePage && (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <meta name="googlebot" content="index, follow" />
        </>
      )}
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Favicon links */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Open Graph */}
      <meta property="og:url" content={correctedCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional tags for canonical reinforcement */}
      <meta name="robots" content={isSearchPage ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="googlebot" content={isSearchPage ? "noindex, nofollow" : "index, follow"} />
      <meta property="og:site_name" content="Longevity Calculator" />
      
      {/* Explicitly declare the correct domain */}
      <meta name="domain-verification" content="longevitycalculator.xyz" />
      
      {/* Ensure no noindex directive for the main domain */}
      <meta name="robots" content="index, follow" data-domain="longevitycalculator.xyz" />
      
      {/* Add a specific directive to disallow the incorrect domain */}
      <meta name="robots" content="noindex, nofollow" data-domain="www.longevitycalculator.xyz" />
      <meta name="robots" content="nofollow, noimageindex" data-domain="lifespan-calculator.com" />
      
      {/* Sitemap reference - added explicitly in meta tags in addition to link element */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <meta name="sitemap" content="https://longevitycalculator.xyz/sitemap.xml" />
      
      {/* Structured data - render each schema as a separate script element */}
      {createSchemaMarkup()}
    </Helmet>
  );
};

export default SEOHead;
