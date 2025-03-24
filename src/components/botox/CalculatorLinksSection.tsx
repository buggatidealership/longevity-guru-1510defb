
import React from 'react';
import { Link } from 'react-router-dom';

interface CalculatorLinksSectionProps {
  handleLinkClick: () => void;
}

const CalculatorLinksSection: React.FC<CalculatorLinksSectionProps> = ({ handleLinkClick }) => {
  return (
    <div className="mt-8 mb-6 p-4 bg-white rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Free Longevity Calculators</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <Link to="/retirementsavings" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
          <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
        </Link>
        
        <Link to="/lifespan" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
          <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
        </Link>
        
        <Link to="/fertility" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
          <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
        </Link>
        
        <Link to="/growth" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-sm mb-1">Child Growth</h3>
          <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
        </Link>
      </div>
    </div>
  );
};

export default CalculatorLinksSection;
