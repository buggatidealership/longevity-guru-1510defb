
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
  
  // Sort URLs into logical groups
  const homeUrl = uniqueUrls.filter(url => url === '' || url === '/');
  const calculatorUrls = uniqueUrls.filter(url => 
    url.includes('calculator') && 
    !url.includes('resources/') && 
    url !== '' && 
    url !== '/'
  );
  const resourceUrls = uniqueUrls.filter(url => 
    url.includes('resources/') && 
    url !== '' && 
    url !== '/'
  );
  const otherUrls = uniqueUrls.filter(url => 
    !url.includes('calculator') && 
    !url.includes('resources/') && 
    url !== '' && 
    url !== '/'
  );
  
  // Sort each group alphabetically
  calculatorUrls.sort();
  resourceUrls.sort();
  otherUrls.sort();
  
  // Recombine in logical order
  return [
    ...homeUrl, 
    ...calculatorUrls, 
    ...resourceUrls, 
    ...otherUrls
  ];
};

/**
 * Updates the sitemap with new URLs while preserving existing ones
 * @param newUrls Array of new URL paths to add
 * @returns Promise<boolean> - Success status 
 */
export const updateSitemapPreservingExisting = async (newUrls: string[]): Promise<boolean> => {
  try {
    // Load existing sitemap
    const existingUrls = await loadExistingSitemap();
    console.log(`Loaded ${existingUrls.length} existing URLs from sitemap`);
    
    // Merge with new URLs, removing duplicates
    const mergedUrls = mergeSitemapEntries(existingUrls, newUrls);
    console.log(`Total URLs after merging: ${mergedUrls.length}`);
    
    // Generate new sitemap entries using existing utility
    const { generateFullSitemap } = await import('./sitemap-generation');
    const newSitemapContent = generateFullSitemap(mergedUrls);
    
    // TODO: In a real application, we would now write this content to the sitemap.xml file
    // This would typically be done server-side rather than in the browser
    console.log('Generated new sitemap with all URLs preserved');
    return true;
  } catch (error) {
    console.error('Error updating sitemap:', error);
    return false;
  }
};
