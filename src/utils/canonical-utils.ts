
/**
 * Utilities for handling canonical URLs
 */

/**
 * Ensures a URL is properly formatted as a canonical URL
 * @param url URL to format
 * @returns Properly formatted canonical URL
 */
export const ensureCanonicalUrl = (url: string): string => {
  // Ensure the URL uses the correct domain
  const baseUrl = 'https://longevitycalculator.xyz';
  
  // If the URL is already absolute, return it
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Remove any leading slashes for consistency
  const cleanPath = url.startsWith('/') ? url.substring(1) : url;
  
  // Handle the root path case
  if (cleanPath === '' || cleanPath === '/') {
    return baseUrl + '/';
  }
  
  // Combine the base URL and the path
  return `${baseUrl}/${cleanPath}`;
};
