
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-12">
      <section id="what-is-bmr">
        <h2 className="text-2xl font-bold mb-4">What is Basal Metabolic Rate (BMR)?</h2>
        
        <p className="mb-4">
          Basal Metabolic Rate is the amount of energy expended while at complete rest in a neutrally temperate environment, in the post-absorptive state (meaning the digestive system is inactive, which requires about 12 hours of fasting). In simpler terms, it's how many calories your body needs to perform basic functions to sustain life.
        </p>
        
        <p className="mb-4">
          These basic functions include:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Breathing</li>
          <li>Blood circulation</li>
          <li>Cell growth and repair</li>
          <li>Brain and nervous system function</li>
          <li>Maintaining body temperature</li>
          <li>Filtering waste through kidneys and liver</li>
          <li>Hormone regulation</li>
        </ul>
        
        <p className="mb-4">
          Your BMR is influenced by several factors, with some having more significant impacts than others:
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Primary Factors Affecting BMR:</h3>
          <ul className="space-y-3">
            <li className="flex">
              <span className="font-bold mr-2">Body Composition:</span> 
              <span>Muscle tissue requires more energy to maintain than fat tissue. People with higher muscle mass typically have higher BMR values.</span>
            </li>
            <li className="flex">
              <span className="font-bold mr-2">Body Size:</span> 
              <span>Larger bodies generally have higher BMRs because there's more tissue that requires energy for maintenance.</span>
            </li>
            <li className="flex">
              <span className="font-bold mr-2">Gender:</span> 
              <span>Biological males typically have higher BMRs than females due to greater muscle mass and less body fat.</span>
            </li>
            <li className="flex">
              <span className="font-bold mr-2">Age:</span> 
              <span>BMR typically decreases with age as muscle mass decreases and body composition changes.</span>
            </li>
            <li className="flex">
              <span className="font-bold mr-2">Genetics:</span> 
              <span>Family history plays a role in determining your baseline metabolic rate.</span>
            </li>
          </ul>
        </div>
        
        <p>
          It's important to note that BMR is distinct from your Total Daily Energy Expenditure (TDEE), which accounts for all your daily activities, including exercise. If you're interested in understanding TDEE better, check out our <Link to="/tdee-calculator" className="text-blue-600 hover:underline">TDEE Calculator</Link>.
        </p>
      </section>
      
      <section id="why-bmr-important">
        <h2 className="text-2xl font-bold mb-4">Why is BMR Important?</h2>
        
        <p className="mb-4">
          Understanding your Basal Metabolic Rate has numerous practical applications that can help you make informed decisions about your health, nutrition, and fitness goals.
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Role in Weight Management</h3>
        
        <p className="mb-4">
          Your BMR forms the foundation of your caloric needs. For effective weight management:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Weight Maintenance:</strong> Consuming calories equal to your TDEE (which includes BMR plus activity) will maintain your current weight.</li>
          <li><strong>Weight Loss:</strong> Creating a caloric deficit by consuming fewer calories than your TDEE will result in weight loss.</li>
          <li><strong>Weight Gain:</strong> Consuming more calories than your TDEE will lead to weight gain.</li>
        </ul>
        
        <p className="mb-4">
          Without knowing your BMR, attempts at weight management become guesswork, often leading to frustration and ineffective results.
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Impact on Metabolism and Energy</h3>
        
        <p className="mb-4">
          Your BMR gives you insight into your metabolism—the biochemical processes that convert food into energy. A higher BMR generally indicates a faster metabolism, meaning your body burns calories more quickly.
        </p>
        
        <p className="mb-4">
          Understanding your metabolic rate can help explain why:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Some people seem to maintain their weight easily while others struggle</li>
          <li>Your weight loss may plateau despite consistent diet and exercise</li>
          <li>Your energy levels fluctuate throughout the day</li>
          <li>Nutritional needs vary significantly between individuals</li>
        </ul>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-700">
            <strong>Important Note:</strong> While low-calorie diets may lead to short-term weight loss, they can actually reduce your BMR over time as your body adapts to conserve energy. This is one reason why sustainable, moderate approaches to weight management are typically more effective in the long term.
          </p>
        </div>
        
        <p>
          By understanding the relationship between your BMR, caloric intake, and energy expenditure, you can develop more effective strategies for achieving your health and fitness goals while maintaining optimal energy levels and bodily functions.
        </p>
      </section>
      
      <section id="calculate-bmr">
        <h2 className="text-2xl font-bold mb-4">How to Calculate Your BMR</h2>
        
        <p className="mb-6">
          Several formulas have been developed to estimate BMR. While the most accurate measurement would require clinical testing in a controlled environment, these formulas provide reasonable estimates for most individuals.
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Common BMR Calculation Methods</h3>
        
        <div className="space-y-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-bold text-lg mb-2">1. Harris-Benedict Equation (Original)</h4>
            <p className="mb-2">Developed in 1919, this was one of the first widely-used BMR formulas:</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-mono">For men: BMR = 66.5 + (13.75 × weight in kg) + (5.003 × height in cm) - (6.75 × age in years)</p>
              <p className="font-mono">For women: BMR = 655.1 + (9.563 × weight in kg) + (1.85 × height in cm) - (4.676 × age in years)</p>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-bold text-lg mb-2">2. Mifflin-St Jeor Equation</h4>
            <p className="mb-2">Developed in 1990, this formula is considered more accurate for modern populations:</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-mono">For men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5</p>
              <p className="font-mono">For women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161</p>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-bold text-lg mb-2">3. Katch-McArdle Formula</h4>
            <p className="mb-2">This formula takes into account lean body mass, making it potentially more accurate for athletic individuals:</p>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-mono">BMR = 370 + (21.6 × lean body mass in kg)</p>
            </div>
            <p className="text-sm text-gray-600 mt-2">Note: This requires knowing your body fat percentage to calculate lean body mass.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Step-by-Step Guide to Calculating Your BMR</h3>
        
        <p className="mb-4">Let's walk through calculating your BMR using the Mifflin-St Jeor equation, which is widely recommended by nutrition professionals:</p>
        
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li><strong>Gather your measurements:</strong> Weight (in kilograms), height (in centimeters), age (in years), and biological sex.</li>
          <li><strong>Convert measurements if needed:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>To convert pounds to kilograms: divide by 2.2</li>
              <li>To convert inches to centimeters: multiply by 2.54</li>
            </ul>
          </li>
          <li><strong>Apply the formula:</strong> Use the gender-specific equation above.</li>
          <li><strong>Calculate the result:</strong> This gives you your estimated BMR in calories per day.</li>
        </ol>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h4 className="font-bold mb-3">Example Calculation:</h4>
          <p className="mb-2">For a 35-year-old woman who is 5'6" (167.6 cm) tall and weighs 150 pounds (68.2 kg):</p>
          <div className="bg-white p-3 rounded mb-2">
            <p className="font-mono">BMR = (10 × 68.2) + (6.25 × 167.6) - (5 × 35) - 161</p>
            <p className="font-mono">BMR = 682 + 1047.5 - 175 - 161</p>
            <p className="font-mono">BMR = 1,393.5 calories per day</p>
          </div>
          <p>This means her body needs approximately 1,394 calories per day to maintain basic functions at rest.</p>
        </div>
        
        <p className="mb-4">
          For a more convenient calculation, you can use our <Link to="/metabolism-calculator" className="text-blue-600 hover:underline">Metabolism Calculator</Link>, which automatically calculates your BMR and TDEE based on your input.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>Remember:</strong> These formulas provide estimates. Individual variations in metabolism, genetics, and body composition mean your actual BMR may differ slightly from calculated values. For the most accurate measurement, clinical tests like indirect calorimetry would be required.
          </p>
        </div>
      </section>
      
      <section id="factors-affecting-bmr">
        <h2 className="text-2xl font-bold mb-4">Factors Affecting BMR</h2>
        
        <p className="mb-6">
          While we've touched on some factors that influence BMR, let's explore these in greater detail to understand how your metabolism is shaped by various physiological and lifestyle factors.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Age</h3>
            <p>
              BMR typically decreases by 2-3% per decade after age 20. This decline is primarily due to the natural loss of muscle mass (sarcopenia) that occurs with aging. However, this decrease can be significantly reduced through regular strength training and maintaining muscle mass as you age.
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Gender</h3>
            <p>
              Biological males generally have higher BMRs than females of similar age, height, and weight. This difference is primarily due to higher muscle mass and lower body fat percentages in males. The difference can be as much as 5-10% between sexes.
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Body Composition</h3>
            <p>
              Muscle tissue is metabolically active and burns more calories at rest than fat tissue. Each pound of muscle burns approximately 6 calories per day at rest, while fat burns only about 2 calories. This is why strength training and building muscle can significantly increase your BMR over time.
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Genetics</h3>
            <p>
              Studies suggest that genetics may account for up to 40% of the variation in BMR between individuals. Some people naturally have faster or slower metabolisms due to inherited traits that affect thyroid function, muscle efficiency, and mitochondrial activity.
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Additional Factors</h3>
        
        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold">Hormonal Function</h4>
            <p>
              Thyroid hormones are primary regulators of metabolic rate. Conditions like hypothyroidism can significantly reduce BMR, while hyperthyroidism can increase it. Other hormones like cortisol, insulin, and sex hormones also influence metabolic rate.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold">Environmental Temperature</h4>
            <p>
              In very cold environments, the body may increase its metabolic rate to generate heat (thermogenesis). Conversely, in hot environments, less energy is needed to maintain body temperature.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold">Nutritional Status</h4>
            <p>
              Severe caloric restriction can lower BMR by 15-30% as the body enters a conservation mode. This "metabolic adaptation" is one reason why crash diets often lead to weight regain once normal eating resumes.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold">Pregnancy and Lactation</h4>
            <p>
              BMR increases during pregnancy (by about 15-20% by the third trimester) and lactation to support the growth and feeding of the baby.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold">Health Conditions</h4>
            <p>
              Certain health conditions can affect BMR. For example, fever can increase BMR by approximately 7% for each 1°F rise in body temperature. Chronic conditions like diabetes can also impact metabolic rate.
            </p>
          </div>
        </div>
        
        <p>
          Understanding these factors can help you set realistic expectations about your metabolic rate and make informed decisions about your nutrition and fitness strategies. While some factors are beyond your control (like age and genetics), others can be influenced through lifestyle choices (like exercise and nutrition).
        </p>
      </section>
      
      <section id="practical-applications">
        <h2 className="text-2xl font-bold mb-4">Practical Applications of Knowing Your BMR</h2>
        
        <p className="mb-6">
          Now that you understand what BMR is and how to calculate it, let's explore how this knowledge can be applied to achieve various health and fitness goals.
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Weight Management</h3>
        
        <p className="mb-4">
          Knowing your BMR allows you to create an effective, sustainable plan for weight management:
        </p>
        
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h4 className="font-bold mb-2">Creating a Calorie Deficit for Weight Loss</h4>
          <p className="mb-2">
            For weight loss, the general recommendation is to create a moderate calorie deficit of 500-1,000 calories per day below your TDEE (which includes your BMR plus activity). This typically results in a sustainable weight loss of 1-2 pounds per week.
          </p>
          <div className="bg-gray-50 p-3 rounded">
            <p className="mb-1"><strong>Example:</strong></p>
            <p className="font-mono">BMR: 1,400 calories</p>
            <p className="font-mono">Activity multiplier (moderately active): × 1.55</p>
            <p className="font-mono">TDEE: 2,170 calories</p>
            <p className="font-mono">Target for weight loss: 1,670 calories (500 calorie deficit)</p>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h4 className="font-bold mb-2">Caloric Surplus for Muscle Gain</h4>
          <p className="mb-2">
            Building muscle requires additional calories. A typical recommendation is a surplus of 250-500 calories above your TDEE, combined with resistance training.
          </p>
          <div className="bg-gray-50 p-3 rounded">
            <p className="mb-1"><strong>Example:</strong></p>
            <p className="font-mono">BMR: 1,800 calories</p>
            <p className="font-mono">Activity multiplier (very active): × 1.725</p>
            <p className="font-mono">TDEE: 3,105 calories</p>
            <p className="font-mono">Target for muscle gain: 3,455 calories (350 calorie surplus)</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Customizing Nutrition Plans</h3>
        
        <p className="mb-4">
          With your BMR as a foundation, you can design nutrition plans that:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Align with your energy needs:</strong> Match macronutrient distribution to your activity levels and goals</li>
          <li><strong>Support activity timing:</strong> Strategically time nutrient intake around workouts or demanding periods of the day</li>
          <li><strong>Accommodate metabolic changes:</strong> Adjust caloric intake during periods of increased stress, illness, or hormonal fluctuation</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Optimizing Exercise Programs</h3>
        
        <p className="mb-4">
          Understanding your BMR can help you maximize the effectiveness of your exercise routine:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold">Resistance Training</h4>
            <p>
              Building muscle through resistance training increases BMR over time. Even a modest increase in muscle mass can raise your daily caloric burn, making weight management easier.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-bold">Cardiovascular Exercise</h4>
            <p>
              While cardio burns calories during activity, high-intensity interval training (HIIT) can create an "afterburn" effect (excess post-exercise oxygen consumption) that temporarily raises metabolism for hours afterward.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-700">
            <strong>Important Consideration:</strong> Excessive exercise combined with severe caloric restriction can actually lower your BMR over time as your body adapts to conserve energy. A balanced approach that includes adequate nutrition and recovery is essential for metabolic health.
          </p>
        </div>
        
        <p>
          By applying your knowledge of BMR to these practical areas, you can create more effective, sustainable strategies for achieving your health and fitness goals.
        </p>
      </section>
      
      <section id="common-misconceptions">
        <h2 className="text-2xl font-bold mb-4">Common Misconceptions About BMR</h2>
        
        <p className="mb-6">
          There are several widespread myths and misconceptions about metabolism and BMR that can lead to ineffective strategies and frustration. Let's clarify some of these:
        </p>
        
        <div className="space-y-6 mb-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-red-100 px-4 py-2">
              <h3 className="font-bold text-red-800">Myth: Metabolism Completely Slows Down with Age</h3>
            </div>
            <div className="p-4">
              <p className="mb-2"><strong>Reality:</strong> While BMR does decrease with age, recent research suggests this decline is more modest than previously thought—about 1-2% per decade. Much of the "metabolic slowdown" associated with aging is actually due to decreased muscle mass and physical activity, both of which can be mitigated through lifestyle choices.</p>
              <p><strong>Solution:</strong> Regular strength training and maintaining an active lifestyle can significantly offset age-related metabolic decline.</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-red-100 px-4 py-2">
              <h3 className="font-bold text-red-800">Myth: Eating Small, Frequent Meals "Stokes" Your Metabolism</h3>
            </div>
            <div className="p-4">
              <p className="mb-2"><strong>Reality:</strong> Research has consistently shown that meal frequency has minimal impact on metabolic rate. The thermic effect of food (the energy required to digest food) is primarily determined by total caloric intake and macronutrient composition, not how often you eat.</p>
              <p><strong>Solution:</strong> Focus on total daily calorie intake and food quality rather than meal timing or frequency for metabolic benefits.</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-red-100 px-4 py-2">
              <h3 className="font-bold text-red-800">Myth: Some Foods (Like Spicy Foods or Green Tea) Significantly Boost Metabolism</h3>
            </div>
            <div className="p-4">
              <p className="mb-2"><strong>Reality:</strong> While certain foods and compounds may have a slight thermogenic effect, the impact is typically minimal—usually less than 5% of daily energy expenditure. No food can "dramatically" increase your BMR.</p>
              <p><strong>Solution:</strong> Focus on overall dietary quality and maintaining muscle mass for meaningful impacts on metabolism.</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-red-100 px-4 py-2">
              <h3 className="font-bold text-red-800">Myth: BMR Calculators Provide Exact Numbers</h3>
            </div>
            <div className="p-4">
              <p className="mb-2"><strong>Reality:</strong> BMR formulas provide estimates that may vary from your actual BMR by 5-15%. Individual variations in genetics, body composition, and hormone function mean that calculated values should be considered approximations.</p>
              <p><strong>Solution:</strong> Use calculated BMR as a starting point, then adjust based on your actual results and energy levels.</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-red-100 px-4 py-2">
              <h3 className="font-bold text-red-800">Myth: Very Low-Calorie Diets Are Effective for Long-Term Weight Loss</h3>
            </div>
            <div className="p-4">
              <p className="mb-2"><strong>Reality:</strong> Severely restricting calories (below 70% of your BMR) can cause your body to reduce its metabolic rate to conserve energy—a phenomenon called "adaptive thermogenesis." This is one reason why extreme diets often lead to weight regain.</p>
              <p><strong>Solution:</strong> For sustainable weight management, avoid extreme caloric restriction. A moderate deficit of 15-25% below TDEE is typically more effective long-term.</p>
            </div>
          </div>
        </div>
        
        <p>
          By understanding these misconceptions and focusing on evidence-based approaches to metabolism, you can develop more effective strategies for managing your weight and optimizing your health.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
