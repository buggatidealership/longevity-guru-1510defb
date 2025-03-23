
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-xl font-semibold mb-3">Establish Your Biological Baseline With Precision</h2>
      <p className="mb-4">Quantify your current biological age markers using our scientifically-validated calculator. Track biomarker progression as you implement protocol components with systematic measurement.</p>
      <Button asChild size="lg" className="font-medium">
        <Link to="/life-expectancy-calculator">Calculate Your Biological Metrics Now</Link>
      </Button>
    </div>
  );
};

export default CallToAction;
