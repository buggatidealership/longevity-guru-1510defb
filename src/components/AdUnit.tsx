
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
    // Make sure the ad container has a width before loading ads
    const loadAd = () => {
      if (window.adsbygoogle && adRef.current) {
        const { clientWidth } = adRef.current;
        // Only push to adsbygoogle if we have a container with width
        if (clientWidth > 0) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log(`Ad loaded with width: ${clientWidth}px`);
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

    // Add a small delay to ensure the DOM has rendered
    const timer = setTimeout(loadAd, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`ad-container w-full ${className || ''}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-1580600669281697"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      ></ins>
    </div>
  );
};
