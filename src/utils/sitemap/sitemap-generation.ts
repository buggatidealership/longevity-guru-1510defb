
/**
 * Utility functions for generating sitemap entries
 */

/**
 * Generate a sitemap URL entry with the given parameters.
 * @param path The URL path relative to the domain (should begin with a slash)
 * @param priority The priority of this URL relative to other URLs (0.0 to 1.0)
 * @param lastmod The last modification date in ISO format (YYYY-MM-DDThh:mm:ss+00:00)
 * @param changefreq How frequently the page is likely to change (weekly, monthly, etc.)
 * @returns XML string representing the URL entry for the sitemap
 */
export const generateSitemapEntry = (
  path: string, 
  priority: number = 0.7, 
  lastmod: string = new Date().toISOString().split('T')[0] + 'T12:00:00+00:00',
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
): string => {
  // Ensure path starts with a slash
  if (!path.startsWith('/') && !path.startsWith('http')) {
    path = '/' + path;
  }
  
  // If path doesn't include a domain, add the default domain
  const fullUrl = path.startsWith('http') 
    ? path 
    : `https://longevitycalculator.xyz${path}`;
  
  return `
    <url>
        <loc>${fullUrl}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority.toFixed(1)}</priority>
    </url>`;
};

/**
 * Get all calculator paths for the sitemap
 * This function returns all calculator paths that should be in the sitemap
 */
export const getAllCalculatorPaths = (): Array<{path: string, priority: number}> => {
  return [
    { path: '/', priority: 1.0 },
    { path: '/life-expectancy-calculator', priority: 1.0 },
    { path: '/retirement-savings-calculator', priority: 1.0 },
    { path: '/female-fertility-calculator', priority: 0.9 },
    { path: '/child-growth-percentile-calculator', priority: 0.9 },
    { path: '/growth-percentile-calculator', priority: 0.9 },
    { path: '/baldness-risk-calculator', priority: 0.9 },
    { path: '/adult-height-predictor-calculator', priority: 0.9 },
    { path: '/breast-implant-calculator', priority: 0.9 },
    { path: '/breast-implant-size-calculator', priority: 0.9 },
    { path: '/metabolism-calculator', priority: 0.9 },
    { path: '/alcohol-lifespan-calculator', priority: 0.9 },
    { path: '/alcohol-impact-calculator', priority: 0.9 },
    { path: '/botox-calculator', priority: 0.9 },
    { path: '/botox-dosage-calculator', priority: 0.9 },
    { path: '/tdee-calculator', priority: 0.9 },
    { path: '/macronutrient-calculator', priority: 0.9 },
    { path: '/ideal-body-weight-calculator', priority: 0.9 },
    { path: '/vitamin-d-calculator', priority: 0.9 },
    { path: '/creatine-water-calculator', priority: 0.9 },
    { path: '/ozempic-weight-loss-calculator', priority: 0.9 },
    { path: '/resources', priority: 0.8 },
    { path: '/privacy', priority: 0.7 },
    { path: '/terms', priority: 0.7 },
  ];
};
