
/**
 * Schema-related utility functions
 */

/**
 * Generates a breadcrumb schema for structured data
 * @param items Array of breadcrumb items with name and path
 * @returns Breadcrumb schema object
 */
export const generateBreadcrumbSchema = (items: { name: string; path: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://longevitycalculator.xyz${item.path.startsWith('/') ? item.path : '/' + item.path}`
    }))
  };
};

/**
 * Generates an FAQ schema for structured data
 * @param items Array of FAQ items with question and answer
 * @returns FAQ schema object
 */
export const generateFAQSchema = (items: { question: string; answer: string }[]) => {
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
 * Generates a WebPage schema for structured data
 * @param title Title of the web page
 * @param description Description of the web page
 * @returns WebPage schema object
 */
export const generateWebPageSchema = (title: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": "https://longevitycalculator.xyz",
    "publisher": {
      "@type": "Organization",
      "name": "Longevity Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://longevitycalculator.xyz/logo.png"
      }
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
  };
};
