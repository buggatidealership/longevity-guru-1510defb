
/**
 * Utilities for generating schema.org structured data
 */

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
 * @param imageUrl Image URL for the article
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

/**
 * Generate WebPage schema markup for standard pages
 * @param title Page title
 * @param description Page description
 * @param path Page path
 * @param lastReviewed Last reviewed date (ISO format)
 * @returns JSON-LD schema markup for WebPage
 */
export const generateWebPageSchema = (
  title: string,
  description: string,
  path: string,
  lastReviewed: string = new Date().toISOString()
) => {
  const baseUrl = 'https://longevitycalculator.xyz';
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `${baseUrl}/${cleanPath}`,
    "lastReviewed": lastReviewed,
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "contentUrl": "https://longevitycalculator.xyz/longevity-calculator-og.png"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", "p"]
    }
  };
};
