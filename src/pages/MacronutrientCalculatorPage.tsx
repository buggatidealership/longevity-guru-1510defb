import React from 'react';
import SEOHead from '@/components/SEOHead';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';
import MacronutrientCalculator from '@/components/MacronutrientCalculator';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema-utils';

const MacronutrientCalculatorPage: React.FC = () => {
  // FAQ data for schema markup
  const faqItems = [
    {
      question: "What is a macronutrient calculator?",
      answer: "A macronutrient calculator is a tool that helps you determine the optimal amounts of protein, carbohydrates, and fats you should consume daily based on your personal details, activity level, and fitness goals."
    },
    {
      question: "How accurate is this macronutrient calculator?",
      answer: "This calculator uses the scientifically validated Mifflin-St Jeor equation to estimate your daily energy needs, then applies appropriate macronutrient ratios based on your goal. While it provides a good starting point, individual results may vary based on factors like genetics, metabolism, and precise activity levels."
    },
    {
      question: "How much protein do I need to build muscle?",
      answer: "For muscle building, this calculator recommends approximately 25% of your calories from protein. For most people, this translates to about 1.6-2.2g of protein per kg of body weight daily, which research shows is optimal for muscle protein synthesis and recovery."
    },
    {
      question: "Should I adjust my macros if I'm not seeing results?",
      answer: "Yes. The calculator provides a starting point, but you may need to adjust based on your body's response. If you're not losing fat despite following the recommendations, you might need to reduce carbs slightly. If you're not gaining muscle, you might need to increase overall calories, particularly from protein and carbs."
    },
    {
      question: "How often should I recalculate my macros?",
      answer: "It's advisable to recalculate your macros every 4-6 weeks, or whenever your weight changes by more than 5-10 pounds, your activity level changes significantly, or your fitness goals shift. This ensures your nutrition plan stays aligned with your current needs."
    }
  ];

  // Breadcrumb data for schema markup
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Macronutrient Calculator", path: "/macronutrient-calculator" }
  ];

  // Generate schema markup
  const schemas = [
    generateFAQSchema(faqItems),
    generateBreadcrumbSchema(breadcrumbItems),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Macronutrient Calculator",
      "description": "Use this free Macronutrient Calculator to determine how much protein, fat, and carbs you need each day for weight loss, maintenance, or muscle gain.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Longevity Calculator",
        "url": "https://longevitycalculator.xyz"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Macronutrient Calculator",
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
        title="Macronutrient Calculator – Calculate Your Daily Protein, Fat & Carbs"
        description="Use this free Macronutrient Calculator to determine how much protein, fat, and carbs you need each day for weight loss, maintenance, or muscle gain."
        canonicalUrl="https://longevitycalculator.xyz/macronutrient-calculator"
        keywords="macronutrient calculator, macro calculator, protein calculator, carbs calculator, fat calculator, nutrition calculator, diet macros, macros for weight loss, macros for muscle gain, daily macros"
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
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">Macronutrient Calculator</h1>
            <p className="text-lg text-gray-700">
              Find out exactly how much protein, fat, and carbs you need daily, based on your goals.
            </p>
          </div>

          <section className="mb-8">
            <MacronutrientCalculator />
          </section>

          <DisclaimerAlert 
            title="Medical & Nutrition Disclaimer"
            content="The macronutrient calculations are estimates based on general formulas and may not account for individual factors such as medical conditions, metabolic disorders, or medications. This calculator is not a substitute for professional advice from a registered dietitian or healthcare provider."
          />

          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4" id="how-it-works">How This Calculator Works</h2>
            <p className="mb-4">
              Our macronutrient calculator uses the scientifically validated Mifflin-St Jeor equation to first calculate your Basal Metabolic Rate (BMR), which is then adjusted based on your activity level to determine your Total Daily Energy Expenditure (TDEE).
            </p>
            <p className="mb-4">
              Depending on your goal (lose fat, maintain, or build muscle), we apply a calorie modifier to your TDEE and then distribute those calories across the three macronutrients (protein, carbohydrates, and fat) in optimal ratios for your specific goal.
            </p>
            <p className="mb-4">
              These ratios are based on research showing that higher protein intake is beneficial during fat loss to preserve muscle mass, while higher carbohydrate intake supports muscle growth during a building phase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" id="why-track-macros">Why Track Macronutrients?</h2>
            <p className="mb-4">
              Counting calories alone doesn't account for the quality of those calories. Two diets with identical calorie counts but different macronutrient compositions can produce dramatically different results in terms of body composition, energy levels, and overall health.
            </p>
            <p className="mb-4">
              Protein is essential for muscle repair and growth, and has the highest thermic effect of food (TEF), meaning your body burns more calories digesting it. Carbohydrates fuel high-intensity exercise and replenish muscle glycogen. Fats are crucial for hormone production and cell health.
            </p>
            <p className="mb-4">
              By optimizing your macronutrient intake based on your goals, you can maximize fat loss while preserving muscle, or optimize muscle growth while minimizing fat gain.
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
            <h2 className="text-2xl font-bold mb-4" id="how-to-use">How to Use Your Macros</h2>
            <p className="mb-4">
              Once you have your macronutrient targets, you'll need to track your food intake to ensure you're hitting these targets. Here are some practical tips:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use a food tracking app like MyFitnessPal or Cronometer to log your meals</li>
              <li>Plan your meals in advance to ensure they fit your macro targets</li>
              <li>Focus on whole, nutrient-dense foods rather than processed alternatives</li>
              <li>Consider meal prepping to save time and ensure consistent macro intake</li>
              <li>Don't stress about hitting your targets perfectly every day - aim for 90% compliance</li>
            </ul>
            <p className="mb-4">
              Remember that these calculations provide a starting point. Monitor your progress over 3-4 weeks and adjust as needed based on your results. If you're not seeing changes in your body composition or performance, you may need to adjust your calorie intake or macronutrient ratios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4" id="related-resources">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tdee-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">TDEE Calculator</h3>
                <p className="text-sm text-gray-600">Calculate your Total Daily Energy Expenditure for better nutrition planning.</p>
              </Link>
              <Link to="/resources/how-to-calculate-your-tdee" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">How to Calculate Your TDEE</h3>
                <p className="text-sm text-gray-600">Learn what TDEE is and why it matters for weight management.</p>
              </Link>
              <Link to="/metabolism-calculator" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">Metabolism Calculator</h3>
                <p className="text-sm text-gray-600">Estimate your Basal Metabolic Rate and daily calorie needs.</p>
              </Link>
              <Link to="/resources/how-to-boost-your-metabolism" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-semibold mb-1">How to Boost Your Metabolism</h3>
                <p className="text-sm text-gray-600">Discover evidence-based strategies to increase your metabolic rate.</p>
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

export default MacronutrientCalculatorPage;
