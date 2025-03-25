
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const CallToAction = () => {
  return (
    <div className="space-y-8 mt-12">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center md:text-left">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">
          Calculate Your TDEE Instantly
        </h3>
        <p className="text-blue-700 mb-4">
          Skip the manual calculations and get your personalized TDEE in seconds with our free calculator.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link to="/tdee-calculator">
            Try Our TDEE Calculator
          </Link>
        </Button>
      </div>
      
      <DisclaimerAlert 
        title="Health Information Disclaimer"
        content="This article is for informational purposes only and is not intended as medical advice. The calorie calculations provided are estimates and may not be suitable for everyone. Always consult with a healthcare provider before making significant changes to your diet or exercise routine, especially if you have any pre-existing conditions."
      />
    </div>
  );
};

export default CallToAction;
