
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
    
    // Debug the content received
    console.log(`Received sitemap content (${content.length} bytes)`);
    
    // Check if content is empty or too short to be valid
    if (!content || content.length < 50) {
      console.error('Sitemap content is too short or empty');
      return false;
    }
    
    // Normalize the sitemap content before validation
    const { normalizeSitemapXml, debugSitemapStructure } = await import('./sitemap/sitemap-format');
    
    // Debug the structure before normalization
    debugSitemapStructure(content);
    
    const normalizedContent = normalizeSitemapXml(content);
    
    // Debug the structure after normalization
    console.log('After normalization:');
    debugSitemapStructure(normalizedContent);
    
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
    console.log(`Checking sitemap accessibility at: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: Status ${response.status}`);
      return false;
    }
    
    // If we get a response but it might have XML issues, try to normalize and validate it
    const content = await response.text();
    console.log(`Received sitemap content (${content.length} bytes)`);
    
    if (!content || content.trim().length < 50) {
      console.error('Sitemap content is too short or empty');
      return false;
    }
    
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
      
      return true;
    } catch (parseError) {
      console.error('Error parsing sitemap XML:', parseError);
      return false;
    }
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
    
    // Check if content is valid
    if (!content || content.trim().length < 50) {
      console.error('Sitemap content is too short or empty, cannot fix');
      return null;
    }
    
    // Normalize the sitemap content
    const { normalizeSitemapXml } = await import('./sitemap/sitemap-format');
    const normalized = normalizeSitemapXml(content);
    
    // Validate the normalized content
    const { validateSitemap } = await import('./sitemap/sitemap-validation');
    const result = validateSitemap(normalized);
    
    if (!result.isValid) {
      console.warn('Sitemap still has issues after normalization:', result.errors);
    } else {
      console.log('Sitemap has been successfully fixed');
    }
    
    return normalized;
  } catch (error) {
    console.error('Error fixing sitemap XML:', error);
    return null;
  }
};

// Add explicit method to fetch and display the sitemap content for debugging
export const debugSitemapContent = async (url: string = '/sitemap.xml'): Promise<void> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
      return;
    }
    
    const content = await response.text();
    console.log('Raw sitemap content:', content);
    
    // Attempt to parse as XML
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(content, "application/xml");
      const parserError = xmlDoc.querySelector('parsererror');
      
      if (parserError) {
        console.error('XML parse error:', parserError.textContent);
      } else {
        console.log('XML parsed successfully');
        const urls = xmlDoc.querySelectorAll('url');
        console.log(`Found ${urls.length} URLs in sitemap`);
      }
    } catch (parseError) {
      console.error('Error parsing XML:', parseError);
    }
  } catch (error) {
    console.error('Error debugging sitemap:', error);
  }
};
