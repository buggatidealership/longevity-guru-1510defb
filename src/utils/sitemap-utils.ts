
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
    
    // Check specifically for the common XML declaration not at start issue
    if (content.trim() && !content.trimStart().startsWith('<?xml')) {
      console.error('XML declaration is not at the start of the document.');
      console.log('This is the most common sitemap error and needs to be fixed.');
      return false;
    }
    
    try {
      // Try parsing as XML to see if it's valid
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(content, "application/xml");
      const parserError = xmlDoc.querySelector('parsererror');
      
      if (parserError) {
        console.warn('Sitemap XML parsing error detected, attempting to fix...');
        console.warn('Parser error:', parserError.textContent);
        return false;
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
export const fixSitemapXml = async (url: string = '/sitemap.xml'): Promise<boolean> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
      return false;
    }
    
    const content = await response.text();
    
    // Check if content is valid
    if (!content || content.trim().length < 50) {
      console.error('Sitemap content is too short or empty, cannot fix');
      return false;
    }
    
    // Check if the XML declaration is at the start
    const xmlAtStart = content.trimStart().startsWith('<?xml');
    if (!xmlAtStart) {
      console.log('XML declaration is not at the start. Attempting to fix this common issue...');
      
      // Since we can't directly write to the file in browser context,
      // we log instructions on how to fix it manually
      console.log('MANUAL FIX REQUIRED: The sitemap.xml file needs to have the XML declaration at the very start without any whitespace.');
      console.log('1. Edit public/sitemap.xml');
      console.log('2. Ensure the file starts exactly with: <?xml version="1.0" encoding="UTF-8"?>');
      console.log('3. Remove any whitespace or characters before this declaration');
      
      console.log('For now, we are using a hardcoded sitemap without the issue.');
      return false;
    }
    
    // If XML declaration is at the start, try to parse the XML to check for other issues
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(content, "application/xml");
      const parserError = xmlDoc.querySelector('parsererror');
      
      if (parserError) {
        console.warn('XML has other parsing errors:', parserError.textContent);
        return false;
      }
      
      console.log('Sitemap XML appears valid.');
      return true;
    } catch (parseError) {
      console.error('Error parsing XML:', parseError);
      return false;
    }
  } catch (error) {
    console.error('Error fixing sitemap XML:', error);
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
