
/**
 * SEO Utilities Index File
 * This file re-exports all SEO utility functions from specialized files
 * for backward compatibility
 */

export * from './sitemap-utils';
export * from './schema-utils';
export * from './canonical-utils';

// Add additional exports for frequently used schema generators
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from './schema-utils';

// Re-export them directly for backward compatibility
export { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema };
