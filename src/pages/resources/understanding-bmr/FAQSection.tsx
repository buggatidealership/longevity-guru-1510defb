
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  return (
    <section id="faq-section" className="my-12">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About BMR</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the difference between BMR and RMR?</AccordionTrigger>
          <AccordionContent>
            <p>
              Basal Metabolic Rate (BMR) and Resting Metabolic Rate (RMR) are similar but measured under different conditions:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>BMR</strong> is measured under very strict laboratory conditions—after a full night's sleep, in a fasting state (12+ hours), and in a controlled temperature environment with the subject completely at rest.</li>
              <li><strong>RMR</strong> is measured under less restrictive conditions and is typically 10-20% higher than BMR. It represents the energy expended at rest but doesn't require the strict conditions of BMR testing.</li>
            </ul>
            <p className="mt-2">
              For most practical purposes, the terms are often used interchangeably, though RMR is technically what most standard calculations estimate.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I change my BMR?</AccordionTrigger>
          <AccordionContent>
            <p>
              Yes, while some aspects of your BMR are determined by genetics and age, you can influence your metabolic rate through:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Increasing muscle mass:</strong> Through resistance training and adequate protein intake, you can build muscle tissue which is metabolically active and increases BMR.</li>
              <li><strong>Regular physical activity:</strong> Beyond the calories burned during exercise, consistent training can have lasting effects on metabolic function.</li>
              <li><strong>Proper nutrition:</strong> Severe caloric restriction can lower BMR. Eating adequate calories with sufficient protein can help maintain metabolic health.</li>
              <li><strong>Getting enough sleep:</strong> Chronic sleep deprivation can negatively impact metabolic hormones.</li>
              <li><strong>Managing stress:</strong> Chronic stress can affect hormonal balance and potentially impact metabolic function.</li>
            </ul>
            <p className="mt-2">
              While these strategies can help optimize your metabolism, it's important to have realistic expectations about the magnitude of changes possible. Most interventions typically result in relatively modest improvements to BMR.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Is a higher BMR always better?</AccordionTrigger>
          <AccordionContent>
            <p>
              Not necessarily. While a higher BMR can make weight management easier in our modern environment where caloric abundance is common, there are considerations:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>From an evolutionary perspective, a lower BMR could be advantageous in food-scarce environments by promoting energy efficiency.</li>
              <li>Some research suggests potential connections between lower metabolic rates and longevity, though this area is complex and still being studied.</li>
              <li>An abnormally high BMR can sometimes indicate underlying health issues like hyperthyroidism.</li>
            </ul>
            <p className="mt-2">
              The ideal is a metabolic rate that supports your health goals, activity levels, and overall wellbeing—not necessarily the highest possible BMR.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>How accurate are online BMR calculators?</AccordionTrigger>
          <AccordionContent>
            <p>
              Online BMR calculators provide estimates that are generally accurate within 10-15% for most individuals. Several factors affect accuracy:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Formula used:</strong> Different calculators may use different formulas (Harris-Benedict, Mifflin-St Jeor, etc.)</li>
              <li><strong>Individual variation:</strong> Genetic factors and detailed body composition aren't captured by standard formulas</li>
              <li><strong>Health status:</strong> Medical conditions can affect metabolism in ways not accounted for in calculators</li>
            </ul>
            <p className="mt-2">
              For most people, these calculators provide a reasonable starting point. If you need more precise measurements, indirect calorimetry tests conducted by healthcare professionals can provide more accurate results.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>Does BMR change when losing weight?</AccordionTrigger>
          <AccordionContent>
            <p>
              Yes, BMR typically decreases during weight loss for several reasons:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Reduced body mass:</strong> A smaller body requires less energy to maintain.</li>
              <li><strong>Adaptive thermogenesis:</strong> The body responds to caloric restriction by becoming more energy-efficient—a survival mechanism that evolved to protect against starvation.</li>
              <li><strong>Potential muscle loss:</strong> Without proper protein intake and resistance training, some weight loss can come from muscle tissue, further reducing BMR.</li>
            </ul>
            <p className="mt-2">
              These changes are one reason why weight loss often becomes more challenging over time and why maintaining muscle mass through strength training and adequate protein intake is important during weight loss.
            </p>
            <p className="mt-2">
              To minimize BMR reduction during weight loss: avoid severe caloric restriction, maintain protein intake, incorporate strength training, take diet breaks periodically, and adjust caloric intake gradually as you lose weight.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
