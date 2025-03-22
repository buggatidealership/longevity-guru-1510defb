
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
        title="Life Expectancy Calculator | Estimate Your Lifespan"
        description="Calculate your estimated life expectancy based on health factors, lifestyle choices, and demographics. Get personalized insights on how to potentially extend your lifespan with our free calculator."
        canonicalUrl="https://longevitycalculator.xyz/lifespan"
        keywords="life expectancy calculator, lifespan estimator, longevity calculator, life prediction, health assessment, mortality risk calculator"
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
            <h2 className="text-2xl font-semibold mb-4">About The Life Expectancy Calculator</h2>
            
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
                <p>
                  Our <strong>Life Expectancy Calculator</strong> is a comprehensive tool designed to help you predict your potential lifespan based on various health metrics, lifestyle factors, and demographic characteristics. Wondering "how long do I have to live?" or "when will I die?" Our calculator provides a personalized estimate based on your unique profile.
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
                <h3 className="text-xl font-medium mt-6">How The Life Expectancy Calculator Works</h3>
                <p>
                  The calculator employs a sophisticated algorithm that evaluates multiple factors known to influence longevity, including age, sex, race/ethnicity, exercise habits, sleep patterns, smoking status, alcohol consumption, diet quality, stress levels, social connections, BMI, family history, education, income, chronic conditions, environmental factors, and healthcare access. Each factor is weighted based on scientific research about its impact on lifespan.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Personalized Lifespan Estimate:</strong> Receive a customized life expectancy prediction based on your unique combination of health and lifestyle factors.
                  </li>
                  <li>
                    <strong>Modifiable Factor Insights:</strong> Identify which aspects of your lifestyle might be shortening or extending your life expectancy.
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
                
                <p>
                  Our Life Expectancy Calculator helps you visualize the potential impact of your current lifestyle on your longevity, empowering you to make conscious choices that may extend your healthy years. Whether you're planning for retirement, considering health insurance options, or simply curious about how your lifestyle affects your lifespan, our Longevity Calculator provides valuable insights to guide your decisions.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate is a life expectancy calculator?</h4>
                    <p className="mt-2">
                      Life expectancy calculators provide estimates based on population statistics and risk factors, not precise predictions. Our calculator incorporates the latest peer-reviewed research on longevity factors, but individual outcomes may vary. The calculator is most valuable for identifying modifiable lifestyle factors that could impact your longevity rather than predicting an exact lifespan.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What factors most affect life expectancy?</h4>
                    <p className="mt-2">
                      The most significant factors influencing life expectancy include smoking status, physical activity level, diet quality, alcohol consumption, sleep habits, chronic conditions (like diabetes or heart disease), genetics, access to healthcare, socioeconomic status, and environmental factors. Our calculator weights each of these factors based on their relative impact according to current research.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Can I increase my life expectancy?</h4>
                    <p className="mt-2">
                      Yes, research shows that lifestyle modifications can significantly impact longevity. The most effective changes include quitting smoking, increasing physical activity, maintaining a healthy weight, following a balanced diet rich in fruits and vegetables, limiting alcohol consumption, managing stress, and getting adequate sleep. Even small improvements in these areas can potentially add years to your life expectancy.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Why is my life expectancy different from the national average?</h4>
                    <p className="mt-2">
                      Life expectancy varies widely based on individual factors. Your result may differ from national averages due to your specific combination of lifestyle habits, medical conditions, genetics, and socioeconomic factors. The national average represents the entire population, while our calculator provides a personalized estimate based on your unique profile and modifiable risk factors.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How can I use my life expectancy result for retirement planning?</h4>
                    <p className="mt-2">
                      Your estimated life expectancy is valuable for financial planning, particularly retirement savings. Knowing how long you might live helps determine how much to save and how to structure withdrawals to avoid outliving your assets. Financial advisors often use life expectancy calculations to create more accurate retirement plans. For a complete picture, pair your life expectancy result with our <Link to="/retirementsavings" onClick={handleLinkClick} className="text-blue-600 hover:underline">Retirement Savings Calculator</Link>.
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

export default LongevityCalculatorPage;
