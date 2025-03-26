
import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';
import CreatineWaterCalculator from '@/components/CreatineWaterCalculator';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/seoUtils';
import { addUrlToSitemap } from '@/utils/addUrlToSitemap';

const CreatineWaterCalculatorPage: React.FC = () => {
  // Add this URL to sitemap when component mounts
  useEffect(() => {
    addUrlToSitemap('creatine-water-calculator', 0.9);
  }, []);

  // FAQ data for schema markup
  const faqItems = [
    {
      question: "How much water should I drink with creatine?",
      answer: "The general recommendation is to drink about 3-4 liters of water daily when taking creatine. However, your specific needs depend on your body weight, activity level, climate, and whether you're in the loading or maintenance phase of creatine supplementation."
    },
    {
      question: "Do I need to drink more water during creatine loading phase?",
      answer: "Yes, you should increase your water intake during the creatine loading phase (typically 20g/day for 5-7 days). Since creatine draws water into your muscles, you need additional water to prevent dehydration and support the increased cellular hydration."
    },
    {
      question: "Can I get dehydrated while taking creatine?",
      answer: "Yes, creatine can increase your risk of dehydration if you don't increase your water intake accordingly. Creatine causes muscles to draw in more water, which means less water is available for other bodily functions if you don't compensate by drinking more."
    },
    {
      question: "How can I tell if I'm drinking enough water with creatine?",
      answer: "Signs of adequate hydration include clear or light yellow urine, absence of thirst, and normal energy levels. If your urine is dark yellow, you feel thirsty, or experience headaches, you may need to increase your water intake."
    },
    {
      question: "Should I drink more water when exercising on creatine?",
      answer: "Absolutely. Exercise increases fluid loss through sweat, and creatine supplementation can amplify your hydration needs. For intense workouts, you may need an additional 0.5-1 liter of water before, during, and after exercise."
    }
  ];

  // Breadcrumb data for schema markup
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Creatine Water Calculator", path: "/creatine-water-calculator" }
  ];

  // Generate schema markup
  const schemas = [
    generateFAQSchema(faqItems),
    generateBreadcrumbSchema(breadcrumbItems),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Creatine Water Intake Calculator",
      "description": "Calculate how much water you need when taking creatine based on body weight, activity level, and climate factors.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Longevity Calculator",
        "url": "https://longevitycalculator.xyz"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Creatine Water Intake Calculator",
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
        title="Creatine Water Intake Calculator – How Much Water Do You Need?"
        description="Calculate the optimal water intake when taking creatine supplements based on your weight, activity level, and creatine dosage."
        canonicalUrl="https://longevitycalculator.xyz/creatine-water-calculator"
        keywords="creatine water calculator, water intake calculator, creatine hydration, how much water with creatine, creatine loading water, fitness hydration, creatine supplementation"
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
            <h1 className="text-4xl font-bold mb-1 text-gray-900">Creatine Water Intake Calculator</h1>
            <p className="text-lg text-gray-700 mb-4">
              Calculate how much water you need when taking creatine supplements based on your body weight, activity level, and creatine protocol.
            </p>
          </div>

          <DisclaimerAlert 
            title="Medical Disclaimer"
            content="This calculator provides estimates based on general guidelines and is not a substitute for medical advice. Individual hydration needs vary based on many factors. Consult with a healthcare provider before starting any supplementation program."
            className="mb-6"
          />

          <section className="mb-8">
            <CreatineWaterCalculator />
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4" id="how-it-works">How This Calculator Works</h2>
            <p className="mb-4">
              Our Creatine Water Intake Calculator estimates your optimal daily water intake when taking creatine supplements by considering:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Body Weight</strong>: Heavier individuals typically need more water, with a base calculation of 30-40ml per kg of body weight.</li>
              <li><strong>Activity Level</strong>: Your general physical activity affects your baseline hydration needs.</li>
              <li><strong>Training Intensity</strong>: More intense workouts increase fluid loss through sweat and metabolic processes.</li>
              <li><strong>Creatine Protocol</strong>: Loading phase (20g/day) requires more water than maintenance phase (5g/day).</li>
              <li><strong>Climate</strong>: Warmer environments increase fluid loss through sweating and require greater water intake.</li>
            </ul>
            <p className="mb-4">
              The calculator provides your total recommended daily water intake, along with a breakdown showing your base hydration needs and the additional water recommended specifically to support creatine supplementation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" id="creatine-water">Why Proper Hydration is Essential with Creatine</h2>
            <p className="mb-4">
              Creatine works by increasing water content in muscle cells, which is why proper hydration is crucial when taking this supplement:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Cellular Hydration</strong>: Creatine draws water into muscle cells, which can reduce water available for other bodily functions if total intake is inadequate.</li>
              <li><strong>Performance Benefits</strong>: Proper hydration helps maximize creatine's performance-enhancing effects.</li>
              <li><strong>Kidney Function</strong>: Adequate water intake helps reduce the load on kidneys when processing creatine.</li>
              <li><strong>Reduced Side Effects</strong>: Proper hydration can help minimize common side effects like cramping, bloating, and digestive discomfort.</li>
              <li><strong>Optimize Absorption</strong>: Taking creatine with sufficient water helps ensure proper absorption and utilization.</li>
            </ul>
            <p className="mb-4">
              Most experts recommend increasing water intake by at least 500ml for every 5g of creatine consumed, with even higher recommendations during the loading phase.
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
            <h2 className="text-2xl font-bold mb-4" id="related-resources">Related Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tdee-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">TDEE Calculator</h3>
                <p className="text-sm text-gray-600">Calculate your Total Daily Energy Expenditure for fitness and nutrition planning.</p>
              </Link>
              <Link to="/macronutrient-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">Macronutrient Calculator</h3>
                <p className="text-sm text-gray-600">Get personalized protein, carb, and fat recommendations.</p>
              </Link>
              <Link to="/ideal-body-weight-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">Ideal Body Weight Calculator</h3>
                <p className="text-sm text-gray-600">Find your ideal weight range based on height and body frame.</p>
              </Link>
              <Link to="/vitamin-d-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">Vitamin D Calculator</h3>
                <p className="text-sm text-gray-600">Estimate your Vitamin D levels from diet and sun exposure.</p>
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

export default CreatineWaterCalculatorPage;
