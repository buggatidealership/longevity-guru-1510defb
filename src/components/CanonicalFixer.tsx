import React, { useEffect } from 'react';

interface CanonicalFixerProps {
  expectedCanonicalUrl: string;
}

/**
 * Component that checks and fixes duplicate canonical links
 * It will ensure only the correct canonical URL is present
 */
const CanonicalFixer: React.FC<CanonicalFixerProps> = ({ expectedCanonicalUrl }) => {
  useEffect(() => {
    // Function to fix canonical issues
    const fixCanonicalLinks = () => {
      // Get all canonical links
      const canonicalLinks = document.querySelectorAll('link[rel="canonical"]');
      
      // If there's more than one canonical link
      if (canonicalLinks.length > 1) {
        console.log(`Found ${canonicalLinks.length} canonical links, fixing...`);
        
        // Keep only the correct canonical link
        canonicalLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && !href.includes(expectedCanonicalUrl)) {
            console.log(`Removing incorrect canonical link: ${href}`);
            link.parentNode?.removeChild(link);
          }
        });
      }
      
      // Ensure we have the correct canonical link
      const remainingLinks = document.querySelectorAll('link[rel="canonical"]');
      if (remainingLinks.length === 0) {
        console.log('No canonical link found, adding correct one');
        const newLink = document.createElement('link');
        newLink.rel = 'canonical';
        newLink.href = expectedCanonicalUrl;
        document.head.appendChild(newLink);
      } else if (remainingLinks.length === 1) {
        const href = remainingLinks[0].getAttribute('href');
        if (href !== expectedCanonicalUrl) {
          console.log(`Updating canonical from ${href} to ${expectedCanonicalUrl}`);
          remainingLinks[0].setAttribute('href', expectedCanonicalUrl);
        }
      }
    };

    // Run once on mount
    fixCanonicalLinks();
    
    // Also run after a small delay to catch late additions
    const timeoutId = setTimeout(fixCanonicalLinks, 1000);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [expectedCanonicalUrl]);

  return null; // This component doesn't render anything
};

export default CanonicalFixer;
