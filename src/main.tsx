
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Add a link to the sitemap in the document head
const sitemapLink = document.createElement('link');
sitemapLink.rel = 'sitemap';
sitemapLink.type = 'application/xml';
sitemapLink.href = '/sitemap.xml';
document.head.appendChild(sitemapLink);

// Performance optimizations
const registerPerfOptimizations = () => {
  // Detect slow connections and reduce animations
  if (navigator.connection && 
      ('effectiveType' in navigator.connection) && 
      (navigator.connection.effectiveType === '2g' || navigator.connection.effectiveType === 'slow-2g')) {
    document.documentElement.classList.add('reduced-motion');
  }
  
  // Listen for route changes to preload components
  if ('IntersectionObserver' in window) {
    const preloadIntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const link = entry.target as HTMLAnchorElement;
          if (link.href && link.tagName === 'A') {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/') && !href.includes('#')) {
              const prefetchLink = document.createElement('link');
              prefetchLink.rel = 'prefetch';
              prefetchLink.href = href;
              prefetchLink.as = 'document';
              document.head.appendChild(prefetchLink);
              preloadIntersectionObserver.unobserve(link);
            }
          }
        }
      });
    }, { rootMargin: '0px 0px 200px 0px' });
    
    // Apply to all navigation links
    setTimeout(() => {
      document.querySelectorAll('a[href^="/"]').forEach(link => {
        preloadIntersectionObserver.observe(link);
      });
    }, 2000);
  }
};

// Run performance optimizations after page loads
if (document.readyState === 'complete') {
  registerPerfOptimizations();
} else {
  window.addEventListener('load', registerPerfOptimizations);
}

createRoot(rootElement).render(<App />);
