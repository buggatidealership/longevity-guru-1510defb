
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import BotoxCalculator from '@/components/BotoxCalculator';
import { Syringe, AlertCircle, HelpCircle, ExternalLink, Calculator } from 'lucide-react';

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
        title="Botox Dosage and Cost Calculator | Estimate Botox Treatment Units & Price"
        description="Calculate potential Botox dosage and cost estimates based on treatment areas, gender, age, and regional pricing factors. Free online estimator for neurotoxin treatments."
        canonicalUrl="https://longevitycalculator.xyz/botox"
        keywords="botox calculator, botox cost estimator, botox dosage, botox units, neurotoxin treatment, cosmetic injections, anti-wrinkle treatments, botox pricing, facial aesthetics"
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
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('accuracy')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Accuracy & Limitations
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('treatments')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Common Treatment Areas
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
                  Our <strong>Botox Dosage and Cost Calculator</strong> helps estimate the amount of Botox (botulinum toxin) needed for various facial areas and approximates the cost based on regional pricing factors. This tool provides personalized estimates based on your gender, age, treatment history, facial muscle strength, and desired results.
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
                  This calculator uses established dosage guidelines from clinical research and practice to estimate appropriate Botox units for different facial areas. It adjusts these estimates based on several personalized factors:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Gender:</strong> Men typically require higher dosages due to stronger facial muscles.
                  </li>
                  <li>
                    <strong>Age:</strong> Younger patients may need less product, while older patients might require more.
                  </li>
                  <li>
                    <strong>Treatment Experience:</strong> First-time patients typically receive conservative dosing, while experienced patients may need more.
                  </li>
                  <li>
                    <strong>Muscle Strength:</strong> Stronger facial muscles require more units for effective treatment.
                  </li>
                  <li>
                    <strong>Desired Results:</strong> Subtle effects require less product than dramatic results.
                  </li>
                </ul>
                <p className="mt-2">
                  The calculator then applies current pricing data for different regions to provide cost estimates for each treatment area and the total treatment.
                </p>
              </div>

              <div id="accuracy">
                <h3 className="text-xl font-medium mt-6">Accuracy and Limitations</h3>
                <p>
                  While our calculator is based on standard clinical dosing practices, it's important to understand its limitations:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    This is an <strong>estimate only</strong> and should not replace consultation with a qualified medical professional.
                  </li>
                  <li>
                    Actual dosages will vary based on provider technique, product dilution, and individual anatomy.
                  </li>
                  <li>
                    Pricing varies significantly between providers even within the same region, based on expertise, clinic location, and practice settings.
                  </li>
                  <li>
                    The calculator doesn't account for medical contraindications or suitability for treatment.
                  </li>
                </ul>
              </div>
              
              <div id="treatments">
                <h3 className="text-xl font-medium mt-6">Common Botox Treatment Areas</h3>
                <p>
                  Our calculator includes the most common areas for Botox treatment:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Glabellar Lines:</strong> The vertical lines between eyebrows (frown lines), typically requiring 20-40 units.
                  </li>
                  <li>
                    <strong>Forehead Lines:</strong> Horizontal lines across the forehead, typically requiring 10-30 units.
                  </li>
                  <li>
                    <strong>Crow's Feet:</strong> Lines radiating from the corners of the eyes, typically requiring 12-24 units total for both sides.
                  </li>
                  <li>
                    <strong>Bunny Lines:</strong> Lines on the nose when scrunching, typically requiring 5-10 units.
                  </li>
                  <li>
                    <strong>Perioral Lines:</strong> Lines around the mouth, typically requiring 4-8 units.
                  </li>
                  <li>
                    <strong>Masseter:</strong> Jaw muscles for slimming treatments, typically requiring 40-60 units total for both sides.
                  </li>
                  <li>
                    <strong>Neck Bands:</strong> Vertical platysmal bands, typically requiring 25-50 units.
                  </li>
                </ul>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How long do Botox results last?</h4>
                    <p className="mt-2">
                      Botox results typically last 3-4 months for most patients. First-time users may see shorter duration (2-3 months), while regular users might experience longer-lasting results (4-6 months). Factors influencing duration include metabolism, treatment area, dosage, and muscle activity levels.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What's the difference between Botox, Dysport, and other neurotoxins?</h4>
                    <p className="mt-2">
                      Botox (onabotulinumtoxinA), Dysport (abobotulinumtoxinA), Xeomin (incobotulinumtoxinA), and Jeuveau (prabotulinumtoxinA) are all botulinum toxin type A products that work similarly to relax muscles. They differ in formulation, diffusion properties, onset of action, and dosing. Conversion ratios are approximately: 1 unit Botox ≈ 2.5-3 units Dysport ≈ 1 unit Xeomin ≈ 1 unit Jeuveau.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Is getting Botox painful?</h4>
                    <p className="mt-2">
                      Botox injections cause minimal discomfort. Most patients describe the sensation as a brief pinch or sting lasting only seconds per injection. The procedure uses very small needles. Many providers apply topical numbing cream or ice before treatment to enhance comfort, particularly for sensitive areas like crow's feet or upper lip treatments.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">When will I see results after Botox treatment?</h4>
                    <p className="mt-2">
                      Initial effects may be noticeable within 24-72 hours, but full results typically develop 7-14 days after treatment. Don't judge your results until the two-week mark. If you're concerned about your results after two weeks, most providers offer complementary touch-up appointments to adjust as needed.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What are the potential side effects of Botox?</h4>
                    <p className="mt-2">
                      Common side effects include temporary bruising, mild pain or swelling at injection sites, and headache. Rare but possible effects include eyelid drooping (ptosis), asymmetry, or unwanted muscle weakness. Choosing an experienced, qualified injector significantly reduces these risks. Serious complications are extremely rare when Botox is administered by properly trained medical professionals.
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
