
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
              
              {/* Placeholder for Nutrition & Longevity (Coming Soon) */}
              <Card className="h-full flex flex-col bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl text-muted-foreground">Nutrition & Longevity</CardTitle>
                  <CardDescription>Foods That Support Healthy Aging</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Explore the essential nutrients and dietary patterns linked to extended lifespan and reduced age-related diseases in scientific studies.</p>
                  <p className="mt-2 text-muted-foreground">Coming soon: A comprehensive guide to optimizing your diet for cellular health, inflammation reduction, and metabolic balance.</p>
                </CardContent>
                <CardFooter>
                  <Button disabled variant="outline" className="w-full justify-between">
                    Coming Soon <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Placeholder for Financial Planning for Longevity (Coming Soon) */}
              <Card className="h-full flex flex-col bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl text-muted-foreground">Financial Planning for Longevity</CardTitle>
                  <CardDescription>Securing Your Extended Future</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Learn essential strategies to ensure your retirement savings last throughout a potentially longer lifespan, accounting for healthcare needs and lifestyle goals.</p>
                  <p className="mt-2 text-muted-foreground">Coming soon: Expert guidance on investment approaches, insurance considerations, and estate planning optimized for longevity.</p>
                </CardContent>
                <CardFooter>
                  <Button disabled variant="outline" className="w-full justify-between">
                    Coming Soon <ArrowRight className="h-4 w-4" />
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
