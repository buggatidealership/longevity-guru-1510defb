
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceCard from './ResourceCard';

const ResourcesContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Longevity Resources</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Evidence-based articles and guides to help you make informed decisions about your health, wellness, and financial future.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ResourceCard 
          title="Will I Go Bald? Predict Hair Loss"
          description="Learn about the science of hair loss prediction"
          content={[
            "Discover the key factors that determine your baldness risk, understand how genetics and hormones affect hair loss, and learn what preventative steps you can take if you're at high risk."
          ]}
          link="/resources/will-i-go-bald"
          imageUrl="https://images.unsplash.com/photo-1579975096649-e773676c4276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="October 15, 2024"
        />
        
        <ResourceCard 
          title="How to Boost Your Metabolism"
          description="Science-backed methods to increase your metabolic rate"
          content={[
            "Learn which habits and lifestyle changes are actually proven to increase metabolism, and which popular \"metabolism boosters\" are myths. Find out how your body burns calories daily."
          ]}
          link="/resources/how-to-boost-your-metabolism"
          imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="October 10, 2024"
        />
        
        <ResourceCard 
          title="How Much to Save for Retirement"
          description="A comprehensive guide to retirement planning"
          content={[
            "Discover how much you should be saving at every age, which factors affect your personal retirement number, and strategies to catch up if you're behind on your savings goals."
          ]}
          link="/resources/how-much-to-save-for-retirement"
          imageUrl="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="September 25, 2024"
        />
        
        <ResourceCard 
          title="Save for Retirement on a Low Income"
          description="Strategic planning for those with limited resources"
          content={[
            "Learn practical strategies for building retirement security even with limited income, including special tax benefits, government programs, and non-traditional approaches to financial security."
          ]}
          link="/resources/save-for-retirement-low-income"
          imageUrl="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="September 18, 2024"
        />
        
        <ResourceCard 
          title="Fertility After 35"
          description="Understanding conception chances with advanced maternal age"
          content={[
            "Learn how fertility changes after 35, specific challenges you might face, and the steps you can take to maximize your chances of conception, including when to seek medical help."
          ]}
          link="/resources/fertility-after-35"
          imageUrl="https://images.unsplash.com/photo-1632064003211-20b57bbc4ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="September 12, 2024"
        />
        
        <ResourceCard 
          title="How to Increase Life Expectancy"
          description="Evidence-based strategies to live longer and healthier"
          content={[
            "Discover the 7 key lifestyle factors with the strongest scientific evidence for extending lifespan and improving healthspan, with specific actionable steps for each factor."
          ]}
          link="/resources/how-to-increase-life-expectancy"
          imageUrl="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="August 28, 2024"
        />
        
        <ResourceCard 
          title="Alcohol and Longevity"
          description="How drinking affects your lifespan"
          content={[
            "Learn about the relationship between alcohol consumption and life expectancy, including the latest research on safe drinking levels and how alcohol affects different aspects of health."
          ]}
          link="/resources/alcohol-and-longevity"
          imageUrl="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="August 15, 2024"
        />
        
        <ResourceCard 
          title="How to Use Your BMI"
          description="Understanding the strengths and limitations of BMI"
          content={[
            "Learn what BMI actually measures, when it's useful, when it's misleading, and how to interpret your BMI results in the context of your overall health assessment."
          ]}
          link="/resources/how-to-use-your-bmi"
          imageUrl="https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="August 8, 2024"
        />
        
        <ResourceCard 
          title="Adult Height Prediction Guide"
          description="How to estimate a child's future height"
          content={[
            "Understand the science behind height prediction, including genetic factors, bone age assessment, and how to use prediction methods to estimate a child's adult height."
          ]}
          link="/resources/adult-height-prediction-guide"
          imageUrl="https://images.unsplash.com/photo-1576613109753-27804239cce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="July 27, 2024"
        />
        
        <ResourceCard 
          title="How to Predict Your Child's Height"
          description="Methods for estimating a child's adult height"
          content={[
            "Learn about different methods to predict your child's future height, including the mid-parental height method, growth chart percentiles, and how to interpret bone age studies."
          ]}
          link="/resources/how-to-predict-your-childs-adult-height"
          imageUrl="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="July 15, 2024"
        />
        
        <ResourceCard 
          title="Botox Dosage Guide"
          description="Understanding Botox treatment areas and units"
          content={[
            "Explore how Botox dosing varies by treatment area, what factors affect your personal dosage needs, and how to ensure you're getting appropriate treatment for optimal results."
          ]}
          link="/resources/botox-dosage-guide"
          imageUrl="https://images.unsplash.com/photo-1595839095859-eb3ce9a499b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="July 5, 2024"
        />
        
        <ResourceCard 
          title="Breast Implant Size Guide"
          description="Choosing the right implant size for your body"
          content={[
            "Learn about different implant measurements, how to assess your frame and tissue characteristics, and how to visualize potential results to find your ideal implant size."
          ]}
          link="/resources/breast-implant-size-guide"
          imageUrl="https://images.unsplash.com/photo-1580507090612-fce599709efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
          date="June 22, 2024"
        />
      </div>
    </div>
  );
};

export default ResourcesContent;
