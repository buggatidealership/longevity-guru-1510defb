
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that handles SEO-related redirects and URL fixes
 * This is a client-side fallback for server-side redirects
 */
const SEORedirectHandler: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;
    
    // Handle www to non-www redirects (fallback to server config)
    if (window.location.hostname === 'www.longevitycalculator.xyz') {
      const nonWwwUrl = window.location.protocol + '//' + 
                      'longevitycalculator.xyz' + 
                      location.pathname + 
                      location.search + 
                      location.hash;
      
      // Use replace to avoid creating an entry in the browser history
      window.location.replace(nonWwwUrl);
      return;
    }
    
    // Handle search pages
    if (location.search.includes('?s=')) {
      // Ensure noindex by adding a meta tag
      const existingMeta = document.querySelector('meta[name="robots"][content*="noindex"]');
      if (!existingMeta) {
        const robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        robotsMeta.content = 'noindex, nofollow';
        document.head.appendChild(robotsMeta);
      }
      
      // Remove any canonical tags from search pages
      const canonicalTags = document.querySelectorAll('link[rel="canonical"]');
      canonicalTags.forEach(tag => tag.setAttribute('hidden', ''));
    }
  }, [location]);
  
  // This component doesn't render anything
  return null;
};

export default SEORedirectHandler;
