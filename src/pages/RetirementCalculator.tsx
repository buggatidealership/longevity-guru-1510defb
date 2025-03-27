
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import RetirementSavingsCalculator from '@/components/RetirementSavingsCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  generateBreadcrumbSchema, 
  generateFAQSchema, 
  generateArticleSchema 
} from '@/utils/seoUtils';

const RetirementCalculator = () => {
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

  // FAQ data for both display and schema
  const faqs = [
    {
      question: "What is a safe withdrawal rate in retirement?",
      answer: "The traditional \"4% rule\" suggests withdrawing 4% of your retirement savings in the first year, then adjusting that amount for inflation each subsequent year. This approach aims to provide a high probability that your savings will last 30 years. However, the optimal withdrawal rate depends on your specific circumstances including investment returns, inflation expectations, life expectancy, and risk tolerance. Our calculator provides a personalized safe withdrawal amount based on your inputs, which may differ from the standard 4% rule depending on your situation."
    },
    {
      question: "How does inflation affect retirement savings?",
      answer: "Inflation gradually reduces your purchasing power over time, meaning the same dollar amount buys less in the future than it does today. This is a critical factor in retirement planning since retirements can last 30+ years. A 3% annual inflation rate will approximately cut your purchasing power in half after 24 years. Our calculator accounts for inflation by calculating a \"real return rate\" (investment returns minus inflation), ensuring your spending estimates maintain their purchasing power throughout retirement. Without accounting for inflation, retirees risk significantly underestimating how much they need for a comfortable retirement."
    },
    {
      question: "How should I adjust my retirement strategy as I age?",
      answer: "As you age, it's important to regularly reassess your retirement strategy. In early retirement (ages 60-70), you might maintain a balanced portfolio with moderate growth potential. During mid-retirement (70-80), gradually increasing income allocation while reducing volatility often makes sense. In late retirement (80+), further reducing risk exposure while ensuring sufficient liquidity for healthcare needs becomes important. Additionally, spending patterns typically follow a \"smile curve\" - higher in early active retirement years, lower in middle retirement, then potentially higher again in late retirement due to healthcare costs. Revisit your calculator inputs every few years, especially after significant market movements or changes in health status."
    },
    {
      question: "Should I include my home equity in my retirement savings calculations?",
      answer: "Generally, you should only include home equity in your retirement calculations if you plan to access it through downsizing, a reverse mortgage, or selling your home. If you intend to remain in your current home, the equity represents a potential emergency resource rather than available retirement funds. Some financial planners suggest excluding home equity from primary retirement calculations, treating it instead as a separate contingency plan. If you do plan to tap home equity, be conservative in your estimates, accounting for transaction costs, potential market fluctuations, and the fact that you'll still need housing regardless. Our calculator works best with liquid assets that generate returns and can be drawn down systematically."
    },
    {
      question: "How can I increase my retirement income if the calculator shows I can't spend enough?",
      answer: "If your retirement spending calculations show inadequate income, consider these strategies: 1) Delay retirement to increase savings and potentially boost Social Security benefits; 2) Work part-time during early retirement years to reduce portfolio withdrawals; 3) Optimize your investment strategy for potentially higher returns (though this increases risk); 4) Consider a reverse mortgage if you have substantial home equity; 5) Reduce fixed expenses by downsizing or relocating to a lower-cost area; 6) Explore annuities that provide guaranteed lifetime income (carefully evaluating fees and terms); 7) Maximize tax efficiency of withdrawals to keep more of your money; 8) Reevaluate your budget to distinguish between essential and discretionary expenses. Remember that even small adjustments to savings, returns, or spending can significantly impact long-term financial sustainability."
    }
  ];

  // Prepare schema data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Retirement Savings Calculator", path: "/retirement-savings-calculator" }
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const articleSchema = generateArticleSchema(
    "Retirement Savings Calculator | Daily & Monthly Spending Estimator",
    "Calculate how much you can spend daily, monthly, and yearly in retirement. Our free retirement savings calculator helps you plan your financial future.",
    "/retirement-savings-calculator",
    "2023-01-15T00:00:00Z",
    new Date().toISOString()
  );

  const pageTitle = "Retirement Savings Calculator | Daily & Monthly Spending Estimator";
  const pageDescription = "Calculate how much you can spend daily, monthly, and yearly in retirement. Our free retirement savings calculator helps you plan your financial future.";

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://longevitycalculator.xyz/retirement-savings-calculator"
        keywords="retirement calculator, retirement savings calculator, retirement spending, retirement planning, retirement income calculator, retirement withdrawal calculator, daily spending retirement, monthly retirement income"
        schemas={[breadcrumbSchema, faqSchema, articleSchema]}
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

        <main className="max-w-4xl mx-auto px-4 pb-8">
          {/* Breadcrumb navigation */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Retirement Savings Calculator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="w-full flex justify-center">
            <div className="w-full">
              <RetirementSavingsCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About The Retirement Savings Calculator</h2>
            
            {/* Table of Contents */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => scrollToSection('overview')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    How The Calculator Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('benefits')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Key Benefits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('retirement-planning')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Retirement Planning
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div id="overview">
                <p>
                  Our <strong>Retirement Savings Calculator</strong> helps you determine how much you can safely spend each day, month, and year in retirement based on your total savings, life expectancy, and expected investment returns. This tool provides realistic spending estimates to help you plan your retirement finances with confidence.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="4444444444" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="how-it-works">
                <h3 className="text-xl font-medium mt-6">How The Retirement Savings Calculator Works</h3>
                <p>
                  This calculator uses a sophisticated algorithm that factors in your total retirement savings, current age, life expectancy, expected investment returns, and anticipated inflation to calculate sustainable withdrawal rates. It uses financial principles similar to the "4% rule" but customized to your specific situation.
                </p>
                <p className="mt-2">
                  The formula considers the time value of money, ensuring your withdrawals are adjusted for inflation while giving you the highest possible spending amount that won't deplete your savings before your expected life span ends.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Practical Spending Guidelines:</strong> See exactly how much you can spend daily, monthly, and yearly.
                  </li>
                  <li>
                    <strong>Inflation-Adjusted:</strong> All calculations account for the eroding effect of inflation on your purchasing power.
                  </li>
                  <li>
                    <strong>Personalized Results:</strong> Customize calculations based on your unique financial situation and life expectancy.
                  </li>
                  <li>
                    <strong>Real-time Adjustments:</strong> Instantly see how changes to savings, returns, or life expectancy affect your spending capacity.
                  </li>
                  <li>
                    <strong>Peace of Mind:</strong> Gain confidence knowing your retirement spending plan is financially sustainable.
                  </li>
                </ul>
              </div>
              
              <div id="retirement-planning">
                <h3 className="text-xl font-medium mt-6">Effective Retirement Planning Strategies</h3>
                <p className="mt-2">
                  While our calculator provides valuable spending guidance, comprehensive retirement planning should also consider:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Social Security Benefits:</strong> Factor in expected Social Security income in addition to your savings.</li>
                  <li><strong>Healthcare Costs:</strong> Budget for potentially increasing medical expenses as you age.</li>
                  <li><strong>Tax Considerations:</strong> Different retirement accounts have different tax implications for withdrawals.</li>
                  <li><strong>Estate Planning:</strong> Consider your legacy goals when determining spending rates.</li>
                  <li><strong>Asset Allocation:</strong> Maintain an appropriate investment mix throughout retirement.</li>
                </ul>
              </div>
              
              {/* FAQ Section with Accordion */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 hover:no-underline bg-gray-50">
                        <h4 className="font-semibold text-lg text-left">
                          {faq.question}
                        </h4>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 bg-white">
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
              <Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/female-fertility-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Female Fertility</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Child Growth</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/adult-height-predictor-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Adult Height</h3>
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
                  <li><Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
                  <li><Link to="/adult-height-predictor-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Adult Height Predictor</Link></li>
                  <li><Link to="/breast-implant-size-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Breast Implant Size Calculator</Link></li>
                  <li><Link to="/botox-dosage-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Botox Dosage Calculator</Link></li>
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
          </div>
        </footer>
      </div>
    </>
  );
};

export default RetirementCalculator;
