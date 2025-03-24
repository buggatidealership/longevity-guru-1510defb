
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const CalculatorSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="using-calculator">Using the Adult Height Calculator</h2>
      <p className="mb-4">
        Our <Link to="/adult-height-predictor-calculator" className="text-primary hover:underline">Adult Height Predictor Calculator</Link> offers a science-based approach to estimating future adult height for children and adolescents, based on birth measurements and sex.
      </p>

      <div className="flex gap-3 items-center bg-primary/10 p-4 rounded-lg mb-6">
        <Calculator className="h-6 w-6 text-primary flex-shrink-0" />
        <p className="font-medium">
          <Link to="/adult-height-predictor-calculator" className="text-primary hover:underline">Try our Adult Height Predictor Calculator</Link> to get a personalized height estimate based on birth measurements.
        </p>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">How Accurate Are the Results?</h3>
      <p className="mb-4">
        Our calculator uses validated statistical models from peer-reviewed research to predict adult height based on birth measurements, particularly the Sorensen method. Like all prediction methods, it provides an estimate with a confidence interval rather than an exact guarantee.
      </p>
      <p className="mb-4">
        Research shows that birth measurements correlate with adult height with reasonable accuracy—typically within 6-7 cm (about 2.5 inches) for 95% of individuals. The calculator provides this prediction interval so you can understand the range of likely outcomes.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Limitations to Consider</h3>
      <p className="mb-4">
        When using any height prediction method, keep these limitations in mind:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p>No prediction method is 100% accurate due to the complex nature of growth</p>
        <p>Environmental factors during childhood and adolescence can influence final height</p>
        <p>Medical conditions affecting growth may not be accounted for in general prediction models</p>
        <p>Predictions work best for populations similar to those in the original research studies</p>
      </div>
      <p className="mb-4">
        For the most comprehensive height assessment, especially if there are concerns about growth, consult with a pediatrician or pediatric endocrinologist who can evaluate multiple factors and track growth over time.
      </p>
    </>
  );
};

export default CalculatorSection;
