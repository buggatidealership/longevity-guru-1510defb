
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkCookiebotInitialization, applyCookiebotStyling } from './utils/cookie-consent';

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Simplified sitemap verification
const verifySitemapFormat = async () => {
  try {
    // Make sure the link element for sitemap is present in the document head
    if (!document.querySelector('link[rel="sitemap"]')) {
      const sitemapLink = document.createElement('link');
      sitemapLink.rel = 'sitemap';
      sitemapLink.type = 'application/xml';
      sitemapLink.href = '/sitemap.xml';
      document.head.appendChild(sitemapLink);
      console.info('✅ Added sitemap link to document head');
    }
    
    // Basic fetch to verify the sitemap is accessible
    const response = await fetch('/sitemap.xml');
    
    if (!response.ok) {
      console.warn(`⚠️ Sitemap fetch failed: ${response.status} ${response.statusText}`);
      return;
    }
    
    const content = await response.text();
    
    // Simple validation - make sure it's not empty and has basic structure
    if (!content || content.length < 50) {
      console.warn('⚠️ Sitemap content is too short or empty');
      return;
    }
    
    if (!content.startsWith('<?xml')) {
      console.warn('⚠️ Sitemap does not start with XML declaration');
      console.log('First 100 characters:', content.substring(0, 100).replace(/\n/g, '\\n'));
      return;
    }
    
    if (!content.includes('<urlset') || !content.includes('</urlset>')) {
      console.warn('⚠️ Sitemap is missing urlset tags');
      return;
    }
    
    const urlCount = (content.match(/<url>/g) || []).length;
    if (urlCount < 1) {
      console.warn('⚠️ No URL entries found in sitemap');
      return;
    }
    
    console.info(`✅ Sitemap verification passed. Found ${urlCount} URLs.`);
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
  // Verify sitemap format with simple approach
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
