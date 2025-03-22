
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import AlcoholLifespanCalculator from '@/components/AlcoholLifespanCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const AlcoholCalculatorPage = () => {
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
        title="Alcohol Impact Calculator | Estimate Drinking's Effect on Lifespan"
        description="Calculate how alcohol consumption might affect your life expectancy based on age, gender, and weekly drinking habits. Our evidence-based calculator helps quantify potential lifespan reduction from drinking patterns."
        canonicalUrl="https://longevitycalculator.xyz/alcohol"
        keywords="alcohol impact calculator, drinking lifespan calculator, alcohol mortality risk, alcohol health effects, drinking life expectancy, alcohol consumption impact, standard drinks calculator, alcohol longevity"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Alcohol Impact Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Estimate how your alcohol consumption might impact your life expectancy based on scientific research.
          </p>
          
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="6666666666" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <DisclaimerAlert 
            content="This calculator provides estimates based on population-level research and should not be considered medical advice. Individual results may vary based on genetics, lifestyle, and other health factors."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <AlcoholLifespanCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Alcohol Impact Calculator</h2>
            
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
                    onClick={() => scrollToSection('standard-drink')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    What is a Standard Drink
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
                  Our <strong>Alcohol Impact Calculator</strong> helps you understand how your drinking habits may affect your lifespan based on scientific research. By analyzing factors like age, biological sex, and weekly consumption, this tool provides an estimate of potential lifespan reduction from alcohol use.
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
                <h3 className="text-xl font-medium mt-6">How The Alcohol Impact Calculator Works</h3>
                <p>
                  The calculator uses epidemiological data to estimate the potential impact of alcohol consumption on lifespan. It considers several key factors:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Age and biological sex (different impact patterns)</li>
                  <li>Weekly alcohol consumption (number of standard drinks)</li>
                  <li>Age-specific effects (alcohol impacts younger people more significantly)</li>
                  <li>The J-curve effect (potential small benefits from very light drinking in some older adults)</li>
                  <li>Progressive risk increase with heavier drinking</li>
                </ul>
                <p className="mt-2">
                  The algorithm combines these factors to estimate the cumulative effect on potential lifespan, expressed in years and days.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Personalized Assessment:</strong> Get tailored results based on your specific age, gender, and drinking pattern.
                  </li>
                  <li>
                    <strong>Evidence-Based Insights:</strong> Our calculations are derived from peer-reviewed research on alcohol mortality risks.
                  </li>
                  <li>
                    <strong>Risk Level Assessment:</strong> Understand where your drinking pattern falls on a risk scale from Minimal to Very High.
                  </li>
                  <li>
                    <strong>Informed Decisions:</strong> Make more informed choices about alcohol consumption with quantified potential impacts.
                  </li>
                </ul>
              </div>
              
              <div id="standard-drink">
                <h3 className="text-xl font-medium mt-6">What is a Standard Drink?</h3>
                <p>
                  The calculator uses the concept of a "standard drink" which contains approximately 14 grams (0.6 ounces) of pure alcohol. Here's what counts as one standard drink:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>12 ounces of regular beer (about 5% alcohol)</li>
                  <li>5 ounces of wine (about 12% alcohol)</li>
                  <li>1.5 ounces of distilled spirits (about 40% alcohol)</li>
                </ul>
                <p className="mt-2">
                  Keep in mind that many beverages, especially craft beers and cocktails, may contain more than one standard drink.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Is all alcohol consumption harmful?</h4>
                    <p className="mt-2">
                      Current research indicates that, from a purely health perspective, the safest level of alcohol consumption is zero. While some older studies suggested potential cardiovascular benefits from light drinking (the "J-curve" effect), more recent comprehensive research finds that these benefits are smaller than previously thought and are outweighed by other health risks, even at low levels. Our calculator does include a small potential benefit for very light drinking in older adults in keeping with some research, but the most current scientific consensus is that alcohol consumption carries health risks at any level.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Why does gender affect alcohol impact?</h4>
                    <p className="mt-2">
                      Biological differences between males and females affect how alcohol is processed by the body. On average, women have a higher percentage of body fat and lower percentage of body water than men of similar size, resulting in higher blood alcohol concentrations from the same amount of alcohol. Women also generally have lower levels of alcohol dehydrogenase, an enzyme that breaks down alcohol in the stomach. These biological differences mean that alcohol typically has a more significant health impact per unit consumed in females compared to males.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate is this calculator?</h4>
                    <p className="mt-2">
                      This calculator provides estimates based on population-level research and statistical averages. Individual outcomes may vary significantly based on genetics, overall health, concurrent lifestyle factors, patterns of drinking (binge vs. spread out), diet, and other variables not captured in this simple model. The calculator is designed to provide general insights rather than precise predictions for any individual. Always consult healthcare professionals for personalized health advice.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Can I reverse the effects of past drinking?</h4>
                    <p className="mt-2">
                      The human body has remarkable regenerative capabilities. While some damage from alcohol may be permanent, research suggests that many effects can be partially reversed when people reduce or eliminate alcohol consumption. The liver, for example, can regenerate significantly within weeks or months of alcohol cessation. Cardiovascular health markers often improve within weeks or months of reducing alcohol intake. The best approach for anyone concerned about past alcohol consumption is to reduce current and future consumption, adopt other healthy lifestyle habits, and consult with healthcare providers about personalized strategies for optimizing health.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How can I use this information to improve my health?</h4>
                    <p className="mt-2">
                      This calculator can help you understand the potential long-term impact of your drinking habits on lifespan. If your results indicate a significant potential impact, consider: setting limits on weekly consumption, having several alcohol-free days each week, tracking your consumption to increase awareness, discussing your alcohol use with healthcare providers, and exploring non-alcoholic alternatives for social situations. For those with alcohol dependence, consider seeking professional support through healthcare providers, therapists, or support groups.
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
                  <li><Link to="/alcohol" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Alcohol Impact Calculator</Link></li>
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

export default AlcoholCalculatorPage;
