
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkCookiebotInitialization } from './utils/cookie-consent';

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

// Check if Cookiebot is initialized properly
document.addEventListener('DOMContentLoaded', () => {
  // Wait a moment for Cookiebot to initialize
  setTimeout(() => {
    checkCookiebotInitialization();
  }, 2000);
});

// Add sitemap link after DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addSitemapLink);
} else {
  addSitemapLink();
}

createRoot(rootElement).render(<App />);
