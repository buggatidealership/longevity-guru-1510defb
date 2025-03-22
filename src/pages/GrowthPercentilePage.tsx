
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import GrowthPercentileCalculator from '@/components/GrowthPercentileCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const GrowthPercentilePage = () => {
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
        title="Child Growth Percentile Calculator | Height & Weight Charts by Age"
        description="Track your child's development with our pediatric growth percentile calculator. Compare height and weight to CDC standards for children from 3 months to 10 years old. Free, accurate percentile charts."
        canonicalUrl="https://longevitycalculator.xyz/growth"
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
              <GrowthPercentileCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Child Growth Percentile Calculator</h2>
            
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
                    onClick={() => scrollToSection('understanding-percentiles')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Understanding Percentiles
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
                  Our <strong>Child Growth Percentile Calculator</strong> helps parents and caregivers understand how their child's height and weight compare to other children of the same age and gender. Based on the CDC (Centers for Disease Control and Prevention) growth charts, this tool provides insights into where your child falls on standard growth curves.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="6666666666" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="how-it-works">
                <h3 className="text-xl font-medium mt-6">How The Growth Percentile Calculator Works</h3>
                <p>
                  The calculator uses the LMS method (Lambda-Mu-Sigma) which is the statistical technique used to create standardized growth charts. By inputting your child's age, gender, height, and weight, the calculator determines which percentile your child falls into compared to the reference population of children.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Track Growth Over Time:</strong> Regular measurements help monitor your child's growth pattern and ensure they're developing consistently.
                  </li>
                  <li>
                    <strong>Early Identification:</strong> Recognize potential growth issues early when intervention may be most effective.
                  </li>
                  <li>
                    <strong>Better Understanding:</strong> Gain insight into how your child compares to standardized growth expectations.
                  </li>
                  <li>
                    <strong>Informed Discussions:</strong> Have more productive conversations with healthcare providers about your child's development.
                  </li>
                </ul>
              </div>
              
              <div id="understanding-percentiles">
                <h3 className="text-xl font-medium mt-6">Understanding Percentiles</h3>
                <p>
                  A percentile shows the relative position of your child's measurement among children of the same age and gender. For example, if your child is in the 75th percentile for height, it means they are taller than 75% of children their age and gender. Being in a high or low percentile is not necessarily better or worse – what's most important is consistency in growth over time.
                </p>
                
                <p>
                  It's important to note that growth percentiles should be interpreted by healthcare professionals within the context of your child's overall health, genetic background, and previous growth history. This calculator is designed as an educational tool, not a substitute for professional medical advice.
                </p>
                
                <p>
                  For the most accurate assessment, healthcare providers typically measure children with specialized equipment and plot measurements on detailed growth charts over multiple visits to establish growth patterns.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What is a normal percentile for a child's growth?</h4>
                    <p className="mt-2">
                      There is no single "normal" percentile for child growth. Any percentile between the 5th and 95th is generally considered within the normal range. What's most important is consistency in growth patterns over time, rather than reaching a specific percentile. A child who consistently grows along the 20th percentile may be perfectly healthy, while rapid crossing of percentile lines (up or down) might warrant medical attention.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Why is my child's height and weight in different percentiles?</h4>
                    <p className="mt-2">
                      It's completely normal for a child to be in different percentiles for height and weight. Children have unique body compositions influenced by genetics, diet, activity levels, and development timing. For example, a child may be in the 40th percentile for height but the 60th for weight, reflecting their individual body type. Consistent tracking over time is more important than comparing different measurements to each other.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">When should I be concerned about my child's growth percentile?</h4>
                    <p className="mt-2">
                      Consider consulting a healthcare provider if: your child's measurements fall below the 3rd or above the 97th percentile; there's a significant change in percentile across multiple measurements; your child crosses two or more major percentile lines in either direction; or if growth seems to have stalled. Remember that percentiles are screening tools, not diagnostic instruments, and should be interpreted by healthcare professionals.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How often should I measure my child's growth?</h4>
                    <p className="mt-2">
                      For children under 2 years old, growth measurements are typically recommended at 2, 4, 6, 9, 12, 15, 18, and 24 months as part of regular well-child visits. For children 2-5 years old, annual measurements are generally sufficient. School-age children may be measured once per year or during annual check-ups. Always follow your pediatrician's recommendations for your specific child's needs.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Can nutrition affect my child's growth percentile?</h4>
                    <p className="mt-2">
                      Yes, nutrition plays a crucial role in a child's growth and development. Inadequate caloric intake or nutritional deficiencies can slow growth, while excessive caloric consumption may lead to accelerated weight gain. A balanced diet with appropriate proteins, carbohydrates, fats, vitamins, and minerals supports optimal growth. If you have concerns about your child's nutrition or growth pattern, consult with a pediatrician or registered dietitian.
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

export default GrowthPercentilePage;
