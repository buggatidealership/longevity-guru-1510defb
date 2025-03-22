
# New Calculator Integration Checklist

This document provides a standardized process for adding new calculator pages to ensure SEO optimization and proper site integration.

## Step 1: Create the Calculator Component

- Create a new calculator component in `src/components/YourCalculatorName.tsx`
- Implement the calculator's logic and UI
- Include proper error handling and validation

## Step 2: Create the Calculator Page

- Create a new page in `src/pages/YourCalculatorNamePage.tsx`
- Import and use your calculator component
- Add SEO metadata using the `SEOHead` component with the `createCalculatorSEOProps` utility

Example:
```tsx
import SEOHead from '@/components/SEOHead';
import { createCalculatorSEOProps } from '@/utils/seoUtils';

const YourCalculatorPage = () => {
  const seoProps = createCalculatorSEOProps(
    "Your Calculator Name", 
    "Detailed description of what your calculator does and its benefits.",
    "/yourcalculator"
  );

  return (
    <>
      <SEOHead {...seoProps} />
      {/* Page content */}
    </>
  );
};
```

## Step 3: Add to App Routes

In `src/App.tsx`, add your new route:

```tsx
<Route path="/yourcalculator" element={<YourCalculatorPage />} />
```

## Step 4: Update Sitemap and Robots.txt

- Add a new entry to `public/sitemap.xml` using the `generateSitemapEntry` utility
- Add a new entry to `public/robots.txt` using the `generateRobotsEntry` utility

## Step 5: Update Homepage and Navigation

- Add a new card/link to your calculator on the Index page
- Increment the `calculatorCount` variable in `Index.tsx` if applicable
- Add the calculator to the footer links section

## Step 6: Testing

- Test the calculator functionality
- Test navigation to and from the calculator page
- Verify SEO metadata using browser dev tools
- Check that canonical URLs are correctly pointing to your domain
- Verify that no redirects are happening that could confuse search engines

## Step 7: Deploy and Index

- Deploy the changes and verify the sitemap entry is accessible
- Submit the sitemap to Google Search Console to request indexing
- Use Google Search Console's URL Inspection Tool to check for canonical URL issues
- Request indexing for the new page through Google Search Console

## Step 8: Canonicalization Best Practices

- Ensure all pages use the proper canonical URL with `https://longevitycalculator.xyz/`
- Check for duplicate content across domains
- Strengthen the page's authority with internal links from other pages
- Monitor Google Search Console for any canonicalization issues

## Step 9: Prevent SEO Issues

- Never use the same content as other domains without differentiation
- Always use consistent URL structures
- Ensure all pages are accessible and not returning error codes
- Monitor for any automatic redirects that might be set up on the server
