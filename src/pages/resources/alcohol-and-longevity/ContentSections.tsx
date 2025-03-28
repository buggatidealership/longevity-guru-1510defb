
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections = () => {
  return (
    <div className="mt-10 space-y-12">
      <section id="health-effects">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Health Effects of Alcohol</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Alcohol consumption affects nearly every organ system in the body. Here's how alcohol impacts different aspects of your health:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cardiovascular System</h3>
          <p>
            The relationship between alcohol and heart health follows a J-shaped curve. While some studies suggest that light-to-moderate 
            consumption (1 drink per day for women, up to 2 for men) may reduce the risk of heart disease, 
            regular heavy drinking increases the risk of:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Hypertension (high blood pressure)</li>
            <li>Cardiomyopathy (weakening of heart muscle)</li>
            <li>Arrhythmias (irregular heartbeat)</li>
            <li>Stroke (both ischemic and hemorrhagic)</li>
          </ul>
          <p>
            A 2018 study published in <em>The Lancet</em> analyzed data from 195 countries and concluded that "the safest level of drinking is none," 
            challenging the notion that moderate drinking offers net health benefits.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Liver Function</h3>
          <p>
            The liver bears the brunt of alcohol metabolism, making it particularly vulnerable to damage. Chronic alcohol consumption can lead to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fatty liver disease</li>
            <li>Alcoholic hepatitis</li>
            <li>Fibrosis and cirrhosis</li>
            <li>Increased risk of liver cancer</li>
          </ul>
          <p>
            According to the National Institute on Alcohol Abuse and Alcoholism, liver disease deaths from alcohol rose by 65% from 1999 to 2017,
            with the biggest increases among those aged 25-34.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Brain Health and Cognitive Function</h3>
          <p>
            Alcohol is a neurotoxin that can significantly impact brain structure and function:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Shrinkage of brain volume</li>
            <li>Disruption of neurotransmitter balance</li>
            <li>Impaired cognitive function</li>
            <li>Increased risk of dementia</li>
            <li>Wernicke-Korsakoff syndrome (in severe cases)</li>
          </ul>
          <p>
            A 2022 study published in <em>Nature Communications</em> found that even moderate drinking is associated with reduced brain volume, 
            with each additional drink per day linked to aging the brain by an additional two years.
          </p>
        </div>
      </section>
      
      <section id="longevity-impact">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact on Longevity and Mortality</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            When it comes to longevity, the evidence consistently shows that heavy drinking shortens lifespan. A person who consumes 
            2-3 alcoholic drinks per day can expect a reduction in life expectancy of approximately 1-2 years, while those who drink 
            more heavily (4+ drinks daily) may lose 4-5 years or more.
          </p>
          
          <p>
            The relationship between alcohol and all-cause mortality follows these general patterns:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Abstainers:</strong> Reference group</li>
            <li><strong>Light drinkers (≤1 drink/day):</strong> Possibly slight benefit or neutral effect</li>
            <li><strong>Moderate drinkers (1-2 drinks/day):</strong> Increased risk begins</li>
            <li><strong>Heavy drinkers (3+ drinks/day):</strong> Significantly increased risk</li>
          </ul>
          
          <p>
            A 2018 systematic analysis published in <em>The Lancet</em> examined data from 694 studies and concluded that alcohol use was 
            responsible for nearly 3 million deaths globally (5.3% of all deaths) and was the leading risk factor for premature mortality 
            and disability among people aged 15-49.
          </p>
          
          <p>
            Our <Link to="/life-expectancy-calculator" className="text-blue-600 hover:underline">Life Expectancy Calculator</Link> takes into account
            alcohol consumption patterns to provide personalized longevity estimates.
          </p>
        </div>
      </section>
      
      <section id="recommendations">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Evidence-Based Recommendations</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Based on the current scientific evidence, here are practical recommendations for those looking to optimize their health and longevity:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Optimal Health</h3>
          <p>
            The evidence increasingly suggests that for optimal health and longevity, abstaining from alcohol is the safest choice. 
            If you don't currently drink, there's no health reason to start.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Those Who Choose to Drink</h3>
          <p>
            If you choose to consume alcohol, these strategies may help mitigate risks:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>Limit consumption to no more than 3-4 drinks per week</li>
            <li>Avoid binge drinking (4+ drinks in a single session)</li>
            <li>Have several alcohol-free days each week</li>
            <li>Drink with food to slow alcohol absorption</li>
            <li>Stay hydrated by alternating alcoholic beverages with water</li>
            <li>Consider the type of alcohol (some research suggests red wine may have additional compounds with potential benefits)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">When to Consider Abstaining</h3>
          <p>
            Complete abstention is particularly advisable for:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>Pregnant women</li>
            <li>People with a personal or family history of addiction</li>
            <li>Those with liver disease or hepatitis</li>
            <li>People taking medications that interact with alcohol</li>
            <li>Individuals with a history of depression or anxiety disorders</li>
            <li>Those with a history of certain cancers, particularly cancers of the head, neck, esophagus, liver, colon, or breast</li>
          </ul>
          
          <p>
            Visit our <Link to="/resources" className="text-blue-600 hover:underline">Resources section</Link> for more health optimization guides.
          </p>
        </div>
      </section>
      
      <section id="measuring-impact">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Measuring Alcohol's Impact on Your Life</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            To understand how your specific drinking habits may be affecting your health and longevity, consider these approaches:
          </p>
          
          <ol className="list-decimal pl-6 mb-4">
            <li>
              <strong>Track your consumption accurately:</strong> Many people underestimate how much they drink. Record your intake 
              for several weeks to get an honest assessment.
            </li>
            <li>
              <strong>Use our alcohol calculators:</strong> Our <Link to="/alcohol-impact-calculator" className="text-blue-600 hover:underline">Alcohol Impact Calculator</Link> can 
              give you personalized insights based on your consumption patterns.
            </li>
            <li>
              <strong>Monitor key health markers:</strong> Regular check-ups that include liver function tests, blood pressure measurements, 
              and heart health assessments can help track the effects of alcohol on your body.
            </li>
            <li>
              <strong>Consider a trial period of abstinence:</strong> Many people report improvements in sleep quality, energy levels, 
              mental clarity, and even weight loss after just 30 days without alcohol.
            </li>
          </ol>
          
          <p>
            Remember that the relationship between alcohol and health is highly individual. Factors such as genetics, overall diet, 
            exercise habits, stress levels, and sleep quality all interact with alcohol's effects on your body.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
