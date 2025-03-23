
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How quickly can lifestyle changes impact longevity markers?</h3>
            <p>
              Research suggests that positive lifestyle changes can begin to show measurable improvements in biomarkers within 30-90 days. Studies have shown significant improvements in epigenetic age markers within 6 months of implementing comprehensive lifestyle changes. However, consistency is key—intermittent efforts yield substantially reduced benefits compared to sustained lifestyle modifications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Which lifestyle factors provide the highest return on investment for longevity?</h3>
            <p>
              Research indicates that nutrition and sleep optimization provide the highest initial return on investment, with measurable inflammatory marker reduction within weeks. For individuals beginning from a suboptimal baseline, these two interventions alone can significantly improve various health metrics within months. However, maximum longevity benefits come from addressing multiple lifestyle factors simultaneously.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How can I improve my longevity without extensive testing resources?</h3>
            <p>
              While advanced biomarker testing can enhance personalization, basic metrics provide significant insights: regular blood panels covering lipids, inflammatory markers, and metabolic indicators; sleep tracking; and basic fitness measurements. Focus on evidence-based approaches like a mostly plant-based diet, regular exercise combining strength and cardio training, sleep optimization, and stress management techniques.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Are longevity practices appropriate for all age groups or mainly for older individuals?</h3>
            <p>
              Longevity practices provide maximum benefits when implemented early. Research shows that people in their 20s and 30s who adopt healthy lifestyle practices show significantly better health trajectories compared to those beginning later in life. While specific approaches may need age-appropriate modifications, core components like nutrition, exercise, and sleep quality remain important across all age groups.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How do comprehensive lifestyle approaches compare to single interventions like intermittent fasting?</h3>
            <p>
              Research consistently shows that comprehensive lifestyle approaches outperform isolated interventions. While practices like intermittent fasting show benefits in studies, implementing multiple evidence-based lifestyle factors simultaneously creates synergistic effects that single interventions cannot match. Studies demonstrate that integrated approaches have more significant impacts on inflammatory markers, cellular health indicators, and overall longevity metrics.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
