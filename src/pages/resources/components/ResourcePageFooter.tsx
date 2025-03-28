
import React from 'react';
import { Link } from 'react-router-dom';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';

interface ResourcePageFooterProps {
  handleLinkClick?: () => void;
  relatedCalculators?: Array<{
    name: string;
    path: string;
    description?: string;
  }>;
  relatedArticles?: Array<{
    title: string;
    path: string;
    description?: string;
  }>;
}

const ResourcePageFooter: React.FC<ResourcePageFooterProps> = ({ 
  handleLinkClick, 
  relatedCalculators = [
    { name: "Vitamin D Calculator", path: "/vitamin-d-calculator", description: "Assess your vitamin D needs based on lifestyle factors" },
    { name: "TDEE Calculator", path: "/tdee-calculator", description: "Calculate your total daily energy expenditure" },
    { name: "Metabolism Calculator", path: "/metabolism-calculator", description: "Understand your metabolic rate and caloric needs" }
  ],
  relatedArticles = [
    { title: "How to Boost Your Metabolism", path: "/resources/how-to-boost-your-metabolism", description: "Learn science-backed strategies to increase your metabolic rate" },
    { title: "Understanding BMI", path: "/resources/how-to-use-your-bmi", description: "Learn what your BMI means for your health" }
  ]
}) => {
  return (
    <div className="mt-12 mb-8">
      {/* Related Calculators */}
      {relatedCalculators && relatedCalculators.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Related Calculators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCalculators.map((calc, index) => (
              <Link 
                key={index} 
                to={calc.path} 
                onClick={handleLinkClick}
                className="block p-4 border rounded-lg hover:border-primary hover:shadow-sm transition-all"
              >
                <h4 className="font-medium text-gray-800">{calc.name}</h4>
                {calc.description && (
                  <p className="text-sm text-gray-600 mt-1">{calc.description}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedArticles.map((article, index) => (
              <Link 
                key={index} 
                to={article.path} 
                onClick={handleLinkClick}
                className="block p-4 border rounded-lg hover:border-primary hover:shadow-sm transition-all"
              >
                <h4 className="font-medium text-gray-800">{article.title}</h4>
                {article.description && (
                  <p className="text-sm text-gray-600 mt-1">{article.description}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default ResourcePageFooter;
