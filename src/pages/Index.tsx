
import React, { useEffect } from 'react';
import LongevityCalculator from '@/components/LongevityCalculator';
import Logo from '@/components/Logo';
import { Helmet } from 'react-helmet';

// Component to display Google AdSense ads
const AdUnit = ({ className, slot }: { className?: string; slot: string }) => {
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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Life Expectancy Calculator | Estimate Your Lifespan</title>
        <meta name="description" content="Calculate your estimated life expectancy based on health factors, lifestyle choices, and demographics. Free, research-based longevity calculator." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="max-w-6xl mx-auto pt-8 px-4">
          <Logo className="mb-8" />
        </header>
        <main className="max-w-6xl mx-auto px-4">
          {/* Top Ad Unit */}
          <AdUnit 
            className="mb-8 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] flex items-center justify-center"
            slot="1234567890" 
          />
          
          <LongevityCalculator />
          
          {/* Bottom Ad Unit */}
          <AdUnit 
            className="mt-8 p-2 bg-gray-50 rounded-lg text-center min-h-[250px] flex items-center justify-center"
            slot="0987654321" 
          />
        </main>
        <footer className="text-center text-xs text-gray-500 py-8">
          <p>© {new Date().getFullYear()} Life Expectancy Calculator. For educational purposes only.</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
