
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6" id="faq">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h3 className="text-left font-medium">How much vitamin D should I take daily?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Most adults need 600-800 IU (15-20 mcg) of vitamin D daily according to official recommendations. However, these guidelines are considered conservative by many experts. Factors like limited sun exposure, darker skin tones, age over 50, or higher body weight may increase your needs to 1,000-2,000 IU daily. For deficiency treatment, doses of 4,000-5,000 IU may be prescribed under medical supervision. Use our calculator for a personalized estimate and confirm your status with a blood test.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h3 className="text-left font-medium">Can I get enough vitamin D from sunlight alone?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              It depends on several factors. Fair-skinned individuals might produce 10,000-20,000 IU from 15-30 minutes of midday summer sun exposure on face, arms, and legs. However, this varies based on latitude, season, cloud cover, skin tone, and sunscreen use. During winter months in northern latitudes (above 37°N), most people cannot produce sufficient vitamin D from sunlight and require dietary sources or supplements. Older adults and those with darker skin need more sun exposure to produce the same amount of vitamin D.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <h3 className="text-left font-medium">What foods are high in vitamin D?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Few foods naturally contain significant vitamin D. The best sources include fatty fish (salmon, mackerel, sardines), fish liver oils, egg yolks, and some mushrooms exposed to UV light. Wild-caught salmon contains 600-1,000 IU per 3-ounce serving, while egg yolks provide about 40 IU each. Fortified foods like milk (120 IU per cup), orange juice (100 IU per cup), and cereals (40-100 IU per serving) can provide vitamin D as well, but typically in smaller amounts than supplements. Most people cannot meet their vitamin D requirements through diet alone.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <h3 className="text-left font-medium">Is it possible to take too much vitamin D?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Yes. Vitamin D toxicity, though rare, can occur with excessive supplementation, typically at doses above 10,000 IU daily over extended periods. Symptoms include high blood calcium levels (hypercalcemia), nausea, vomiting, weakness, frequent urination, kidney problems, and in severe cases, confusion. You cannot overdose from sun exposure as your body regulates production. The official upper limit is set at 4,000 IU daily, though many experts consider up to 10,000 IU safe for most adults. Always follow healthcare provider recommendations for supplementation.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <h3 className="text-left font-medium">How do I know if I'm deficient in vitamin D?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Common symptoms of vitamin D deficiency include fatigue, bone pain, muscle weakness, mood changes, and impaired wound healing. However, many people have no obvious symptoms. The only reliable way to determine your vitamin D status is through a blood test measuring 25-hydroxyvitamin D levels. Levels below 20 ng/mL (50 nmol/L) indicate deficiency, while 21-29 ng/mL (51-74 nmol/L) is considered insufficient. Optimal levels are generally between 30-50 ng/mL (75-125 nmol/L). Risk factors include limited sun exposure, darker skin, obesity, age over 65, and certain medical conditions.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <h3 className="text-left font-medium">Should I take vitamin D with vitamin K2?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Many experts recommend taking vitamin D with vitamin K2, particularly if you're taking higher doses (1,000+ IU daily). Vitamin D enhances calcium absorption, while vitamin K2 helps direct that calcium to your bones rather than allowing it to accumulate in soft tissues like arteries. This complementary relationship may help prevent potential cardiovascular risks associated with high calcium levels. The recommended ratio is approximately 100 mcg of vitamin K2 (preferably as MK-7) for every 1,000-2,000 IU of vitamin D3. Many supplements now combine these nutrients in appropriate ratios.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-7">
          <AccordionTrigger>
            <h3 className="text-left font-medium">When is the best time to take vitamin D supplements?</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              Vitamin D is fat-soluble, so it's best absorbed when taken with a meal containing some fat. Many people find taking it with breakfast or lunch works well. There's no strong evidence that taking vitamin D at a specific time of day affects its efficacy. However, some research suggests that taking it in the morning might be preferable to evening dosing, as it could potentially interfere with melatonin production and sleep quality if taken too late in the day. Consistency is more important than timing—choose a regular time that works for your routine.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
