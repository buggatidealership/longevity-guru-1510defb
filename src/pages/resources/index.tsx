
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <SEOHead 
        title="Longevity Resources | Health & Wellness Articles"
        description="Explore our collection of evidence-based articles about health, wellness, longevity, and financial planning to help you make better lifestyle decisions."
        canonicalUrl="/resources"
        keywords="longevity resources, health articles, wellness guides, financial planning, healthy living, lifespan extension"
        schemas={schemas}
      />

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

      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Longevity Resources</h1>
        <p className="text-lg text-muted-foreground">
          Evidence-based articles and guides to help you optimize your health, wellness, and financial planning for a longer, better life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Resource Card: How to Increase Life Expectancy */}
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">How to Increase Life Expectancy</CardTitle>
            <CardDescription>10 Proven Ways to Live Longer</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p>Discover science-backed lifestyle changes that can add years to your life, from diet and exercise to stress management and social connections.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full justify-between">
              <Link to="/resources/how-to-increase-life-expectancy">
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* Placeholder for future articles */}
        <Card className="h-full flex flex-col bg-muted/50">
          <CardHeader>
            <CardTitle className="text-xl text-muted-foreground">Coming Soon</CardTitle>
            <CardDescription>New resources are being added regularly</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">Check back soon for more evidence-based articles on health optimization, financial planning, and longevity science.</p>
          </CardContent>
          <CardFooter>
            <Button disabled variant="outline" className="w-full justify-between">
              Stay Tuned <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResourcesIndex;
