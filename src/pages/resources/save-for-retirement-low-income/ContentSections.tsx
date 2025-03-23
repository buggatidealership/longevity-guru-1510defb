import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ContentSections: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4" id="possible-to-retire">Why It's Still Possible to Retire on a Low Income</h2>
      <p>
        The assumption that retirement saving requires a high income is one of the most damaging financial myths. Research consistently shows that consistency and time are more powerful factors than the absolute amount saved. According to a National Institute on Retirement Security study, even low-income households that maintain regular saving habits are significantly more likely to achieve retirement security than higher-income households with irregular savings patterns.
      </p>
      <p>
        The power of compound interest works regardless of income level. For example, saving just $50 monthly (about $12 weekly) from age 25 to 65 could grow to approximately $95,000 with a 7% average annual return. Increase that to $100 monthly, and your retirement fund could reach $190,000—without factoring in additional advantages like tax credits specifically designed for low-income savers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="monthly-savings-goals">Realistic Monthly Savings Goals by Income Bracket</h2>
      
      {/* Savings Goals Visual */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Chart showing realistic monthly retirement savings goals for different income brackets, with $1,500, $2,500, and $3,500 monthly income levels and their corresponding 5-15% recommended savings amounts" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Realistic savings goals by income bracket - start small and increase gradually</p>
      </div>
      
      <p>
        Setting realistic savings goals based on your income is crucial for long-term success. Here are practical monthly retirement savings targets by income level:
      </p>
      
      <p>
        <strong>For $1,500 monthly income:</strong> Start with just $25-45 monthly (about 2-3% of income). This might seem small, but it establishes the saving habit. As your financial situation improves, gradually increase to $75-120 monthly (5-8%). Use automatic transfers on payday so you don't have to make an active decision each month.
      </p>
      
      <p>
        <strong>For $2,500 monthly income:</strong> Begin with $75-125 monthly (3-5% of income) and work toward $250-375 (10-15%) over time. Prioritize any employer match if available, as this represents an immediate 100% return on your contribution. Consider supplementing with a Roth IRA for tax-free growth.
      </p>
      
      <p>
        <strong>For $3,500 monthly income:</strong> Target $175-350 monthly (5-10% of income). At this income level, you may be able to balance retirement savings with other financial goals like building an emergency fund or paying down high-interest debt. Aim to eventually reach the 15% savings rate recommended by many financial advisors.
      </p>
      
      <p>
        Remember that these targets are starting points. The key is to begin saving something—anything—and increase your contributions whenever possible, such as when you receive a raise, reduce expenses, or pay off debts.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="government-programs">Government Programs & Employer Retirement Plans</h2>
      
      {/* Government Programs Visual */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Infographic showing government retirement programs and employer plans including 401(k), IRA, Roth IRA and Saver's Credit with contribution limits and tax advantages for low-income savers" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Overview of retirement programs with special benefits for low-income savers</p>
      </div>
      
      <p>
        Several government programs and retirement plans are specifically designed to help lower-income individuals save for retirement:
      </p>
      
      <p>
        <strong>The Saver's Credit:</strong> This valuable tax credit is directly targeted at low to moderate-income savers. Depending on your income, you can receive a tax credit of 10%, 20%, or even 50% of the first $2,000 you contribute to a retirement account. For example, if you qualify for the 50% credit and contribute $1,000 to your IRA, you'll receive a $500 tax credit—effectively making your actual cost only $500. Visit the <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-savers-credit" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">IRS website</a> for current income limits and details.
      </p>
      
      <p>
        <strong>Roth IRA:</strong> This is often the ideal retirement vehicle for lower-income earners. Contributions are made with after-tax dollars, so you don't get an immediate tax deduction. However, because you're likely in a lower tax bracket now, this is actually advantageous. All future qualified withdrawals in retirement will be completely tax-free, including all the investment growth. Furthermore, you can withdraw your contributions (but not earnings) penalty-free at any time, providing flexibility in emergencies.
      </p>
      
      <p>
        <strong>Employer-Sponsored 401(k) Plans:</strong> If your employer offers a 401(k) with matching contributions, this should be your first priority—even before a Roth IRA. The match is essentially free money and provides an immediate 100% return on your contribution. Try to contribute at least enough to get the full employer match.
      </p>
      
      <p>
        <strong>myRA (my Retirement Account):</strong> Although this program was discontinued for new enrollments, it highlights the government's recognition of the need for simple retirement savings options for those without access to employer plans. Similar programs may be available in the future.
      </p>
      
      <p>
        For more information on retirement programs for lower-income savers, the <a href="https://www.consumerfinance.gov/consumer-tools/retirement/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau</a> and <a href="https://www.aarp.org/retirement/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">AARP</a> offer excellent resources.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="practical-strategies">Practical Saving Strategies That Actually Work</h2>
      <p>
        When every dollar counts, these practical strategies can help you find room in your budget for retirement savings:
      </p>
      
      <p>
        <strong>Automate your savings:</strong> Set up automatic transfers to your retirement account on payday, even if it's just $10 or $20 per check. Research shows that automation dramatically increases saving success because the money is set aside before you have a chance to spend it. Most Roth IRA providers allow you to start with very low initial investments and minimal recurring contributions.
      </p>
      
      <p>
        <strong>Optimize housing and transportation costs:</strong> These typically represent the two largest expenses in most budgets. Consider house-sharing, moving to a less expensive area, or using public transportation to significantly reduce these costs. A reduction of just $100 monthly in housing costs, invested for retirement, could grow to over $75,000 over 25 years (assuming 7% returns).
      </p>
      
      <p>
        <strong>Save your tax refund:</strong> The average tax refund is over $2,800. Saving even half of this amount annually in a retirement account could build a substantial nest egg over time. The IRS Form 8888 allows you to directly deposit your refund into a retirement account.
      </p>
      
      <p>
        <strong>Use micro-saving techniques:</strong> Apps that round up your purchases and invest the difference can make saving painless. For example, if you buy coffee for $3.75, the app rounds up to $4.00 and invests the $0.25 difference. These small amounts add up surprisingly quickly and can be directed to retirement accounts.
      </p>
      
      <p>
        <strong>Reduce invisible expenses:</strong> Audit your subscriptions, insurance policies, and phone plans for potential savings. Many people discover they're paying for services they rarely use or could get at lower rates. Redirecting these "found" dollars to retirement can be powerful.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="late-start">What If You Start Late? Catch-Up Strategies</h2>
      
      {/* Catch-Up Strategies Visual */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Older adult working part-time at a small business, representing retirement catch-up strategies including side income generation and phased retirement approaches for those starting their retirement savings later in life" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Phased retirement and side income can help those who start saving later in life</p>
      </div>
      
      <p>
        If you're starting to save for retirement later in life, don't be discouraged. While you'll need to be more aggressive with your approach, there are several effective catch-up strategies:
      </p>
      
      <p>
        <strong>Take advantage of catch-up contributions:</strong> Once you reach age 50, you can make additional "catch-up" contributions to your retirement accounts beyond the standard limits. For 2023, you can contribute an extra $1,000 to IRAs and an additional $7,500 to 401(k) plans.
      </p>
      
      <p>
        <strong>Develop side income streams:</strong> Consider using skills or hobbies to generate additional income specifically for retirement savings. Options include part-time work, freelancing, selling handcrafted items, tutoring, or providing services like pet-sitting or house-sitting. Dedicating even $200 monthly from side work directly to retirement can add up significantly.
      </p>
      
      <p>
        <strong>Plan for a phased retirement:</strong> Rather than retiring completely at a traditional age, consider reducing work hours gradually. This approach extends your earning years, allows your savings more time to grow, and reduces the number of full retirement years you need to fund. Many employers now offer flexible or part-time options for older workers.
      </p>
      
      <p>
        <strong>Maximize Social Security benefits:</strong> For each year you delay claiming Social Security beyond your full retirement age (up to age 70), your benefit increases by approximately 8%. If your health and work situation allow, this "delayed retirement credit" can significantly increase your lifetime benefits. Our <Link to="/retirement-savings-calculator" className="text-primary hover:underline">retirement calculator</Link> can help determine the optimal claiming age based on your specific circumstances.
      </p>
      
      <p>
        <strong>Consider strategic downsizing:</strong> As you approach retirement, evaluate whether downsizing your home or relocating to a lower-cost area could free up equity to invest for income. Moving from a high-cost area to one with lower housing and tax expenses can effectively stretch your retirement savings much further.
      </p>
      
      <p>
        Remember that even starting at age 50, consistent saving for 15-20 years can still build a meaningful retirement fund. The key is to maximize every opportunity and adjust expectations to align with your financial reality.
      </p>
      
      <p>
        For additional resources on financial planning, check out our <Link to="/resources" className="text-primary hover:underline">more personal finance guides</Link> which address various aspects of securing your financial future.
      </p>
    </>
  );
};

export default ContentSections;
