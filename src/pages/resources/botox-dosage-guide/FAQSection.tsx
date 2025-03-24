
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
              Several factors may decrease the duration of your results. Patients with high muscle activity from frequent expressions typically need more frequent treatments. Those who engage in regular intense exercise often metabolize Botox faster, reducing its longevity. People with naturally fast metabolisms may see shorter-lasting results. Additionally, if your initial dose was on the lower side, the effects may wear off more quickly than with a more robust treatment.
            </p>
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
              Popular combinations include treating forehead lines together with glabellar (frown) lines for a more harmonious upper face appearance. Many patients also combine crow's feet treatment with forehead lines to address the most visible signs of aging. For comprehensive facial rejuvenation, some opt for treating the entire upper face (forehead, glabella, crow's feet) along with bunny lines on the nose. Those concerned with facial contouring might combine jawline slimming treatments with chin dimpling reduction for improved lower face definition.
            </p>
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
