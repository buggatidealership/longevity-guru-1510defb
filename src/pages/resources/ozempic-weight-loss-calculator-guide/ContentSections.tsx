
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections = () => {
  return (
    <div className="prose max-w-none mb-8">
      <section id="understanding" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Understanding Ozempic and Weight Loss</h2>
        
        <p>
          Ozempic (semaglutide) was originally developed for managing type 2 diabetes but has emerged as a powerful medication for weight management. As a GLP-1 receptor agonist, it works through multiple mechanisms that contribute to significant weight loss:
        </p>
        
        <div className="md:flex md:gap-6 my-6 items-center">
          <div className="md:w-1/2">
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Appetite regulation</strong>: Semaglutide targets receptors in your brain that control hunger and satiety, reducing appetite and food cravings.</li>
              <li><strong>Slowed gastric emptying</strong>: The medication delays how quickly food leaves your stomach, helping you feel fuller longer after meals.</li>
              <li><strong>Improved insulin sensitivity</strong>: Ozempic helps your body process glucose more effectively, which can reduce fat storage.</li>
              <li><strong>Reduced hedonic eating</strong>: Studies show it may decrease the pleasure response to high-calorie foods, reducing "emotional eating."</li>
            </ul>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1595561263683-2e11a3e6981c?auto=format&fit=crop&w=600&q=80" 
              alt="Weight scale and measuring tape representing weight loss tracking" 
              className="rounded-lg shadow-md" 
              width="600" 
              height="400"
              loading="lazy"
            />
          </div>
        </div>
        
        <p>
          Clinical trials have demonstrated impressive results. The STEP 1 trial found that participants taking the highest dose of semaglutide (2.4mg weekly) lost an average of 15% of their body weight over 68 weeks—significantly more than the 2.4% lost in the placebo group. More recent studies suggest some patients may lose up to 20% of their starting weight with consistent use.
        </p>
        
        <p>
          However, it's important to note that individual results vary considerably. While some people experience dramatic weight loss, others may see more modest results. This is why having a personalized <Link to="/ozempic-weight-loss-calculator" className="text-blue-600 hover:underline">Ozempic weight loss calculator</Link> is valuable—it helps set realistic expectations based on your specific factors.
        </p>
      </section>
      
      <section id="factors" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factors Affecting Weight Loss on Ozempic</h2>
        
        <p>
          Understanding the variables that influence your Ozempic weight loss results can help you set realistic expectations and optimize your outcomes:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-semibold mb-2">Key Factors That Impact Your Results</h3>
          
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Starting BMI:</span>
              <span>People with higher initial BMIs often experience more significant weight loss in terms of absolute pounds (though not necessarily percentage of body weight).</span>
            </li>
            
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Dosage:</span>
              <span>Higher doses (up to 2.4mg weekly) generally produce greater weight loss, but dosage must be increased gradually to minimize side effects.</span>
            </li>
            
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Treatment Duration:</span>
              <span>Weight loss typically continues for 12-16 months before reaching a plateau, with most significant results occurring in the first 6 months.</span>
            </li>
            
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Diet & Exercise:</span>
              <span>Patients who combine Ozempic with caloric restriction and increased physical activity achieve better results than medication alone.</span>
            </li>
            
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Consistency:</span>
              <span>Missing doses or taking the medication irregularly reduces effectiveness and can slow progress.</span>
            </li>
            
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Age:</span>
              <span>Metabolic rate decreases with age, potentially affecting the pace of weight loss in older adults.</span>
            </li>
            
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Genetics:</span>
              <span>Genetic factors influence both how you respond to GLP-1 medications and your body's metabolism.</span>
            </li>
            
            <li className="flex gap-2">
              <span className="font-bold min-w-[160px]">Other Medications:</span>
              <span>Some medications can interfere with weight loss or even cause weight gain, potentially offsetting Ozempic's effects.</span>
            </li>
          </ul>
        </div>
        
        <p>
          According to clinical data, most patients lose 5-10% of their body weight in the first 3 months, with weight loss continuing more gradually for up to 12-16 months before stabilizing. Understanding these factors helps explain why the <Link to="/ozempic-weight-loss-calculator" className="text-blue-600 hover:underline">Ozempic weight loss calculator</Link> provides a range of potential outcomes rather than a single number.
        </p>
      </section>
      
      <section id="calculator" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide to Using the Ozempic Weight Loss Calculator</h2>
        
        <p>
          Our Ozempic weight loss calculator provides personalized projections based on clinical trial data and statistical models. Here's how to use it effectively:
        </p>
        
        <ol className="list-decimal pl-5 space-y-4 my-4">
          <li>
            <strong>Enter your current information:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Current weight (in pounds or kilograms)</li>
              <li>Height (to calculate your BMI)</li>
              <li>Age</li>
              <li>Sex (biological factors affect weight loss rates)</li>
            </ul>
          </li>
          
          <li>
            <strong>Select your treatment details:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Current or planned Ozempic dosage (0.25mg, 0.5mg, 1.0mg, or 2.4mg)</li>
              <li>How long you've been on Ozempic (if applicable)</li>
              <li>Your weight loss goal (if you have one)</li>
            </ul>
          </li>
          
          <li>
            <strong>Input lifestyle factors:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Activity level (sedentary, lightly active, moderately active, very active)</li>
              <li>Whether you're following a calorie-restricted diet</li>
            </ul>
          </li>
          
          <li>
            <strong>Review your results:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Projected weight loss over time (3 months, 6 months, 12 months)</li>
              <li>Expected weight loss range (accounting for individual variability)</li>
              <li>Estimated timeline to reach your goal weight (if applicable)</li>
            </ul>
          </li>
        </ol>
        
        <div className="my-6">
          <img 
            src="https://images.unsplash.com/photo-1574269905366-e1c8d602d259?auto=format&fit=crop&w=600&q=80" 
            alt="Person measuring waistline with measuring tape to track weight loss progress" 
            className="rounded-lg shadow-md mx-auto" 
            width="600" 
            height="400"
            loading="lazy"
          />
        </div>
        
        <p>
          For the most accurate results, be honest about your current measurements and lifestyle. The calculator is designed to provide realistic projections, not overly optimistic ones that might be discouraging if not achieved.
        </p>
      </section>
      
      <section id="interpreting" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Interpreting Your Ozempic Calculator Results</h2>
        
        <p>
          Understanding your calculator results helps you set realistic expectations and track your progress effectively:
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-semibold mb-2">How to Read Your Projection</h3>
          
          <ul className="space-y-3">
            <li>
              <strong>Weight Loss Range:</strong> The calculator provides both an average expected weight loss and a range (showing potential minimum and maximum outcomes). This range accounts for individual variability in response to the medication.
            </li>
            
            <li>
              <strong>Timeline Projections:</strong> Weight loss with Ozempic typically follows a pattern:
              <ul className="list-disc pl-5 mt-1">
                <li><strong>First 4 weeks:</strong> Minimal weight loss as your body adjusts to the medication</li>
                <li><strong>Weeks 4-16:</strong> Accelerated weight loss as the medication reaches therapeutic levels</li>
                <li><strong>Months 4-12:</strong> Continued steady weight loss, usually at a slower rate than the initial months</li>
                <li><strong>After 12 months:</strong> Weight loss typically plateaus; some patients may continue losing at a much slower rate</li>
              </ul>
            </li>
            
            <li>
              <strong>Projected Final Weight:</strong> This represents your estimated weight after a full course of treatment (12-16 months) if you maintain consistent use and follow recommended lifestyle modifications.
            </li>
          </ul>
        </div>
        
        <p>
          Remember that these projections are based on statistical models and clinical trial data. Your actual results may differ based on your unique metabolism, consistency with the medication, dietary choices, and activity level.
        </p>
        
        <p>
          It's important to view the calculator as a guide rather than a guarantee. Use it to establish realistic expectations and to track whether your progress aligns with typical patterns. If your actual results differ significantly from the projections, discuss this with your healthcare provider—they may recommend adjusting your dosage or complementary strategies.
        </p>
      </section>
      
      <section id="maximizing" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Maximizing Weight Loss Results with Ozempic</h2>
        
        <p>
          While Ozempic is effective on its own, research shows that combining it with lifestyle modifications significantly enhances results. Here's how to maximize your outcomes:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dietary Strategies</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Focus on protein-rich foods (20-30% of calories) to preserve muscle mass during weight loss</li>
              <li>Emphasize low-glycemic index foods that won't spike blood sugar</li>
              <li>Practice moderate calorie reduction (15-20% below maintenance)</li>
              <li>Stay well-hydrated (aim for 2-3 liters daily)</li>
              <li>Eat mindfully and slowly to work with Ozempic's appetite-suppressing effects</li>
              <li>Consider smaller, more frequent meals if nausea is an issue</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Exercise Recommendations</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Incorporate resistance training 2-3 times weekly to maintain muscle mass</li>
              <li>Add moderate-intensity cardio (150+ minutes weekly)</li>
              <li>Include regular walking (7,000-10,000 steps daily)</li>
              <li>Start gently and increase intensity gradually, especially if previously inactive</li>
              <li>Focus on consistency rather than intensity</li>
              <li>Find activities you enjoy to improve adherence</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-semibold mb-2">Behavioral Modifications</h3>
          <ul className="list-disc pl-5">
            <li><strong>Stress management:</strong> High stress can counteract weight loss efforts through cortisol elevation</li>
            <li><strong>Sleep optimization:</strong> Aim for 7-9 hours of quality sleep; poor sleep is linked to reduced weight loss</li>
            <li><strong>Consistent medication timing:</strong> Take Ozempic on the same day each week</li>
            <li><strong>Regular monitoring:</strong> Track weight, measurements, and how clothes fit (not just scale weight)</li>
            <li><strong>Support systems:</strong> Consider joining support groups or working with a health coach</li>
          </ul>
        </div>
        
        <p>
          Studies show that patients who combine Ozempic with these lifestyle modifications can achieve approximately 5-10% additional weight loss compared to those using the medication alone. This synergistic effect occurs because Ozempic makes it easier to adhere to healthier habits by reducing hunger and food cravings.
        </p>
        
        <p>
          For a personalized assessment and to track your progress over time, use our <Link to="/ozempic-weight-loss-calculator" className="text-blue-600 hover:underline">Ozempic weight loss calculator</Link> regularly and update your information as you continue your journey.
        </p>
      </section>
      
      <section id="mistakes" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
        
        <p>
          Even with a powerful tool like Ozempic, there are several pitfalls that can undermine your weight loss success:
        </p>
        
        <div className="bg-red-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-semibold mb-2">Mistakes That Limit Ozempic Results</h3>
          
          <ul className="space-y-3">
            <li>
              <strong className="text-red-700">Relying solely on medication:</strong> Ozempic works best when combined with diet and exercise modifications. Some patients make the mistake of viewing it as a complete solution rather than one component of a comprehensive approach.
            </li>
            
            <li>
              <strong className="text-red-700">Increasing dosage too quickly:</strong> Rushing the titration schedule increases the risk of side effects like nausea and vomiting, which can lead to discontinuation. Follow your doctor's prescribed schedule.
            </li>
            
            <li>
              <strong className="text-red-700">Inconsistent use:</strong> Skipping doses or taking the medication irregularly reduces its effectiveness. Semaglutide needs to maintain consistent levels in your system.
            </li>
            
            <li>
              <strong className="text-red-700">Ignoring protein needs:</strong> Inadequate protein intake during weight loss can lead to muscle loss. Aim for 1.2-2.0g of protein per kg of body weight daily.
            </li>
            
            <li>
              <strong className="text-red-700">Overcompensating with high-calorie foods:</strong> Some patients find they can still consume calorie-dense foods without feeling full and may overindulge in these items, undermining weight loss.
            </li>
            
            <li>
              <strong className="text-red-700">Not addressing emotional eating:</strong> While Ozempic reduces physical hunger, it doesn't eliminate emotional or habitual eating patterns that require behavioral strategies.
            </li>
            
            <li>
              <strong className="text-red-700">Having unrealistic expectations:</strong> Expecting extremely rapid results or comparing your progress to others can lead to disappointment. Using the <Link to="/ozempic-weight-loss-calculator" className="text-blue-600 hover:underline">Ozempic weight loss calculator</Link> helps establish realistic expectations.
            </li>
            
            <li>
              <strong className="text-red-700">Stopping medication once goal is reached:</strong> Without a maintenance strategy, weight regain is common. Studies show that approximately two-thirds of lost weight returns within a year of discontinuation.
            </li>
          </ul>
        </div>
        
        <p>
          Research indicates that patients who avoid these common mistakes achieve approximately 25-30% better outcomes than those who don't. Regular consultations with healthcare providers and using tools like our weight loss calculator can help you stay on track and avoid these pitfalls.
        </p>
        
        <p>
          Remember that weight loss with Ozempic is a marathon, not a sprint. The most successful patients are those who make sustainable changes and use the medication as part of a comprehensive lifestyle approach.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
