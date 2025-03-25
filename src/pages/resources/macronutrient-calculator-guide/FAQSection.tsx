
import React from 'react';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const FAQSection: React.FC = () => {
  return (
    <div className="mt-12 space-y-8" id="faq">
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-medium" id="faq-1">What is a macronutrient calculator?</h3>
          <p className="text-gray-700">
            A macronutrient calculator is a tool that determines your ideal daily intake of protein, carbohydrates, and fats based on your age, sex, height, weight, activity level, and fitness goals. It provides personalized nutrition recommendations to help you achieve weight loss, maintenance, or muscle building objectives.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-medium" id="faq-2">How accurate is a macronutrient calculator?</h3>
          <p className="text-gray-700">
            Macronutrient calculators provide a good starting point based on scientific formulas like the Mifflin-St Jeor equation. However, individual metabolism varies, so you should treat the results as an initial guideline and adjust based on your body's response over 2-3 weeks of consistent tracking.
          </p>
        </div>
        
        <div className="my-6">
          <AdUnit 
            slot="9012345678"
            format="rectangle"
            responsive={true}
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-medium" id="faq-3">How much protein do I need to build muscle?</h3>
          <p className="text-gray-700">
            For muscle building, research suggests consuming 1.6-2.2g of protein per kg of bodyweight daily. Our macronutrient calculator typically recommends around 25% of calories from protein when the "Build Muscle" goal is selected, which falls within this range for most individuals.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-medium" id="faq-4">Should I adjust my macros on rest days?</h3>
          <p className="text-gray-700">
            Many people benefit from adjusting macros on rest days, typically by reducing carbohydrates by 15-20% and slightly increasing fats to maintain similar overall calories. Protein intake usually remains consistent regardless of training schedule to support muscle recovery and maintenance.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-medium" id="faq-5">How often should I recalculate my macros?</h3>
          <p className="text-gray-700">
            Recalculate your macros every 8-12 weeks, or whenever you experience a significant change in weight (more than 5-10 lbs), activity level, or training goals. Regular adjustments ensure your nutrition plan remains aligned with your evolving body composition and fitness objectives.
          </p>
        </div>
      </div>
      
      <DisclaimerAlert />
      
      <div className="pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Last updated: December 15, 2024
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Author: Longevity Calculator Health Team
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
