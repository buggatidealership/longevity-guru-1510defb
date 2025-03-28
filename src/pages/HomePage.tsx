
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Droplets, 
  Weight, 
  Flame, 
  Activity, 
  ArrowRight 
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import Logo from '@/components/Logo';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import CanonicalFixer from '@/components/CanonicalFixer';
import { generateWebPageSchema, generateItemListSchema } from '@/utils/schema-utils';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage: React.FC = () => {
  // Add homepage to sitemap with highest priority
  useEffect(() => {
    addUrlToSitemap('', 1.0);
  }, []);

  // Define canonical URL for this page
  const canonicalUrl = "https://longevitycalculator.xyz/";

  // Create structured data schemas
  const webPageSchema = generateWebPageSchema(
    "Longevity Calculator – Free Health & Wellness Calculators",
    "Discover free calculators helping you live healthier, smarter, and longer lives. Understand your health metrics instantly.",
    "",
    new Date().toISOString()
  );

  // Create ItemList schema for calculators
  const calculatorItems = [
    {
      name: "Vitamin D Intake Calculator",
      description: "Assess your vitamin D levels based on diet, sun exposure, and supplementation",
      url: "https://longevitycalculator.xyz/vitamin-d-calculator"
    },
    {
      name: "Creatine Water Intake Calculator",
      description: "Calculate optimal water intake when using creatine supplements",
      url: "https://longevitycalculator.xyz/creatine-water-calculator"
    },
    {
      name: "BMI Calculator",
      description: "Calculate your Body Mass Index and understand what it means for your health",
      url: "https://longevitycalculator.xyz/bmi-calculator"
    },
    {
      name: "TDEE Calculator",
      description: "Calculate your Total Daily Energy Expenditure for weight management",
      url: "https://longevitycalculator.xyz/tdee-calculator"
    },
    {
      name: "Metabolism Calculator",
      description: "Learn your metabolic rate and how to optimize it for better health",
      url: "https://longevitycalculator.xyz/metabolism-calculator"
    }
  ];

  const itemListSchema = generateItemListSchema(calculatorItems);

  return (
    <>
      <SEOHead
        title="Longevity Calculator – Free Health & Wellness Calculators"
        description="Discover free calculators helping you live healthier, smarter, and longer lives. Understand your health metrics instantly."
        canonicalUrl={canonicalUrl}
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
        keywords="longevity calculator, health calculator, wellness calculator, vitamin d calculator, creatine calculator, bmi calculator, tdee calculator, metabolism calculator"
        schemas={[webPageSchema, itemListSchema]}
      />
      <CanonicalFixer expectedCanonicalUrl={canonicalUrl} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-4">
            <Logo className="" />
            <nav className="flex space-x-4">
              <Link 
                to="/resources" 
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
          
          {/* AdSense Leaderboard - Above the fold */}
          <div className="w-full bg-gray-50 rounded-lg text-center mb-6" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Longevity Calculator – Live Longer, Healthier, Smarter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free calculators helping you live healthier and longer lives. Understand your health metrics instantly.
            </p>
          </section>

          {/* Featured Calculators Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Popular Health Calculators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Vitamin D Calculator */}
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-2">
                    <Sun className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle>Vitamin D Intake Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Assess your vitamin D levels from diet, sun exposure, and supplements to ensure optimal health and immune function.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/vitamin-d-calculator" className="w-full">
                    <Button className="w-full">
                      Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Creatine Water Calculator */}
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                    <Droplets className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Creatine Water Intake Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Calculate the optimal water intake needed when taking creatine supplements to maximize benefits and minimize side effects.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/creatine-water-calculator" className="w-full">
                    <Button className="w-full">
                      Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* BMI Calculator */}
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-2">
                    <Weight className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle>BMI Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Calculate your Body Mass Index (BMI) to get an indication of whether you're at a healthy weight for your height.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/bmi-calculator" className="w-full">
                    <Button className="w-full">
                      Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* AdSense Inline - Middle of content */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-50 rounded-lg text-center my-6" style={{ minHeight: '250px' }}>
                <AdUnit 
                  className="w-full"
                  slot="2222222222" 
                  format="rectangle"
                  responsive={true}
                />
              </div>

              {/* TDEE Calculator */}
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-2">
                    <Flame className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle>TDEE Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Calculate your Total Daily Energy Expenditure to understand your caloric needs for weight maintenance, loss, or gain.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/tdee-calculator" className="w-full">
                    <Button className="w-full">
                      Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Metabolism Calculator */}
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-2">
                    <Activity className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle>Metabolism Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Calculate your Basal Metabolic Rate (BMR) and learn strategies to boost your metabolism for better health and weight management.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/metabolism-calculator" className="w-full">
                    <Button className="w-full">
                      Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Resource Articles Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Expert Resources & Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/resources/how-to-boost-your-metabolism" className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How to Boost Your Metabolism</h3>
                  <p className="text-gray-600 mb-4">
                    Learn science-backed strategies to increase your metabolic rate naturally and improve energy levels.
                  </p>
                  <span className="text-primary flex items-center font-medium">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
              
              <Link to="/resources/how-to-use-your-bmi" className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Understanding Your BMI</h3>
                  <p className="text-gray-600 mb-4">
                    Discover what your BMI really means, its limitations, and how to use it properly as part of your health assessment.
                  </p>
                  <span className="text-primary flex items-center font-medium">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="mb-16 bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Use Our Calculators?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our free, evidence-based calculators help you make informed decisions about your health, longevity, and wellness goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="bg-white bg-opacity-80 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Science-Backed</h3>
                  <p className="text-gray-600">All calculators are based on peer-reviewed scientific research and validated formulas.</p>
                </div>
                <div className="bg-white bg-opacity-80 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Easy to Use</h3>
                  <p className="text-gray-600">Simple interfaces provide instant results with detailed explanations of what they mean.</p>
                </div>
                <div className="bg-white bg-opacity-80 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Completely Free</h3>
                  <p className="text-gray-600">No hidden fees, subscriptions, or paywalls - just valuable health insights at no cost.</p>
                </div>
              </div>
            </div>
          </section>

          {/* AdSense Footer Banner */}
          <div className="w-full bg-gray-50 rounded-lg text-center mb-8" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="3333333333" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </main>
        
        <FooterWithCollapsibleLinks />
      </div>
    </>
  );
};

export default HomePage;
