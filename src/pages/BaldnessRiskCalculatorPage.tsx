
import { AdUnit } from '@/components/AdUnit';
import BaldnessRiskCalculator from '@/components/BaldnessRiskCalculator';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BaldnessRiskCalculatorPage = () => {
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
        title="Baldness Risk Calculator | Estimate Hair Loss Progression & Timing"
        description="Calculate your risk of male or female pattern baldness based on genetics, age, and lifestyle factors. Get personalized recommendations and timeline predictions with our free baldness calculator."
        canonicalUrl="https://longevitycalculator.xyz/baldness-risk-calculator"
        keywords="baldness calculator, hair loss risk assessment, male pattern baldness, androgenetic alopecia, hair thinning prediction, genetic baldness factors, hair loss progression timeline"
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Baldness Risk Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Evaluate your risk of hair loss and potential baldness progression based on genetic, physical, and lifestyle factors.
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
            content="This calculator provides general estimates based on common risk factors. For a definitive assessment of hair loss, please consult with a dermatologist or trichologist."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <BaldnessRiskCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Baldness Risk Calculator: Predict Hair Loss Timeline & Risk Factors</h2>
            
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
                    onClick={() => scrollToSection('risk-factors')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Baldness Risk Factors
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
                  Our <strong>Baldness Risk Calculator</strong> helps individuals assess their likelihood of experiencing hair loss and estimate potential progression based on personal, genetic, and lifestyle factors. This tool provides insights into your risk level and offers personalized recommendations for addressing hair loss concerns.
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
                <h3 className="text-xl font-medium mt-6">How The Baldness Calculator Works</h3>
                <p>
                  This calculator analyzes multiple factors known to influence hair loss, including age, gender, family history of baldness, current hair condition, and lifestyle factors. By evaluating these inputs against research-based risk models, it generates a personalized risk assessment, estimated timeline, and targeted recommendations for managing or slowing hair loss progression.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Early Detection:</strong> Identify potential hair loss risk before significant progression occurs.
                  </li>
                  <li>
                    <strong>Personalized Timeline:</strong> Receive estimates on potential baldness progression based on your unique factors.
                  </li>
                  <li>
                    <strong>Targeted Recommendations:</strong> Get specific advice tailored to your risk level and hair loss stage.
                  </li>
                  <li>
                    <strong>Informed Decision-Making:</strong> Better understand treatment options and when to seek professional consultation.
                  </li>
                </ul>
              </div>
              
              <div id="risk-factors">
                <h3 className="text-xl font-medium mt-6">Understanding Baldness Risk Factors</h3>
                <p>
                  Hair loss, particularly pattern baldness (androgenetic alopecia), is influenced by multiple factors:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Genetics:</strong> Family history, particularly maternal grandfather for men, plays a significant role in determining hair loss risk.</li>
                  <li><strong>Hormones:</strong> DHT (dihydrotestosterone) sensitivity affects hair follicles, causing miniaturization and eventual hair loss.</li>
                  <li><strong>Age:</strong> Risk increases with age, though early onset often indicates stronger genetic factors.</li>
                  <li><strong>Gender:</strong> Males experience higher rates of pattern baldness, while females typically see diffuse thinning rather than complete baldness.</li>
                  <li><strong>Health Conditions:</strong> Hormonal disorders, autoimmune conditions, and certain nutritional deficiencies can accelerate hair loss.</li>
                  <li><strong>Lifestyle Factors:</strong> Stress, poor diet, smoking, and certain medications can contribute to hair thinning and loss.</li>
                </ul>
                
                <p className="mt-2">
                  Understanding your personal risk factors can help you take proactive steps to address potential hair loss concerns and determine when professional intervention might be beneficial.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">Is male pattern baldness inevitable if it runs in my family?</AccordionTrigger>
                    <AccordionContent>
                      <p>While genetic predisposition strongly influences pattern baldness, it's not necessarily inevitable. The inheritance pattern is complex and polygenic, meaning multiple genes contribute to the condition. Even with family history, environmental factors and lifestyle choices can influence when and how severely baldness manifests. Early intervention with treatments like minoxidil or finasteride can significantly slow progression in genetically predisposed individuals. Additionally, newer treatments like PRP therapy and low-level laser therapy show promise in managing hereditary hair loss.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">At what age does balding typically begin?</AccordionTrigger>
                    <AccordionContent>
                      <p>Male pattern baldness commonly begins between ages 20-35, with approximately 25% of men showing signs before age 21. However, onset can occur at any age after puberty. Early signs include recession at the temples and thinning at the crown. For women, noticeable thinning typically starts later, often in their 40s or 50s, particularly after menopause, though it can begin earlier. The age of onset often correlates with the severity and progression rate—earlier onset generally indicates more aggressive hair loss patterns that may progress more rapidly without intervention.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">Do women experience pattern baldness?</AccordionTrigger>
                    <AccordionContent>
                      <p>Yes, women do experience pattern hair loss, though it differs from male pattern baldness. Female pattern hair loss (FPHL) typically presents as diffuse thinning across the crown with preservation of the frontal hairline, rather than the distinctive receding hairline and bald spots seen in men. Approximately 40% of women show signs of hair loss by age 50, with the prevalence increasing after menopause. Hormonal changes, genetic factors, and aging contribute to FPHL. Women may also experience temporary hair loss related to pregnancy, thyroid disorders, nutritional deficiencies, or other health conditions.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">What treatments are most effective for preventing baldness?</AccordionTrigger>
                    <AccordionContent>
                      <p>The most scientifically validated treatments for pattern baldness include minoxidil (topical, FDA-approved for men and women), finasteride (oral, FDA-approved for men only), and low-level laser therapy devices. These treatments are most effective when started early and used consistently. For more advanced cases, hair transplantation provides lasting results by relocating hair follicles from donor areas to thinning regions. Emerging treatments showing promise include platelet-rich plasma (PRP) therapy, exosome therapy, and JAK inhibitors. Combination approaches often yield better results than monotherapy. Treatment effectiveness varies by individual, genetics, and the pattern and stage of hair loss.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">Can stress cause permanent hair loss?</AccordionTrigger>
                    <AccordionContent>
                      <p>Acute stress typically causes temporary hair loss through a condition called telogen effluvium, where hair prematurely enters the shedding phase. This hair loss is usually reversible once the stressor is removed. However, chronic, unmanaged stress can potentially worsen or accelerate genetic pattern baldness by increasing inflammation and affecting hormonal balance. Stress can also trigger or exacerbate autoimmune conditions like alopecia areata, which causes patchy hair loss. Stress management techniques, adequate sleep, and proper nutrition can help mitigate stress-related hair loss. If hair doesn't regrow within 6-9 months after stress reduction, consulting a dermatologist is recommended.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">Does diet affect hair loss?</AccordionTrigger>
                    <AccordionContent>
                      <p>Diet significantly impacts hair health, though it typically doesn't cause pattern baldness directly. Nutritional deficiencies—particularly in iron, zinc, biotin, vitamin D, omega-3 fatty acids, and protein—can contribute to increased hair shedding and reduced hair growth. Crash dieting and severe caloric restriction can trigger temporary hair loss by forcing hair follicles into a resting phase. A balanced diet rich in lean proteins, healthy fats, fruits, vegetables, and whole grains supports optimal hair growth. For those experiencing hair thinning, blood tests can identify potential nutritional deficiencies that may be contributing factors. While dietary improvements won't reverse genetic pattern baldness, they can optimize conditions for existing hair and support the efficacy of other treatments.</p>
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
                  <li><Link to="/baldness" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Baldness Risk Calculator</Link></li>
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

export default BaldnessRiskCalculatorPage;
