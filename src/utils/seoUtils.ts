
/**
 * SEO Utilities for handling new calculator pages
 * This file contains functions to help maintain SEO-related files like sitemap and robots.txt
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
 * Creates SEO metadata for a calculator page
 * @param title The page title
 * @param description The page description
 * @param path The page path (without domain)
 * @returns SEO props object for the SEOHead component
 */
export const createCalculatorSEOProps = (
  title: string, 
  description: string, 
  path: string
) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  // Force our domain instead of any potential incorrect domain
  const canonicalUrl = `https://longevitycalculator.xyz/${cleanPath}`;
  
  return {
    title: `${title} | Free Online Calculator`,
    description,
    canonicalUrl,
    keywords: `${title.toLowerCase()}, calculator, health tool, free calculator, online tool, ${cleanPath}`,
    ogType: 'website',
    ogImage: 'https://longevitycalculator.xyz/longevity-calculator-og.png'
  };
};

/**
 * Checks if a URL is properly canonicalized
 * @param url The URL to check
 * @returns Object containing the check result
 */
export const checkCanonicalUrl = (url: string) => {
  const baseUrl = 'https://longevitycalculator.xyz';
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  const fullUrl = `${baseUrl}/${cleanUrl}`;
  
  const hasIncorrectDomain = url.includes('lifespan-calculator.com');
  
  return {
    isCanonical: (url.startsWith(baseUrl) || url.startsWith('/')) && !hasIncorrectDomain,
    suggestedCanonical: fullUrl,
    message: hasIncorrectDomain 
      ? `URL contains incorrect domain. Should be ${fullUrl}`
      : (url.startsWith(baseUrl) || url.startsWith('/'))
        ? 'URL is properly formatted for canonicalization'
        : `URL should start with ${baseUrl} for proper canonicalization`
  };
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
 * Generate schema markup for breadcrumb navigation
 * @param items Array of breadcrumb items with name and path
 * @returns JSON-LD schema markup for breadcrumbs
 */
export const generateBreadcrumbSchema = (items: Array<{name: string, path: string}>) => {
  const baseUrl = 'https://longevitycalculator.xyz';
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path.startsWith('/') ? '' : '/'}${item.path}`
    }))
  };
};

/**
 * Generate FAQ schema markup from an array of questions and answers
 * @param items Array of FAQ items with question and answer
 * @returns JSON-LD schema markup for FAQs
 */
export const generateFAQSchema = (items: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
};

/**
 * Generate article schema markup for content pages
 * @param title Page title
 * @param description Page description
 * @param path Page path
 * @param datePublished Publication date (ISO format)
 * @param dateModified Last modification date (ISO format)
 * @returns JSON-LD schema markup for article
 */
export const generateArticleSchema = (
  title: string, 
  description: string, 
  path: string,
  datePublished: string = new Date().toISOString(),
  dateModified: string = new Date().toISOString(),
  imageUrl: string = 'https://longevitycalculator.xyz/longevity-calculator-og.png'
) => {
  const baseUrl = 'https://longevitycalculator.xyz';
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "Longevity Calculator",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Longevity Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://longevitycalculator.xyz/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/${cleanPath}`
    }
  };
};
