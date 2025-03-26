
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkCookiebotInitialization, applyCookiebotStyling } from './utils/cookie-consent';

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Check sitemap accessibility and add sitemap link to head
const setupSitemap = async () => {
  try {
    // Create and add the sitemap link
    const sitemapLink = document.createElement('link');
    sitemapLink.rel = 'sitemap';
    sitemapLink.type = 'application/xml';
    sitemapLink.href = '/sitemap.xml';
    document.head.appendChild(sitemapLink);
    
    // Check if the sitemap is accessible
    const { checkSitemapAccessibility, fixSitemapXml } = await import('./utils/sitemap-utils');
    const isAccessible = await checkSitemapAccessibility('/sitemap.xml');
    
    if (!isAccessible) {
      console.warn('Sitemap might not be properly formatted or accessible. Attempting to fix...');
      
      // Try to fix the sitemap
      const fixed = await fixSitemapXml('/sitemap.xml');
      if (fixed) {
        console.info('Sitemap has been fixed and is now properly formatted.');
      } else {
        console.error('Unable to fix sitemap. Please check the sitemap.xml file manually.');
      }
    } else {
      console.info('Sitemap is accessible and properly formatted.');
    }
  } catch (error) {
    console.error('Error setting up sitemap:', error);
  }
};

// Ensure correct canonical and meta tags for SEO
const ensureCorrectCanonicals = () => {
  try {
    // Check if on search page
    if (window.location.search.includes('?s=')) {
      // Add noindex for search pages
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'noindex, nofollow';
      document.head.appendChild(robotsMeta);
      
      // Hide all canonical tags on search pages
      const canonicals = document.querySelectorAll('link[rel="canonical"]');
      canonicals.forEach(tag => tag.setAttribute('hidden', ''));
    }
    
    // Ensure canonical on homepage always points to non-www
    if (window.location.pathname === '/' && !window.location.search) {
      const homepageCanonical = document.querySelector('link[rel="canonical"]');
      if (homepageCanonical) {
        homepageCanonical.setAttribute('href', 'https://longevitycalculator.xyz/');
      }
    }
  } catch (error) {
    console.error('Error ensuring correct canonicals:', error);
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

// Initialize Cookiebot and other services safely
const initializeServices = () => {
  try {
    // Initialize Cookiebot and styling with error handling
    if (typeof window !== 'undefined') {
      // Safely check Cookiebot initialization
      if (typeof window.Cookiebot !== 'undefined') {
        try {
          checkCookiebotInitialization();
        } catch (error) {
          console.warn('Error during Cookiebot initialization check:', error);
        }
      } else {
        console.warn('Cookiebot is not available - skipping initialization');
      }
      
      // Apply styling safely
      try {
        applyCookiebotStyling();
      } catch (error) {
        console.warn('Error applying Cookiebot styling:', error);
      }
    }
  } catch (error) {
    console.error('Error initializing Cookiebot:', error);
  }
  
  // Verify GA4 functioning
  try {
    if (typeof window !== 'undefined' && typeof window.verifyGA4 === 'function') {
      window.verifyGA4();
    }
  } catch (error) {
    console.error('Error verifying GA4:', error);
  }
};

// Add event listener to track page views on history changes
window.addEventListener('popstate', trackPageView);

// Initialize app and services
document.addEventListener('DOMContentLoaded', () => {
  // Initialize sitemap
  setupSitemap();
  
  // Ensure correct canonical tags
  ensureCorrectCanonicals();
  
  // Wait a moment for third-party services to initialize
  setTimeout(initializeServices, 2000);
});

createRoot(rootElement).render(<App />);
