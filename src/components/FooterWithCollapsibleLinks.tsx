
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Calculator, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FooterProps {
  handleLinkClick?: () => void;
}

const FooterWithCollapsibleLinks: React.FC<FooterProps> = ({ handleLinkClick }) => {
  // All calculator pages
  const calculatorLinks = [
    { path: "/life-expectancy-calculator", name: "Life Expectancy Calculator" },
    { path: "/retirement-savings-calculator", name: "Retirement Savings Calculator" },
    { path: "/female-fertility-calculator", name: "Female Fertility Calculator" },
    { path: "/child-growth-percentile-calculator", name: "Child Growth Percentile Calculator" },
    { path: "/adult-height-predictor-calculator", name: "Adult Height Predictor" },
    { path: "/metabolism-calculator", name: "Metabolism Calculator" },
    { path: "/breast-implant-calculator", name: "Breast Implant Size Calculator" },
    { path: "/botox-dosage-calculator", name: "Botox Dosage Calculator" },
    { path: "/alcohol-impact-calculator", name: "Alcohol Impact Calculator" },
    { path: "/tdee-calculator", name: "TDEE Calculator" },
    { path: "/macronutrient-calculator", name: "Macronutrient Calculator" },
    { path: "/vitamin-d-calculator", name: "Vitamin D Calculator" },
    { path: "/creatine-water-calculator", name: "Creatine Water Calculator" },
    { path: "/ozempic-weight-loss-calculator", name: "Ozempic Weight Loss Calculator" },
  ];
  
  // Resource pages
  const resourceLinks = [
    { path: "/resources/how-to-calculate-your-tdee", name: "TDEE Guide" },
    { path: "/resources/breast-implant-size-guide", name: "Breast Implant Guide" },
    { path: "/resources/ozempic-weight-loss-calculator-guide", name: "Ozempic Guide" },
    { path: "/resources/alcohol-and-longevity", name: "Alcohol and Longevity" },
    { path: "/resources/how-to-predict-your-childs-adult-height", name: "Child Height Prediction" },
    { path: "/resources/how-to-increase-life-expectancy", name: "Increase Life Expectancy" },
    { path: "/resources/macronutrient-calculator-guide", name: "Macronutrient Guide" },
  ];
  
  // Group calculators into two columns for better readability
  const calculatorGroups = [
    calculatorLinks.slice(0, Math.ceil(calculatorLinks.length / 2)),
    calculatorLinks.slice(Math.ceil(calculatorLinks.length / 2))
  ];

  return (
    <footer className="max-w-6xl mx-auto px-4 py-6">
      <div className="border-t pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Main Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/resources" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Resources</Link></li>
              <li><Link to="/privacy" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
            
            <div className="md:hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="calculators" className="border-none">
                  <AccordionTrigger className="py-1 px-0 text-sm text-gray-600 hover:text-primary">
                    <span className="flex items-center">
                      <Calculator className="h-3.5 w-3.5 mr-1 opacity-70" />
                      Calculators
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-1 pl-1 space-y-1">
                      {calculatorLinks.map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path} 
                          onClick={handleLinkClick}
                          className="block text-sm text-gray-600 hover:text-primary py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* For SEO: Always visible on desktop and for screen readers, collapsible on mobile */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {calculatorGroups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    {group.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={handleLinkClick}
                        className="block text-sm text-gray-600 hover:text-primary py-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Resources</h3>
            
            <div className="md:hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="resources" className="border-none">
                  <AccordionTrigger className="py-1 px-0 text-sm text-gray-600 hover:text-primary">
                    <span className="flex items-center">
                      <FileText className="h-3.5 w-3.5 mr-1 opacity-70" />
                      Resource Articles
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-1 pl-1 space-y-1">
                      {resourceLinks.map((link) => (
                        <Link 
                          key={link.path} 
                          to={link.path} 
                          onClick={handleLinkClick}
                          className="block text-sm text-gray-600 hover:text-primary py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* For SEO: Always visible on desktop and for screen readers, collapsible on mobile */}
            <div className="hidden md:block space-y-1">
              {resourceLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-600 hover:text-primary py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
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

export default FooterWithCollapsibleLinks;
