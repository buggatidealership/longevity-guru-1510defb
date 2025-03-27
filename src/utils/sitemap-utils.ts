
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
    
    // Import the validation functions
    const { validateSitemap } = await import('./sitemap/sitemap-validation');
    const { normalizeSitemapXml, debugSitemapStructure } = await import('./sitemap/sitemap-format');
    
    // Debug the structure before normalization
    debugSitemapStructure(content);
    
    // Check specifically for the XML declaration at start issue
    if (!content.trimStart().startsWith('<?xml')) {
      console.error('Critical error: XML declaration is not at the start of the document.');
      return false;
    }
    
    // Normalize the content for validation
    const normalizedContent = normalizeSitemapXml(content);
    
    // Debug after normalization
    console.log('After normalization:');
    debugSitemapStructure(normalizedContent);
    
    // Validate the normalized content
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
    
    // Get the content and debug it
    const content = await response.text();
    console.log(`Received sitemap content (${content.length} bytes)`);
    
    if (!content || content.trim().length < 50) {
      console.error('Sitemap content is too short or empty');
      return false;
    }
    
    // Log key diagnostics
    console.log('Raw sitemap content length:', content.length);
    console.log('First 100 chars:', content.substring(0, 100).replace(/\n/g, '\\n'));
    console.log('Contains XML declaration:', content.includes('<?xml'));
    console.log('Starts with XML declaration:', content.trimStart().startsWith('<?xml'));
    
    // Critical check for XML declaration position
    if (!content.trimStart().startsWith('<?xml')) {
      console.error('CRITICAL ERROR: XML declaration is not at the start of the document');
      if (content.includes('<?xml')) {
        const xmlPos = content.indexOf('<?xml');
        console.error('Characters before XML declaration:', content.substring(0, xmlPos));
      }
      return false;
    }
    
    // Try parsing as XML
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(content, "application/xml");
      const parserError = xmlDoc.querySelector('parsererror');
      
      if (parserError) {
        console.error('XML parse error:', parserError.textContent);
        return false;
      }
      
      console.log('XML parsed successfully');
      const urls = xmlDoc.querySelectorAll('url');
      console.log(`Found ${urls.length} URLs in sitemap`);
      return true;
    } catch (parseError) {
      console.error('Error parsing XML:', parseError);
      return false;
    }
  } catch (error) {
    console.error('Error checking sitemap accessibility:', error);
    return false;
  }
};

// Debug function to specifically check for the XML declaration positioning issue
export const debugSitemapStructure = async (url: string = '/sitemap.xml'): Promise<void> => {
  try {
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
    console.log('Starts with XML declaration:', content.trimStart().startsWith('<?xml'));
    
    // Critical check: If there are characters before the XML declaration
    if (content.includes('<?xml') && !content.trimStart().startsWith('<?xml')) {
      console.error('CRITICAL ERROR: Characters detected before XML declaration');
      const xmlPos = content.indexOf('<?xml');
      console.log('Characters before XML declaration:', content.substring(0, xmlPos));
    }
    
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
