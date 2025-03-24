
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
      
      <p className="mt-3 mb-4"><strong>Sports and activities planning:</strong> Some sports favor certain body types and heights. Early indications of adult height can help guide children toward activities where they may have natural advantages.</p>
      <p className="mb-4"><strong>Nutritional planning:</strong> Children going through growth spurts have different nutritional needs. Anticipating these periods can help parents optimize nutrition.</p>
      <p className="mb-4"><strong>Setting realistic expectations:</strong> Understanding the genetic foundations of height helps both parents and children set realistic expectations about physical development.</p>
      <p className="mb-4"><strong>Health monitoring:</strong> Tracking a child's growth against predictions provides an additional data point for overall health monitoring. Significant deviations from expected growth patterns can sometimes indicate underlying health concerns.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="how-adult-height-calculator-works">How the Adult Height Calculator Works</h2>
      <p>
        Modern height prediction calculators use several scientific approaches to estimate a child's adult height. The most common methods include:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Mid-Parental Height Formula</h3>
      <p>
        The foundation of most height predictors is the mid-parental height formula, a time-tested method developed by pediatric endocrinologists. This approach calculates a child's genetic height potential based on their parents' heights:
      </p>
      <p className="mt-3 mb-4"><strong>For boys:</strong> (Father's height + Mother's height + 5 inches) ÷ 2</p>
      <p className="mb-4"><strong>For girls:</strong> (Father's height + Mother's height − 5 inches) ÷ 2</p>
      <p>
        This formula accounts for the typical height difference between males and females and provides a target height. Most children (about 95%) will reach an adult height within 4 inches (10 cm) of this calculated target.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Current Height and Growth Percentiles</h3>
      <p>
        Modern calculators enhance the mid-parental method by incorporating:
      </p>
      <p className="mt-3 mb-4"><strong>Current height percentile:</strong> Children tend to follow their established growth curve. A child consistently in the 75th percentile is likely to remain near that percentile through adulthood.</p>
      <p className="mb-4"><strong>Age and gender:</strong> These factors help place measurements in proper context since growth patterns differ significantly between boys and girls.</p>

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
      <p className="mt-3 mb-4"><strong>Genetic complexity:</strong> Height is influenced by multiple genes, not just those from parents. Siblings with the same parents can have significantly different adult heights due to genetic variation.</p>
      <p className="mb-4"><strong>Environmental factors:</strong> Nutrition, sleep quality, physical activity, and overall health all impact growth potential and can cause deviations from predictions.</p>
      <p className="mb-4"><strong>Timing of puberty:</strong> Early or late puberty can significantly alter growth patterns. Early-maturing children might initially appear taller than peers but may finish growing sooner.</p>

      <h3 className="text-xl font-medium mt-6 mb-3">Gender Differences in Prediction Accuracy</h3>
      <p>
        Height predictions tend to be:
      </p>
      <p className="mt-3 mb-4"><strong>More accurate for girls:</strong> Female growth patterns are generally more predictable because girls typically experience less variation in the timing and intensity of growth spurts.</p>
      <p className="mb-4"><strong>Less accurate for boys:</strong> Male growth patterns often show greater variability, particularly during puberty when growth spurts can be dramatic and occur across a wider age range.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="what-influences-final-height">What Influences a Child's Final Height</h2>
      <p>
        While genetics provides the foundation for height potential, several other factors play significant roles in determining whether a child reaches their full genetic height potential:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Genetic Factors (Approximately 80%)</h3>
      <p>
        Genetics is the primary determinant of height, accounting for approximately 80% of the variation in adult height within a population. Research from twin studies confirms this strong hereditary component. However, it's important to note that:
      </p>
      <p className="mt-3 mb-4">Height is polygenic (influenced by many genes), not just from parents.</p>
      <p className="mb-4">Family height patterns often continue across generations.</p>
      <p className="mb-4">Some genetic conditions can significantly impact growth patterns.</p>

      <h3 className="text-xl font-medium mt-6 mb-3">Nutrition and Sleep (Approximately 20%)</h3>
      <p>
        Proper nutrition is essential for reaching full height potential. Key nutritional factors include:
      </p>
      <p className="mt-3 mb-4"><strong>Protein intake:</strong> Essential for tissue growth and development.</p>
      <p className="mb-4"><strong>Calcium and Vitamin D:</strong> Critical for bone development and density.</p>
      <p className="mb-4"><strong>Overall caloric adequacy:</strong> Sufficient energy to support growth processes.</p>
      <p className="mb-4"><strong>Sleep quality:</strong> Growth hormone is primarily released during deep sleep.</p>

      <h3 className="text-xl font-medium mt-6 mb-3">Physical Activity</h3>
      <p>
        Regular physical activity supports healthy growth by:
      </p>
      <p className="mt-3 mb-4">Promoting bone density and strength.</p>
      <p className="mb-4">Stimulating growth hormone release.</p>
      <p className="mb-4">Supporting overall metabolic health.</p>
      <p>
        However, excessive high-impact exercise during critical growth periods can potentially impact growth plate development, which is why monitoring is important for young athletes in certain sports.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Hormonal and Health Conditions</h3>
      <p>
        Several medical factors can influence height:
      </p>
      <p className="mt-3 mb-4"><strong>Growth hormone deficiency:</strong> Can significantly limit height potential without treatment.</p>
      <p className="mb-4"><strong>Thyroid disorders:</strong> Can affect growth rate and development.</p>
      <p className="mb-4"><strong>Chronic illnesses:</strong> Conditions affecting nutrient absorption or overall health can impact growth.</p>
      <p className="mb-4"><strong>Medications:</strong> Some medications, particularly long-term corticosteroids, may affect growth.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="tips-to-support-optimal-growth">Tips to Support Optimal Growth</h2>
      <p>
        While you can't change your child's genetic height potential, you can help ensure they reach their full potential through these evidence-based approaches:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Nutrition and Lifestyle</h3>
      <p className="mt-3 mb-4"><strong>Balanced nutrition:</strong> Ensure adequate protein, calcium, vitamins, and minerals through a varied diet rich in whole foods.</p>
      <p className="mb-4"><strong>Regular meals:</strong> Consistent eating patterns help maintain the steady nutrition needed for growth.</p>
      <p className="mb-4"><strong>Adequate sleep:</strong> 8-10 hours of quality sleep for school-aged children and teenagers supports optimal growth hormone production.</p>
      <p className="mb-4"><strong>Limit screen time:</strong> Excessive sedentary time can impact physical development and often displaces sleep and active play.</p>

      <h3 className="text-xl font-medium mt-6 mb-3">Physical Activity</h3>
      <p className="mt-3 mb-4">Encourage at least 60 minutes of physical activity daily.</p>
      <p className="mb-4">Include a variety of activities that promote bone development, cardiovascular health, and strength.</p>
      <p className="mb-4">Ensure activities are age-appropriate and enjoyable to encourage lifelong habits.</p>

      <h3 className="text-xl font-medium mt-6 mb-3">Health Monitoring</h3>
      <p className="mt-3 mb-4">Maintain regular pediatric checkups to track growth patterns.</p>
      <p className="mb-4">Discuss any concerns about growth rates or patterns with healthcare providers.</p>
      <p className="mb-4">Follow through with recommended screenings and vaccinations for overall health.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="when-to-talk-to-a-doctor">When to Talk to a Doctor</h2>
      <p>
        While variations in growth patterns are normal, certain signs warrant professional evaluation. Consult with a pediatrician if you notice:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Growth Pattern Red Flags</h3>
      <p className="mt-3 mb-4"><strong>Percentile shifts:</strong> If your child drops or jumps across multiple major percentile lines on growth charts.</p>
      <p className="mb-4"><strong>Extreme percentiles:</strong> Consistent measurements below the 3rd percentile or above the 97th percentile.</p>
      <p className="mb-4"><strong>Growth velocity changes:</strong> Unusually slow or rapid growth for age, particularly outside of expected growth spurt periods.</p>

      <h3 className="text-xl font-medium mt-6 mb-3">Puberty Timing Concerns</h3>
      <p className="mt-3 mb-4"><strong>Early puberty signs:</strong> For girls before age 8 or boys before age 9.</p>
      <p className="mb-4"><strong>Delayed puberty:</strong> No signs of puberty in girls by age 13 or boys by age 14.</p>
      <p className="mb-4"><strong>Significant height discrepancy:</strong> Child's height differs substantially from siblings or parents with no apparent explanation.</p>

      <h3 className="text-xl font-medium mt-6 mb-3">Other Concerning Signs</h3>
      <p className="mt-3 mb-4">Growth plateau (no measurable height increase over 6-12 months during childhood).</p>
      <p className="mb-4">Significant imbalance between height and weight percentiles.</p>
      <p className="mb-4">Disproportionate body parts or unusual physical features.</p>
      <p className="mb-4">Chronic fatigue, weakness, or other symptoms that might indicate underlying health issues.</p>
    </>
  );
};

export default ContentSections;
