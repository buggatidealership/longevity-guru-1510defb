
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How can I tell if I have a slow metabolism?</h3>
            <p>
              Rather than self-diagnosing, look for clinical symptoms that might indicate metabolic issues: unexplained weight gain despite consistent diet and exercise habits, chronic fatigue, cold intolerance (always feeling cold), dry skin, and constipation. These could indicate hypothyroidism or other conditions affecting metabolism. Consult a healthcare provider who can order appropriate tests, including thyroid function, to rule out medical causes. Comparing your calculated BMR to population norms can also provide insight, but remember that metabolic rate naturally varies between individuals based on muscle mass, age, and genetics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What boosts metabolism the fastest?</h3>
            <p>
              High-intensity interval training (HIIT) provides the quickest short-term metabolic boost, with studies showing it can elevate your metabolic rate for up to 24 hours after exercise through the "afterburn effect" (excess post-exercise oxygen consumption or EPOC). A single HIIT session can increase calorie burn by 6-15% during the recovery period. However, for sustainable long-term metabolic health, building muscle through regular strength training offers more lasting benefits since each pound of muscle tissue increases your resting metabolic rate. The combination of both, alongside sufficient protein intake, provides optimal results.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Do skinny people really have faster metabolisms?</h3>
            <p>
              This is largely a myth. Body composition matters more than weight alone. Two people of identical weight can have significantly different metabolic rates depending on their muscle-to-fat ratio. In fact, larger bodies (including those with more fat mass) actually burn more total calories at rest than smaller bodies, simply because they require more energy to maintain basic functions. However, pound-for-pound, individuals with higher muscle mass will have higher metabolic rates regardless of their size. The perception that naturally thin people can "eat whatever they want" often overlooks their overall activity levels, NEAT (non-exercise activity thermogenesis), and actual portion sizes over time.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
