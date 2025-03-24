
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-4">Take Control of Your Health Journey</h2>
      <p className="mb-6">
        Understanding your BMI is just one step toward comprehensive health awareness. Use our tools to gain deeper insights and track your progress over time.
      </p>
      
      <div className="mx-auto max-w-md">
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Check Your Metabolism</h3>
          <p className="text-muted-foreground mb-4">
            Discover your Basal Metabolic Rate (BMR) and daily calorie needs. Understanding your metabolism is crucial for effective weight management.
          </p>
          <Button asChild variant="outline" className="w-full justify-between">
            <Link to="/metabolism-calculator">
              Use Metabolism Calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-3">
          Remember that true health encompasses more than numbers on a scale. Focus on sustainable habits, overall wellbeing, and consulting with healthcare professionals for personalized guidance.
        </p>
        <Button asChild variant="ghost" size="sm">
          <Link to="/">
            Explore All Health Calculators <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
