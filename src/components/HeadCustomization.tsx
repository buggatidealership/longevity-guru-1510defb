
import React, { useEffect } from 'react';

interface HeadCustomizationProps {
  preconnectUrls?: string[];
  preloadAssets?: Array<{
    href: string;
    as: string;
    type?: string;
    crossOrigin?: string;
  }>;
  dnsPrefetch?: string[];
  preloadFonts?: boolean;
  deferScripts?: boolean;
}

/**
 * Component for adding performance optimizations to the head
 */
const HeadCustomization: React.FC<HeadCustomizationProps> = ({
  preconnectUrls = [],
  preloadAssets = [],
  dnsPrefetch = [],
  preloadFonts = true,
  deferScripts = true,
}) => {
  useEffect(() => {
    // Add DNS prefetch links
    dnsPrefetch.forEach(url => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
      }
    });

    // Add preconnect links dynamically
    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        // Use setAttribute to avoid Symbol conversion issues
        link.setAttribute('crossorigin', 'anonymous');
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
        // Use setAttribute to avoid Symbol conversion issues
        link.setAttribute('as', asset.as);
        if (asset.type) {
          link.setAttribute('type', asset.type);
        }
        if (asset.crossOrigin) {
          link.setAttribute('crossorigin', asset.crossOrigin);
        }
        link.setAttribute('data-dynamic', 'true');
        document.head.appendChild(link);
      }
    });

    // Preload common fonts if enabled
    if (preloadFonts) {
      const fontPreloads = [
        { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }
      ];
      
      fontPreloads.forEach(font => {
        if (!document.querySelector(`link[rel="preload"][href="${font.href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = font.href;
          // Use setAttribute to avoid Symbol conversion issues
          link.setAttribute('as', font.as);
          link.setAttribute('type', font.type);
          link.setAttribute('crossorigin', font.crossOrigin || 'anonymous');
          link.setAttribute('data-dynamic', 'true');
          document.head.appendChild(link);
        }
      });
    }

    // Optimize scripts if defer is enabled
    if (deferScripts) {
      const scripts = document.querySelectorAll('script:not([async]):not([defer]):not([type="module"])');
      scripts.forEach(script => {
        if (!script.hasAttribute('data-critical')) {
          script.setAttribute('defer', '');
        }
      });
    }

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
  }, [preconnectUrls, preloadAssets, dnsPrefetch, preloadFonts, deferScripts]);

  return null;
};

export default HeadCustomization;
