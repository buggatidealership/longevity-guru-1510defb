import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import MacronutrientCalculator from '@/components/MacronutrientCalculator';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { AdUnit } from '@/components/AdUnit';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/utils/seoUtils';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';

const MacronutrientCalculatorPage = () => {
  const [activeTab, setActiveTab] = useState<string>('calculator');
  
  // Generate SEO schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Macronutrient Calculator', path: '/macronutrient-calculator' }
  ]);
  
  const faqSchema = generateFAQSchema([
    {
      question: "What is a macronutrient calculator?",
      answer: "A macronutrient calculator determines your optimal daily intake of protein, carbohydrates, and fats based on your age, weight, height, activity level, and fitness goals like fat loss, maintenance, or muscle gain."
    },
    {
      question: "How accurate are macronutrient calculators?",
      answer: "Macronutrient calculators provide estimates based on established formulas and averages. They're typically accurate within 10-15% for most people, but individual metabolism can vary. Monitor your results and adjust as needed."
    },
    {
      question: "What are macronutrients?",
      answer: "Macronutrients are the three main nutrients your body needs in large amounts: proteins (4 calories per gram), carbohydrates (4 calories per gram), and fats (9 calories per gram). They provide energy and are essential for bodily functions."
    },
    {
      question: "How much protein should I eat daily?",
      answer: "For general health, the RDA is 0.8g per kg of body weight. However, for active individuals, 1.2-2.0g per kg is often recommended. Our calculator provides personalized recommendations based on your specific goals and activity level."
    },
    {
      question: "Should I change my macros on rest days?",
      answer: "Some people reduce carbohydrates on rest days while maintaining protein intake. However, for simplicity and consistency, many nutritionists recommend keeping the same macro targets daily, especially for beginners."
    },
    {
      question: "How often should I recalculate my macros?",
      answer: "It's advisable to recalculate your macros every 4-6 weeks or whenever you experience significant changes in weight (5+ lbs), activity level, or fitness goals to ensure your nutrition plan remains aligned with your needs."
    }
  ]);
  
  // Combine all schemas
  const schemas = [breadcrumbSchema, faqSchema];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEOHead
        title="Macronutrient Calculator – Personalized Protein, Carbs & Fat Ratios"
        description="Calculate your optimal daily protein, carbohydrate, and fat intake based on your age, weight, height, and fitness goals. Free online macronutrient calculator."
        canonicalUrl="/macronutrient-calculator"
        keywords="macronutrient calculator, macro calculator, protein calculator, carbs calculator, nutrition calculator, protein intake, carbohydrate ratio, healthy diet, macro ratio, fitness nutrition"
        schemas={schemas}
      />
      
      <header className="max-w-6xl mx-auto pt-6 px-4">
        <Logo className="mb-4" />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Macronutrient Calculator</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl">
          Calculate your optimal daily protein, carbohydrate, and fat intake based on your body metrics and fitness goals.
        </p>
        
        <div className="my-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
          <AdUnit
            className="w-full"
            slot="1111111111"
            format="horizontal"
            responsive={true}
          />
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/4">
            <Tabs defaultValue="calculator" onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="about">About & Science</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calculator" className="space-y-6">
                <DisclaimerAlert className="mb-6" />
                
                <MacronutrientCalculator />
                
                <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
                  <AdUnit
                    className="w-full"
                    slot="2222222222"
                    format="rectangle"
                    responsive={true}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold mb-4" id="what-are-macronutrients">What Are Macronutrients?</h2>
                    <p className="mb-4">
                      Macronutrients are the three main nutrients that your body needs in large amounts to function properly:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>
                        <strong>Protein (4 calories per gram):</strong> Essential for building and repairing muscle tissue, 
                        immune function, enzyme production, and other vital processes.
                      </li>
                      <li>
                        <strong>Carbohydrates (4 calories per gram):</strong> Your body's primary energy source, 
                        especially for high-intensity activities and brain function.
                      </li>
                      <li>
                        <strong>Fats (9 calories per gram):</strong> Necessary for hormone production, 
                        vitamin absorption, cell membrane health, and long-term energy storage.
                      </li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mb-4" id="why-track-macros">Why Track Macronutrients?</h2>
                    <p className="mb-4">
                      While simply counting calories can help with weight management, tracking macronutrients offers several advantages:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>
                        <strong>Better Body Composition:</strong> More precise control over muscle gain and fat loss.
                      </li>
                      <li>
                        <strong>Improved Performance:</strong> Optimize energy levels for your specific activities and goals.
                      </li>
                      <li>
                        <strong>Nutritional Balance:</strong> Ensure you're getting enough of each essential nutrient.
                      </li>
                      <li>
                        <strong>Metabolic Health:</strong> Support healthy hormone levels and metabolic function.
                      </li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mb-4" id="how-calculator-works">How Our Calculator Works</h2>
                    <p className="mb-4">
                      Our macronutrient calculator determines your optimal intake through these steps:
                    </p>
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                      <li>
                        <strong>Calculate Basal Metabolic Rate (BMR):</strong> Using the Mifflin-St Jeor equation, 
                        which accounts for your age, gender, height, and weight.
                      </li>
                      <li>
                        <strong>Determine Total Daily Energy Expenditure (TDEE):</strong> By applying an activity 
                        multiplier to your BMR based on your typical weekly activity level.
                      </li>
                      <li>
                        <strong>Adjust for Goals:</strong> Your calorie target is adjusted based on your goal 
                        (fat loss, maintenance, or muscle gain).
                      </li>
                      <li>
                        <strong>Calculate Macronutrient Breakdown:</strong> Your daily calories are divided into 
                        protein, carbohydrates, and fats according to scientifically-backed ratios that optimize 
                        for your specific goal.
                      </li>
                    </ol>
                    
                    <h2 className="text-2xl font-semibold mb-4" id="how-to-use-results">How to Use Your Results</h2>
                    <p className="mb-4">
                      Once you have your macronutrient targets, here's how to implement them effectively:
                    </p>
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                      <li>
                        <strong>Start Food Tracking:</strong> Use a food tracking app to log your daily intake 
                        and compare it to your targets.
                      </li>
                      <li>
                        <strong>Prioritize Protein:</strong> Focus on hitting your protein target first, as it's 
                        crucial for preserving and building muscle.
                      </li>
                      <li>
                        <strong>Be Consistent:</strong> Aim for consistency rather than perfection. Try to get within 
                        5-10g of each macronutrient target daily.
                      </li>
                      <li>
                        <strong>Monitor Results:</strong> Track your progress for 2-4 weeks, then adjust if necessary 
                        based on your results.
                      </li>
                      <li>
                        <strong>Recalculate When Needed:</strong> Recalculate your macros whenever your weight changes 
                        significantly (±5 lbs) or if your activity level or goals change.
                      </li>
                    </ol>
                    
                    <h2 className="text-2xl font-semibold mb-4" id="optimal-macros">Optimal Macro Ratios by Goal</h2>
                    <p className="mb-4">
                      While individual needs vary, here are generally recommended macro ratios based on common fitness goals:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-200 px-4 py-2 text-left">Goal</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Protein</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Carbohydrates</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Fats</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 px-4 py-2">Fat Loss</td>
                            <td className="border border-gray-200 px-4 py-2">40%</td>
                            <td className="border border-gray-200 px-4 py-2">25%</td>
                            <td className="border border-gray-200 px-4 py-2">35%</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-4 py-2">Maintenance</td>
                            <td className="border border-gray-200 px-4 py-2">30%</td>
                            <td className="border border-gray-200 px-4 py-2">40%</td>
                            <td className="border border-gray-200 px-4 py-2">30%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-2">Muscle Gain</td>
                            <td className="border border-gray-200 px-4 py-2">30%</td>
                            <td className="border border-gray-200 px-4 py-2">50%</td>
                            <td className="border border-gray-200 px-4 py-2">20%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="mt-4 text-sm text-gray-600">
                      Note: These are starting points based on scientific research. Individual results may vary, and 
                      your optimal ratios might differ based on factors like metabolism, body type, exercise style, 
                      and dietary preferences.
                    </p>
                  </CardContent>
                </Card>
                
                <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
                  <AdUnit
                    className="w-full"
                    slot="3333333333"
                    format="rectangle"
                    responsive={true}
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            {/* FAQ Section */}
            <section className="mt-8" id="faq">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <h3 className="font-semibold text-lg">What is a macronutrient calculator?</h3>
                  <p className="mt-2 text-gray-700">
                    A macronutrient calculator determines your optimal daily intake of protein, carbohydrates, and fats based on your age, weight, height, activity level, and fitness goals like fat loss, maintenance, or muscle gain.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <h3 className="font-semibold text-lg">How accurate are macronutrient calculators?</h3>
                  <p className="mt-2 text-gray-700">
                    Macronutrient calculators provide estimates based on established formulas and averages. They're typically accurate within 10-15% for most people, but individual metabolism can vary. Monitor your results and adjust as needed.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <h3 className="font-semibold text-lg">What are macronutrients?</h3>
                  <p className="mt-2 text-gray-700">
                    Macronutrients are the three main nutrients your body needs in large amounts: proteins (4 calories per gram), carbohydrates (4 calories per gram), and fats (9 calories per gram). They provide energy and are essential for bodily functions.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <h3 className="font-semibold text-lg">How much protein should I eat daily?</h3>
                  <p className="mt-2 text-gray-700">
                    For general health, the RDA is 0.8g per kg of body weight. However, for active individuals, 1.2-2.0g per kg is often recommended. Our calculator provides personalized recommendations based on your specific goals and activity level.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <h3 className="font-semibold text-lg">Should I change my macros on rest days?</h3>
                  <p className="mt-2 text-gray-700">
                    Some people reduce carbohydrates on rest days while maintaining protein intake. However, for simplicity and consistency, many nutritionists recommend keeping the same macro targets daily, especially for beginners.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <h3 className="font-semibold text-lg">How often should I recalculate my macros?</h3>
                  <p className="mt-2 text-gray-700">
                    It's advisable to recalculate your macros every 4-6 weeks or whenever you experience significant changes in weight (5+ lbs), activity level, or fitness goals to ensure your nutrition plan remains aligned with your needs.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <Card className="sticky top-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  {activeTab === 'calculator' ? (
                    <>
                      <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
                    </>
                  ) : (
                    <>
                      <li><a href="#what-are-macronutrients" className="text-blue-600 hover:underline">What Are Macronutrients?</a></li>
                      <li><a href="#why-track-macros" className="text-blue-600 hover:underline">Why Track Macronutrients?</a></li>
                      <li><a href="#how-calculator-works" className="text-blue-600 hover:underline">How Our Calculator Works</a></li>
                      <li><a href="#how-to-use-results" className="text-blue-600 hover:underline">How to Use Your Results</a></li>
                      <li><a href="#optimal-macros" className="text-blue-600 hover:underline">Optimal Macro Ratios</a></li>
                      <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
                    </>
                  )}
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">Related Calculators</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/tdee-calculator" className="text-blue-600 hover:underline">TDEE Calculator</Link></li>
                  <li><Link to="/metabolism-calculator" className="text-blue-600 hover:underline">Metabolism Calculator</Link></li>
                  <li><Link to="/bmi-calculator" className="text-blue-600 hover:underline">BMI Calculator</Link></li>
                </ul>
                
                <div className="mt-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
                  <AdUnit
                    className="w-full"
                    slot="4444444444"
                    format="rectangle"
                    responsive={true}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-t pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
                <li><Link to="/life-expectancy-calculator" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                <li><Link to="/macronutrient-calculator" className="text-sm text-gray-600 hover:text-primary">Macronutrient Calculator</Link></li>
                <li><Link to="/tdee-calculator" className="text-sm text-gray-600 hover:text-primary">TDEE Calculator</Link></li>
                <li><Link to="/metabolism-calculator" className="text-sm text-gray-600 hover:text-primary">Metabolism Calculator</Link></li>
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
  );
};

export default MacronutrientCalculatorPage;
