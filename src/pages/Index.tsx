
import React from 'react';
import LongevityCalculator from '@/components/LongevityCalculator';
import Logo from '@/components/Logo';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto pt-8 px-4">
        <Logo className="mb-8" />
        <LongevityCalculator />
      </div>
    </div>
  );
};

export default Index;
