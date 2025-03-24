
/**
 * Functions for cleaning and formatting sitemap content
 */

/**
 * Cleans a sitemap file by ensuring proper XML structure
 * @param sitemapContent The sitemap content to clean
 * @returns Properly formatted sitemap content
 */
export const cleanSitemapContent = (sitemapContent: string): string => {
  // Remove any whitespace before XML declaration
  let cleanedContent = sitemapContent.trim();
  
  // Ensure XML declaration is at the start
  if (!cleanedContent.startsWith('<?xml')) {
    const xmlDeclarationMatch = cleanedContent.match(/<\?xml.*?\?>/);
    if (xmlDeclarationMatch) {
      // Remove the existing XML declaration
      cleanedContent = cleanedContent.replace(xmlDeclarationMatch[0], '');
      // Add it to the beginning
      cleanedContent = '<?xml version="1.0" encoding="UTF-8"?>' + cleanedContent;
    } else {
      // No XML declaration found, add one
      cleanedContent = '<?xml version="1.0" encoding="UTF-8"?>' + cleanedContent;
    }
  }
  
  // Remove any potential Byte Order Mark (BOM)
  cleanedContent = cleanedContent.replace(/^\uFEFF/, '');
  
  return cleanedContent;
};

/**
 * Ensures sitemap.xml starts correctly without any whitespace
 * @param content The content to be written to sitemap.xml
 * @returns Properly formatted XML content for sitemap
 */
export const ensureCorrectSitemapStart = (content: string): string => {
  // Ensure content starts with XML declaration with no preceding whitespace
  const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
  
  // Remove any BOM or whitespace
  let cleanContent = content.replace(/^\uFEFF/, '').trim();
  
  // Ensure it starts with the XML declaration
  if (!cleanContent.startsWith(xmlDeclaration)) {
    // Try to find and extract XML declaration if it exists
    const xmlDeclMatch = cleanContent.match(/<\?xml[^?]*\?>/);
    if (xmlDeclMatch) {
      // Remove it first, then prepend
      cleanContent = cleanContent.replace(xmlDeclMatch[0], '');
      cleanContent = `${xmlDeclaration}\n${cleanContent.trimStart()}`;
    } else {
      // No XML declaration found, add it
      cleanContent = `${xmlDeclaration}\n${cleanContent}`;
    }
  }
  
  return cleanContent;
};
