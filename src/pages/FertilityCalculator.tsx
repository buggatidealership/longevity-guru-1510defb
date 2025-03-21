
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import FemaleFeritilityCalculator from '@/components/FemaleFeritilityCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const FertilityCalculator = () => {
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
        title="Female Fertility Calculator | Estimate Your Reproductive Timeline"
        description="Estimate your fertility status and reproductive timeline based on age, AMH levels, and lifestyle factors. Free female fertility estimation calculator."
        canonicalUrl="https://longevitycalculator.xyz/fertility"
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
              <FemaleFeritilityCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Female Fertility Calculator</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Our <strong>Female Fertility Calculator</strong> helps women understand their current fertility status and estimate their reproductive timeline. This tool provides personalized insights based on age, AMH levels, family history, medical conditions, and lifestyle factors that influence fertility and reproductive health.
              </p>
              
              <h3 className="text-xl font-medium mt-6">How The Female Fertility Calculator Works</h3>
              <p>
                This calculator analyzes multiple factors known to impact female fertility, including current age, Anti-Müllerian Hormone (AMH) levels (if known), family history of early menopause, relevant medical conditions like PCOS or endometriosis, smoking status, and BMI. Using these inputs, the calculator estimates your current fertility status, projected timeline for fertility decline, and approximate age of menopause.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personalized Fertility Assessment:</strong> Receive a customized estimation of your reproductive timeline based on your unique health profile.
                </li>
                <li>
                  <strong>Proactive Family Planning:</strong> Gain insights to help with informed decision-making about when to start or expand your family.
                </li>
                <li>
                  <strong>Health Awareness:</strong> Identify modifiable factors that might be affecting your fertility potential.
                </li>
                <li>
                  <strong>Menopause Planning:</strong> Get an estimate of when you might expect to reach menopause to help with long-term health planning.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Why Fertility Assessment Matters</h3>
              <p>
                Understanding your fertility status is increasingly important in an era where many women are delaying childbearing for educational, career, or personal reasons. Research shows that female fertility naturally declines with age, particularly after 35, but the rate of decline varies significantly between individuals based on genetic factors, lifestyle choices, and medical conditions.
              </p>
              
              <p>
                Our Female Fertility Calculator helps you visualize your potential reproductive timeline, empowering you to make informed choices about family planning and fertility preservation options like egg freezing. Whether you're actively planning for pregnancy, considering preserving your fertility for the future, or simply curious about your reproductive health, our calculator provides valuable insights to guide your decisions.
              </p>
              
              <p>
                Remember that while this calculator provides a useful estimation based on population data, individual fertility can vary widely. For a comprehensive evaluation of your fertility status, we recommend consulting with a reproductive endocrinologist or fertility specialist.
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

export default FertilityCalculator;
