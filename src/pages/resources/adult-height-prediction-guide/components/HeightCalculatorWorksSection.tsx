
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeightCalculatorWorksSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="how-adult-height-calculator-works">How the Adult Height Calculator Works</h2>
      <p>
        Modern height prediction calculators use several scientific approaches to estimate a child's adult height. The most common methods include:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Mid-Parental Height Formula</h3>
      <p>
        The foundation of most height predictors is the mid-parental height formula, a time-tested method developed by pediatric endocrinologists. This approach calculates a child's genetic height potential based on their parents' heights:
      </p>
      
      <p className="mt-3 mb-4">
        <strong>For boys:</strong> (Father's height + Mother's height + 5 inches) ÷ 2
      </p>
      
      <p className="mb-4">
        <strong>For girls:</strong> (Father's height + Mother's height − 5 inches) ÷ 2
      </p>
      
      <p>
        This formula accounts for the typical height difference between males and females and provides a target height. Most children (about 95%) will reach an adult height within 4 inches (10 cm) of this calculated target.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Current Height and Growth Percentiles</h3>
      <p>
        Modern calculators enhance the mid-parental method by incorporating:
      </p>
      
      <p className="mt-3 mb-4">
        <strong>Current height percentile:</strong> Children tend to follow their established growth curve. A child consistently in the 75th percentile is likely to remain near that percentile through adulthood.
      </p>
      
      <p className="mb-4">
        <strong>Age and gender:</strong> These factors help place measurements in proper context since growth patterns differ significantly between boys and girls.
      </p>

      {/* Image with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Parent measuring child's height at home" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Your child's growth curve is more than numbers — it's a story of development, health, and potential.</p>
      </div>
    </section>
  );
};

export default HeightCalculatorWorksSection;
