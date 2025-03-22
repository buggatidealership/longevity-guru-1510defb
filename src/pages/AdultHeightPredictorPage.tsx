import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import AdultHeightPredictorCalculator from '@/components/AdultHeightPredictorCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

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
        title="Child to Adult Height Predictor | Future Height Calculator"
        description="Predict your child's adult height with our scientifically-based calculator. Uses parent heights, current measurements, and growth patterns to forecast future adult stature."
        canonicalUrl="https://longevitycalculator.xyz/adultheight"
        keywords="adult height predictor, child height calculator, final height estimator, genetic height potential, growth prediction, pediatric height forecast"
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
                    How The Calculator Works
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
                    onClick={() => scrollToSection('factors')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Factors Affecting Adult Height
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
                  Our <strong>Adult Height Predictor</strong> helps parents estimate their child's potential adult height based on scientifically validated methods. This calculator combines parental heights, current child measurements, and established growth patterns to provide a reasonable prediction range for your child's eventual adult stature.
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
                  This calculator employs multiple scientifically validated methods for height prediction, including the Khamis-Roche method, mid-parental height calculation, and bone age correlations. By analyzing factors such as the child's current height, weight, age, gender, and parental heights, our algorithm generates a predicted adult height range with statistical confidence intervals.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Scientific Approach:</strong> Utilizes evidence-based formulas developed through longitudinal growth studies.
                  </li>
                  <li>
                    <strong>Multiple Methods:</strong> Combines different prediction techniques for a more comprehensive analysis.
                  </li>
                  <li>
                    <strong>Growth Tracking:</strong> Helps parents understand if their child's growth is following expected patterns.
                  </li>
                  <li>
                    <strong>Early Identification:</strong> May help identify potential growth concerns that could benefit from medical evaluation.
                  </li>
                </ul>
              </div>
              
              <div id="factors">
                <h3 className="text-xl font-medium mt-6">Factors Affecting Adult Height</h3>
                <p>
                  While genetics plays a primary role in determining adult height (accounting for approximately 60-80% of the variation), several other factors influence a child's growth potential and ultimate adult height:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Nutrition:</strong> Adequate protein, calories, vitamins, and minerals are essential for optimal growth.</li>
                  <li><strong>Sleep:</strong> Growth hormone is primarily released during deep sleep.</li>
                  <li><strong>Physical Activity:</strong> Regular exercise promotes healthy bone and muscle development.</li>
                  <li><strong>Overall Health:</strong> Chronic illnesses and certain medications can affect growth patterns.</li>
                  <li><strong>Hormones:</strong> Growth hormone, thyroid hormone, and sex hormones all influence growth.</li>
                </ul>
                
                <p className="mt-2">
                  It's important to note that our calculator provides estimates based on typical growth patterns. Individual growth can vary based on these and other factors not captured in the prediction models.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate are adult height predictions?</h4>
                    <p className="mt-2">
                      Adult height predictions typically have a margin of error of 1-3 inches (2.5-7.6 cm). Prediction accuracy improves as children get closer to puberty. The most reliable predictions come from combining multiple methods and considering the child's current growth percentiles, bone age (if available), and parental heights. Our calculator provides both a predicted value and a statistical range to acknowledge this inherent variability in growth prediction.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">When do children stop growing taller?</h4>
                    <p className="mt-2">
                      Girls typically reach their final adult height between ages 14-16, about 1-2 years after menarche (first menstrual period). Boys usually continue growing until ages 16-18, though some may grow into their early 20s. Growth plates (epiphyses) in the long bones close under the influence of sex hormones during puberty, making further height increase impossible. Growth velocity peaks during adolescent growth spurts: around age 12 for girls and age 14 for boys.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Can nutrition or supplements increase a child's height?</h4>
                    <p className="mt-2">
                      Proper nutrition is essential for children to reach their genetic height potential, but supplements or special diets won't make a child grow taller than their genetic programming allows. Ensuring adequate protein, calories, calcium, vitamin D, and other nutrients helps optimize growth. However, except in cases of malnutrition or specific deficiencies, supplements generally don't increase height beyond genetic potential. Focus instead on providing a balanced diet with sufficient protein, fruits, vegetables, and dairy products to support healthy growth.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What if my child is much shorter or taller than predicted?</h4>
                    <p className="mt-2">
                      If your child's height consistently deviates significantly from predictions or if their growth rate changes dramatically, consult a pediatrician. Concerning signs include: dropping percentiles on growth charts; growing less than 2 inches (5 cm) per year during childhood; puberty occurring very early or late; or height significantly below what's expected based on parental heights. Most variations are normal variations, but occasionally, underlying medical conditions like growth hormone deficiency or thyroid disorders may be present.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Do late bloomers eventually catch up in height?</h4>
                    <p className="mt-2">
                      Yes, many "late bloomers" (children with constitutional growth delay) eventually catch up to their peers in height. These children often have delayed bone age and puberty, growing slowly during childhood but continuing to grow later than their peers. They may experience growth spurts in their late teens or even early twenties. If you suspect your child is a late bloomer, tracking their growth pattern and bone age (which can be assessed by a pediatric endocrinologist) can provide reassurance and help predict their eventual adult height.
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
      </div>
    </>
  );
};

export default AdultHeightPredictorPage;
