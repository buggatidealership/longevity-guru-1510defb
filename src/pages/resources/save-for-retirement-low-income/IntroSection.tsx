
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <p className="text-lg mb-6 text-left">
      Saving for retirement on a limited income can feel like an impossible challenge. When you're stretching every dollar to cover immediate needs, setting money aside for a future decades away might seem out of reach. But despite these very real challenges, building a retirement fund on a modest income is not only possible—it's essential for your future financial security. The key lies in strategic planning, taking advantage of available programs, and making consistent, even if small, contributions. Before exploring these strategies, you might want to see where you currently stand with our comprehensive <Link to="/retirement-savings-calculator" className="text-primary hover:underline">retirement savings calculator</Link>, which can help tailor recommendations to your specific situation.
    </p>
  );
};

export default IntroSection;
