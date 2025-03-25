
import React from 'react';
import { AdUnit } from '@/components/AdUnit';

const ContentSections = () => {
  return (
    <div className="prose max-w-none text-gray-700 space-y-8 text-left">
      <section id="what-is-tdee">
        <h2 className="text-2xl font-semibold">What Is TDEE?</h2>
        <p>
          Your Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns each day. 
          It combines your Basal Metabolic Rate (BMR) with the calories you burn from physical activity, 
          digestion (TEF), and daily movement.
        </p>
        <p className="font-medium">
          In short:<br />
          <strong>TDEE = BMR + Activity + Digestion + NEAT</strong>
        </p>
        <p>
          Knowing your TDEE helps you answer critical questions like:
        </p>
        <ul>
          <li>How many calories should I eat to lose weight?</li>
          <li>Am I eating enough to build muscle?</li>
          <li>How should I adjust on rest days?</li>
        </ul>
      </section>
      
      <section id="why-tdee-matters">
        <h2 className="text-2xl font-semibold">Why TDEE Matters</h2>
        <p>
          TDEE is the cornerstone of any health goal: weight loss, gain, or maintenance.
        </p>
        <ul>
          <li><strong>Want to lose fat?</strong> Eat fewer calories than your TDEE.</li>
          <li><strong>Want to gain muscle?</strong> Eat more than your TDEE.</li>
          <li><strong>Want to maintain?</strong> Eat at your TDEE.</li>
        </ul>
        <p>
          It's more personalized than fixed diets because it adjusts to your size, gender, age, and lifestyle.
        </p>
      </section>
      
      <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
        <AdUnit 
          className="w-full"
          slot="2222222222" 
          format="rectangle"
          responsive={true}
        />
      </div>
      
      <section id="how-to-calculate">
        <h2 className="text-2xl font-semibold">How to Calculate Your TDEE (Step-by-Step)</h2>
        
        <div className="pl-4 border-l-4 border-gray-200 my-4">
          <h3 className="text-xl font-medium">1. Calculate Your BMR</h3>
          <p>Use the Mifflin-St Jeor formula:</p>
          <ul>
            <li><strong>For men:</strong> 10 × weight(kg) + 6.25 × height(cm) – 5 × age + 5</li>
            <li><strong>For women:</strong> 10 × weight(kg) + 6.25 × height(cm) – 5 × age – 161</li>
          </ul>
        </div>
        
        <div className="pl-4 border-l-4 border-gray-200 my-4">
          <h3 className="text-xl font-medium">2. Pick an Activity Multiplier</h3>
          <p>Multiply your BMR by your lifestyle level:</p>
          <ul>
            <li><strong>Sedentary</strong> (little or no exercise): × 1.2</li>
            <li><strong>Light activity</strong> (1–3 days/week): × 1.375</li>
            <li><strong>Moderate</strong> (3–5 days/week): × 1.55</li>
            <li><strong>Very active</strong> (6–7 days/week): × 1.725</li>
            <li><strong>Athlete</strong> (2x/day): × 1.9</li>
          </ul>
        </div>
        
        <div className="pl-4 border-l-4 border-gray-200 my-4">
          <h3 className="text-xl font-medium">3. Adjust for Your Goals</h3>
          <ul>
            <li><strong>For weight loss:</strong> Subtract 10–25%</li>
            <li><strong>For weight gain:</strong> Add 5–20%</li>
            <li><strong>For maintenance:</strong> Stay at your TDEE</li>
          </ul>
        </div>
      </section>
      
      <section id="example">
        <h2 className="text-2xl font-semibold">Example:</h2>
        <p>A 30-year-old woman, 165 cm tall, 60 kg, lightly active:</p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p><strong>Step 1:</strong> BMR = 10×60 + 6.25×165 – 5×30 – 161 = <strong>1320.25</strong></p>
          <p><strong>Step 2:</strong> 1320.25 × 1.375 = <strong>1815 calories/day</strong></p>
          <p><strong>Step 3:</strong></p>
          <ul>
            <li>For fat loss: ~1350–1600 kcal</li>
            <li>For maintenance: ~1800 kcal</li>
            <li>For muscle gain: ~2000–2200 kcal</li>
          </ul>
        </div>
      </section>
      
      <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
        <AdUnit 
          className="w-full"
          slot="3333333333" 
          format="horizontal"
          responsive={true}
        />
      </div>
    </div>
  );
};

export default ContentSections;
