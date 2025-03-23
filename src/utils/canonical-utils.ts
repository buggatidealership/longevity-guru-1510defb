
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
  const fullUrl = `${baseUrl}/${cleanUrl}`;
  
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
  const canonicalUrl = `https://longevitycalculator.xyz/${cleanPath}`;
  
  return {
    title: `${title} | Free Online Calculator`,
    description,
    canonicalUrl,
    keywords: `${title.toLowerCase()}, calculator, health tool, free calculator, online tool, ${cleanPath}`,
    ogType: 'website',
    ogImage: 'https://longevitycalculator.xyz/longevity-calculator-og.png'
  };
};
