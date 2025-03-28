
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  return (
    <section className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alcohol and Longevity: Understanding the Impact on Your Lifespan</h1>
      
      <div className="prose max-w-none text-gray-700">
        <p className="text-lg mb-4">
          The relationship between alcohol consumption and longevity is complex and often misunderstood. 
          While some studies suggest potential cardiovascular benefits from moderate drinking, 
          the overall evidence points to a negative correlation between regular alcohol consumption and lifespan.
        </p>
        
        <p className="mb-4">
          In this evidence-based guide, we'll explore how different levels of alcohol consumption affect your 
          health, longevity, and quality of life. We'll examine the latest research on both the short and 
          long-term effects of drinking, and provide practical recommendations for those looking to optimize 
          their health while still enjoying occasional drinks.
        </p>
        
        <p>
          If you're interested in calculating how your drinking habits specifically impact your health and lifespan, 
          try our <Link to="/alcohol-impact-calculator" className="text-blue-600 hover:underline">Alcohol Impact Calculator</Link> to get personalized insights.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
