
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections = () => {
  return (
    <div className="mb-16 space-y-12">
      <section id="alcohol-effects">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Alcohol Affects Your Body and Lifespan</h2>
        <div className="prose max-w-none">
          <p>
            Alcohol is a toxin that affects nearly every system in your body. When consumed, it's broken down in the liver, which can only process about one standard drink per hour. The excess circulates through your bloodstream, affecting various organs:
          </p>
          
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Brain:</strong> Impairs cognitive function and can lead to long-term neurological damage</li>
            <li><strong>Heart:</strong> Can increase blood pressure and cause irregular heartbeats</li>
            <li><strong>Liver:</strong> Leads to inflammation, fatty liver, hepatitis, and eventually cirrhosis</li>
            <li><strong>Pancreas:</strong> Can trigger inflammation that prevents proper digestion</li>
            <li><strong>Immune System:</strong> Weakens defenses, making you more susceptible to diseases</li>
            <li><strong>Cancer Risk:</strong> Increases risk of several cancers, including throat, liver, breast, and colon</li>
          </ul>
          
          <p className="mt-4">
            Research from the Global Burden of Disease study found that alcohol was the seventh leading risk factor for premature death and disability worldwide in 2016, accounting for 2.8 million deaths.
          </p>
        </div>
      </section>
      
      <section id="moderate-drinking">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Moderate Drinking: Benefits vs. Risks</h2>
        <div className="prose max-w-none">
          <p>
            For decades, moderate alcohol consumption (particularly red wine) was thought to offer some cardiovascular benefits. However, more recent and rigorous research has challenged this view:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h3 className="font-medium text-gray-900">What is moderate drinking?</h3>
            <p className="mt-2">According to health guidelines, moderate drinking is generally defined as:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Women: Up to 1 drink per day</li>
              <li>Men: Up to 2 drinks per day</li>
            </ul>
            <p className="mt-2 text-sm">A standard drink contains about 14 grams of pure alcohol, which is found in 12 ounces of beer (5% alcohol), 5 ounces of wine (12% alcohol), or 1.5 ounces of distilled spirits (40% alcohol).</p>
          </div>
          
          <p className="mt-4">
            The purported benefits of moderate alcohol consumption include:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Possible reduction in risk of heart disease (though this has been questioned by newer research)</li>
            <li>Potential decrease in risk of ischemic stroke</li>
            <li>Possible reduction in risk of diabetes</li>
          </ul>
          
          <p className="mt-4">
            However, a landmark 2018 study published in The Lancet analyzed data from 195 countries and concluded that "the safest level of drinking is none." This research found that the small potential cardiovascular benefits were outweighed by increased risks of cancer and other diseases.
          </p>
        </div>
      </section>
      
      <section id="heavy-drinking">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Heavy Drinking and Its Impact on Lifespan</h2>
        <div className="prose max-w-none">
          <p>
            Heavy or excessive drinking considerably shortens lifespan. Studies consistently show that people who regularly consume large amounts of alcohol have significantly higher mortality rates:
          </p>
          
          <div className="bg-red-50 p-4 rounded-lg mt-4">
            <h3 className="font-medium text-red-800">Heavy drinking is defined as:</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Women: 8 or more drinks per week</li>
              <li>Men: 15 or more drinks per week</li>
            </ul>
            <p className="mt-2 text-red-800 font-medium">Binge drinking (4+ drinks for women or 5+ drinks for men on a single occasion) is particularly harmful, even if done infrequently.</p>
          </div>
          
          <p className="mt-4">
            A study published in the journal Alcoholism: Clinical and Experimental Research found that people who drank heavily had a shortened life expectancy by an average of 24-28 years. Even those who drank moderately but had occasional heavy drinking episodes faced increased risks.
          </p>
          
          <p className="mt-4">
            Heavy drinking contributes to premature death through:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Liver disease and liver failure</li>
            <li>Increased cancer risk (particularly liver, esophageal, and colorectal cancers)</li>
            <li>Cardiovascular problems including cardiomyopathy and stroke</li>
            <li>Accidents and injuries</li>
            <li>Suicide and mental health issues</li>
          </ul>
        </div>
      </section>
      
      <section id="alcohol-calculator">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Alcohol's Impact on Lifespan</h2>
        <div className="prose max-w-none">
          <p>
            Understanding exactly how alcohol consumption affects your personal life expectancy can help you make informed decisions. Our Alcohol Impact Calculator uses evidence-based research to estimate how your current drinking habits might be affecting your lifespan.
          </p>
          
          <div className="mt-6 bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">Alcohol Lifespan Impact Calculator</h3>
            <p className="text-purple-800 mb-4">
              Get a personalized estimate of how your alcohol consumption might be affecting your life expectancy based on scientific research.
            </p>
            <Link 
              to="/alcohol-lifespan-calculator" 
              className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Calculate Now
            </Link>
          </div>
        </div>
      </section>
      
      <section id="reducing-consumption">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategies for Reducing Alcohol Consumption</h2>
        <div className="prose max-w-none">
          <p>
            If you're concerned about alcohol's impact on your longevity, consider these science-backed approaches to reduce your consumption:
          </p>
          
          <ul className="list-disc pl-5 mt-4 space-y-3">
            <li>
              <strong>Set clear limits:</strong> Decide in advance how many drinks you'll have in a day or week, and stick to it.
            </li>
            <li>
              <strong>Track your intake:</strong> Many apps can help you monitor your alcohol consumption patterns.
            </li>
            <li>
              <strong>Alternate with non-alcoholic beverages:</strong> Drink water or other non-alcoholic beverages between alcoholic drinks.
            </li>
            <li>
              <strong>Choose lower-alcohol options:</strong> Consider lower-alcohol beer or diluted mixed drinks.
            </li>
            <li>
              <strong>Identify triggers:</strong> Recognize situations that lead to excessive drinking and develop strategies to handle them.
            </li>
            <li>
              <strong>Seek support:</strong> For those with alcohol dependency, professional help from healthcare providers, support groups, or counselors can be crucial.
            </li>
          </ul>
          
          <p className="mt-4">
            Research shows that even small reductions in alcohol consumption can have measurable health benefits. A 2018 study in The Lancet found that reducing alcohol intake from two drinks to one drink daily was associated with a 7-8% reduction in all-cause mortality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
