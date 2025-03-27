
import React from 'react';
import { Helmet } from 'react-helmet';
import OzempicWeightLossCalculator from '../components/OzempicWeightLossCalculator';
import FooterWithCollapsibleLinks from '../components/FooterWithCollapsibleLinks';
import Logo from '../components/Logo';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const OzempicWeightLossCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Ozempic Weight Loss Calculator | Estimate Your Potential Results</title>
        <meta
          name="description"
          content="Calculate your potential weight loss with Ozempic (semaglutide) based on clinical trial data. Personalize by age, weight, height, activity level, and treatment duration."
        />
        <meta
          name="keywords"
          content="ozempic calculator, semaglutide weight loss, ozempic weight loss, weight loss estimator, GLP-1 calculator, obesity treatment calculator"
        />
        <link rel="canonical" href="https://longevitycalculator.xyz/ozempic-weight-loss-calculator" />
        <meta property="og:title" content="Ozempic Weight Loss Calculator | Estimate Your Potential Results" />
        <meta property="og:description" content="Calculate your potential weight loss with Ozempic (semaglutide) based on clinical trial data. Personalize by age, weight, height, activity level, and treatment duration." />
        <meta property="og:url" content="https://longevitycalculator.xyz/ozempic-weight-loss-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://longevitycalculator.xyz/longevity-calculator-og.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Ozempic Weight Loss Calculator",
              "url": "https://longevitycalculator.xyz/ozempic-weight-loss-calculator",
              "description": "Calculate your potential weight loss with Ozempic (semaglutide) based on clinical trial data.",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0"
              },
              "creator": {
                "@type": "Organization",
                "name": "Longevity Calculator"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto pt-4 px-4">
        <header>
          <Logo className="mb-2" />
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <Breadcrumb className="mb-6">
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

        <main className="space-y-10 mb-16">
          <section>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ozempic Weight Loss Calculator</h1>
            <p className="text-gray-600 mb-8 md:text-lg">
              Estimate your potential weight loss with Ozempic (semaglutide) based on clinical trial data and your personal characteristics.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <OzempicWeightLossCalculator />
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg text-center" style={{ minHeight: '250px' }}>
                  <AdUnit 
                    className="w-full"
                    slot="2222222222" 
                    format="rectangle"
                    responsive={true}
                  />
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">About Ozempic for Weight Loss</h2>
                  <p className="text-gray-600 mb-4">
                    Ozempic (semaglutide) is a medication originally developed for Type 2 Diabetes that has shown significant weight loss benefits in clinical trials.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mimics GLP-1 hormone to reduce appetite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Slows gastric emptying for longer fullness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>FDA-approved for chronic weight management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Average loss of 15% body weight over 68 weeks in trials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-gray-50 rounded-lg text-center" style={{ minHeight: '90px' }}>
              <AdUnit 
                className="w-full"
                slot="3333333333" 
                format="horizontal"
                responsive={true}
              />
            </div>
          </section>

          <section className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg border border-gray-100">
                <h3 className="font-bold mb-2">How accurate is this calculator?</h3>
                <p className="text-gray-600">
                  This calculator provides estimates based on data from clinical trials, including STEP 1-4 and SUSTAIN studies. Individual results vary significantly based on many factors including adherence to medication schedule, diet, activity level, genetic factors, and metabolic health. The calculator should be used as a general guide only.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg border border-gray-100">
                <h3 className="font-bold mb-2">How does Ozempic cause weight loss?</h3>
                <p className="text-gray-600">
                  Ozempic (semaglutide) is a GLP-1 receptor agonist that works by mimicking a hormone that targets areas of the brain involved in appetite regulation. It helps you feel fuller faster, reduces hunger, and slows down stomach emptying, which can lead to reduced calorie intake and weight loss.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg border border-gray-100">
                <h3 className="font-bold mb-2">How much weight can I expect to lose?</h3>
                <p className="text-gray-600">
                  Clinical trials have shown that people taking semaglutide (as Wegovy, specifically approved for weight management) lost an average of 15% of their body weight over 68 weeks. Results with Ozempic might differ as dosing for weight management may be different than for diabetes. Individual results vary widely.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg border border-gray-100">
                <h3 className="font-bold mb-2">Will I regain the weight after stopping?</h3>
                <p className="text-gray-600">
                  Research indicates that most people regain weight after discontinuing semaglutide. A follow-up study found that participants regained about two-thirds of their lost weight one year after stopping the medication. This highlights the importance of lifestyle changes and potentially ongoing medication use for long-term management.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg border border-gray-100">
                <h3 className="font-bold mb-2">What are common side effects?</h3>
                <p className="text-gray-600">
                  Common side effects include nausea, vomiting, diarrhea, abdominal pain, and constipation. These gastrointestinal effects typically improve over time. More serious but rare side effects may include pancreatitis, gallbladder problems, hypoglycemia (in diabetics), and kidney problems. Always discuss potential side effects with your healthcare provider.
                </p>
              </div>
            </div>
          </section>
          
          <section className="max-w-3xl mx-auto">
            <Alert className="bg-yellow-50 border-yellow-200">
              <Info className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-yellow-800">Important Health Information</AlertTitle>
              <AlertDescription className="text-yellow-700">
                <p className="mb-2">This calculator is for educational purposes only and does not constitute medical advice. Ozempic (semaglutide) is a prescription medication that should only be used under the supervision of a qualified healthcare provider.</p>
                <p>Weight loss medications are typically recommended for individuals with a BMI ≥30, or ≥27 with weight-related health conditions. Consult a healthcare provider to determine if Ozempic is appropriate for your specific health situation.</p>
              </AlertDescription>
            </Alert>
          </section>
          
          <section className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">References</h2>
            
            <div className="p-6 bg-white rounded-lg border border-gray-100 space-y-3 text-sm text-gray-600">
              <p>1. Wilding JPH, et al. Once-weekly semaglutide in adults with overweight or obesity. <em>N Engl J Med.</em> 2021;384:989-1002.</p>
              <p>2. Davies M, et al. Semaglutide 2.4 mg once a week in adults with overweight or obesity and type 2 diabetes (STEP 2). <em>Lancet.</em> 2021;397:971-984.</p>
              <p>3. Wadden TA, et al. Effect of subcutaneous semaglutide vs placebo as an adjunct to intensive behavioral therapy on body weight in adults with overweight or obesity. <em>JAMA.</em> 2021;325:1403-1413.</p>
              <p>4. Rubino DM, et al. Effect of weekly subcutaneous semaglutide vs placebo on body weight in adults with overweight or obesity without diabetes. <em>JAMA.</em> 2022;327:138-150.</p>
              <p>5. Garvey WT, et al. Two-year effects of semaglutide in adults with overweight or obesity. <em>Nat Med.</em> 2022;28:2083-2091.</p>
            </div>
          </section>
        </main>
      </div>

      <FooterWithCollapsibleLinks />
    </div>
  );
};

export default OzempicWeightLossCalculatorPage;
