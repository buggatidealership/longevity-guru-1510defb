
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import EVRangeCalculatorComponent from '@/components/EVRangeCalculatorComponent';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const EVRangeCalculator = () => {
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
        title="EV Range Calculator | Calculate Electric Vehicle Travel Distance"
        description="Plan your electric vehicle trips with our EV range calculator. Get accurate estimates for Tesla, Ford, Chevrolet, and other EVs based on distance, model, and conditions."
        canonicalUrl="https://longevitycalculator.xyz/evrange"
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
              <EVRangeCalculatorComponent />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The EV Range Calculator</h2>
            
            {/* Table of Contents */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => scrollToSection('ev-overview')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('ev-how-it-works')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    How The Calculator Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('ev-benefits')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Key Benefits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('ev-factors')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Factors Affecting EV Range
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('ev-faq')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div id="ev-overview">
                <p>
                  Our <strong>EV Range Calculator</strong> is designed to help electric vehicle owners and prospective buyers accurately estimate how far they can travel on a single charge. Whether you're planning a road trip, commuting to work, or simply curious about an EV's capabilities, this calculator provides personalized range estimates based on your specific vehicle model and travel conditions.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="7777777777" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="ev-how-it-works">
                <h3 className="text-xl font-medium mt-6">How The EV Range Calculator Works</h3>
                <p>
                  This calculator uses manufacturer-provided range data for popular electric vehicle models and adjusts these figures based on real-world factors that impact battery performance. By selecting your EV model, starting city, destination, weather conditions, driving speed, and other variables, the calculator provides a realistic estimate of whether you can reach your destination on a single charge and how much battery percentage you'll have remaining upon arrival.
                </p>
              </div>
              
              <div id="ev-benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Trip Planning Confidence:</strong> Know in advance if your EV can reach your destination without charging stops.
                  </li>
                  <li>
                    <strong>Range Anxiety Reduction:</strong> Better understand your vehicle's capabilities under different conditions to reduce anxiety about running out of charge.
                  </li>
                  <li>
                    <strong>Model Comparison:</strong> Compare different EV models to see which ones would best meet your typical travel needs.
                  </li>
                  <li>
                    <strong>Efficiency Optimization:</strong> Learn how different factors affect your EV's range to maximize efficiency.
                  </li>
                </ul>
              </div>
              
              <div id="ev-factors">
                <h3 className="text-xl font-medium mt-6">Factors Affecting EV Range</h3>
                <p>
                  Multiple factors can significantly impact how far an electric vehicle can travel on a single charge. Temperature is one of the most influential factors, with cold weather potentially reducing range by 10-40% due to battery chemistry limitations and energy used for cabin heating. High speeds increase aerodynamic drag exponentially, dramatically reducing efficiency above 65 mph. Elevation changes, cargo weight, tire pressure, HVAC usage, and driving style also play substantial roles in determining real-world range.
                </p>
                
                <p>
                  Our calculator takes these variables into account to provide more accurate range estimates than the standard EPA or WLTP figures, which are tested under controlled, often ideal conditions. By accounting for the specific conditions of your journey, we help set realistic expectations for your EV's performance.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="ev-faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Why does my EV get less range than advertised?</h4>
                    <p className="mt-2">
                      Electric vehicle range estimates (EPA, WLTP) are conducted under standardized, often optimal conditions that don't reflect real-world driving. Factors reducing actual range include: cold or hot weather (10-40% loss in extreme temperatures), high-speed driving, aggressive acceleration, uphill travel, headwinds, full passenger/cargo loads, underinflated tires, and HVAC system usage. Our calculator adjusts for these variables to provide more realistic estimates for your specific journey and conditions.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How can I maximize my EV's driving range?</h4>
                    <p className="mt-2">
                      To maximize range: maintain moderate speeds (45-60 mph is typically most efficient); use eco driving modes; accelerate gently; utilize regenerative braking; precondition the battery and cabin while plugged in; minimize climate control usage or use seat heaters instead; ensure proper tire inflation; reduce unnecessary weight; remove roof racks when not needed; plan routes to avoid steep hills when possible; and park in temperature-controlled areas during extreme weather.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How accurate are EV range calculators?</h4>
                    <p className="mt-2">
                      EV range calculators provide estimates that are generally more accurate than manufacturer ratings for specific conditions, but still have limitations. Their accuracy depends on the quality of data used, the sophistication of their algorithms, and how precisely users input their conditions. Our calculator uses comprehensive vehicle data and considers multiple variables affecting range, but actual results may still vary by 5-15% due to unpredictable factors like traffic conditions, exact driving behavior, and microclimates along your route.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">Should I charge my EV to 100% for maximum range?</h4>
                    <p className="mt-2">
                      While charging to 100% provides maximum range for long trips, routinely charging to full capacity can accelerate battery degradation in most EVs. Manufacturers often recommend keeping the battery between 20-80% for daily use to extend battery lifespan. For long journeys where maximum range is needed, charging to 100% occasionally is acceptable, but avoid leaving the battery at 100% for extended periods. Some modern EVs allow you to set charging limits to automatically stop at your preferred level.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How does battery degradation affect EV range over time?</h4>
                    <p className="mt-2">
                      EV batteries typically lose 2-5% of their capacity during the first year and then 1-2% annually thereafter, directly affecting maximum range. Modern lithium-ion batteries in EVs generally retain 70-80% capacity after 8-10 years or 100,000+ miles. Factors accelerating degradation include: frequent DC fast charging, routinely charging to 100%, regularly depleting below 10%, exposure to extreme temperatures, and high-mileage usage. Many manufacturers offer 8-10 year battery warranties guaranteeing at least 70% capacity retention.
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

export default EVRangeCalculator;
