
import { AdUnit } from '@/components/AdUnit';
import BotoxCalculator from '@/components/BotoxCalculator';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        title="Botox Dosage Calculator | Units and Cost Estimator Tool"
        description="Calculate Botox units needed for different facial areas and estimate treatment costs. Our free Botox calculator provides personalized dosage recommendations for forehead, crow's feet, and more."
        canonicalUrl="https://longevitycalculator.xyz/botox"
        keywords="botox calculator, botox dosage, botox units, botox cost calculator, botox price estimator, forehead botox, crow's feet units, glabellar lines, cosmetic injection planner"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="7777777777" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Botox Dosage Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Calculate the recommended Botox units for different facial areas and estimate treatment costs.
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
            content="This calculator provides general estimates based on common dosage ranges. Actual treatment should be determined by a qualified healthcare provider."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <BotoxCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Botox Dosage Calculator: Treatment Units & Cost Estimator</h2>
            
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
                  Our <strong>Botox Dosage Calculator</strong> helps estimate appropriate Botox units for different facial areas based on your individual characteristics. This tool provides guidance on potential treatment volumes and costs before consulting with a medical professional.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="8888888888" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="how-it-works">
                <h3 className="text-xl font-medium mt-6">How The Botox Calculator Works</h3>
                <p>
                  This calculator analyzes factors like gender, age, muscle strength, and treatment experience to suggest appropriate Botox dosages. It considers these personal factors along with established dosing guidelines for different facial areas to create personalized estimates.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Better Preparation:</strong> Go into provider consultations with a clearer understanding of dosing concepts.
                  </li>
                  <li>
                    <strong>Personalized Estimates:</strong> Get dosage recommendations adjusted for your specific profile.
                  </li>
                  <li>
                    <strong>Cost Awareness:</strong> Receive approximate cost ranges for treatments in your region.
                  </li>
                  <li>
                    <strong>Area-Specific Information:</strong> Understand typical dosages for different facial regions.
                  </li>
                </ul>
              </div>
              
              <div id="considerations">
                <h3 className="text-xl font-medium mt-6">Important Considerations</h3>
                <p>
                  While our calculator provides helpful estimates, final Botox dosing should always be determined by a qualified healthcare provider. Many factors affect optimal dosing, including the specific Botox formulation, injection technique, and your unique facial anatomy.
                </p>
                
                <p>
                  Remember that this calculator is for educational purposes only. The results should be used as a starting point for discussions with your provider, not as a definitive recommendation.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions About Botox Treatments</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">How many units of Botox do I need for my forehead?</AccordionTrigger>
                    <AccordionContent>
                      <p>For forehead lines, most patients require between 10-30 units of Botox, with the average being around 20 units. However, the exact amount depends on factors like gender (men typically need more units), muscle strength, age, and desired outcome. First-time Botox patients often start with lower doses to avoid over-freezing.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">How much should I expect to pay for Botox treatments?</AccordionTrigger>
                    <AccordionContent>
                      <p>Botox pricing varies widely by location, provider expertise, and facility type. In the United States, prices typically range from $10-20 per unit, making a full facial treatment cost between $300-600. Medical spas may offer lower prices than dermatology or plastic surgery practices. Some providers charge by treatment area rather than by unit.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">How long do Botox results last?</AccordionTrigger>
                    <AccordionContent>
                      <p>Botox typically lasts 3-4 months for most patients. Several factors affect longevity including metabolism, muscle strength, treatment area, and dosage. First-time users may find their results don't last as long as subsequent treatments. Regular maintenance treatments every 3-4 months are recommended to maintain results and may lead to longer-lasting effects over time.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">Is Botox treatment painful?</AccordionTrigger>
                    <AccordionContent>
                      <p>Most patients describe Botox injections as causing mild, brief discomfort similar to a small pinch. The needles used are very fine, and each injection takes just seconds. Some providers offer topical numbing cream or ice before treatment to minimize discomfort. The forehead and crow's feet areas are typically less sensitive than the glabellar (between eyebrows) region.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">Are there any side effects of Botox treatments?</AccordionTrigger>
                    <AccordionContent>
                      <p>Common side effects include temporary redness, swelling, or bruising at injection sites. Less common effects may include headache or flu-like symptoms. Rare but more serious side effects include eyelid drooping (ptosis), asymmetry, or difficulty swallowing if the product migrates. These risks are minimized when treatment is performed by qualified, experienced providers following proper techniques.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">How soon will I see results after my Botox treatment?</AccordionTrigger>
                    <AccordionContent>
                      <p>Initial effects may be noticeable within 24-48 hours, but full results typically take 7-14 days to develop as the product fully binds to nerve receptors. The timeline varies between individuals and treatment areas. Follow-up appointments are often scheduled 2 weeks after treatment to assess results and address any areas that might need adjustment.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          
          <div className="mt-8 mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="9999999999" 
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
