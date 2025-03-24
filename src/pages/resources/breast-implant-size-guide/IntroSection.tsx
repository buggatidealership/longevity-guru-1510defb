
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <>
      <p className="text-lg mb-6">
        Choosing the right breast implant size is one of the most critical decisions you'll make when considering breast augmentation. Too small, and you might be disappointed with the results; too large, and you could face discomfort or complications down the road. While many women initially approach sizing with cup measurements in mind (like going from a "B to a D"), the reality is more complex—implant size is measured in cubic centimeters (cc), and the same implant volume will look entirely different on different body types. Our <Link to="/breast-implant-size-calculator" className="text-primary hover:underline">Breast Implant Size Calculator</Link> offers a personalized starting point based on your unique measurements, but understanding the science behind implant sizing will help you make the most informed decision.
      </p>
      
      <p className="mb-6">
        Want a quick estimate? <Link to="/breast-implant-size-calculator" className="text-blue-600 underline">Use our breast implant size calculator</Link> to get personalized recommendations based on your body measurements and desired outcome.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded">
        <p className="font-medium text-blue-800">
          Ready to see what breast implant size might work for you? Try our <Link to="/breast-implant-size-calculator" className="text-blue-600 font-bold hover:underline">free breast implant calculator</Link> to get a science-based estimate before your consultation.
        </p>
      </div>
    </>
  );
};

export default IntroSection;
