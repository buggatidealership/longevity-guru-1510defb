
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';
import SEOHead from '@/components/SEOHead';
import { generateWebPageSchema } from '@/utils/seoUtils';

const calculators = [
  {
    id: 'life-expectancy',
    title: 'Life Expectancy Calculator',
    description: 'Calculate your estimated lifespan based on lifestyle, health, and demographic factors.',
    path: '/life-expectancy-calculator',
    imageUrl: '/longevity-calculator.jpg'
  },
  {
    id: 'retirement',
    title: 'Retirement Savings Calculator',
    description: 'Plan your retirement with our advanced savings calculator. See how much you need to save.',
    path: '/retirement-savings-calculator',
    imageUrl: '/retirement-calculator.jpg'
  },
  {
    id: 'fertility',
    title: 'Female Fertility Calculator',
    description: 'Estimate your fertility potential based on age and other important factors.',
    path: '/female-fertility-calculator',
    imageUrl: '/fertility-calculator.jpg'
  },
  {
    id: 'baldness',
    title: 'Male Pattern Baldness Risk Calculator',
    description: 'Calculate your risk of male pattern baldness based on genetics and lifestyle factors.',
    path: '/baldness-risk-calculator',
    imageUrl: '/baldness-calculator.jpg'
  },
  {
    id: 'growth',
    title: 'Child Growth Percentile Calculator',
    description: 'Check if your child\'s growth is on track with CDC growth charts for height, weight, and BMI.',
    path: '/child-growth-percentile-calculator',
    imageUrl: '/growth-calculator.jpg'
  },
  {
    id: 'height',
    title: 'Adult Height Predictor Calculator',
    description: 'Estimate a child\'s adult height based on parental height and current measurements.',
    path: '/adult-height-predictor-calculator',
    imageUrl: '/height-calculator.jpg'
  },
  {
    id: 'breast-implant',
    title: 'Breast Implant Size Calculator',
    description: 'Find your ideal breast implant size with our specialized calculator.',
    path: '/breast-implant-size-calculator',
    imageUrl: '/breast-implant-calculator.jpg'
  },
  {
    id: 'metabolism',
    title: 'Metabolism Calculator',
    description: 'Calculate your BMR and RMR to understand your metabolic rate and calorie needs.',
    path: '/metabolism-calculator',
    imageUrl: '/metabolism-calculator.jpg'
  },
  {
    id: 'alcohol',
    title: 'Alcohol Impact Calculator',
    description: 'Calculate how alcohol consumption affects your long-term health and life expectancy.',
    path: '/alcohol-impact-calculator',
    imageUrl: '/alcohol-calculator.jpg'
  },
  {
    id: 'botox',
    title: 'Botox Dosage Calculator',
    description: 'Calculate the optimal botox units needed for different facial areas based on your profile.',
    path: '/botox-dosage-calculator',
    imageUrl: '/botox-calculator.jpg'
  },
  {
    id: 'tdee',
    title: 'TDEE Calculator',
    description: 'Calculate your Total Daily Energy Expenditure for weight loss or muscle gain.',
    path: '/tdee-calculator',
    imageUrl: '/tdee-calculator.jpg'
  },
  {
    id: 'macronutrient',
    title: 'Macronutrient Calculator',
    description: 'Calculate your optimal daily intake of protein, carbohydrates, and fats based on your goals.',
    path: '/macronutrient-calculator',
    imageUrl: '/macronutrient-calculator.jpg'
  }
];

const sections = [
  { title: 'Lifespan', calculators: calculators.slice(0, 4) },
  { title: 'Growth & Development', calculators: calculators.slice(4, 6) },
  { title: 'Health & Fitness', calculators: calculators.slice(6, 12) }
];

const Index = () => {
  const webPageSchema = generateWebPageSchema(
    "Longevity & Health Calculators | BMR, TDEE, Retirement, Lifespan",
    "Free calculators for longevity, retirement, fertility, growth tracking, metabolism, body composition, and more. Evidence-based tools to improve health and plan your future."
  );

  return (
    <>
      <SEOHead 
        title="Longevity & Health Calculators | BMR, TDEE, Retirement, Lifespan"
        description="Free calculators for longevity, retirement, fertility, growth tracking, metabolism, body composition, and more. Evidence-based tools to improve health and plan your future."
        canonicalUrl="/"
        keywords="longevity calculator, retirement calculator, fertility calculator, growth chart calculator, health calculators, life expectancy estimate, free online calculators"
        schemas={[webPageSchema]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-6 px-4">
          <Logo className="mb-6" />
        </header>
  
        <main className="max-w-6xl mx-auto px-4 pb-12">
          <section className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Free Health & Longevity Calculators</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">Evidence-based tools to help you track health metrics, plan for the future, and make better lifestyle decisions.</p>
          </section>
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
  
          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.title} Calculators</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.calculators.map((calculator) => (
                  <Link 
                    key={calculator.id}
                    to={calculator.path} 
                    className="block group"
                  >
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden h-full">
                      <div className="aspect-[4/3] bg-gray-100 relative">
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-500/5 to-blue-500/5">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-400/10 group-hover:scale-105 transition-transform" />
                          <div className="text-primary text-4xl font-bold relative z-10">{calculator.id.charAt(0).toUpperCase()}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">
                          {calculator.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{calculator.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
          
          <div className="my-10 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="rectangle"
              responsive={true}
            />
          </div>
  
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About Our Calculators</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="mb-4">
                At Longevity Calculator, we develop evidence-based tools to help you understand important health metrics and make informed decisions about your wellbeing.
              </p>
              <p className="mb-4">
                Our calculators are designed to be easy to use while providing valuable insights based on scientific research and established medical guidelines. They cover a range of health and planning topics including life expectancy, retirement planning, fertility, growth tracking, and more.
              </p>
              <p>
                While our calculators provide estimates based on statistical averages and peer-reviewed research, they should be used for informational purposes only and not as a substitute for professional medical advice.
              </p>
            </div>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Educational Resources</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="mb-4">
                Looking to learn more about health topics related to our calculators? Check out our educational resources:
              </p>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link to="/resources/how-to-increase-life-expectancy" className="text-blue-600 hover:underline">
                    How to Increase Your Life Expectancy: Evidence-Based Guide
                  </Link>
                </li>
                <li>
                  <Link to="/resources/how-much-to-save-for-retirement" className="text-blue-600 hover:underline">
                    How Much Should You Save for Retirement? Complete Guide
                  </Link>
                </li>
                <li>
                  <Link to="/resources/how-to-boost-your-metabolism" className="text-blue-600 hover:underline">
                    How to Boost Your Metabolism: Science-Backed Methods
                  </Link>
                </li>
                <li>
                  <Link to="/resources/how-to-calculate-your-tdee" className="text-blue-600 hover:underline">
                    How to Calculate Your TDEE & Adjust It for Your Goals
                  </Link>
                </li>
              </ul>
              <Link to="/resources" className="text-blue-600 hover:underline font-medium">
                Browse All Resources →
              </Link>
            </div>
          </section>
        </main>
  
        <footer className="max-w-6xl mx-auto px-4 py-6 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
              <ul className="space-y-2">
                <li><Link to="/life-expectancy-calculator" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                <li><Link to="/retirement-savings-calculator" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                <li><Link to="/tdee-calculator" className="text-sm text-gray-600 hover:text-primary">TDEE Calculator</Link></li>
                <li><Link to="/macronutrient-calculator" className="text-sm text-gray-600 hover:text-primary">Macronutrient Calculator</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/resources" className="text-sm text-gray-600 hover:text-primary">All Resources</Link></li>
                <li><Link to="/resources/how-to-increase-life-expectancy" className="text-sm text-gray-600 hover:text-primary">Increasing Life Expectancy</Link></li>
                <li><Link to="/resources/how-to-boost-your-metabolism" className="text-sm text-gray-600 hover:text-primary">Boosting Metabolism</Link></li>
                <li><Link to="/resources/how-to-calculate-your-tdee" className="text-sm text-gray-600 hover:text-primary">TDEE Guide</Link></li>
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
        </footer>
      </div>
    </>
  );
};

export default Index;
