
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">See how much you can save based on your monthly income</h2>
      <p className="mb-4">Our interactive calculator helps you create a personalized retirement plan that works with your income level and financial goals.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/retirement-savings-calculator" className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate Your Retirement Savings Now
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
