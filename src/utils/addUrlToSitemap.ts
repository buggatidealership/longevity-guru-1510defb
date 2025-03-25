
/**
 * Utility function to add URLs to the sitemap while preserving existing entries
 */
import { addUrlsToSitemap } from './sitemap-utils';

/**
 * Adds a new URL to the sitemap.xml file
 * @param url The URL to add to the sitemap (without domain)
 * @param priority Priority of the URL (0.0-1.0)
 * @returns Promise<boolean> true if successful, false otherwise
 */
export const addUrlToSitemap = async (
  url: string, 
  priority: number = 0.8
): Promise<boolean> => {
  // Clean the URL (remove leading slash if present)
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  
  // Add URL to sitemap
  const success = await addUrlsToSitemap([cleanUrl]);
  
  if (success) {
    console.log(`Successfully added ${cleanUrl} to sitemap`);
  } else {
    console.error(`Failed to add ${cleanUrl} to sitemap`);
  }
  
  return success;
};

/**
 * Bulk add multiple URLs to the sitemap
 * @param urls Array of URLs to add (without domain)
 * @returns Promise<boolean> true if successful, false otherwise
 */
export const addUrlsToSitemapBulk = async (urls: string[]): Promise<boolean> => {
  // Clean all URLs
  const cleanUrls = urls.map(url => url.startsWith('/') ? url.substring(1) : url);
  
  // Add URLs to sitemap
  const success = await addUrlsToSitemap(cleanUrls);
  
  if (success) {
    console.log(`Successfully added ${cleanUrls.length} URLs to sitemap`);
  } else {
    console.error(`Failed to add URLs to sitemap`);
  }
  
  return success;
};
