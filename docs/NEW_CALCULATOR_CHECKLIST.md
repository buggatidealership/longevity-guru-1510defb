
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

## Step 7: Deploy

- Deploy the changes and verify the sitemap entry is accessible
- Submit the sitemap to Google Search Console to request indexing
