
import React, { useEffect } from 'react';

interface HeadCustomizationProps {
  preconnectUrls?: string[];
  preloadAssets?: Array<{
    href: string;
    as: string;
    type?: string;
  }>;
}

/**
 * Component for adding performance optimizations to the head
 */
const HeadCustomization: React.FC<HeadCustomizationProps> = ({
  preconnectUrls = [],
  preloadAssets = [],
}) => {
  useEffect(() => {
    // Default Google services preconnect URLs to add
    const defaultPreconnectUrls = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ];
    
    const allPreconnectUrls = [...defaultPreconnectUrls, ...preconnectUrls];
    
    // Check if there's an incorrect canonical URL and remove it
    const incorrectCanonical = document.querySelector('link[rel="canonical"][href*="lifespan-calculator.com"]');
    if (incorrectCanonical && incorrectCanonical.parentNode) {
      incorrectCanonical.parentNode.removeChild(incorrectCanonical);
    }
    
    // Ensure correct canonical URL exists
    const correctCanonical = document.querySelector('link[rel="canonical"][href*="longevitycalculator.xyz"]');
    if (!correctCanonical) {
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://longevitycalculator.xyz/';
      canonicalLink.setAttribute('data-dynamic', 'true');
      document.head.appendChild(canonicalLink);
    }
    
    // Add Referrer-Policy meta tag if missing
    if (!document.querySelector('meta[name="referrer"]')) {
      const referrerPolicy = document.createElement('meta');
      referrerPolicy.name = 'referrer';
      referrerPolicy.content = 'strict-origin-when-cross-origin';
      referrerPolicy.setAttribute('data-dynamic', 'true');
      document.head.appendChild(referrerPolicy);
    }
    
    // Ensure sitemap link exists with correct content type
    const sitemapLink = document.querySelector('link[rel="sitemap"]');
    if (!sitemapLink) {
      const newSitemapLink = document.createElement('link');
      newSitemapLink.rel = 'sitemap';
      newSitemapLink.type = 'application/xml';
      newSitemapLink.href = '/sitemap.xml';
      newSitemapLink.setAttribute('data-dynamic', 'true');
      document.head.appendChild(newSitemapLink);
    } else if (!sitemapLink.hasAttribute('type')) {
      // Ensure type attribute is set
      sitemapLink.setAttribute('type', 'application/xml');
    }
    
    // Add X-Robots-Tag meta equivalent if not present
    if (!document.querySelector('meta[name="robots"]')) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-image-preview:large';
      robotsMeta.setAttribute('data-dynamic', 'true');
      document.head.appendChild(robotsMeta);
    }

    // Add preconnect links dynamically
    allPreconnectUrls.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
        
        // Also add dns-prefetch as fallback for browsers that don't support preconnect
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = url;
        dnsPrefetch.setAttribute('data-dynamic', 'true');
        document.head.appendChild(dnsPrefetch);
      }
    });

    // Add preload links dynamically
    preloadAssets.forEach(asset => {
      if (!document.querySelector(`link[rel="preload"][href="${asset.href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = asset.href;
        link.as = asset.as;
        if (asset.type) {
          link.setAttribute('type', asset.type);
        }
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
      }
    });

    // Ensure Google Analytics is working correctly
    const verifyGAInitialization = () => {
      if (typeof window.gtag === 'function' && typeof window.verifyGA4 === 'function') {
        window.verifyGA4();
      }
    };
    
    // Verify GA after a delay to ensure it's had time to initialize
    setTimeout(verifyGAInitialization, 3000);
    
    // Add indexability debugging info to console
    console.info('HeadCustomization: Optimizing page for search engine indexing');
    console.info('Current page URL:', window.location.href);
    console.info('Canonical URL:', document.querySelector('link[rel="canonical"]')?.getAttribute('href'));

    // Cleanup
    return () => {
      // Only remove links that we added dynamically
      const dynamicLinks = document.querySelectorAll('link[data-dynamic="true"], meta[data-dynamic="true"]');
      dynamicLinks.forEach(el => {
        if (el.parentNode === document.head) {
          document.head.removeChild(el);
        }
      });
    };
  }, [preconnectUrls, preloadAssets]);

  return null;
};

export default HeadCustomization;
