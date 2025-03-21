
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
          {/* Header Ad - Horizontal Banner */}
          <AdUnit 
            className="mb-6 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] flex items-center justify-center"
            slot="1111111111" 
          />
        </header>
        <main className="max-w-6xl mx-auto px-4">
          {/* Top Ad Unit */}
          <AdUnit 
            className="mb-8 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] flex items-center justify-center"
            slot="1234567890" 
          />
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Sidebar Ad - only visible on desktop */}
            <div className="hidden md:block md:w-[160px] lg:w-[300px] shrink-0">
              <AdUnit 
                className="sticky top-4 p-2 bg-gray-50 rounded-lg text-center min-h-[600px]"
                slot="2222222222" 
              />
            </div>
            
            {/* Main Calculator */}
            <div className="flex-1">
              <LongevityCalculator />
            </div>
            
            {/* Right Sidebar Ad - only visible on desktop */}
            <div className="hidden md:block md:w-[160px] lg:w-[300px] shrink-0">
              <AdUnit 
                className="sticky top-4 p-2 bg-gray-50 rounded-lg text-center min-h-[600px]"
                slot="3333333333" 
              />
            </div>
          </div>
          
          {/* Below Calculator Ad - Rectangle */}
          <AdUnit 
            className="mt-8 p-2 bg-gray-50 rounded-lg text-center min-h-[250px] flex items-center justify-center"
            slot="0987654321" 
          />
          
          {/* Additional Mobile Ad - only visible on mobile */}
          <div className="block md:hidden mt-6">
            <AdUnit 
              className="p-2 bg-gray-50 rounded-lg text-center min-h-[250px] flex items-center justify-center"
              slot="4444444444" 
            />
          </div>
        </main>
        <footer className="text-center text-xs text-gray-500 py-8 mt-8">
          <AdUnit 
            className="mb-4 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] mx-auto max-w-6xl flex items-center justify-center"
            slot="5555555555" 
          />
          <p>© {new Date().getFullYear()} Life Expectancy Calculator. For educational purposes only.</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
