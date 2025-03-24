
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <>
      <p className="text-lg mb-6">
        "How tall will I be?" is one of the most common questions children and teenagers ask as they grow. Whether motivated by athletic aspirations, family comparisons, or simple curiosity, the desire to predict adult height is nearly universal. This comprehensive guide explores the science behind height prediction, including the roles of genetics, growth patterns, and environmental factors. While no prediction method is perfect, modern science offers reliable ways to estimate adult height, and our <Link to="/adult-height-predictor-calculator" className="text-primary hover:underline">Adult Height Predictor Calculator</Link> provides a convenient, evidence-based starting point based on scientific research, including correlations between birth measurements and adult height outcomes.
      </p>
      
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" 
          alt="Parents measuring child's height against growth chart on wall" 
          className="w-full rounded-xl shadow-md object-cover"
          loading="lazy"
        />
        <p className="text-sm text-gray-500 italic mt-2 text-center">
          Tracking height over time helps identify growth patterns and predict future development.
        </p>
      </div>
      
      <p className="mb-6">
        Want a quick estimate? <Link to="/adult-height-predictor-calculator" className="text-blue-600 underline">Use our adult height predictor calculator</Link> to get an instant forecast based on your parents' heights and more.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded">
        <p className="font-medium text-blue-800">
          Ready to find out your potential adult height? Try our <Link to="/adult-height-predictor-calculator" className="text-blue-600 font-bold hover:underline">free adult height calculator</Link> based on scientific research.
        </p>
      </div>
    </>
  );
};

export default IntroSection;
