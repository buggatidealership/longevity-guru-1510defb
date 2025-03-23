
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import LongevityCalculator from '@/components/LongevityCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { createCalculatorSEOProps } from '@/utils/seoUtils';

const LongevityCalculatorPage = () => {
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
        title="Most Accurate Life Expectancy Calculator | Free Longevity Calculator by Age"
        description="Our most accurate free life expectancy calculator predicts how long you'll live based on age, medical history, and lifestyle factors. Get a personalized estimate now."
        canonicalUrl="https://longevitycalculator.xyz/life-expectancy-calculator"
        keywords="most accurate life expectancy calculator, free longevity calculator, longevity calculator by age, life expectancy calculator based on medical history, free life expectancy calculator, how long will I live, death calculator"
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
          <div className="w-full flex justify-center">
            <div className="w-full">
              <LongevityCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About Our Most Accurate Life Expectancy Calculator</h2>
            
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
                    How Our Free Calculator Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('calculator-by-age')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Longevity Calculator By Age
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('medical-history')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Medical History Impact
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
                    onClick={() => scrollToSection('why-matters')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Why Life Expectancy Matters
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
                <h3 className="text-xl font-medium">The Most Accurate Free Life Expectancy Calculator</h3>
                <p>
                  Our <strong>most accurate life expectancy calculator</strong> is designed to help you predict your potential lifespan with precision. Wondering "how long will I live?" Our free calculator provides a personalized estimate based on comprehensive factors including age, lifestyle, and health metrics that other calculators often miss.
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
                <h3 className="text-xl font-medium mt-6">How Our Free Life Expectancy Calculator Works</h3>
                <p>
                  Unlike basic calculators, our tool employs a sophisticated algorithm based on current medical research to evaluate multiple factors known to influence longevity. These include age, sex, race/ethnicity, exercise habits, sleep patterns, smoking status, alcohol consumption, diet quality, stress levels, social connections, BMI, family history, education, income, chronic conditions, environmental factors, and healthcare access.
                </p>
                <p className="mt-2">
                  Each factor is scientifically weighted according to its demonstrated impact on lifespan, providing you with a more accurate prediction than generic calculators.
                </p>
              </div>

              <div id="calculator-by-age">
                <h3 className="text-xl font-medium mt-6">Longevity Calculator By Age</h3>
                <p>
                  Age is one of the most significant factors in predicting life expectancy. Our <strong>longevity calculator by age</strong> takes your current age as a starting point and then adjusts your potential lifespan based on lifestyle, health, and demographic factors. This approach provides more accuracy than basic life tables that only consider age and gender.
                </p>
                <p className="mt-2">
                  Whether you're in your 20s planning for retirement, middle-aged and assessing health decisions, or a senior wanting to maximize your remaining years, our calculator offers age-specific insights that matter to you.
                </p>
              </div>

              <div id="medical-history">
                <h3 className="text-xl font-medium mt-6">Life Expectancy Calculator Based On Medical History</h3>
                <p>
                  Your medical history significantly impacts your longevity. Our <strong>life expectancy calculator based on medical history</strong> carefully analyzes conditions like diabetes, heart disease, cancer, hypertension, and kidney disease to provide a more accurate prediction of your lifespan.
                </p>
                <p className="mt-2">
                  By accounting for these medical factors and their interactions with lifestyle choices, our calculator delivers a more complete picture of your potential lifespan, helping you understand which health conditions most impact your longevity and which interventions might be most effective.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Most Accurate Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Superior Accuracy:</strong> Our calculator incorporates more variables than typical calculators, providing a more precise estimate based on comprehensive health and lifestyle data.
                  </li>
                  <li>
                    <strong>Personalized Lifespan Estimate:</strong> Receive a customized life expectancy prediction that considers your unique combination of factors rather than general population statistics.
                  </li>
                  <li>
                    <strong>100% Free Calculator:</strong> Access professional-grade longevity predictions without any cost or subscription fees.
                  </li>
                  <li>
                    <strong>Modifiable Factor Insights:</strong> Identify which specific aspects of your lifestyle might be shortening or extending your life expectancy.
                  </li>
                  <li>
                    <strong>Health Decision Support:</strong> Make informed choices about lifestyle modifications that could potentially add years to your life.
                  </li>
                  <li>
                    <strong>Longevity Planning:</strong> Use your estimated life expectancy for retirement planning, insurance decisions, and other long-term life plans.
                  </li>
                </ul>
              </div>
              
              <div id="why-matters">
                <h3 className="text-xl font-medium mt-6">Why Life Expectancy Calculation Matters</h3>
                <p>
                  Understanding your potential lifespan is increasingly important in a world where healthcare advances continue to extend human longevity. Research indicates that while genetic factors account for approximately 25% of lifespan determination, the remaining 75% is influenced by lifestyle choices, environmental factors, and access to healthcare. This means most people have significant control over how long they might live.
                </p>
                
                <p className="mt-2">
                  Our free life expectancy calculator helps you visualize the potential impact of your current lifestyle on your longevity, empowering you to make conscious choices that may extend your healthy years. Whether you're planning for retirement, considering health insurance options, or simply curious about how your lifestyle affects your lifespan, our calculator provides valuable insights to guide your decisions.
                </p>
              </div>
              
              {/* FAQ Section with Accordion */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      What makes this the most accurate life expectancy calculator?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our calculator achieves superior accuracy by analyzing more variables than standard calculators, including detailed medical history, lifestyle factors, and demographic elements. It incorporates the latest peer-reviewed research on longevity factors and employs sophisticated algorithms that weigh each factor according to scientific evidence of its impact. While no calculator can predict with absolute certainty, ours provides a more comprehensive assessment than simpler tools that only consider basic factors like age and gender.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How does your free calculator compare to paid longevity calculators?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our free life expectancy calculator offers comparable or better accuracy than many paid alternatives. We've designed it to include the same comprehensive range of factors that premium calculators use, including detailed medical history analysis, lifestyle assessment, and demographic considerations. Unlike some paid calculators that use proprietary "black box" algorithms, we're transparent about our methodology, which is based on peer-reviewed medical research. We believe accurate longevity prediction should be accessible to everyone without cost barriers.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How does age affect the calculator's predictions?
                    </AccordionTrigger>
                    <AccordionContent>
                      Age is a foundational input in our longevity calculator. The algorithm begins with actuarial life tables based on your current age, then adjusts this baseline according to your personal health factors and lifestyle choices. Interestingly, as you age, some risk factors actually have less impact on your remaining life expectancy. Our calculator accounts for these age-dependent effects, providing more nuanced predictions for people at different life stages. For example, the impact of smoking decreases somewhat in very advanced ages, while the protective effect of social connections remains strong throughout life.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How does medical history impact my life expectancy calculation?
                    </AccordionTrigger>
                    <AccordionContent>
                      Medical history plays a crucial role in our calculator's predictions. Each chronic condition is assigned a specific impact value based on research data about its effect on longevity. For example, diabetes typically reduces life expectancy by 5-10 years, while heart disease may reduce it by 5-12 years depending on severity. However, our calculator also considers management of these conditions—well-controlled conditions have less impact than poorly managed ones. The calculator also accounts for interactions between conditions; having multiple related conditions (like diabetes and heart disease) can have compounding effects beyond their individual impacts.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      What lifestyle factors most significantly affect life expectancy?
                    </AccordionTrigger>
                    <AccordionContent>
                      According to our research, the lifestyle factors with the greatest impact on life expectancy are: 1) Smoking status (can reduce lifespan by up to 10 years), 2) Physical activity (regular exercise can add 3-5 years), 3) Diet quality (a Mediterranean or DASH diet can add 2-3 years), 4) Sleep patterns (consistently sleeping 7-8 hours may add 2-3 years), and 5) Alcohol consumption (heavy drinking can reduce lifespan by 4-5 years). Other significant factors include stress management, social connections, and maintaining a healthy weight. Our calculator weights each of these factors proportionally to their demonstrated impact in longevity research.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      Can I increase my life expectancy based on the calculator's results?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, for most people, there are significant opportunities to increase life expectancy based on our calculator's results. Research shows that lifestyle modifications can add 10+ years to your lifespan, even when started in middle age. The most effective changes include quitting smoking (adds 5-10 years depending on current age), increasing physical activity to 150+ minutes weekly (adds 3-5 years), adopting a Mediterranean-style diet (adds 2-3 years), maintaining healthy sleep patterns (adds 2-3 years), and cultivating strong social connections (adds 2-4 years). Our calculator identifies your specific modifiable factors so you can focus on changes that will have the greatest impact on your personal longevity.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How accurately can a calculator predict when I will die?
                    </AccordionTrigger>
                    <AccordionContent>
                      No calculator, including ours, can predict the exact date or year of death. Life expectancy calculations provide statistical averages based on population data and known risk factors. Our calculator provides an estimate with approximately ±5 years of accuracy for most users. The prediction becomes more accurate as you age and for those with stable lifestyle factors. Unexpected events, accidents, rapid medical advances, and new diseases can all affect actual lifespan in ways no calculator can predict. The greatest value of our calculator is not in predicting an exact age of death, but in identifying modifiable factors that could significantly extend your life.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How can I use my life expectancy result for retirement planning?
                    </AccordionTrigger>
                    <AccordionContent>
                      Your estimated life expectancy is invaluable for financial planning, particularly retirement savings. Knowing your likely lifespan helps determine how much to save and how to structure withdrawals to avoid outliving your assets. Financial advisors typically use average life expectancy plus 5-10 years for conservative planning, but a personalized estimate is more accurate. For a complete picture, pair your life expectancy result with our <Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="text-blue-600 hover:underline">Retirement Savings Calculator</Link>. This helps you calculate if your current savings rate is sufficient based on your personalized life expectancy rather than generic averages.
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
              <Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/female-fertility-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
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
                  <li><Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
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

export default LongevityCalculatorPage;
