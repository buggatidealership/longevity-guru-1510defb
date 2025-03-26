
import React from 'react';
import { Droplets } from 'lucide-react';

const IntroSection = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 text-primary mb-3">
        <Droplets className="h-5 w-5" />
        <span className="text-sm font-medium uppercase tracking-wider">Fitness & Nutrition</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        How Much Water Should You Drink While Taking Creatine?
      </h1>
      
      <div className="text-xl text-muted-foreground mb-6">
        Learn how to calculate the ideal daily water intake to support safe and effective creatine use.
      </div>
      
      <div className="relative rounded-xl overflow-hidden mb-8 aspect-video">
        <img 
          src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80"
          alt="Water flowing through rocks, representing the importance of hydration when taking creatine supplements"
          className={`object-cover w-full h-full hero-image ${imageLoaded ? 'loaded' : ''}`}
          width={1200}
          height={675}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          fetchpriority="high"
        />
      </div>
      
      <div className="prose max-w-none">
        <p>
          Creatine is one of the most well-researched and effective supplements for enhancing athletic performance and muscle growth. However, one aspect of creatine supplementation that's often overlooked is hydration. Since creatine works by drawing water into your muscle cells, proper hydration is essential when taking this supplement to maximize benefits and minimize potential side effects.
        </p>
        
        <p>
          The question "how much water should I drink with creatine?" doesn't have a one-size-fits-all answer. Your optimal water intake depends on multiple factors including your body weight, activity level, climate, and whether you're in the loading or maintenance phase of supplementation. Using our <a href="/creatine-water-calculator" className="text-primary hover:underline">Creatine Water Calculator</a> alongside this guide will help you determine your personalized hydration needs when using creatine.
        </p>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h2 className="text-lg font-medium mb-2">Table of Contents</h2>
        <ul className="space-y-1 text-blue-800">
          <li className="hover:text-blue-600">
            <a href="#what-is-creatine" className="flex items-center">
              <span className="mr-2 text-xs">01</span>
              <span>What Is Creatine and How Does It Work?</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#why-hydration-important" className="flex items-center">
              <span className="mr-2 text-xs">02</span>
              <span>Why Hydration Is Important When Taking Creatine</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#calculate-water-needs" className="flex items-center">
              <span className="mr-2 text-xs">03</span>
              <span>How to Calculate Your Daily Water Needs</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#calculator-works" className="flex items-center">
              <span className="mr-2 text-xs">04</span>
              <span>How the Creatine Water Calculator Works</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#best-water-intake" className="flex items-center">
              <span className="mr-2 text-xs">05</span>
              <span>What Type of Water Intake Is Best?</span>
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#hydration-signs" className="flex items-center">
              <span className="mr-2 text-xs">06</span>
              <span>Signs You're Not Drinking Enough (or Too Much)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroSection;
