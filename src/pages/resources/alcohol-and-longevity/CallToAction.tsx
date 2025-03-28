
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="mt-12 p-6 bg-gray-50 rounded-xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculate Your Personal Alcohol Impact</h2>
        
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Curious about how your drinking habits specifically affect your health and longevity? 
          Try our free calculator to get personalized insights based on your consumption patterns,
          age, and other health factors.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="flex items-center gap-2">
            <Link to="/alcohol-impact-calculator">
              <Calculator className="h-4 w-4" />
              <span>Alcohol Impact Calculator</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/life-expectancy-calculator">
              Life Expectancy Calculator
            </Link>
          </Button>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="font-semibold mb-4">More Longevity Resources</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <Link to="/tdee-calculator" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-sm mb-1">TDEE Calculator</h4>
              <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
            </Link>
            
            <Link to="/vitamin-d-calculator" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-sm mb-1">Vitamin D Calculator</h4>
              <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
            </Link>
            
            <Link to="/macronutrient-calculator" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-sm mb-1">Macro Calculator</h4>
              <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
            </Link>
            
            <Link to="/resources" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-sm mb-1">All Resources</h4>
              <span className="text-xs text-blue-500 hover:underline font-medium">View →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
