
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import AdultHeightPredictorCalculator from '@/components/AdultHeightPredictorCalculator';
import { Calculator, AlertCircle, HelpCircle, ExternalLink, BookQuestion } from 'lucide-react';

const AdultHeightPredictorPage = () => {
  return (
    <>
      <SEOHead 
        title="Adult Height Predictor | Birth Size to Adult Height Calculator"
        description="Calculate potential adult height based on a baby's birth weight and length. Free online tool based on research showing correlation between birth measurements and final adult height."
        canonicalUrl="https://longevitycalculator.xyz/adultheight"
        keywords="adult height calculator, birth size adult height, height prediction tool, baby height calculator, height correlation, birth measurements, height prediction algorithm"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <AdultHeightPredictorCalculator />
            
            <div className="mt-10 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">About This Calculator</h2>
              
              <nav className="mb-6 p-3 bg-gray-50 rounded-md">
                <h3 className="text-sm font-medium mb-2">Table of Contents</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#overview" className="text-blue-600 hover:underline">Overview</a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="text-blue-600 hover:underline">How It Works</a>
                  </li>
                  <li>
                    <a href="#benefits" className="text-blue-600 hover:underline">Benefits</a>
                  </li>
                  <li>
                    <a href="#why-it-matters" className="text-blue-600 hover:underline">Why It Matters</a>
                  </li>
                  <li>
                    <a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a>
                  </li>
                </ul>
              </nav>
              
              <section id="overview" className="mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Overview
                </h3>
                <p className="text-gray-700 mb-3">
                  The Adult Height Predictor Calculator is a tool that estimates a child's potential adult height based on their birth measurements. It uses research-based formulas from Sorensen et al. that found correlations between birth weight, birth length, and eventual adult height.
                </p>
                <p className="text-gray-700">
                  This calculator provides a statistical estimate with a prediction interval to account for natural variations in growth patterns. It's important to note that while birth measurements do show correlations with adult height, many other factors like genetics, nutrition, and environment also play significant roles in determining a person's final height.
                </p>
              </section>
              
              <section id="how-it-works" className="mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-green-600" />
                  How It Works
                </h3>
                <p className="text-gray-700 mb-3">
                  The calculator uses the following research-based formulas:
                </p>
                <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-2">
                  <li>
                    <strong>For males:</strong> Adult height (cm) = 45.63 + (2.97 × birth length in cm) + (1.02 × birth weight in kg)
                  </li>
                  <li>
                    <strong>For females:</strong> Adult height (cm) = 37.85 + (2.78 × birth length in cm) + (1.42 × birth weight in kg)
                  </li>
                </ul>
                <p className="text-gray-700">
                  These formulas are derived from statistical analyses of birth measurements and their correlations with adult height in population studies. The calculator also provides a 95% prediction interval, which means that 95% of individuals with those birth measurements would be expected to have an adult height within that range.
                </p>
              </section>
              
              <section id="benefits" className="mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-purple-600" />
                  Benefits
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Provides an early estimate of potential adult height</li>
                  <li>Includes statistical prediction intervals to show the range of likely outcomes</li>
                  <li>Shows the correlation between birth measurements and adult height</li>
                  <li>Offers insights into growth trajectory from birth to adulthood</li>
                  <li>Easy to use with simple inputs and clear results</li>
                </ul>
              </section>
              
              <section id="why-it-matters" className="mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <ExternalLink className="h-5 w-5 mr-2 text-orange-600" />
                  Why It Matters
                </h3>
                <p className="text-gray-700 mb-3">
                  While height prediction is not an exact science, understanding the potential relationship between birth measurements and adult height can be valuable for:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Parents curious about their child's potential height</li>
                  <li>Healthcare providers monitoring growth patterns</li>
                  <li>Understanding how early development might influence later outcomes</li>
                  <li>Educational purposes about human development and growth</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  It's important to remember that this calculator provides an estimate based on statistical correlations, not a definitive prediction. Many factors beyond birth measurements influence a person's ultimate adult height.
                </p>
              </section>
              
              <section id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookQuestion className="h-5 w-5 mr-2 text-blue-600" />
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-1">How accurate is this adult height prediction?</h4>
                    <p className="text-gray-700">
                      The prediction is based on statistical correlations observed in research studies. It provides an estimate with a 95% prediction interval, meaning 95% of individuals with similar birth measurements would fall within that range. However, many factors beyond birth measurements influence final adult height, including genetics, nutrition, health conditions, and environmental factors.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-1">Can I predict my child's adult height more accurately as they grow older?</h4>
                    <p className="text-gray-700">
                      Yes, height predictions become more accurate as children grow older. Methods that use a child's current height, parental heights, and bone age (determined by X-ray) at ages 2+ provide better predictions than birth measurements alone. The most accurate predictions typically come during early adolescence.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-1">Do birth measurements have a strong influence on adult height?</h4>
                    <p className="text-gray-700">
                      Birth measurements show modest correlations with adult height, but they're just one factor. Research suggests that birth length has a stronger correlation than birth weight. Genetic factors, which determine approximately 60-80% of height variation, and post-birth factors like nutrition and health have larger influences on final adult height.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-1">Can a baby's birth measurements predict future health conditions?</h4>
                    <p className="text-gray-700">
                      Some studies have found associations between birth measurements and certain health outcomes later in life. For example, both very low and very high birth weights have been associated with different health risks. However, these are statistical associations rather than predictions for individuals, and many other factors influence health outcomes.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-1">What factors have the greatest influence on a child's ultimate adult height?</h4>
                    <p className="text-gray-700">
                      Genetics is the primary determinant of height, accounting for 60-80% of height variation. Parental heights are strong predictors of a child's potential height. Other important factors include nutrition, overall health, presence of medical conditions, hormone levels (especially growth hormone and thyroid hormone), and environmental factors during development.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          <div className="my-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Try Our Other Calculators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/lifespan" className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <Calculator className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <div className="font-medium">Life Expectancy Calculator</div>
              </Link>
              <Link to="/retirementsavings" className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <Calculator className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <div className="font-medium">Retirement Savings Calculator</div>
              </Link>
              <Link to="/fertility" className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <Calculator className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <div className="font-medium">Female Fertility Calculator</div>
              </Link>
              <Link to="/growth" className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <Calculator className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <div className="font-medium">Growth Percentile Calculator</div>
              </Link>
            </div>
          </div>
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="rectangle"
              responsive={true}
            />
          </div>
        </main>
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
                  <li><Link to="/lifespan" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirementsavings" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/fertility" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/growth" className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
                  <li><Link to="/adultheight" className="text-sm text-gray-600 hover:text-primary">Adult Height Predictor</Link></li>
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
      </div>
    </>
  );
};

export default AdultHeightPredictorPage;
