
import React from 'react';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import FemaleFeritilityCalculator from '@/components/FemaleFeritilityCalculator';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  generateBreadcrumbSchema, 
  generateFAQSchema, 
  generateArticleSchema 
} from '@/utils/seoUtils';

const FertilityCalculator = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // For section navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQ data for both display and schema
  const faqs = [
    {
      question: "At what age does female fertility begin to decline?",
      answer: "Female fertility begins to decline gradually around age 30, with a more significant decrease after age 35. By age 40, fertility has declined substantially, with pregnancy rates dropping to around 5% per cycle. This decline is primarily due to both decreasing egg quantity (ovarian reserve) and quality. While the exact timing varies between individuals based on genetics and health factors, the general pattern of age-related fertility decline is consistent across populations."
    },
    {
      question: "Can lifestyle changes improve my fertility?",
      answer: "Yes, several lifestyle factors can significantly impact fertility. Maintaining a healthy weight is crucial, as both underweight and overweight conditions can disrupt hormone balance and ovulation. Regular moderate exercise supports fertility, while excessive high-intensity exercise may be detrimental. A balanced diet rich in antioxidants, healthy fats, and plant protein can improve egg quality. Avoiding smoking, excessive alcohol, and recreational drugs is essential, as these substances directly damage eggs and reproductive organs. Managing stress through mindfulness, yoga, or other relaxation techniques may also support reproductive health."
    },
    {
      question: "How accurate is this female fertility calculator?",
      answer: "Our female fertility calculator provides an evidence-based estimate of fertility potential based on current age and other factors. It uses data from large population studies and clinical research on age-related fertility decline. However, it represents statistical averages and cannot account for all individual variations. For a comprehensive personal fertility assessment, we recommend consulting with a reproductive endocrinologist who can perform specific tests like antral follicle count, antimüllerian hormone (AMH) levels, and other diagnostic evaluations to provide a more precise evaluation of your reproductive potential."
    },
    {
      question: "Do irregular periods affect fertility?",
      answer: "Yes, irregular periods often indicate irregular or absent ovulation (anovulation), which significantly reduces fertility. Regular menstrual cycles typically signal that ovulation is occurring predictably, while irregular cycles suggest potential hormonal imbalances or conditions like polycystic ovary syndrome (PCOS), thyroid disorders, or premature ovarian insufficiency. These conditions can affect fertility but are often treatable. If you experience irregular periods (cycles consistently shorter than 21 days or longer than 35 days, or varying by more than 7 days), consult with a healthcare provider for proper evaluation and treatment options to optimize your fertility."
    },
    {
      question: "How can I track my most fertile days?",
      answer: "To identify your most fertile period, track your menstrual cycle and look for ovulation signs. The fertile window typically spans 5 days before ovulation through the day of ovulation. Methods to track ovulation include: 1) Basal body temperature charting - your temperature rises slightly (0.4-1.0°F) after ovulation; 2) Ovulation predictor kits that detect the pre-ovulation LH hormone surge; 3) Monitoring cervical mucus changes - fertile mucus becomes clear, slippery and stretchy; 4) Fertility tracking apps that combine multiple indicators; 5) Fertility monitors that track hormone levels in urine. Combining multiple methods typically provides the most accurate prediction of your fertile window."
    }
  ];

  // Prepare schema data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Female Fertility Calculator", path: "/female-fertility-calculator" }
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const articleSchema = generateArticleSchema(
    "Female Fertility Calculator by Age | Free Egg Quality & Ovarian Reserve Estimator",
    "Our free female fertility calculator estimates your chances of natural conception based on age and other factors. Get personalized fertility insights now.",
    "/female-fertility-calculator",
    "2023-01-15T00:00:00Z",
    new Date().toISOString()
  );

  const pageTitle = "Female Fertility Calculator by Age | Free Egg Quality & Ovarian Reserve Estimator";
  const pageDescription = "Our free female fertility calculator estimates your chances of natural conception based on age and other factors. Get personalized fertility insights now.";

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://longevitycalculator.xyz/female-fertility-calculator"
        keywords="female fertility calculator, fertility calculator by age, egg quality estimator, ovarian reserve calculator, woman fertility test, pregnancy probability calculator, fertility decline by age"
        schemas={[breadcrumbSchema, faqSchema, articleSchema]}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="1111111111" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 pb-8">
          {/* Breadcrumb navigation */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Female Fertility Calculator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="w-full flex justify-center">
            <div className="w-full">
              <FemaleFeritilityCalculator />
            </div>
          </div>
          
          {/* About This Calculator Section */}
          <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Understanding Female Fertility and Age</h2>
            
            {/* Table of Contents */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => scrollToSection('overview')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Calculator Overview
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('age-impact')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    How Age Impacts Fertility
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('egg-quality')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Egg Quality & Ovarian Reserve
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('improve-fertility')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Ways to Improve Fertility
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div id="overview">
                <h3 className="text-xl font-medium">Female Fertility Calculator by Age</h3>
                <p>
                  Our <strong>female fertility calculator</strong> provides a personalized assessment of your fertility potential based on your current age and other key factors. This science-based tool estimates your chances of natural conception and helps you understand how your reproductive timeline may unfold.
                </p>
                <p className="mt-2">
                  While age is the single most important factor affecting female fertility, our calculator also considers how lifestyle factors, medical history, and family background can influence your reproductive potential. This comprehensive approach provides a more accurate picture than simple age-based estimates.
                </p>
              </div>
              
              <div className="my-4">
                <AdUnit 
                  className="w-full"
                  slot="4444444444" 
                  format="rectangle"
                  responsive={true}
                />
              </div>
              
              <div id="age-impact">
                <h3 className="text-xl font-medium mt-6">How Age Impacts Female Fertility</h3>
                <p>
                  Female fertility follows a predictable age-related decline pattern that's important to understand when planning your reproductive future:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Peak Fertility:</strong> Women experience optimal fertility in their 20s, with pregnancy rates of approximately 25% per cycle when trying to conceive.</li>
                  <li><strong>Early 30s:</strong> Fertility remains relatively stable with only slight decreases for most women.</li>
                  <li><strong>Mid to Late 30s:</strong> A more noticeable decline begins, with fertility decreasing more rapidly after age 35.</li>
                  <li><strong>Age 40+:</strong> Fertility declines sharply, with natural conception rates dropping to approximately 5% per cycle.</li>
                </ul>
                <p className="mt-2">
                  This decline occurs primarily because both egg quantity and quality decrease over time. By birth, a woman has all the eggs she will ever have (about 1-2 million), and this number steadily decreases throughout life. Additionally, as eggs age, they become more susceptible to chromosomal abnormalities, leading to lower conception rates and higher miscarriage risks.
                </p>
              </div>
              
              <div id="egg-quality">
                <h3 className="text-xl font-medium mt-6">Understanding Egg Quality & Ovarian Reserve</h3>
                <p>
                  Two crucial factors in female fertility are egg quality and ovarian reserve. Our calculator provides an <strong>egg quality estimator</strong> and <strong>ovarian reserve calculator</strong> function to help you understand these important concepts:
                </p>
                <p className="mt-2">
                  <strong>Egg Quality</strong> refers to the likelihood that an egg will result in a healthy pregnancy when fertilized. Quality naturally declines with age as eggs accumulate more genetic abnormalities. Unlike many aspects of health, egg quality cannot be improved once it has declined, which is why age has such a profound impact on fertility.
                </p>
                <p className="mt-2">
                  <strong>Ovarian Reserve</strong> refers to the quantity of eggs remaining in the ovaries. While a woman is born with all her eggs, this supply steadily diminishes through monthly ovulation and natural cellular processes. By menopause, virtually no viable eggs remain. Our calculator provides an estimate of your current ovarian reserve based on age-related population averages.
                </p>
                <p className="mt-2">
                  For a precise assessment of your personal ovarian reserve, medical tests like Antral Follicle Count (ultrasound) and Anti-Müllerian Hormone (AMH) blood tests can be performed by fertility specialists.
                </p>
              </div>
              
              <div id="improve-fertility">
                <h3 className="text-xl font-medium mt-6">Ways to Improve Fertility Naturally</h3>
                <p>
                  While age-related fertility decline cannot be reversed, several lifestyle factors can help optimize your current fertility potential:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Maintain a Healthy Weight:</strong> Both underweight and overweight conditions can disrupt hormonal balance and ovulation cycles.</li>
                  <li><strong>Balanced Nutrition:</strong> Diets rich in antioxidants, healthy fats, and plant proteins support reproductive health.</li>
                  <li><strong>Regular Exercise:</strong> Moderate physical activity improves overall health and hormone balance, but excessive exercise can interfere with ovulation.</li>
                  <li><strong>Stress Management:</strong> Chronic stress can affect hormone levels and potentially impact fertility; techniques like mindfulness, yoga, and adequate sleep are beneficial.</li>
                  <li><strong>Avoid Harmful Substances:</strong> Smoking, excessive alcohol, and recreational drugs can all damage eggs and reproductive organs.</li>
                  <li><strong>Track Your Cycle:</strong> Understanding your personal cycle and identifying your fertile window can significantly improve conception chances.</li>
                </ul>
                <p className="mt-2">
                  For women with concerns about declining fertility who aren't yet ready to conceive, egg freezing (oocyte cryopreservation) offers an option to preserve younger, healthier eggs for future use. This procedure is most effective when done before age 35.
                </p>
              </div>
              
              {/* FAQ Section with Accordion */}
              <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-lg font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          
          <div className="mt-8 mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
            <AdUnit 
              className="w-full"
              slot="2222222222" 
              format="horizontal"
              responsive={true}
            />
          </div>
          
          <div className="mt-8 mb-6 p-4 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Free Health Calculators</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Life Expectancy</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Retirement Savings</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Child Growth</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
              
              <Link to="/breast-implant-size-calculator" onClick={handleLinkClick} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-sm mb-1">Breast Implant Size</h3>
                <span className="text-xs text-blue-500 hover:underline font-medium">Calculate →</span>
              </Link>
            </div>
          </div>
        </main>
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Our Calculators</h3>
                <ul className="space-y-2">
                  <li><Link to="/life-expectancy-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Life Expectancy Calculator</Link></li>
                  <li><Link to="/retirement-savings-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Retirement Savings Calculator</Link></li>
                  <li><Link to="/female-fertility-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Female Fertility Calculator</Link></li>
                  <li><Link to="/child-growth-percentile-calculator" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Child Growth Percentile Calculator</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                  <li><Link to="/terms" onClick={handleLinkClick} className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Longevity Calculator. For educational purposes only.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FertilityCalculator;
