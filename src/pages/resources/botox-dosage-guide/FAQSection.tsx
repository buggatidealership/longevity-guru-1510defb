
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How many units of Botox is too much?</h3>
            <p>
              While there's no one-size-fits-all answer, most practitioners consider 50-60 units in one session to be a moderate amount for full-face treatment. Exceeding 100 units in a single session could be considered excessive for cosmetic purposes and increases risk of side effects. The FDA has determined that doses up to 400 units every 12 weeks are safe for certain medical conditions, but cosmetic treatments typically use much less. Always follow your provider's recommendations based on your specific needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How often do I need Botox?</h3>
            <p>
              Most people need Botox every 3-4 months when first starting treatments. Over time, as muscles become weaker from regular treatment, some people can extend to 4-6 months between sessions. Factors that may decrease duration include high muscle activity, exercise frequency, metabolism rate, and lower dosing. Your provider can help establish an optimal treatment schedule based on your results.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Can I split treatments across different areas?</h3>
            <p>
              Yes, you can divide your Botox units across multiple areas during one session. Many providers offer combination treatments targeting several areas for a balanced, natural result. Popular combinations include treating crow's feet with forehead lines, or glabellar (frown) lines with forehead. Discussing your priorities with your provider will help determine the most effective distribution of units within your budget.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How much does a unit of Botox cost?</h3>
            <p>
              In the United States, Botox typically costs between $10-25 per unit depending on your location, provider expertise, and whether you're visiting a medical spa, dermatologist, or plastic surgeon. Major metropolitan areas generally have higher prices. Some providers offer package pricing where the per-unit cost decreases when purchasing a certain number of units. Always confirm if the quoted price is per unit or per area before your treatment.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
