
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { Clock, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Index = () => {
  // Featured calculators to highlight at the top
  const featuredCalculators = [
    {
      title: "Life Expectancy Calculator",
      description: "Estimate your lifespan based on health factors, lifestyle choices, and demographics.",
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      link: "/lifespan",
      buttonText: "Calculate Your Lifespan"
    },
    {
      title: "Retirement Savings Calculator",
      description: "Determine how much you can spend daily, monthly, and yearly in retirement.",
      icon: <Calculator className="h-6 w-6 text-green-500" />,
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      link: "/retirementsavings",
      buttonText: "Calculate Your Savings Longevity"
    },
  ];

  return (
    <>
      <SEOHead 
        title="Longevity Calculators | Life Expectancy & Retirement Planning Tools"
        description="Calculate your life expectancy and plan your retirement with our free calculators. Tools for longevity planning and financial freedom."
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-8 px-4">
          <Logo className="mb-8" />
          {/* Top Ad Banner */}
          <AdUnit 
            className="mb-6 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] flex items-center justify-center"
            slot="1111111111" 
          />
        </header>
        <main className="max-w-6xl mx-auto px-4">
          {/* Hero Section - Modernized */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-gray-800">Longevity Calculators</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tools to help you live longer and plan for a financially secure future</p>
          </div>
          
          {/* Featured Calculators - More modern design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredCalculators.map((calc, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className={`w-12 h-12 ${calc.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    {calc.icon}
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{calc.title}</h2>
                  <p className="text-gray-600 mb-4">{calc.description}</p>
                  <Link to={calc.link}>
                    <Button className="group">
                      {calc.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* All Calculators Section - Redesigned for better scaling */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">All Calculators</h2>
              {/* Pagination for when we have more calculators */}
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            
            {/* Grid of all calculators - Optimized for many calculators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4">
              {/* Life Expectancy Calculator */}
              <Link to="/lifespan" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Life Expectancy</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Estimate your potential lifespan.</p>
                  <span className="text-xs text-blue-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              {/* Retirement Savings Calculator */}
              <Link to="/retirementsavings" className="group">
                <div className="border rounded-lg p-4 h-full flex flex-col hover:border-green-300 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-3">
                    <Calculator className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Retirement Savings</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">Calculate your savings longevity.</p>
                  <span className="text-xs text-green-500 flex items-center group-hover:underline">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
              
              {/* Placeholder calculators - these will be replaced with real ones */}
              {[...Array(22)].map((_, index) => (
                <div key={index} className="border border-dashed rounded-lg p-4 h-full flex flex-col opacity-40">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-gray-400 font-medium text-xs">Soon</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Coming Soon</h3>
                  <p className="text-xs text-gray-500 mb-2 flex-grow">New calculator coming soon.</p>
                  <span className="text-xs text-gray-400 flex items-center">
                    Calculate
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Middle Ad Banner */}
          <AdUnit 
            className="my-8 p-2 bg-gray-50 rounded-lg text-center min-h-[250px] flex items-center justify-center"
            slot="2222222222" 
          />
        </main>
        
        {/* Bottom Ad Banner */}
        <div className="max-w-6xl mx-auto px-4">
          <AdUnit 
            className="mt-8 mb-4 p-2 bg-gray-50 rounded-lg text-center min-h-[90px] flex items-center justify-center"
            slot="3333333333" 
          />
        </div>
        
        <footer className="max-w-6xl mx-auto px-4 py-8">
          <div className="border-t pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
                  <li><Link to="/lifespan" className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirementsavings" className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/lifespan" className="text-sm text-gray-600 hover:text-primary">Life Expectancy</Link></li>
                  <li><Link to="/retirementsavings" className="text-sm text-gray-600 hover:text-primary">Retirement Planning</Link></li>
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
              <Link to="/sitemap.xml" className="hover:text-gray-700">Sitemap</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
