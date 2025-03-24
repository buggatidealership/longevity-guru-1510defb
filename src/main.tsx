
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkCookiebotInitialization, applyCookiebotStyling } from './utils/cookie-consent';

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Add a link to the sitemap in the document head
const addSitemapLink = async () => {
  // Remove any existing sitemap link to avoid duplicates
  const existingSitemapLink = document.querySelector('link[rel="sitemap"]');
  if (existingSitemapLink && existingSitemapLink.parentNode) {
    existingSitemapLink.parentNode.removeChild(existingSitemapLink);
  }
  
  // Create and add the sitemap link
  const sitemapLink = document.createElement('link');
  sitemapLink.rel = 'sitemap';
  sitemapLink.type = 'application/xml';
  sitemapLink.href = '/sitemap.xml';
  document.head.appendChild(sitemapLink);
  
  // Check if the sitemap is accessible and properly formatted using dynamic import
  try {
    const { checkSitemapAccessibility } = await import('./utils/sitemap-utils');
    const isAccessible = await checkSitemapAccessibility('/sitemap.xml');
    
    if (!isAccessible) {
      console.warn('Sitemap might not be properly formatted or accessible.');
    } else {
      console.info('Sitemap is accessible and properly formatted.');
    }
  } catch (error) {
    console.error('Error checking sitemap accessibility:', error);
  }
};

// Track page views on route changes
const trackPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      const path = window.location.pathname + window.location.search;
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: document.title,
        page_location: window.location.href
      });
      console.info('Page view tracked:', path);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }
};

// Add event listener to track page views on history changes
window.addEventListener('popstate', trackPageView);

// Check if Cookiebot is initialized properly
document.addEventListener('DOMContentLoaded', () => {
  // Wait a moment for Cookiebot to initialize
  setTimeout(() => {
    checkCookiebotInitialization();
    applyCookiebotStyling(); // Apply additional styling
    
    // Verify GA4 functioning
    if (typeof window.verifyGA4 === 'function') {
      window.verifyGA4();
    }
  }, 2000);
});

// Add sitemap link after DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addSitemapLink);
} else {
  addSitemapLink();
}

createRoot(rootElement).render(<App />);

