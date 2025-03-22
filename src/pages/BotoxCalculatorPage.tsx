
import { AdUnit } from '@/components/AdUnit';
import BotoxCalculator from '@/components/BotoxCalculator';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';

const BotoxCalculatorPage = () => {
  return (
    <>
      <SEOHead 
        title="Botox Dosage Calculator | Units and Cost Estimator Tool"
        description="Calculate Botox units needed for different facial areas and estimate treatment costs. Our free Botox calculator provides personalized dosage recommendations for forehead, crow's feet, and more."
        canonicalUrl="https://longevitycalculator.xyz/botox"
        keywords="botox calculator, botox dosage, botox units, botox cost calculator, botox price estimator, forehead botox, crow's feet units, glabellar lines, cosmetic injection planner"
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Botox Dosage Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Calculate the recommended Botox units for different facial areas and estimate treatment costs.
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
            content="This calculator provides general estimates based on common dosage ranges. Actual treatment should be determined by a qualified healthcare provider."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <BotoxCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Botox Dosage Calculator</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Our <strong>Botox Dosage Calculator</strong> helps estimate appropriate Botox units for different facial areas based on your individual characteristics. This tool provides guidance on potential treatment volumes and costs before consulting with a medical professional.
              </p>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="8888888888" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <h3 className="text-xl font-medium mt-6">How The Botox Calculator Works</h3>
              <p>
                This calculator analyzes factors like gender, age, muscle strength, and treatment experience to suggest appropriate Botox dosages. It considers these personal factors along with established dosing guidelines for different facial areas to create personalized estimates.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Better Preparation:</strong> Go into provider consultations with a clearer understanding of dosing concepts.
                </li>
                <li>
                  <strong>Personalized Estimates:</strong> Get dosage recommendations adjusted for your specific profile.
                </li>
                <li>
                  <strong>Cost Awareness:</strong> Receive approximate cost ranges for treatments in your region.
                </li>
                <li>
                  <strong>Area-Specific Information:</strong> Understand typical dosages for different facial regions.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Important Considerations</h3>
              <p>
                While our calculator provides helpful estimates, final Botox dosing should always be determined by a qualified healthcare provider. Many factors affect optimal dosing, including the specific Botox formulation, injection technique, and your unique facial anatomy.
              </p>
              
              <p>
                Remember that this calculator is for educational purposes only. The results should be used as a starting point for discussions with your provider, not as a definitive recommendation.
              </p>
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
              <Link to="/retirementsavings" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/lifespan" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/fertility" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/growth" className="border rounded-lg p-3 hover:shadow-md transition-shadow">
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
                  <li><Link to="/lifespan" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirementsavings" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/fertility" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/growth" className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
                  <li><Link to="/breastimplant" className="text-sm text-gray-600 hover:text-primary">Breast Implant Size Calculator</Link></li>
                  <li><Link to="/botox" className="text-sm text-gray-600 hover:text-primary">Botox Dosage Calculator</Link></li>
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

export default BotoxCalculatorPage;
