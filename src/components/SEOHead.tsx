
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
  // Check sitemap accessibility on component mount (only in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const checkSitemap = async () => {
        try {
          const { checkSitemapAccessibility, debugSitemapContent } = await import('../utils/sitemap-utils');
          const isAccessible = await checkSitemapAccessibility('/sitemap.xml');
          
          if (!isAccessible) {
            console.warn('⚠️ Sitemap is not accessible or has format issues');
            // Debug the content
            debugSitemapContent();
          }
        } catch (error) {
          console.error('Error checking sitemap:', error);
        }
      };
      
      checkSitemap();
    }
  }, []);
  
  // Make sure the canonical URL is using the correct domain and format
  const correctedCanonicalUrl = ensureCanonicalUrl(canonicalUrl);
  
  // Debug canonical URL in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Original canonicalUrl:', canonicalUrl);
    console.log('Corrected canonicalUrl:', correctedCanonicalUrl);
  }
  
  // Structured data for organization with logo
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Longevity Calculator",
    "url": "https://longevitycalculator.xyz",
    "logo": "https://longevitycalculator.xyz/logo.png",
    "sameAs": [
      "https://longevitycalculator.xyz"
    ]
  };

  // Structured data for WebSite
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Longevity Calculators",
    "url": "https://longevitycalculator.xyz",
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://longevitycalculator.xyz/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Combine default schemas with custom schemas
  const allSchemas = [
    organizationStructuredData, 
    websiteStructuredData,
    ...schemas
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Explicitly add the canonical URL link element */}
      <link rel="canonical" href={correctedCanonicalUrl} />
      
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
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:site_name" content="Longevity Calculator" />
      
      {/* Explicitly declare the correct domain */}
      <meta name="domain-verification" content="longevitycalculator.xyz" />
      
      {/* Ensure no noindex directive for the main domain */}
      <meta name="robots" content="index, follow" data-domain="longevitycalculator.xyz" />
      
      {/* Add a specific directive to disallow the incorrect domain */}
      <meta name="robots" content="nofollow, noimageindex" data-domain="lifespan-calculator.com" />
      
      {/* Sitemap reference - added explicitly in meta tags in addition to link element */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <meta name="sitemap" content="https://longevitycalculator.xyz/sitemap.xml" />
      
      {/* Structured data */}
      {allSchemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
