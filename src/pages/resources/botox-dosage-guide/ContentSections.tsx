
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 id="introduction" className="text-2xl font-semibold mb-4 text-left">Understanding Botox Dosage</h2>
        <p className="mb-4 text-left">
          Botox dosage is measured in "units," which represent a standardized amount of the botulinum toxin's activity. 
          These units are not volume measurements like milliliters but rather indicate the biological activity or 
          potency of the neurotoxin. Most cosmetic Botox treatments in the United States use Botox (onabotulinumtoxinA), 
          though similar products like Dysport, Xeomin, and Jeuveau work on the same principle with different unit equivalencies.
        </p>
        <p className="text-left">
          FDA-approved dosages vary by treatment area, and the amounts discussed in this guide reflect average clinical practice. 
          It's important to understand that these are general guidelines—your provider will customize your treatment based 
          on your unique facial anatomy and goals.
        </p>
      </section>

      <section>
        <h2 id="typical-ranges" className="text-2xl font-semibold mb-4 text-left">Typical Botox Unit Ranges by Area</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-primary/10">
                <th className="border px-4 py-2 text-left">Facial Area</th>
                <th className="border px-4 py-2 text-left">Typical Unit Range</th>
                <th className="border px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-medium">Forehead (Frontalis)</td>
                <td className="border px-4 py-2">10–20 units</td>
                <td className="border px-4 py-2">Higher amounts for deeper lines, men typically need more</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">Glabellar Lines (Frown Lines)</td>
                <td className="border px-4 py-2">15–25 units</td>
                <td className="border px-4 py-2">Strong "11" lines may need the higher end of the range</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">Crow's Feet</td>
                <td className="border px-4 py-2">6–15 units per side</td>
                <td className="border px-4 py-2">Precise placement affects smile authenticity</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">Bunny Lines (Nose)</td>
                <td className="border px-4 py-2">2–5 units per side</td>
                <td className="border px-4 py-2">Small area requiring precision</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">Masseters (Jaw Slimming)</td>
                <td className="border px-4 py-2">25–50 units per side</td>
                <td className="border px-4 py-2">Higher doses for bruxism or larger muscles</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">Platysmal Bands (Neck)</td>
                <td className="border px-4 py-2">20–60 units total</td>
                <td className="border px-4 py-2">Complex area that may require combination treatments</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">Lip Flip</td>
                <td className="border px-4 py-2">2–6 units</td>
                <td className="border px-4 py-2">Very subtle effect, overly high doses can affect speech</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-gray-500 italic text-left">
          Note: These ranges represent typical clinical practice but may vary based on provider preference, 
          technique, and individual patient factors.
        </p>
      </section>

      <section>
        <h2 id="influencing-factors" className="text-2xl font-semibold mb-4">Factors That Influence Botox Dosage</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Gender Differences</h3>
            <p>
              Men typically require 1.5-2 times more units than women due to stronger muscle mass in the face. 
              Male foreheads might need 15-20 units versus 10-15 for women.
            </p>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Muscle Strength</h3>
            <p>
              People with stronger facial expressions and more dynamic movement typically need higher doses 
              to achieve the same level of reduction in muscle activity.
            </p>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Treatment History</h3>
            <p>
              Long-term Botox users may need fewer units over time as muscles naturally atrophy from 
              decreased use. First-time patients often need more.
            </p>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Treatment Goals</h3>
            <p>
              The level of reduction desired impacts dosage. Some prefer subtle movement retention, 
              while others want maximum line reduction.
            </p>
          </div>
        </div>
        
        <p>
          Your provider will take all these factors into account when determining your ideal dosage. 
          The goal is always to provide enough units to achieve the desired effect while maintaining 
          natural facial expressions and minimizing the risk of side effects.
        </p>
      </section>

      <section>
        <h2 id="calculator" className="text-2xl font-semibold mb-4">Using Our Botox Dosage Calculator</h2>
        <p className="mb-4">
          Our <Link to="/botox-calculator" className="text-primary hover:underline">Botox Dosage Calculator</Link> provides 
          personalized estimates based on your specific characteristics and treatment goals. Simply input your:
        </p>
        
        <div className="pl-6 mb-4 space-y-2">
          <p>Age range</p>
          <p>Gender</p>
          <p>Areas you're interested in treating</p>
          <p>Muscle strength (if known)</p>
          <p>Treatment preferences (subtle vs. more dramatic results)</p>
        </div>
        
        <p className="mb-4">
          The calculator will generate a customized estimate of how many units you might need for each area, 
          as well as a total recommended range. You can then use this information to:
        </p>
        
        <div className="pl-6 mb-4 space-y-2">
          <p>Budget more accurately for your treatment</p>
          <p>Have a more informed conversation with your provider</p>
          <p>Compare different treatment approaches</p>
          <p>Track your needs over time</p>
        </div>
        
        <p>
          Remember that while our calculator provides evidence-based estimates, your actual treatment plan 
          should always be determined in consultation with a qualified medical professional.
        </p>
      </section>

      <section>
        <h2 id="provider-questions" className="text-2xl font-semibold mb-4">What to Ask Your Provider</h2>
        <p className="mb-4">
          When you visit your provider, bring the results from our calculator and consider asking:
        </p>
        
        <div className="pl-6 mb-4 space-y-2">
          <p>"Is this dosage typical for someone with my facial anatomy?"</p>
          <p>"How might we adjust the units to achieve my specific goals?"</p>
          <p>"What areas do you think would benefit most from treatment?"</p>
          <p>"Should we start conservatively and add more if needed?"</p>
          <p>"How might my dosage needs change over time with regular treatments?"</p>
          <p>"What's your approach to natural-looking results?"</p>
        </div>
        
        <p>
          A good provider will take time to discuss these questions and tailor your treatment plan 
          accordingly. They should be transparent about the number of units they're using and why.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
