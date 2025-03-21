
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import GrowthPercentileCalculator from '@/components/GrowthPercentileCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const GrowthPercentilePage = () => {
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
        title="Child Growth Percentile Calculator | Height & Weight Charts"
        description="Calculate your child's height and weight percentiles using CDC growth charts. Free tool for parents to track child growth and development."
        canonicalUrl="https://longevitycalculator.xyz/growth"
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
              <GrowthPercentileCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Child Growth Percentile Calculator</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Our <strong>Child Growth Percentile Calculator</strong> helps parents and caregivers understand how their child's height and weight compare to other children of the same age and gender. Based on the CDC (Centers for Disease Control and Prevention) growth charts, this tool provides insights into where your child falls on standard growth curves.
              </p>
              
              <h3 className="text-xl font-medium mt-6">How The Growth Percentile Calculator Works</h3>
              <p>
                The calculator uses the LMS method (Lambda-Mu-Sigma) which is the statistical technique used to create standardized growth charts. By inputting your child's age, gender, height, and weight, the calculator determines which percentile your child falls into compared to the reference population of children.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Track Growth Over Time:</strong> Regular measurements help monitor your child's growth pattern and ensure they're developing consistently.
                </li>
                <li>
                  <strong>Early Identification:</strong> Recognize potential growth issues early when intervention may be most effective.
                </li>
                <li>
                  <strong>Better Understanding:</strong> Gain insight into how your child compares to standardized growth expectations.
                </li>
                <li>
                  <strong>Informed Discussions:</strong> Have more productive conversations with healthcare providers about your child's development.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Understanding Percentiles</h3>
              <p>
                A percentile shows the relative position of your child's measurement among children of the same age and gender. For example, if your child is in the 75th percentile for height, it means they are taller than 75% of children their age and gender. Being in a high or low percentile is not necessarily better or worse – what's most important is consistency in growth over time.
              </p>
              
              <p>
                It's important to note that growth percentiles should be interpreted by healthcare professionals within the context of your child's overall health, genetic background, and previous growth history. This calculator is designed as an educational tool, not a substitute for professional medical advice.
              </p>
              
              <p>
                For the most accurate assessment, healthcare providers typically measure children with specialized equipment and plot measurements on detailed growth charts over multiple visits to establish growth patterns.
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

export default GrowthPercentilePage;
