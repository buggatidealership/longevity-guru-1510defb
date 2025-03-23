
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <p className="text-lg">
        Modern science has revealed numerous ways to potentially extend both healthspan and lifespan through lifestyle interventions and emerging technologies. Today's longevity research combines insights from multiple scientific disciplines to create a comprehensive picture of what contributes to a longer, healthier life.
      </p>
      <p className="text-lg">
        This article explores evidence-based approaches for improving longevity based on current scientific understanding. These strategies range from nutrition and exercise to sleep optimization and stress management. Before implementing significant lifestyle changes, establishing your baseline with our <Link to="/life-expectancy-calculator" className="text-primary hover:underline">life expectancy calculator</Link> can help track your progress over time.
      </p>
      <p className="text-lg">
        Optimizing your potential lifespan requires a multifaceted approach that considers various health factors. Let's explore what current science suggests about extending healthy lifespan.
      </p>
    </div>
  );
};

export default IntroSection;
