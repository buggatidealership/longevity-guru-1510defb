
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

    // Add preconnect links dynamically
    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
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

    // Cleanup
    return () => {
      // Only remove links that we added dynamically
      const dynamicLinks = document.querySelectorAll('link[data-dynamic="true"]');
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
