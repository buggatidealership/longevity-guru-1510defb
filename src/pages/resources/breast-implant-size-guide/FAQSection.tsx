
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { generateFAQSchema } from '@/utils/schema-utils';

const FAQSection: React.FC = () => {
  // FAQ items for schema markup
  const faqItems = [
    {
      question: "How do I convert implant cc to cup size?",
      answer: "There's no direct formula for converting cc to cup sizes because cup size depends on band size and many anatomical factors. As a very rough estimate, 150-200cc often equals about one cup size increase for an average-framed woman. However, the same 200cc can look dramatically different on different body types. Consult with a board-certified plastic surgeon for personalized guidance."
    },
    {
      question: "Can I go from A cup to D cup in one surgery?",
      answer: "While it's physically possible to increase multiple cup sizes in one surgery, there are important considerations. Your skin needs to stretch to accommodate larger implants, and your tissues need to support the added weight. For some women, especially those with limited skin elasticity, a very dramatic increase might require a staged approach or additional procedures like a tissue expander. Most surgeons recommend choosing a size that works with your natural anatomy for optimal results and comfort."
    },
    {
      question: "What's the most popular breast implant size?",
      answer: "The most commonly selected implant sizes in the United States fall between 300cc and 400cc. However, this statistic shouldn't influence your personal decision. Your body proportions, existing breast tissue, lifestyle, and aesthetic goals should determine your ideal size—not popularity. What looks appropriate on someone else might not be right for your body or lifestyle needs."
    },
    {
      question: "Will the same implant size look different on different body types?",
      answer: "Yes, absolutely. The same 350cc implant will look completely different on a petite 5'2\" woman versus a 5'9\" woman with broader shoulders. Your height, weight, chest width, skin elasticity, and amount of existing breast tissue all dramatically influence how an implant appears. This is why proper sizing requires in-person assessment and why our calculator accounts for your height, weight, and chest measurements."
    },
    {
      question: "Is there a maximum implant size that's considered safe?",
      answer: "There's no universal maximum size that applies to everyone, but larger implants (generally over 500cc) do carry increased risks of complications like malposition, rippling, tissue thinning, and accelerated sagging. The maximum size that's appropriate for you depends on your chest width, skin elasticity, tissue coverage, and lifestyle. Most surgeons will recommend staying within a range that your tissues can safely support long-term."
    },
    {
      question: "How painful is breast augmentation recovery?",
      answer: "Most patients experience moderate discomfort rather than severe pain, typically managed with prescription pain medication for 3-5 days and then over-the-counter pain relievers. Submuscular placement (under the muscle) generally involves more discomfort than subglandular (over the muscle) placement. The majority of patients can return to desk jobs within a week, though complete recovery and unrestricted activity usually take 4-6 weeks."
    }
  ];

  // Generate schema for FAQs
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <h2 className="text-2xl font-semibold mt-12 mb-6" id="common-questions">Common Questions Answered</h2>
      
      <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium">
              How do I convert implant cc to cup size?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p>
                There's no direct formula for converting cc to cup sizes because cup size depends on band size and many anatomical factors. As a very rough estimate, 150-200cc often equals about one cup size increase for an average-framed woman. However, the same 200cc can look dramatically different on different body types.
              </p>
              <p className="mt-2">
                Factors that affect how implant volume translates to cup size include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your ribcage/underbust measurement</li>
                <li>Width of your natural breast base</li>
                <li>Amount of existing breast tissue</li>
                <li>How the implant is positioned on your chest</li>
                <li>The profile of the implant (low, moderate, high)</li>
              </ul>
              <p className="mt-2">
                This is why it's better to focus on how implants look on your specific body rather than aiming for a particular cup size. Consulting with a board-certified plastic surgeon is the best way to understand how different volumes will appear on your unique anatomy.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium">
              Can I go from A cup to D cup in one surgery?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p>
                While it's physically possible to increase multiple cup sizes in one surgery, there are important considerations. Your skin needs to stretch to accommodate larger implants, and your tissues need to support the added weight.
              </p>
              <p className="mt-2">
                For women with good skin elasticity and adequate chest width, a significant increase may be achievable in one procedure. However, for some women, especially those with limited skin elasticity, a very dramatic increase might require:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>A staged approach (increasing size over multiple surgeries)</li>
                <li>The use of tissue expanders prior to final implants</li>
                <li>Combining augmentation with a lift for better support</li>
              </ul>
              <p className="mt-2">
                Most surgeons recommend choosing a size that works with your natural anatomy for optimal results and comfort. Going too large relative to your frame can increase risks of complications like bottoming out, visible rippling, or accelerated sagging.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium">
              What's the most popular breast implant size?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p>
                The most commonly selected implant sizes in the United States fall between 300cc and 400cc. This moderate size range often achieves a noticeable enhancement while maintaining natural proportions for many body types.
              </p>
              <p className="mt-2">
                However, this statistic shouldn't influence your personal decision. Your body proportions, existing breast tissue, lifestyle, and aesthetic goals should determine your ideal size—not popularity. What looks appropriate on someone else might not be right for your body or lifestyle needs.
              </p>
              <p className="mt-2">
                Regional preferences also exist—larger implants (400-500cc+) tend to be more common in some areas like Miami and Los Angeles, while more moderate sizing is often preferred in the Northeast and Midwest. These trends reflect cultural differences in aesthetic ideals rather than medical recommendations.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-medium">
              Will the same implant size look different on different body types?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p>
                Yes, absolutely. The same 350cc implant will look completely different on a petite 5'2" woman versus a 5'9" woman with broader shoulders. Your height, weight, chest width, skin elasticity, and amount of existing breast tissue all dramatically influence how an implant appears.
              </p>
              <p className="mt-2">
                This visual difference occurs because:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>On a smaller frame, the same volume appears proportionally larger</li>
                <li>Wider chests distribute implant volume differently than narrower chests</li>
                <li>The existing breast tissue either blends with or is dominated by the implant volume</li>
                <li>Skin elasticity affects how the implant sits and projects</li>
              </ul>
              <p className="mt-2">
                This is why proper sizing requires in-person assessment and why our calculator accounts for your height, weight, and chest measurements. The goal is to find a size that enhances your unique proportions rather than imposing a one-size-fits-all approach.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-medium">
              Is there a maximum implant size that's considered safe?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p>
                There's no universal maximum size that applies to everyone, but larger implants (generally over 500cc) do carry increased risks of complications like malposition, rippling, tissue thinning, and accelerated sagging.
              </p>
              <p className="mt-2">
                The maximum size that's appropriate for you depends on:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your chest width (which limits implant base diameter)</li>
                <li>Skin elasticity and tissue thickness</li>
                <li>Lifestyle and physical activity level</li>
                <li>Long-term health considerations</li>
              </ul>
              <p className="mt-2">
                Most surgeons will recommend staying within a range that your tissues can safely support long-term. While very large implants are available (600cc+), they're typically only recommended for women with adequate tissue coverage, good elasticity, and wider chest measurements.
              </p>
              <p className="mt-2 italic">
                Remember that board-certified plastic surgeons may decline to place implants they believe are too large for your anatomy—this is a sign of ethical practice and concern for your long-term outcomes, not a limitation to be overcome.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-medium">
              How painful is breast augmentation recovery?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p>
                Most patients experience moderate discomfort rather than severe pain, typically managed with prescription pain medication for 3-5 days and then over-the-counter pain relievers.
              </p>
              <p className="mt-2">
                Recovery experiences vary based on:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Implant placement:</strong> Submuscular placement (under the muscle) generally involves more discomfort than subglandular (over the muscle) placement</li>
                <li><strong>Implant size:</strong> Larger implants may create more stretching and discomfort</li>
                <li><strong>Individual pain tolerance:</strong> This varies significantly between patients</li>
                <li><strong>Activity level:</strong> Following post-operative instructions for limited activity helps minimize pain</li>
              </ul>
              <p className="mt-2">
                The majority of patients can return to desk jobs within a week, though complete recovery and unrestricted activity usually take 4-6 weeks. Many surgeons now use enhanced recovery protocols with long-acting local anesthetics, muscle relaxants, and specialized surgical techniques that significantly improve comfort during the early recovery period.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FAQSection;
