
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import VitaminDCalculator from '../components/VitaminDCalculator';
import FooterWithCollapsibleLinks from '../components/FooterWithCollapsibleLinks';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { generateArticleSchema, generateFAQSchema } from '../utils/seoUtils';
import TableOfContents from '../pages/breast-implant/TableOfContents';

const VitaminDCalculatorPage: React.FC = () => {
  // References for scrolling to sections
  const overviewRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const considerationsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      overview: overviewRef,
      'how-it-works': howItWorksRef,
      benefits: benefitsRef,
      considerations: considerationsRef,
      faq: faqRef,
    };

    const ref = refs[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQ data
  const faqItems = [
    {
      question: "How much vitamin D do I need each day?",
      answer: "The recommended daily allowance varies by age: 400-1000 IU for infants, 600-1000 IU for children and adults up to age 70, and 800-2000 IU for adults over 70. However, many experts suggest that most adults need 1000-2000 IU daily for optimal health, with higher needs for those with limited sun exposure or certain health conditions."
    },
    {
      question: "Can I get enough vitamin D from food alone?",
      answer: "It's challenging to get enough vitamin D from food alone. Few foods naturally contain vitamin D – mainly fatty fish, egg yolks, and mushrooms exposed to UV light. Fortified foods like milk, cereal, and orange juice provide additional sources, but most people need a combination of food, sun exposure, and sometimes supplements to meet their needs."
    },
    {
      question: "How accurate is this vitamin D calculator?",
      answer: "This calculator provides an estimate based on typical vitamin D content in foods and average production from sun exposure. Individual factors like skin tone, age, weight, and exact dietary portions affect actual vitamin D levels. Blood tests are the only definitive way to determine your vitamin D status."
    },
    {
      question: "How does sunscreen affect vitamin D production?",
      answer: "Sunscreen blocks the UVB rays needed for vitamin D production. SPF 15 blocks about 93% of UVB rays, and SPF 30 blocks about 97%. While sun protection is important for preventing skin cancer, experts suggest brief periods (5-15 minutes) of unprotected sun exposure a few times per week may help with vitamin D production."
    },
    {
      question: "Can I take too much vitamin D?",
      answer: "Yes, vitamin D toxicity is possible, though rare. It usually occurs from taking high-dose supplements (typically over 10,000 IU daily for extended periods), not from sun exposure or food. Symptoms include nausea, vomiting, weakness, and kidney problems. Don't exceed 4,000 IU daily without medical supervision."
    }
  ];

  // Generate schema for FAQ
  const faqSchema = generateFAQSchema(faqItems);

  // Generate schema for article
  const articleSchema = generateArticleSchema(
    "Vitamin D Intake Calculator: Are You Getting Enough?",
    "https://longevitycalculator.xyz/longevity-calculator-og.png",
    "2024-08-24T12:00:00+00:00",
    "2024-08-24T12:00:00+00:00",
    "Calculate your daily vitamin D intake from food and sun exposure with our comprehensive calculator. Get personalized recommendations based on your diet, location, and lifestyle."
  );

  // Combined schemas
  const schemas = [faqSchema, articleSchema];

  return (
    <>
      <SEOHead
        title="Vitamin D Intake Calculator | Estimate Your Daily Vitamin D Levels"
        description="Calculate your daily vitamin D intake from food and sun exposure with our comprehensive calculator. Get personalized recommendations based on your diet, location, and lifestyle."
        canonicalUrl="/vitamin-d-calculator"
        keywords="vitamin D calculator, vitamin D intake, sunlight vitamin D, vitamin D deficiency, vitamin D recommendations, vitamin D diet, vitamin D supplements"
        schemas={schemas}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <main className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <h1 className="text-3xl font-bold mb-4">Vitamin D Calculator: Are You Getting Enough?</h1>
              <p className="text-gray-600 mb-8">
                Vitamin D is essential for bone health, immune function, and overall well-being. Use our calculator to estimate your daily vitamin D intake from diet and sun exposure, and receive personalized recommendations.
              </p>

              <VitaminDCalculator />

              <div className="mt-12 space-y-12">
                <div ref={overviewRef}>
                  <h2 className="text-2xl font-semibold mb-4" id="overview">Overview</h2>
                  <p className="mb-4">
                    Vitamin D is often called the "sunshine vitamin" because your body produces it when your skin is exposed to sunlight. It's crucial for calcium absorption, bone health, immune function, and has been linked to reduced risk of various diseases including some cancers, heart disease, and depression.
                  </p>
                  <p className="mb-4">
                    Despite its importance, vitamin D deficiency is common worldwide. Factors such as limited sun exposure, living at northern latitudes, darker skin tones, age, and certain medical conditions can increase your risk of deficiency.
                  </p>
                  <p>
                    Our calculator helps you estimate your vitamin D intake from both dietary sources and sun exposure, providing personalized recommendations based on your lifestyle and location.
                  </p>
                </div>

                <div ref={howItWorksRef}>
                  <h2 className="text-2xl font-semibold mb-4" id="how-it-works">How The Calculator Works</h2>
                  <p className="mb-4">
                    The Vitamin D Intake Calculator evaluates your likely vitamin D status by considering:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Dietary sources:</strong> Fatty fish (salmon, mackerel, sardines), fortified foods (milk, cereal, orange juice), egg yolks, and mushrooms</li>
                    <li><strong>Sun exposure:</strong> Duration and frequency of skin exposure to sunlight without sunscreen</li>
                    <li><strong>Geographic location:</strong> Your latitude affects the strength of UVB rays and your body's ability to produce vitamin D</li>
                  </ul>
                  <p className="mb-4">
                    The calculator processes these inputs to estimate your average daily vitamin D intake in International Units (IU), then provides recommendations based on established guidelines from the Endocrine Society and the Institute of Medicine.
                  </p>
                  <p>
                    It accounts for the seasonal and geographical variations in vitamin D production from sunlight, adjusting sun exposure effectiveness based on your latitude.
                  </p>
                </div>

                <div ref={benefitsRef}>
                  <h2 className="text-2xl font-semibold mb-4" id="benefits">Key Benefits</h2>
                  <p className="mb-4">Understanding your vitamin D status offers several benefits:</p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Personalized assessment:</strong> Get an estimate tailored to your specific diet, lifestyle, and location</li>
                    <li><strong>Targeted recommendations:</strong> Receive practical suggestions for optimizing your vitamin D intake</li>
                    <li><strong>Seasonal awareness:</strong> Understand how your vitamin D production varies throughout the year</li>
                    <li><strong>Dietary planning:</strong> Identify potential food sources to incorporate into your diet</li>
                    <li><strong>Supplement guidance:</strong> Determine if and when vitamin D supplementation might be beneficial</li>
                  </ul>
                  <p>
                    By maintaining optimal vitamin D levels, you can support bone health, immune function, and potentially reduce your risk of various chronic diseases.
                  </p>
                </div>

                <div ref={considerationsRef}>
                  <h2 className="text-2xl font-semibold mb-4" id="considerations">Important Considerations</h2>
                  <p className="mb-4">When using the Vitamin D Calculator, keep these factors in mind:</p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Individual variations:</strong> Factors like skin tone, age, weight, and health conditions affect vitamin D metabolism</li>
                    <li><strong>Estimation limitations:</strong> The calculator provides an approximation, not a precise measurement of your vitamin D levels</li>
                    <li><strong>Blood testing:</strong> The only definitive way to determine your vitamin D status is through a blood test measuring 25-hydroxyvitamin D levels</li>
                    <li><strong>Seasonal fluctuations:</strong> Vitamin D production from sunlight varies significantly by season, especially at higher latitudes</li>
                    <li><strong>Balance sun exposure:</strong> While sun exposure increases vitamin D, it also increases skin cancer risk. Aim for brief, unprotected exposure followed by sun protection</li>
                  </ul>
                  <p>
                    Consult with a healthcare provider before making significant changes to your vitamin D supplementation, especially if you have underlying health conditions.
                  </p>
                </div>

                <div ref={faqRef}>
                  <h2 className="text-2xl font-semibold mb-6" id="faq">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border-b pb-4">
                        <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-8">
                <TableOfContents onSectionClick={scrollToSection} />
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Related Calculators</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/bmi-calculator" className="text-blue-600 hover:underline text-sm">
                        BMI Calculator
                      </Link>
                    </li>
                    <li>
                      <Link to="/tdee-calculator" className="text-blue-600 hover:underline text-sm">
                        TDEE Calculator
                      </Link>
                    </li>
                    <li>
                      <Link to="/metabolism-calculator" className="text-blue-600 hover:underline text-sm">
                        Metabolism Calculator
                      </Link>
                    </li>
                    <li>
                      <Link to="/ideal-body-weight-calculator" className="text-blue-600 hover:underline text-sm">
                        Ideal Body Weight Calculator
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterWithCollapsibleLinks />
      </div>
    </>
  );
};

export default VitaminDCalculatorPage;
