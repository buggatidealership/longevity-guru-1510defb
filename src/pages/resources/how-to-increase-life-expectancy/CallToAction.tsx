
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Curious about your current life expectancy?</h2>
      <p className="mb-4">Based on your current habits and health status, our science-backed calculator can estimate your potential lifespan.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/life-expectancy-calculator">Calculate Your Life Expectancy Now</Link>
      </Button>
    </div>
  );
};

export default CallToAction;
