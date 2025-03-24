
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <p className="text-lg mb-6">
      Noticing a receding hairline? You're not alone. Millions of men and women experience hair loss, with genetics playing a significant role in determining your risk. While looking at family photos might give you some clues, our <Link to="/baldness-risk-calculator" className="text-primary hover:underline">Baldness Risk Calculator</Link> can help you understand your personal risk with greater precision. Male and female pattern baldness affects nearly 50% of men by age 50 and about 25% of women by age 65. The good news is that understanding your risk early can open doors to intervention options, help manage expectations, and guide lifestyle choices that may slow progression. This guide explains the science behind hair loss prediction and what you can do if you're at higher risk.
    </p>
  );
};

export default IntroSection;
