/**
 * Functions for validating sitemap content and structure
 */

/**
 * Validates sitemap XML structure
 * @param sitemapContent The sitemap XML content as string
 * @returns Validation result with errors if any
 */
export const validateSitemap = (sitemapContent: string) => {
  // First normalize the content to remove BOM and trim whitespace
  const normalizedContent = sitemapContent.replace(/^\uFEFF/, '').trim();
  
  // The most critical test: Check for any characters at all before XML declaration
  const startsWithXml = normalizedContent.startsWith('<?xml');
  if (!startsWithXml) {
    return {
      isValid: false,
      errors: ['Critical error: XML declaration is not at the start of the file'],
      message: 'XML declaration must be the very first characters in the file with no whitespace or other characters before it'
    };
  }
  
  // Basic structural validation
  const hasXmlDeclaration = normalizedContent.includes('<?xml version="1.0" encoding="UTF-8"?>');
  const hasUrlsetOpen = normalizedContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  const hasUrlsetClose = normalizedContent.includes('</urlset>');
  const hasUrls = normalizedContent.includes('<url>') && normalizedContent.includes('</url>');
  
  const errors = [];
  
  if (!hasXmlDeclaration) errors.push('Missing XML declaration');
  if (!hasUrlsetOpen) errors.push('Missing urlset opening tag');
  if (!hasUrlsetClose) errors.push('Missing urlset closing tag');
  if (!hasUrls) errors.push('No URL entries found');
  
  // Check for balanced tags
  const urlOpenCount = (normalizedContent.match(/<url>/g) || []).length;
  const urlCloseCount = (normalizedContent.match(/<\/url>/g) || []).length;
  
  if (urlOpenCount !== urlCloseCount) {
    errors.push(`Unbalanced URL tags: ${urlOpenCount} opening tags vs ${urlCloseCount} closing tags`);
  }
  
  // Check for proper nesting
  const locCount = (normalizedContent.match(/<loc>/g) || []).length;
  const locCloseCount = (normalizedContent.match(/<\/loc>/g) || []).length;
  
  if (locCount !== locCloseCount) {
    errors.push(`Unbalanced loc tags: ${locCount} opening tags vs ${locCloseCount} closing tags`);
  }
  
  if (locCount !== urlOpenCount) {
    errors.push(`Every URL entry should have exactly one loc tag, found ${locCount} loc tags for ${urlOpenCount} URL entries`);
  }
  
  // Try parsing as XML to catch any other errors
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(normalizedContent, "application/xml");
    const parserError = xmlDoc.querySelector('parsererror');
    
    if (parserError) {
      errors.push(`XML parsing error: ${parserError.textContent}`);
    }
  } catch (error) {
    errors.push(`XML parsing error: ${error instanceof Error ? error.message : String(error)}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    message: errors.length === 0 
      ? 'Sitemap structure appears valid' 
      : `Sitemap validation failed with ${errors.length} errors`
  };
};

/**
 * Adds a validation step to ensure sitemap is properly formatted before saving
 * @param sitemapFilePath The path to the sitemap file
 * @returns A function that can be called to validate the sitemap
 */
export const validateSitemapFile = async (sitemapFilePath: string): Promise<boolean> => {
  try {
    // This is a placeholder for a file reading operation
    // In a browser environment, this would use fetch or similar
    // In a Node.js environment, this would use fs.readFile
    const response = await fetch(sitemapFilePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status}`);
    }
    
    // Get raw response as ArrayBuffer to check for BOM and other invisible characters
    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    
    // Check for BOM (Byte Order Mark)
    let hasBOM = false;
    if (bytes.length >= 3 && bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF) {
      console.warn('Sitemap has UTF-8 BOM marker which should be removed');
      hasBOM = true;
    }
    
    // Check for whitespace before XML declaration
    let content = await response.text();
    if (hasBOM) {
      content = content.replace(/^\uFEFF/, '');
    }
    
    if (!content.trimStart().startsWith('<?xml')) {
      console.error('Critical error: XML declaration is not at the start of the file (after trimming whitespace)');
      return false;
    }
    
    // Import normalize function
    const { normalizeSitemapXml } = await import('./sitemap-format');
    
    // Normalize before validation
    const normalizedContent = normalizeSitemapXml(content);
    
    const result = validateSitemap(normalizedContent);
    
    if (!result.isValid) {
      console.error('Sitemap validation failed:', result.errors);
      return false;
    }
    
    console.log('Sitemap validation passed');
    return true;
  } catch (error) {
    console.error('Error validating sitemap:', error);
    return false;
  }
};
