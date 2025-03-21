
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import LongevityCalculator from '@/components/LongevityCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const LongevityCalculatorPage = () => {
  // Handler to scroll to top when clicking internal links
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEOHead 
        title="Life Expectancy Calculator | Estimate Your Lifespan"
        description="Calculate your estimated life expectancy based on health factors, lifestyle choices, and demographics. Free longevity calculator."
        canonicalUrl="https://longevitycalculator.xyz/lifespan"
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
              <LongevityCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Life Expectancy Calculator</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Our <strong>Life Expectancy Calculator</strong> is a comprehensive tool designed to help you predict your potential lifespan based on various health metrics, lifestyle factors, and demographic characteristics. Using data-driven insights from population health studies, our calculator estimates how long you might live by analyzing your personal health profile and lifestyle choices.
              </p>
              
              <h3 className="text-xl font-medium mt-6">How The Life Expectancy Calculator Works</h3>
              <p>
                The calculator employs a sophisticated algorithm that evaluates multiple factors known to influence longevity, including age, sex, race/ethnicity, exercise habits, sleep patterns, smoking status, alcohol consumption, diet quality, stress levels, social connections, BMI, family history, education, income, chronic conditions, environmental factors, and healthcare access. Each factor is weighted based on scientific research about its impact on lifespan.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personalized Lifespan Estimate:</strong> Receive a customized life expectancy prediction based on your unique combination of health and lifestyle factors.
                </li>
                <li>
                  <strong>Modifiable Factor Insights:</strong> Identify which aspects of your lifestyle might be shortening or extending your life expectancy.
                </li>
                <li>
                  <strong>Health Decision Support:</strong> Make informed choices about lifestyle modifications that could potentially add years to your life.
                </li>
                <li>
                  <strong>Longevity Planning:</strong> Use your estimated life expectancy for retirement planning, insurance decisions, and other long-term life plans.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Why Life Expectancy Calculation Matters</h3>
              <p>
                Understanding your potential lifespan is increasingly important in a world where healthcare advances continue to extend human longevity. Research indicates that while genetic factors account for approximately 25% of lifespan determination, the remaining 75% is influenced by lifestyle choices, environmental factors, and access to healthcare. This means most people have significant control over how long they might live.
              </p>
              
              <p>
                Our Life Expectancy Calculator helps you visualize the potential impact of your current lifestyle on your longevity, empowering you to make conscious choices that may extend your healthy years. Whether you're planning for retirement, considering health insurance options, or simply curious about how your lifestyle affects your lifespan, our calculator provides valuable insights to guide your decisions.
              </p>
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

export default LongevityCalculatorPage;
