
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions About Alcohol and Longevity</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold text-left">
            Does moderate drinking actually have health benefits?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              The evidence for health benefits from moderate drinking has weakened considerably in recent years. 
              While some older studies suggested cardiovascular benefits from moderate alcohol consumption, more recent 
              and methodologically rigorous research has called these findings into question.
            </p>
            <p className="mt-2">
              Many earlier studies suffered from "abstainer bias" (comparing current drinkers to former drinkers who may 
              have quit due to health problems) and failed to control adequately for confounding lifestyle factors.
            </p>
            <p className="mt-2">
              Current scientific consensus is that any potential benefits are likely small and outweighed by risks, 
              even at low levels of consumption. For cardiovascular health specifically, there are safer ways to reduce 
              risk, such as physical activity, a Mediterranean diet, and stress management.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold text-left">
            Is red wine healthier than other alcoholic beverages?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              Red wine contains compounds like resveratrol, polyphenols, and flavonoids that have shown antioxidant 
              and anti-inflammatory properties in laboratory studies. However, the actual amounts of these compounds 
              in wine are relatively small, and you would need to consume unhealthy amounts of alcohol to get meaningful doses.
            </p>
            <p className="mt-2">
              Studies that have isolated the alcohol content from other components of different beverages generally 
              find that the type of drink makes little difference to overall health outcomes – the primary factor is 
              the amount of ethanol consumed.
            </p>
            <p className="mt-2">
              If you're interested in the potential benefits of compounds found in red wine, better sources include 
              grapes, berries, and dark chocolate, which provide these compounds without the negative effects of alcohol.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold text-left">
            How long does it take for the body to recover from heavy drinking?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              Recovery timelines vary depending on the duration and intensity of alcohol consumption, as well as individual factors:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Liver:</strong> The liver can begin regenerating within days of abstinence. Fatty liver may resolve 
              within 2-6 weeks. More severe conditions like fibrosis may improve over months to years, though cirrhosis 
              involves permanent scarring.</li>
              <li><strong>Brain:</strong> Cognitive improvements may begin within weeks, with substantial recovery possible 
              over 1-2 years of abstinence. Some studies show continued brain recovery for up to 7+ years.</li>
              <li><strong>Cardiovascular system:</strong> Blood pressure may normalize within weeks to months. The heart 
              muscle may recover from alcoholic cardiomyopathy over several months of abstinence.</li>
              <li><strong>Sleep quality:</strong> Sleep patterns typically begin improving within 1-2 months, though 
              achieving optimal sleep architecture may take longer.</li>
            </ul>
            <p className="mt-2">
              For a personalized assessment of how your drinking patterns affect your health, try our 
              <Link to="/alcohol-impact-calculator" className="text-blue-600 hover:underline"> Alcohol Impact Calculator</Link>.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold text-left">
            How does alcohol affect weight and metabolism?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              Alcohol can impact weight and metabolism in several ways:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Caloric density:</strong> Alcohol contains 7 calories per gram (more than carbohydrates 
              or protein), yet provides minimal nutritional value.</li>
              <li><strong>Metabolic priority:</strong> The body prioritizes metabolizing alcohol over other nutrients, 
              temporarily halting fat burning.</li>
              <li><strong>Appetite stimulation:</strong> Alcohol can increase hunger and reduce inhibitions around 
              food choices, leading to increased calorie consumption.</li>
              <li><strong>Disrupted sleep:</strong> Alcohol interferes with sleep quality, which can affect hormones 
              that regulate hunger and metabolism.</li>
              <li><strong>Reduced workout recovery:</strong> Regular drinking can impair muscle recovery and growth, 
              reducing the metabolic benefits of exercise.</li>
            </ul>
            <p className="mt-2">
              Many people who reduce or eliminate alcohol consumption report significant weight loss even without 
              other dietary changes. To understand your metabolic needs better, check our 
              <Link to="/tdee-calculator" className="text-blue-600 hover:underline"> TDEE Calculator</Link>.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold text-left">
            Does genetic makeup affect how alcohol impacts longevity?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            <p>
              Yes, genetic factors significantly influence how alcohol affects individual health and longevity:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Alcohol metabolism genes:</strong> Variations in genes like ADH (alcohol dehydrogenase) 
              and ALDH (aldehyde dehydrogenase) affect how efficiently your body processes alcohol and its toxic 
              byproducts. The "Asian flush" reaction is a well-known example of genetic variation in ALDH2.</li>
              <li><strong>Liver function genes:</strong> Genetic differences in liver enzyme production can affect 
              susceptibility to alcohol-induced liver damage.</li>
              <li><strong>Addiction vulnerability:</strong> Family history of alcoholism increases risk by 4-7 times, 
              with multiple genes contributing to this heightened vulnerability.</li>
              <li><strong>Cancer risk genes:</strong> Some genetic variations increase the risk of alcohol-related 
              cancers, particularly when combined with drinking.</li>
            </ul>
            <p className="mt-2">
              These genetic factors help explain why some heavy drinkers develop severe health problems relatively 
              quickly, while others seem more resilient despite similar consumption patterns. However, even those 
              with "favorable" genetics face increased health risks with regular drinking.
            </p>
            <p className="mt-2">
              For personalized health insights, take our 
              <Link to="/life-expectancy-calculator" className="text-blue-600 hover:underline"> Life Expectancy Calculator</Link> 
              to see how various lifestyle factors affect longevity.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
