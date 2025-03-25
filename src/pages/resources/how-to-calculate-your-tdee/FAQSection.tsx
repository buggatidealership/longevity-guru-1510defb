
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faqs" className="my-12">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium">
            How often should I recalculate my TDEE?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Every 4–6 weeks or after major body changes (e.g., 5+ kg gained/lost). 
              Your metabolism adapts as your body composition changes, so regular recalculation 
              ensures you're working with accurate numbers.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-medium">
            Can I use a calculator instead of doing the math manually?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Absolutely. Our <a href="/tdee-calculator" className="text-blue-600 hover:underline">TDEE Calculator</a> does 
              the work for you instantly. It uses the same formulas but saves you time and prevents calculation errors.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-medium">
            What happens if I eat below my TDEE for too long?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              You may experience fatigue, hormonal imbalances, and slower metabolism. 
              Long-term severe caloric restriction can lead to nutrient deficiencies, 
              muscle loss, and metabolic adaptation that makes further weight loss more difficult.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-medium">
            Is TDEE the same as BMR?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              No, they're different. BMR (Basal Metabolic Rate) is the calories your body needs 
              at complete rest just to maintain basic functions. TDEE includes BMR plus all additional 
              energy used for daily activities, exercise, and digestion.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left font-medium">
            How accurate are TDEE calculations?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              TDEE formulas are estimates with about ±10% accuracy. For most people, they provide 
              a good starting point. To improve accuracy, track your weight and calorie intake for 
              2-3 weeks, then adjust based on actual results.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
