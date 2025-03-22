
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
          console.log(`Ad loaded with format: ${format}, slot: ${slot}`);
          setAdLoaded(true);
        } catch (e) {
          console.error('AdSense error:', e);
        }
      } else {
        console.log('AdSense not initialized or ref not available');
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadAd, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, [format, slot]);

  // Define fixed dimensions for each ad format to ensure consistency across browsers
  const getFormatStyles = () => {
    switch (format) {
      case 'horizontal':
        return { 
          width: '100%', 
          height: '90px', 
          maxHeight: '90px',
          minHeight: '90px',
          overflow: 'hidden',
          border: '1px dashed #ddd',
          boxSizing: 'border-box',
          display: 'block',
          position: 'relative'
        };
      case 'rectangle':
        return { 
          width: '100%', 
          height: '250px', 
          maxHeight: '250px',
          minHeight: '250px', 
          overflow: 'hidden',
          border: '1px dashed #ddd',
          boxSizing: 'border-box',
          display: 'block',
          position: 'relative'
        };
      case 'vertical':
        return { 
          width: '160px', 
          height: '600px',
          maxHeight: '600px',
          minHeight: '600px',
          overflow: 'hidden', 
          border: '1px dashed #ddd',
          boxSizing: 'border-box',
          display: 'block',
          position: 'relative'
        };
      default:
        return { 
          width: '100%', 
          height: '250px',
          maxHeight: '250px',
          minHeight: '250px',
          overflow: 'hidden',
          border: '1px dashed #ddd',
          boxSizing: 'border-box',
          display: 'block',
          position: 'relative'
        };
    }
  };

  return (
    <div 
      className={`ad-container ${className || ''}`} 
      ref={adRef}
      style={getFormatStyles()}
    >
      {!adLoaded && <div className="text-xs text-gray-400 flex items-center justify-center h-full">Advertisement Loading...</div>}
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        data-ad-client="ca-pub-1580600669281697"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      ></ins>
    </div>
  );
};
