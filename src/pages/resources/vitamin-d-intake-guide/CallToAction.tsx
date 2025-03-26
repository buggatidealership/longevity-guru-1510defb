
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Ideal Vitamin D Intake?</h3>
          <p className="text-lg text-muted-foreground mb-4">
            Use our free calculator to determine your personalized vitamin D requirements based on your age, location, skin tone, and lifestyle factors.
          </p>
          <Button asChild className="group" size="lg">
            <Link to="/vitamin-d-calculator" className="flex items-center">
              <Calculator className="mr-2 h-5 w-5" />
              Use the Vitamin D Calculator
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm max-w-xs">
          <h4 className="font-medium mb-2">Other Health Calculators</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/macronutrient-calculator" className="text-primary hover:underline flex items-center">
                <ArrowRight className="mr-1 h-3 w-3" />
                Macronutrient Calculator
              </Link>
            </li>
            <li>
              <Link to="/tdee-calculator" className="text-primary hover:underline flex items-center">
                <ArrowRight className="mr-1 h-3 w-3" />
                TDEE Calculator
              </Link>
            </li>
            <li>
              <Link to="/life-expectancy-calculator" className="text-primary hover:underline flex items-center">
                <ArrowRight className="mr-1 h-3 w-3" />
                Life Expectancy Calculator
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
