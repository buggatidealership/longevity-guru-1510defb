
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About BMI</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a healthy BMI?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              According to standard guidelines, a BMI between 18.5 and 24.9 is considered "normal" or healthy for most adults. 
              However, what's truly "healthy" can vary based on individual factors.
            </p>
            <p>
              For some ethnic groups, especially those of Asian descent, health risks may begin at lower BMI values. 
              For very muscular individuals, a higher BMI might still represent good health. Consult with a healthcare 
              provider for personalized guidance on your healthy weight range.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Why doesn't BMI work for athletes or bodybuilders?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              BMI doesn't distinguish between muscle and fat. Muscle tissue is denser and heavier than fat tissue, so athletic 
              or muscular individuals often have higher BMIs despite having healthy (or low) body fat percentages.
            </p>
            <p>
              For example, many professional athletes and bodybuilders would be classified as "overweight" or even "obese" according 
              to BMI standards, despite being in excellent physical condition. In these cases, alternative methods like body composition 
              analysis provide more accurate health assessments.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I improve my BMI?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Yes, BMI can change with alterations in body weight. For those looking to lower their BMI, sustainable lifestyle 
              changes focused on nutrition and physical activity are most effective.
            </p>
            <p className="mb-2">
              For those who are underweight and need to increase their BMI, working with nutrition professionals to safely gain 
              weight through balanced nutrition and strength training may be beneficial.
            </p>
            <p>
              Remember that the goal should be overall health improvement, not just changing a number. Focus on sustainable habits 
              rather than quick fixes or extreme measures.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>How often should I check my BMI?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              For most adults, checking BMI a few times a year is sufficient. If you're actively working on weight management, 
              monthly checks can help track progress, but more frequent measurements aren't necessary and might lead to 
              fixation on small fluctuations.
            </p>
            <p>
              Weight and BMI naturally fluctuate due to factors like hydration, time of day, recent meals, and menstrual cycles. 
              Focus on long-term trends rather than day-to-day changes. If you're concerned about weight fluctuations, consult 
              with a healthcare provider.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>Are there better alternatives to BMI?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Several measurements can provide more comprehensive health insights than BMI alone:
            </p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li><strong>Waist circumference</strong> - Measures abdominal fat, which is linked to higher health risks</li>
              <li><strong>Waist-to-hip ratio</strong> - Indicates fat distribution patterns</li>
              <li><strong>Body fat percentage</strong> - Directly measures the proportion of fat in your body</li>
              <li><strong>DEXA scans</strong> - Provide detailed body composition analysis</li>
              <li><strong>Bioelectrical impedance analysis</strong> - Estimates body composition using electrical currents</li>
            </ul>
            <p>
              The most effective approach is to use multiple health markers rather than relying on any single measurement. Talk to 
              your healthcare provider about which measurements are most appropriate for your individual situation.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
