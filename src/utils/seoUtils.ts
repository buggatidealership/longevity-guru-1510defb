
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
  
  return {
    title: `${title} | Free Online Calculator`,
    description,
    canonicalUrl: `https://longevitycalculator.xyz/${cleanPath}`,
    keywords: `${title.toLowerCase()}, calculator, health tool, free calculator, online tool, ${cleanPath}`
  };
};
