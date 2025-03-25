
import React from 'react';
import { AdUnit } from '@/components/AdUnit';

const IntroSection = () => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left">
        How to Calculate Your TDEE & Adjust It for Your Goals
      </h1>
      
      <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
        <AdUnit 
          className="w-full"
          slot="1111111111" 
          format="horizontal"
          responsive={true}
        />
      </div>
      
      <div className="prose max-w-none text-gray-700 text-left">
        <p className="text-lg">
          Learn how to accurately calculate your Total Daily Energy Expenditure (TDEE) 
          and customize it for weight loss, muscle gain, or maintenance. Includes examples 
          and science-backed tips.
        </p>
      </div>
      
      <div className="my-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-medium mb-2">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><a href="#what-is-tdee" className="text-blue-600 hover:underline">What Is TDEE?</a></li>
          <li><a href="#why-tdee-matters" className="text-blue-600 hover:underline">Why TDEE Matters</a></li>
          <li><a href="#how-to-calculate" className="text-blue-600 hover:underline">How to Calculate Your TDEE (Step-by-Step)</a></li>
          <li><a href="#example" className="text-blue-600 hover:underline">Example Calculation</a></li>
          <li><a href="#faqs" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
