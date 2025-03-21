
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
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      document.head.appendChild(link);
    });

    // Add preload links dynamically
    preloadAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = asset.href;
      link.as = asset.as;
      if (asset.type) {
        link.type = asset.type;
      }
      document.head.appendChild(link);
    });

    // Cleanup
    return () => {
      // Remove the dynamically added elements on component unmount
      document.querySelectorAll('link[rel="preconnect"], link[rel="preload"]').forEach(el => {
        if (el.parentNode === document.head) {
          document.head.removeChild(el);
        }
      });
    };
  }, [preconnectUrls, preloadAssets]);

  return null;
};

export default HeadCustomization;
