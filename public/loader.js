
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
});
