
import { generateSitemapEntry } from './sitemap-utils';

/**
 * Helper function to add a URL to the sitemap.xml file
 * This is for development/demo purposes. In production, this would be a server-side operation.
 * 
 * @param path The URL path to add (without domain)
 * @param priority The priority of the URL (0.0 to 1.0)
 */
export const addUrlToSitemap = (path: string, priority: number = 0.8): void => {
  console.log(`[Development Only] Would add ${path} to sitemap.xml with priority ${priority}`);
  
  // In a real-world scenario, this would make a server-side API call 
  // to update the sitemap.xml file
  
  // For development demo purposes, we'll log what would be added
  const entry = generateSitemapEntry(path, priority);
  console.log('Generated sitemap entry:', entry);
  
  // In development, demonstrate how it works
  if (process.env.NODE_ENV === 'development') {
    try {
      // Simulate adding to the sitemap by preserving existing entries
      const { updateSitemapPreservingExisting } = require('./sitemap/sitemap-preservation');
      updateSitemapPreservingExisting([path])
        .then((success: boolean) => {
          if (success) {
            console.log('Successfully simulated adding URL to sitemap');
          } else {
            console.warn('Failed to simulate adding URL to sitemap');
          }
        });
    } catch (error) {
      console.error('Error in sitemap simulation:', error);
    }
  }
};
