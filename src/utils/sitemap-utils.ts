/**
 * SEO Utilities for handling sitemap and robots.txt files
 * This file contains functions to help maintain SEO-related files
 */

/**
 * Generates a sitemap entry for a new calculator page
 * @param path The path of the calculator (without the domain)
 * @param priority The priority of the page (0.0 to 1.0)
 * @param lastmod The last modification date (YYYY-MM-DDThh:mm:ss+00:00)
 * @returns The XML string for the sitemap entry
 */
export const generateSitemapEntry = (
  path: string,
  priority: number = 0.9,
  lastmod: string = new Date().toISOString().split('T')[0] + 'T12:00:00+00:00',
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly'
): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  return `  <url>
    <loc>https://longevitycalculator.xyz/${cleanPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

/**
 * Generates a robots.txt entry for a new calculator page
 * @param path The path to allow (without the domain)
 * @returns The string for the robots.txt entry
 */
export const generateRobotsEntry = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  return `Allow: /${cleanPath}`;
};

/**
 * Instructions for adding a new calculator page to SEO files
 * This is a documentation function to help developers understand the process
 */
export const addCalculatorPageToSEO = (pagePath: string): string => {
  return `
To add a new calculator page to the site's SEO, follow these steps:

1. Add the page to App.tsx routes
   <Route path="${pagePath}" element={<YourCalculatorPage />} />

2. Add the following entry to public/sitemap.xml before the closing </urlset> tag:
   ${generateSitemapEntry(pagePath)}

3. Add the following entry to public/robots.txt in the "Important pages" section:
   ${generateRobotsEntry(pagePath)}

4. Update the calculatorCount variable in Index.tsx if applicable

5. Add a link to the new calculator in the footer section of Index.tsx

6. After deployment, submit the URL to Google Search Console for indexing
`;
};

/**
 * Generates a sitemap.xml file content
 * @param urls Array of URL paths (without domain)
 * @returns Complete XML sitemap content
 */
export const generateFullSitemap = (urls: string[]): string => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  const footer = `</urlset>`;
  
  const entries = urls.map(url => generateSitemapEntry(url));
  
  return `${header}
${entries.join('\n')}
${footer}`;
};

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
  
  return cleanedContent;
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
