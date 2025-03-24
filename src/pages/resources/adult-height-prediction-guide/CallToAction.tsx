
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Curious about your potential adult height?</h2>
      <p className="mb-4">Try our free, science-based Adult Height Predictor Calculator to get a personalized estimate based on birth measurements.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/adult-height-predictor-calculator" className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate Potential Height Now
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
