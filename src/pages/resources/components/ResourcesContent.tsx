
import React from 'react';
import { Link } from 'react-router-dom';
import ResourceCard from './ResourceCard';
import { AdUnit } from '@/components/AdUnit';

const ResourcesContent = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health & Wellness Resources</h1>
        <p className="text-gray-600">
          Evidence-based guides to help you live longer, healthier, and make informed decisions.
        </p>
      </div>
      
      <div className="mb-6 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
        <AdUnit 
          className="w-full"
          slot="1111111111" 
          format="horizontal"
          responsive={true}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <ResourceCard 
          title="How to Boost Your Metabolism"
          description="Learn evidence-based strategies to naturally increase your metabolic rate."
          link="/resources/how-to-boost-your-metabolism"
          content={["Learn evidence-based strategies to naturally increase your metabolic rate."]}
          imageUrl="https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80"
          date="October 10, 2023"
        />
        
        <ResourceCard 
          title="How to Increase Life Expectancy"
          description="Discover the 10 most effective habits to extend your lifespan according to longevity research."
          link="/resources/how-to-increase-life-expectancy"
          content={["Discover the 10 most effective habits to extend your lifespan according to longevity research."]}
          imageUrl="https://images.unsplash.com/photo-1507120878965-54b2d3939100?auto=format&fit=crop&w=600&q=80"
          date="May 15, 2023"
        />
        
        <ResourceCard 
          title="Fertility After 35"
          description="Understanding your fertility options and chances after age 35."
          link="/resources/fertility-after-35"
          content={["Understanding your fertility options and chances after age 35."]}
          imageUrl="https://images.unsplash.com/photo-1632165254498-1e89c9fd72e6?auto=format&fit=crop&w=600&q=80"
          date="July 20, 2023"
        />
        
        <ResourceCard 
          title="How Much to Save for Retirement"
          description="Calculate how much you need to save for a comfortable retirement based on your lifestyle."
          link="/resources/how-much-to-save-for-retirement"
          content={["Calculate how much you need to save for a comfortable retirement based on your lifestyle."]}
          imageUrl="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600&q=80"
          date="June 5, 2023"
        />
        
        <ResourceCard 
          title="Save for Retirement on Low Income"
          description="Strategies to build retirement savings when money is tight."
          link="/resources/save-for-retirement-low-income"
          content={["Strategies to build retirement savings when money is tight."]}
          imageUrl="https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&w=600&q=80"
          date="November 12, 2023"
        />
        
        <ResourceCard 
          title="How to Choose Breast Implant Size"
          description="A guide to finding the right implant size for your body type and goals."
          link="/resources/breast-implant-size-guide"
          content={["A guide to finding the right implant size for your body type and goals."]}
          imageUrl="https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=600&q=80"
          date="September 15, 2023"
        />

        <ResourceCard 
          title="How to Use Your BMI"
          description="Understanding what BMI does (and doesn't) tell you about your health."
          link="/resources/how-to-use-your-bmi"
          content={["Understanding what BMI does (and doesn't) tell you about your health."]}
          imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
          date="March 8, 2023"
        />

        <ResourceCard 
          title="Predict Your Child's Adult Height"
          description="Methods to estimate how tall your child might grow using genetic and scientific factors."
          link="/resources/adult-height-prediction-guide"
          content={["Methods to estimate how tall your child might grow using genetic and scientific factors."]}
          imageUrl="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
          date="February 20, 2024"
        />
        
        <ResourceCard 
          title="How Much Botox Do You Need"
          description="A guide to understanding botox dosages across different facial areas."
          link="/resources/botox-dosage-guide"
          content={["A guide to understanding botox dosages across different facial areas."]}
          imageUrl="https://images.unsplash.com/photo-1621798986237-93d793afafc2?auto=format&fit=crop&w=600&q=80"
          date="November 15, 2023"
        />
        
        <ResourceCard 
          title="Alcohol and Longevity"
          description="Learn how alcohol consumption affects your lifespan and health outcomes."
          link="/resources/alcohol-and-longevity"
          content={["Learn how alcohol consumption affects your lifespan and health outcomes."]}
          imageUrl="https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=600&q=80"
          date="January 10, 2024"
        />
      </div>
      
      <div className="mb-10 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
        <AdUnit 
          className="w-full"
          slot="2222222222" 
          format="rectangle"
          responsive={true}
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculator Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/life-expectancy-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-primary transition duration-300">
            <h3 className="font-medium text-gray-900 mb-1">Life Expectancy Calculator</h3>
            <p className="text-sm text-gray-600">Estimate your lifespan based on your lifestyle and health factors.</p>
          </Link>
          
          <Link to="/retirement-savings-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-primary transition duration-300">
            <h3 className="font-medium text-gray-900 mb-1">Retirement Savings Calculator</h3>
            <p className="text-sm text-gray-600">See how much you need to save to reach your retirement goals.</p>
          </Link>
          
          <Link to="/female-fertility-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-primary transition duration-300">
            <h3 className="font-medium text-gray-900 mb-1">Female Fertility Calculator</h3>
            <p className="text-sm text-gray-600">Estimate your chances of conception based on your age.</p>
          </Link>
          
          <Link to="/adult-height-predictor-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-primary transition duration-300">
            <h3 className="font-medium text-gray-900 mb-1">Adult Height Predictor</h3>
            <p className="text-sm text-gray-600">Predict a child's adult height based on parental height and current growth.</p>
          </Link>
          
          <Link to="/botox-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-primary transition duration-300">
            <h3 className="font-medium text-gray-900 mb-1">Botox Dosage Calculator</h3>
            <p className="text-sm text-gray-600">Estimate how many units of botox you might need for various treatment areas.</p>
          </Link>
          
          <Link to="/alcohol-lifespan-calculator" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-primary transition duration-300">
            <h3 className="font-medium text-gray-900 mb-1">Alcohol Impact Calculator</h3>
            <p className="text-sm text-gray-600">Calculate how alcohol consumption affects your life expectancy.</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ResourcesContent;
