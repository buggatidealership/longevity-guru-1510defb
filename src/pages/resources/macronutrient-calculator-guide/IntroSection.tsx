
import React from 'react';
import { AdUnit } from '@/components/AdUnit';

const IntroSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-left">
        How to Use the Macronutrient Calculator to Hit Your Health Goals
      </h1>
      
      <p className="text-xl text-gray-700 leading-relaxed">
        Understanding your personal macronutrient needs is the key to achieving your fitness goals, whether you're looking to lose fat, build muscle, or maintain your current physique.
      </p>
      
      <div className="my-6">
        <AdUnit 
          slot="5678901234"
          format="rectangle"
          responsive={true}
        />
      </div>
      
      <p className="text-gray-700">
        If you've ever tried to improve your body composition, you've likely encountered confusing and contradictory advice about what to eat. Should you go low-carb? High-protein? What about fat intake? The truth is that while different approaches work for different people, understanding your <strong>macronutrient calculator</strong> results gives you a personalized nutritional framework based on science rather than generic advice.
      </p>
      
      <p className="text-gray-700">
        Our <strong>macronutrient calculator</strong> uses the established Mifflin-St Jeor equation to determine your calorie needs, then breaks those calories into optimal proportions of protein, carbohydrates, and fats based on your specific goals. This article will guide you through understanding your results and implementing them effectively for real-world success.
      </p>
      
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80" 
          alt="Person preparing balanced meal with proper macronutrient proportions" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="prose prose-blue max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4" id="table-of-contents">
          Table of Contents
        </h2>
        <ul className="space-y-1 list-disc list-inside">
          <li><a href="#what-are-macronutrients" className="text-blue-600 hover:text-blue-800">What Are Macronutrients and Why Do They Matter?</a></li>
          <li><a href="#how-calculator-works" className="text-blue-600 hover:text-blue-800">How the Macronutrient Calculator Works</a></li>
          <li><a href="#interpreting-results" className="text-blue-600 hover:text-blue-800">Interpreting Your Macronutrient Results</a></li>
          <li><a href="#common-goals" className="text-blue-600 hover:text-blue-800">Customizing Macros for Common Goals</a></li>
          <li><a href="#real-world-tracking" className="text-blue-600 hover:text-blue-800">Practical Tips for Real-World Macro Tracking</a></li>
          <li><a href="#adjusting-over-time" className="text-blue-600 hover:text-blue-800">When and How to Adjust Your Macros</a></li>
          <li><a href="#faq" className="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
