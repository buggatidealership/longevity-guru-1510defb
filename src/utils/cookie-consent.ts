
/**
 * Utility functions for cookie consent management with Cookiebot
 */

/**
 * Check if Cookiebot is properly initialized
 * This can be used for debugging in the console
 */
export const checkCookiebotInitialization = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check if Cookiebot object exists
  if (window.Cookiebot) {
    console.info('Cookiebot is initialized with consent state:', {
      necessary: window.Cookiebot.consent.necessary,
      preferences: window.Cookiebot.consent.preferences,
      statistics: window.Cookiebot.consent.statistics,
      marketing: window.Cookiebot.consent.marketing
    });
    
    // Verify Google Analytics connection
    verifyGoogleAnalytics();
    
    return true;
  } else {
    console.warn('Cookiebot is not initialized. Make sure the script is loaded correctly.');
    return false;
  }
};

/**
 * Verify if Google Analytics is properly configured
 */
export const verifyGoogleAnalytics = (): void => {
  if (typeof window === 'undefined') return;
  
  if (typeof window.gtag === 'function') {
    console.info('Google Analytics tag function exists');
    
    // Use the helper function if it exists
    if (typeof window.verifyGA4 === 'function') {
      window.verifyGA4();
    } else {
      // Fallback verification
      try {
        window.gtag('get', 'G-7FHX7T4MP9', 'client_id', (clientId: string) => {
          if (clientId) {
            console.info('✅ GA4 Client ID:', clientId);
          } else {
            console.warn('❌ GA4 client_id not found, tag may not be working properly');
          }
        });
      } catch (error) {
        console.error('Error verifying GA4:', error);
      }
    }
  } else {
    console.warn('Google Analytics gtag function not found');
  }
};

/**
 * Add the Cookiebot test parameter to the URL
 * This is useful for testing consent banners in development
 */
export const enableConsentTest = (): void => {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  url.searchParams.set('consenttest', 'true');
  window.history.replaceState({}, document.title, url.toString());
  window.location.reload();
};

/**
 * Clear all Cookiebot cookies and reload the page
 * This is useful for testing consent banners in development
 */
export const clearConsentCookies = (): void => {
  if (typeof window === 'undefined') return;
  
  const cookiesToDelete = [
    'CookieConsent',
    'CookieConsentBulkTicket',
    'CookieConsentBulkAnalytics',
    'CookieConsentBulkAdvertising'
  ];
  
  cookiesToDelete.forEach(cookieName => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  
  window.location.reload();
};

/**
 * Force show the Cookiebot dialog
 * Useful for testing the appearance of the banner
 */
export const showCookiebotDialog = (): void => {
  if (typeof window === 'undefined' || !window.Cookiebot) return;
  
  try {
    window.Cookiebot.show();
    console.info('Cookiebot dialog shown');
  } catch (error) {
    console.error('Failed to show Cookiebot dialog:', error);
  }
};

/**
 * Apply additional styling to Cookiebot dialog
 * This can be used to override styles that can't be handled by CSS alone
 */
export const applyCookiebotStyling = (): void => {
  if (typeof window === 'undefined') return;
  
  // Function to be called when the dialog becomes visible
  const applyStyles = () => {
    const dialog = document.getElementById('CybotCookiebotDialog');
    if (dialog) {
      // Make sure buttons are properly aligned
      const buttonContainer = document.getElementById('CybotCookiebotDialogBodyButtons');
      if (buttonContainer) {
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'flex-end';
        buttonContainer.style.alignItems = 'center';
      }
      
      // Fix header alignment issues that might be caused by the banner
      const fixPageLayouts = () => {
        // Ensure headers and content containers are centered
        document.querySelectorAll('header.max-w-6xl, main .text-center, .max-w-2xl, .max-w-3xl, .max-w-4xl').forEach(element => {
          if (element instanceof HTMLElement) {
            element.style.marginLeft = 'auto';
            element.style.marginRight = 'auto';
            
            // For text-center elements, ensure text alignment
            if (element.classList.contains('text-center')) {
              element.style.textAlign = 'center';
            }
          }
        });
      };
      
      // Apply layout fixes right away and after a short delay (for dynamic content)
      fixPageLayouts();
      setTimeout(fixPageLayouts, 500);
      
      console.info('Applied additional styling to Cookiebot dialog and fixed page layout');
    }
  };
  
  // Observer to detect when the dialog appears in the DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && (node as Element).id === 'CybotCookiebotDialog') {
            applyStyles();
          }
        });
      }
    });
  });
  
  // Start observing the document body for changes
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Also try to apply styles on initialization
  setTimeout(applyStyles, 1000);
};

// We're removing the duplicate Window interface declaration since it's already defined in global.d.ts

