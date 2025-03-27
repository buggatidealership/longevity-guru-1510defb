
import React, { useEffect } from 'react';

interface CanonicalFixerProps {
  expectedCanonicalUrl: string;
}

/**
 * Component that ensures there is exactly one canonical URL on a page
 * It will remove all existing canonical links and add the correct one
 */
const CanonicalFixer: React.FC<CanonicalFixerProps> = ({ expectedCanonicalUrl }) => {
  useEffect(() => {
    // Function to fix canonical issues
    const fixCanonicalLinks = () => {
      // Get all canonical links
      const canonicalLinks = document.querySelectorAll('link[rel="canonical"]');
      
      // Remove ALL canonical links first to avoid duplicates
      canonicalLinks.forEach(link => {
        const href = link.getAttribute('href');
        console.log(`Removing canonical link: ${href}`);
        link.parentNode?.removeChild(link);
      });
      
      // Add the correct one
      const newLink = document.createElement('link');
      newLink.rel = 'canonical';
      newLink.href = expectedCanonicalUrl;
      document.head.appendChild(newLink);
      console.log(`Added correct canonical link: ${expectedCanonicalUrl}`);
    };

    // Run immediately on mount
    fixCanonicalLinks();
    
    // Also run after delays to catch late additions
    const timeoutIds = [
      setTimeout(fixCanonicalLinks, 500),
      setTimeout(fixCanonicalLinks, 1000),
      setTimeout(fixCanonicalLinks, 2000)
    ];
    
    // And run periodically to catch any dynamic changes
    const intervalId = setInterval(fixCanonicalLinks, 5000);
    
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
      clearInterval(intervalId);
    };
  }, [expectedCanonicalUrl]);

  return null; // This component doesn't render anything
};

export default CanonicalFixer;
