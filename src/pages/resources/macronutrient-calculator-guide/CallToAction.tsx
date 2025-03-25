
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="my-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Calculate Your Personal Macros?</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          Use our free Macronutrient Calculator to determine your ideal daily intake of protein, carbs, and fat based on your body metrics and fitness goals.
        </p>
        
        <div className="flex justify-center">
          <Button asChild size="lg" className="group">
            <Link to="/macronutrient-calculator" className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate My Macros Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <p className="mt-4 text-sm text-gray-600">
          Free, instant results. No registration required.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
