
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <p className="text-lg mb-6">
      The quest for a longer, healthier life has fascinated humanity for centuries. Today, modern science offers concrete evidence that specific lifestyle choices can significantly extend your lifespan. With growing research in longevity science, we now understand the powerful impact of daily habits on our health span. Before diving into these life-extending strategies, you might want to check your current <Link to="/life-expectancy-calculator" className="text-primary hover:underline">life expectancy baseline</Link> to understand how these changes could personally affect your projected lifespan.
    </p>
  );
};

export default IntroSection;
