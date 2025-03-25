
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="mt-12 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h3 className="text-lg font-medium text-left">What is an ideal body weight calculator?</h3>
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              An ideal body weight calculator uses mathematical formulas like Devine, Robinson, Hamwi, and others to estimate a weight range considered healthy for your height. These calculators provide a reference point based on population averages, but should be used alongside other health measures like BMI, body composition, and individual health factors.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h3 className="text-lg font-medium text-left">How accurate are ideal body weight formulas?</h3>
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              Ideal body weight formulas have limitations in accuracy because they typically only consider height and sometimes gender. They don't account for important factors like muscle mass, body composition, age, ethnicity, or individual health conditions. These formulas provide general estimates rather than precise targets.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <h3 className="text-lg font-medium text-left">Which ideal body weight formula is most accurate?</h3>
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              No single formula is universally most accurate for everyone. The Devine formula is commonly used in medical settings, particularly for medication dosing. The Modified Devine formula adds adjustments for frame size. For a more comprehensive assessment, it's best to consider multiple formulas alongside other health metrics like BMI, waist circumference, and body fat percentage.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <h3 className="text-lg font-medium text-left">Why do different ideal weight calculators give different results?</h3>
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              Different calculators use different formulas (Devine, Robinson, Hamwi, Miller, etc.), each developed from different population studies with varying methodologies. Some formulas were developed decades ago with limited diversity in their study populations. Additionally, some calculators may include different adjustment factors for frame size, age, or other variables.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <h3 className="text-lg font-medium text-left">Should I try to reach my ideal body weight exactly?</h3>
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              No, you shouldn't fixate on reaching an exact number. Ideal body weight formulas provide general guidelines, not precise targets. A healthy weight range typically spans 10-15 pounds. Focus on overall health indicators like energy levels, blood pressure, cholesterol, blood sugar, physical fitness, and sustainable lifestyle habits rather than a specific number on the scale.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
