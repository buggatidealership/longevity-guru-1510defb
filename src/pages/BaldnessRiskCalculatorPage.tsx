
import { AdUnit } from '@/components/AdUnit';
import BaldnessRiskCalculator from '@/components/BaldnessRiskCalculator';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BaldnessRiskCalculatorPage = () => {
  return (
    <>
      <SEOHead 
        title="Baldness Risk Calculator | Hair Loss Prediction Tool"
        description="Calculate your risk of male and female pattern baldness based on genetics, lifestyle, and current symptoms. Get personalized recommendations and predict your baldness timeline with our free calculator."
        canonicalUrl="https://longevitycalculator.xyz/baldness-risk-calculator"
        keywords="baldness calculator, hair loss predictor, male pattern baldness, female pattern baldness, genetic hair loss, alopecia risk, baldness probability, hair thinning assessment, receding hairline prediction"
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Baldness Risk Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Estimate your risk of hair loss and get personalized recommendations based on genetic and lifestyle factors.
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
            content="This calculator provides general estimates based on common risk factors. For a definitive assessment, please consult with a dermatologist or trichologist."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <BaldnessRiskCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Baldness Risk Calculator: Predict Your Hair Loss Timeline</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Our <strong>Baldness Risk Calculator</strong> helps you assess your risk of experiencing pattern hair loss based on genetic factors, current symptoms, and lifestyle variables. This tool can help you understand your personal risk profile and when you might experience significant hair loss.
              </p>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="8888888888" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <h3 className="text-xl font-medium mt-6">How The Baldness Calculator Works</h3>
              <p>
                This calculator analyzes known baldness risk factors including family history, current hair condition, hormonal factors, stress levels, diet quality, and demographic information. It combines these inputs to generate a personalized risk assessment and timeline prediction.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Understand Your Risk Profile:</strong> Get insights into your personal risk factors for hair loss.
                </li>
                <li>
                  <strong>Timeline Estimation:</strong> Receive an approximate age prediction for when you might experience significant hair loss.
                </li>
                <li>
                  <strong>Personalized Recommendations:</strong> Get tailored suggestions based on your specific risk level.
                </li>
                <li>
                  <strong>Early Intervention Planning:</strong> Identify when preventative measures might be most effective.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Understanding the Science of Hair Loss</h3>
              <p>
                Pattern baldness (androgenetic alopecia) affects approximately 50% of men and 25% of women by age 50. While genetic factors play a significant role in determining hair loss risk, multiple other factors can influence both the onset and progression of baldness, including hormonal balance, stress levels, nutritional status, and certain medical conditions.
              </p>
              
              <p>
                For males, the hormone dihydrotestosterone (DHT) is the primary driver of pattern baldness, causing hair follicles to shrink over time. Female pattern hair loss is typically influenced by a combination of genetic predisposition, hormonal changes (especially during menopause), and aging.
              </p>
              
              <p>
                Early identification of risk factors can help individuals take preventative measures before significant hair loss occurs. Modern treatments include topical medications like minoxidil, oral medications like finasteride (for men), low-level laser therapy, platelet-rich plasma (PRP) treatments, and hair transplantation for more advanced cases.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Important Considerations</h3>
              <p>
                While our calculator provides helpful estimates based on known risk factors, hair loss can sometimes be caused by temporary conditions or underlying health issues not captured by this tool. Factors such as certain medications, autoimmune disorders, nutritional deficiencies, or scalp infections may cause hair loss that isn't related to pattern baldness.
              </p>
              
              <p>
                If you're experiencing sudden or unusual hair loss, consulting with a healthcare provider is recommended to rule out potential medical causes. This calculator is designed for educational purposes and should not replace professional medical advice or diagnosis.
              </p>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions About Hair Loss</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">Is baldness always inherited from the mother's side?</AccordionTrigger>
                <AccordionContent>
                  <p>No, this is a common misconception. While the primary baldness gene is on the X chromosome (inherited from your mother), pattern baldness is actually polygenic, meaning multiple genes from both parents contribute to your risk. The maternal grandfather's hair pattern is an important indicator, but your father's genes also play a significant role. Our calculator considers family history from both sides.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">At what age does male pattern baldness typically start?</AccordionTrigger>
                <AccordionContent>
                  <p>Male pattern baldness can begin as early as the late teens or early 20s for those with strong genetic predispositions. However, the most common onset is between ages 25-35. By age 50, approximately 50% of men have noticeable hair loss. Early signs include a receding hairline (particularly at the temples) and thinning at the crown. The earlier the onset, typically the more extensive the eventual hair loss.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Can women experience pattern baldness too?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes, female pattern hair loss (FPHL) affects approximately 40% of women by age 50. Unlike men, women typically experience diffuse thinning across the crown with preservation of the frontal hairline. Hormonal changes during menopause often accelerate this process. Women are less likely to go completely bald but may have significant thinning that affects hair volume and coverage. FPHL is influenced by both genetic and hormonal factors.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">What treatments actually work for preventing baldness?</AccordionTrigger>
                <AccordionContent>
                  <p>The most effective scientifically-proven treatments include: (1) Minoxidil (Rogaine) - a topical treatment that increases blood flow and extends the growth phase of hair follicles; (2) Finasteride (Propecia) - an oral medication for men that blocks DHT production; (3) Low-level laser therapy devices; (4) PRP (platelet-rich plasma) injections. For advanced hair loss, hair transplantation offers a permanent solution. Early intervention typically yields better results, which is why identifying risk early is valuable.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Can stress cause permanent hair loss?</AccordionTrigger>
                <AccordionContent>
                  <p>Acute stress can cause temporary hair loss called telogen effluvium, where hair follicles prematurely enter the resting phase, resulting in increased shedding. This is usually reversible once the stress is managed. However, chronic stress may accelerate pattern baldness in genetically predisposed individuals by increasing inflammation, disrupting hormone balance, and potentially increasing sensitivity to DHT. Stress management is an important component of a comprehensive hair loss prevention strategy.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">Does diet affect hair loss?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes, nutrition plays an important role in hair health. Deficiencies in iron, zinc, vitamin D, B vitamins (especially biotin), and protein can contribute to hair thinning and loss. Crash dieting or severe caloric restriction can also trigger temporary hair shedding. While improving nutrition won't reverse genetic pattern baldness, a balanced diet rich in these nutrients supports optimal hair growth and may slow progression in combination with other treatments.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
            <h2 className="text-xl font-semibold mb-3">Free Health Calculators</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <Link to="/life-expectancy-calculator" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/metabolism-calculator" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Metabolism</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/female-fertility-calculator" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/alcohol-impact-calculator" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Alcohol Impact</h3>
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
                  <li><Link to="/life-expectancy-calculator" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirement-savings-calculator" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/child-growth-percentile-calculator" className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
                  <li><Link to="/baldness-risk-calculator" className="text-sm text-gray-600 hover:text-primary">Baldness Risk Calculator</Link></li>
                  <li><Link to="/metabolism-calculator" className="text-sm text-gray-600 hover:text-primary">Metabolism Calculator</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
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
