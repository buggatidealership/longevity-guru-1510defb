
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Begin Your Biological Age Reversal Journey</h2>
      <p className="mb-4">Establish your current biological baseline using our scientifically-validated calculator. Track your progress as you implement protocol components.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/life-expectancy-calculator">Calculate Your Biological Baseline Now</Link>
      </Button>
    </div>
  );
};

export default CallToAction;
