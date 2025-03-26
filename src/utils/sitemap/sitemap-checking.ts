/**
 * Utility for checking sitemap validity on application startup
 */

import { validateSitemap } from './sitemap-validation';
import { normalizeSitemapXml, debugSitemapStructure } from './sitemap-format';

/**
 * Checks if the sitemap is valid on application startup
 * and logs detailed information for debugging
 */
export const checkSitemapOnStartup = async (): Promise<void> => {
  try {
    console.log('Checking sitemap on application startup...');
    
    // Fetch the sitemap
    const response = await fetch('/sitemap.xml');
    
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
      return;
    }
    
    // Get the raw content as text
    const content = await response.text();
    
    // Debug the structure
    console.log('Sitemap structure before normalization:');
    debugSitemapStructure(content);
    
    // Check if content starts with XML declaration
    if (!content.trimStart().startsWith('<?xml')) {
      console.error('CRITICAL ERROR: XML declaration is not at the start of the file');
      console.log('First 100 characters:', content.substring(0, 100));
    }
    
    // Normalize and validate
    const normalized = normalizeSitemapXml(content);
    const result = validateSitemap(normalized);
    
    if (!result.isValid) {
      console.error('Sitemap validation failed:', result.errors);
    } else {
      console.log('Sitemap validation passed');
    }
    
  } catch (error) {
    console.error('Error checking sitemap on startup:', error);
  }
};
