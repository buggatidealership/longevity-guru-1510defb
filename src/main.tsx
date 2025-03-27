
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkCookiebotInitialization, applyCookiebotStyling } from './utils/cookie-consent';

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Ultra-simplified sitemap verification that ONLY checks for XML declaration position
const verifySitemapFormat = async () => {
  try {
    const response = await fetch('/sitemap.xml');
    
    if (!response.ok) {
      console.error(`❌ Sitemap fetch failed: ${response.status} ${response.statusText}`);
      return;
    }
    
    // Get content as raw text
    const content = await response.text();
    
    if (!content || content.length === 0) {
      console.error('❌ Sitemap content is empty');
      return;
    }
    
    // Get first 5 characters for debugging
    const firstFiveChars = content.substring(0, 5);
    console.info('First 5 characters of sitemap:', JSON.stringify(firstFiveChars));
    
    // CRITICAL CHECK: Does it start with <?xml
    if (!content.startsWith('<?xml')) {
      console.error('❌ CRITICAL ERROR: XML declaration is not at the start of the file');
      console.error('First 20 characters:', JSON.stringify(content.substring(0, 20)));
      console.error('Character codes:', Array.from(content.substring(0, 10)).map(c => c.charCodeAt(0)));
      return;
    }
    
    console.info('✅ Sitemap XML declaration is correctly positioned');
    console.info('✅ Sitemap verification passed');
    
  } catch (error) {
    console.error('Error verifying sitemap:', error);
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
  // Run the simplified sitemap verification
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
