
/**
 * Canonical URL utilities
 */

/**
 * Ensures the canonical URL is properly formatted with the correct domain
 * and without any unnecessary parameters
 * 
 * @param {string} url - The URL to format as canonical
 * @returns {string} - The properly formatted canonical URL
 */
export const ensureCanonicalUrl = (url: string): string => {
  // Handle special case for fertility calculator which has a hardcoded canonical in index.html
  if (typeof window !== 'undefined' && 
      window.location.pathname.includes('female-fertility-calculator')) {
    return 'https://longevitycalculator.xyz/female-fertility-calculator';
  }
  
  // Don't provide a canonical for search pages
  if (typeof window !== 'undefined' && window.location.search.includes('?s=')) {
    return '';  // Return empty to skip canonical
  }
  
  try {
    // Parse the URL to ensure it's valid
    const parsedUrl = new URL(url);
    
    // Always use https
    parsedUrl.protocol = 'https:';
    
    // Use the correct domain (no www)
    if (parsedUrl.hostname.startsWith('www.')) {
      parsedUrl.hostname = parsedUrl.hostname.replace('www.', '');
    }
    
    // Ensure the domain is correct
    if (parsedUrl.hostname !== 'longevitycalculator.xyz') {
      parsedUrl.hostname = 'longevitycalculator.xyz';
    }
    
    // Remove any search/query parameters for canonical URLs
    parsedUrl.search = '';
    
    // Clean up any double slashes in the path
    const path = parsedUrl.pathname.replace(/\/+/g, '/');
    parsedUrl.pathname = path;
    
    // Remove hash fragments for canonical URLs
    parsedUrl.hash = '';
    
    // Return the cleaned URL as a string
    return parsedUrl.toString();
  } catch (error) {
    // If parsing fails, ensure we at least have the correct base domain
    console.error('Error parsing canonical URL:', error);
    
    // Fallback to the main domain
    return 'https://longevitycalculator.xyz/';
  }
};

/**
 * Gets the canonical URL for the current page
 * @returns {string} The canonical URL
 */
export const getCurrentCanonicalUrl = (): string => {
  if (typeof window === 'undefined') {
    return 'https://longevitycalculator.xyz/';
  }
  
  // Handle special case for fertility calculator
  if (window.location.pathname.includes('female-fertility-calculator')) {
    return 'https://longevitycalculator.xyz/female-fertility-calculator';
  }
  
  // Don't provide canonical for search pages
  if (window.location.search.includes('?s=')) {
    return '';
  }
  
  // For homepage, always use root
  if (window.location.pathname === '/') {
    return 'https://longevitycalculator.xyz/';
  }
  
  // For other pages, construct from current path
  return `https://longevitycalculator.xyz${window.location.pathname}`;
};
