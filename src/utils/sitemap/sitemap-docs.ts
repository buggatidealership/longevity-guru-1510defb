
/**
 * Documentation and developer utilities for sitemap management
 */

import { generateSitemapEntry, generateRobotsEntry } from './sitemap-generation';

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
