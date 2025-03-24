import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import MetabolismCalculator from '@/components/MetabolismCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const MetabolismCalculatorPage = () => {
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
        title="Metabolism Calculator | BMR & Daily Calorie Needs"
        description="Calculate your Basal Metabolic Rate (BMR) and daily calorie needs based on activity level. Free metabolism calculator for weight management and nutritional planning."
        canonicalUrl="https://longevitycalculator.xyz/metabolism"
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
          {/* Calculator section with consistent spacing */}
          <div className="w-full mb-10">
            <MetabolismCalculator />
          </div>
          
          {/* About This Calculator Section */}
          <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Metabolism Calculator: Measure Your BMR & Daily Calorie Needs</h2>
            
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
                    onClick={() => scrollToSection('metabolism-factors')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Factors Affecting Metabolism
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
                  Our <strong>Metabolism Calculator</strong> helps you determine your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). Understanding your metabolism is essential for effective weight management, nutritional planning, and overall health optimization.
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
                <h3 className="text-xl font-medium mt-6">How The Metabolism Calculator Works</h3>
                <p>
                  This calculator uses scientifically validated formulas (including Mifflin-St Jeor and Harris-Benedict equations) to estimate your Basal Metabolic Rate—the number of calories your body needs at complete rest. It then factors in your activity level to determine your Total Daily Energy Expenditure, providing a comprehensive view of your caloric needs for maintenance, weight loss, or weight gain.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Personalized Energy Needs:</strong> Receive tailored calorie recommendations based on your unique characteristics.
                  </li>
                  <li>
                    <strong>Weight Management Support:</strong> Understand your maintenance calories and appropriate targets for weight loss or gain.
                  </li>
                  <li>
                    <strong>Nutritional Planning:</strong> Use your BMR and TDEE values to develop more effective meal plans.
                  </li>
                  <li>
                    <strong>Fitness Goal Optimization:</strong> Align your nutritional intake with your specific fitness and health objectives.
                  </li>
                </ul>
              </div>
              
              <div id="metabolism-factors">
                <h3 className="text-xl font-medium mt-6">Factors Affecting Metabolism</h3>
                <p>
                  Your metabolic rate is influenced by numerous factors, many of which are reflected in our calculator:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Body Composition:</strong> Muscle tissue burns more calories at rest than fat tissue.</li>
                  <li><strong>Age:</strong> Metabolic rate typically decreases by about 2-3% per decade after age 20.</li>
                  <li><strong>Gender:</strong> Biological males generally have higher metabolic rates due to greater muscle mass.</li>
                  <li><strong>Physical Activity:</strong> Regular exercise increases calorie expenditure and can boost BMR.</li>
                  <li><strong>Hormonal Factors:</strong> Thyroid function, stress hormones, and sex hormones all influence metabolism.</li>
                  <li><strong>Genetics:</strong> Individual genetic factors can affect how efficiently your body converts food to energy.</li>
                </ul>
                
                <p className="mt-2">
                  While our calculator provides valuable estimates, metabolism can vary between individuals even with identical metrics. Use these results as a starting point and adjust based on your body's actual response.
                </p>
              </div>
              
              {/* FAQ Section with Accordion */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      What's the difference between BMR and TDEE?
                    </AccordionTrigger>
                    <AccordionContent>
                      Basal Metabolic Rate (BMR) represents the calories your body needs to perform essential functions at complete rest—like breathing, circulating blood, and cell production. It's essentially your baseline calorie requirement. Total Daily Energy Expenditure (TDEE) includes your BMR plus additional calories for daily activities, from basic movements to structured exercise. Think of BMR as your body's minimum operating cost and TDEE as your total daily calorie "budget."
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      Can I increase my metabolism?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, you can influence your metabolism through several approaches: building muscle mass through strength training (muscle burns more calories than fat); high-intensity interval training (HIIT) which creates an "afterburn" effect; eating protein-rich foods (which have a higher thermic effect); staying hydrated; getting adequate sleep; reducing stress; and maintaining consistent meal timing. However, dramatic metabolism changes are difficult to achieve—most interventions result in modest improvements, typically in the 5-10% range.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How accurate are metabolic calculations?
                    </AccordionTrigger>
                    <AccordionContent>
                      Metabolic calculations are generally accurate within 10-15% for most individuals, but variations can occur due to factors not captured by formulas, such as genetics, body composition details, hormonal status, and recent dietary patterns. For greater precision, professional metabolic testing (indirect calorimetry) can measure your actual oxygen consumption and carbon dioxide production. If you find significant discrepancies between calculated estimates and your actual results, adjust your caloric intake accordingly.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      Will eating more small meals boost metabolism?
                    </AccordionTrigger>
                    <AccordionContent>
                      The idea that eating frequent small meals "stokes the metabolic fire" has been largely debunked by research. Total caloric intake and macronutrient composition matter more than meal frequency for metabolic rate. Each time you eat, you experience a small increase in energy expenditure called the thermic effect of food (TEF), but this effect is proportional to the amount of food consumed, whether in smaller frequent meals or larger infrequent ones. Focus on overall nutrition quality and appropriate portions rather than specific meal timing for metabolic benefits.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      Does metabolism slow significantly with age?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, metabolism typically declines with age, but recent research suggests this decline is more nuanced than previously thought. Metabolism remains relatively stable from ages 20 to 60, decreasing only about 0.7% per decade. The more significant drop (approximately 0.7% per year) occurs after age 60. The perceived metabolic slowdown in middle age often results from decreased activity levels and loss of muscle mass rather than aging itself. Maintaining muscle through strength training and staying physically active can significantly offset age-related metabolic decline.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
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
                  <li><Link to="/metabolism" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Metabolism Calculator</Link></li>
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

export default MetabolismCalculatorPage;
