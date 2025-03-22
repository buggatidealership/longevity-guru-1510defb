
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import MetabolismCalculator from '@/components/MetabolismCalculator';
import { Calculator, Activity, Scale, HeartPulse, Info } from 'lucide-react';

const MetabolismCalculatorPage = () => {
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
        title="Metabolism Calculator | BMR and TDEE Calculator"
        description="Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) based on the latest scientific research. Free online metabolism calculator."
        canonicalUrl="https://longevitycalculator.xyz/metabolism"
        keywords="metabolism calculator, BMR calculator, TDEE calculator, basal metabolic rate, calorie calculator, weight loss calculator, energy expenditure, body fat calculator"
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
              <MetabolismCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Metabolism Calculator</h2>
            
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
                    onClick={() => scrollToSection('why-matters')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Why Metabolism Calculation Matters
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
                  Our <strong>Metabolism Calculator</strong> is a comprehensive tool designed to help you understand your body's energy requirements based on scientifically-validated formulas. It calculates your Basal Metabolic Rate (BMR)—the calories your body needs at rest—and your Total Daily Energy Expenditure (TDEE), which includes additional energy used during daily activities and exercise.
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
                <h3 className="text-xl font-medium mt-6">How The Metabolism Calculator Works</h3>
                <p>
                  The calculator employs multiple scientifically-validated equations, each with specific strengths for different populations. The Mifflin-St Jeor equation provides accurate estimates for most people, while specialized formulas like Katch-McArdle and Cunningham offer enhanced precision for athletic individuals with known body fat percentages. The calculator converts your personal metrics—height, weight, age, biological sex, activity level, and optionally body fat percentage—into precise caloric requirements.
                </p>
                <p className="mt-2">
                  Based on recent research, we've incorporated age-related metabolic insights from Pontzer et al. (2021), which revealed that metabolism remains relatively stable from ages 20-60 before declining at approximately 0.7% annually. This scientific foundation ensures you receive the most current, evidence-based metabolic estimates available.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Multiple Formula Options:</strong> Choose from five different scientifically-validated equations to find the one that works best for your body type and activity level.
                  </li>
                  <li>
                    <strong>Personalized Calorie Targets:</strong> Receive customized daily calorie recommendations for weight maintenance, different rates of weight loss, or weight gain.
                  </li>
                  <li>
                    <strong>Body Composition Insights:</strong> Understand your lean body mass and fat-free mass, which drive your metabolic rate.
                  </li>
                  <li>
                    <strong>Latest Research Integration:</strong> Benefit from calculations that incorporate the most recent scientific findings on human metabolism.
                  </li>
                  <li>
                    <strong>Educational Content:</strong> Learn about the science behind each formula and how different factors affect your metabolism.
                  </li>
                </ul>
              </div>
              
              <div id="why-matters">
                <h3 className="text-xl font-medium mt-6">Why Metabolism Calculation Matters</h3>
                <p>
                  Understanding your metabolic rate is the foundation of effective nutrition planning, whether your goal is weight management, athletic performance, or general health optimization. Research consistently shows that personalized caloric targets based on individual metabolic needs lead to more successful and sustainable outcomes compared to generic dietary recommendations.
                </p>
                
                <p className="mt-2">
                  Many people underestimate their caloric needs when trying to lose weight, leading to extreme restrictions that slow metabolism and trigger compensatory mechanisms. Conversely, others may overestimate their requirements when building muscle, resulting in excessive fat gain. Our metabolism calculator helps you avoid these pitfalls by providing science-based estimates tailored to your unique physiological profile.
                </p>
                
                <p className="mt-2">
                  For weight management specifically, studies indicate that understanding your TDEE allows for creating moderate caloric deficits (typically 500-750 calories per day) that maximize fat loss while preserving muscle mass and metabolic rate. This evidence-based approach supports sustainable body composition changes without the metabolic adaptation common in severe caloric restriction.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Which metabolic calculation formula is most accurate?</h4>
                    <p className="mt-2">
                      The most accurate formula depends on your individual characteristics. For most people, the Mifflin-St Jeor equation provides reliable estimates and is recommended by the Academy of Nutrition and Dietetics. If you know your body fat percentage, the Katch-McArdle formula may offer enhanced accuracy by accounting for lean body mass. Athletes and very active individuals often find the Cunningham equation most appropriate for their higher muscle mass. Since individual variations exist, you might try different formulas and compare which best matches your real-world energy needs.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Why is my metabolism lower or higher than I expected?</h4>
                    <p className="mt-2">
                      Several factors influence metabolic rate beyond the basics captured in standard formulas. Genetics play a significant role, with studies suggesting up to 10-16% variation between individuals with similar characteristics. Hormonal factors, including thyroid function, cortisol levels, and sex hormones, significantly impact energy expenditure. Previous dieting history may affect your metabolism through adaptive thermogenesis, where the body becomes more efficient after periods of caloric restriction. Additionally, factors like sleep quality, medication use, and ambient temperature can all influence metabolic rate.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How can I increase my metabolism naturally?</h4>
                    <p className="mt-2">
                      Research supports several effective strategies for enhancing metabolic rate: Building muscle mass through resistance training increases your resting metabolic rate since muscle tissue is metabolically active. High-intensity interval training (HIIT) creates a pronounced afterburn effect (excess post-exercise oxygen consumption) that elevates metabolism for hours after exercise. Eating sufficient protein (1.6-2.2g per kg of body weight) increases the thermic effect of food since protein requires more energy to digest. Staying hydrated, getting adequate sleep (7-9 hours), managing stress, and avoiding severe caloric restriction all help maintain optimal metabolic function.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Does metabolism really slow with age?</h4>
                    <p className="mt-2">
                      Recent research published in Science (Pontzer et al., 2021) has reshaped our understanding of age-related metabolic changes. The study found that, contrary to popular belief, metabolism remains relatively stable between ages 20 and 60 after accounting for changes in body composition. The significant decline in metabolic rate (about 0.7% per year) begins after age 60. What's often perceived as "slowing metabolism" in middle age is primarily due to decreasing muscle mass and increasing fat mass, along with reduced physical activity. This research highlights the importance of resistance training and maintaining muscle mass throughout life to preserve metabolic health.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How do I use the calorie targets for weight management?</h4>
                    <p className="mt-2">
                      For effective weight management, the calculator provides graduated calorie targets based on your TDEE. For weight loss, mild deficits (250-275 calories below TDEE) support gradual weight loss of about 0.25kg per week, while moderate deficits (500-550 calories) aim for approximately 0.5kg weekly. The aggressive deficit (1000-1100 calories) targets 1kg weekly but may be more challenging to sustain. For weight maintenance, consume calories at your TDEE level. For muscle gain, mild surpluses (250 calories above TDEE) support lean gains, while moderate surpluses (500 calories) allow faster growth with some fat accumulation. Always prioritize nutritious foods, adequate protein, and regular adjustment of calorie targets as your weight changes.
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

export default MetabolismCalculatorPage;
