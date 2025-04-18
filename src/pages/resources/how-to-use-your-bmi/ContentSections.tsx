
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding BMI Score Ranges</h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-semibold text-gray-900 border-b">BMI Category</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-900 border-b">BMI Range</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-900 border-b">Health Implications</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-blue-600">Underweight</td>
                <td className="py-3 px-4">Below 18.5</td>
                <td className="py-3 px-4">Potential nutrient deficiencies, hormonal imbalances, weakened immune system</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-green-600">Normal weight</td>
                <td className="py-3 px-4">18.5–24.9</td>
                <td className="py-3 px-4">Generally associated with lower risk of weight-related health problems</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-yellow-600">Overweight</td>
                <td className="py-3 px-4">25.0–29.9</td>
                <td className="py-3 px-4">Increased risk of heart disease, high blood pressure, type 2 diabetes</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 text-red-600">Obese</td>
                <td className="py-3 px-4">30.0 and above</td>
                <td className="py-3 px-4">Significantly higher risk of metabolic syndrome, cardiovascular issues, joint problems</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm italic text-muted-foreground mb-3">
          Classifications established by the World Health Organization (WHO) and used by the CDC for adult populations.
        </p>
        <p>
          These categories provide general guidance, but individual health assessment should consider additional factors. 
          BMI doesn't distinguish between excess fat, muscle, or bone mass, nor does it provide information about fat distribution.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Limitations of BMI (and What It Misses)</h2>
        <p className="mb-4">
          While BMI is widely used, there are several important limitations you should be aware of:
        </p>
        
        <h3 className="text-xl font-semibold mb-2">1. Doesn't Distinguish Between Fat and Muscle</h3>
        <p className="mb-4">
          BMI only measures total weight relative to height, not body composition. Athletes and people with high muscle mass often have elevated BMIs despite low body fat and excellent health.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">2. Ignores Fat Distribution</h3>
        <p className="mb-4">
          Where you carry fat matters significantly for health risks. Abdominal fat (apple shape) is more dangerous than fat carried on the hips and thighs (pear shape), but BMI treats all weight the same.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">3. Doesn't Account for Age, Sex, or Ethnicity</h3>
        <p className="mb-4">
          BMI thresholds don't adjust for important demographic factors. Older adults typically have more fat and less muscle at the same BMI as younger adults, making standard interpretations less accurate for seniors. Women generally have higher body fat percentages than men at the same BMI value, which isn't reflected in universal BMI categories. Additionally, people of Asian descent may develop health risks at lower BMI thresholds than those of European descent, highlighting ethnic variations that standard BMI ranges don't account for.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">4. Oversimplifies Complex Health Factors</h3>
        <p className="mb-4">
          BMI doesn't account for lifestyle factors like physical activity, diet quality, sleep, stress, genetics, or medical history—all crucial for overall health assessment.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
          <p className="text-blue-800">
            For a more comprehensive view of your health, consider using our <Link to="/metabolism-calculator" className="text-blue-600 hover:underline font-medium">Metabolism Calculator</Link> to understand your daily energy needs alongside your BMI. This provides a more complete picture of your body's functioning.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">How to Use BMI for Better Health Decisions</h2>
        <p className="mb-3">
          Despite its limitations, BMI can be a valuable starting point when used appropriately:
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Use BMI as a Screening Tool, Not a Diagnosis</h3>
        <p className="mb-4">
          Think of BMI as an initial indicator that may warrant further investigation, not as a definitive assessment of your health or body composition.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Combine BMI with Other Measurements</h3>
        <p className="mb-4">
          For a more complete health picture, consider tracking additional metrics alongside your BMI. Waist circumference provides valuable information about abdominal fat, with measurements exceeding 40 inches (102cm) for men and 35 inches (88cm) for women indicating increased health risks. Your waist-to-hip ratio can reveal important insights about fat distribution patterns, with values above 0.9 for men and 0.85 for women suggesting excess abdominal fat that may pose health concerns. Body fat percentage measurements offer direct assessment of fat versus lean mass, providing more nuanced information than BMI alone. Additionally, blood pressure, cholesterol, and blood sugar levels serve as key indicators of metabolic health that complement BMI readings for a more comprehensive health assessment.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Focus on Trends, Not Single Measurements</h3>
        <p className="mb-4">
          Track changes in your BMI over time rather than fixating on a single number. Gradual, sustainable improvements in your health metrics are more meaningful than rapid fluctuations.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Consider Your Individual Context</h3>
        <p className="mb-4">
          Interpret your BMI within the context of your personal characteristics and circumstances. Your activity level and fitness regimen may significantly impact how your BMI relates to your actual health status. Your family health history provides important genetic context for understanding your personal risk factors. Cultural background and ethnicity influence how BMI correlates with health outcomes in your specific population. Age and life stage affect body composition and metabolic patterns, changing how BMI should be interpreted throughout your lifespan.
        </p>
        
        <p className="mb-4">
          Your healthcare provider can help you understand how your BMI relates to your specific health profile and risk factors.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
          <p className="font-medium">
            BMI is most useful when viewed as part of your overall <Link to="/life-expectancy-calculator" className="text-primary hover:underline">health and longevity picture</Link>. Use it as one tool among many to monitor your physical wellbeing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
