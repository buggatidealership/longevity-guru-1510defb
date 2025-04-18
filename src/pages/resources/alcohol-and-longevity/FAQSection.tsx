import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Is it true that red wine is good for heart health?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-left">
            <p>
              Red wine contains antioxidants called polyphenols (including resveratrol) that some studies suggest might offer heart health benefits. However, more recent research indicates that the cardiovascular benefits of moderate alcohol consumption have likely been overstated, and many health authorities now believe these benefits can be obtained through other means without the risks associated with alcohol, such as eating grapes or drinking grape juice, regular exercise, and maintaining a healthy diet.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            How quickly can the body recover after quitting alcohol?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              The body begins recovering from alcohol quite quickly. Within the first 24 hours after quitting, your blood sugar typically stabilizes. After about a week, sleep quality improves and hydration normalizes throughout your body. By the one-month mark, liver fat can decrease by up to 15%, showing significant healing. Around the three-month point, blood pressure may noticeably reduce. After a full year of abstinence, your risk of cardiovascular events decreases significantly compared to when you were drinking.
            </p>
            <p className="mt-2">
              The extent and speed of recovery depend on previous drinking habits and individual health factors. For heavy drinkers, some damage may be permanent, but significant health improvements are still possible with abstinence.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Does the type of alcohol consumed (beer, wine, spirits) make a difference to health outcomes?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              While some studies suggest that wine (particularly red wine) might offer slightly more health benefits than beer or spirits due to its antioxidant content, the overall evidence indicates that the type of alcoholic beverage makes little difference to long-term health outcomes. The most important factor is the amount of alcohol consumed, not the form in which it's consumed. The ethanol (pure alcohol) content is what primarily affects health, and this is present in all alcoholic beverages.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            How does alcohol affect aging and longevity at the cellular level?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              At the cellular level, alcohol accelerates aging through several complex mechanisms. It significantly increases oxidative stress throughout the body, causing direct damage to cells and their components. Alcohol consumption disrupts cellular mitochondrial function, hampering the cell's ability to produce energy efficiently. The substance promotes widespread inflammation throughout the body, a key driver of many age-related diseases. Research suggests alcohol may accelerate telomere shortening, a significant marker of cellular aging. Additionally, alcohol interferes with the body's DNA repair mechanisms, leading to accumulating genetic damage over time. Finally, it disrupts hormone balance and metabolic processes that maintain cellular health. These combined cellular effects contribute to accelerated aging and the development of age-related diseases, ultimately impacting longevity.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            Can occasional binge drinking be worse than regular moderate drinking?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              Yes, research suggests that occasional binge drinking can be more harmful than consistent moderate drinking, even if the total weekly alcohol consumption is the same. Binge drinking places acute stress on the body's systems, particularly the liver, heart, and brain. It's associated with increased risk of accidents, injury, alcohol poisoning, and irregular heartbeats (arrhythmias). The pattern of consumption matters significantly – having 7 drinks in one night is more harmful than having one drink each night for a week, even though the total amount is the same.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
