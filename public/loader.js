
// This file helps to optimize page loading
document.addEventListener('DOMContentLoaded', function() {
  // Lazy load non-critical resources
  setTimeout(function() {
    const lazyScripts = document.querySelectorAll('script[data-lazy]');
    lazyScripts.forEach(function(script) {
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach(function(attr) {
        if (attr.name !== 'data-lazy') {
          newScript.setAttribute(attr.name, attr.value);
        }
      });
      script.parentNode.replaceChild(newScript, script);
    });
  }, 200);
  
  // Add lazy loading to all images that don't have it
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(function(img) {
    img.setAttribute('loading', 'lazy');
  });
  
  // Preload visible links
  const preloadLinks = function() {
    const links = Array.from(document.querySelectorAll('a'))
      .filter(link => {
        const rect = link.getBoundingClientRect();
        return (rect.top >= 0 && rect.top <= window.innerHeight);
      });
    
    links.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.includes('#')) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch';
        preloadLink.href = href;
        document.head.appendChild(preloadLink);
      }
    });
  };
  
  // Add passive event listeners by default
  const addPassiveListener = function(element, event, callback) {
    element.addEventListener(event, callback, { passive: true });
  };
  
  // Execute preloading with a delay
  setTimeout(preloadLinks, 1000);
  
  // Add passive event listeners for common scroll events
  addPassiveListener(window, 'scroll', function() {
    // Throttle scroll events
    if (!window.scrollThrottleTimeout) {
      window.scrollThrottleTimeout = setTimeout(function() {
        delete window.scrollThrottleTimeout;
      }, 100);
    }
  });
});

// Optimize font loading
(function() {
  // Check if the browser supports the Font Loading API
  if ('fonts' in document) {
    // Preload critical fonts
    Promise.all([
      document.fonts.load('1em Inter'),
      document.fonts.load('bold 1em Inter')
    ]).then(function() {
      document.documentElement.classList.add('fonts-loaded');
    });
  } else {
    // Fallback for browsers without Font Loading API
    document.documentElement.classList.add('fonts-loaded');
  }
})();
