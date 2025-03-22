
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
        title="Alcohol Impact on Lifespan Calculator | Drinking Health Effects"
        description="Calculate how alcohol consumption affects your life expectancy. Our free alcohol lifespan impact calculator shows potential health effects based on drinking habits, age, and gender."
        canonicalUrl="https://longevitycalculator.xyz/alcohol"
        keywords="alcohol lifespan calculator, drinking health impact, alcohol life expectancy, alcohol mortality risk, drinking habits health effects"
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
              <h1 className="text-2xl font-bold text-center sm:text-3xl mb-6">Alcohol and Lifespan Calculator</h1>
              
              <div className="w-full my-4">
                <AdUnit 
                  className="w-full"
                  slot="3333333333" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <DisclaimerAlert 
                content="This calculator provides general estimates only and should not replace professional medical advice. The impact of alcohol consumption varies based on individual factors including genetics, overall health, and other lifestyle choices."
              />
              
              <div className="mt-6">
                <AlcoholLifespanCalculator />
              </div>
            </div>
          </div>
          
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Alcohol Impact Calculator: How Drinking Affects Your Lifespan</h2>
            
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
                    Benefits & Uses
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('standard-drink')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Understanding Standard Drinks
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('health-factors')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Health Factors & Considerations
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
                <h3 className="text-xl font-medium">Alcohol Impact on Lifespan: An Evidence-Based Approach</h3>
                <p className="mt-2">
                  Our <strong>Alcohol Impact Calculator</strong> is a research-based tool designed to help you understand how your drinking habits may affect your longevity. By analyzing key factors like age, biological sex, and weekly consumption patterns, this calculator provides personalized estimates of how alcohol consumption might reduce your potential lifespan.
                </p>
                <p className="mt-2">
                  Unlike simplistic approaches, our calculator incorporates age-specific effects, the potential J-curve phenomenon in older adults, and progressive risk increases with heavier drinking - all based on current epidemiological research on alcohol and mortality.
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
                <h3 className="text-xl font-medium mt-2">How The Alcohol Impact Calculator Works</h3>
                <p className="mt-2">
                  This calculator uses a sophisticated algorithm based on peer-reviewed research to estimate the potential impact of alcohol consumption on lifespan. The calculation considers several important factors:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Age and biological sex differences</strong> - alcohol affects different demographic groups differently</li>
                  <li><strong>Weekly alcohol consumption</strong> - measured in standard drinks</li>
                  <li><strong>Age-dependent impact factors</strong> - younger people generally experience more significant long-term effects</li>
                  <li><strong>The J-curve phenomenon</strong> - the potential small benefits from very light drinking in some older adults</li>
                  <li><strong>Progressive risk increases</strong> - the exponential increase in health risks with heavier drinking</li>
                </ul>
                <p className="mt-2">
                  The algorithm analyzes these variables to calculate a personalized estimate of potential lifespan reduction, presented in years and days, along with a risk level assessment from Minimal to Very High.
                </p>
                <p className="mt-2">
                  Similar to our <Link to="/lifespan" onClick={handleLinkClick} className="text-blue-600 hover:underline">Life Expectancy Calculator</Link>, this tool helps you understand how lifestyle choices can impact your longevity.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Benefits & Uses of Our Alcohol Impact Calculator</h3>
                <p className="mt-2">
                  Understanding the relationship between alcohol consumption and lifespan can help you make more informed decisions about your drinking habits. Our calculator provides:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
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
                    <strong>Health Planning:</strong> Use the results alongside our <Link to="/metabolism" onClick={handleLinkClick} className="text-blue-600 hover:underline">Metabolism Calculator</Link> to create a comprehensive health plan.
                  </li>
                  <li>
                    <strong>Long-term Planning:</strong> Factor alcohol's impact into your <Link to="/retirementsavings" onClick={handleLinkClick} className="text-blue-600 hover:underline">Retirement Planning</Link> for a more accurate picture of your longevity needs.
                  </li>
                </ul>
              </div>
              
              <div id="standard-drink">
                <h3 className="text-xl font-medium mt-6">Understanding Standard Drinks</h3>
                <p className="mt-2">
                  The calculator uses the concept of a "standard drink" which contains approximately 14 grams (0.6 ounces) of pure alcohol. Understanding what constitutes a standard drink is crucial for accurately using this calculator:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>12 ounces (355 ml) of regular beer (about 5% alcohol)</li>
                  <li>5 ounces (148 ml) of wine (about 12% alcohol)</li>
                  <li>1.5 ounces (44 ml) of distilled spirits (about 40% alcohol)</li>
                </ul>
                <p className="mt-2">
                  Many beverages, especially craft beers (which can be 7-9% alcohol) and cocktails (which often contain multiple shots), may count as more than one standard drink. For accurate results, be sure to count your actual consumption in standard drink equivalents.
                </p>
              </div>
              
              <div id="health-factors">
                <h3 className="text-xl font-medium mt-6">Health Factors & Considerations</h3>
                <p className="mt-2">
                  The impact of alcohol on health extends beyond just lifespan. Research shows alcohol can affect various aspects of health:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Liver Health:</strong> Even moderate drinking can affect liver function over time</li>
                  <li><strong>Cardiovascular System:</strong> Complex effects ranging from potential benefits at very low levels to significant harm at higher levels</li>
                  <li><strong>Metabolic Health:</strong> Alcohol can impact your <Link to="/metabolism" onClick={handleLinkClick} className="text-blue-600 hover:underline">metabolism and weight management</Link></li>
                  <li><strong>Cancer Risk:</strong> Increased risk for several types of cancer, even at moderate consumption levels</li>
                  <li><strong>Brain Health:</strong> Potential cognitive impacts, especially with long-term use</li>
                </ul>
                <p className="mt-2">
                  For a complete picture of your health, consider using our alcohol calculator in conjunction with our <Link to="/lifespan" onClick={handleLinkClick} className="text-blue-600 hover:underline">comprehensive Life Expectancy Calculator</Link>, which factors in multiple lifestyle variables.
                </p>
              </div>
              
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
                    <h4 className="font-semibold text-lg">Why does biological sex affect alcohol impact?</h4>
                    <p className="mt-2">
                      Biological differences between males and females affect how alcohol is processed by the body. On average, women have a higher percentage of body fat and lower percentage of body water than men of similar size, resulting in higher blood alcohol concentrations from the same amount of alcohol. Women also generally have lower levels of alcohol dehydrogenase, an enzyme that breaks down alcohol in the stomach. These biological differences mean that alcohol typically has a more significant health impact per unit consumed in females compared to males, similar to how other biological factors affect <Link to="/metabolism" onClick={handleLinkClick} className="text-blue-600 hover:underline">metabolic rates</Link> between sexes.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate is this calculator?</h4>
                    <p className="mt-2">
                      This calculator provides estimates based on population-level research and statistical averages. Individual outcomes may vary significantly based on genetics, overall health, concurrent lifestyle factors, patterns of drinking (binge vs. spread out), diet, and other variables not captured in this simple model. The calculator is designed to provide general insights rather than precise predictions for any individual. Always consult healthcare professionals for personalized health advice and consider this as one factor in your broader <Link to="/lifespan" onClick={handleLinkClick} className="text-blue-600 hover:underline">life expectancy assessment</Link>.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Can I reverse the effects of past drinking?</h4>
                    <p className="mt-2">
                      The human body has remarkable regenerative capabilities. While some damage from alcohol may be permanent, research suggests that many effects can be partially reversed when people reduce or eliminate alcohol consumption. The liver, for example, can regenerate significantly within weeks or months of alcohol cessation. Cardiovascular health markers often improve within weeks or months of reducing alcohol intake. The best approach for anyone concerned about past alcohol consumption is to reduce current and future consumption, adopt other healthy lifestyle habits, and consult with healthcare providers about personalized strategies for optimizing health and potentially improving your <Link to="/lifespan" onClick={handleLinkClick} className="text-blue-600 hover:underline">life expectancy</Link>.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How can I use this information to improve my health?</h4>
                    <p className="mt-2">
                      This calculator can help you understand the potential long-term impact of your drinking habits on lifespan. If your results indicate a significant potential impact, consider: setting limits on weekly consumption, having several alcohol-free days each week, tracking your consumption to increase awareness, discussing your alcohol use with healthcare providers, and exploring non-alcoholic alternatives for social situations. For those with alcohol dependence, consider seeking professional support through healthcare providers, therapists, or support groups. For a comprehensive view of your health, use this calculator alongside our <Link to="/metabolism" onClick={handleLinkClick} className="text-blue-600 hover:underline">Metabolism Calculator</Link> and <Link to="/lifespan" onClick={handleLinkClick} className="text-blue-600 hover:underline">Life Expectancy Calculator</Link>.
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
