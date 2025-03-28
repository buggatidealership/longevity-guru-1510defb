
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ResourcePageFooterProps {
  handleLinkClick?: () => void;
}

const ResourcePageFooter: React.FC<ResourcePageFooterProps> = ({ handleLinkClick }) => {
  const currentYear = new Date().getFullYear();
  
  // Popular calculators for the footer
  const popularCalculators = [
    { name: "Life Expectancy", path: "/life-expectancy-calculator" },
    { name: "TDEE Calculator", path: "/tdee-calculator" },
    { name: "Retirement Savings", path: "/retirement-savings-calculator" },
    { name: "Ozempic Weight Loss", path: "/ozempic-weight-loss-calculator" },
  ];
  
  // Popular resources for the footer
  const popularResources = [
    { name: "How to Increase Life Expectancy", path: "/resources/how-to-increase-life-expectancy" },
    { name: "Alcohol and Longevity", path: "/resources/alcohol-and-longevity" },
    { name: "TDEE Guide", path: "/resources/how-to-calculate-your-tdee" },
    { name: "Macronutrient Guide", path: "/resources/macronutrient-calculator-guide" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Longevity Calculator</h3>
            <p className="text-sm text-gray-600 mb-4">
              Free online calculators and evidence-based resources for health assessment, lifestyle optimization, and longevity planning.
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} Longevity Calculator.<br />
              For educational purposes only.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Calculators</h3>
            <ul className="space-y-2">
              {popularCalculators.map((calculator) => (
                <li key={calculator.path}>
                  <Link 
                    to={calculator.path}
                    onClick={handleLinkClick}
                    className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
                  >
                    <span>{calculator.name}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/"
                  onClick={handleLinkClick}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View All Calculators
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {popularResources.map((resource) => (
                <li key={resource.path}>
                  <Link 
                    to={resource.path}
                    onClick={handleLinkClick}
                    className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
                  >
                    <span>{resource.name}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/resources"
                  onClick={handleLinkClick}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View All Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  onClick={handleLinkClick}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources"
                  onClick={handleLinkClick}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy"
                  onClick={handleLinkClick}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  onClick={handleLinkClick}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="https://longevitycalculator.xyz/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ResourcePageFooter;
