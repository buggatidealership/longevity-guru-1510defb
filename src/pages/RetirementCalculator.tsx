
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import RetirementSavingsCalculator from '@/components/RetirementSavingsCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const RetirementCalculator = () => {
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
        title="Will I Have Enough Money To Retire? | Retirement Savings Calculator"
        description="Find out if you have enough money to retire with our free retirement savings calculator. Determine how much you can safely spend each month without running out."
        canonicalUrl="https://longevitycalculator.xyz/retirementsavings"
        keywords="will I have enough money to retire, retirement calculator, retirement savings calculator, retirement planning, retirement income, enough money for retirement"
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
              <RetirementSavingsCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Will I Have Enough Money To Retire? Our Calculator Helps You Find Out</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Worried about having <strong>enough money to retire</strong>? Our <strong>Retirement Savings Calculator</strong> helps you answer the crucial question: <em>"Will I have enough money to retire comfortably?"</em> This comprehensive retirement income calculator provides personalized projections for your daily, monthly, and yearly spending capacity throughout your retirement years, ensuring you don't outlive your savings.
              </p>
              
              <h3 className="text-xl font-medium mt-6">How Our Retirement Calculator Determines If You Have Enough Money</h3>
              <p>
                Unlike basic retirement calculators, our tool uses advanced financial algorithms that account for your total retirement savings, current age, life expectancy, expected investment returns, and anticipated inflation rates. It calculates a safe withdrawal rate that helps you determine exactly how much you can spend in retirement without depleting your nest egg prematurely - giving you a clear answer to "will I have enough money when I retire?"
              </p>
              
              <h3 className="text-xl font-medium mt-6">Benefits of Using Our Retirement Sufficiency Calculator</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personalized Retirement Income Plan:</strong> Receive detailed guidance on how much you can safely withdraw each day, month, and year in retirement.
                </li>
                <li>
                  <strong>Inflation-Adjusted Retirement Projections:</strong> Our calculator accounts for inflation's impact on your purchasing power over time, ensuring your retirement savings will be enough.
                </li>
                <li>
                  <strong>Dynamic Scenario Testing:</strong> Adjust parameters to see how changes in investment returns, inflation rates, or life expectancy affect whether you'll have enough money to retire comfortably.
                </li>
                <li>
                  <strong>Long-Term Retirement Planning:</strong> Visualize if your retirement savings will last through your expected lifespan or if you need to save more before retiring.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Why Determining If You Have Enough Retirement Money Is Essential</h3>
              <p>
                According to financial experts, determining if you have enough money saved for retirement is one of the most significant financial challenges adults face. With Americans living longer than ever before, the risk of outliving your retirement savings is real. Studies show that approximately 40% of Americans worry about running out of money in retirement, making proper withdrawal planning essential.
              </p>
              
              <p>
                Our free retirement calculator helps address this concern by providing clear insights into how long your retirement savings will last. By calculating an optimal retirement income strategy today, you can make informed decisions about your spending and potentially extend the life of your retirement portfolio by many years - ensuring you have enough money to retire comfortably.
              </p>
              
              <h3 className="text-xl font-medium mt-6">How To Find Out If You'll Have Enough Money To Retire</h3>
              <p>
                For the most accurate assessment of whether you have enough money to retire, enter your current retirement savings balance, age, estimated life expectancy, expected investment return rate, and anticipated inflation rate. The calculator will instantly show you how much you can safely spend daily, monthly, and yearly throughout retirement without running out of money.
              </p>
              
              <p>
                Remember that this retirement sufficiency calculator is a planning tool. For comprehensive retirement income planning, consider consulting with a financial advisor who can help you integrate these calculations with your other retirement income sources like Social Security, pensions, and annuities to determine if you truly have enough money to retire when and how you want.
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
              <Link to="/retirementsavings" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow block">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/lifespan" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow block">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>

              <Link to="/fertility" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow block">
                <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/growth" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow block">
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

export default RetirementCalculator;
