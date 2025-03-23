
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Can lifestyle changes genuinely increase life expectancy?</h3>
            <p>
              Yes, research consistently shows that lifestyle modifications like regular exercise, healthy diet, adequate sleep, and stress management can significantly increase life expectancy. Studies suggest these changes can add 10+ years to your life.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Which exercise is best for longevity?</h3>
            <p>
              A combination of moderate aerobic activity (like brisk walking or swimming) for 150 minutes weekly and strength training twice weekly offers the best longevity benefits. The most important factor is consistency rather than intensity.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What simple dietary change most impacts lifespan?</h3>
            <p>
              Reducing processed food consumption and increasing plant-based foods (vegetables, fruits, nuts, whole grains) has the most significant impact on longevity. The Mediterranean diet pattern is particularly associated with longer lifespans in multiple studies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How much sleep is optimal for longevity?</h3>
            <p>
              Research indicates 7-8 hours of quality sleep per night is optimal for longevity. Both regularly sleeping less than 6 or more than 9 hours is associated with increased mortality risk.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">At what age should I start making lifestyle changes for longevity?</h3>
            <p>
              The earlier you adopt healthy lifestyle habits, the greater the benefits, but research shows it's never too late to start. Even beginning healthy habits in your 50s, 60s, or 70s can significantly improve health outcomes and extend life expectancy.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
