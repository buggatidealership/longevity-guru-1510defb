
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
  title = 'Longevity Calculators | Health & Financial Planning Tools',
  description = 'Free online calculators and tools for health assessment, financial planning, lifestyle optimization, and personal development. Evidence-based resources for better decision-making.',
  canonicalUrl = 'https://longevitycalculator.xyz/',
  ogType = 'website',
  ogImage = 'https://longevitycalculator.xyz/longevity-calculator-og.png',
  keywords = 'calculators, health tools, financial planning, lifestyle calculators, personal development, decision-making tools, free calculators, online tools',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
