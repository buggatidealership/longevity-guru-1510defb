
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import AdultHeightPredictorCalculator from '@/components/AdultHeightPredictorCalculator';
import { Calculator, AlertCircle, HelpCircle, ExternalLink, Book } from 'lucide-react';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const AdultHeightPredictorPage = () => {
  // Handler to scroll to top when clicking internal links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // For internal section navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto px-4">
          <div className="w-full flex justify-center">
            <div className="w-full">
              <div className="mb-6">
                <DisclaimerAlert />
              </div>
              <AdultHeightPredictorCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Adult Height Predictor</h2>
            
            {/* Table of Contents */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => scrollToSection('overview')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('accuracy')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Accuracy & Limitations
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('benefits')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Key Benefits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('why-it-matters')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Why It Matters
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div id="overview">
                <p>
                  Our <strong>Adult Height Predictor</strong> is a calculator designed to estimate potential adult height based on a baby's birth measurements. This tool uses research-based formulas from Sorensen et al. that found correlations between birth weight, birth length, and eventual adult height.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="4444444444" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="how-it-works">
                <h3 className="text-xl font-medium mt-6">How The Adult Height Predictor Works</h3>
                <p>
                  The calculator uses research-based formulas that correlate birth measurements with adult height. For males, the formula is: Adult height (cm) = 45.63 + (2.97 × birth length in cm) + (1.02 × birth weight in kg). For females: Adult height (cm) = 37.85 + (2.78 × birth length in cm) + (1.42 × birth weight in kg).
                </p>
              </div>

              <div id="accuracy">
                <h3 className="text-xl font-medium mt-6">Accuracy and Limitations</h3>
                <p>
                  According to the Sorensen et al. research, this prediction method has moderate but not perfect accuracy:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    The 95% prediction interval is approximately ±6.85 cm (2.7 inches) for males and ±6.52 cm (2.6 inches) for females, representing the statistical margin of error in either direction.
                  </li>
                  <li>
                    Birth measurements account for roughly 25-30% of the variation in adult height, as many other factors significantly impact growth.
                  </li>
                  <li>
                    Important factors not accounted for include genetic influences beyond birth size, nutrition throughout childhood, overall health, presence of chronic conditions, timing of puberty, and environmental factors during growth years.
                  </li>
                </ul>
                <p className="mt-2">
                  While this calculator provides a scientifically-based prediction using established correlations, it should be viewed as an educated estimate rather than a definitive prediction. Individual outcomes can vary considerably based on the many factors that influence growth during childhood and adolescence.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Early Height Estimation:</strong> Get an early indication of potential adult height based on birth measurements.
                  </li>
                  <li>
                    <strong>Statistical Accuracy:</strong> Calculations include prediction intervals to show the range of likely outcomes.
                  </li>
                  <li>
                    <strong>Research-Based:</strong> Formulas derived from peer-reviewed research studies on growth patterns.
                  </li>
                  <li>
                    <strong>Educational Value:</strong> Learn about the relationship between birth size and adult height.
                  </li>
                </ul>
              </div>
              
              <div id="why-it-matters">
                <h3 className="text-xl font-medium mt-6">Why Height Prediction Matters</h3>
                <p>
                  Understanding the potential relationship between birth measurements and adult height can be valuable for parents curious about their child's growth trajectory. While genetics play the largest role in determining height (accounting for 60-80% of height variation), birth measurements do show modest correlations with final adult height.
                </p>
                
                <p>
                  This calculator provides an estimate based on statistical correlations, which can be useful for educational purposes and general interest. However, it's important to remember that many factors beyond birth measurements influence a person's ultimate adult height, including nutrition, overall health, and environmental factors.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate is this adult height prediction?</h4>
                    <p className="mt-2">
                      The prediction is based on statistical correlations observed in research studies. It provides an estimate with a 95% prediction interval, meaning 95% of individuals with similar birth measurements would fall within that range. However, many factors beyond birth measurements influence final adult height, including genetics, nutrition, health conditions, and environmental factors.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Can I predict my child's adult height more accurately as they grow older?</h4>
                    <p className="mt-2">
                      Yes, height predictions become more accurate as children grow older. Methods that use a child's current height, parental heights, and bone age (determined by X-ray) at ages 2+ provide better predictions than birth measurements alone. The most accurate predictions typically come during early adolescence.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Do birth measurements have a strong influence on adult height?</h4>
                    <p className="mt-2">
                      Birth measurements show modest correlations with adult height, but they're just one factor. Research suggests that birth length has a stronger correlation than birth weight. Genetic factors, which determine approximately 60-80% of height variation, and post-birth factors like nutrition and health have larger influences on final adult height.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Can a baby's birth measurements predict future health conditions?</h4>
                    <p className="mt-2">
                      Some studies have found associations between birth measurements and certain health outcomes later in life. For example, both very low and very high birth weights have been associated with different health risks. However, these are statistical associations rather than predictions for individuals, and many other factors influence health outcomes.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What factors have the greatest influence on a child's ultimate adult height?</h4>
                    <p className="mt-2">
                      Genetics is the primary determinant of height, accounting for 60-80% of height variation. Parental heights are strong predictors of a child's potential height. Other important factors include nutrition, overall health, presence of medical conditions, hormone levels (especially growth hormone and thyroid hormone), and environmental factors during development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
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
        </main>
        
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
                  <li><Link to="/adultheight" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Adult Height Predictor</Link></li>
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
      </div>
    </>
  );
};

export default AdultHeightPredictorPage;
