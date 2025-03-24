
import React from 'react';
import { Link } from 'react-router-dom';

const ResourcePageFooter: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-6">
      <div className="border-t pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/life-expectancy-calculator" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
              <li><Link to="/retirement-savings-calculator" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
              <li><Link to="/female-fertility-calculator" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
              <li><Link to="/resources" className="text-sm text-gray-600 hover:text-primary">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Longevity Calculator. For educational purposes only.</p>
        <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
          <a href="https://longevitycalculator.xyz/sitemap.xml" className="hover:text-gray-700" target="_blank" rel="noopener noreferrer">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default ResourcePageFooter;
