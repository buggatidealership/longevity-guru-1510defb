
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import EVRangeCalculator from '@/components/EVRangeCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const EVRangeCalculatorPage = () => {
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
        title="EV Range Calculator | Plan Your Electric Vehicle Trip"
        description="Calculate if your electric vehicle can complete your planned trip on a single charge. Free EV range calculator for Tesla, Ford, Chevy, Nissan and more electric vehicles."
        canonicalUrl="https://longevitycalculator.xyz/evrange"
        keywords="ev range calculator, electric vehicle range, tesla range calculator, ev trip planner, ev charging calculator"
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
              <EVRangeCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The EV Range Calculator</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Our <strong>EV Range Calculator</strong> helps electric vehicle owners plan their trips by estimating whether their vehicle can complete the journey on a single charge. This tool provides quick insights based on your specific EV model and planned route.
              </p>
              
              <h3 className="text-xl font-medium mt-6">How The EV Range Calculator Works</h3>
              <p>
                The calculator uses the rated range of popular electric vehicles and simulates the distance of your planned trip to determine if you'll have enough battery to reach your destination. It analyzes your specific EV model's EPA-estimated range and compares it to your route distance to provide a realistic assessment of your trip's feasibility.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Trip Planning Confidence:</strong> Know ahead of time if your EV can make the journey without charging stops.
                </li>
                <li>
                  <strong>Range Anxiety Reduction:</strong> Reduce the stress of wondering if you'll run out of battery during your trip.
                </li>
                <li>
                  <strong>Charging Stop Planning:</strong> If your trip exceeds your vehicle's range, understand approximately how much additional charge you'll need.
                </li>
                <li>
                  <strong>EV Model Comparison:</strong> Compare how different electric vehicles would perform on your planned routes.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Understanding EV Range Factors</h3>
              <p>
                While our calculator provides valuable estimates, actual EV range can vary based on several factors. Driving speed, weather conditions, temperature, terrain, use of climate controls, and driving style all impact your vehicle's real-world range. In cold weather, EV range can decrease by 10-40%, while highway speeds typically consume more energy than city driving.
              </p>
              
              <p>
                This calculator should be used as a planning tool rather than a definitive assessment. For critical trips, always plan with a buffer and locate charging stations along your route as a precaution. Many EVs have built-in navigation systems that can provide more detailed range predictions based on real-time factors.
              </p>
              
              <p>
                Remember that the EV charging infrastructure continues to expand rapidly, making longer trips increasingly practical for electric vehicle owners. Many route planning apps specifically designed for EV drivers can help locate charging stations along your journey.
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
              
              <Link to="/evrange" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">EV Range</h3>
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
                  <li><Link to="/evrange" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">EV Range Calculator</Link></li>
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

export default EVRangeCalculatorPage;
