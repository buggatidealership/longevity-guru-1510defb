
import React from 'react';
import { Link } from 'react-router-dom';

interface BotoxPageFooterProps {
  handleLinkClick: () => void;
}

const BotoxPageFooter: React.FC<BotoxPageFooterProps> = ({ handleLinkClick }) => {
  return (
    <footer className="max-w-6xl mx-auto px-4 py-6">
      <div className="border-t pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
            <ul className="space-y-2">
              <li><Link to="/lifespan" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
              <li><Link to="/retirementsavings" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
              <li><Link to="/fertility" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
              <li><Link to="/growth" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
              <li><Link to="/breastimplant" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Breast Implant Size Calculator</Link></li>
              <li><Link to="/botox" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Botox Dosage Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
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

export default BotoxPageFooter;
