
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
            
            {/* Table of Contents */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => scrollToSection('fertility-overview')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('fertility-how-it-works')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    How The Calculator Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('fertility-benefits')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Key Benefits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('fertility-why-matters')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Why Fertility Assessment Matters
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('fertility-faq')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div id="fertility-overview">
                <p>
                  Our <strong>Female Fertility Calculator</strong> helps women understand their current fertility status and estimate their reproductive timeline. This tool provides personalized insights based on age, AMH levels, family history, medical conditions, and lifestyle factors that influence fertility and reproductive health.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="5555555555" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="fertility-how-it-works">
                <h3 className="text-xl font-medium mt-6">How The Female Fertility Calculator Works</h3>
                <p>
                  This calculator analyzes multiple factors known to impact female fertility, including current age, Anti-Müllerian Hormone (AMH) levels (if known), family history of early menopause, relevant medical conditions like PCOS or endometriosis, smoking status, and BMI. Using these inputs, the calculator estimates your current fertility status, projected timeline for fertility decline, and approximate age of menopause.
                </p>
              </div>
              
              <div id="fertility-benefits">
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
              </div>
              
              <div id="fertility-why-matters">
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
              
              {/* FAQ Section */}
              <div id="fertility-faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">At what age does female fertility start to decline?</h4>
                    <p className="mt-2">
                      Female fertility begins a gradual decline around age 30, with a more significant decrease after 35. By age 40, fertility has typically declined by about 50% compared to peak levels. However, this varies between individuals based on genetics, health factors, and lifestyle. Our calculator helps estimate your personal fertility timeline based on your specific risk factors and biomarkers like AMH levels.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What is AMH and why is it important for fertility?</h4>
                    <p className="mt-2">
                      Anti-Müllerian Hormone (AMH) is a protein produced by cells in developing egg follicles. It serves as a biomarker of ovarian reserve—the number of eggs remaining in your ovaries. Higher AMH levels generally indicate a larger remaining egg supply, while lower levels may suggest diminished ovarian reserve. While AMH cannot predict pregnancy success, it provides valuable information about potential reproductive lifespan and can help guide fertility treatment decisions.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">How can I improve my fertility naturally?</h4>
                    <p className="mt-2">
                      Several lifestyle modifications can support optimal fertility: maintaining a healthy weight (BMI between 20-24.9), quitting smoking, reducing alcohol consumption, managing stress, getting adequate sleep, eating a balanced diet rich in antioxidants and omega-3 fatty acids, reducing environmental toxin exposure, and regular moderate exercise. Women with conditions like PCOS or endometriosis should work with healthcare providers to manage these conditions, as they can impact fertility.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">When should I consider egg freezing?</h4>
                    <p className="mt-2">
                      Egg freezing (oocyte cryopreservation) is most effective when done before age 35, when egg quality and quantity are typically higher. Consider egg freezing if you want to preserve fertility for future family planning, are facing medical treatments that might affect fertility (like chemotherapy), or have conditions that could cause premature ovarian insufficiency. Our fertility calculator can help assess your current fertility status and potential timeline, which may inform your decision about egg freezing.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg">What medical conditions can affect female fertility?</h4>
                    <p className="mt-2">
                      Several medical conditions can impact fertility: Polycystic Ovary Syndrome (PCOS) affects ovulation; endometriosis can damage reproductive organs; primary ovarian insufficiency causes early menopause; thyroid disorders disrupt hormonal balance; sexually transmitted infections may cause scarring; and autoimmune diseases can trigger immune responses against reproductive tissues. Additionally, conditions like diabetes, obesity, and eating disorders can indirectly affect fertility by disrupting hormonal regulation and menstrual cycles.
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
