
import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  className?: string;
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
}

export const AdUnit = ({ 
  className, 
  slot, 
  format = 'auto', 
  responsive = true 
}: AdUnitProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load ad with a small delay to ensure container has rendered properly
    const loadAd = () => {
      if (window.adsbygoogle && adRef.current) {
        const { clientWidth } = adRef.current;
        // Only push to adsbygoogle if container has width
        if (clientWidth > 0) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log(`Ad loaded with width: ${clientWidth}px and format: ${format}`);
          } catch (e) {
            console.error('AdSense error:', e);
          }
        } else {
          console.log('Waiting for ad container to have width...');
          // Try again after a slight delay if the container has no width yet
          setTimeout(loadAd, 200);
        }
      }
    };

    // Create a small delay for initial load
    const timer = setTimeout(loadAd, 100);
    
    // Add a window resize handler to help with responsive ads
    const handleResize = () => {
      if (responsive && adRef.current) {
        // Force a reload of ads on significant width changes
        const currentWidth = adRef.current.clientWidth;
        console.log(`Ad container resized to ${currentWidth}px`);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [format, responsive]);

  // Define class and style based on format
  const getFormatStyles = () => {
    switch (format) {
      case 'horizontal':
        return { minHeight: '90px' };
      case 'rectangle':
        return { minHeight: '250px' };
      case 'vertical':
        return { minHeight: '600px', height: '100%' };
      default:
        return { minHeight: '100px' };
    }
  };

  return (
    <div 
      className={`ad-container w-full overflow-hidden ${className || ''}`} 
      ref={adRef}
      style={getFormatStyles()}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: format === 'vertical' ? '600px' : '100%' }}
        data-ad-client="ca-pub-1580600669281697"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      ></ins>
    </div>
  );
};
