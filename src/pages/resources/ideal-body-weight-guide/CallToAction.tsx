
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 my-10 text-left">
      <h2 className="text-2xl font-bold tracking-tight mb-3">Try Our Ideal Body Weight Calculator</h2>
      
      <p className="text-gray-700 mb-6">
        Get a comprehensive assessment using multiple formulas and learn how your results compare to different health metrics. Our calculator provides context and explanation—not just numbers.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="gap-2">
          <Link to="/ideal-body-weight-calculator">
            <Calculator className="h-5 w-5" />
            Calculate Your Ideal Weight
          </Link>
        </Button>
        
        <Button asChild variant="outline" size="lg">
          <Link to="/bmi-calculator">
            Compare With BMI Calculator
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
