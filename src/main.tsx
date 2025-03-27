
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkCookiebotInitialization, applyCookiebotStyling } from './utils/cookie-consent';

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Very simplified sitemap verification that focuses only on the XML declaration position
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
    
    // Get the raw content for detailed analysis
    const content = await response.text();
    
    // Critical check - focusing on the XML declaration position
    if (!content || content.length < 10) {
      console.warn('⚠️ Sitemap content is too short or empty');
      return;
    }
    
    // CRITICAL: Check for characters before XML declaration
    if (!content.startsWith('<?xml')) {
      console.error('❌ CRITICAL ERROR: XML declaration is not at the start');
      // Log the first few characters to see what's wrong
      console.error('First 20 characters:', JSON.stringify(content.substring(0, 20)));
      console.error('Character codes:', Array.from(content.substring(0, 10)).map(c => c.charCodeAt(0)));
      return;
    }
    
    console.info('✅ Sitemap XML declaration is correctly positioned at the start');
    
    // Basic structure checks
    if (!content.includes('<urlset') || !content.includes('</urlset>')) {
      console.warn('⚠️ Sitemap is missing urlset tags');
      return;
    }
    
    const urlCount = (content.match(/<url>/g) || []).length;
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
