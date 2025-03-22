
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import BreastImplantCalculator from '@/components/BreastImplantCalculator';
import { Calculator, AlertTriangle, Ruler, Activity } from 'lucide-react';

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
        title="Breast Implant Size Calculator | Augmentation Cost Estimator"
        description="Calculate your ideal breast implant size based on body measurements and get cost estimates for breast augmentation surgery across different regions."
        canonicalUrl="https://longevitycalculator.xyz/breastimplant"
        keywords="breast implant calculator, breast augmentation cost, implant size estimator, breast surgery cost, implant cc calculator, cosmetic surgery calculator"
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
                  Our <strong>Breast Implant Size Calculator</strong> is designed to help you estimate appropriate implant volumes and potential costs associated with breast augmentation surgery. This tool provides a starting point for understanding how different implant sizes might work with your unique body proportions and what budget you might need to plan for this procedure.
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
                  The calculator uses a combination of your physical measurements (height, weight, chest circumference), current breast size, desired increase, and body frame to suggest an appropriate implant volume range measured in cubic centimeters (cc). It takes into account that different body types may require different implant volumes to achieve similar visual results.
                </p>
                <p className="mt-2">
                  Additionally, the calculator provides regional cost estimates based on your location and chosen implant type. The cost breakdown includes typical expenses for the surgeon's fee, anesthesia, facility fees, implant costs, and additional expenses like post-surgical garments and medications.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Personalized Size Recommendations:</strong> Receive implant size suggestions tailored to your body's proportions rather than generic recommendations.
                  </li>
                  <li>
                    <strong>Visual Result Estimation:</strong> Get an estimate of your potential cup size after surgery based on your current measurements and desired increase.
                  </li>
                  <li>
                    <strong>Regional Cost Awareness:</strong> Understand the typical price ranges for breast augmentation in your geographic area with a detailed breakdown.
                  </li>
                  <li>
                    <strong>Implant Type Comparison:</strong> Compare how different implant materials (saline, silicone, and cohesive gel) affect the overall cost of your procedure.
                  </li>
                  <li>
                    <strong>Pre-Consultation Planning:</strong> Gather valuable information to have a more productive initial consultation with plastic surgeons.
                  </li>
                </ul>
              </div>
              
              <div id="considerations">
                <h3 className="text-xl font-medium mt-6">Important Considerations When Using This Calculator</h3>
                <p>
                  While our breast implant calculator provides useful estimates, it's essential to understand its limitations. The suggested implant sizes should be considered general guidelines rather than definitive recommendations. Many factors beyond basic measurements influence the ideal implant size, including:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Breast tissue elasticity and composition</li>
                  <li>Chest wall shape and asymmetry</li>
                  <li>Skin quality and thickness</li>
                  <li>Placement options (submuscular vs. subglandular)</li>
                  <li>Implant profile (low, moderate, high, or extra-high)</li>
                  <li>Implant shape (round vs. anatomical/teardrop)</li>
                  <li>Personal aesthetic goals and lifestyle considerations</li>
                </ul>
                
                <p className="mt-2">
                  Furthermore, cost estimates are based on industry averages and can vary significantly depending on surgeon experience, geographic location within regions, specific facility charges, and the potential need for additional procedures like a breast lift (mastopexy).
                </p>
                
                <p className="mt-2">
                  <strong>Always consult with a board-certified plastic surgeon</strong> for personalized advice and accurate quotes based on your specific needs and anatomy. This calculator is meant to be an educational tool, not a substitute for professional medical advice.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate are the implant size recommendations?</h4>
                    <p className="mt-2">
                      The calculator provides a reasonable starting range based on your measurements and desired increase, but it cannot account for all the nuances of your unique anatomy. Studies show that patient satisfaction is highest when implant selection is done collaboratively between the patient and surgeon, taking into account both measurements and aesthetic goals. Consider our recommendations as a starting point for discussion with your surgeon, who will perform detailed measurements and may use sizers during consultation to help you visualize results.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What's the difference between implant types, and how do I choose?</h4>
                    <p className="mt-2">
                      The three main implant types differ in feel, longevity, and cost: Saline implants are filled with sterile salt water, provide a firmer feel, and are the least expensive option. If they rupture, the saline is safely absorbed by your body. Silicone gel implants contain a cohesive gel that more closely mimics natural breast tissue and provides a softer, more natural feel. Highly cohesive gel implants (sometimes called "gummy bear" implants) maintain their shape even when the implant shell is broken and may provide the most natural appearance, particularly in the upper pole of the breast. Your surgeon can help you select the best option based on your body type, skin thickness, and aesthetic goals.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How does implant size relate to cup size?</h4>
                    <p className="mt-2">
                      The relationship between implant volume (cc) and cup size is not exact and varies depending on your existing breast tissue, chest width, and other factors. As a general guideline, approximately 150-200cc is often associated with one cup size increase, but this can vary significantly between individuals. A 300cc implant might create a C cup on a petite woman with a narrow chest but result in a smaller visual change on someone with a broader chest. This is why our calculator considers your frame size and chest measurements when making recommendations. Remember that bra sizing is not standardized across manufacturers, making cup size an imperfect target for surgical planning.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What additional costs should I consider beyond the calculator estimates?</h4>
                    <p className="mt-2">
                      Our calculator provides base estimates for the primary costs, but you should also budget for: pre-operative tests (blood work, mammograms for patients over 40); prescription medications; specialized surgical bras or compression garments; time off work for recovery (typically 1-2 weeks); follow-up appointments; and possible revision surgery in the future (implants are not lifetime devices). Additionally, if complications occur, there may be additional costs for treatment. Many plastic surgeons offer financing plans to help manage these expenses, and some cosmetic surgery-specific insurance plans are available to cover certain complications.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How long do breast implants last?</h4>
                    <p className="mt-2">
                      Breast implants are not considered lifetime devices. According to manufacturer data and clinical studies, the risk of complications increases the longer you have implants, with many surgeons suggesting potential replacement or revision after 10-20 years. However, implants only need to be replaced if problems develop, such as rupture, capsular contracture (hardening of scar tissue around the implant), or if you desire a change in size or appearance. Modern cohesive gel implants tend to be more durable than earlier generations. Regular follow-up with your plastic surgeon and periodic imaging studies (ultrasound or MRI) can help monitor implant integrity over time, especially for silicone implants where ruptures may not be immediately apparent.
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
                  <li><Link to="/metabolism" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Metabolism Calculator</Link></li>
                  <li><Link to="/breastimplant" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Breast Implant Size Calculator</Link></li>
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
