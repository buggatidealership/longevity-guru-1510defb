
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import TDEECalculator from '@/components/TDEECalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import ResourcePageFooter from '@/pages/resources/components/ResourcePageFooter';

const TDEECalculatorPage = () => {
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

  // Schema markup for the FAQ section
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is TDEE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a 24-hour period. It includes your Basal Metabolic Rate (BMR) plus additional calories burned through physical activity, digestion, and non-exercise activity thermogenesis (NEAT)."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this TDEE calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This calculator provides an estimate based on well-established formulas like the Mifflin-St Jeor equation. However, individual metabolism can vary by 5-10% from these predictions. For the most accurate measurement, professional metabolic testing (indirect calorimetry) would be required."
        }
      },
      {
        "@type": "Question",
        "name": "How should I use my TDEE result?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your TDEE result can serve as a starting point for setting calorie goals. For weight maintenance, aim to consume approximately your TDEE in calories. For weight loss, create a moderate deficit (typically 300-500 calories below TDEE). For weight gain, create a surplus (typically 300-500 calories above TDEE). Monitor your results over 2-3 weeks and adjust as needed."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need to select my biological sex?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biological sex is an important factor in calculating BMR because males and females typically have different body compositions, with males generally having more muscle mass and less body fat than females at the same weight. Since muscle tissue burns more calories at rest than fat tissue, this affects the base metabolic rate calculation."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I recalculate my TDEE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should recalculate your TDEE whenever there are significant changes to the input factors: if your weight changes by more than 10 pounds (4.5 kg), if your activity level changes substantially, or approximately every 3-6 months as your metabolism naturally changes with age. Regular recalculation helps ensure your calorie targets remain appropriate."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="TDEE Calculator | Total Daily Energy Expenditure & Calorie Needs"
        description="Calculate your Total Daily Energy Expenditure (TDEE) and daily calorie needs based on your activity level. Free TDEE calculator for weight management, cutting, and bulking goals."
        canonicalUrl="https://longevitycalculator.xyz/tdee-calculator"
        keywords="TDEE calculator, total daily energy expenditure, calorie calculator, BMR calculator, maintenance calories, cutting calories, bulking calories, weight management calculator"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
        schemas={[faqSchema]}
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
          <h1 className="text-3xl font-bold mb-2">TDEE Calculator: Total Daily Energy Expenditure</h1>
          <p className="text-gray-600 mb-6">
            Calculate your daily calorie needs based on your age, sex, height, weight, and activity level. Get personalized maintenance, cutting, and bulking calorie targets.
          </p>
          
          {/* Calculator section with consistent spacing */}
          <div className="w-full mb-10">
            <TDEECalculator />
          </div>
          
          {/* About This Calculator Section */}
          <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">TDEE Calculator: Understanding Your Daily Calorie Needs</h2>
            
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
                    onClick={() => scrollToSection('key-components')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Key Components of TDEE
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('using-results')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    How to Use Your Results
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
                  Our <strong>TDEE Calculator</strong> (Total Daily Energy Expenditure) helps you determine the total number of calories your body burns in a day. Understanding your TDEE is essential for effective weight management, nutritional planning, athletic performance, and overall health optimization.
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
                <h3 className="text-xl font-medium mt-6">How The TDEE Calculator Works</h3>
                <p>
                  The calculator uses the Mifflin-St Jeor equation to first estimate your Basal Metabolic Rate (BMR)—the number of calories your body needs at complete rest. It then factors in your activity level using activity multipliers to determine your Total Daily Energy Expenditure, providing a comprehensive view of your caloric needs for maintenance, weight loss, or weight gain.
                </p>
                <p className="mt-2">
                  The formula takes into account your age, biological sex, height, weight, and activity level, as these factors significantly impact your metabolism and energy expenditure. The result is a personalized estimate of how many calories you burn daily.
                </p>
              </div>
              
              <div id="key-components">
                <h3 className="text-xl font-medium mt-6">Key Components of TDEE</h3>
                <p>
                  Your Total Daily Energy Expenditure consists of several components:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>Basal Metabolic Rate (BMR):</strong> The calories your body needs to maintain basic physiological functions at rest (60-70% of TDEE).
                  </li>
                  <li>
                    <strong>Thermic Effect of Food (TEF):</strong> The energy used to digest, absorb, and process nutrients (approximately 10% of TDEE).
                  </li>
                  <li>
                    <strong>Exercise Activity Thermogenesis (EAT):</strong> Calories burned during intentional physical exercise (varies widely based on activity level).
                  </li>
                  <li>
                    <strong>Non-Exercise Activity Thermogenesis (NEAT):</strong> Energy expended for everything that is not sleeping, eating, or sports-like exercise (fidgeting, walking, standing, etc.).
                  </li>
                </ul>
              </div>
              
              <div id="using-results">
                <h3 className="text-xl font-medium mt-6">How to Use Your TDEE Results</h3>
                <p>
                  Once you have your TDEE value, you can use it to establish calorie targets based on your goals:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <strong>For Weight Maintenance:</strong> Consume calories equal to your TDEE.
                  </li>
                  <li>
                    <strong>For Weight Loss (Cutting):</strong> Create a moderate calorie deficit by consuming 10-20% fewer calories than your TDEE. A deficit of 500 calories per day typically results in about 1 pound of weight loss per week.
                  </li>
                  <li>
                    <strong>For Weight Gain (Bulking):</strong> Create a calorie surplus by consuming 10-20% more calories than your TDEE to support muscle growth when combined with appropriate resistance training.
                  </li>
                </ul>
                
                <p className="mt-2">
                  Remember that these are estimates. The best approach is to start with these recommendations, track your results for 2-3 weeks, and then adjust as needed based on your body's actual response.
                </p>
              </div>
              
              {/* FAQ Section with Accordion */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      What is TDEE?
                    </AccordionTrigger>
                    <AccordionContent>
                      TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a 24-hour period. It includes your Basal Metabolic Rate (BMR) plus additional calories burned through physical activity, digestion, and non-exercise activity thermogenesis (NEAT). TDEE represents the energy your body needs to maintain its current weight given your activity level.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How accurate is this TDEE calculator?
                    </AccordionTrigger>
                    <AccordionContent>
                      This calculator provides an estimate based on well-established formulas like the Mifflin-St Jeor equation. However, individual metabolism can vary by 5-10% from these predictions. For the most accurate measurement, professional metabolic testing (indirect calorimetry) would be required. Use these results as a starting point and adjust based on how your body responds over 2-3 weeks of following the recommended calorie intake.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How should I use my TDEE result?
                    </AccordionTrigger>
                    <AccordionContent>
                      Your TDEE result can serve as a starting point for setting calorie goals. For weight maintenance, aim to consume approximately your TDEE in calories. For weight loss, create a moderate deficit (typically 300-500 calories below TDEE). For weight gain, create a surplus (typically 300-500 calories above TDEE). Monitor your results over 2-3 weeks and adjust as needed. Remember that nutritional quality matters as much as quantity—focus on nutrient-dense foods that support your health goals.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      Why do I need to select my biological sex?
                    </AccordionTrigger>
                    <AccordionContent>
                      Biological sex is an important factor in calculating BMR because males and females typically have different body compositions, with males generally having more muscle mass and less body fat than females at the same weight. Since muscle tissue burns more calories at rest than fat tissue, this affects the base metabolic rate calculation. The Mifflin-St Jeor equation includes different constants for males and females to account for these average physiological differences.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5" className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-semibold">
                      How often should I recalculate my TDEE?
                    </AccordionTrigger>
                    <AccordionContent>
                      You should recalculate your TDEE whenever there are significant changes to the input factors: if your weight changes by more than 10 pounds (4.5 kg), if your activity level changes substantially, or approximately every 3-6 months as your metabolism naturally changes with age. Regular recalculation helps ensure your calorie targets remain appropriate. Additionally, if you're not seeing expected results with your current calorie intake, it may be worth recalculating and reassessing your activity level selection.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <div className="mt-6 mb-6">
            <DisclaimerAlert 
              content="This calculator provides estimates based on statistical formulas and should not replace professional medical advice. Individual metabolic rates can vary significantly. For personalized nutritional guidance, consult with a registered dietitian or healthcare provider."
            />
          </div>
          
          <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
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
              
              <Link to="/metabolism-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Metabolism</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Child Growth</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
            </div>
          </div>
        </main>
        
        <ResourcePageFooter handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default TDEECalculatorPage;
