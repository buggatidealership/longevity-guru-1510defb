
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">What is BMI and Why It Matters</h2>
      <p className="text-lg mb-6">
        Body Mass Index (BMI) is one of the most widely used measurements to assess weight status, but it's also one of the most misunderstood. This simple ratio of weight to height was developed in the 1830s and has since become a standard screening tool used by healthcare providers worldwide. However, BMI has limitations that are important to understand before using it to make decisions about your health. Try our <Link to="/bmi-calculator" className="text-primary hover:underline font-medium">BMI Calculator</Link> to find your score, then read on to learn what it really means and how to interpret it properly.
      </p>
      
      <div className="my-8 relative rounded-xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" 
          alt="Person reviewing their Body Mass Index (BMI) with a healthcare provider" 
          className="w-full object-cover rounded-xl"
          loading="lazy"
        />
        <p className="mt-2 text-sm text-gray-500 italic text-center">
          While BMI provides a useful starting point, it's just one of many factors in assessing overall health.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">How to Calculate BMI</h2>
      <p className="mb-4">
        BMI is calculated using a straightforward formula that compares your weight relative to your height:
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="font-medium text-center">BMI = Weight (kg) ÷ Height² (m²)</p>
        <p className="text-sm text-center mt-2">In US measurements: BMI = [Weight (lb) ÷ Height² (in²)] × 703</p>
      </div>
      <p className="mb-4">
        While you can calculate BMI manually, our <Link to="/bmi-calculator" className="text-primary hover:underline font-medium">free BMI calculator</Link> makes it simple to get instant results with just a few clicks. The calculator will also tell you which category your BMI falls into and what it means for your health.
      </p>
    </>
  );
};

export default IntroSection;
