
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <>
      <p className="text-lg mb-6">
        Body Mass Index (BMI) is one of the most widely used measurements to assess weight status, but it's also one of the most misunderstood. This simple ratio of weight to height was developed in the 1830s and has since become a standard screening tool used by healthcare providers worldwide. However, BMI has limitations that are important to understand before using it to make decisions about your health. Try our <Link to="/bmi-calculator" className="text-primary hover:underline">BMI Calculator</Link> to find your score, then read on to learn what it really means and how to interpret it properly.
      </p>
      
      <div className="my-8 relative rounded-xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" 
          alt="Healthcare professional discussing BMI chart with patient" 
          className="w-full object-cover rounded-xl"
          loading="lazy"
        />
        <p className="mt-2 text-sm text-gray-500 italic text-center">
          While BMI provides a useful starting point, it's just one of many factors in assessing overall health.
        </p>
      </div>
    </>
  );
};

export default IntroSection;
