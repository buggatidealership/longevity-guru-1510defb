
import React, { useEffect } from 'react';

interface HeadCustomizationProps {
  preconnectUrls?: string[];
  preloadAssets?: Array<{
    href: string;
    as: string;
    type?: string;
    fetchPriority?: 'high' | 'low' | 'auto';
  }>;
  criticalStyles?: string;
}

/**
 * Component for adding performance optimizations to the head
 * Optimized to prioritize critical resources and reduce render blocking
 */
const HeadCustomization: React.FC<HeadCustomizationProps> = ({
  preconnectUrls = [],
  preloadAssets = [],
  criticalStyles,
}) => {
  useEffect(() => {
    // Default Google services preconnect URLs to add
    const defaultPreconnectUrls = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://pagead2.googlesyndication.com',
      'https://consent.cookiebot.com'
    ];
    
    const allPreconnectUrls = [...defaultPreconnectUrls, ...preconnectUrls];
    
    // Find and clean old dynamic elements
    const oldDynamicElements = document.querySelectorAll('[data-dynamic="true"]');
    oldDynamicElements.forEach(el => {
      if (el.parentNode === document.head) {
        document.head.removeChild(el);
      }
    });
    
    // Check for incorrect canonical URL and remove it
    const incorrectCanonical = document.querySelector('link[rel="canonical"][href*="lifespan-calculator.com"]');
    if (incorrectCanonical && incorrectCanonical.parentNode) {
      incorrectCanonical.parentNode.removeChild(incorrectCanonical);
    }
    
    // Ensure correct canonical URL exists
    const correctCanonical = document.querySelector('link[rel="canonical"][href*="longevitycalculator.xyz"]');
    if (!correctCanonical) {
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://longevitycalculator.xyz' + window.location.pathname;
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
    
    // Add critical CSS if provided
    if (criticalStyles) {
      const styleElement = document.createElement('style');
      styleElement.setAttribute('data-dynamic', 'true');
      styleElement.textContent = criticalStyles;
      document.head.appendChild(styleElement);
    }

    // Add preconnect links dynamically - with priority
    const addedUrls = new Set();
    allPreconnectUrls.forEach(url => {
      if (!addedUrls.has(url) && !document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        addedUrls.add(url);
        
        // First add dns-prefetch as a fallback
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = url;
        dnsPrefetch.setAttribute('data-dynamic', 'true');
        document.head.appendChild(dnsPrefetch);
        
        // Then add preconnect with crossorigin for fonts/CDNs
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
          link.setAttribute('crossorigin', '');
        }
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
      }
    });

    // Add preload links dynamically with priority
    preloadAssets.forEach(asset => {
      if (!document.querySelector(`link[rel="preload"][href="${asset.href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = asset.href;
        link.as = asset.as;
        
        if (asset.fetchPriority) {
          link.setAttribute('fetchpriority', asset.fetchPriority);
        }
        
        if (asset.type) {
          link.setAttribute('type', asset.type);
        }
        
        // Add crossorigin for fonts
        if (asset.as === 'font' || asset.href.includes('fonts.googleapis.com')) {
          link.setAttribute('crossorigin', 'anonymous');
        }
        
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
      }
    });

    // Find and optimize existing font loads
    document.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"]').forEach(link => {
      // Mark Google Fonts stylesheets for optimization
      if (!link.hasAttribute('media')) {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
      }
    });

    // Optimize existing image elements
    const optimizeImages = () => {
      // Find hero or header images that could be LCP elements
      document.querySelectorAll('header img, .hero-section img, main > div:first-child img').forEach(img => {
        if (img instanceof HTMLImageElement && !img.hasAttribute('fetchpriority')) {
          img.setAttribute('fetchpriority', 'high');
          
          // Set dimensions if missing to prevent layout shifts
          if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
            if (img.naturalWidth && img.naturalHeight) {
              const aspectRatio = img.naturalWidth / img.naturalHeight;
              if (img.width) {
                img.height = img.width / aspectRatio;
              } else if (img.height) {
                img.width = img.height * aspectRatio;
              }
            }
          }
        }
      });
    };
    
    // Run image optimization now and after a short delay for dynamic content
    optimizeImages();
    setTimeout(optimizeImages, 500);

    // Clean up function
    return () => {
      // Only remove links that we added dynamically
      const dynamicLinks = document.querySelectorAll('[data-dynamic="true"]');
      dynamicLinks.forEach(el => {
        if (el.parentNode === document.head) {
          document.head.removeChild(el);
        }
      });
    };
  }, [preconnectUrls, preloadAssets, criticalStyles]);

  return null;
};

export default HeadCustomization;
