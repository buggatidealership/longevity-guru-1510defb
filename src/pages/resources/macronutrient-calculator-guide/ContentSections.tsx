
import React from 'react';
import { AdUnit } from '@/components/AdUnit';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <section id="what-are-macronutrients" className="space-y-4">
        <h2 className="text-2xl font-semibold">What Are Macronutrients and Why Do They Matter?</h2>
        
        <p>Macronutrients are the three primary nutrients your body needs in large amounts to function: protein, carbohydrates, and fat. Unlike micronutrients (vitamins and minerals), which you need in smaller quantities, macros provide the energy your body uses for everything from basic functions to intense workouts.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Protein (4 calories/gram)</h3>
            <p>The building block of muscle tissue, crucial for recovery, immune function, and enzyme production. Proteins are made of amino acids, nine of which are essential (must be obtained from diet).</p>
            <p className="mt-2 text-sm italic">Found in: Meat, fish, eggs, dairy, legumes, and plant-based protein sources.</p>
          </div>
          
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Carbohydrates (4 calories/gram)</h3>
            <p>Your body's preferred energy source, especially for high-intensity activities. Carbs are stored as glycogen in muscles and the liver, fueling both brain function and physical performance.</p>
            <p className="mt-2 text-sm italic">Found in: Grains, fruits, vegetables, legumes, and dairy.</p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Fat (9 calories/gram)</h3>
            <p>Essential for hormone production, cell membrane integrity, vitamin absorption, and long-duration energy. Provides more than twice the calories per gram compared to protein or carbs.</p>
            <p className="mt-2 text-sm italic">Found in: Oils, nuts, seeds, fatty fish, avocados, and animal products.</p>
          </div>
        </div>
        
        <p>Rather than focusing purely on calories, tracking macronutrients ensures you're getting the right balance of nutrients to support your specific goals. For example, someone looking to build muscle needs different macronutrient ratios than someone primarily focused on fat loss.</p>
        
        <p>Research published in the <em>Journal of the International Society of Sports Nutrition</em> confirms that while overall calorie balance determines weight changes, macronutrient composition significantly impacts body composition, energy levels, recovery, and long-term dietary adherence.</p>
      </section>
      
      <div className="my-6">
        <AdUnit 
          slot="6789012345"
          format="horizontal"
          responsive={true}
        />
      </div>
      
      <section id="how-calculator-works" className="space-y-4">
        <h2 className="text-2xl font-semibold">How the Macronutrient Calculator Works</h2>
        
        <p>Our <Link to="/macronutrient-calculator" className="text-blue-600 hover:text-blue-800 font-medium">macronutrient calculator</Link> uses a multi-step process to provide personalized recommendations:</p>
        
        <ol className="list-decimal list-inside space-y-4 pl-4">
          <li>
            <strong>Calculate your Basal Metabolic Rate (BMR)</strong> using the Mifflin-St Jeor equation:
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
              <li>For men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5</li>
              <li>For women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161</li>
            </ul>
            <p className="mt-2">This formula, validated in a 2005 meta-analysis published in the <em>Journal of the American Dietetic Association</em>, is considered one of the most accurate for estimating resting energy expenditure across various populations.</p>
          </li>
          
          <li>
            <strong>Determine your Total Daily Energy Expenditure (TDEE)</strong> by multiplying BMR by an activity factor:
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
              <li>Sedentary (little or no exercise): BMR × 1.2</li>
              <li>Lightly active (light exercise 1-3 days/week): BMR × 1.375</li>
              <li>Moderately active (moderate exercise 3-5 days/week): BMR × 1.55</li>
              <li>Very active (hard exercise 6-7 days/week): BMR × 1.725</li>
              <li>Super active (very intense exercise or physical job): BMR × 1.9</li>
            </ul>
          </li>
          
          <li>
            <strong>Adjust calories based on your goal:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
              <li>Lose Fat: TDEE × 0.8 (20% caloric deficit)</li>
              <li>Maintain: TDEE × 1.0 (maintenance calories)</li>
              <li>Build Muscle: TDEE × 1.15 (15% caloric surplus)</li>
            </ul>
          </li>
          
          <li>
            <strong>Distribute calories across macronutrients</strong> based on your selected goal:
            <div className="overflow-x-auto my-4">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Goal</th>
                    <th className="py-2 px-4 border-b text-left">Protein</th>
                    <th className="py-2 px-4 border-b text-left">Carbohydrates</th>
                    <th className="py-2 px-4 border-b text-left">Fat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Lose Fat</td>
                    <td className="py-2 px-4 border-b">40%</td>
                    <td className="py-2 px-4 border-b">25%</td>
                    <td className="py-2 px-4 border-b">35%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Maintain</td>
                    <td className="py-2 px-4 border-b">30%</td>
                    <td className="py-2 px-4 border-b">40%</td>
                    <td className="py-2 px-4 border-b">30%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Build Muscle</td>
                    <td className="py-2 px-4 border-b">25%</td>
                    <td className="py-2 px-4 border-b">50%</td>
                    <td className="py-2 px-4 border-b">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          
          <li>
            <strong>Convert percentages to grams</strong> using the caloric value of each macronutrient:
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
              <li>Protein: 4 calories per gram</li>
              <li>Carbohydrates: 4 calories per gram</li>
              <li>Fat: 9 calories per gram</li>
            </ul>
          </li>
        </ol>
        
        <p>The calculator combines scientifically validated formulas with practical experience from sports nutrition to provide realistic starting points for various fitness goals.</p>
      </section>
      
      <section id="interpreting-results" className="space-y-4">
        <h2 className="text-2xl font-semibold">Interpreting Your Macronutrient Results</h2>
        
        <p>When you receive your results from the <Link to="/macronutrient-calculator" className="text-blue-600 hover:text-blue-800 font-medium">macronutrient calculator</Link>, you'll see:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-lg mb-3">Daily Calorie Target</h3>
            <p>This is your adjusted total calorie goal based on your TDEE and selected fitness objective. Remember that this is an estimate - you may need to adjust based on real-world results.</p>
            <p className="mt-2 text-sm italic">Example: 2,340 calories for a 30-year-old, 175cm tall, 70kg moderately active male looking to maintain weight</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-lg mb-3">Macronutrient Breakdown</h3>
            <p>Your daily targets for protein, carbohydrates, and fat expressed in both grams and percentages of total calories.</p>
            <p className="mt-2 text-sm italic">Example: 176g protein (30%), 234g carbs (40%), 78g fat (30%)</p>
          </div>
        </div>
        
        <div className="relative aspect-video overflow-hidden rounded-xl my-6">
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80" 
            alt="Balanced meal preparation with proper macronutrient proportions" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <p>These numbers provide a starting point for your nutrition plan. However, it's important to understand that the calculator provides estimates based on population averages. Individual variations in metabolism, activity levels, and dietary response mean that most people will need to make adjustments based on real-world results.</p>
        
        <p>Consider your macronutrient targets as flexible guidelines rather than rigid rules. Focus first on hitting your protein target and overall calorie goal, then distribute the remaining calories between carbs and fats based on your preferences and how your body responds.</p>
      </section>
      
      <div className="my-6">
        <AdUnit 
          slot="7890123456"
          format="rectangle"
          responsive={true}
        />
      </div>
      
      <section id="common-goals" className="space-y-4">
        <h2 className="text-2xl font-semibold">Customizing Macros for Common Goals</h2>
        
        <p>While our <Link to="/macronutrient-calculator" className="text-blue-600 hover:text-blue-800 font-medium">calculator</Link> provides excellent starting points, here's how to further refine your macros for specific goals:</p>
        
        <div className="space-y-6 mt-4">
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
            <h3 className="font-semibold text-lg mb-2">Fat Loss / Cutting</h3>
            <p>The calculator recommends higher protein (40%) during fat loss phases to preserve muscle mass while in a caloric deficit. The higher fat percentage (35%) helps with satiety and hormone production.</p>
            <p className="mt-2"><strong>Pro tip:</strong> If you find yourself frequently hungry, consider redistributing some fat calories to protein, which has a higher thermic effect and greater satiety value. Studies show protein intakes up to 2.4g/kg can enhance fat loss while preserving lean mass.</p>
            <p className="mt-2"><strong>Real-world example:</strong> Emma, a 28-year-old office worker, adjusted her fat loss macros from 40/25/35 to 45/20/35 after finding herself hungry in the afternoons. The additional protein helped increase fullness without adding calories.</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-lg mb-2">Maintenance</h3>
            <p>The balanced 30/40/30 (protein/carbs/fat) approach works well for most people maintaining their weight. This distribution provides adequate protein for recovery, sufficient carbs for energy, and enough fat for hormone production.</p>
            <p className="mt-2"><strong>Pro tip:</strong> Maintenance phases are ideal for experimenting with nutrient timing, like consuming more carbs around workouts and more fat during the rest of the day. This can optimize training performance while keeping overall calories constant.</p>
            <p className="mt-2"><strong>Real-world example:</strong> Michael, a 35-year-old recreational runner, distributes his carbs so that 60% are consumed in the 4-hour window around his training sessions, enhancing performance without changing his total daily calories.</p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-lg mb-2">Muscle Building / Bulking</h3>
            <p>The higher carbohydrate content (50%) supports intense training, glycogen replenishment, and the anabolic environment needed for muscle growth. Protein at 25% of calories is typically sufficient (around 1.6-2.2g/kg of body weight).</p>
            <p className="mt-2"><strong>Pro tip:</strong> If you're struggling to consume enough calories, consider adding more fats, which are calorie-dense at 9 calories per gram. Conversely, if you're gaining fat too quickly, slightly reduce carbohydrates rather than protein.</p>
            <p className="mt-2"><strong>Real-world example:</strong> Jason, a 22-year-old weightlifter, found that the standard muscle-building macro ratio led to excessive fat gain. By reducing his carbs from 50% to 45% and increasing protein to 30%, he achieved a cleaner bulk with less unwanted fat accumulation.</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center p-4 bg-blue-50 rounded-lg">
          <div className="mr-4 flex-shrink-0">
            <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Training intensity matters! The more intensely you train, the more important your macronutrient distribution becomes. For sedentary individuals, protein intake and overall calories have larger impacts than the specific carb-to-fat ratio.</p>
          </div>
        </div>
      </section>
      
      <section id="real-world-tracking" className="space-y-4">
        <h2 className="text-2xl font-semibold">Practical Tips for Real-World Macro Tracking</h2>
        
        <p>Understanding your macronutrient targets is one thing; consistently hitting them in real life is another challenge entirely. Here are practical strategies to make macro tracking sustainable:</p>
        
        <div className="space-y-4 mt-4">
          <h3 className="font-semibold text-lg">1. Start with a food tracking app</h3>
          <p>Use applications like MyFitnessPal, Cronometer, or Carbon Diet Coach to log your food intake. These apps calculate the macronutrient content of thousands of foods, making tracking much simpler.</p>
          
          <h3 className="font-semibold text-lg">2. Invest in a food scale</h3>
          <p>Weighing food provides far more accurate measurements than visual estimation. A 2019 study in the <em>International Journal of Obesity</em> found that people who measured food portions lost significantly more weight than those who estimated portions.</p>
          
          <h3 className="font-semibold text-lg">3. Practice meal prepping</h3>
          <p>Preparing meals in advance allows you to precisely control macronutrient content and reduces the likelihood of impulsive food choices. Even preparing just lunches for the workweek can dramatically improve adherence.</p>
          
          <div className="p-4 border border-gray-200 rounded-lg my-4">
            <h4 className="font-medium mb-2">Sample Meal Prep Strategy:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Sunday: Prepare 5 lunches and 3 dinners</li>
              <li>Wednesday: Prepare 2 more dinners</li>
              <li>Prepare breakfasts 2-3 days at a time</li>
              <li>Have 2-3 pre-measured snack options ready to grab</li>
            </ul>
          </div>
          
          <h3 className="font-semibold text-lg">4. Use the plate method for simplicity</h3>
          <p>When precise tracking isn't possible, use the plate method as an approximation:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Fat loss:</strong> ½ plate protein, ¼ plate carbs, ¼ plate fats/non-starchy vegetables</li>
            <li><strong>Maintenance:</strong> ⅓ plate protein, ⅓ plate carbs, ⅓ plate mixed fats and vegetables</li>
            <li><strong>Muscle building:</strong> ¼ plate protein, ½ plate carbs, ¼ plate fats/vegetables</li>
          </ul>
          
          <h3 className="font-semibold text-lg">5. Build a food database of "go-to" meals</h3>
          <p>Create a personal collection of 10-15 meals that fit your macros. This reduces decision fatigue and simplifies meal planning. Add new recipes gradually to prevent dietary boredom.</p>
          
          <h3 className="font-semibold text-lg">6. Practice flexible dieting</h3>
          <p>Allow yourself some flexibility by following the 80/20 rule: 80% of your diet comes from nutrient-dense whole foods that help you hit your macro targets, while 20% can come from foods chosen for enjoyment.</p>
          
          <div className="p-4 bg-yellow-50 rounded-lg my-4">
            <h4 className="font-medium mb-2">When to Consider Not Tracking:</h4>
            <p>While tracking macros can be highly effective, it's not appropriate for everyone. Consider avoiding strict tracking if you:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Have a history of disordered eating</li>
              <li>Find tracking increases anxiety around food choices</li>
              <li>Are dealing with high stress levels in other areas of life</li>
            </ul>
            <p className="mt-2">In these cases, focus instead on food quality, portion awareness, and hunger/fullness cues.</p>
          </div>
        </div>
      </section>
      
      <div className="my-6">
        <AdUnit 
          slot="8901234567"
          format="horizontal"
          responsive={true}
        />
      </div>
      
      <section id="adjusting-over-time" className="space-y-4">
        <h2 className="text-2xl font-semibold">When and How to Adjust Your Macros</h2>
        
        <p>The initial macronutrient recommendations from our calculator provide an excellent starting point, but human metabolism is adaptive and variable. Here's how to know when and how to adjust your macros:</p>
        
        <h3 className="font-semibold text-lg mt-4">Signs You Need to Adjust Your Macros</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">For Fat Loss Goals:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>No weight change for 2-3 consecutive weeks</li>
              <li>Excessive hunger or low energy levels</li>
              <li>Significant strength decreases in the gym</li>
              <li>Losing weight too quickly (more than 1% of body weight weekly)</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">For Muscle Building Goals:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>No weight gain for 2-3 consecutive weeks</li>
              <li>Gaining weight too quickly (excess fat accumulation)</li>
              <li>Poor workout recovery despite adequate sleep</li>
              <li>Difficulty completing your normal training volume</li>
            </ul>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mt-4">How to Make Systematic Adjustments</h3>
        
        <p>When adjustments are needed, make them gradually and methodically:</p>
        
        <ol className="list-decimal list-inside space-y-3 mt-2">
          <li>
            <strong>Use the 5-10% rule:</strong> Adjust your total calories up or down by 5-10% (e.g., a 2000 calorie plan would change by 100-200 calories).
          </li>
          <li>
            <strong>Maintain protein targets:</strong> When reducing calories, prioritize keeping protein intake consistent to preserve muscle mass.
          </li>
          <li>
            <strong>Adjust carbs first:</strong> For most people, carbohydrates should be the first macronutrient adjusted up or down, since they have the most direct impact on workout performance and glycogen stores.
          </li>
          <li>
            <strong>Make one change at a time:</strong> Allow 1-2 weeks to assess the impact of each adjustment before making additional changes.
          </li>
          <li>
            <strong>Document everything:</strong> Keep a log of your macro adjustments, weight changes, and how you feel physically and mentally to identify patterns.
          </li>
        </ol>
        
        <div className="p-4 bg-blue-50 rounded-lg my-4">
          <h4 className="font-medium mb-2">Case Study: Progressive Adjustment</h4>
          <p><strong>Sarah's Fat Loss Journey:</strong></p>
          <ul className="list-none space-y-2 mt-2">
            <li><strong>Starting point:</strong> 1800 calories (180g protein, 112g carbs, 70g fat)</li>
            <li><strong>Weeks 1-3:</strong> Lost 3 lbs (good progress)</li>
            <li><strong>Weeks 4-5:</strong> Weight stalled completely</li>
            <li><strong>First adjustment:</strong> Reduced to 1650 calories by cutting carbs to 85g and fat to 65g (protein unchanged)</li>
            <li><strong>Weeks 6-8:</strong> Lost 2 more lbs, then stalled again</li>
            <li><strong>Second adjustment:</strong> Added 2 weekly refeed days at maintenance calories (1800) with extra carbs (150g) while keeping the deficit on other days</li>
            <li><strong>Weeks 9-12:</strong> Steady loss of 0.5 lbs per week with improved gym performance and dietary adherence</li>
          </ul>
          <p className="mt-2">Sarah's case illustrates how systematic, incremental changes—rather than dramatic adjustments—lead to sustainable progress.</p>
        </div>
        
        <p>Remember that your <Link to="/macronutrient-calculator" className="text-blue-600 hover:text-blue-800 font-medium">macronutrient calculator</Link> results provide a scientific starting point, but real-world fine-tuning will always be necessary due to individual metabolic variations, activity differences, and even food tracking inaccuracies.</p>
        
        <p>For more personalized assessment of your caloric needs, use our <Link to="/tdee-calculator" className="text-blue-600 hover:text-blue-800 font-medium">TDEE Calculator</Link>, which can give you an even more precise estimate of your daily energy expenditure.</p>
      </section>
    </div>
  );
};

export default ContentSections;
