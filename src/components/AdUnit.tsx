
import React, { useEffect } from 'react';

interface AdUnitProps {
  className?: string;
  slot: string;
}

export const AdUnit = ({ className, slot }: AdUnitProps) => {
  useEffect(() => {
    // This attempts to load ads after component mounts
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, []);

  return (
    <div className={`ad-container ${className || ''}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1580600669281697"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
