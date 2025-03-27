
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import AlcoholLifespanCalculator from '@/components/AlcoholLifespanCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CanonicalFixer from '@/components/CanonicalFixer';

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
      <CanonicalFixer expectedCanonicalUrl="https://longevitycalculator.xyz/alcohol" />
      
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
              <h1 className="text-2xl font-bold text-center sm:text-3xl mb-2">Alcohol Impact on Lifespan Calculator</h1>
              <p className="text-center text-gray-600 mb-6">Discover how your drinking habits affect your life expectancy with our evidence-based calculator</p>
              
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
                <h3 className="text-xl font-medium">Alcohol's Impact on Lifespan: What Scientific Research Reveals</h3>
                <p className="mt-2">
                  Our <strong>Alcohol Impact Calculator</strong> provides evidence-based estimates of how alcohol consumption affects longevity. Based on extensive epidemiological research, this tool analyzes your weekly drinking habits to calculate potential lifespan reduction in years and days.
                </p>
                <p className="mt-2">
                  Recent studies from the <strong>World Health Organization</strong> and leading medical journals have established clear links between alcohol consumption patterns and mortality risk. Our calculator incorporates these findings, including the relationship between different types of alcoholic beverages (beer, wine, spirits) and their varying impacts on health outcomes.
                </p>
                <p className="mt-2">
                  Whether you're consuming beer, wine, spirits, or cocktails, understanding how your drinking habits influence your life expectancy is crucial for making informed health decisions. This calculator helps quantify those effects with personalized estimates based on current medical research.
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
                <h3 className="text-xl font-medium mt-2">How Our Alcohol Lifespan Impact Calculator Works</h3>
                <p className="mt-2">
                  This calculator uses a sophisticated algorithm derived from peer-reviewed research published in <em>The Lancet</em>, <em>JAMA</em>, and other top medical journals to estimate the potential impact of alcohol consumption on lifespan. The calculation incorporates several critical factors:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Beverage-specific impact factors</strong> - different alcoholic drinks (beer, wine, spirits, cocktails) have varying health effects per standard drink</li>
                  <li><strong>Weekly consumption patterns</strong> - measured precisely in standard drinks per week</li>
                  <li><strong>The J-curve phenomenon</strong> - accounting for potential small benefits observed with very light wine consumption in some population studies</li>
                  <li><strong>Heavy drinking exponential risk</strong> - reflecting how health risks increase disproportionately at higher consumption levels</li>
                  <li><strong>Long-term exposure modeling</strong> - calculating cumulative effects over decades of consistent drinking patterns</li>
                </ul>
                <p className="mt-2">
                  Our algorithm processes these variables to generate a personalized assessment of potential lifespan reduction, presenting results as specific time measurements (years, days, minutes) and assigning a risk classification from Minimal to Very High based on established medical thresholds.
                </p>
                <p className="mt-2">
                  Unlike simplified calculators, our tool accounts for the complex, non-linear relationship between alcohol consumption and mortality risk documented in large-scale population studies from Harvard Medical School, Oxford University, and the National Institutes of Health.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Benefits of Using Our Alcohol Impact Calculator</h3>
                <p className="mt-2">
                  Understanding the precise relationship between your alcohol consumption and potential lifespan reduction offers several important benefits:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Evidence-Based Decision Making:</strong> Make informed choices about alcohol consumption based on rigorous scientific research rather than general guidelines.
                  </li>
                  <li>
                    <strong>Personalized Risk Assessment:</strong> Receive tailored results specific to your drinking pattern and preferred alcoholic beverages.
                  </li>
                  <li>
                    <strong>Visual Risk Representation:</strong> See your potential lifespan impact expressed in concrete terms (years, days, minutes) for better comprehension.
                  </li>
                  <li>
                    <strong>Comparative Analysis:</strong> Understand how different drinking levels affect longevity by adjusting the calculator parameters.
                  </li>
                  <li>
                    <strong>Motivation for Moderation:</strong> Quantifying the health costs of drinking can provide powerful motivation for reducing consumption.
                  </li>
                  <li>
                    <strong>Long-term Health Planning:</strong> Incorporate these insights into your broader health and lifestyle planning for maximum longevity.
                  </li>
                </ul>
              </div>
              
              <div id="standard-drink">
                <h3 className="text-xl font-medium mt-6">Understanding Standard Drinks: Key to Accurate Calculation</h3>
                <p className="mt-2">
                  For precise results, our calculator requires input in "standard drinks" - a measurement used by health authorities worldwide to quantify alcohol consumption. A standard drink contains approximately 14 grams (0.6 ounces) of pure alcohol, equivalent to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Beer:</strong> 12 ounces (355 ml) of regular beer (about 5% alcohol)</li>
                  <li><strong>Wine:</strong> 5 ounces (148 ml) of wine (about 12% alcohol)</li>
                  <li><strong>Spirits:</strong> 1.5 ounces (44 ml) of distilled spirits (about 40% alcohol)</li>
                  <li><strong>Cocktails:</strong> Varies based on ingredients, but often contains 1-3 standard drinks</li>
                </ul>
                <p className="mt-2">
                  <strong>Important:</strong> Many common servings exceed these standard measurements. For example:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>A pint (16 oz) of craft beer (7% ABV) = 1.9 standard drinks</li>
                  <li>A large glass of wine (8 oz) = 1.6 standard drinks</li>
                  <li>A strong cocktail with multiple spirits = 2-3 standard drinks</li>
                </ul>
                <p className="mt-2">
                  For accurate calculator results, carefully convert your actual consumption to standard drink equivalents based on both volume and alcohol percentage.
                </p>
              </div>
              
              <div id="health-factors">
                <h3 className="text-xl font-medium mt-6">Alcohol's Impact on Health: Beyond Lifespan</h3>
                <p className="mt-2">
                  While our calculator focuses on lifespan reduction, research shows alcohol affects numerous aspects of health. Understanding these broader impacts provides important context for the calculator results:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Liver Health:</strong> Alcohol metabolism in the liver can lead to fatty liver disease, alcoholic hepatitis, fibrosis, and ultimately cirrhosis, even with moderate consumption patterns over time.</li>
                  <li><strong>Cardiovascular System:</strong> Research indicates complex effects - possible small benefits for heart health at very low levels (particularly with wine) but significant increases in hypertension, stroke, and heart failure risks at higher consumption.</li>
                  <li><strong>Cancer Risk:</strong> The International Agency for Research on Cancer (IARC) classifies alcohol as a Group 1 carcinogen. Even moderate drinking increases risk for several cancers including breast, colorectal, liver, esophageal, mouth, and throat cancers.</li>
                  <li><strong>Brain Health:</strong> Neuroimaging studies show alcohol's impact on brain structure and function, with evidence of reduced gray matter volume and impaired cognitive performance with regular consumption.</li>
                  <li><strong>Mental Health:</strong> Despite temporary mood elevation, alcohol disrupts neurotransmitter balance, potentially worsening anxiety and depression long-term. Heavy drinking significantly increases suicide risk.</li>
                  <li><strong>Immune Function:</strong> Research demonstrates alcohol's suppressive effects on immune response, increasing susceptibility to infections and impairing recovery.</li>
                </ul>
                <p className="mt-2">
                  These health impacts contribute to the lifespan reduction calculated by our tool, but also affect quality of life in ways not captured by mortality statistics alone.
                </p>
              </div>
              
              {/* FAQ Section with Accordion */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions About Alcohol and Longevity</h3>
                
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        Is any level of alcohol consumption safe for health?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        The current scientific consensus, reflected in a landmark 2018 global study published in <em>The Lancet</em> analyzing data from 195 countries, concludes that the optimal level of alcohol consumption for health is zero. While older research suggested potential cardiovascular benefits from light drinking (the "J-curve" effect), more recent comprehensive studies using Mendelian randomization techniques have found these benefits to be smaller than previously thought and outweighed by increased risks for cancer, liver disease, and other conditions. Our calculator does include a small potential benefit for very light wine drinking in keeping with some research, but this is increasingly questioned by the most current epidemiological evidence.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        Why do different alcoholic beverages have different health impacts?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        Research indicates that various alcoholic beverages may have differing health impacts beyond their alcohol content. Wine, particularly red wine, contains compounds like resveratrol and other polyphenols with potential antioxidant and anti-inflammatory properties. Beer contains B vitamins and silicon that may benefit bone health, but also has carbohydrates that increase caloric intake. Spirits lack these additional compounds but deliver alcohol in more concentrated forms. Additionally, drinking patterns differ by beverage type - wine is often consumed with meals (potentially reducing absorption rates) while spirits may be more frequently associated with binge drinking patterns. Our calculator incorporates these beverage-specific factors based on epidemiological research comparing mortality outcomes across different drink preferences.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        How accurate is the Alcohol Impact Calculator?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        Our calculator synthesizes findings from multiple large-scale epidemiological studies to provide evidence-based estimates of potential lifespan impact. However, several important limitations apply: 1) Results represent statistical averages from population-level research and individual outcomes may vary significantly based on genetics, overall health status, and concurrent lifestyle factors; 2) The calculator cannot account for drinking pattern variations (e.g., moderate weekly consumption spread evenly vs. concentrated binge drinking); 3) Individual biological factors affecting alcohol metabolism (like alcohol dehydrogenase enzyme variants) significantly influence health impacts; 4) The calculator assumes consistent drinking patterns over time, whereas many people's consumption varies throughout life. While the estimates provide valuable insight into potential health impacts, they should be viewed as general guidance rather than precise predictions for any individual.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        Can reducing alcohol consumption reverse health damage?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        Research shows that reducing or eliminating alcohol consumption can reverse some, but not all, alcohol-related health damage. The liver has remarkable regenerative capacity - early fatty liver changes can resolve within weeks to months of abstinence. Blood pressure improvements may be noticeable within days to weeks of reducing intake. Cognitive function and sleep quality typically begin improving within weeks to months. However, certain damage may be permanent, particularly with long-term heavy drinking: advanced liver cirrhosis, alcohol-related brain damage with significant neuronal loss, and alcoholic cardiomyopathy with extensive heart scarring. Cancer risk also doesn't immediately return to baseline levels. The greatest health benefits come from reducing consumption earlier, before permanent damage occurs. Our calculator demonstrates potential future impacts that may still be prevented or minimized with changes in drinking habits.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        How does alcohol affect women differently than men?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        Women generally experience more pronounced health effects from alcohol than men due to several biological factors: 1) Lower body water content (52% vs. 61% in men) results in higher blood alcohol concentrations from equivalent drinks; 2) Less alcohol dehydrogenase enzyme activity in the stomach and liver leads to slower alcohol metabolism; 3) Smaller average body size means less tissue to absorb alcohol; 4) Hormonal differences affect alcohol processing. These differences translate to women developing alcohol-related health problems like liver cirrhosis, heart disease, and cognitive impairment more quickly and at lower consumption levels than men. Women also face unique risks including increased breast cancer susceptibility (even with moderate drinking) and potential reproductive health effects. For these reasons, health guidelines typically recommend lower consumption limits for women, and our calculator applies gender-specific risk adjustments to reflect these biological differences.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
              <Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/female-fertility-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/adult-height-predictor-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Adult Height</h3>
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
                  <li><Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
                  <li><Link to="/adult-height-predictor-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Adult Height Predictor</Link></li>
                  <li><Link to="/breast-implant-size-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Breast Implant Size Calculator</Link></li>
                  <li><Link to="/botox-dosage-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Botox Dosage Calculator</Link></li>
                  <li><Link to="/alcohol-impact-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Alcohol Impact Calculator</Link></li>
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
          </div>
        </footer>
      </div>
    </>
  );
};

export default AlcoholCalculatorPage;
