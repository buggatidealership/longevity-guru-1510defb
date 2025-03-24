
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ContentSections: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4" id="why-predicting-height-matters">Why Predicting Height Matters</h2>
      <p>
        Understanding how tall your child might become serves several practical purposes beyond mere curiosity:
      </p>
      
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Sports and activities planning:</strong> Some sports favor certain body types and heights. Early indications of adult height can help guide children toward activities where they may have natural advantages.</li>
        <li><strong>Nutritional planning:</strong> Children going through growth spurts have different nutritional needs. Anticipating these periods can help parents optimize nutrition.</li>
        <li><strong>Setting realistic expectations:</strong> Understanding the genetic foundations of height helps both parents and children set realistic expectations about physical development.</li>
        <li><strong>Health monitoring:</strong> Tracking a child's growth against predictions provides an additional data point for overall health monitoring. Significant deviations from expected growth patterns can sometimes indicate underlying health concerns.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="how-adult-height-calculator-works">How the Adult Height Calculator Works</h2>
      <p>
        Modern height prediction calculators use several scientific approaches to estimate a child's adult height. The most common methods include:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Mid-Parental Height Formula</h3>
      <p>
        The foundation of most height predictors is the mid-parental height formula, a time-tested method developed by pediatric endocrinologists. This approach calculates a child's genetic height potential based on their parents' heights:
      </p>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>For boys:</strong> (Father's height + Mother's height + 5 inches) ÷ 2</li>
        <li><strong>For girls:</strong> (Father's height + Mother's height − 5 inches) ÷ 2</li>
      </ul>
      <p>
        This formula accounts for the typical height difference between males and females and provides a target height. Most children (about 95%) will reach an adult height within 4 inches (10 cm) of this calculated target.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Current Height and Growth Percentiles</h3>
      <p>
        Modern calculators enhance the mid-parental method by incorporating:
      </p>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Current height percentile:</strong> Children tend to follow their established growth curve. A child consistently in the 75th percentile is likely to remain near that percentile through adulthood.</li>
        <li><strong>Age and gender:</strong> These factors help place measurements in proper context since growth patterns differ significantly between boys and girls.</li>
      </ul>

      {/* Image with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Parent measuring child's height at home" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Your child's growth curve is more than numbers — it's a story of development, health, and potential.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="how-accurate-are-height-predictions">How Accurate Are Height Predictions?</h2>
      <p>
        Height prediction methods have inherent limitations. The mid-parental height formula typically provides estimates with an accuracy range of ±2–3 inches (5–7.5 cm). Several factors influence this accuracy:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Accuracy Limitations</h3>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Genetic complexity:</strong> Height is influenced by multiple genes, not just those from parents. Siblings with the same parents can have significantly different adult heights due to genetic variation.</li>
        <li><strong>Environmental factors:</strong> Nutrition, sleep quality, physical activity, and overall health all impact growth potential and can cause deviations from predictions.</li>
        <li><strong>Timing of puberty:</strong> Early or late puberty can significantly alter growth patterns. Early-maturing children might initially appear taller than peers but may finish growing sooner.</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3">Gender Differences in Prediction Accuracy</h3>
      <p>
        Height predictions tend to be:
      </p>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>More accurate for girls:</strong> Female growth patterns are generally more predictable because girls typically experience less variation in the timing and intensity of growth spurts.</li>
        <li><strong>Less accurate for boys:</strong> Male growth patterns often show greater variability, particularly during puberty when growth spurts can be dramatic and occur across a wider age range.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="what-influences-final-height">What Influences a Child's Final Height</h2>
      <p>
        While genetics provides the foundation for height potential, several other factors play significant roles in determining whether a child reaches their full genetic height potential:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Genetic Factors (Approximately 80%)</h3>
      <p>
        Genetics is the primary determinant of height, accounting for approximately 80% of the variation in adult height within a population. Research from twin studies confirms this strong hereditary component. However, it's important to note that:
      </p>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li>Height is polygenic (influenced by many genes), not just from parents</li>
        <li>Family height patterns often continue across generations</li>
        <li>Some genetic conditions can significantly impact growth patterns</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3">Nutrition and Sleep (Approximately 20%)</h3>
      <p>
        Proper nutrition is essential for reaching full height potential. Key nutritional factors include:
      </p>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Protein intake:</strong> Essential for tissue growth and development</li>
        <li><strong>Calcium and Vitamin D:</strong> Critical for bone development and density</li>
        <li><strong>Overall caloric adequacy:</strong> Sufficient energy to support growth processes</li>
        <li><strong>Sleep quality:</strong> Growth hormone is primarily released during deep sleep</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3">Physical Activity</h3>
      <p>
        Regular physical activity supports healthy growth by:
      </p>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li>Promoting bone density and strength</li>
        <li>Stimulating growth hormone release</li>
        <li>Supporting overall metabolic health</li>
      </ul>
      <p>
        However, excessive high-impact exercise during critical growth periods can potentially impact growth plate development, which is why monitoring is important for young athletes in certain sports.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Hormonal and Health Conditions</h3>
      <p>
        Several medical factors can influence height:
      </p>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Growth hormone deficiency:</strong> Can significantly limit height potential without treatment</li>
        <li><strong>Thyroid disorders:</strong> Can affect growth rate and development</li>
        <li><strong>Chronic illnesses:</strong> Conditions affecting nutrient absorption or overall health can impact growth</li>
        <li><strong>Medications:</strong> Some medications, particularly long-term corticosteroids, may affect growth</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="tips-to-support-optimal-growth">Tips to Support Optimal Growth</h2>
      <p>
        While you can't change your child's genetic height potential, you can help ensure they reach their full potential through these evidence-based approaches:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Nutrition and Lifestyle</h3>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Balanced nutrition:</strong> Ensure adequate protein, calcium, vitamins, and minerals through a varied diet rich in whole foods.</li>
        <li><strong>Regular meals:</strong> Consistent eating patterns help maintain the steady nutrition needed for growth.</li>
        <li><strong>Adequate sleep:</strong> 8-10 hours of quality sleep for school-aged children and teenagers supports optimal growth hormone production.</li>
        <li><strong>Limit screen time:</strong> Excessive sedentary time can impact physical development and often displaces sleep and active play.</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3">Physical Activity</h3>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li>Encourage at least 60 minutes of physical activity daily</li>
        <li>Include a variety of activities that promote bone development, cardiovascular health, and strength</li>
        <li>Ensure activities are age-appropriate and enjoyable to encourage lifelong habits</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3">Health Monitoring</h3>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li>Maintain regular pediatric checkups to track growth patterns</li>
        <li>Discuss any concerns about growth rates or patterns with healthcare providers</li>
        <li>Follow through with recommended screenings and vaccinations for overall health</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="when-to-talk-to-a-doctor">When to Talk to a Doctor</h2>
      <p>
        While variations in growth patterns are normal, certain signs warrant professional evaluation. Consult with a pediatrician if you notice:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Growth Pattern Red Flags</h3>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Percentile shifts:</strong> If your child drops or jumps across multiple major percentile lines on growth charts</li>
        <li><strong>Extreme percentiles:</strong> Consistent measurements below the 3rd percentile or above the 97th percentile</li>
        <li><strong>Growth velocity changes:</strong> Unusually slow or rapid growth for age, particularly outside of expected growth spurt periods</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3">Puberty Timing Concerns</h3>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li><strong>Early puberty signs:</strong> For girls before age 8 or boys before age 9</li>
        <li><strong>Delayed puberty:</strong> No signs of puberty in girls by age 13 or boys by age 14</li>
        <li><strong>Significant height discrepancy:</strong> Child's height differs substantially from siblings or parents with no apparent explanation</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3">Other Concerning Signs</h3>
      <ul className="list-disc pl-6 mt-3 mb-4 space-y-2">
        <li>Growth plateau (no measurable height increase over 6-12 months during childhood)</li>
        <li>Significant imbalance between height and weight percentiles</li>
        <li>Disproportionate body parts or unusual physical features</li>
        <li>Chronic fatigue, weakness, or other symptoms that might indicate underlying health issues</li>
      </ul>
    </>
  );
};

export default ContentSections;
