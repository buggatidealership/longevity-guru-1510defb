
import React, { useEffect, useRef, useState } from 'react';

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
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    // Initialize ad after component mount
    const loadAd = () => {
      if (window.adsbygoogle && adRef.current) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log(`Ad loaded with format: ${format}`);
          setAdLoaded(true);
        } catch (e) {
          console.error('AdSense error:', e);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadAd, 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, [format]);

  // Define styling based on format
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
      className={`ad-container overflow-hidden ${className || ''}`} 
      ref={adRef}
      style={getFormatStyles()}
    >
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
    </div>
  );
};
