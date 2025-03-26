
import React from 'react';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';
import ResourceCard from './ResourceCard';

const ResourcesContent = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-left">Health & Wellness Resources</h1>
      
      <div className="prose max-w-none mb-8 text-left">
        <p className="text-lg text-gray-700">
          Explore our collection of evidence-based articles, guides, and resources to help you make informed decisions about your health, finances, and lifestyle.
        </p>
      </div>
      
      <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
        <AdUnit 
          className="w-full"
          slot="1111111111" 
          format="horizontal"
          responsive={true}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* New Vitamin D article */}
        <ResourceCard 
          title="How to Calculate Your Ideal Vitamin D Intake" 
          description="Learn how to calculate the optimal daily vitamin D dosage for your body using science-backed guidelines."
          content={[
            "Discover how much vitamin D you actually need based on your age, skin tone, location, and lifestyle factors.",
            "Learn about vitamin D food sources, signs of deficiency, and how to use our calculator for personalized recommendations."
          ]}
          link="/resources/vitamin-d-intake-guide"
          imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
          date="August 30, 2024"
        />
        
        <ResourceCard 
          title="The Truth About Ideal Body Weight Formulas & How to Use Them" 
          description="Explore the science behind ideal body weight formulas and how to use our free calculator to find your healthiest weight based on height."
          content={[
            "Learn how ideal body weight calculators work, which formulas are most reliable, and when to trust (or ignore) these mathematical estimates of healthy weight.",
            "This guide examines the real science behind ideal body weight formulas, their limitations, and how to interpret their results in the context of your overall health."
          ]}
          link="/resources/ideal-body-weight-guide"
          imageUrl="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&fit=crop&w=600&q=80"
          date="May 20, 2024"
        />
        
        <ResourceCard 
          title="How to Use the Macronutrient Calculator to Hit Your Health Goals" 
          description="Learn how to calculate your ideal daily intake of protein, carbs, and fat based on your fitness goals using our free macronutrient calculator."
          content={[
            "Understanding your personal macronutrient needs is the key to achieving your fitness goals, whether you're looking to lose fat, build muscle, or maintain your current physique.",
            "Our macronutrient calculator uses established formulas to determine your calorie needs, then breaks those calories into optimal proportions of protein, carbohydrates, and fats based on your specific goals."
          ]}
          link="/resources/macronutrient-calculator-guide"
          imageUrl="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
          date="December 15, 2024"
        />
        
        <ResourceCard 
          title="How to Calculate Your TDEE & Adjust It for Your Goals" 
          description="Learn how to accurately calculate your Total Daily Energy Expenditure (TDEE) and customize it for weight loss, muscle gain, or maintenance."
          content={[
            "Your Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns each day. It combines your Basal Metabolic Rate (BMR) with the calories you burn from physical activity, digestion, and daily movement.",
            "Knowing your TDEE helps you accurately plan your nutrition for any goal: weight loss, muscle gain, or maintenance."
          ]}
          link="/resources/how-to-calculate-your-tdee"
          date="March 25, 2025"
        />
        
        <ResourceCard 
          title="How to Boost Your Metabolism Naturally" 
          description="Discover science-backed strategies to increase your metabolic rate and burn more calories throughout the day."
          content={[
            "Your metabolism determines how efficiently your body converts food into energy. A faster metabolism can help with weight management and energy levels.",
            "This guide explores proven methods to boost your metabolism through diet, exercise, and lifestyle changes."
          ]}
          link="/resources/how-to-boost-your-metabolism"
          date="October 10, 2024"
        />
        
        <ResourceCard 
          title="How to Increase Life Expectancy" 
          description="Research-backed lifestyle changes that can add years to your life and improve longevity outcomes."
          content={[
            "Small daily habits can have a profound impact on your lifespan and healthspan. This article explores the scientifically-validated ways to live longer.",
            "From nutrition to stress management, discover actionable strategies for increasing your life expectancy."
          ]}
          link="/resources/how-to-increase-life-expectancy"
          date="August 24, 2024"
        />
        
        <ResourceCard 
          title="Will I Go Bald? Predict Hair Loss"
          description="Learn about the science of hair loss prediction"
          content={[
            "Discover the key factors that determine your baldness risk, understand how genetics and hormones affect hair loss, and learn what preventative steps you can take if you're at high risk."
          ]}
          link="/resources/will-i-go-bald"
          imageUrl="https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=600&q=80"
          date="October 15, 2024"
        />
        
        <ResourceCard 
          title="How to Boost Your Metabolism"
          description="Science-backed methods to increase your metabolic rate"
          content={[
            "Learn which habits and lifestyle changes are actually proven to increase metabolism, and which popular \"metabolism boosters\" are myths. Find out how your body burns calories daily."
          ]}
          link="/resources/how-to-boost-your-metabolism"
          imageUrl="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
          date="October 10, 2024"
        />
        
        <ResourceCard 
          title="How Much to Save for Retirement"
          description="A comprehensive guide to retirement planning"
          content={[
            "Discover how much you should be saving at every age, which factors affect your personal retirement number, and strategies to catch up if you're behind on your savings goals."
          ]}
          link="/resources/how-much-to-save-for-retirement"
          imageUrl="https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=600&q=80"
          date="September 25, 2024"
        />
        
        <ResourceCard 
          title="Save for Retirement on a Low Income"
          description="Strategic planning for those with limited resources"
          content={[
            "Learn practical strategies for building retirement security even with limited income, including special tax benefits, government programs, and non-traditional approaches to financial security."
          ]}
          link="/resources/save-for-retirement-low-income"
          imageUrl="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80"
          date="September 18, 2024"
        />
        
        <ResourceCard 
          title="Fertility After 35"
          description="Understanding conception chances with advanced maternal age"
          content={[
            "Learn how fertility changes after 35, specific challenges you might face, and the steps you can take to maximize your chances of conception, including when to seek medical help."
          ]}
          link="/resources/fertility-after-35"
          imageUrl="https://images.unsplash.com/photo-1633254603711-0de879974aeb?auto=format&fit=crop&w=600&q=80"
          date="September 12, 2024"
        />
        
        <ResourceCard 
          title="Alcohol and Longevity"
          description="How drinking affects your lifespan"
          content={[
            "Learn about the relationship between alcohol consumption and life expectancy, including the latest research on safe drinking levels and how alcohol affects different aspects of health."
          ]}
          link="/resources/alcohol-and-longevity"
          imageUrl="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=600&q=80"
          date="August 15, 2024"
        />
        
        <ResourceCard 
          title="How to Use Your BMI"
          description="Understanding the strengths and limitations of BMI"
          content={[
            "Learn what BMI actually measures, when it's useful, when it's misleading, and how to interpret your BMI results in the context of your overall health assessment."
          ]}
          link="/resources/how-to-use-your-bmi"
          imageUrl="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=600&q=80"
          date="August 8, 2024"
        />
        
        <ResourceCard 
          title="Adult Height Prediction Guide"
          description="How to estimate a child's future height"
          content={[
            "Understand the science behind height prediction, including genetic factors, bone age assessment, and how to use prediction methods to estimate a child's adult height."
          ]}
          link="/resources/adult-height-prediction-guide"
          imageUrl="https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=600&q=80"
          date="July 27, 2024"
        />
        
        <ResourceCard 
          title="How to Predict Your Child's Height"
          description="Methods for estimating a child's adult height"
          content={[
            "Learn about different methods to predict your child's future height, including the mid-parental height method, growth chart percentiles, and how to interpret bone age studies."
          ]}
          link="/resources/how-to-predict-your-childs-adult-height"
          imageUrl="https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&w=600&q=80"
          date="July 15, 2024"
        />
        
        <ResourceCard 
          title="Botox Dosage Guide"
          description="Understanding Botox treatment areas and units"
          content={[
            "Explore how Botox dosing varies by treatment area, what factors affect your personal dosage needs, and how to ensure you're getting appropriate treatment for optimal results."
          ]}
          link="/resources/botox-dosage-guide"
          imageUrl="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=600&q=80"
          date="July 5, 2024"
        />
        
        <ResourceCard 
          title="Breast Implant Size Guide"
          description="Choosing the right implant size for your body"
          content={[
            "Learn about different implant measurements, how to assess your frame and tissue characteristics, and how to visualize potential results to find your ideal implant size."
          ]}
          link="/resources/breast-implant-size-guide"
          imageUrl="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?auto=format&fit=crop&w=600&q=80"
          date="June 22, 2024"
        />
      </div>
      
      <div className="my-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
        <AdUnit 
          className="w-full"
          slot="2222222222" 
          format="rectangle"
          responsive={true}
        />
      </div>
    </main>
  );
};

export default ResourcesContent;
