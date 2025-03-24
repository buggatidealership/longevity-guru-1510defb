
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/utils/seoUtils';

const ResourcesIndex = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' }
  ]);

  const schemas = [breadcrumbSchema];

  return (
    <>
      <SEOHead 
        title="Longevity Resources | Health & Wellness Articles"
        description="Explore our collection of evidence-based articles about health, wellness, longevity, and financial planning to help you make better lifestyle decisions."
        canonicalUrl="/resources"
        keywords="longevity resources, health articles, wellness guides, financial planning, healthy living, lifespan extension"
        schemas={schemas}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Resources</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-10">
            <div className="relative mx-auto max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight py-3">Longevity Resources</h1>
              <div className="h-0.5 w-32 bg-gray-200 mx-auto my-4"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Evidence-based articles and guides to help you optimize your health, wellness, and financial planning for a longer, better life.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Resource Card: Understanding Your Body Mass Index (BMI) */}
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">Understanding Your Body Mass Index (BMI)</CardTitle>
                  <CardDescription>Learn How to Use Your BMI Score Effectively</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Discover what BMI really means, its limitations, and how to properly interpret your score for better health decisions.</p>
                  <p className="mt-2 text-muted-foreground">Learn when BMI is a useful indicator and when other measurements might provide more accurate insights about your body composition and health.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/resources/how-to-use-your-bmi">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            
              {/* Resource Card: Adult Height Prediction Guide */}
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">How Tall Will I Be?</CardTitle>
                  <CardDescription>A Science-Backed Guide to Predicting Adult Height</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Learn what determines your adult height, from genetics to growth factors, and discover science-backed methods to predict your final height.</p>
                  <p className="mt-2 text-muted-foreground">Understand growth spurts, development milestones, and get evidence-based answers about maximizing your natural height potential.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/resources/adult-height-prediction-guide">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            
              {/* Resource Card: Fertility After 35 */}
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">Fertility After 35</CardTitle>
                  <CardDescription>Facts, Fears, and Your Chances of Conceiving</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Explore the science-backed facts about fertility after age 35, including egg quality, ovarian reserve, and your real chances of conceiving.</p>
                  <p className="mt-2 text-muted-foreground">Learn practical strategies to improve your odds, understand when to see a fertility specialist, and find answers to common questions about advanced maternal age.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/resources/fertility-after-35">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Resource Card: How to Increase Life Expectancy */}
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">How to Increase Life Expectancy</CardTitle>
                  <CardDescription>10 Proven Ways to Live Longer</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Discover science-backed lifestyle changes that can add years to your life, from diet and exercise to stress management and social connections.</p>
                  <p className="mt-2 text-muted-foreground">Based on peer-reviewed longevity research, these practical strategies can help increase your lifespan potential and improve quality of life as you age.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/resources/how-to-increase-life-expectancy">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Resource Card: How to Boost Your Metabolism */}
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">How to Boost Your Metabolism Naturally</CardTitle>
                  <CardDescription>Science-Backed Methods That Work</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Learn science-backed ways to naturally boost your metabolism and increase your daily energy expenditure through diet, exercise, and lifestyle changes.</p>
                  <p className="mt-2 text-muted-foreground">Discover which habits truly help increase your metabolic rate and how to calculate exactly how many calories your body burns each day.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/resources/how-to-boost-your-metabolism">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Resource Card: How Much to Save for Retirement */}
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">How Much to Save for Retirement</CardTitle>
                  <CardDescription>Real-Life Examples & Guide</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Discover exactly how much you should save for retirement based on your age, income, and lifestyle goals. Includes practical formulas and real-world examples.</p>
                  <p className="mt-2 text-muted-foreground">Learn proven strategies for retirement planning at every life stage, from early career savers to those approaching retirement age.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/resources/how-much-to-save-for-retirement">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Resource Card: Save for Retirement on a Low Income */}
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">Save for Retirement on a Low Income</CardTitle>
                  <CardDescription>Practical Strategies That Work</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Learn how to build a retirement fund even on a tight budget. Discover government programs, tax credits, and saving techniques specifically designed for low-income earners.</p>
                  <p className="mt-2 text-muted-foreground">Includes realistic savings targets by income level and actionable steps to secure your financial future regardless of your current income.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full justify-between">
                    <Link to="/resources/save-for-retirement-low-income">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="rectangle"
              responsive={true}
            />
          </div>
          
          <div className="mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="3333333333" 
              format="horizontal"
              responsive={true}
            />
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
                  <li><Link to="/retirement-savings-calculator" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/resources" className="text-sm text-gray-600 hover:text-primary">Resources</Link></li>
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
    </>
  );
};

export default ResourcesIndex;
