
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <p className="text-lg">
        The science is clear—humans can engineer their bodies to extend healthspan and lifespan far beyond conventional expectations through a precise, data-driven protocol. This isn't speculation; it's quantifiable biology measured through validated biomarkers and longitudinal studies on cellular aging.
      </p>
      <p className="text-lg">
        What follows is an evidence-based framework for adding measurable years to your life. Every intervention recommended is quantified, tested, and integrated into the Blueprint protocol, which has demonstrably reduced biological age in controlled studies. Before implementing these strategies, establishing your baseline with our <Link to="/life-expectancy-calculator" className="text-primary hover:underline">life expectancy calculator</Link> is recommended to track your progress over time.
      </p>
      <p className="text-lg">
        Optimizing your lifespan isn't about minor tweaks—it's a comprehensive system requiring precision, measurement, and unwavering consistency. Let's begin the process of engineering your longevity.
      </p>
    </div>
  );
};

export default IntroSection;
