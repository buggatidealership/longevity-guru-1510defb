
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the root element early to avoid layout shifts
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Create root and render app with priority
const root = createRoot(rootElement);
root.render(<App />);

// Defer non-critical initialization tasks
const deferredTasks = async () => {
  try {
    // Import utilities after the main content has rendered
    const { checkCookiebotInitialization, applyCookiebotStyling } = await import('./utils/cookie-consent');
    const { checkSitemapOnStartup } = await import('./utils/sitemap/sitemap-checking');
    
    // Add sitemap link to head
    const sitemapLink = document.createElement('link');
    sitemapLink.rel = 'sitemap';
    sitemapLink.type = 'application/xml';
    sitemapLink.href = '/sitemap.xml';
    document.head.appendChild(sitemapLink);
    
    // Run sitemap checker
    checkSitemapOnStartup();
    
    // Setup tracking for page views
    if (typeof window !== 'undefined' && window.gtag) {
      const trackPageView = () => {
        try {
          const path = window.location.pathname + window.location.search;
          window.gtag('event', 'page_view', {
            page_path: path,
            page_title: document.title,
            page_location: window.location.href
          });
        } catch (error) {
          console.error('Error tracking page view:', error);
        }
      };
      
      // Add event listener for history changes
      window.addEventListener('popstate', trackPageView);
      
      // Track initial page view
      trackPageView();
    }
    
    // Initialize cookie-related functionality
    setTimeout(() => {
      checkCookiebotInitialization();
      applyCookiebotStyling();
      
      // Verify GA4 functioning after delay
      if (typeof window.verifyGA4 === 'function') {
        window.verifyGA4();
      }
    }, 2000);
    
  } catch (error) {
    console.error('Error in deferred tasks:', error);
  }
};

// Execute deferred tasks after main content render
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    deferredTasks();
  } else {
    window.addEventListener('load', deferredTasks);
  }
}
