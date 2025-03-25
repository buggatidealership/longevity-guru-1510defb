
import React from 'react';

const FAQSection = () => {
  return (
    <section id="faqs" className="my-12">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        <details className="group border-b pb-4">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="text-left font-medium">How often should I recalculate my TDEE?</span>
            <span className="transition group-open:rotate-180">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className="mt-3 text-gray-700">
            <p>
              Every 4–6 weeks or after major body changes (e.g., 5+ kg gained/lost). 
              Your metabolism adapts as your body composition changes, so regular recalculation 
              ensures you're working with accurate numbers.
            </p>
          </div>
        </details>
        
        <details className="group border-b pb-4">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="text-left font-medium">Can I use a calculator instead of doing the math manually?</span>
            <span className="transition group-open:rotate-180">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className="mt-3 text-gray-700">
            <p>
              Absolutely. Our <a href="/tdee-calculator" className="text-blue-600 hover:underline">TDEE Calculator</a> does 
              the work for you instantly. It uses the same formulas but saves you time and prevents calculation errors.
            </p>
          </div>
        </details>
        
        <details className="group border-b pb-4">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="text-left font-medium">What happens if I eat below my TDEE for too long?</span>
            <span className="transition group-open:rotate-180">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className="mt-3 text-gray-700">
            <p>
              You may experience fatigue, hormonal imbalances, and slower metabolism. 
              Long-term severe caloric restriction can lead to nutrient deficiencies, 
              muscle loss, and metabolic adaptation that makes further weight loss more difficult.
            </p>
          </div>
        </details>
        
        <details className="group border-b pb-4">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="text-left font-medium">Is TDEE the same as BMR?</span>
            <span className="transition group-open:rotate-180">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className="mt-3 text-gray-700">
            <p>
              No, they're different. BMR (Basal Metabolic Rate) is the calories your body needs 
              at complete rest just to maintain basic functions. TDEE includes BMR plus all additional 
              energy used for daily activities, exercise, and digestion.
            </p>
          </div>
        </details>
        
        <details className="group border-b pb-4">
          <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="text-left font-medium">How accurate are TDEE calculations?</span>
            <span className="transition group-open:rotate-180">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className="mt-3 text-gray-700">
            <p>
              TDEE formulas are estimates with about ±10% accuracy. For most people, they provide 
              a good starting point. To improve accuracy, track your weight and calorie intake for 
              2-3 weeks, then adjust based on actual results.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default FAQSection;
