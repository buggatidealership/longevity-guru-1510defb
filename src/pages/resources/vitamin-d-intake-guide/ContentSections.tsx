
import React from 'react';
import { Sun, Droplets, FileText, Calculator, Info } from 'lucide-react';

const ContentSections = () => {
  return (
    <div className="prose max-w-none">
      <section id="what-is-vitamin-d" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <Sun className="h-6 w-6 text-yellow-500" />
          What Is Vitamin D and Why Is It Important?
        </h2>
        
        <p>
          Vitamin D is a fat-soluble vitamin that functions more like a hormone in your body. Unlike most nutrients, vitamin D can be synthesized by your skin when exposed to UVB rays from sunlight. This unique characteristic earned it the nickname "the sunshine vitamin," but it's also available through certain foods and supplements.
        </p>
        
        <p>
          Vitamin D exists in two main forms:
        </p>
        
        <ul>
          <li><strong>Vitamin D2 (ergocalciferol)</strong>: Found in some plants, mushrooms exposed to UV light, and fortified foods</li>
          <li><strong>Vitamin D3 (cholecalciferol)</strong>: Produced by your skin when exposed to sunlight and found in animal-based foods</li>
        </ul>
        
        <p>
          Both forms can raise blood levels of vitamin D, but research suggests that D3 might be more effective at increasing and maintaining adequate levels over time.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <h3 className="text-lg font-medium mb-2">Key Functions of Vitamin D</h3>
          <ul>
            <li><strong>Bone health</strong>: Regulates calcium absorption and bone mineralization</li>
            <li><strong>Immune function</strong>: Supports innate and adaptive immune responses</li>
            <li><strong>Muscle strength</strong>: Maintains proper muscle function and prevents weakness</li>
            <li><strong>Mood regulation</strong>: May help prevent depression and seasonal affective disorder</li>
            <li><strong>Inflammation control</strong>: Helps regulate inflammatory processes in the body</li>
            <li><strong>Cell growth</strong>: Regulates cell differentiation and proliferation</li>
          </ul>
        </div>
        
        <p>
          Research continues to uncover new roles for vitamin D, with studies suggesting potential benefits for cardiovascular health, blood sugar regulation, and even cancer prevention. While these areas require more research, the established benefits for bone health and immune function alone make vitamin D essential for overall wellbeing.
        </p>
      </section>
      
      <section id="how-much-vitamin-d" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <Droplets className="h-6 w-6 text-blue-500" />
          How Much Vitamin D Do You Need Per Day?
        </h2>
        
        <p>
          The recommended daily intake of vitamin D varies by age, life stage, and health status. Official guidelines provide a helpful starting point, but many experts now believe these recommendations may be too conservative, especially for individuals with limited sun exposure or other risk factors for deficiency.
        </p>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Age Group</th>
                <th className="border p-2 text-left">RDI (IU)</th>
                <th className="border p-2 text-left">RDI (mcg)</th>
                <th className="border p-2 text-left">Upper Limit (IU)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Infants (0-12 months)</td>
                <td className="border p-2">400 IU</td>
                <td className="border p-2">10 mcg</td>
                <td className="border p-2">1,000-1,500 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Children (1-18 years)</td>
                <td className="border p-2">600 IU</td>
                <td className="border p-2">15 mcg</td>
                <td className="border p-2">2,500-4,000 IU</td>
              </tr>
              <tr>
                <td className="border p-2">Adults (19-70 years)</td>
                <td className="border p-2">600 IU</td>
                <td className="border p-2">15 mcg</td>
                <td className="border p-2">4,000 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Adults (>70 years)</td>
                <td className="border p-2">800 IU</td>
                <td className="border p-2">20 mcg</td>
                <td className="border p-2">4,000 IU</td>
              </tr>
              <tr>
                <td className="border p-2">Pregnant/Breastfeeding</td>
                <td className="border p-2">600 IU</td>
                <td className="border p-2">15 mcg</td>
                <td className="border p-2">4,000 IU</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>
          <strong>Important note:</strong> These are the Recommended Dietary Allowances (RDAs) established by the Institute of Medicine. However, many vitamin D researchers and medical organizations suggest that these recommendations are too low for optimal health. The Endocrine Society, for example, recommends higher intakes for people at risk of deficiency:
        </p>
        
        <ul>
          <li>Children (1-18 years): 600-1,000 IU daily</li>
          <li>Adults (19+ years): 1,500-2,000 IU daily</li>
        </ul>
        
        <p>
          For people with confirmed vitamin D deficiency, therapeutic doses may range from 3,000-5,000 IU daily for several months under medical supervision, followed by a maintenance dose.
        </p>
      </section>
      
      <section id="factors" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <FileText className="h-6 w-6 text-purple-500" />
          Factors That Affect Your Vitamin D Requirements
        </h2>
        
        <p>
          Your individual vitamin D needs may differ significantly from general recommendations due to various factors that influence both your body's production and absorption of this essential nutrient.
        </p>
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Geographic Location & Season</h3>
            <p className="text-sm">
              Living above 37° latitude (approximately the line from San Francisco to Richmond, VA) means UVB rays are too weak for vitamin D synthesis during winter months. People in northern regions may need 2-3 times more vitamin D during winter.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Skin Tone</h3>
            <p className="text-sm">
              Melanin reduces the skin's ability to produce vitamin D from sunlight. People with darker skin may need 3-5 times more sun exposure than those with lighter skin to produce the same amount of vitamin D.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Age</h3>
            <p className="text-sm">
              The ability to synthesize vitamin D decreases with age. A 70-year-old produces about 75% less vitamin D from the same amount of sun exposure compared to a 20-year-old.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Body Weight</h3>
            <p className="text-sm">
              Vitamin D is fat-soluble and can be sequestered in fat tissue. People with obesity (BMI > 30) may need 2-3 times more vitamin D to maintain adequate blood levels.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Medical Conditions</h3>
            <p className="text-sm">
              Certain conditions affect vitamin D metabolism, including celiac disease, Crohn's disease, cystic fibrosis, and kidney or liver disease. These may increase requirements by 50-100%.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Medications</h3>
            <p className="text-sm">
              Some medications interfere with vitamin D metabolism, including glucocorticoids, antiseizure drugs, and certain HIV medications. Users may need 1.5-2 times more vitamin D.
            </p>
          </div>
        </div>
        
        <p>
          Given all these variables, calculating your precise vitamin D needs can be complex. Our <a href="/vitamin-d-calculator" className="text-primary hover:underline">Vitamin D Calculator</a> takes these factors into account to provide a personalized estimate. For the most accurate assessment, a blood test measuring your 25-hydroxyvitamin D level is recommended.
        </p>
        
        <div className="relative rounded-xl overflow-hidden my-8 aspect-video">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt="Various factors affecting vitamin D absorption and metabolism"
            className="object-cover w-full h-full"
            width={1200}
            height={675}
          />
        </div>
      </section>
      
      <section id="calculator" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <Calculator className="h-6 w-6 text-green-500" />
          How to Use the Vitamin D Intake Calculator
        </h2>
        
        <p>
          Our <a href="/vitamin-d-calculator" className="text-primary hover:underline">Vitamin D Calculator</a> is designed to provide a personalized estimate of your vitamin D requirements based on key factors that influence your needs. Here's how to use it effectively:
        </p>
        
        <ol className="list-decimal pl-5 my-4 space-y-2">
          <li>
            <strong>Enter personal information</strong>: Input your age, weight, height, and sex, which are used to determine baseline requirements.
          </li>
          <li>
            <strong>Specify your location</strong>: Enter your latitude or select your region to account for geographic impact on UVB availability.
          </li>
          <li>
            <strong>Indicate skin tone</strong>: Select your skin tone on the Fitzpatrick scale (1-6) to account for melanin's effect on vitamin D synthesis.
          </li>
          <li>
            <strong>Estimate sun exposure</strong>: Indicate how much time you typically spend outdoors with skin exposed (arms, legs, face) without sunscreen.
          </li>
          <li>
            <strong>Select dietary sources</strong>: Check which vitamin D-rich foods you regularly consume and in what quantities.
          </li>
          <li>
            <strong>Note medical conditions</strong>: Indicate any conditions or medications that might affect vitamin D metabolism.
          </li>
        </ol>
        
        <p>
          After entering this information, the calculator will provide:
        </p>
        
        <ul className="list-disc pl-5 my-4 space-y-2">
          <li>Your estimated daily vitamin D requirement in IU and mcg</li>
          <li>An approximation of how much you're currently getting from sun and diet</li>
          <li>Recommendations for supplementation if needed</li>
          <li>Personalized guidance based on your specific factors</li>
        </ul>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p className="text-blue-800">
            <strong>Pro Tip:</strong> For the most accurate assessment, use the calculator as a starting point, then confirm your status with a blood test measuring 25-hydroxyvitamin D levels. The optimal range is generally considered to be 30-50 ng/mL (75-125 nmol/L).
          </p>
        </div>
      </section>
      
      <section id="sources" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <Sun className="h-6 w-6 text-orange-500" />
          Vitamin D Food Sources vs. Supplements
        </h2>
        
        <p>
          While sunlight is the most efficient way to boost vitamin D levels, dietary sources and supplements play crucial roles in maintaining adequate intake, especially during winter months or for those with limited sun exposure.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Food Sources of Vitamin D</h3>
        
        <p>
          Natural food sources of vitamin D are limited, but several options can contribute to your daily intake:
        </p>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Food</th>
                <th className="border p-2 text-left">Serving Size</th>
                <th className="border p-2 text-left">Vitamin D (IU)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Salmon (wild-caught)</td>
                <td className="border p-2">3 oz (85g)</td>
                <td className="border p-2">600-1,000 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Salmon (farmed)</td>
                <td className="border p-2">3 oz (85g)</td>
                <td className="border p-2">100-250 IU</td>
              </tr>
              <tr>
                <td className="border p-2">Sardines (canned)</td>
                <td className="border p-2">2 sardines</td>
                <td className="border p-2">46 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Mackerel (canned)</td>
                <td className="border p-2">3 oz (85g)</td>
                <td className="border p-2">250 IU</td>
              </tr>
              <tr>
                <td className="border p-2">Tuna (canned)</td>
                <td className="border p-2">3 oz (85g)</td>
                <td className="border p-2">150 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Egg yolk</td>
                <td className="border p-2">1 large</td>
                <td className="border p-2">40 IU</td>
              </tr>
              <tr>
                <td className="border p-2">Beef liver</td>
                <td className="border p-2">3 oz (85g)</td>
                <td className="border p-2">50 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Mushrooms (UV-exposed)</td>
                <td className="border p-2">1/2 cup</td>
                <td className="border p-2">366 IU</td>
              </tr>
              <tr>
                <td className="border p-2">Fortified milk</td>
                <td className="border p-2">1 cup (240ml)</td>
                <td className="border p-2">120 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Fortified orange juice</td>
                <td className="border p-2">1 cup (240ml)</td>
                <td className="border p-2">100 IU</td>
              </tr>
              <tr>
                <td className="border p-2">Fortified cereal</td>
                <td className="border p-2">1 cup (30g)</td>
                <td className="border p-2">40-100 IU</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Cod liver oil</td>
                <td className="border p-2">1 tsp (5ml)</td>
                <td className="border p-2">450 IU</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>
          As you can see, even the richest food sources provide relatively modest amounts of vitamin D compared to what can be synthesized from sun exposure or taken as supplements. Most people would struggle to get enough vitamin D from food alone.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Supplement Options</h3>
        
        <p>
          For many people, especially during winter or for those with risk factors for deficiency, vitamin D supplements provide the most reliable way to maintain adequate levels. When choosing a supplement, consider:
        </p>
        
        <ul className="list-disc pl-5 my-4 space-y-2">
          <li>
            <strong>Form</strong>: Vitamin D3 (cholecalciferol) is generally preferred over D2 (ergocalciferol) as it's more effective at raising and maintaining blood levels.
          </li>
          <li>
            <strong>Dosage</strong>: Supplements come in various strengths from 400 IU to 10,000 IU. Choose based on your specific needs as calculated by our <a href="/vitamin-d-calculator" className="text-primary hover:underline">Vitamin D Calculator</a>.
          </li>
          <li>
            <strong>Formulation</strong>: Available as tablets, softgels, liquid drops, and gummies. Liquid forms in oil may be better absorbed since vitamin D is fat-soluble.
          </li>
          <li>
            <strong>Combined supplements</strong>: Some products combine vitamin D with vitamin K2, which helps direct calcium to bones rather than soft tissues.
          </li>
        </ul>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="text-yellow-800">
            <strong>Important:</strong> Take vitamin D supplements with a meal containing some fat to maximize absorption. For high-dose supplements (over 2,000 IU daily), periodic blood testing is recommended to monitor levels and prevent excessive accumulation.
          </p>
        </div>
      </section>
      
      <section id="deficiency" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <Info className="h-6 w-6 text-red-500" />
          Signs of Deficiency and Overdose
        </h2>
        
        <p>
          Recognizing the signs of both vitamin D deficiency and toxicity is important for maintaining optimal health. While deficiency is much more common, taking excessive supplements over time can lead to adverse effects.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Signs of Vitamin D Deficiency</h3>
        
        <p>
          Vitamin D deficiency often develops slowly and may present with subtle symptoms that are easily overlooked or attributed to other causes:
        </p>
        
        <ul className="list-disc pl-5 my-4 space-y-2">
          <li><strong>Fatigue and low energy</strong>: Often persistent even with adequate sleep</li>
          <li><strong>Bone and muscle pain</strong>: Particularly in the back, ribs, legs, and joints</li>
          <li><strong>Muscle weakness</strong>: Especially in the legs and arms, affecting physical performance</li>
          <li><strong>Mood changes</strong>: Depression or seasonal affective disorder, particularly in winter</li>
          <li><strong>Impaired wound healing</strong>: Cuts and scrapes taking longer than normal to heal</li>
          <li><strong>Frequent infections</strong>: Due to weakened immune function</li>
          <li><strong>Hair loss</strong>: Particularly in women, though multiple factors can cause this</li>
          <li><strong>Bone density loss</strong>: Leading to osteopenia or osteoporosis over time</li>
        </ul>
        
        <p>
          In children, severe vitamin D deficiency can lead to rickets, a condition causing soft, weakened bones and skeletal deformities. In adults, the equivalent condition is osteomalacia, characterized by softening of the bones.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Risk of Vitamin D Toxicity</h3>
        
        <p>
          While much less common than deficiency, vitamin D toxicity can occur with excessive supplementation over time. It's virtually impossible to get too much vitamin D from sun exposure or food sources alone.
        </p>
        
        <p>
          Signs of vitamin D toxicity (hypervitaminosis D) include:
        </p>
        
        <ul className="list-disc pl-5 my-4 space-y-2">
          <li><strong>Elevated blood calcium</strong>: The primary concern with vitamin D toxicity</li>
          <li><strong>Nausea and vomiting</strong>: Often early signs of excessive intake</li>
          <li><strong>Poor appetite and weight loss</strong>: Due to digestive disturbances</li>
          <li><strong>Excessive thirst and urination</strong>: As the body tries to clear excess calcium</li>
          <li><strong>Kidney problems</strong>: Including kidney stones and potential damage</li>
          <li><strong>Confusion and disorientation</strong>: In severe cases due to calcium effects on the brain</li>
        </ul>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <p className="text-red-800">
            <strong>Warning:</strong> Vitamin D toxicity typically occurs only with supplementation at doses exceeding 10,000 IU daily for extended periods. If you're taking high-dose supplements and experience any concerning symptoms, consult your healthcare provider and have your blood levels checked.
          </p>
        </div>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Blood Testing and Optimal Levels</h3>
        
        <p>
          The most reliable way to assess your vitamin D status is through a blood test measuring 25-hydroxyvitamin D (25(OH)D) levels. This test is widely available and often covered by insurance when ordered by a healthcare provider.
        </p>
        
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Blood Level (ng/mL)</th>
                <th className="border p-2 text-left">Blood Level (nmol/L)</th>
                <th className="border p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">&lt; 12 ng/mL</td>
                <td className="border p-2">&lt; 30 nmol/L</td>
                <td className="border p-2">Severe deficiency</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">12-20 ng/mL</td>
                <td className="border p-2">30-50 nmol/L</td>
                <td className="border p-2">Deficiency</td>
              </tr>
              <tr>
                <td className="border p-2">21-29 ng/mL</td>
                <td className="border p-2">51-74 nmol/L</td>
                <td className="border p-2">Insufficiency</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">30-50 ng/mL</td>
                <td className="border p-2">75-125 nmol/L</td>
                <td className="border p-2">Optimal</td>
              </tr>
              <tr>
                <td className="border p-2">51-80 ng/mL</td>
                <td className="border p-2">126-200 nmol/L</td>
                <td className="border p-2">High (but generally safe)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">&gt; 100 ng/mL</td>
                <td className="border p-2">&gt; 250 nmol/L</td>
                <td className="border p-2">Potentially toxic</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>
          While conventional medical ranges may consider 20-30 ng/mL (50-75 nmol/L) to be adequate, many vitamin D researchers and functional medicine practitioners recommend maintaining levels between 40-60 ng/mL (100-150 nmol/L) for optimal health benefits.
        </p>
        
        <p>
          Our <a href="/vitamin-d-calculator" className="text-primary hover:underline">Vitamin D Calculator</a> can help you determine the appropriate supplementation level to reach your target blood concentration based on your individual factors. However, regular blood testing is the most reliable way to fine-tune your intake.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
