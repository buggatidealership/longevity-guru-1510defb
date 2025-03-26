
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Logo from '../components/Logo';
import FooterWithCollapsibleLinks from '../components/FooterWithCollapsibleLinks';

const Index = () => {
  // Array of calculator data
  const calculators = [
    {
      title: "Life Expectancy Calculator",
      description: "Discover factors influencing your longevity and get personalized recommendations to extend your healthy years.",
      href: "/life-expectancy-calculator",
      category: "Health"
    },
    {
      title: "Retirement Savings Calculator",
      description: "Plan for financial security by calculating how much you need to save for a comfortable retirement.",
      href: "/retirement-savings-calculator",
      category: "Finance"
    },
    {
      title: "Female Fertility Calculator",
      description: "Understand your fertility timeline and chances of conception based on your age and health factors.",
      href: "/female-fertility-calculator",
      category: "Family Planning"
    },
    {
      title: "Child Growth Percentile Calculator",
      description: "Track your child's height and weight percentiles compared to children of the same age and gender.",
      href: "/child-growth-percentile-calculator",
      category: "Pediatrics"
    },
    {
      title: "Adult Height Predictor",
      description: "Estimate a child's potential adult height based on parental heights and current measurements.",
      href: "/adult-height-predictor-calculator",
      category: "Growth"
    },
    {
      title: "Metabolism Calculator",
      description: "Calculate your basal metabolic rate (BMR) and understand your daily caloric needs.",
      href: "/metabolism-calculator",
      category: "Nutrition"
    },
    {
      title: "Breast Implant Size Calculator",
      description: "Find the ideal implant size for your body type and aesthetic goals.",
      href: "/breast-implant-size-calculator",
      category: "Aesthetics"
    },
    {
      title: "Botox Dosage Calculator",
      description: "Estimate appropriate Botox units for different facial areas based on individual factors.",
      href: "/botox-dosage-calculator",
      category: "Aesthetics"
    },
    {
      title: "Alcohol Impact Calculator",
      description: "Understand how alcohol consumption affects your health, longevity, and well-being.",
      href: "/alcohol-impact-calculator",
      category: "Lifestyle"
    },
    {
      title: "Baldness Risk Calculator",
      description: "Assess your risk of male pattern baldness based on genetics, age, and other factors.",
      href: "/baldness-risk-calculator",
      category: "Health"
    },
    {
      title: "TDEE Calculator",
      description: "Calculate your Total Daily Energy Expenditure to understand your maintenance calories.",
      href: "/tdee-calculator",
      category: "Nutrition"
    },
    {
      title: "Macronutrient Calculator",
      description: "Get personalized macronutrient ratios based on your body composition and fitness goals.",
      href: "/macronutrient-calculator",
      category: "Nutrition"
    },
    {
      title: "Ideal Body Weight Calculator",
      description: "Find your ideal weight range based on height, gender, and body frame size.",
      href: "/ideal-body-weight-calculator",
      category: "Health"
    },
    {
      title: "Vitamin D Calculator",
      description: "Estimate your vitamin D intake from food and sun exposure to determine if you're getting enough.",
      href: "/vitamin-d-calculator",
      category: "Nutrition"
    }
  ];

  // Group calculators by category
  const calculatorsByCategory = calculators.reduce((acc, calculator) => {
    if (!acc[calculator.category]) {
      acc[calculator.category] = [];
    }
    acc[calculator.category].push(calculator);
    return acc;
  }, {} as Record<string, typeof calculators>);

  // Sort categories alphabetically
  const sortedCategories = Object.keys(calculatorsByCategory).sort();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
            <Logo />
            <nav>
              <ul className="flex space-x-8">
                <li><Link to="/" className="text-primary font-medium">Home</Link></li>
                <li><Link to="/resources" className="text-gray-600 hover:text-primary">Resources</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main>
          {/* Hero Section */}
          <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Free Calculators for Better Life Decisions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Evidence-based tools to help you make informed decisions about health, finances, 
                and personal development at every stage of life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/life-expectancy-calculator" 
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium">
                  Try Life Expectancy Calculator
                </Link>
                <Link to="/resources"
                      className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium">
                  Explore Resources
                </Link>
              </div>
            </div>
          </section>
          
          {/* Calculators Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Find the Right Calculator for You
              </h2>
              
              {sortedCategories.map((category) => (
                <div key={category} className="mb-16">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{category} Calculators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {calculatorsByCategory[category].map((calculator) => (
                      <Link 
                        key={calculator.href}
                        to={calculator.href}
                        className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{calculator.title}</h3>
                          <p className="text-gray-600 flex-grow">{calculator.description}</p>
                          <div className="mt-4 text-primary font-medium">Try Calculator →</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* About Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Use Our Calculators?
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Our tools are built on scientific research and expert knowledge, 
                  providing reliable estimations to help you make informed decisions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based</h3>
                  <p className="text-gray-600">
                    All calculators are developed using peer-reviewed research and validated methodologies.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Free & Accessible</h3>
                  <p className="text-gray-600">
                    Our tools are completely free, with no hidden fees or subscription requirements.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy-Focused</h3>
                  <p className="text-gray-600">
                    We don't store your personal data, ensuring your information remains private.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Featured Resources Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Educational Resources
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our collection of articles and guides to help you understand the factors affecting health, longevity, and financial planning.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/resources/how-to-increase-life-expectancy" className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Increase Life Expectancy</h3>
                    <p className="text-gray-600 flex-grow">Evidence-based strategies to add healthy years to your life.</p>
                    <div className="mt-4 text-primary font-medium">Read More →</div>
                  </div>
                </Link>
                
                <Link to="/resources/how-much-to-save-for-retirement" className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How Much to Save for Retirement</h3>
                    <p className="text-gray-600 flex-grow">A complete guide to planning your retirement savings needs.</p>
                    <div className="mt-4 text-primary font-medium">Read More →</div>
                  </div>
                </Link>
                
                <Link to="/resources" className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">View All Resources</h3>
                    <p className="text-gray-600 flex-grow">Browse our complete collection of guides, articles, and references.</p>
                    <div className="mt-4 text-primary font-medium">Browse All →</div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <FooterWithCollapsibleLinks />
      </div>
    </>
  );
};

export default Index;
