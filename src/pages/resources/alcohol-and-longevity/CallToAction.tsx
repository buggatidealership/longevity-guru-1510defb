
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="mb-16">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-3">Calculate Your Alcohol's Impact on Longevity</h2>
          <p className="text-lg opacity-90">
            Get a personalized analysis of how your drinking habits might be affecting your lifespan based on scientific research.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link
            to="/alcohol-lifespan-calculator"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Try the Alcohol Impact Calculator
          </Link>
        </div>
        
        <div className="mt-6 text-center text-sm opacity-75">
          <p>
            Our evidence-based calculator analyzes your consumption patterns and provides a clear picture of potential health impacts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
