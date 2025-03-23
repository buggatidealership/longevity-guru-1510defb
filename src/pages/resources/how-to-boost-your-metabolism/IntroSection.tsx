
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <p className="text-lg mb-6">
      The internet is full of confusing and often contradictory advice on how to boost your metabolism—from eating spicy foods to drinking ice water or following elaborate supplement regimens. It's hard to separate fact from fiction. This science-backed guide cuts through the noise to explain what actually works to increase your metabolic rate, based on peer-reviewed research. For personalized insights about your daily calorie burn, try our <Link to="/metabolism-calculator" className="text-primary hover:underline">Metabolism Calculator</Link> which estimates how much energy your body needs based on your specific characteristics.
    </p>
  );
};

export default IntroSection;
