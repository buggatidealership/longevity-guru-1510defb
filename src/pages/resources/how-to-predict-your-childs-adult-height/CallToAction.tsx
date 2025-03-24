
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4" id="use-our-calculator">Try Our Child Height Predictor Calculator</h2>
      <p className="mb-4">
        Ready to estimate your child's potential adult height using science-backed methods? Our free Child Height 
        Predictor Calculator incorporates the mid-parental height formula and other key factors to give you a 
        research-based estimate of your child's future height.
      </p>
      <p className="mb-6">
        Simply enter your child's current measurements, along with both parents' heights, and our calculator will 
        provide an estimated adult height range based on proven scientific formulas. Remember that while no prediction 
        is perfect, this tool offers valuable insights to help you support your child's healthy development.
      </p>
      <div className="flex justify-center">
        <Button asChild size="lg" className="font-medium">
          <Link to="/adult-height-predictor-calculator">
            Use Our Child Height Predictor Calculator
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
