import React from 'react';
import { AdUnit } from '@/components/AdUnit';
import ResourceCard from './ResourceCard';

const ResourcesContent: React.FC = () => {
  const resourceData = [
    {
      title: "Understanding Your Body Mass Index (BMI)",
      description: "Learn How to Use Your BMI Score Effectively",
      content: [
        "Discover what BMI really means, its limitations, and how to properly interpret your score for better health decisions.",
        "Learn when BMI is a useful indicator and when other measurements might provide more accurate insights about your body composition and health."
      ],
      link: "/resources/how-to-use-your-bmi"
    },
    {
      title: "How Tall Will I Be?",
      description: "Predict Your Adult Height with Science-Based Tools",
      content: [
        "Learn what determines your adult height, from genetics to growth factors, and discover science-backed methods to predict your final height.",
        "Understand growth spurts, development milestones, and get evidence-based answers about maximizing your natural height potential."
      ],
      link: "/resources/adult-height-prediction-guide"
    },
    {
      title: "How to Predict Your Child's Adult Height",
      description: "Science-Backed Methods for Parents",
      content: [
        "Learn the scientific methods behind predicting how tall your child will be as an adult, including the mid-parental height formula and growth percentiles.",
        "Discover what factors influence your child's final height and when variations in growth patterns might warrant a conversation with your pediatrician."
      ],
      link: "/resources/how-to-predict-your-childs-adult-height"
    },
    {
      title: "Fertility After 35",
      description: "Facts, Fears, and Your Chances of Conceiving",
      content: [
        "Explore the science-backed facts about fertility after age 35, including egg quality, ovarian reserve, and your real chances of conceiving.",
        "Learn practical strategies to improve your odds, understand when to see a fertility specialist, and find answers to common questions about advanced maternal age."
      ],
      link: "/resources/fertility-after-35"
    },
    {
      title: "How to Increase Life Expectancy",
      description: "10 Proven Ways to Live Longer",
      content: [
        "Discover science-backed lifestyle changes that can add years to your life, from diet and exercise to stress management and social connections.",
        "Based on peer-reviewed longevity research, these practical strategies can help increase your lifespan potential and improve quality of life as you age."
      ],
      link: "/resources/how-to-increase-life-expectancy"
    },
    {
      title: "How to Boost Your Metabolism Naturally",
      description: "Science-Backed Methods That Work",
      content: [
        "Learn science-backed ways to naturally boost your metabolism and increase your daily energy expenditure through diet, exercise, and lifestyle changes.",
        "Discover which habits truly help increase your metabolic rate and how to calculate exactly how many calories your body burns each day."
      ],
      link: "/resources/how-to-boost-your-metabolism"
    },
    {
      title: "How Much to Save for Retirement",
      description: "Real-Life Examples & Guide",
      content: [
        "Discover exactly how much you should save for retirement based on your age, income, and lifestyle goals. Includes practical formulas and real-world examples.",
        "Learn proven strategies for retirement planning at every life stage, from early career savers to those approaching retirement age."
      ],
      link: "/resources/how-much-to-save-for-retirement"
    },
    {
      title: "Save for Retirement on a Low Income",
      description: "Practical Strategies That Work",
      content: [
        "Learn how to build a retirement fund even on a tight budget. Discover government programs, tax credits, and saving techniques specifically designed for low-income earners.",
        "Includes realistic savings targets by income level and actionable steps to secure your financial future regardless of your current income."
      ],
      link: "/resources/save-for-retirement-low-income"
    },
    {
      title: "How to Choose the Right Breast Implant Size",
      description: "A Personalized, Data-Backed Guide",
      content: [
        "Understand implant measurements, cup size equivalents, and the factors that influence your final results after breast augmentation surgery.",
        "Learn how to use our calculator to find your ideal implant volume range based on your body measurements and aesthetic goals."
      ],
      link: "/resources/breast-implant-size-guide"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight py-3">Longevity Resources</h1>
          <div className="h-0.5 w-32 bg-gray-200 mx-auto my-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Evidence-based articles and guides to help you optimize your health, wellness, and financial planning for a longer, better life.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceData.map((resource, index) => (
            <ResourceCard 
              key={index}
              title={resource.title}
              description={resource.description}
              content={resource.content}
              link={resource.link}
            />
          ))}
        </div>
      </div>
      
      <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
        <AdUnit 
          className="w-full"
          slot="2222222222" 
          format="rectangle"
          responsive={true}
        />
      </div>
      
      <div className="mt-6 mb-4 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
        <AdUnit 
          className="w-full"
          slot="3333333333" 
          format="horizontal"
          responsive={true}
        />
      </div>
    </main>
  );
};

export default ResourcesContent;
