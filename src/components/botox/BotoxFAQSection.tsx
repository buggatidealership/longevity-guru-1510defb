
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BotoxFAQSection: React.FC = () => {
  return (
    <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
      <h3 className="text-xl font-medium mb-4">Frequently Asked Questions About Botox Treatments</h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">How many units of Botox do I need for my forehead?</AccordionTrigger>
          <AccordionContent>
            <p>For forehead lines, most patients require between 10-30 units of Botox, with the average being around 20 units. However, the exact amount depends on factors like gender (men typically need more units), muscle strength, age, and desired outcome. First-time Botox patients often start with lower doses to avoid over-freezing.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">How much should I expect to pay for Botox treatments?</AccordionTrigger>
          <AccordionContent>
            <p>Botox pricing varies widely by location, provider expertise, and facility type. In the United States, prices typically range from $10-20 per unit, making a full facial treatment cost between $300-600. Medical spas may offer lower prices than dermatology or plastic surgery practices. Some providers charge by treatment area rather than by unit.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">How long do Botox results last?</AccordionTrigger>
          <AccordionContent>
            <p>Botox typically lasts 3-4 months for most patients. Several factors affect longevity including metabolism, muscle strength, treatment area, and dosage. First-time users may find their results don't last as long as subsequent treatments. Regular maintenance treatments every 3-4 months are recommended to maintain results and may lead to longer-lasting effects over time.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">Is Botox treatment painful?</AccordionTrigger>
          <AccordionContent>
            <p>Most patients describe Botox injections as causing mild, brief discomfort similar to a small pinch. The needles used are very fine, and each injection takes just seconds. Some providers offer topical numbing cream or ice before treatment to minimize discomfort. The forehead and crow's feet areas are typically less sensitive than the glabellar (between eyebrows) region.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">Are there any side effects of Botox treatments?</AccordionTrigger>
          <AccordionContent>
            <p>Common side effects include temporary redness, swelling, or bruising at injection sites. Less common effects may include headache or flu-like symptoms. Rare but more serious side effects include eyelid drooping (ptosis), asymmetry, or difficulty swallowing if the product migrates. These risks are minimized when treatment is performed by qualified, experienced providers following proper techniques.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">How soon will I see results after my Botox treatment?</AccordionTrigger>
          <AccordionContent>
            <p>Initial effects may be noticeable within 24-48 hours, but full results typically take 7-14 days to develop as the product fully binds to nerve receptors. The timeline varies between individuals and treatment areas. Follow-up appointments are often scheduled 2 weeks after treatment to assess results and address any areas that might need adjustment.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BotoxFAQSection;
