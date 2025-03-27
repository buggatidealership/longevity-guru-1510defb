
import React from 'react';
import SEOHead from '@/components/SEOHead';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';
import IdealBodyWeightCalculator from '@/components/IdealBodyWeightCalculator';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/seoUtils';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';
import { useEffect } from 'react';

const IdealBodyWeightCalculatorPage: React.FC = () => {
  // Add this URL to sitemap when component mounts
  useEffect(() => {
    addUrlToSitemap('ideal-body-weight-calculator', 0.9);
  }, []);

  // FAQ data for schema markup
  const faqItems = [
    {
      question: "What is an ideal body weight calculator?",
      answer: "An ideal body weight calculator is a tool that estimates what your healthy weight should be based on factors like height, sex, and body frame size. It uses various medical formulas to provide weight ranges that are historically associated with good health outcomes."
    },
    {
      question: "How accurate are ideal body weight formulas?",
      answer: "Ideal body weight formulas provide estimates, not exact numbers. They don't account for individual factors like muscle mass, bone density, or body composition. They're best used as general guidelines alongside other health metrics like BMI, body fat percentage, and clinical assessment."
    },
    {
      question: "Which formula is the most accurate?",
      answer: "No single formula is universally considered the most accurate. Each formula was developed in different contexts and for different populations. The Devine formula is commonly used in clinical settings for drug dosing, while the Robinson and Miller formulas tend to give more moderate estimates. It's best to consider the average or range from multiple formulas."
    },
    {
      question: "Why do different formulas give different results?",
      answer: "Different formulas were developed by different researchers, in different time periods, and based on different population samples. They also incorporate varying assumptions about the relationship between height and healthy weight, and some consider frame size while others don't."
    },
    {
      question: "Should I try to reach my ideal body weight?",
      answer: "Not necessarily. Ideal body weight formulas are general guidelines and don't account for individual variations in body composition, fitness level, or genetic factors. Focus on overall health, lifestyle, and well-being rather than achieving a specific number. Consult with healthcare professionals for personalized guidance."
    }
  ];

  // Breadcrumb data for schema markup
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Ideal Body Weight Calculator", path: "/ideal-body-weight-calculator" }
  ];

  // Generate schema markup
  const schemas = [
    generateFAQSchema(faqItems),
    generateBreadcrumbSchema(breadcrumbItems),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Ideal Body Weight Calculator",
      "description": "Use this free Ideal Body Weight Calculator to estimate your healthiest weight using Devine, Robinson, Miller, and Hamwi formulas.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Longevity Calculator",
        "url": "https://longevitycalculator.xyz"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Ideal Body Weight Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ];

  return (
    <>
      <SEOHead
        title="Ideal Body Weight Calculator – Estimate Your Healthy Weight"
        description="Use this free Ideal Body Weight Calculator to estimate your healthiest weight using Devine, Robinson, Miller, and Hamwi formulas."
        canonicalUrl="https://longevitycalculator.xyz/ideal-body-weight-calculator"
        keywords="ideal body weight calculator, IBW calculator, healthy weight, Devine formula, Robinson formula, Miller formula, Hamwi formula, Broca formula, healthy weight for height, weight calculator"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
        schemas={schemas}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <header className="max-w-6xl mx-auto pt-4 px-4 w-full">
          <div className="flex justify-between items-center mb-2">
            <Logo className="h-8" />
            <NavigationMenu>
              <NavigationMenuList>
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
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="mb-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit
              className="w-full"
              slot="1111111111"
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <main className="flex-grow max-w-4xl mx-auto px-4 w-full pb-12">
          <div className="mb-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-1 text-gray-900">Ideal Body Weight Calculator</h1>
            <p className="text-lg text-gray-700 mb-4">
              Estimate your healthiest body weight using formulas like Devine, Robinson, and Hamwi.
            </p>
          </div>

          <section className="mb-8">
            <IdealBodyWeightCalculator />
          </section>

          <DisclaimerAlert 
            title="Medical & Weight Disclaimer"
            content="This calculator provides estimates based on general formulas and is not a substitute for medical advice. Individual healthy weights vary based on factors like muscle mass, body composition, and overall health. Consult with a healthcare provider for personalized guidance."
          />

          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4" id="how-it-works">How This Calculator Works</h2>
            <p className="mb-4">
              Our Ideal Body Weight (IBW) calculator uses five established medical formulas to estimate what your healthy weight might be based on your height, sex, and body frame:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Devine Formula (1974)</strong>: Developed for medication dosing and still widely used in clinical pharmacy. Males: 50 kg + 2.3 kg for each inch over 5 feet; Females: 45.5 kg + 2.3 kg for each inch over 5 feet.</li>
              <li><strong>Robinson Formula (1983)</strong>: A slight modification of the Devine formula with different base weights. Males: 52 kg + 1.9 kg per inch over 5 feet; Females: 49 kg + 1.7 kg per inch over 5 feet.</li>
              <li><strong>Miller Formula (1983)</strong>: Tends to give higher estimates than other formulas. Males: 56.2 kg + 1.41 kg per inch over 5 feet; Females: 53.1 kg + 1.36 kg per inch over 5 feet.</li>
              <li><strong>Hamwi Formula (1964)</strong>: One of the earliest IBW formulas. Males: 48 kg + 2.7 kg per inch over 5 feet; Females: 45.5 kg + 2.2 kg per inch over 5 feet.</li>
              <li><strong>Broca Index (Modified)</strong>: A simple formula dating back to the 19th century. Males: (Height in cm - 100); Females: (Height in cm - 105), with adjustments for frame size.</li>
            </ul>
            <p className="mb-4">
              The calculator provides results from each formula, an average of all formulas, and a range showing the minimum and maximum values. This gives you a more complete picture of what different medical standards consider "ideal."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" id="limitations">Limitations and Considerations</h2>
            <p className="mb-4">
              While ideal body weight formulas provide useful estimates, they have several important limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>They don't account for body composition (the ratio of muscle to fat)</li>
              <li>They were developed decades ago based on limited demographic data</li>
              <li>They don't consider age, ethnicity, fitness level, or health conditions</li>
              <li>They don't reflect the wide range of healthy body types and builds</li>
              <li>Frame size adjustments are subjective and difficult to standardize</li>
            </ul>
            <p className="mb-4">
              For a more comprehensive assessment of your healthy weight, consider combining IBW calculations with other metrics like BMI, waist circumference, body fat percentage, and most importantly, consultation with healthcare professionals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" id="faq">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" id="related-resources">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/resources/ideal-body-weight-guide" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">Ideal Body Weight Guide</h3>
                <p className="text-sm text-gray-600">Explore the science behind ideal weight formulas and how to interpret results.</p>
              </Link>
              <Link to="/bmi-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">BMI Calculator</h3>
                <p className="text-sm text-gray-600">Calculate your Body Mass Index, another important health metric.</p>
              </Link>
              <Link to="/tdee-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">TDEE Calculator</h3>
                <p className="text-sm text-gray-600">Calculate your Total Daily Energy Expenditure for weight management.</p>
              </Link>
              <Link to="/macronutrient-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">Macronutrient Calculator</h3>
                <p className="text-sm text-gray-600">Get personalized protein, fat, and carb recommendations.</p>
              </Link>
            </div>
          </section>

          <div className="mt-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit
              className="w-full"
              slot="2222222222"
              format="rectangle"
              responsive={true}
            />
          </div>
        </main>

        <FooterWithCollapsibleLinks />
      </div>
    </>
  );
};

export default IdealBodyWeightCalculatorPage;
