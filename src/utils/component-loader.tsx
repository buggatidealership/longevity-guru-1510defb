
import React, { lazy, Suspense, ComponentType } from 'react';

/**
 * A utility for optimized component loading
 * This helps reduce initial bundle size by lazy loading components
 */

// Default loading component
const DefaultLoading = () => (
  <div className="p-4 flex justify-center items-center">
    <div className="animate-pulse bg-gray-200 rounded-md" style={{ width: '100%', height: '120px' }}></div>
  </div>
);

/**
 * Creates a lazy-loaded component with proper loading state
 * @param factory Function that imports the component
 * @param LoadingComponent Optional custom loading component
 * @returns The lazy-loaded component with suspense
 */
export function lazyLoad<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  LoadingComponent = DefaultLoading
) {
  const LazyComponent = lazy(factory);
  
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<LoadingComponent />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

/**
 * Preloads a component in the background
 * @param factory Function that imports the component
 */
export function preloadComponent(factory: () => Promise<{ default: any }>) {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    // @ts-ignore - requestIdleCallback may not be in TypeScript DOM types
    window.requestIdleCallback(() => {
      factory();
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => factory(), 1000);
  }
}

/**
 * Creates a placeholder element with specified dimensions
 * Used to prevent layout shifts for lazy-loaded content
 */
export const Placeholder = ({ 
  width = '100%', 
  height = '200px',
  className = '',
}: {
  width?: string;
  height?: string;
  className?: string;
}) => (
  <div 
    className={`bg-gray-100 rounded ${className}`}
    style={{ width, height }}
  />
);
