
/**
 * SEO Utilities for handling sitemap and robots.txt files
 * This file re-exports all sitemap-related functions from specialized files
 */

export * from './sitemap/sitemap-generation';
export * from './sitemap/sitemap-validation';
export * from './sitemap/sitemap-format';
export * from './sitemap/sitemap-docs';

// Main function to validate sitemap from a URL
export const validateSitemapUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
      return false;
    }
    
    const content = await response.text();
    
    // Import the validation function directly to avoid circular dependencies
    const { validateSitemap } = await import('./sitemap/sitemap-validation');
    const result = validateSitemap(content);
    
    if (!result.isValid) {
      console.error('Sitemap validation failed:', result.errors);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error validating sitemap URL:', error);
    return false;
  }
};

// Check if sitemap is accessible
export const checkSitemapAccessibility = async (url: string = '/sitemap.xml'): Promise<boolean> => {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    console.error('Error checking sitemap accessibility:', error);
    return false;
  }
};
