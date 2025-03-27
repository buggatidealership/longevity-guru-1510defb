
import React from 'react';
import SEOHead from '../components/SEOHead';
import OzempicWeightLossCalculator from '../components/OzempicWeightLossCalculator';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import FooterWithCollapsibleLinks from '../components/FooterWithCollapsibleLinks';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Logo from '../components/Logo';
import { AdUnit } from '../components/AdUnit';
import DisclaimerAlert from '../components/DisclaimerAlert';

const OzempicWeightLossCalculatorPage = () => {
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
        title="Ozempic Weight Loss Calculator | Free GLP-1 Weight Tool"
        description="Estimate your potential weight loss with Ozempic (semaglutide) using our free calculator. Get personalized projections based on clinical trial data, your BMI, and lifestyle factors."
        canonicalUrl="https://longevitycalculator.xyz/ozempic-weight-loss-calculator"
        keywords="ozempic calculator, semaglutide weight loss, GLP-1 weight calculator, weight loss prediction, ozempic results, projected weight loss, free online tool"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Ozempic Weight Loss Calculator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit className="w-full" slot="1111111111" format="horizontal" responsive={true} />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Ozempic Weight Loss Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Estimate your potential weight loss with Ozempic (semaglutide) based on clinical trial data and your personal factors.
          </p>
          
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit className="w-full" slot="6666666666" format="horizontal" responsive={true} />
          </div>
          
          <DisclaimerAlert 
            content="This calculator provides general estimates based on clinical trial averages. Individual results vary significantly. Ozempic/semaglutide should only be used under physician supervision. Consult your doctor before starting any medication."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <OzempicWeightLossCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Ozempic Weight Loss Calculator: How It Works</h2>
            
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
                    onClick={() => scrollToSection('mechanism')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    How Ozempic Works for Weight Loss
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('factors')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Factors Affecting Weight Loss
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
                  Our <strong>Ozempic Weight Loss Calculator</strong> helps individuals estimate their potential weight loss when using semaglutide (Ozempic, Wegovy) medications. Using data from clinical trials and adjusting for personal factors, this calculator provides a reasonable projection of expected outcomes over different treatment durations.
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
                <h3 className="text-xl font-medium mt-6">How The Calculator Works</h3>
                <p>
                  This calculator uses data from multiple clinical trials (including the STEP and SUSTAIN studies) to estimate weight loss with Ozempic/semaglutide. It analyzes your baseline metrics (weight, height, age, sex) along with factors known to influence treatment response (diabetes status, activity level, dietary changes) to generate a personalized projection of expected weight loss over your selected treatment duration.
                </p>
              </div>
              
              <div id="mechanism">
                <h3 className="text-xl font-medium mt-6">How Ozempic Works for Weight Loss</h3>
                <p>
                  Semaglutide (Ozempic/Wegovy) is a GLP-1 receptor agonist that works through several mechanisms:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Appetite Reduction:</strong> It acts on receptors in the brain that control hunger and satiety, reducing appetite and food cravings.
                  </li>
                  <li>
                    <strong>Slower Digestion:</strong> It slows stomach emptying, helping you feel fuller longer after eating.
                  </li>
                  <li>
                    <strong>Blood Sugar Regulation:</strong> It improves insulin sensitivity and reduces blood sugar spikes, which can reduce hunger and fat storage.
                  </li>
                  <li>
                    <strong>Metabolic Changes:</strong> It may improve metabolic function and energy utilization.
                  </li>
                </ul>
              </div>
              
              <div id="factors">
                <h3 className="text-xl font-medium mt-6">Factors Affecting Weight Loss Results</h3>
                <p>
                  Clinical studies show that individual response to semaglutide varies significantly. Key factors that influence results include:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Starting BMI:</strong> People with higher BMIs often lose more total weight but a similar percentage of body weight.</li>
                  <li><strong>Diabetes Status:</strong> People with type 2 diabetes typically lose about half as much weight as those without diabetes.</li>
                  <li><strong>Age:</strong> Younger patients (under 50) tend to lose more weight than older patients.</li>
                  <li><strong>Sex:</strong> Men often lose slightly more weight than women on average.</li>
                  <li><strong>Diet Quality:</strong> Making dietary improvements significantly enhances medication effects.</li>
                  <li><strong>Physical Activity:</strong> Regular exercise improves outcomes by 10-15%.</li>
                  <li><strong>Medication Adherence:</strong> Consistent weekly injections are essential for optimal results.</li>
                  <li><strong>Genetics:</strong> Individual genetic factors play a role in response to GLP-1 agonists.</li>
                </ul>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">How accurate is this Ozempic weight loss calculator?</AccordionTrigger>
                    <AccordionContent>
                      <p>This calculator provides an estimate based on clinical trial averages and published data. Individual results vary significantly based on factors like genetics, medication adherence, lifestyle changes, and metabolic factors. Consider this a reasonable projection rather than a guarantee. In clinical trials, some participants lost significantly more than average while others lost less.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">How long does it take to see results with Ozempic?</AccordionTrigger>
                    <AccordionContent>
                      <p>Most people begin to notice weight loss within 2-4 weeks of starting treatment. However, significant results typically become apparent after 2-3 months. Maximum weight loss usually occurs around the 9-12 month mark for most patients, although some continue to lose weight for up to 18 months. The medication is generally most effective when combined with lifestyle modifications.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">What's the difference between Ozempic, Wegovy, and other GLP-1 medications?</AccordionTrigger>
                    <AccordionContent>
                      <p>Ozempic and Wegovy both contain semaglutide and are made by the same company (Novo Nordisk). The primary differences are FDA approval (Ozempic for diabetes, Wegovy for weight management) and dosing (Wegovy offers higher maximum doses). Other GLP-1 medications include liraglutide (Saxenda, Victoza), dulaglutide (Trulicity), and tirzepatide (Mounjaro), which works on both GLP-1 and GIP receptors. Each medication has slightly different effectiveness, side effect profiles, and dosing schedules.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">What side effects are common with Ozempic/semaglutide?</AccordionTrigger>
                    <AccordionContent>
                      <p>Common side effects include nausea, vomiting, diarrhea, constipation, and abdominal pain. These digestive symptoms typically improve over time as your body adjusts to the medication. Other possible side effects include fatigue, headache, dizziness, and injection site reactions. Serious but rare side effects can include pancreatitis, gallbladder problems, hypoglycemia (especially in diabetic patients taking insulin), and allergic reactions. The gradual dose escalation schedule helps minimize side effects.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">What happens when you stop taking Ozempic?</AccordionTrigger>
                    <AccordionContent>
                      <p>Most people regain some weight after stopping semaglutide. Clinical studies show that approximately 2/3 of lost weight is typically regained within one year of discontinuation. This happens because the medication's appetite-suppressing and metabolic effects diminish when treatment ends. To maintain results after stopping, a strong focus on sustainable dietary changes, regular physical activity, and behavioral modifications is essential. Some healthcare providers recommend maintenance doses or transitioning to other weight management strategies.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">Who should not take Ozempic for weight loss?</AccordionTrigger>
                    <AccordionContent>
                      <p>Semaglutide is contraindicated for people with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2. It's not recommended during pregnancy or breastfeeding. People with a history of pancreatitis, severe gastrointestinal disease, diabetic retinopathy complications, or severe kidney disease should use caution and discuss risks with their doctor. It's also not approved for those under 18 years old. Always consult a healthcare provider to determine if Ozempic is appropriate for your specific health situation.</p>
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
              <Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/tdee-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">TDEE Calculator</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/vitamin-d-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Vitamin D</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
            </div>
          </div>
        </main>
        
        <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default OzempicWeightLossCalculatorPage;
