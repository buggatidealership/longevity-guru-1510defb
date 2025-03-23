
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <p className="text-lg mb-6">
      Planning for retirement can feel overwhelming, with countless variables to consider and an uncertain future ahead. Yet this essential financial milestone requires thoughtful preparation to ensure your later years are comfortable and secure. Whether you're just starting your career or approaching retirement age, knowing exactly how much to save is critical. Before exploring the specifics, you might want to check our <Link to="/retirement-savings-calculator" className="text-primary hover:underline">retirement savings calculator</Link> to get a personalized estimate based on your current financial situation.
    </p>
  );
};

export default IntroSection;
