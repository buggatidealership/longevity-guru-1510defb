
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkCookiebotInitialization, applyCookiebotStyling } from './utils/cookie-consent';

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Verify sitemap format and ensure it's accessible with required XML declaration at start
const verifySitemapFormat = async () => {
  try {
    // Make sure the link element for sitemap is present in the document head
    if (!document.querySelector('link[rel="sitemap"]')) {
      const sitemapLink = document.createElement('link');
      sitemapLink.rel = 'sitemap';
      sitemapLink.type = 'application/xml';
      sitemapLink.href = '/sitemap.xml';
      document.head.appendChild(sitemapLink);
    }
    
    // Load sitemap-utils to check the sitemap format
    const { debugSitemapStructure, checkSitemapAccessibility } = await import('./utils/sitemap-utils');
    
    // Debug the sitemap structure first
    console.log('Verifying sitemap structure...');
    await debugSitemapStructure('/sitemap.xml');
    
    // Check if the sitemap is properly formatted
    const isAccessible = await checkSitemapAccessibility('/sitemap.xml');
    
    if (isAccessible) {
      console.info('✅ Sitemap is accessible and properly formatted.');
    } else {
      console.warn('⚠️ Sitemap might have issues. Please check the console logs for details.');
    }
  } catch (error) {
    console.error('Error verifying sitemap format:', error);
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
  // Verify sitemap format
  verifySitemapFormat();
  
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
