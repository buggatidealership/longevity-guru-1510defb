
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { generateFAQSchema } from '@/utils/schema-utils';

const FAQSection: React.FC = () => {
  // FAQ items for schema generation
  const faqItems = [
    {
      question: "What is a healthy BMI?",
      answer: "According to standard guidelines, a BMI between 18.5 and 24.9 is considered 'normal' or healthy for most adults. However, this range may not be appropriate for everyone, as BMI doesn't account for factors like muscle mass, bone density, or ethnic differences. It's best to discuss your specific BMI with a healthcare provider who can consider your overall health profile."
    },
    {
      question: "Why doesn't BMI work for athletes or bodybuilders?",
      answer: "BMI doesn't distinguish between fat and muscle tissue. Since muscle is denser and heavier than fat, athletes and bodybuilders with significant muscle mass often have higher BMIs that would classify them as 'overweight' or even 'obese' despite having low body fat percentages. For these individuals, alternative measurements like body fat percentage, waist circumference, or body composition analysis provide more accurate health assessments."
    },
    {
      question: "Can I improve my BMI?",
      answer: "Yes, BMI can change based on weight loss or gain. If your BMI is in the overweight or obese categories and your doctor recommends weight loss, focusing on a balanced diet and regular physical activity can help lower your BMI. If you're underweight, working with healthcare providers to address underlying causes and develop a healthy weight gain plan can increase your BMI. However, focus on overall health improvements rather than just changing the number."
    },
    {
      question: "How often should I check my BMI?",
      answer: "For most adults, checking BMI once or twice a year is sufficient unless you're actively working on weight management under medical supervision. More frequent measurements might be recommended if you're implementing significant lifestyle changes or have health conditions affected by weight. Remember that small day-to-day weight fluctuations are normal and don't meaningfully impact your BMI."
    }
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      
      {/* Hidden script for FAQ schema */}
      <script type="application/ld+json">
        {JSON.stringify(generateFAQSchema(faqItems))}
      </script>
      
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What is a healthy BMI?</h3>
            <p>
              According to standard guidelines, a BMI between 18.5 and 24.9 is considered "normal" or healthy for most adults. However, this range may not be appropriate for everyone, as BMI doesn't account for factors like muscle mass, bone density, or ethnic differences. It's best to discuss your specific BMI with a healthcare provider who can consider your overall health profile.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Why doesn't BMI work for athletes or bodybuilders?</h3>
            <p>
              BMI doesn't distinguish between fat and muscle tissue. Since muscle is denser and heavier than fat, athletes and bodybuilders with significant muscle mass often have higher BMIs that would classify them as "overweight" or even "obese" despite having low body fat percentages. For these individuals, alternative measurements like body fat percentage, waist circumference, or body composition analysis provide more accurate health assessments.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Can I improve my BMI?</h3>
            <p>
              Yes, BMI can change based on weight loss or gain. If your BMI is in the overweight or obese categories and your doctor recommends weight loss, focusing on a balanced diet and regular physical activity can help lower your BMI. If you're underweight, working with healthcare providers to address underlying causes and develop a healthy weight gain plan can increase your BMI. However, focus on overall health improvements rather than just changing the number.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How often should I check my BMI?</h3>
            <p>
              For most adults, checking BMI once or twice a year is sufficient unless you're actively working on weight management under medical supervision. More frequent measurements might be recommended if you're implementing significant lifestyle changes or have health conditions affected by weight. Remember that small day-to-day weight fluctuations are normal and don't meaningfully impact your BMI.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
