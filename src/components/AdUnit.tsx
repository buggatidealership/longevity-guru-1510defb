
import React, { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
  className?: string;
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
  lazy?: boolean;
}

export const AdUnit = ({ 
  className, 
  slot, 
  format = 'auto', 
  responsive = true,
  lazy = true
}: AdUnitProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(!lazy);

  useEffect(() => {
    // Initialize ad after component mount
    const loadAd = () => {
      if (window.adsbygoogle && adRef.current) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log(`Ad loaded with format: ${format}, slot: ${slot}`);
          setAdLoaded(true);
        } catch (e) {
          console.error('AdSense error:', e);
        }
      } else {
        console.log('AdSense not initialized or ref not available');
      }
    };

    // Only load ad if visible or not lazy-loaded
    if (isVisible) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(loadAd, 300);
      return () => clearTimeout(timer);
    }
  }, [format, slot, isVisible]);

  // Set up Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' }); // Load ads when they're within 200px of viewport
    
    if (adRef.current) {
      observer.observe(adRef.current);
    }
    
    return () => observer.disconnect();
  }, [lazy]);

  // Define styling based on format
  const getFormatStyles = () => {
    switch (format) {
      case 'horizontal':
        return { minHeight: '90px', border: adLoaded ? 'none' : '1px dashed #ddd' };
      case 'rectangle':
        return { minHeight: '250px', border: adLoaded ? 'none' : '1px dashed #ddd' };
      case 'vertical':
        return { minHeight: '600px', height: '100%', border: adLoaded ? 'none' : '1px dashed #ddd' };
      default:
        return { minHeight: '100px', border: adLoaded ? 'none' : '1px dashed #ddd' };
    }
  };

  return (
    <div 
      className={`ad-container overflow-hidden ${className || ''}`} 
      ref={adRef}
      style={getFormatStyles()}
      data-ad-slot={slot}
    >
      {!adLoaded && <div className="text-xs text-gray-400 flex items-center justify-center h-full">Advertisement Loading...</div>}
      {(isVisible || !lazy) && (
        <ins
          className="adsbygoogle"
          style={{ 
            display: 'block', 
            width: '100%', 
            height: '100%' 
          }}
          data-ad-client="ca-pub-1580600669281697"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        ></ins>
      )}
    </div>
  );
};
