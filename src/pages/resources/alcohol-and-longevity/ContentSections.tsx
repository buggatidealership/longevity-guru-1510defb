
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections = () => {
  return (
    <div className="mb-16 space-y-12">
      <section id="alcohol-effects">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Alcohol Affects Your Body and Lifespan</h2>
        <div className="prose max-w-none">
          <p>
            Alcohol is a toxin that affects nearly every system in your body. When consumed, it's broken down in the liver, which can only process about one standard drink per hour. The excess circulates through your bloodstream, affecting various organs.
          </p>
          
          <p className="mt-4">
            When alcohol enters your system, it immediately begins impacting your brain, impairing cognitive function and potentially leading to long-term neurological damage with continued use. Your cardiovascular system is affected as well, with alcohol consumption increasing blood pressure and sometimes causing irregular heartbeats. The liver bears the brunt of alcohol processing, leading to inflammation, fatty liver disease, hepatitis, and eventually cirrhosis in heavy drinkers. Additionally, your pancreas can become inflamed from alcohol use, preventing proper digestion. Alcohol also weakens your immune system, making you more susceptible to various diseases, while significantly increasing your risk of several cancers, including those of the throat, liver, breast, and colon.
          </p>
          
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
            <p className="mt-2">According to health guidelines, moderate drinking is generally defined as up to 1 drink per day for women and up to 2 drinks per day for men. A standard drink contains about 14 grams of pure alcohol, which is found in 12 ounces of beer (5% alcohol), 5 ounces of wine (12% alcohol), or 1.5 ounces of distilled spirits (40% alcohol).</p>
          </div>
          
          <p className="mt-4">
            The purported benefits of moderate alcohol consumption include a possible reduction in the risk of heart disease (though this has been questioned by newer research), a potential decrease in the risk of ischemic stroke, and a possible reduction in the risk of diabetes. However, these benefits appear to be smaller than previously believed.
          </p>
          
          <p className="mt-4">
            A landmark 2018 study published in The Lancet analyzed data from 195 countries and concluded that "the safest level of drinking is none." This research found that the small potential cardiovascular benefits were outweighed by increased risks of cancer and other diseases.
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
            <p className="mt-2">For women, consuming 8 or more drinks per week is considered heavy drinking, while for men, the threshold is 15 or more drinks per week. Binge drinking, which involves consuming 4+ drinks for women or 5+ drinks for men on a single occasion, is particularly harmful, even if done infrequently.</p>
          </div>
          
          <p className="mt-4">
            A study published in the journal Alcoholism: Clinical and Experimental Research found that people who drank heavily had a shortened life expectancy by an average of 24-28 years. Even those who drank moderately but had occasional heavy drinking episodes faced increased risks.
          </p>
          
          <p className="mt-4">
            Heavy drinking contributes to premature death through various mechanisms. Alcohol-induced liver disease and liver failure can develop after years of excessive consumption. Cancer risk increases substantially, with particular concerns for liver, esophageal, and colorectal cancers. Cardiovascular problems including cardiomyopathy and stroke become more likely with heavy drinking. Additionally, the impaired judgment associated with intoxication increases the likelihood of accidents and injuries. Mental health is also affected, with alcohol abuse being linked to higher rates of suicide and various mental health disorders.
          </p>
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
          
          <p className="mt-4">
            Setting clear limits before social situations can be extremely effective. Decide in advance how many drinks you'll have in a day or week, and commit to sticking to this boundary. Tracking your intake with one of the many available smartphone apps helps create accountability and awareness of your consumption patterns. When in social settings, try alternating between alcoholic beverages and non-alcoholic options like water or club soda, which helps reduce overall alcohol intake while staying hydrated. 
          </p>
          
          <p className="mt-4">
            Choosing lower-alcohol alternatives such as light beer or diluted mixed drinks can reduce your overall ethanol consumption even when drinking the same number of beverages. Taking time to identify your personal drinking triggers—whether stress, specific social situations, or certain emotions—allows you to develop targeted strategies to handle these situations without excessive drinking. For those struggling with alcohol dependency, seeking professional support from healthcare providers, counselors, or dedicated support groups provides the structured assistance necessary for meaningful change.
          </p>
          
          <p className="mt-4">
            Research shows that even small reductions in alcohol consumption can have measurable health benefits. A 2018 study in The Lancet found that reducing alcohol intake from two drinks to one drink daily was associated with a 7-8% reduction in all-cause mortality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
