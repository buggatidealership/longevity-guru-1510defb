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
    
    // Import and run the sitemap checker
    const { checkSitemapOnStartup } = await import('./utils/sitemap/sitemap-checking');
    await checkSitemapOnStartup();
  } catch (error) {
    console.error('Error setting up sitemap:', error);
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

// Initialize app and services
document.addEventListener('DOMContentLoaded', () => {
  // Initialize sitemap
  setupSitemap();
  
  // Wait a moment for Cookiebot to initialize
  setTimeout(() => {
    checkCookiebotInitialization();
    applyCookiebotStyling(); 
    
    // Verify GA4 functioning
    if (typeof window.verifyGA4 === 'function') {
      window.verifyGA4();
    }
  }, 2000);
});

createRoot(rootElement).render(<App />);
