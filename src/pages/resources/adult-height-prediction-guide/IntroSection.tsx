
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <p className="text-lg mb-6">
      "How tall will I be?" is one of the most common questions children and teenagers ask as they grow. Whether motivated by athletic aspirations, family comparisons, or simple curiosity, the desire to predict adult height is nearly universal. This comprehensive guide explores the science behind height prediction, including the roles of genetics, growth patterns, and environmental factors. While no prediction method is perfect, modern science offers reliable ways to estimate adult height, and our <Link to="/adult-height-predictor-calculator" className="text-primary hover:underline">Adult Height Predictor Calculator</Link> provides a convenient, evidence-based starting point based on scientific research, including correlations between birth measurements and adult height outcomes.
    </p>
  );
};

export default IntroSection;
