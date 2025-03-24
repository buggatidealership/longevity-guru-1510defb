
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import IntroSection from './IntroSection';
import ContentSections from './ContentSections';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';
import { generateBreadcrumbSchema, generateArticleSchema } from '@/utils/seoUtils';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';

const BreastImplantSizeGuide = () => {
  // Generate schema for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema([{
    name: 'Home',
    path: '/'
  }, {
    name: 'Resources',
    path: '/resources'
  }, {
    name: 'How to Choose the Right Breast Implant Size',
    path: '/resources/breast-implant-size-guide'
  }]);

  // Generate article schema
  const articleSchema = generateArticleSchema(
    "How to Choose the Right Breast Implant Size: A Personalized, Data-Backed Guide", 
    "Struggling to decide on breast implant size? Use our calculator and expert-backed guide to understand cc measurements, cup size equivalents, and what affects your final result.",
    "/resources/breast-implant-size-guide",
    "2023-09-15T08:00:00+00:00",
    new Date().toISOString(),
    "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=1200&q=80"
  );
  
  const schemas = [breadcrumbSchema, articleSchema];

  return (
    <>
      <SEOHead 
        title="How to Choose the Right Breast Implant Size: A Personalized, Data-Backed Guide" 
        description="Struggling to decide on breast implant size? Use our calculator and expert-backed guide to understand cc measurements, cup size equivalents, and what affects your final result." 
        canonicalUrl="/resources/breast-implant-size-guide" 
        keywords="breast implant size, breast augmentation size guide, implant cc, cup size equivalent, breast implant calculator, breast implant sizing, how to choose implant size, breast implant profile" 
        schemas={schemas} 
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{
          minHeight: '90px'
        }}>
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto px-4 py-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/resources">Resources</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>How to Choose the Right Breast Implant Size</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Choose the Right Breast Implant Size: A Personalized, Data-Backed Guide</h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            
            <div className="my-6">
              <img 
                src="https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=1200&q=80" 
                alt="Woman consulting with plastic surgeon about breast implant options" 
                className="w-full rounded-xl shadow-md object-cover"
              />
              <p className="text-sm text-gray-500 italic mt-2 text-center">
                Choosing the right implant size is a collaborative process between you and your surgeon.
              </p>
            </div>
            
            <IntroSection />
            
            <div className="my-8 bg-gray-50 rounded-lg text-center w-full" style={{
            minHeight: '250px'
          }}>
              <AdUnit 
                className="w-full"
                slot="2222222222" 
                format="rectangle"
                responsive={true}
              />
            </div>
            
            <ContentSections />
            
            <div className="my-8 bg-gray-50 rounded-lg text-center w-full" style={{
            minHeight: '250px'
          }}>
              <AdUnit 
                className="w-full"
                slot="3333333333" 
                format="rectangle"
                responsive={true}
              />
            </div>
            
            <FAQSection />
            <CallToAction />
          </article>
          
          <div className="mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{
          minHeight: '90px'
        }}>
            <AdUnit 
              className="w-full"
              slot="4444444444" 
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
                  <li><Link to="/lifespan" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirementsavings" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/fertility" className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/breastimplant" className="text-sm text-gray-600 hover:text-primary">Breast Implant Size Calculator</Link></li>
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

export default BreastImplantSizeGuide;
