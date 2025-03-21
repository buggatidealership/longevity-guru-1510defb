
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
    // Add preconnect links dynamically
    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
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
          link.type = asset.type;
        }
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
