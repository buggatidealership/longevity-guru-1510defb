
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
  
  // Handle the test homepage special cases
  if (url === '/homepage-test' || url === 'homepage-test' || url === `${baseDomain}/homepage-test`) {
    return `${baseDomain}/homepage-test`;
  }
  
  if (url === '/homepage-integrate-test' || url === 'homepage-integrate-test' || url === `${baseDomain}/homepage-integrate-test`) {
    return `${baseDomain}/homepage-integrate-test`;
  }
  
  // If URL already matches exactly our domain without a path, return it
  if (url === baseDomain) return url;
  
  // Normalize trailing slashes - remove them for consistency
  if (url === `${baseDomain}/`) return baseDomain;
  
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
  
  // Remove trailing slash if present
  cleanPath = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
  
  // Handle special case redirects to map to canonical paths
  const redirectMap: Record<string, string> = {
    'breastimplant': 'breast-implant-calculator',
    'growth-percentile-calculator': 'growth',
    'child-growth-percentile-calculator': 'growth',
    'alcohol-lifespan-calculator': 'alcohol',
    'alcohol-impact-calculator': 'alcohol',
    'botox': 'botox-dosage-calculator',
    'botox-calculator': 'botox-dosage-calculator',
    'breast-implant-size-calculator': 'breast-implant-calculator',
    'protein-calculator': 'ideal-protein-intake-calculator',
    'protein-intake-calculator': 'ideal-protein-intake-calculator',
    'daily-protein-calculator': 'ideal-protein-intake-calculator',
    'ideal-protein-intake-calculator-2': 'ideal-protein-intake-calculator',
    'bmr-calculator': 'metabolism-calculator',
    'metabolism-calculator-guide': 'basal-metabolic-rate-guide',
    'bmr-guide': 'basal-metabolic-rate-guide',
    'ozempic-guide': 'resources/ozempic-weight-loss-calculator-guide',
    'ozempic-calculator-guide': 'resources/ozempic-weight-loss-calculator-guide',
    'basal-metabolic-rate-explained': 'basal-metabolic-rate-guide-2',
    'basal-metabolic-rate-explained-guide': 'basal-metabolic-rate-guide-3'  // Add mapping for the new guide
  };
  
  // Apply redirects if needed
  if (redirectMap[cleanPath]) {
    cleanPath = redirectMap[cleanPath];
  }
  
  // Construct proper canonical URL
  return `${baseDomain}/${cleanPath}`;
};

/**
 * Gets the canonical path for the current page from window.location
 * @returns The canonical path
 */
export const getCanonicalPath = (): string => {
  if (typeof window === 'undefined') return '';
  
  const pathname = window.location.pathname;
  const path = pathname === '/' ? '' : pathname;
  return ensureCanonicalUrl(path);
};

/**
 * Verifies that no incorrect canonical URLs are present in the DOM
 * @returns boolean indicating if all canonical URLs are correct
 */
export const verifyCanonicalTags = (): boolean => {
  if (typeof document === 'undefined') return true;
  
  const canonicalLinks = document.querySelectorAll('link[rel="canonical"]');
  if (canonicalLinks.length === 0) return false;
  
  let allCorrect = true;
  const correctCanonical = getCanonicalPath();
  
  canonicalLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href !== correctCanonical) {
      console.error(`Incorrect canonical link found: ${href}. Should be: ${correctCanonical}`);
      allCorrect = false;
    }
  });
  
  return allCorrect;
};
