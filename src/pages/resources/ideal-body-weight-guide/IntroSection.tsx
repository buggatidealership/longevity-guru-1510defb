
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  return (
    <div className="space-y-6 text-left">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        The Truth About Ideal Body Weight Formulas & How to Use Them
      </h1>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        Learn how ideal body weight calculators work, which formulas are most reliable, and when to trust (or ignore) these mathematical estimates of healthy weight.
      </p>
      
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
        <img 
          src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&fit=crop&w=1200&q=80" 
          alt="Person measuring their waist with a tape measure, representing ideal body weight assessment" 
          className="w-full h-full object-cover"
          width={1200}
          height={800}
        />
      </div>
      
      <p className="text-gray-700 leading-relaxed">
        If you've ever wondered, "What should I weigh?" you've likely encountered an <strong>ideal body weight calculator</strong>. These tools promise to tell you the perfect weight for your height, often down to the exact pound. But how are these "ideal" weights determined? Are they scientifically valid? And should you actually try to achieve these specific numbers?
      </p>
      
      <p className="text-gray-700 leading-relaxed">
        This guide examines the real science behind ideal body weight formulas, their limitations, and how to interpret their results in the context of your overall health. We'll explore the most common formulas used today (Devine, Robinson, Hamwi, Miller, and Broca), and provide practical guidance on how to use this information as part of a balanced approach to health.
      </p>
      
      <div className="bg-gray-100 rounded-lg p-4 my-6">
        <h2 className="text-lg font-medium mb-3">In This Article:</h2>
        <ul className="space-y-2">
          <li className="text-blue-600 hover:text-blue-800">
            <a href="#what-is-ibw">What Is Ideal Body Weight & Why Was It Created?</a>
          </li>
          <li className="text-blue-600 hover:text-blue-800">
            <a href="#common-formulas">The 5 Most Common Ideal Weight Formulas Explained</a>
          </li>
          <li className="text-blue-600 hover:text-blue-800">
            <a href="#limitations">Scientific Limitations of Ideal Body Weight Calculations</a>
          </li>
          <li className="text-blue-600 hover:text-blue-800">
            <a href="#better-metrics">Better Ways to Assess Your Healthy Weight Range</a>
          </li>
          <li className="text-blue-600 hover:text-blue-800">
            <a href="#how-to-use">How to Use Our Ideal Body Weight Calculator</a>
          </li>
          <li className="text-blue-600 hover:text-blue-800">
            <a href="#faq">Frequently Asked Questions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
