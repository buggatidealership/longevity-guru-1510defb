
/**
 * Documentation for sitemap-related functions
 */

/**
 * Sitemap Entry Documentation
 * 
 * The sitemap entry format follows XML standards for sitemaps.
 * Each URL entry must include:
 * - loc: The URL of the page (absolute URL including domain)
 * - lastmod: Date of last modification (YYYY-MM-DDThh:mm:ss+00:00)
 * - changefreq: How frequently the page is likely to change
 *   (always, hourly, daily, weekly, monthly, yearly, never)
 * - priority: The priority of this URL relative to other URLs (0.0 to 1.0)
 * 
 * Example:
 * <url>
 *   <loc>https://longevitycalculator.xyz/life-expectancy-calculator</loc>
 *   <lastmod>2023-08-01T12:00:00+00:00</lastmod>
 *   <changefreq>monthly</changefreq>
 *   <priority>0.8</priority>
 * </url>
 */

/**
 * Current Sitemap Pages
 * 
 * Home Page: /
 * Calculators:
 * - /life-expectancy-calculator
 * - /retirement-savings-calculator
 * - /female-fertility-calculator
 * - /metabolism-calculator
 * - /baldness-risk-calculator
 * - /growth-percentile-calculator
 * - /adult-height-predictor-calculator
 * - /botox-calculator
 * - /alcohol-lifespan-calculator
 * - /breast-implant-calculator
 * 
 * Resource Pages:
 * - /resources
 * - /resources/how-to-increase-life-expectancy
 * - /resources/how-much-to-save-for-retirement
 * - /resources/save-for-retirement-low-income
 * - /resources/fertility-after-35
 * - /resources/how-to-boost-your-metabolism
 * - /resources/how-to-use-your-bmi
 * - /resources/adult-height-prediction-guide
 * 
 * Legal:
 * - /privacy
 * - /terms
 */

// Export a dummy object to make this a proper module
export const sitemapDocumentation = {
  version: "1.0.0",
  lastUpdated: "2024-10-20"
};
