import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6 text-left">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2 text-left">How much can I save if I make $2,000 a month?</h3>
            <p className="text-left">
              On a $2,000 monthly income, aim to save 10-15% ($200-300) for retirement. Start with $50-100 monthly in a Roth IRA, increasing gradually. Maximize employer matches if available, and claim the Saver's Credit on taxes. Even saving $100 monthly from age 25 could grow to approximately $190,000 by age 65 (assuming 7% average returns).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2 text-left">Can I retire without a 401(k)?</h3>
            <p className="text-left">
              Yes, you can retire without a 401(k) using alternatives like IRAs, Roth IRAs, and taxable investment accounts. Many self-employed individuals and those without employer plans successfully retire using these options. An IRA allows annual contributions up to $6,500 (2023) with similar tax advantages to a 401(k), while Roth IRAs offer tax-free growth and withdrawals in retirement.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2 text-left">What's the best retirement plan for low-income earners?</h3>
            <p className="text-left">
              The Roth IRA is typically the best retirement plan for low-income earners because contributions are made after-tax (when your tax rate is low) and qualified withdrawals in retirement are completely tax-free. Additionally, low-income earners may qualify for the Saver's Credit, providing a tax credit of up to 50% on the first $2,000 contributed to a retirement account.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2 text-left">How can I boost retirement savings with minimal disposable income?</h3>
            <p className="text-left">
              To boost retirement savings with minimal disposable income, you can claim the Saver's Credit for a tax credit up to 50% of contributions. Consider saving tax refunds automatically into an IRA and using micro-saving apps to round up purchases and invest the difference. Many find success generating side income through gig work and dedicating those earnings specifically to retirement. Another effective strategy is to gradually increase savings by 1% of income annually, which allows you to adapt to the change without noticing a significant difference in your monthly budget.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2 text-left">Is Social Security enough to retire on if I can't save much?</h3>
            <p className="text-left">
              Social Security alone is generally insufficient for a comfortable retirement. The average monthly benefit is about $1,700 (2023), which is below the poverty line in many areas. While Social Security provides a foundation, even modest additional savings can significantly improve your retirement lifestyle. Focus on building supplemental income through any means possible, even if contributions seem small initially.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
