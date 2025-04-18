
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How much should I save for retirement by age 30?</h3>
            <p>
              By age 30, aim to have saved the equivalent of your annual salary. If you earn $60,000, your retirement savings target should be approximately $60,000. If you're starting late, increase your savings rate to 15-20% of your income to catch up.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What is the 4% rule in retirement planning?</h3>
            <p>
              The 4% rule suggests you can withdraw 4% of your retirement portfolio in your first year of retirement, then adjust that amount for inflation each year. For example, with $1 million saved, you could withdraw $40,000 the first year. This rule is designed to provide a high probability that your savings will last at least 30 years.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Do I need to save more if I expect to live longer?</h3>
            <p>
              Yes, increased longevity requires larger retirement savings. For each additional decade you expect to live in retirement, consider increasing your savings target by approximately 25%. Modern longevity science suggests many people may live significantly longer than previous generations, making early and consistent saving even more important.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How do I adjust my retirement savings if I plan to retire early?</h3>
            <p>
              For early retirement, increase your savings rate substantially. A general rule is to save 25-30 times your expected annual expenses. For example, if you need $50,000 yearly, aim for $1.25-1.5 million. Additionally, consider healthcare costs before Medicare eligibility and potentially longer retirement periods.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Should I prioritize debt repayment or retirement savings?</h3>
            <p>
              It depends on interest rates. Always contribute enough to get any employer match on retirement accounts. Then prioritize paying off high-interest debt (above 6-7%) before additional retirement savings. For lower-interest debt, balance between debt repayment and retirement contributions, as the compound growth of investments may outpace interest costs.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
