
import React from 'react';

const CalculatorUsageSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4" id="using-the-calculator">How to Use the Breast Implant Size Calculator</h2>
      <p className="mb-4">
        Our calculator uses a combination of anatomical measurements and research-based algorithms to suggest implant size ranges that may work well for your body. Follow these steps to get the most accurate results:
      </p>
      
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong>Enter your basic measurements:</strong> Height, weight, and chest/underbust measurement provide the calculator with your frame size reference.
        </li>
        <li>
          <strong>Select your current cup size:</strong> This helps establish your starting point and existing breast tissue.
        </li>
        <li>
          <strong>Choose your desired increase:</strong> Rather than choosing a specific cup size, indicate how many cup sizes you'd like to increase.
        </li>
        <li>
          <strong>Input additional preferences:</strong> Frame size, geographical region (for cost estimates), and implant material preference.
        </li>
        <li>
          <strong>Review your results:</strong> The calculator will provide a suggested implant size range in cubic centimeters (cc), estimated cup size, and approximate cost.
        </li>
      </ol>
      
      <p className="mb-6">
        Remember that this calculator provides estimates only, and your surgeon may recommend different sizes based on your in-person examination, chest wall anatomy, and specific goals. Use these results as a starting point for your consultation, not as a final decision.
      </p>
      
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1200&q=80" 
          alt="Doctor explaining breast implant sizing options to patient" 
          className="w-full rounded-xl shadow-md object-cover"
        />
        <p className="text-sm text-gray-500 italic mt-2 text-center">
          Your surgeon will help you understand how different implant sizes will work with your unique anatomy.
        </p>
      </div>
    </section>
  );
};

export default CalculatorUsageSection;
