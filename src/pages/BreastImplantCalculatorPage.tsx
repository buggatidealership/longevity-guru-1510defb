
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import BreastImplantCalculator from '@/components/BreastImplantCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const BreastImplantCalculatorPage = () => {
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
        title="Breast Implant Size Calculator | CC Volume and Cost Estimator Tool"
        description="Calculate your ideal breast implant size in CC based on measurements and desired outcome. Our free calculator estimates implant volumes, costs, and helps you prepare for your breast augmentation consultation."
        canonicalUrl="https://longevitycalculator.xyz/breastimplant"
        keywords="breast implant calculator, implant size calculator, breast augmentation calculator, CC volume estimator, breast implant cost, implant dimensions, implant profile selector, cup size calculator"
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Breast Implant Size Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Calculate your ideal breast implant size in CC based on measurements and desired outcome.
          </p>
          
          <DisclaimerAlert 
            content="This calculator provides estimates only and should not replace professional medical advice. Results are based on general data and may not apply to your specific situation."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <BreastImplantCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Breast Implant Size Calculator</h2>
            
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
                  Our <strong>Breast Implant Size Calculator</strong> helps you estimate appropriate implant sizes based on your measurements and aesthetic goals. This tool provides guidance on potential CC (cubic centimeter) volumes for breast implants, helping you understand sizing options before consulting with a plastic surgeon.
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
                <h3 className="text-xl font-medium mt-6">How The Breast Implant Calculator Works</h3>
                <p>
                  This calculator analyzes your current measurements (breast width, tissue thickness) along with your desired cup size increase to suggest appropriate implant volumes. It considers factors like your frame size, existing breast tissue, and aesthetic goals to recommend implant sizes that may achieve natural-looking results.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Better Preparation:</strong> Walk into surgeon consultations with a clearer understanding of implant sizing concepts.
                  </li>
                  <li>
                    <strong>Visual References:</strong> Understand what different cc volumes might look like for your specific body measurements.
                  </li>
                  <li>
                    <strong>Realistic Expectations:</strong> Get insights into what sizes might be appropriate for your body proportions.
                  </li>
                  <li>
                    <strong>Cost Awareness:</strong> Receive approximate cost ranges for breast augmentation procedures in your region.
                  </li>
                </ul>
              </div>
              
              <div id="considerations">
                <h3 className="text-xl font-medium mt-6">Important Considerations</h3>
                <p>
                  While our calculator provides helpful estimates, final implant selection should always be determined through in-person consultations with a board-certified plastic surgeon. Many factors affect optimal implant sizing, including existing breast tissue elasticity, chest wall anatomy, implant profile, and placement method.
                </p>
                
                <p>
                  Remember that this calculator is for educational purposes only. The results should be used as a starting point for discussions with your surgeon, not as a definitive recommendation.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What does CC mean for breast implants?</h4>
                    <p className="mt-2">
                      CC stands for cubic centimeters, which is the volume measurement used for breast implants. It represents the amount of silicone or saline contained within the implant shell. For reference, 30cc is approximately 1 fluid ounce. Common implant sizes range from 200cc to 800cc, with most patients selecting between 300cc to 400cc depending on their frame size and desired outcome.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate is this breast implant calculator?</h4>
                    <p className="mt-2">
                      This calculator provides reasonable estimates based on standard anatomical relationships between measurements and implant volumes. However, it cannot account for all individual factors that surgeons consider. Many variables affect final results, including implant profile (projection), placement (over/under muscle), and your unique anatomy. Consider these results as educational guidelines rather than precise recommendations.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How much do breast implants cost?</h4>
                    <p className="mt-2">
                      Breast augmentation surgery typically costs between $4,000 and $10,000 in the United States. This price varies based on geographic location, surgeon experience, implant type (saline vs. silicone), and facility fees. Additional costs may include anesthesia, pre-operative tests, post-operative garments, and follow-up care. Some practices offer financing options to make the procedure more accessible.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What's the difference between implant profiles?</h4>
                    <p className="mt-2">
                      Implant profiles refer to how much the implant projects forward from the chest wall. Low profile implants are wider with less projection, moderate profile provides balanced width and projection, while high profile implants offer maximum projection with a narrower base. Ultra-high/extra-high profiles provide even more projection. Your body type, chest width, and aesthetic goals help determine which profile might be most appropriate.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How long do breast implants last?</h4>
                    <p className="mt-2">
                      Breast implants are not considered lifetime devices, but they don't automatically need replacement after a certain time period. Modern implants can last 10-20+ years without issues. Manufacturers typically offer warranties of 10 years. Reasons for eventual replacement might include capsular contracture, rupture, displacement, or simply wanting a size change. Regular monitoring through mammograms, MRIs, or ultrasounds is recommended.
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

export default BreastImplantCalculatorPage;
