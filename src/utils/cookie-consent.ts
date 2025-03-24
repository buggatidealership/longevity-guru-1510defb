
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
    return true;
  } else {
    console.warn('Cookiebot is not initialized. Make sure the script is loaded correctly.');
    return false;
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
