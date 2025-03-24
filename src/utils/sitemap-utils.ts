
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
    
    // Normalize the sitemap content before validation
    const { normalizeSitemapXml } = await import('./sitemap/sitemap-format');
    const normalizedContent = normalizeSitemapXml(content);
    
    // Import the validation function directly to avoid circular dependencies
    const { validateSitemap } = await import('./sitemap/sitemap-validation');
    const result = validateSitemap(normalizedContent);
    
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
    
    // If we get a response but it might have XML issues, try to normalize and validate it
    if (response.ok) {
      const content = await response.text();
      try {
        // Try parsing as XML to see if it's valid
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(content, "application/xml");
        const parserError = xmlDoc.querySelector('parsererror');
        
        if (parserError) {
          console.warn('Sitemap XML parsing error detected, attempting to fix...');
          // Try to normalize the content
          const { normalizeSitemapXml } = await import('./sitemap/sitemap-format');
          const normalizedContent = normalizeSitemapXml(content);
          
          // Check if normalization fixed the issue
          const fixedDoc = parser.parseFromString(normalizedContent, "application/xml");
          return !fixedDoc.querySelector('parsererror');
        }
      } catch (parseError) {
        console.error('Error parsing sitemap XML:', parseError);
        return false;
      }
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking sitemap accessibility:', error);
    return false;
  }
};

// Fix sitemap.xml file if needed
export const fixSitemapXml = async (url: string = '/sitemap.xml'): Promise<string | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const content = await response.text();
    
    // Normalize the sitemap content
    const { normalizeSitemapXml } = await import('./sitemap/sitemap-format');
    return normalizeSitemapXml(content);
  } catch (error) {
    console.error('Error fixing sitemap XML:', error);
    return null;
  }
};
