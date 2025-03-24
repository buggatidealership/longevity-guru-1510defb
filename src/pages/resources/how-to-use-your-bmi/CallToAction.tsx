
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Ready to find out your BMI?</h2>
      <p className="mb-4">Use our BMI Calculator to get your Body Mass Index score and see where you fall on the standard scale.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/bmi-calculator" className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate Your BMI Now
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
