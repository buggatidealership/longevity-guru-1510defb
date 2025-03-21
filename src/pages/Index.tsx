
import React from 'react';
import LongevityCalculator from '@/components/LongevityCalculator';
import Logo from '@/components/Logo';
import { Helmet } from 'react-helmet';

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
          <LongevityCalculator />
        </main>
        <footer className="text-center text-xs text-gray-500 py-8">
          <p>© {new Date().getFullYear()} Life Expectancy Calculator. For educational purposes only.</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
