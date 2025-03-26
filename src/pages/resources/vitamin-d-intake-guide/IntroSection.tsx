
import React from 'react';
import { Sun } from 'lucide-react';

const IntroSection = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 text-primary mb-3">
        <Sun className="h-5 w-5" />
        <span className="text-sm font-medium uppercase tracking-wider">Nutrition & Health</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        How to Calculate Your Ideal Vitamin D Intake
      </h1>
      
      <div className="text-xl text-muted-foreground mb-6">
        Learn how to calculate the optimal daily vitamin D dosage for your body using science-backed guidelines.
      </div>
      
      <div className="relative rounded-xl overflow-hidden mb-8 aspect-video">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
          alt="Woman taking vitamin D supplements with a glass of water"
          className="object-cover w-full h-full"
          width={1200}
          height={675}
        />
      </div>
      
      <div className="prose max-w-none">
        <p>
          Vitamin D stands out as one of the most critical yet frequently overlooked nutrients for overall health. Unlike other vitamins, your body can produce vitamin D when exposed to sunlight, yet an estimated 1 billion people worldwide suffer from vitamin D deficiency or insufficiency. This comprehensive guide will help you understand how much vitamin D you actually need, how to calculate your personal requirements, and the most effective ways to maintain optimal levels for bone health, immune function, and overall wellbeing.
        </p>
        
        <p>
          Whether you're concerned about a potential deficiency, living in a region with limited sunlight, or simply want to optimize your nutrition, understanding your specific vitamin D needs is essential. Using our <a href="/vitamin-d-calculator" className="text-primary hover:underline">Vitamin D Calculator</a> alongside this guide will help you determine the right dosage based on your age, weight, lifestyle, and environmental factors.
        </p>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h2 className="text-lg font-medium mb-2">Table of Contents</h2>
        <ul className="space-y-1 text-blue-800">
          <li className="hover:text-blue-600">
            <a href="#what-is-vitamin-d" className="flex items-center">
              <span className="mr-2 text-xs">01</span>
              <span>What Is Vitamin D and Why Is It Important?</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#how-much-vitamin-d" className="flex items-center">
              <span className="mr-2 text-xs">02</span>
              <span>How Much Vitamin D Do You Need Per Day?</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#factors" className="flex items-center">
              <span className="mr-2 text-xs">03</span>
              <span>Factors That Affect Your Vitamin D Requirements</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#calculator" className="flex items-center">
              <span className="mr-2 text-xs">04</span>
              <span>How to Use the Vitamin D Intake Calculator</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#sources" className="flex items-center">
              <span className="mr-2 text-xs">05</span>
              <span>Vitamin D Food Sources vs. Supplements</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#deficiency" className="flex items-center">
              <span className="mr-2 text-xs">06</span>
              <span>Signs of Deficiency and Overdose</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
