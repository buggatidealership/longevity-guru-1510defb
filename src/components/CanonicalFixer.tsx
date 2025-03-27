
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface CanonicalFixerProps {
  expectedCanonicalUrl: string;
}

/**
 * Component that checks and fixes duplicate canonical links
 * It will ensure only the correct canonical URL is present
 * Also fixes external links without proper rel attributes
 * And ensures proper content-type declaration
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
        
        // Remove ALL canonical links first
        canonicalLinks.forEach(link => {
          const href = link.getAttribute('href');
          console.log(`Removing canonical link: ${href}`);
          link.parentNode?.removeChild(link);
        });
        
        // Add the correct one back
        const newLink = document.createElement('link');
        newLink.rel = 'canonical';
        newLink.href = expectedCanonicalUrl;
        document.head.appendChild(newLink);
        console.log(`Added correct canonical link: ${expectedCanonicalUrl}`);
      } else if (canonicalLinks.length === 1) {
        // If there's only one, make sure it has the right URL
        const href = canonicalLinks[0].getAttribute('href');
        if (href !== expectedCanonicalUrl) {
          console.log(`Updating canonical from ${href} to ${expectedCanonicalUrl}`);
          canonicalLinks[0].setAttribute('href', expectedCanonicalUrl);
        }
      } else {
        // If there are no canonical links, add the correct one
        console.log('No canonical link found, adding correct one');
        const newLink = document.createElement('link');
        newLink.rel = 'canonical';
        newLink.href = expectedCanonicalUrl;
        document.head.appendChild(newLink);
      }
    };

    // Fix external links that don't have rel="noopener noreferrer"
    const fixExternalLinks = () => {
      // Query all links on the page
      const allLinks = document.querySelectorAll('a');
      
      allLinks.forEach(link => {
        const target = link.getAttribute('target');
        const href = link.getAttribute('href');
        const rel = link.getAttribute('rel');
        
        // Only fix external links (with target="_blank" or href starting with http)
        if (target === '_blank' || (href && (href.startsWith('http://') || href.startsWith('https://')))) {
          // If no rel attribute or missing noopener/noreferrer
          if (!rel || (!rel.includes('noopener') || !rel.includes('noreferrer'))) {
            link.setAttribute('rel', 'noopener noreferrer');
            console.log('Fixed external link:', href);
          }
        }
      });
    };

    // Run once on mount
    fixCanonicalLinks();
    fixExternalLinks();
    
    // Also run after a small delay to catch late additions
    const timeoutId = setTimeout(() => {
      fixCanonicalLinks();
      fixExternalLinks();
    }, 1000);
    
    // And run periodically to catch any dynamic changes
    const intervalId = setInterval(() => {
      fixCanonicalLinks();
      fixExternalLinks();
    }, 5000);
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [expectedCanonicalUrl]);

  // Use Helmet to properly set the content-type meta tag
  return (
    <Helmet>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default CanonicalFixer;
