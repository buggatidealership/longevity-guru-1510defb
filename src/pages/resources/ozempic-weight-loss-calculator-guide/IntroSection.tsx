
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  const tocRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4" id="top">
        How to Calculate Your Weight Loss with Ozempic – Complete Guide
      </h1>
      
      <p className="text-lg text-gray-700 mb-6">
        Learn how to accurately estimate your potential weight loss results while using Ozempic, with this comprehensive, evidence-based guide.
      </p>
      
      <div className="prose max-w-none">
        <p>
          Tracking and predicting your weight loss journey with Ozempic (semaglutide) can be challenging, as results vary widely between individuals. Our <strong>Ozempic weight loss calculator</strong> helps you set realistic expectations and understand your personal progress. This guide explains how to use the calculator effectively, interpret your results, and optimize your weight loss journey with this GLP-1 medication.
        </p>
        
        <div 
          ref={tocRef}
          className="my-6 p-4 bg-gray-50 rounded-lg border border-gray-200"
          aria-label="Table of contents"
        >
          <h2 className="text-lg font-medium mb-2">Table of Contents</h2>
          <ul className="space-y-1">
            <li>
              <button 
                onClick={() => scrollToSection('understanding')}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Understanding Ozempic and Weight Loss
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('factors')}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Factors Affecting Weight Loss on Ozempic
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Step-by-Step Guide to Using the Ozempic Weight Loss Calculator
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('interpreting')}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Interpreting Your Ozempic Calculator Results
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('maximizing')}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Maximizing Weight Loss Results with Ozempic
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('mistakes')}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Common Mistakes to Avoid
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              >
                Frequently Asked Questions
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
