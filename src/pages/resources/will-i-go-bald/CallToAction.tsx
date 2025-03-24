
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Ready to discover your personal baldness risk?</h2>
      <p className="mb-4">Our scientific calculator analyzes your family history, age, and current hair status to estimate your hair loss trajectory and timeline.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/baldness-risk-calculator" className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate Your Baldness Risk Now
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
