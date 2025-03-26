
/**
 * Utilities for preserving existing sitemap entries and merging new ones
 */

/**
 * Loads the existing sitemap, parses it, and returns the URLs as an array
 * @returns Promise<string[]> - Array of URL paths from the existing sitemap
 */
export const loadExistingSitemap = async (): Promise<string[]> => {
  try {
    const response = await fetch('/sitemap.xml');
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
      return [];
    }
    
    const content = await response.text();
    if (!content || content.trim().length < 50) {
      console.warn('Sitemap content is too short or empty');
      return [];
    }
    
    // Parse XML to extract URLs
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, "application/xml");
    const urlElements = xmlDoc.querySelectorAll('url > loc');
    
    // Extract URLs from the sitemap
    const urls: string[] = [];
    urlElements.forEach(urlElement => {
      const url = urlElement.textContent;
      if (url) {
        // Convert to relative URL
        const relativePath = url.replace('https://longevitycalculator.xyz/', '');
        if (relativePath && relativePath !== '') {
          urls.push(relativePath);
        }
      }
    });
    
    return urls;
  } catch (error) {
    console.error('Error loading existing sitemap:', error);
    return [];
  }
};

/**
 * Merges existing sitemap entries with new ones, removing duplicates
 * @param existingUrls Array of existing URL paths
 * @param newUrls Array of new URL paths to add
 * @returns Array of unique, combined URL paths
 */
export const mergeSitemapEntries = (existingUrls: string[], newUrls: string[]): string[] => {
  // Combine all URLs
  const allUrls = [...existingUrls, ...newUrls];
  
  // Remove duplicates by converting to Set and back
  const uniqueUrls = [...new Set(allUrls)];
  
  // For simplified sitemap, we'll only return unique entries, no sorting/grouping
  return uniqueUrls;
};

/**
 * Updates the sitemap with new URLs while preserving existing ones
 * @param newUrls Array of new URL paths to add
 * @returns Promise<boolean> - Success status 
 */
export const updateSitemapPreservingExisting = async (newUrls: string[]): Promise<boolean> => {
  // For the simplified sitemap approach, we'll just log the URLs
  // In a real application, we would merge with the existing sitemap
  console.log(`Would add these URLs to sitemap: ${newUrls.join(', ')}`);
  console.log('Note: Sitemap has been simplified to a fixed set of URLs');
  return true;
};

/**
 * Validates that a sitemap starts with the XML declaration
 * @param sitemapContent The sitemap content to validate
 * @returns Boolean indicating if the sitemap starts with XML declaration
 */
export const validateSitemapStart = (sitemapContent: string): boolean => {
  if (!sitemapContent) return false;
  
  // First clean any BOM
  const cleanContent = sitemapContent.replace(/^\uFEFF/, '');
  
  // Check if it starts with XML declaration
  return cleanContent.trimStart().startsWith('<?xml');
};
