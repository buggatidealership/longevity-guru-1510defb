
import React from 'react';
import { Link } from 'react-router-dom';
import { AdUnit } from '@/components/AdUnit';

const ResourcesContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Longevity Resources & Guides</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Evidence-based articles and guides to help you optimize your health, finances, and lifestyle for a longer, better life.
      </p>
      
      <div className="mb-8 bg-gray-50 rounded-lg text-center w-full p-2">
        <AdUnit 
          className="w-full"
          slot="1111111111" 
          format="horizontal"
          responsive={true}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <ResourceCard 
          title="How to Calculate Your TDEE"
          description="Learn how to determine your Total Daily Energy Expenditure for weight management and fitness goals."
          url="/resources/how-to-calculate-your-tdee"
          category="Nutrition"
          date="Mar 25, 2025"
        />
        
        <ResourceCard 
          title="Breast Implant Size Guide"
          description="Comprehensive guide to choosing the right breast implant size based on your body type and goals."
          url="/resources/breast-implant-size-guide"
          category="Aesthetics"
          date="Nov 5, 2024"
        />
        
        <ResourceCard 
          title="Ozempic Weight Loss Calculator Guide"
          description="How to accurately predict your weight loss results with semaglutide medications like Ozempic and Wegovy."
          url="/resources/ozempic-weight-loss-calculator-guide"
          category="Weight Management"
          date="Mar 28, 2025"
        />
        
        <ResourceCard 
          title="Alcohol and Longevity"
          description="Evidence-based analysis of how alcohol consumption affects your lifespan and quality of life."
          url="/resources/alcohol-and-longevity"
          category="Lifestyle"
          date="Jul 20, 2024"
          isNew={true}
        />
        
        <ResourceCard 
          title="How to Predict Your Child's Adult Height"
          description="Scientific methods to estimate your child's potential adult height with reasonable accuracy."
          url="/resources/how-to-predict-your-childs-adult-height"
          category="Development"
          date="Oct 25, 2024"
        />
        
        <ResourceCard 
          title="How to Increase Life Expectancy"
          description="10 science-backed strategies to potentially extend your lifespan and improve quality of life."
          url="/resources/how-to-increase-life-expectancy"
          category="Longevity"
          date="Nov 10, 2023"
        />
        
        <ResourceCard 
          title="Macronutrient Calculator Guide"
          description="How to use our macronutrient calculator to optimize your diet for your specific health and fitness goals."
          url="/resources/macronutrient-calculator-guide"
          category="Nutrition"
          date="Dec 15, 2024"
        />
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold mb-4">Free Calculators for Better Decision-Making</h2>
        <p className="text-gray-700 mb-6">
          Our evidence-based calculators help you make informed decisions about your health, finances, and lifestyle.
          Each calculator is designed with scientific accuracy and practical usability in mind.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <CalculatorLink name="Life Expectancy" url="/life-expectancy-calculator" />
          <CalculatorLink name="Retirement Savings" url="/retirement-savings-calculator" />
          <CalculatorLink name="TDEE Calculator" url="/tdee-calculator" />
          <CalculatorLink name="Macronutrient Calculator" url="/macronutrient-calculator" />
          <CalculatorLink name="Alcohol Impact" url="/alcohol-impact-calculator" />
          <CalculatorLink name="Female Fertility" url="/female-fertility-calculator" />
          <CalculatorLink name="Child Growth Percentile" url="/child-growth-percentile-calculator" />
          <CalculatorLink name="Breast Implant Size" url="/breast-implant-calculator" />
          <CalculatorLink name="Vitamin D" url="/vitamin-d-calculator" />
          <CalculatorLink name="Creatine Water" url="/creatine-water-calculator" />
          <CalculatorLink name="Botox Dosage" url="/botox-dosage-calculator" />
          <CalculatorLink name="Ozempic Weight Loss" url="/ozempic-weight-loss-calculator" />
        </div>
      </div>
      
      <div className="mb-8 bg-gray-50 rounded-lg text-center w-full p-2">
        <AdUnit 
          className="w-full"
          slot="2222222222" 
          format="horizontal"
          responsive={true}
        />
      </div>
    </div>
  );
};

// Resource card component for articles
const ResourceCard = ({ title, description, url, category, date, isNew = false }) => {
  return (
    <Link to={url} className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5 flex flex-col flex-grow">
        {isNew && (
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2 self-start">
            New
          </span>
        )}
        <span className="text-xs font-medium text-blue-600 mb-2">{category}</span>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-gray-500">{date}</span>
          <span className="text-sm font-medium text-blue-600">Read More →</span>
        </div>
      </div>
    </Link>
  );
};

// Calculator link component
const CalculatorLink = ({ name, url }) => {
  return (
    <Link to={url} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-sm mb-1">{name}</h3>
      <span className="text-xs text-blue-600 hover:underline font-medium">Calculate →</span>
    </Link>
  );
};

export default ResourcesContent;
