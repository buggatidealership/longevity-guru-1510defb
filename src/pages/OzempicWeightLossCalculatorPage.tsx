
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import OzempicWeightLossCalculator from '@/components/OzempicWeightLossCalculator';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { Link } from 'react-router-dom';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';

const OzempicWeightLossCalculatorPage = () => {
  // Add page to sitemap
  React.useEffect(() => {
    addUrlToSitemap('ozempic-weight-loss-calculator', 0.9);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEOHead 
        title="Ozempic Weight Loss Calculator | Estimate Your Results" 
        description="Calculate your potential weight loss with Ozempic (semaglutide) based on clinical study data. Personalized projections based on age, weight, activity level, and treatment duration."
        canonicalUrl="https://longevitycalculator.xyz/ozempic-weight-loss-calculator"
        keywords="ozempic calculator, semaglutide weight loss, GLP-1 weight loss, weight loss projection, ozempic results, expected weight loss, ozempic estimator, semaglutide calculator"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Ozempic Weight Loss Calculator</h1>
              <p className="text-muted-foreground mt-2">Estimate your potential weight loss with semaglutide based on clinical studies</p>
            </div>
            
            <div className="mb-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
              <AdUnit className="w-full" slot="1111111111" format="horizontal" responsive={true} />
            </div>
            
            <section id="overview" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What is Ozempic?</h2>
              <p className="mb-4">
                Ozempic (semaglutide) is a medication primarily approved for managing Type 2 Diabetes. It belongs to a class of drugs called GLP-1 receptor agonists that work by mimicking a hormone that targets areas of the brain involved in appetite regulation. While it's primarily prescribed for blood sugar management, significant weight loss is a notable side effect.
              </p>
              <p className="mb-4">
                In clinical trials, patients taking semaglutide lost an average of 12-15% of their body weight over 68 weeks, compared to 2.4% with placebo. The weight loss effects vary significantly between individuals based on multiple factors including starting weight, age, genetic factors, and lifestyle changes implemented alongside the medication.
              </p>
              <p>
                This calculator uses data from multiple clinical trials (including the STEP and SUSTAIN programs) to provide a personalized estimate of potential weight loss with Ozempic based on your specific characteristics.
              </p>
            </section>
            
            <DisclaimerAlert 
              title="Medical Disclaimer" 
              content="This calculator provides estimates based on clinical trial data. It is for informational purposes only and not a substitute for medical advice. Ozempic is a prescription medication and should only be used under a doctor's supervision. Side effects may include nausea, vomiting, diarrhea, abdominal pain, and in rare cases, more serious conditions. Never self-prescribe or adjust dosage without medical guidance." 
              className="mb-6"
            />
            
            <OzempicWeightLossCalculator />
            
            <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
              <AdUnit className="w-full" slot="2222222222" format="rectangle" responsive={true} />
            </div>
            
            <section id="how-it-works" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How This Calculator Works</h2>
              <p className="mb-4">
                This calculator uses data from multiple clinical trials of semaglutide (the active ingredient in Ozempic) to estimate potential weight loss. Here's how we generate your personalized projection:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Baseline Assessment:</strong> We start with average weight loss percentages observed in clinical trials (approximately 12% for non-diabetic patients and 6% for patients with Type 2 Diabetes over 6-12 months).
                </li>
                <li>
                  <strong>Age Adjustment:</strong> Research indicates that younger patients (under 50) tend to lose more weight, while older patients (over 65) may experience slightly less weight loss.
                </li>
                <li>
                  <strong>Sex Differences:</strong> Clinical data shows small differences in response between males and females.
                </li>
                <li>
                  <strong>Activity Level:</strong> Physical activity enhances weight loss results with GLP-1 medications.
                </li>
                <li>
                  <strong>Dietary Changes:</strong> The calculator factors in planned dietary modifications, as improved nutrition amplifies medication effects.
                </li>
                <li>
                  <strong>Treatment Duration:</strong> Weight loss typically accelerates in the first 3-6 months, then continues at a slower rate.
                </li>
              </ul>
              <p>
                The calculator combines these factors with your personal data to generate a personalized estimate of potential weight loss over your selected timeframe.
              </p>
            </section>
            
            <section id="limitations" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitations of This Calculator</h2>
              <p className="mb-4">
                While our calculator is based on clinical trial data, it has several limitations:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>It cannot account for individual metabolic differences or genetic factors.</li>
                <li>Results assume perfect medication adherence at optimal dosing.</li>
                <li>The calculator doesn't factor in potential side effects that might limit dosage or adherence.</li>
                <li>It doesn't consider all possible medical conditions that might affect weight loss.</li>
                <li>The projections don't account for weight loss plateaus that commonly occur.</li>
                <li>Individual results with any medication can vary significantly from averages reported in clinical trials.</li>
              </ul>
            </section>
            
            <section id="faq" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">How accurate is this calculator?</h3>
                  <p className="text-gray-700">
                    This calculator provides an estimate based on clinical data, but individual results vary significantly. It should be used as a general guide rather than a precise prediction. Many factors that affect weight loss cannot be fully captured in a calculator.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Is Ozempic approved for weight loss?</h3>
                  <p className="text-gray-700">
                    Ozempic is FDA-approved for Type 2 Diabetes management, not specifically for weight loss. Wegovy, which contains the same active ingredient (semaglutide) at a higher dose, is FDA-approved specifically for chronic weight management in adults with obesity or overweight with at least one weight-related condition.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">How long does it take to see results with Ozempic?</h3>
                  <p className="text-gray-700">
                    Most patients begin to see weight loss within the first 4-8 weeks. However, maximum results typically occur after several months of consistent use at the optimal dose. Clinical trials show continued weight loss for up to 68 weeks.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Will I regain weight after stopping Ozempic?</h3>
                  <p className="text-gray-700">
                    Clinical studies show that most patients regain some portion of their lost weight after discontinuing semaglutide. A STEP 1 trial extension found that patients regained approximately two-thirds of their weight loss within one year of stopping the medication. Lifestyle changes maintained during and after treatment can help limit weight regain.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">What are the most common side effects of Ozempic?</h3>
                  <p className="text-gray-700">
                    The most common side effects include nausea, vomiting, diarrhea, abdominal pain, and constipation. These gastrointestinal side effects are typically most pronounced when starting the medication or increasing the dose, and often decrease over time. More serious but rare side effects can include pancreatitis, gallbladder problems, and kidney issues.
                  </p>
                </div>
              </div>
            </section>

            <div className="mb-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
              <AdUnit className="w-full" slot="3333333333" format="horizontal" responsive={true} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-4">
              <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#overview" className="text-blue-600 hover:underline">What is Ozempic?</Link>
                </li>
                <li>
                  <a href="#calculator" className="text-blue-600 hover:underline">Weight Loss Calculator</a>
                </li>
                <li>
                  <Link to="#how-it-works" className="text-blue-600 hover:underline">How This Calculator Works</Link>
                </li>
                <li>
                  <Link to="#limitations" className="text-blue-600 hover:underline">Limitations</Link>
                </li>
                <li>
                  <Link to="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</Link>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Related Calculators</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/ideal-body-weight-calculator" className="text-blue-600 hover:underline">Ideal Body Weight Calculator</Link>
                  </li>
                  <li>
                    <Link to="/tdee-calculator" className="text-blue-600 hover:underline">TDEE Calculator</Link>
                  </li>
                  <li>
                    <Link to="/macronutrient-calculator" className="text-blue-600 hover:underline">Macronutrient Calculator</Link>
                  </li>
                  <li>
                    <Link to="/metabolism-calculator" className="text-blue-600 hover:underline">Metabolism Calculator</Link>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Health Reminder</h3>
                <p className="text-sm text-gray-600">
                  Medications like Ozempic should always be used under medical supervision. The healthiest weight loss approaches combine medication (when appropriate) with sustainable lifestyle changes including diet, exercise, and behavioral modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzempicWeightLossCalculatorPage;
