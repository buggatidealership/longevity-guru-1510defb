
import React from 'react';
import ResourceCard from './ResourceCard';

const ResourcesContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResourceCard
        title="How to Boost Your Metabolism"
        description="Science-backed methods to increase your daily calorie burn"
        content={[
          "Learn which metabolism-boosting strategies actually work, backed by research.",
          "Discover the main components of metabolic rate and how to influence each one."
        ]}
        link="/resources/how-to-boost-your-metabolism"
      />
      
      <ResourceCard
        title="How to Predict Your Child's Adult Height"
        description="Understanding growth patterns and genetic influences"
        content={[
          "Discover reliable methods pediatricians use to estimate final adult height.",
          "Learn how genetics, nutrition, and other factors affect your child's growth potential."
        ]}
        link="/resources/adult-height-prediction-guide"
      />
      
      <ResourceCard
        title="How to Increase Life Expectancy"
        description="Scientifically-proven strategies for a longer, healthier life"
        content={[
          "Explore the habits and lifestyle changes that can add years to your life.",
          "Learn which factors have the biggest impact on longevity according to research."
        ]}
        link="/resources/how-to-increase-life-expectancy"
      />
      
      <ResourceCard
        title="Fertility After 35: What to Know"
        description="Facts, myths, and strategies for later-life conception"
        content={[
          "Understand how fertility changes with age and what you can do about it.",
          "Explore options from natural conception to assisted reproductive technologies."
        ]}
        link="/resources/fertility-after-35"
      />
      
      <ResourceCard
        title="How Much to Save for Retirement"
        description="Setting realistic targets for financial security"
        content={[
          "Calculate how much you really need to save based on your lifestyle goals.",
          "Understand key factors that affect your retirement number and savings timeline."
        ]}
        link="/resources/how-much-to-save-for-retirement"
      />
      
      <ResourceCard
        title="Save for Retirement on a Low Income"
        description="Practical strategies when every dollar counts"
        content={[
          "Discover actionable ways to build retirement savings even on a tight budget.",
          "Learn about special programs and tax advantages designed for lower-income savers."
        ]}
        link="/resources/save-for-retirement-low-income"
      />
      
      <ResourceCard
        title="Breast Implant Size Guide"
        description="How to choose the right size for your body"
        content={[
          "Learn how implant profiles, materials, and dimensions affect your final result.",
          "Understand how to communicate effectively with your surgeon about size goals."
        ]}
        link="/resources/breast-implant-size-guide"
      />
      
      <ResourceCard
        title="How to Use Your BMI Effectively"
        description="Understanding the benefits and limitations of BMI"
        content={[
          "Learn what BMI actually measures and what it doesn't tell you about health.",
          "Discover how to interpret your BMI results in context with other health metrics."
        ]}
        link="/resources/how-to-use-your-bmi"
      />
      
      <ResourceCard
        title="How Much Botox Do You Really Need?"
        description="A calculator-based guide by treatment area"
        content={[
          "Understand typical unit ranges for different facial areas based on clinical practice.",
          "Learn how factors like gender, age, and muscle strength affect your optimal dosage."
        ]}
        link="/resources/botox-dosage-guide"
      />
    </div>
  );
};

export default ResourcesContent;
