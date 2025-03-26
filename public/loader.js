
// This file helps to optimize page loading
document.addEventListener('DOMContentLoaded', function() {
  // Set image dimensions for content that's likely to cause layout shifts
  const setImgDimensions = function() {
    document.querySelectorAll('img:not([width]):not([height])').forEach(function(img) {
      if (img.hasAttribute('data-width') && img.hasAttribute('data-height')) {
        img.width = img.getAttribute('data-width');
        img.height = img.getAttribute('data-height');
      }
    });
  };
  
  // Lazy load non-critical resources
  const lazyLoadResources = function() {
    // Lazy load scripts
    document.querySelectorAll('script[data-lazy]').forEach(function(script) {
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach(function(attr) {
        if (attr.name !== 'data-lazy') {
          newScript.setAttribute(attr.name, attr.value);
        }
      });
      script.parentNode.replaceChild(newScript, script);
    });
    
    // Lazy load stylesheets
    document.querySelectorAll('link[rel="stylesheet"][data-lazy]').forEach(function(link) {
      link.removeAttribute('data-lazy');
      link.setAttribute('media', 'all');
    });
  };
  
  // Optimize fonts
  const optimizeFonts = function() {
    // Add font-display: swap to all font declarations
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(function(style) {
      if (style.textContent.includes('@font-face')) {
        let css = style.textContent;
        if (!css.includes('font-display:') && !css.includes('font-display:')) {
          css = css.replace(/@font-face\s*{/g, '@font-face { font-display: swap;');
          style.textContent = css;
        }
      }
    });
  };
  
  // Register a priority observer for LCP elements
  const setupLCPObserver = function() {
    if ('IntersectionObserver' in window) {
      const potentialLCPElements = document.querySelectorAll('.hero-section *, header img, h1');
      const lcpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the highest fetchpriority to potential LCP elements
            if (entry.target.tagName === 'IMG') {
              entry.target.setAttribute('fetchpriority', 'high');
            }
            lcpObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '200px' });
      
      potentialLCPElements.forEach(el => lcpObserver.observe(el));
    }
  };
  
  // Execute optimizations in the correct order
  setImgDimensions();
  setupLCPObserver();
  optimizeFonts();
  
  // Delay non-critical optimizations
  setTimeout(lazyLoadResources, 200);
  
  // Report performance metrics if interested
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcpEntry = entries[entries.length - 1];
        console.log('LCP:', lcpEntry.startTime / 1000, 'seconds');
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
      const fidObserver = new PerformanceObserver((entryList) => {
        const fidEntry = entryList.getEntries()[0];
        console.log('FID:', fidEntry.duration, 'ms');
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      console.log('Performance observer error:', e);
    }
  }
});

// Preconnect to key domains when the browser is idle
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(function() {
    ['https://www.google-analytics.com', 'https://www.googletagmanager.com', 'https://pagead2.googlesyndication.com', 'https://consent.cookiebot.com']
      .forEach(function(domain) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
  });
}
