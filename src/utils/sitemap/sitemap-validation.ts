
/**
 * Functions for validating sitemap content and structure
 */

/**
 * Validates sitemap XML structure
 * @param sitemapContent The sitemap XML content as string
 * @returns Validation result with errors if any
 */
export const validateSitemap = (sitemapContent: string) => {
  // Check for any whitespace before XML declaration (this is the most common cause of errors)
  if (sitemapContent.trim() !== sitemapContent || sitemapContent.indexOf('<?xml') !== 0) {
    return {
      isValid: false,
      errors: ['Whitespace or characters detected before XML declaration'],
      message: 'Critical error: XML declaration must be at the very beginning of the file with no whitespace before it'
    };
  }
  
  // Basic structural validation
  const hasXmlDeclaration = sitemapContent.includes('<?xml version="1.0" encoding="UTF-8"?>');
  const hasUrlsetOpen = sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  const hasUrlsetClose = sitemapContent.includes('</urlset>');
  const hasUrls = sitemapContent.includes('<url>') && sitemapContent.includes('</url>');
  
  const errors = [];
  
  if (!hasXmlDeclaration) errors.push('Missing XML declaration');
  if (!hasUrlsetOpen) errors.push('Missing urlset opening tag');
  if (!hasUrlsetClose) errors.push('Missing urlset closing tag');
  if (!hasUrls) errors.push('No URL entries found');
  
  // Check for balanced tags
  const urlOpenCount = (sitemapContent.match(/<url>/g) || []).length;
  const urlCloseCount = (sitemapContent.match(/<\/url>/g) || []).length;
  
  if (urlOpenCount !== urlCloseCount) {
    errors.push(`Unbalanced URL tags: ${urlOpenCount} opening tags vs ${urlCloseCount} closing tags`);
  }
  
  // Check for proper nesting
  const locCount = (sitemapContent.match(/<loc>/g) || []).length;
  const locCloseCount = (sitemapContent.match(/<\/loc>/g) || []).length;
  
  if (locCount !== locCloseCount) {
    errors.push(`Unbalanced loc tags: ${locCount} opening tags vs ${locCloseCount} closing tags`);
  }
  
  if (locCount !== urlOpenCount) {
    errors.push(`Every URL entry should have exactly one loc tag, found ${locCount} loc tags for ${urlOpenCount} URL entries`);
  }
  
  // Check for XML declaration position
  const firstLine = sitemapContent.split('\n')[0].trim();
  if (firstLine !== '<?xml version="1.0" encoding="UTF-8"?>') {
    errors.push('XML declaration must be the first line of the document');
  }
  
  // Check for any whitespace before XML declaration
  if (sitemapContent.indexOf('<?xml') > 0) {
    errors.push('No whitespace or content allowed before XML declaration');
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
    const sitemapContent = await fetch(sitemapFilePath).then(response => response.text());
    
    const result = validateSitemap(sitemapContent);
    
    if (!result.isValid) {
      console.error('Sitemap validation failed:', result.errors);
      // In a real application, this might throw an error or trigger a build failure
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error validating sitemap:', error);
    return false;
  }
};
