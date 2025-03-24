
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 id="faqs" className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium py-4">
            How many units of Botox is too much?
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-gray-700">
            <p>
              While there's no one-size-fits-all answer, most practitioners consider 50-60 units in one session 
              to be a moderate amount for full-face treatment. Exceeding 100 units in a single session could be 
              considered excessive for cosmetic purposes and increases risk of side effects.
            </p>
            <p className="mt-2">
              The FDA has determined that doses up to 400 units every 12 weeks are safe for certain medical 
              conditions (like cervical dystonia), but cosmetic treatments typically use much less. The key is 
              finding the minimum effective dose for your desired outcome.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium py-4">
            How often do I need Botox?
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-gray-700">
            <p>
              Most people need Botox every 3-4 months when first starting treatments. Over time, as muscles 
              become weaker from regular treatment, some people can extend to 4-6 months between sessions.
            </p>
            <p className="mt-2">
              Factors that may decrease the duration of your results include:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>High muscle activity (frequent expressions)</li>
              <li>Regular intense exercise</li>
              <li>Fast metabolism</li>
              <li>Lower initial dosing</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium py-4">
            Can I split treatments across different areas?
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-gray-700">
            <p>
              Yes, you can divide your Botox units across multiple areas during one session. In fact, many providers 
              offer combination treatments targeting several areas for a balanced, natural result.
            </p>
            <p className="mt-2">
              Popular combinations include:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Forehead lines + glabellar (frown) lines</li>
              <li>Crow's feet + forehead lines</li>
              <li>Upper face (forehead, glabella, crow's feet) + bunny lines</li>
              <li>Jawline slimming + chin dimpling reduction</li>
            </ul>
            <p className="mt-2">
              Your provider can help determine the optimal distribution of units based on your priorities and budget.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium py-4">
            How much does a unit of Botox cost?
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-gray-700">
            <p>
              In the United States, Botox typically costs between $10-25 per unit depending on your location, provider 
              expertise, and whether you're visiting a medical spa, dermatologist, or plastic surgeon. Major metropolitan 
              areas generally have higher prices.
            </p>
            <p className="mt-2">
              Some providers offer package pricing where the per-unit cost decreases when purchasing a certain number of units. 
              Others charge by area rather than units. Always clarify pricing structure before treatment.
            </p>
            <p className="mt-2">
              Keep in mind that while cost is important, expertise and safety should be your primary considerations when 
              choosing a provider.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
