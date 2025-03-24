
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ContentSections: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4" id="what-is-metabolism">What Is Metabolism, Really?</h2>
      <p>
        Metabolism isn't just a single process—it's the sum of all biochemical reactions that keep your body functioning. When people talk about "boosting metabolism," they're typically referring to increasing your Total Daily Energy Expenditure (TDEE), which has four main components:
      </p>
      
      <p className="mt-3 mb-4">
        The largest component is your Basal Metabolic Rate (BMR), which accounts for 60-70% of your daily calorie burn and represents the calories your body burns at complete rest just to maintain basic functions like breathing and circulation. Non-Exercise Activity Thermogenesis (NEAT) encompasses the energy expended for everything that's not sleeping, eating, or sports-like exercise—from typing and fidgeting to walking to your car. The Thermic Effect of Food (TEF) refers to the calories burned digesting and processing food, which typically amounts to 10-15% of your total intake. Finally, Exercise Activity Thermogenesis (EAT) accounts for calories burned during intentional exercise sessions.
      </p>

      {/* Image with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Running to boost metabolism naturally - person jogging outdoors, representing physical activity that can increase metabolic rate" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Physical activity significantly increases your daily energy expenditure, both during and after exercise</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="ways-to-boost-metabolism">Top Proven Ways to Boost Your Metabolism</h2>

      <h3 className="text-xl font-medium mt-6 mb-3" id="build-more-muscle">Build More Muscle</h3>
      <p>
        Muscle tissue burns more calories at rest than fat tissue. Research shows that each pound of muscle burns approximately 6 calories per day at rest, compared to about 2 calories for fat tissue. Regular resistance training (2-3 times weekly) can increase your resting metabolic rate by up to 7%, according to a 2018 study in the International Journal of Exercise Science.
      </p>
      <p>
        What works best: Compound exercises like squats, deadlifts, push-ups, and rows that engage multiple muscle groups simultaneously. Progressive overload—gradually increasing weight or repetitions—is key to continuing to build muscle.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3" id="eat-enough-protein">Eat Enough Protein</h3>
      <p>
        Of all macronutrients, protein has the highest thermic effect—your body uses 20-30% of the calories in protein just for digestion and processing, compared to 5-10% for carbohydrates and 0-3% for fats. A high-protein diet can increase your metabolic rate by up to 80-100 calories per day.
      </p>
      <p>
        Research published in the American Journal of Clinical Nutrition found that participants on a high-protein diet (30% of calories from protein) burned more calories per day than those on a lower-protein diet (15% of calories from protein). Aim for 1.6-2.2g of protein per kg of body weight daily if you're physically active.
      </p>

      {/* Second image with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Protein-rich foods including eggs, fish, and lean meats arranged on a table - high-protein diet increases thermic effect of food and helps boost metabolism" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Protein-rich foods have a higher thermic effect, meaning your body burns more calories digesting them</p>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3" id="stay-active-between-workouts">Stay Active Between Workouts</h3>
      <p>
        NEAT (Non-Exercise Activity Thermogenesis) can vary by up to 2000 calories per day between individuals with sedentary versus active lifestyles. Simple activities like taking the stairs, walking while on phone calls, doing household chores, and breaking up sitting time can significantly increase your metabolic rate throughout the day.
      </p>
      <p>
        A study in PLOS ONE found that individuals who broke up sitting time with short walking breaks (just 2 minutes every 20 minutes) had 33% better glucose metabolism compared to those who sat continuously. Set a timer to remind yourself to move regularly throughout the day.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3" id="drink-more-water">Drink More Water</h3>
      <p>
        Staying hydrated is crucial for optimal metabolic function. Research published in the Journal of Clinical Endocrinology and Metabolism found that drinking 500ml of water increased metabolic rate by 30% for about 30-40 minutes. Much of this effect comes from the energy required to heat the water to body temperature.
      </p>
      <p>
        For maximum benefit, aim to drink cold water throughout the day. A study from the University of Utah found that participants who drank 8-12 glasses of water daily burned more calories than those who drank less than 4 glasses. The effect is modest—about 50-100 extra calories daily—but it adds up over time.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3" id="dont-skip-meals">Don't Skip Meals (But Consider Intermittent Fasting)</h3>
      <p>
        Severely restricting calories can cause your metabolism to slow down as a survival mechanism. Research in the New England Journal of Medicine found that people who lost weight rapidly through extreme calorie restriction experienced a greater drop in metabolic rate than those who lost weight more gradually.
      </p>
      <p>
        Interestingly, controlled intermittent fasting methods (like time-restricted eating within an 8-10 hour window) have shown promise for metabolic health without the negative adaptations seen in chronic calorie restriction. A 2019 review in the journal Nutrients found that intermittent fasting can improve metabolic flexibility—your body's ability to switch between fuel sources efficiently.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="what-doesnt-work">What Doesn't Work (And Why)</h2>
      <p>
        Many popular "metabolism boosters" lack scientific support. Most over-the-counter supplements claiming to boost metabolism (like green tea extract or garcinia cambogia) show minimal effects in clinical studies—often just 4-5 calories per day more than placebo. The theory that eating frequent small meals "stokes your metabolic fire" has been debunked by research showing that meal frequency has very little impact on metabolic rate when total daily calories remain the same. While water itself is beneficial for metabolism, adding lemon doesn't significantly change its metabolic effects—your liver and kidneys handle detoxification naturally without special drinks. Spicy foods containing capsaicin (the compound in chili peppers) do increase metabolism slightly, but the effect is too small (about 10 calories per meal) to create meaningful changes in body composition. Juice cleanses often reduce metabolic rate due to their very low calorie and protein content, creating short-term water weight loss but potentially harming long-term metabolic health.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="calculate-metabolic-rate">How to Calculate Your Daily Metabolic Rate</h2>
      <p>
        Understanding your basic metabolic rate is the first step to developing an effective strategy for weight management or fitness goals. While laboratory methods like indirect calorimetry provide the most accurate measurements, validated mathematical formulas can give a reasonable estimate of your daily energy needs.
      </p>
      <p>
        The most commonly used equations (like Mifflin-St Jeor or Harris-Benedict) calculate your Basal Metabolic Rate based on your age, gender, height, and weight. This number is then multiplied by an activity factor to estimate your total daily energy expenditure.
      </p>
      <p>
        For a personalized calculation that takes into account your specific characteristics and activity level, use our <Link to="/metabolism-calculator" className="text-primary hover:underline">Metabolism Calculator</Link> to estimate your daily calorie burn. This gives you a scientific starting point for nutritional planning and can help you track how changes in your activity levels or body composition affect your metabolic rate over time.
      </p>
    </>
  );
};

export default ContentSections;
