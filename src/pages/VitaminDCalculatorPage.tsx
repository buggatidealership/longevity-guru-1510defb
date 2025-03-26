
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

const VitaminDCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEOHead 
        title="Vitamin D Intake Calculator | Free Online Tool"
        description="Estimate your daily vitamin D intake from food and sun exposure with our free calculator. Get personalized recommendations based on diet, sun exposure, and geographic location."
        canonicalUrl="https://longevitycalculator.xyz/vitamin-d-calculator"
        keywords="vitamin D calculator, vitamin D intake, sun exposure, diet, nutrition calculator, vitamin D deficiency, free online tool"
      />
      
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
        
        <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
          <AdUnit className="w-full" slot="1111111111" format="horizontal" responsive={true} />
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vitamin D Intake Calculator</h1>
            <p className="text-lg text-gray-700 mb-6">
              Estimate your daily vitamin D intake from food and sun exposure. Get personalized recommendations
              based on your diet, sun exposure habits, and geographic location.
            </p>
            
            <Tabs defaultValue="calculator" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="information">About Vitamin D</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calculator" className="py-4">
                <VitaminDCalculator />
              </TabsContent>
              
              <TabsContent value="information" className="py-4">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">About Vitamin D</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">What is Vitamin D?</h3>
                    <p>
                      Vitamin D is a fat-soluble vitamin that plays a crucial role in bone health by regulating calcium and phosphorus absorption. 
                      It's unique because your body can produce it when your skin is exposed to sunlight. Vitamin D is also available in some foods 
                      and supplements.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Why is Vitamin D Important?</h3>
                    <p>Vitamin D is essential for:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Bone health and prevention of osteoporosis</li>
                      <li>Immune system function</li>
                      <li>Muscle function and strength</li>
                      <li>Mood regulation and mental health</li>
                      <li>Reducing inflammation</li>
                      <li>Heart health</li>
                    </ul>
                    <p>
                      Deficiency in vitamin D is associated with increased risk of fractures, muscle weakness, cardiovascular disease, 
                      certain cancers, and autoimmune conditions.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">How Much Vitamin D Do You Need?</h3>
                    <p>
                      The recommended daily allowance (RDA) varies by age and life stage:
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Infants (0-12 months): 400 IU (10 mcg)</li>
                      <li>Children and Adults (1-70 years): 600 IU (15 mcg)</li>
                      <li>Adults over 70 years: 800 IU (20 mcg)</li>
                      <li>Pregnant and breastfeeding women: 600 IU (15 mcg)</li>
                    </ul>
                    <p>
                      However, many experts believe these amounts are too low and recommend higher intakes, especially for people with limited 
                      sun exposure or other risk factors for deficiency. The Endocrine Society suggests 1,500-2,000 IU daily for adults.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Sources of Vitamin D</h3>
                    
                    <h4 className="text-lg font-medium mb-2">Sunlight</h4>
                    <p className="mb-2">
                      Your skin produces vitamin D when exposed to UVB rays from sunlight. Factors affecting synthesis include:
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Geographic location (latitude)</li>
                      <li>Season and time of day</li>
                      <li>Skin pigmentation</li>
                      <li>Age (older adults produce less)</li>
                      <li>Use of sunscreen (blocks UVB rays)</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium mb-2">Food Sources</h4>
                    <p className="mb-2">
                      Few foods naturally contain vitamin D. Good sources include:
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Fatty fish (salmon, mackerel, sardines)</li>
                      <li>Egg yolks</li>
                      <li>Mushrooms exposed to UV light</li>
                      <li>Fortified foods (milk, orange juice, cereals)</li>
                      <li>Cod liver oil</li>
                    </ul>
                    
                    <h4 className="text-lg font-medium mb-2">Supplements</h4>
                    <p>
                      Available in two forms: vitamin D2 (ergocalciferol) and vitamin D3 (cholecalciferol). D3 is generally 
                      considered more effective at raising blood levels.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Who Is at Risk for Deficiency?</h3>
                    <ul className="list-disc pl-5 mb-4">
                      <li>People with limited sun exposure</li>
                      <li>Those with darker skin</li>
                      <li>Older adults</li>
                      <li>People with obesity</li>
                      <li>Those with digestive disorders that affect fat absorption</li>
                      <li>People who have had gastric bypass surgery</li>
                      <li>Individuals in northern latitudes, especially in winter</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mb-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
              <AdUnit className="w-full" slot="2222222222" format="rectangle" responsive={true} />
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How accurate is this vitamin D calculator?</AccordionTrigger>
                  <AccordionContent>
                    This calculator provides an estimation based on typical vitamin D content in foods and average 
                    sun exposure effects. It's designed to give you a general idea of your vitamin D status, not an 
                    exact measurement. For precise assessment, a blood test (25-hydroxyvitamin D test) is recommended.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I get enough vitamin D from food alone?</AccordionTrigger>
                  <AccordionContent>
                    It's challenging to get adequate vitamin D from food sources alone. Few foods naturally contain 
                    vitamin D in significant amounts. Regular consumption of fatty fish, fortified foods, and 
                    egg yolks can help, but many people still need sun exposure or supplements to reach optimal levels.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How much sun exposure do I need for vitamin D?</AccordionTrigger>
                  <AccordionContent>
                    The amount varies based on your skin tone, geographic location, season, and time of day. As a general 
                    guideline, 10-30 minutes of midday sun exposure several times per week with face, arms, and legs uncovered 
                    (without sunscreen) can produce adequate vitamin D for many people. However, this must be balanced with 
                    skin cancer risk.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I take too much vitamin D?</AccordionTrigger>
                  <AccordionContent>
                    Yes, vitamin D toxicity is possible, though rare. It usually occurs from excessive supplement use, not 
                    from food or sun exposure (your body regulates production from sunlight). The upper limit for adults is 
                    generally considered to be 4,000 IU daily, though some research suggests higher amounts may be safe. 
                    Symptoms of toxicity include nausea, vomiting, weakness, and kidney problems.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Does vitamin D deficiency cause depression?</AccordionTrigger>
                  <AccordionContent>
                    There is a correlation between low vitamin D levels and depression, especially seasonal affective 
                    disorder (SAD). Some studies suggest vitamin D supplementation may help improve symptoms in people 
                    with deficiency, but results are mixed. Vitamin D plays a role in brain function and mood regulation, 
                    but it's likely one of many factors influencing mental health.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>How does latitude affect vitamin D production?</AccordionTrigger>
                  <AccordionContent>
                    The farther you are from the equator (higher latitude), the less UVB radiation reaches the earth's 
                    surface, especially during winter months. In northern regions (like Canada, UK, Northern US), the sun's 
                    angle during winter prevents sufficient UVB rays from reaching the skin, making it nearly impossible to 
                    produce vitamin D from sunlight during these months regardless of time spent outdoors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-4">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    <li>
                      <a href="#" className="text-primary hover:underline flex items-center">
                        <Scroll className="h-4 w-4 mr-2" />
                        Calculator
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-primary flex items-center">
                        <Check className="h-4 w-4 mr-2" />
                        About Vitamin D
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-primary flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Benefits
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-primary flex items-center">
                        <Heart className="h-4 w-4 mr-2" />
                        Food Sources
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-primary flex items-center">
                        <Leaf className="h-4 w-4 mr-2" />
                        FAQ
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Related Calculators</CardTitle>
                  <CardDescription>Explore our other health calculators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/tdee-calculator" className="text-primary hover:underline">
                        TDEE Calculator
                      </Link>
                    </li>
                    <li>
                      <Link to="/macronutrient-calculator" className="text-primary hover:underline">
                        Macronutrient Calculator
                      </Link>
                    </li>
                    <li>
                      <Link to="/ideal-body-weight-calculator" className="text-primary hover:underline">
                        Ideal Body Weight Calculator
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="sticky top-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '600px' }}>
                <AdUnit className="w-full" slot="3333333333" format="rectangle" responsive={true} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
          <AdUnit className="w-full" slot="4444444444" format="horizontal" responsive={true} />
        </div>
      </main>
      
      <FooterWithCollapsibleLinks />
    </div>
  );
};

export default VitaminDCalculatorPage;
