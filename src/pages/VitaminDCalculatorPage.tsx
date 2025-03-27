
import React from 'react';
import SEOHead from '../components/SEOHead';
import VitaminDCalculator from '../components/VitaminDCalculator';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import FooterWithCollapsibleLinks from '../components/FooterWithCollapsibleLinks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Scroll, Check, Award, Heart, Leaf, MoveUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Logo from '../components/Logo';
import { AdUnit } from '../components/AdUnit';
import DisclaimerAlert from '../components/DisclaimerAlert';

const VitaminDCalculatorPage = () => {
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
        title="Vitamin D Intake Calculator | Free Online Tool"
        description="Estimate your daily vitamin D intake from food and sun exposure with our free calculator. Get personalized recommendations based on diet, sun exposure, and geographic location."
        canonicalUrl="https://longevitycalculator.xyz/vitamin-d-calculator"
        keywords="vitamin D calculator, vitamin D intake, sun exposure, diet, nutrition calculator, vitamin D deficiency, free online tool"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Vitamin D Calculator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit className="w-full" slot="1111111111" format="horizontal" responsive={true} />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Vitamin D Intake Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Evaluate your daily vitamin D intake from food and sun exposure. Get personalized recommendations to optimize your levels.
          </p>
          
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit className="w-full" slot="6666666666" format="horizontal" responsive={true} />
          </div>
          
          <DisclaimerAlert 
            content="This calculator provides general estimates based on common vitamin D sources. For a definitive assessment of your vitamin D status, please consult with a healthcare professional."
            className="mb-6"
          />
          
          <div className="w-full flex justify-center">
            <div className="w-full">
              <VitaminDCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Vitamin D Calculator: Estimate Your Daily Intake & Sun Exposure</h2>
            
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
                    Benefits of Vitamin D
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sources')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Vitamin D Sources
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
                  Our <strong>Vitamin D Intake Calculator</strong> helps individuals assess their estimated daily vitamin D intake from both dietary sources and sun exposure. This tool provides insights into your current vitamin D status and offers personalized recommendations to optimize your levels for better overall health.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="8888888888" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="how-it-works">
                <h3 className="text-xl font-medium mt-6">How The Vitamin D Calculator Works</h3>
                <p>
                  This calculator analyzes your intake of vitamin D-rich foods (fatty fish, fortified foods, eggs), sun exposure patterns, and geographic location to estimate your daily vitamin D intake in International Units (IU). By comparing your results to recommended daily allowances, it generates personalized suggestions to help you maintain optimal vitamin D levels.
                </p>
              </div>
              
              <div id="benefits">
                <h3 className="text-xl font-medium mt-6">Key Benefits of Vitamin D</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Bone Health:</strong> Essential for calcium absorption and bone mineralization.
                  </li>
                  <li>
                    <strong>Immune Function:</strong> Supports optimal immune system response and reduces infection risk.
                  </li>
                  <li>
                    <strong>Mood Regulation:</strong> May help reduce the risk of depression and improve mood.
                  </li>
                  <li>
                    <strong>Muscle Function:</strong> Important for muscle strength and reducing fall risk in older adults.
                  </li>
                  <li>
                    <strong>Heart Health:</strong> Associated with improved cardiovascular health markers.
                  </li>
                </ul>
              </div>
              
              <div id="sources">
                <h3 className="text-xl font-medium mt-6">Understanding Vitamin D Sources</h3>
                <p>
                  Vitamin D can be obtained through three primary routes:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Sunlight:</strong> When UVB rays hit the skin, your body produces vitamin D naturally. Factors like latitude, season, time of day, skin pigmentation, and sunscreen use affect synthesis.</li>
                  <li><strong>Diet:</strong> Few foods naturally contain significant vitamin D. Top sources include fatty fish (salmon, mackerel, sardines), egg yolks, mushrooms exposed to UV light, and fortified foods (milk, orange juice, cereals).</li>
                  <li><strong>Supplements:</strong> Available as vitamin D2 (ergocalciferol) or vitamin D3 (cholecalciferol), with D3 generally considered more effective at raising blood levels.</li>
                </ul>
                
                <p className="mt-2">
                  For many people, especially those in northern latitudes or with limited sun exposure, a combination of these sources is necessary to maintain adequate vitamin D levels throughout the year.
                </p>
              </div>
              
              {/* FAQ Section */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">How accurate is this vitamin D calculator?</AccordionTrigger>
                    <AccordionContent>
                      <p>This calculator provides an estimation based on typical vitamin D content in foods and average sun exposure effects. It's designed to give you a general idea of your vitamin D status, not an exact measurement. For precise assessment, a blood test (25-hydroxyvitamin D test) is recommended.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">Can I get enough vitamin D from food alone?</AccordionTrigger>
                    <AccordionContent>
                      <p>It's challenging to get adequate vitamin D from food sources alone. Few foods naturally contain vitamin D in significant amounts. Regular consumption of fatty fish, fortified foods, and egg yolks can help, but many people still need sun exposure or supplements to reach optimal levels.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">How much sun exposure do I need for vitamin D?</AccordionTrigger>
                    <AccordionContent>
                      <p>The amount varies based on your skin tone, geographic location, season, and time of day. As a general guideline, 10-30 minutes of midday sun exposure several times per week with face, arms, and legs uncovered (without sunscreen) can produce adequate vitamin D for many people. However, this must be balanced with skin cancer risk.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">Can I take too much vitamin D?</AccordionTrigger>
                    <AccordionContent>
                      <p>Yes, vitamin D toxicity is possible, though rare. It usually occurs from excessive supplement use, not from food or sun exposure (your body regulates production from sunlight). The upper limit for adults is generally considered to be 4,000 IU daily, though some research suggests higher amounts may be safe. Symptoms of toxicity include nausea, vomiting, weakness, and kidney problems.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">Does vitamin D deficiency cause depression?</AccordionTrigger>
                    <AccordionContent>
                      <p>There is a correlation between low vitamin D levels and depression, especially seasonal affective disorder (SAD). Some studies suggest vitamin D supplementation may help improve symptoms in people with deficiency, but results are mixed. Vitamin D plays a role in brain function and mood regulation, but it's likely one of many factors influencing mental health.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">How does latitude affect vitamin D production?</AccordionTrigger>
                    <AccordionContent>
                      <p>The farther you are from the equator (higher latitude), the less UVB radiation reaches the earth's surface, especially during winter months. In northern regions (like Canada, UK, Northern US), the sun's angle during winter prevents sufficient UVB rays from reaching the skin, making it nearly impossible to produce vitamin D from sunlight during these months regardless of time spent outdoors.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
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
              <Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/tdee-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">TDEE Calculator</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/macronutrient-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Macronutrients</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
            </div>
          </div>
        </main>
        
        <FooterWithCollapsibleLinks handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default VitaminDCalculatorPage;
