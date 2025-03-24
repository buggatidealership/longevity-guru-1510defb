
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">What BMI Measures (and What It Doesn't)</h2>
        <p className="mb-3">
          Body Mass Index is calculated using a simple formula: weight in kilograms divided by height in meters squared (kg/m²). 
          In the U.S., it's often calculated as: [weight (lb) ÷ height (in)²] × 703.
        </p>
        <p className="mb-3">
          While straightforward to calculate, BMI is primarily designed as a screening tool to identify potential weight problems in adults. 
          It's not a diagnostic measure of body fatness or health, and doesn't account for several important factors:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-2">
          <li>Body composition (muscle vs. fat distribution)</li>
          <li>Bone density and overall body frame</li>
          <li>Ethnic and demographic differences</li>
          <li>Age, gender, and hormonal factors</li>
        </ul>
        <p>
          Despite these limitations, BMI remains valuable for population-level health research and as an initial screening tool. 
          Its simplicity makes it useful for identifying potential weight-related health risks, but it should be considered alongside other health metrics.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">BMI Categories Explained</h2>
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
        <h2 className="text-2xl font-bold mb-4">When BMI Might Not Be Accurate</h2>
        <p className="mb-4">
          While BMI is widely used, there are several groups for whom BMI measurements can be misleading:
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Athletes and Physically Active Individuals</h3>
        <p className="mb-4">
          People with significant muscle mass often have higher BMIs due to muscle weighing more than fat. 
          A bodybuilder or athlete may register as "overweight" despite having low body fat percentages.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Children and Teenagers</h3>
        <p className="mb-4">
          For young people, age and gender-specific BMI percentiles should be used instead of adult categories. 
          Growth patterns vary significantly during development.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Older Adults</h3>
        <p className="mb-4">
          As we age, we typically lose muscle and gain fat, even without weight changes. 
          An elderly person might have a "normal" BMI while having unhealthy body composition.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Ethnic Variations</h3>
        <p className="mb-3">
          Research suggests that different ethnic groups may have different body compositions and health risks at the same BMI. 
          For example, Asian populations may develop health risks at lower BMI thresholds.
        </p>
        
        <p>
          Because of these limitations, healthcare providers often use additional measurements such as waist circumference, 
          waist-to-hip ratio, skinfold thickness, or body composition scans when conducting a comprehensive health assessment.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">What To Do With Your Score</h2>
        <p className="mb-3">
          Understanding your BMI is just the first step. Here's how to appropriately use this information:
        </p>
        
        <h3 className="text-xl font-semibold mb-2">If Your BMI Is Outside the "Normal" Range:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Consult a healthcare provider</strong> - Before making significant lifestyle changes, discuss your BMI and overall health with a medical professional.
          </li>
          <li>
            <strong>Consider additional measurements</strong> - Ask about waist circumference, body composition analysis, or other assessments.
          </li>
          <li>
            <strong>Evaluate your lifestyle holistically</strong> - Consider your diet, physical activity level, sleep quality, and stress management.
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Healthy Approaches to Improving BMI:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Focus on balanced nutrition</strong> - Emphasize whole foods, adequate protein, fruits, vegetables, and whole grains.
          </li>
          <li>
            <strong>Incorporate regular physical activity</strong> - Aim for both cardiovascular exercise and strength training.
          </li>
          <li>
            <strong>Set sustainable goals</strong> - Gradual changes (0.5-2 lbs per week) are more sustainable than rapid weight fluctuations.
          </li>
          <li>
            <strong>Track progress beyond the scale</strong> - Notice changes in energy, fitness, clothing fit, and overall well-being.
          </li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
          <p className="text-blue-800">
            <strong>Remember:</strong> BMI is just one data point. Your overall health is determined by many factors including mental health, 
            physical activity levels, nutritional quality, sleep, and more. Use BMI as a starting point, not the final word on your health status.
          </p>
        </div>
        
        <p>
          If you're interested in tracking your BMI over time, our <Link to="/bmi-calculator" className="text-primary hover:underline">BMI Calculator</Link> can 
          help you monitor changes as you implement healthy lifestyle modifications.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
