
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Ready to take control of your metabolic health?</h2>
      <p className="mb-4">Use our Metabolism Calculator to get your estimated daily energy burn — based on age, weight, height, and activity level.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/metabolism-calculator" className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate Your Metabolism Now
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
