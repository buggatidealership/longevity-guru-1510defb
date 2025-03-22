
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Longevity Calculators | Free Health & Financial Planning Tools',
  description = 'Free online calculators and tools for health assessment, financial planning, lifestyle optimization, and personal development. Evidence-based resources for better decision-making.',
  canonicalUrl = 'https://longevitycalculator.xyz/',
  ogType = 'website',
  ogImage = 'https://longevitycalculator.xyz/longevity-calculator-og.png',
  keywords = 'calculators, health tools, financial planning, lifestyle calculators, personal development, decision-making tools, free calculators, online tools',
}) => {
  // Make sure the canonical URL is using the correct domain
  let correctedCanonicalUrl = canonicalUrl;
  
  // Don't allow lifespan-calculator.com domain to be used for canonical URLs
  if (correctedCanonicalUrl.includes('lifespan-calculator.com')) {
    // Replace any occurrences of lifespan-calculator.com with longevitycalculator.xyz
    correctedCanonicalUrl = correctedCanonicalUrl.replace('lifespan-calculator.com', 'longevitycalculator.xyz');
  }
  
  // Ensure the URL has https protocol
  if (!correctedCanonicalUrl.startsWith('http')) {
    correctedCanonicalUrl = `https://longevitycalculator.xyz${correctedCanonicalUrl.startsWith('/') ? '' : '/'}${correctedCanonicalUrl}`;
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={correctedCanonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      
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
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:site_name" content="Longevity Calculator" />
      
      {/* Explicitly declare the correct domain */}
      <meta name="domain-verification" content="longevitycalculator.xyz" />
      
      {/* Add a specific directive to disallow the incorrect domain */}
      <meta name="robots" content="nofollow, noimageindex" data-domain="lifespan-calculator.com" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
};

export default SEOHead;
