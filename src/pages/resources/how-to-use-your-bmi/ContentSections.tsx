
import React from 'react';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Section 1: What BMI Measures */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What BMI Measures (and What It Doesn't)</h2>
        <p className="mb-4">
          BMI is calculated using a simple formula: weight in kilograms divided by height in meters squared (kg/m²). For those using imperial measurements, the formula is: [weight in pounds / (height in inches)²] × 703. This mathematical relationship was originally developed by Belgian mathematician Adolphe Quetelet in the 1830s as a way to categorize the "average man."
        </p>
        <p className="mb-4">
          What BMI does measure is the relationship between your weight and height. It provides a quick screening method that correlates relatively well with more direct measures of body fat for most people. It's inexpensive, non-invasive, and straightforward to calculate, which explains its widespread use.
        </p>
        <p>
          What BMI doesn't measure is equally important. It doesn't distinguish between fat, muscle, bone, or other tissues. It doesn't account for where fat is distributed in your body (central or visceral fat around organs poses higher health risks than fat elsewhere). And importantly, it doesn't directly measure health or fitness level, which can vary dramatically between two people with identical BMI values.
        </p>
      </section>

      {/* Section 2: BMI Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">BMI Categories Explained</h2>
        <p className="mb-4">
          The World Health Organization (WHO) and most healthcare systems use the following BMI classification system:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left border-b">BMI Category</th>
                <th className="py-3 px-4 text-left border-b">BMI Range (kg/m²)</th>
                <th className="py-3 px-4 text-left border-b">Health Implications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Underweight</td>
                <td className="py-3 px-4 border-b">Below 18.5</td>
                <td className="py-3 px-4 border-b">Potential malnutrition, hormone disruption, weakened immune system</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Normal weight</td>
                <td className="py-3 px-4 border-b">18.5 to 24.9</td>
                <td className="py-3 px-4 border-b">Generally associated with lowest health risks</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Overweight</td>
                <td className="py-3 px-4 border-b">25.0 to 29.9</td>
                <td className="py-3 px-4 border-b">Increased risk of heart disease, stroke, type 2 diabetes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 border-b">Obesity (Class I)</td>
                <td className="py-3 px-4 border-b">30.0 to 34.9</td>
                <td className="py-3 px-4 border-b">High risk of metabolic syndrome, sleep apnea, joint problems</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Obesity (Class II)</td>
                <td className="py-3 px-4 border-b">35.0 to 39.9</td>
                <td className="py-3 px-4 border-b">Very high risk of chronic diseases, mobility issues</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4">Obesity (Class III)</td>
                <td className="py-3 px-4">40.0 and above</td>
                <td className="py-3 px-4">Extremely high risk of serious health conditions, reduced life expectancy</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>
          While these categories provide a general framework, they're best used as a starting point for further assessment rather than a definitive diagnosis. The health implications can vary significantly based on other factors like physical activity levels, family history, and lifestyle choices.
        </p>
      </section>

      {/* Section 3: When BMI Isn't Accurate */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">When BMI Might Not Be Accurate</h2>
        <p className="mb-4">
          BMI has several well-documented limitations. Here are situations where your BMI may not accurately reflect your health status:
        </p>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-1">Athletes and Muscular Individuals</h3>
            <p>
              Muscle weighs more than fat by volume. Athletes or people with high muscle mass may register as "overweight" or even "obese" by BMI standards despite having low body fat percentages and excellent health markers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-1">The Elderly</h3>
            <p>
              As we age, we naturally lose muscle mass and gain fat, even if weight remains stable. An older person might have a "normal" BMI but an unhealthy body composition with insufficient muscle mass.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-1">Children and Adolescents</h3>
            <p>
              For people under 20, age and sex-specific percentiles should be used instead of adult categories, as body composition changes significantly during development.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-1">Ethnic Variations</h3>
            <p>
              Different ethnic groups may have different body compositions at the same BMI. For example, people of Asian descent often have higher body fat percentages at lower BMIs, leading some health authorities to recommend lower BMI thresholds for these populations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-1">Pregnancy and Lactation</h3>
            <p>
              BMI calculations aren't applicable during pregnancy or while breastfeeding due to natural and necessary weight changes during these periods.
            </p>
          </div>
        </div>
        
        <div className="my-8 relative rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80" 
            alt="Athletic person working out in a gym, demonstrating how BMI may not accurately reflect health in muscular individuals" 
            className="w-full object-cover rounded-xl"
            loading="lazy"
          />
          <p className="mt-2 text-sm text-gray-500 italic text-center">
            Athletes and people with high muscle mass often register as "overweight" on the BMI scale despite being in excellent health.
          </p>
        </div>
      </section>
      
      {/* Section 4: What To Do With Your Score */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What To Do With Your Score</h2>
        <p className="mb-4">
          Once you've calculated your BMI, here's how to put that information into proper context:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4 mb-6">
          <li>
            <strong>Consider your personal circumstances.</strong> Before reacting to your BMI category, consider whether any of the limitations mentioned above apply to you. Your muscle mass, age, ethnicity, and other factors might mean your BMI isn't giving you the full picture.
          </li>
          <li>
            <strong>Use it as one data point among many.</strong> BMI is most valuable when combined with other measurements such as waist circumference, blood pressure, cholesterol levels, blood sugar, and assessments of your diet and physical activity levels.
          </li>
          <li>
            <strong>Talk to a healthcare provider.</strong> If your BMI falls outside the "normal" range, consider discussing it with a doctor who can provide a more comprehensive health assessment and personalized advice.
          </li>
          <li>
            <strong>Focus on healthy behaviors, not just numbers.</strong> Rather than fixating on achieving a specific BMI, concentrate on sustainable lifestyle changes that improve overall health: balanced nutrition, regular physical activity, adequate sleep, stress management, and avoiding tobacco and excessive alcohol.
          </li>
          <li>
            <strong>Track changes over time.</strong> Sometimes the trend of your BMI is more informative than the absolute number. Gradual increases or decreases can provide insights into your changing health status.
          </li>
        </ol>
        
        <p>
          Remember that health exists on a spectrum and isn't determined by any single measurement. The goal of understanding your BMI should be to support informed decisions about your wellbeing, not to label yourself or others based on a simplified calculation.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
