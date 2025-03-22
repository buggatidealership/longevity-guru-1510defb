
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  preloadFonts?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Longevity Calculators | Free Health & Financial Planning Tools',
  description = 'Free online calculators and tools for health assessment, financial planning, lifestyle optimization, and personal development. Evidence-based resources for better decision-making.',
  canonicalUrl = 'https://longevitycalculator.xyz/',
  ogType = 'website',
  ogImage = 'https://longevitycalculator.xyz/longevity-calculator-og.png',
  keywords = 'calculators, health tools, financial planning, lifestyle calculators, personal development, decision-making tools, free calculators, online tools',
  preloadFonts = true,
}) => {
  // Enforce longevitycalculator.xyz as the canonical domain
  let correctedCanonicalUrl = canonicalUrl;
  if (correctedCanonicalUrl.includes('lifespan-calculator.com')) {
    // Replace any occurrences of lifespan-calculator.com with longevitycalculator.xyz
    correctedCanonicalUrl = correctedCanonicalUrl.replace('lifespan-calculator.com', 'longevitycalculator.xyz');
  }

  return (
    <Helmet>
      {/* Only pass string values to Helmet - nothing that could be a Symbol */}
      <title>{String(title)}</title>
      <meta name="description" content={String(description)} />
      <link rel="canonical" href={String(correctedCanonicalUrl)} />
      {keywords && <meta name="keywords" content={String(keywords)} />}
      
      {/* Open Graph */}
      <meta property="og:url" content={String(correctedCanonicalUrl)} />
      <meta property="og:type" content={String(ogType)} />
      <meta property="og:title" content={String(title)} />
      <meta property="og:description" content={String(description)} />
      <meta property="og:image" content={String(ogImage)} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={String(title)} />
      <meta name="twitter:description" content={String(description)} />
      <meta name="twitter:image" content={String(ogImage)} />
      
      {/* Additional tags to strengthen canonical status */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:site_name" content="Longevity Calculator" />
      
      {/* Prevent crawlers from thinking this is linked to lifespan-calculator.com */}
      <meta name="robots" content="nofollow, noimageindex" data-domain="lifespan-calculator.com" />
      
      {/* Performance optimizations - ensure all attributes are strings */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin={String("anonymous")} />
      <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin={String("anonymous")} />
      
      {/* Preload critical assets - can be customized per page */}
      {preloadFonts && (
        <>
          <link rel="preload" href="/src/index.css" as={String("style")} />
          <link rel="preload" href="https://cdn.gpteng.co/gptengineer.js" as={String("script")} />
        </>
      )}
      
      {/* Sitemap reference */}
      <link rel="sitemap" type={String("application/xml")} href="/sitemap.xml" />
    </Helmet>
  );
};

export default SEOHead;
