
/**
 * SEO Utilities for handling sitemap and robots.txt files
 * This file re-exports all sitemap-related functions from specialized files
 */

export * from './sitemap/sitemap-generation';
export * from './sitemap/sitemap-validation';
export * from './sitemap/sitemap-format';
export * from './sitemap/sitemap-docs';
export * from './sitemap/sitemap-preservation';

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
    
    // Debug the content
    const { debugSitemapStructure } = await import('./sitemap/sitemap-format');
    debugSitemapStructure(content);
    
    try {
      // Try parsing as XML to see if it's valid
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(content, "application/xml");
      const parserError = xmlDoc.querySelector('parsererror');
      
      if (parserError) {
        console.warn('Sitemap XML parsing error detected, attempting to fix...');
        console.warn('Parser error:', parserError.textContent);
        
        // Try to normalize the content
        const { normalizeSitemapXml, ensureCorrectSitemapStart } = await import('./sitemap/sitemap-format');
        
        // First try to ensure the XML declaration is at the start
        let fixedContent = ensureCorrectSitemapStart(content);
        
        // Then do full normalization
        fixedContent = normalizeSitemapXml(fixedContent);
        
        // Check if normalization fixed the issue
        const fixedDoc = parser.parseFromString(fixedContent, "application/xml");
        const stillHasError = fixedDoc.querySelector('parsererror');
        
        if (stillHasError) {
          console.error('Still has parser error after fix:', stillHasError.textContent);
          return false;
        }
        
        return true;
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
    
    // First ensure the XML declaration is at the start with no whitespace
    const { ensureCorrectSitemapStart, normalizeSitemapXml } = await import('./sitemap/sitemap-format');
    
    // First just fix the XML declaration
    let fixed = ensureCorrectSitemapStart(content);
    
    // Then do full normalization
    fixed = normalizeSitemapXml(fixed);
    
    // Validate the normalized content
    const { validateSitemap } = await import('./sitemap/sitemap-validation');
    const result = validateSitemap(fixed);
    
    if (!result.isValid) {
      console.warn('Sitemap still has issues after normalization:', result.errors);
    } else {
      console.log('Sitemap has been successfully fixed');
    }
    
    return fixed;
  } catch (error) {
    console.error('Error fixing sitemap XML:', error);
    return null;
  }
};

// Add explicit method to fetch and display the sitemap content for debugging
export const debugSitemapContent = async (): Promise<void> => {
  try {
    const url = '/sitemap.xml';
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
      return;
    }
    
    const content = await response.text();
    
    // Log key diagnostics
    console.log('Raw sitemap content length:', content.length);
    console.log('First 100 chars:', content.substring(0, 100).replace(/\n/g, '\\n'));
    console.log('Contains XML declaration:', content.includes('<?xml'));
    console.log('Starts with XML declaration:', content.trim().startsWith('<?xml'));
    
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

// Update the sitemap.xml file with new entries while preserving existing ones
export const addUrlsToSitemap = async (newUrls: string[]): Promise<boolean> => {
  const { updateSitemapPreservingExisting } = await import('./sitemap/sitemap-preservation');
  return updateSitemapPreservingExisting(newUrls);
};
