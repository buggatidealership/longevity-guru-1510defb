
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Putting Your BMR Knowledge into Action</h2>
      
      <p className="mb-6">
        Understanding your Basal Metabolic Rate provides valuable insights into how your body uses energy and can serve as the foundation for effective nutrition, exercise, and lifestyle strategies. Now that you're familiar with BMR, its significance, and how to calculate it, you're better equipped to make informed decisions about your health and fitness goals.
      </p>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3">Key Takeaways</h3>
        
        <ul className="space-y-2">
          <li className="flex">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>BMR represents the calories your body needs for basic functions at complete rest.</span>
          </li>
          <li className="flex">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>It's influenced by factors including age, gender, body composition, and genetics.</span>
          </li>
          <li className="flex">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>BMR forms the foundation of your daily caloric needs and is crucial for effective weight management.</span>
          </li>
          <li className="flex">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>You can positively influence your BMR through building muscle mass and regular physical activity.</span>
          </li>
          <li className="flex">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Most common misconceptions about metabolism involve oversimplifications or outdated information.</span>
          </li>
        </ul>
      </div>
      
      <p className="mb-6">
        Remember that while BMR calculations provide valuable estimates, they serve as starting points. Pay attention to your body's signals, energy levels, and results as you implement nutrition and exercise strategies based on these calculations.
      </p>
      
      <p className="mb-8">
        For a more comprehensive understanding of your energy needs, we recommend using our calculators that incorporate BMR into their assessments:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="font-semibold mb-3">TDEE Calculator</h3>
          <p className="text-sm mb-4">Calculate your Total Daily Energy Expenditure based on your BMR and activity level.</p>
          <Link to="/tdee-calculator">
            <Button variant="outline" className="w-full">
              Calculate TDEE
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="font-semibold mb-3">Metabolism Calculator</h3>
          <p className="text-sm mb-4">Determine your metabolic rate and understand your body's energy usage patterns.</p>
          <Link to="/metabolism-calculator">
            <Button variant="outline" className="w-full">
              Check Metabolism
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="font-semibold mb-3">Macronutrient Calculator</h3>
          <p className="text-sm mb-4">Calculate optimal protein, carbs, and fat based on your BMR and goals.</p>
          <Link to="/macronutrient-calculator">
            <Button variant="outline" className="w-full">
              Plan Nutrition
            </Button>
          </Link>
        </div>
      </div>
      
      <p>
        By applying your knowledge of BMR and integrating it with other aspects of health and fitness, you'll be better equipped to create personalized, effective strategies for achieving your unique goals. Whether you're focused on weight management, athletic performance, or general health optimization, understanding your BMR is an essential step toward success.
      </p>
    </section>
  );
};

export default CallToAction;
