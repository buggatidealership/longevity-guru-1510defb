
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

/**
 * Normalizes a sitemap XML file to ensure it's valid and properly formatted
 * @param sitemapContent The sitemap content to normalize
 * @returns Properly normalized sitemap content
 */
export const normalizeSitemapXml = (sitemapContent: string): string => {
  // First, clean any potential BOM or whitespace
  let normalized = sitemapContent.replace(/^\uFEFF/, '').trim();
  
  // Ensure it starts with the correct XML declaration
  const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
  if (!normalized.startsWith(xmlDeclaration)) {
    // Remove any existing XML declaration
    const xmlDeclMatch = normalized.match(/<\?xml[^?]*\?>/);
    if (xmlDeclMatch) {
      normalized = normalized.replace(xmlDeclMatch[0], '');
    }
    normalized = `${xmlDeclaration}\n${normalized.trimStart()}`;
  }
  
  // Ensure the urlset has the correct namespace
  const correctUrlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetMatch = normalized.match(/<urlset[^>]*>/);
  if (urlsetMatch && urlsetMatch[0] !== correctUrlsetOpen) {
    normalized = normalized.replace(urlsetMatch[0], correctUrlsetOpen);
  }
  
  // Ensure proper line breaks for readability
  normalized = normalized
    .replace(/><url>/g, '>\n  <url>')
    .replace(/<\/url></g, '</url>\n  <')
    .replace(/<\/urlset>/, '\n</urlset>')
    .replace(/><loc>/g, '>\n    <loc>')
    .replace(/<\/loc></g, '</loc>\n    <')
    .replace(/<\/url>/g, '\n  </url>');
  
  return normalized;
};
