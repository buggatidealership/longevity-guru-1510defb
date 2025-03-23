
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import FemaleFeritilityCalculator from '@/components/FemaleFeritilityCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FertilityCalculator = () => {
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
        title="Female Fertility Calculator | Reproductive Timeline Estimator"
        description="Estimate your fertility status and reproductive timeline with our free female fertility calculator based on age, AMH levels, and medical factors."
        canonicalUrl="https://longevitycalculator.xyz/female-fertility-calculator"
        keywords="fertility calculator, female fertility, AMH levels, fertility timeline, reproductive aging, fertility estimation"
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

        <main className="max-w-4xl mx-auto px-4 pb-8">
          <div className="w-full flex justify-center">
            <div className="w-full">
              <h1 className="text-2xl font-bold text-center sm:text-3xl mb-2">Female Fertility Calculator</h1>
              <p className="text-center text-gray-600 mb-6">Estimate your fertility status and remaining reproductive timeline</p>
              
              <div className="w-full my-4">
                <AdUnit 
                  className="w-full"
                  slot="3333333333" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div className="my-6 bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 text-sm">
                <p className="font-medium">Medical Disclaimer</p>
                <p className="mt-1">This calculator provides estimates based on population-level data and should not replace professional medical evaluation. Consult with a healthcare provider for personalized fertility assessment.</p>
              </div>
              
              <div className="mt-6">
                <FemaleFeritilityCalculator />
              </div>
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Female Fertility Calculator</h2>
            
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
                    onClick={() => scrollToSection('factors')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Factors Affecting Fertility
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('amh-levels')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Understanding AMH Levels
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
                  Our <strong>Female Fertility Calculator</strong> provides an estimate of your current fertility status and remaining reproductive timeline based on scientific research on ovarian reserve and reproductive aging. This tool considers multiple factors including age, AMH levels (if known), medical conditions, family history, lifestyle factors, and BMI to provide personalized fertility insights.
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
                <h3 className="text-xl font-medium mt-6">How The Fertility Calculator Works</h3>
                <p>
                  This calculator analyzes your inputs using a model based on reproductive endocrinology research that correlates age, AMH levels, and other factors with ovarian reserve and fertility potential. The algorithm evaluates your current fertility status on a scale from "Optimal" to "Minimal" and estimates how many years of reproductive potential remain before menopause.
                </p>
                <p className="mt-2">
                  The calculator accounts for the natural decline in fertility with age, accelerated by certain medical conditions and lifestyle factors, while also considering protective factors. Results include both your current fertility status and an estimated timeline for fertility decline and onset of perimenopause/menopause.
                </p>
              </div>
              
              <div id="factors">
                <h3 className="text-xl font-medium mt-6">Key Factors Affecting Female Fertility</h3>
                <p className="mt-2">
                  Our calculator incorporates these critical factors that scientific research has shown to impact female fertility:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Age:</strong> The most significant factor in fertility decline, with a marked decrease after age 35 and more rapid decline after 37-38.</li>
                  <li><strong>AMH Levels:</strong> Anti-Müllerian Hormone is a biomarker of ovarian reserve, with lower levels indicating fewer remaining eggs.</li>
                  <li><strong>Family History:</strong> Early menopause (before age 45) among female relatives may suggest a genetic predisposition to early reproductive aging.</li>
                  <li><strong>Medical Conditions:</strong> Conditions like PCOS, endometriosis, primary ovarian insufficiency, thyroid disorders and others can significantly impact fertility.</li>
                  <li><strong>Lifestyle Factors:</strong> Smoking accelerates ovarian aging, while maintaining a healthy BMI supports optimal fertility.</li>
                </ul>
              </div>
              
              <div id="amh-levels">
                <h3 className="text-xl font-medium mt-6">Understanding AMH Levels and Fertility</h3>
                <p>
                  Anti-Müllerian Hormone (AMH) is produced by small growing follicles in the ovaries and is one of the best available biomarkers for ovarian reserve (the remaining pool of eggs). AMH levels naturally decline with age, with the rate of decline accelerating after age 35-37.
                </p>
                <p className="mt-2">
                  <strong>General AMH reference ranges by age:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li><strong>Under 30:</strong> 2.0-6.8 ng/mL (optimal), 1.0-2.0 ng/mL (satisfactory), &lt;1.0 ng/mL (low for age)</li>
                  <li><strong>Age 30-35:</strong> 1.5-4.0 ng/mL (optimal), 0.7-1.5 ng/mL (satisfactory), &lt;0.7 ng/mL (low for age)</li>
                  <li><strong>Age 35-40:</strong> 1.0-3.0 ng/mL (optimal), 0.5-1.0 ng/mL (satisfactory), &lt;0.5 ng/mL (low for age)</li>
                  <li><strong>Age 40-45:</strong> 0.5-2.0 ng/mL (optimal), 0.3-0.5 ng/mL (satisfactory), &lt;0.3 ng/mL (low for age)</li>
                </ul>
                <p className="mt-2">
                  While AMH is valuable for assessing ovarian reserve, it's important to note that it doesn't directly measure egg quality, which is primarily determined by age. Additionally, some conditions like PCOS can cause elevated AMH levels that don't necessarily reflect greater fertility potential.
                </p>
              </div>
              
              {/* FAQ Section with Accordion */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        How accurate is this fertility calculator?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        This calculator provides an evidence-based estimate of fertility status based on population-level research, but individual variation exists. It's most accurate when AMH levels are provided and can estimate general fertility status with reasonable accuracy based on age and other factors. However, it cannot predict pregnancy odds for any given month or account for all individual biological factors. The results should be viewed as a general assessment rather than a precise prediction. For a comprehensive fertility evaluation, consult with a reproductive endocrinologist who can perform ultrasounds, hormone tests, and other diagnostic procedures specific to your situation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        What does "years of fertility remaining" actually mean?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        "Years of fertility remaining" estimates how long you may maintain meaningful reproductive potential before reaching very low fertility. This doesn't represent a sharp cutoff but rather the point where natural conception becomes highly unlikely (less than 5% chance per cycle). Fertility doesn't end abruptly but declines gradually, with the final years being characterized by significantly reduced chances of conception. This estimate is based on age-related fertility decline patterns, modified by your specific health factors. The calculation provides a general timeframe for family planning, helping you understand your reproductive window. Note that even within this window, fertility naturally decreases with time, especially after age 35.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        Can I improve my fertility or extend my reproductive timeline?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        While the primary determinants of fertility—age and genetic factors—cannot be changed, you can optimize your reproductive health through several evidence-based approaches: 1) Maintain a healthy BMI (between 19-24) as both underweight and obesity impact hormone balance and ovulation; 2) Quit smoking, which can accelerate ovarian aging by up to 10 years; 3) Reduce alcohol consumption to moderate levels; 4) Manage stress through mindfulness, yoga, or other relaxation techniques, as chronic stress affects hormonal balance; 5) Treat underlying medical conditions like endometriosis, PCOS, or thyroid disorders with appropriate medical care; 6) Consider egg freezing if you want to preserve fertility for future family planning; 7) Take prenatal vitamins with folate if actively trying to conceive. These measures won't increase your egg count but can help maintain optimal conditions for the eggs you have.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        How does PCOS affect fertility and these calculator results?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        Polycystic Ovary Syndrome (PCOS) creates a complex fertility situation that this calculator partially accommodates. Women with PCOS often have higher AMH levels and antral follicle counts that may suggest excellent ovarian reserve, but this doesn't translate to better fertility due to ovulatory dysfunction. The calculator adjusts for PCOS by recognizing that despite potentially higher egg counts, regular ovulation may be impaired, reducing monthly conception chances. However, women with well-managed PCOS often maintain fertility for longer periods compared to age-matched peers without PCOS, which the calculator reflects in the long-term timeline estimates. If you have PCOS, the fertility status shown may indicate current challenges due to ovulatory issues, while the years remaining might be longer than average due to potentially preserved ovarian reserve. PCOS management with lifestyle changes and medical treatment can significantly improve fertility outcomes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                      <h4 className="font-semibold text-lg text-left">
                        What fertility testing should I consider beyond this calculator?
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      <p>
                        For a comprehensive fertility assessment, consider these clinical tests beyond the calculator: 1) AMH (Anti-Müllerian Hormone) blood test to evaluate ovarian reserve; 2) Transvaginal ultrasound for antral follicle count and to check for structural abnormalities; 3) Day 3 FSH and estradiol blood tests to assess ovarian function; 4) Thyroid panel (TSH, T3, T4) since thyroid dysfunction affects fertility; 5) Prolactin levels to check for hormonal imbalances; 6) Hysterosalpingogram (HSG) to evaluate fallopian tube patency; 7) Progesterone test (Day 21) to confirm ovulation; 8) Genetic carrier screening for hereditary conditions. If you're over 35 or have concerns about fertility, consider consulting a reproductive endocrinologist who can order appropriate tests and develop a personalized fertility plan. Remember that male factor infertility accounts for approximately 30-40% of cases, so partner testing is equally important when evaluating fertility as a couple.
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
              
              <Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Child Growth</h3>
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

export default FertilityCalculator;
