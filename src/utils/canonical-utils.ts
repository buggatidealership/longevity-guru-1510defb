
/**
 * Utilities for handling canonical URLs and domain verification
 */

/**
 * Checks if a URL is properly canonicalized
 * @param url The URL to check
 * @returns Object containing the check result
 */
export const checkCanonicalUrl = (url: string) => {
  const baseUrl = 'https://longevitycalculator.xyz';
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  const fullUrl = cleanUrl ? `${baseUrl}/${cleanUrl}` : baseUrl;
  
  const hasIncorrectDomain = url.includes('lifespan-calculator.com');
  
  return {
    isCanonical: (url.startsWith(baseUrl) || url.startsWith('/')) && !hasIncorrectDomain,
    suggestedCanonical: fullUrl,
    message: hasIncorrectDomain 
      ? `URL contains incorrect domain. Should be ${fullUrl}`
      : (url.startsWith(baseUrl) || url.startsWith('/'))
        ? 'URL is properly formatted for canonicalization'
        : `URL should start with ${baseUrl} for proper canonicalization`
  };
};

/**
 * Creates SEO metadata for a calculator page
 * @param title The page title
 * @param description The page description
 * @param path The page path (without domain)
 * @returns SEO props object for the SEOHead component
 */
export const createCalculatorSEOProps = (
  title: string, 
  description: string, 
  path: string
) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  // Force our domain instead of any potential incorrect domain
  const canonicalUrl = cleanPath ? `https://longevitycalculator.xyz/${cleanPath}` : 'https://longevitycalculator.xyz';
  
  return {
    title: `${title} | Free Online Calculator`,
    description,
    canonicalUrl,
    keywords: `${title.toLowerCase()}, calculator, health tool, free calculator, online tool, ${cleanPath}`,
    ogType: 'website',
    ogImage: 'https://longevitycalculator.xyz/longevity-calculator-og.png'
  };
};

/**
 * Ensures that each page has a proper canonical URL
 * This is a utility function to verify and fix canonical issues
 * @param url The current URL to check
 * @returns The correct canonical URL
 */
export const ensureCanonicalUrl = (url: string): string => {
  // Default base domain
  const baseDomain = 'https://longevitycalculator.xyz';
  
  // If URL is empty or undefined, return the base domain
  if (!url) return baseDomain;
  
  // If URL already matches exactly our domain without a path, return it
  if (url === baseDomain) return url;
  
  // Clean the URL path
  let cleanPath = url;
  
  // Remove domain if present (we'll add our own)
  if (cleanPath.includes('://')) {
    const urlParts = cleanPath.split('/');
    if (urlParts.length > 3) {
      cleanPath = urlParts.slice(3).join('/');
    } else {
      // It's just the domain
      return baseDomain;
    }
  }
  
  // Remove leading slash if present
  cleanPath = cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath;
  
  // If path is empty after cleaning, return just the base domain
  if (!cleanPath) return baseDomain;
  
  // Construct proper canonical URL
  return `${baseDomain}/${cleanPath}`;
};
