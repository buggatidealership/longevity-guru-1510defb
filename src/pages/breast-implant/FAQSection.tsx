
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  return (
    <div id="faq" className="mt-8 pt-4 border-t border-gray-200">
      <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-gray-200">
          <AccordionTrigger className="text-lg font-semibold">
            What does CC mean for breast implants?
          </AccordionTrigger>
          <AccordionContent>
            CC stands for cubic centimeters, which is the volume measurement used for breast implants. It represents the amount of silicone or saline contained within the implant shell. For reference, 30cc is approximately 1 fluid ounce. Common implant sizes range from 200cc to 800cc, with most patients selecting between 300cc to 400cc depending on their frame size and desired outcome.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2" className="border-b border-gray-200">
          <AccordionTrigger className="text-lg font-semibold">
            How accurate is this breast implant calculator?
          </AccordionTrigger>
          <AccordionContent>
            This calculator provides reasonable estimates based on standard anatomical relationships between measurements and implant volumes. However, it cannot account for all individual factors that surgeons consider. Many variables affect final results, including implant profile (projection), placement (over/under muscle), and your unique anatomy. Consider these results as educational guidelines rather than precise recommendations.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3" className="border-b border-gray-200">
          <AccordionTrigger className="text-lg font-semibold">
            How much do breast implants cost?
          </AccordionTrigger>
          <AccordionContent>
            Breast augmentation surgery typically costs between $4,000 and $10,000 in the United States. This price varies based on geographic location, surgeon experience, implant type (saline vs. silicone), and facility fees. Additional costs may include anesthesia, pre-operative tests, post-operative garments, and follow-up care. Some practices offer financing options to make the procedure more accessible.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4" className="border-b border-gray-200">
          <AccordionTrigger className="text-lg font-semibold">
            What's the difference between implant profiles?
          </AccordionTrigger>
          <AccordionContent>
            Implant profiles refer to how much the implant projects forward from the chest wall. Low profile implants are wider with less projection, moderate profile provides balanced width and projection, while high profile implants offer maximum projection with a narrower base. Ultra-high/extra-high profiles provide even more projection. Your body type, chest width, and aesthetic goals help determine which profile might be most appropriate.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5" className="border-b border-gray-200">
          <AccordionTrigger className="text-lg font-semibold">
            How long do breast implants last?
          </AccordionTrigger>
          <AccordionContent>
            Breast implants are not considered lifetime devices, but they don't automatically need replacement after a certain time period. Modern implants can last 10-20+ years without issues. Manufacturers typically offer warranties of 10 years. Reasons for eventual replacement might include capsular contracture, rupture, displacement, or simply wanting a size change. Regular monitoring through mammograms, MRIs, or ultrasounds is recommended.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
