
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import BotoxCalculator from '@/components/BotoxCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const BotoxCalculatorPage = () => {
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
        title="Botox Dosage Calculator | Estimate Units and Treatment Costs"
        description="Calculate recommended Botox units and treatment costs for different facial areas. Personalized dosage estimates based on gender, age, and desired results."
        canonicalUrl="https://longevitycalculator.xyz/botox"
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
              <BotoxCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Botox Dosage Calculator</h2>
            
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
                    onClick={() => scrollToSection('considerations')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Important Considerations
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
                  Our <strong>Botox Dosage Calculator</strong> helps estimate how many units of Botox you might need for different treatment areas and the associated costs. Based on clinical guidelines and research literature, this tool provides personalized dosage estimates accounting for factors like gender, age, muscle strength, and treatment goals.
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
                <h3 className="text-xl font-medium mt-6">How The Botox Calculator Works</h3>
                <p>
                  This calculator utilizes established dosage ranges for different facial areas and applies adjustments based on your unique characteristics. By analyzing factors known to influence Botox requirements (gender, age, facial muscle strength, previous treatment experience), it generates a customized estimate of units needed and approximate treatment costs based on regional pricing data.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Personalized Estimates:</strong> Receive dosage and cost estimates tailored to your specific characteristics and treatment goals.
                  </li>
                  <li>
                    <strong>Treatment Planning:</strong> Better prepare for consultations with a more informed understanding of potential unit requirements.
                  </li>
                  <li>
                    <strong>Budget Awareness:</strong> Get regional price estimates to help plan for the financial aspect of treatments.
                  </li>
                  <li>
                    <strong>Educational Tool:</strong> Learn about standard dosage ranges for different facial areas and factors that influence Botox requirements.
                  </li>
                </ul>
              </div>
              
              <div id="considerations">
                <h3 className="text-xl font-medium mt-6">Important Considerations</h3>
                <p>
                  While our calculator provides evidence-based estimates, final dosing decisions should always be made by qualified healthcare providers. Individual anatomy, muscle activity patterns, and treatment history all play important roles in determining optimal Botox dosages.
                </p>
                
                <p>
                  Remember that this calculator is for educational purposes only. The results should be used as a starting point for discussions with your provider, not as definitive recommendations. Only licensed medical professionals can prescribe and administer Botox treatments.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What is a unit of Botox?</h4>
                    <p className="mt-2">
                      A unit of Botox is a standardized measurement of the botulinum toxin's biological activity. It's the standard dosing measurement for Botox treatments. Different facial areas require different numbers of units based on muscle size and activity. For example, the glabellar lines (between eyebrows) typically require 20-40 units, while crow's feet might need 12-24 units. The number of units directly affects both the treatment's effectiveness and its cost.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Why do men typically need more Botox units than women?</h4>
                    <p className="mt-2">
                      Men generally require higher Botox dosages than women because they have larger, stronger facial muscles with greater muscle mass. Research indicates men may need approximately 20-30% more units for equivalent results. Additionally, male skin tends to be thicker with more sebaceous glands, which can affect how the product disperses. These physiological differences explain why our calculator applies a gender-based adjustment factor to dosage recommendations.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How long do Botox results last?</h4>
                    <p className="mt-2">
                      Botox results typically last 3-4 months for most patients. However, duration varies based on several factors: treatment area (forehead treatments often last longer than crow's feet), dosage (higher doses may last longer), metabolism (faster metabolizers may see shorter durations), muscle strength, and treatment frequency. First-time patients often experience shorter durations, while regular users may gradually develop longer-lasting results as muscles become conditioned over time.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Do Botox prices vary by location?</h4>
                    <p className="mt-2">
                      Yes, Botox pricing varies significantly by geographic location, with urban areas and regions with higher costs of living typically charging more per unit. Our calculator includes regional pricing data for many countries. Additionally, prices can vary based on the provider's expertise (dermatologists and plastic surgeons often charge more than medical spas), facility type, and whether the treatment is performed by a physician or a nurse injector.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Is there any preparation needed before a Botox treatment?</h4>
                    <p className="mt-2">
                      To prepare for Botox treatment, avoid blood-thinning medications and supplements (like aspirin, ibuprofen, vitamin E, fish oil) for 1-2 weeks before treatment to reduce bruising risk. Avoid alcohol 24 hours before, and arrive with a clean face free of makeup. Some providers recommend arnica supplements to minimize bruising. Inform your provider about any medical conditions, allergies, medications, and if you've had previous botulinum toxin treatments.
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

export default BotoxCalculatorPage;
