
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-8">
      <section id="income-replacement">
        <h2 className="text-2xl font-semibold mt-8 mb-4">The Income Replacement Approach</h2>
        <p>
          Most financial experts recommend aiming to replace 70-80% of your pre-retirement income during retirement. This approach accounts for reduced expenses in retirement (no commuting costs, possibly paid-off mortgage, etc.) while maintaining your standard of living.
        </p>
        
        {/* First visual - Income replacement chart */}
        <div className="my-6">
          <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Income replacement chart showing the 70-80% rule - how pre-retirement income translates to retirement needs with sample calculations at different income levels" 
              className="object-cover w-full h-full" 
            />
          </AspectRatio>
          <p className="text-sm text-gray-500 mt-2 text-center">Income replacement visualization - aiming for 70-80% of pre-retirement income</p>
        </div>
        
        <p className="mt-4">
          <strong>Example:</strong> If your household earns $100,000 annually before retirement, you'd need approximately $70,000-$80,000 per year in retirement. Using the 4% withdrawal rule (a sustainable annual withdrawal rate), you would need $1.75-2 million saved ($70,000 ÷ 0.04 = $1.75 million).
        </p>
        <div className="bg-primary/5 p-4 rounded-lg mt-4">
          <p className="font-medium">Income Replacement Formula:</p>
          <p className="mt-2">Required Retirement Savings = (Current Annual Income × 0.75) ÷ 0.04</p>
        </div>
      </section>

      <section id="age-based-benchmarks">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Age-Based Savings Benchmarks</h2>
        <p>
          One practical approach is to establish retirement savings targets based on your age and income. Financial advisors typically recommend these savings milestones relative to your annual salary:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li><strong>By age 30:</strong> 1× your annual salary</li>
          <li><strong>By age 35:</strong> 2× your annual salary</li>
          <li><strong>By age 40:</strong> 3× your annual salary</li>
          <li><strong>By age 45:</strong> 4× your annual salary</li>
          <li><strong>By age 50:</strong> 6× your annual salary</li>
          <li><strong>By age 55:</strong> 7× your annual salary</li>
          <li><strong>By age 60:</strong> 8× your annual salary</li>
          <li><strong>By age 67:</strong> 10× your annual salary</li>
        </ul>
        
        {/* Second visual - Age-based savings benchmarks */}
        <div className="my-6">
          <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Retirement benchmarks chart showing financial milestones by age - person reviewing retirement planning document on computer" 
              className="object-cover w-full h-full" 
            />
          </AspectRatio>
          <p className="text-sm text-gray-500 mt-2 text-center">Age-based retirement savings milestones - multiples of annual salary by age</p>
        </div>
        
        <p className="mt-4">
          <strong>Example:</strong> If you're 40 years old earning $75,000 annually, your retirement savings target should be approximately $225,000 (3 × $75,000).
        </p>
      </section>

      <section id="saving-percentage">
        <h2 className="text-2xl font-semibold mt-8 mb-4">The Ideal Savings Percentage</h2>
        <p>
          Another approach focuses on how much of your current income you should be saving. Financial experts typically recommend saving 15% of your gross income for retirement, including any employer matches to retirement accounts.
        </p>
        <p className="mt-4">
          <strong>Example:</strong> If you earn $60,000 annually, aim to save $9,000 per year for retirement (15% of $60,000). If your employer matches 5% of your contributions, you would need to save 10% of your salary to achieve a 15% total savings rate.
        </p>
        <div className="bg-muted/50 p-4 rounded-lg mt-4">
          <p className="font-medium">Note: Adjust your savings rate based on your starting age:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>If starting at age 25: 15% of annual income</li>
            <li>If starting at age 35: 18% of annual income</li>
            <li>If starting at age 45: 23% of annual income</li>
            <li>If starting at age 55: 30%+ of annual income</li>
          </ul>
        </div>
      </section>

      <section id="real-life-examples">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Real-Life Retirement Savings Examples</h2>
        
        {/* Third visual - Compound growth visualization */}
        <div className="my-6">
          <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Compound growth chart showing how retirement savings grow exponentially over time when starting early vs. delaying contributions by 10 years" 
              className="object-cover w-full h-full" 
            />
          </AspectRatio>
          <p className="text-sm text-gray-500 mt-2 text-center">The power of compound growth in retirement savings - starting early vs. delaying contributions</p>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-5 mb-6">
          <h3 className="text-xl font-medium mb-2">Example 1: Early Career Saver (Age 25)</h3>
          <ul className="space-y-1">
            <li><strong>Income:</strong> $50,000/year</li>
            <li><strong>Recommended savings rate:</strong> 15% ($7,500/year)</li>
            <li><strong>Employer match:</strong> 4% ($2,000/year)</li>
            <li><strong>Personal contribution needed:</strong> 11% ($5,500/year)</li>
            <li><strong>Projected retirement savings at age 67:</strong> ~$1.6 million (assuming 7% average annual returns)</li>
            <li><strong>Monthly retirement income using 4% rule:</strong> ~$5,300</li>
          </ul>
        </div>
        
        <div className="bg-secondary/10 rounded-lg p-5 mb-6">
          <h3 className="text-xl font-medium mb-2">Example 2: Mid-Career Catch-Up (Age 40)</h3>
          <ul className="space-y-1">
            <li><strong>Income:</strong> $80,000/year</li>
            <li><strong>Current savings:</strong> $120,000 (1.5× salary)</li>
            <li><strong>Target by age 40:</strong> $240,000 (3× salary)</li>
            <li><strong>Savings gap:</strong> $120,000</li>
            <li><strong>Recommended savings rate:</strong> 20% ($16,000/year)</li>
            <li><strong>Projected retirement savings at age 67:</strong> ~$1.4 million (assuming 7% average annual returns)</li>
            <li><strong>Monthly retirement income using 4% rule:</strong> ~$4,700</li>
          </ul>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-5">
          <h3 className="text-xl font-medium mb-2">Example 3: Pre-Retirement Planning (Age 55)</h3>
          <ul className="space-y-1">
            <li><strong>Income:</strong> $95,000/year</li>
            <li><strong>Current savings:</strong> $420,000 (4.4× salary)</li>
            <li><strong>Target by age 55:</strong> $665,000 (7× salary)</li>
            <li><strong>Savings gap:</strong> $245,000</li>
            <li><strong>Recommended savings rate:</strong> 30% ($28,500/year)</li>
            <li><strong>Potential delayed retirement:</strong> Working until age 70 instead of 67</li>
            <li><strong>Projected retirement savings at age 70:</strong> ~$1.05 million</li>
            <li><strong>Monthly retirement income using 4% rule:</strong> ~$3,500</li>
          </ul>
        </div>
      </section>

      <section id="adjusting-factors">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Factors That May Require Saving More</h2>
        <p>
          Certain life circumstances may require you to save more than the standard recommendations:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li><strong>Longevity expectations:</strong> If <Link to="/life-expectancy-calculator" className="text-primary hover:underline">your life expectancy</Link> is higher than average due to family history or healthy lifestyle, add 5-10% to your savings target for each additional decade.</li>
          <li><strong>Healthcare needs:</strong> Chronic conditions or family health history may require additional retirement savings for medical expenses.</li>
          <li><strong>Early retirement goals:</strong> Retiring before age 65 requires more savings to cover additional years and potential healthcare costs before Medicare eligibility.</li>
          <li><strong>Supporting dependents:</strong> If you'll be supporting adult children or parents during retirement, your expenses will be higher.</li>
          <li><strong>Desired lifestyle:</strong> Extensive travel plans or expensive hobbies require additional savings above basic needs.</li>
        </ul>
      </section>

      <section id="strategic-accounts">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Strategic Account Planning</h2>
        <p>
          How you allocate your retirement savings across different account types can significantly impact your long-term growth and tax situation:
        </p>
        <ol className="list-decimal pl-6 mt-4 space-y-2">
          <li><strong>Employer-sponsored plans (401(k), 403(b)):</strong> Contribute at least enough to get the full employer match—this is essentially free money.</li>
          <li><strong>Health Savings Account (HSA):</strong> If eligible, max out HSA contributions for triple tax advantages (tax-deductible contributions, tax-free growth, and tax-free withdrawals for medical expenses).</li>
          <li><strong>Individual Retirement Accounts (IRAs):</strong> Consider traditional or Roth IRAs based on your current and expected future tax situations.</li>
          <li><strong>Taxable accounts:</strong> After maximizing tax-advantaged accounts, invest additional retirement savings in taxable brokerage accounts.</li>
        </ol>
        <p className="mt-4">
          <strong>Example investment allocation strategy:</strong> For someone in their 40s with moderate risk tolerance, consider 70% stocks (with 30% international exposure) and 30% bonds, gradually shifting to 50% stocks and 50% bonds by retirement age.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
