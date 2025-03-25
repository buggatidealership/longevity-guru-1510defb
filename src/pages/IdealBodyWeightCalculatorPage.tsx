
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { AdUnit } from '@/components/AdUnit';
import IdealBodyWeightCalculator from '@/components/IdealBodyWeightCalculator';
import { Link } from 'react-router-dom';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';

const IdealBodyWeightCalculatorPage: React.FC = () => {
  // Add the URL to the sitemap when the component mounts
  React.useEffect(() => {
    addUrlToSitemap('ideal-body-weight-calculator');
  }, []);

  return (
    <>
      <SEOHead 
        title="Ideal Body Weight Calculator | Multiple Formula Comparison"
        description="Calculate your ideal body weight based on height using multiple scientific formulas. Compare Devine, Robinson, Hamwi and other methods for a comprehensive assessment."
        canonicalUrl="https://longevitycalculator.xyz/ideal-body-weight-calculator"
        keywords="ideal body weight calculator, IBW calculator, ideal weight formula, Devine formula, Robinson formula, Hamwi formula, healthy weight for height"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header with Logo and Navigation */}
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <div className="flex justify-between items-center mb-2">
            <Logo />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/resources"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-gray-600 hover:text-primary"
                      )}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Resources
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <div className="my-4">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Calculators
              </Link>
            </Button>
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto px-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Ideal Body Weight Calculator</h1>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Calculate your ideal body weight using multiple scientifically-developed formulas and compare your results.
          </p>
          
          <div className="mb-8">
            <IdealBodyWeightCalculator />
          </div>
          
          <div className="mb-8 bg-gray-50 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="rectangle"
              responsive={true}
            />
          </div>
          
          <div className="mt-12 mb-6">
            <h2 className="text-2xl font-bold mb-4">About Ideal Body Weight</h2>
            <p className="mb-4 text-gray-700">
              The concept of ideal body weight (IBW) has been around since the early 1900s when insurance companies 
              analyzed the relationship between body weight and mortality. Various formulas have been developed over 
              time to estimate healthy weight ranges based primarily on height.
            </p>
            <p className="mb-4 text-gray-700">
              Common formulas used today include the Devine formula, the Robinson formula, the Miller formula, 
              and the Hamwi formula. Each uses slightly different calculations, which is why results can vary.
            </p>
            <p className="text-gray-700">
              It's important to remember that ideal body weight formulas provide general guidelines rather 
              than definitive targets. Individual factors like body composition, muscle mass, bone density, 
              and overall health should be considered alongside these calculations.
            </p>
          </div>
          
          <div className="mt-8 mb-6 bg-gray-100 rounded-lg w-full p-1">
            <AdUnit 
              className="w-full"
              slot="3333333333" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Learn More</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="mb-4">
                For a deeper understanding of ideal body weight formulas, their history, and how to properly 
                interpret your results, check out our comprehensive guide:
              </p>
              <Button asChild size="lg">
                <Link to="/resources/ideal-body-weight-guide">
                  Read Our Ideal Body Weight Guide
                </Link>
              </Button>
            </div>
          </div>
        </main>
        
        <FooterWithCollapsibleLinks />
      </div>
    </>
  );
};

export default IdealBodyWeightCalculatorPage;
