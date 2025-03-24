
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calculator } from 'lucide-react';

const ContentSections: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4" id="how-height-prediction-works">How Height Prediction Works</h2>
      <p className="mb-4">
        Height prediction is based on a combination of scientific methods, with each offering different levels of accuracy. Understanding these approaches can help you get a more realistic picture of potential adult height.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Mid-Parental Height Method</h3>
      <p className="mb-4">
        The most widely used approach outside clinical settings is the Mid-Parental Height Method, which estimates adult height based on the height of both biological parents. Here's how it works:
      </p>
      <div className="mb-4">
        <p><strong>For boys:</strong> Add mom's and dad's heights in inches, add 5 inches, then divide by 2</p>
        <p><strong>For girls:</strong> Add mom's and dad's heights in inches, subtract 5 inches, then divide by 2</p>
      </div>
      <p className="mb-4">
        <strong>Real-world example:</strong> If mom is 5'4" (64") and dad is 5'10" (70"), a son would have a predicted height of (64 + 70 + 5) ÷ 2 = 69.5", or approximately 5'9.5". A daughter would have a predicted height of (64 + 70 - 5) ÷ 2 = 64.5", or approximately 5'4.5".
      </p>
      <p className="mb-4">
        This method provides a rough estimate with about ±4 inches (10 cm) of accuracy. The range accounts for the complex nature of height inheritance and environmental influences.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Genetics vs. Environment</h3>
      <p className="mb-4">
        Research consistently shows that genetics accounts for approximately 80% of your height potential, with environmental factors making up the remaining 20%. This explains why height tends to run in families but isn't perfectly predictable.
      </p>
      <p className="mb-4">
        Even identical twins with the exact same genetic makeup can have slight height differences (usually less than 1 inch) due to environmental factors like nutrition, physical activity, and sleep quality during growth years.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Chronological Age vs. Bone Age</h3>
      <p className="mb-4">
        In clinical settings, pediatric endocrinologists often use bone age assessments alongside height predictions. Bone age is determined by X-raying the left wrist and hand to evaluate skeletal maturity.
      </p>
      <p className="mb-4">
        A child whose bone age is ahead of their chronological age may finish growing earlier, while those with delayed bone development might continue growing for longer. This crucial distinction helps doctors identify potential growth disorders and make more accurate height predictions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="factors-that-influence-height">Factors That Influence Height</h2>
      <p className="mb-4">
        While genetics sets the range of your potential height, several key factors determine whether you'll reach the upper or lower end of that range.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3" id="genetics">Genetics</h3>
      <p className="mb-4">
        Height is a polygenic trait, meaning it's influenced by many genes rather than just one or two. Scientists have identified over 700 genetic variants that contribute to height determination, making it one of the most complex inherited traits.
      </p>
      <p className="mb-4">
        Interestingly, very tall or very short parents tend to have children whose heights "regress toward the mean" — meaning they're likely to be closer to average height than their parents. This statistical phenomenon is why exceptionally tall parents often have children who are tall but not quite as tall as them.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3" id="nutrition">Nutrition</h3>
      <p className="mb-4">
        Proper nutrition during childhood and adolescence is crucial for maximizing height potential. Key nutrients that support optimal growth include:
      </p>
      <div className="mb-4">
        <p><strong>Protein:</strong> The building block of tissues, essential for growth</p>
        <p><strong>Calcium:</strong> Critical for bone development and density</p>
        <p><strong>Vitamin D:</strong> Helps the body absorb calcium and promotes bone growth</p>
        <p><strong>Zinc:</strong> Supports cell growth and immune function</p>
        <p><strong>Vitamin A:</strong> Important for bone health and development</p>
      </div>
      <p className="mb-4">
        Malnutrition or severe caloric restriction during growth years can prevent a child from reaching their genetic height potential. This explains why average heights have increased in many populations as nutrition has improved over generations.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3" id="sleep-and-hormones">Sleep and Hormones</h3>
      <p className="mb-4">
        Growth hormone is primarily released during deep sleep, making adequate, quality sleep essential for proper growth, especially during puberty. Research suggests that children and teenagers should get 8-10 hours of sleep daily for optimal growth hormone secretion.
      </p>
      <p className="mb-4">
        Several hormones regulate growth, with growth hormone (GH) and insulin-like growth factor 1 (IGF-1) being the most important. Thyroid hormone and sex hormones (estrogen and testosterone) also play crucial roles, particularly during puberty when growth velocity increases dramatically.
      </p>
      <p className="mb-4">
        Hormonal imbalances, whether from medical conditions or external factors, can significantly impact growth patterns and final adult height.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3" id="physical-activity">Physical Activity</h3>
      <p className="mb-4">
        Regular physical activity promotes healthy bone development and can contribute positively to growth. However, the relationship between exercise and height is nuanced:
      </p>
      <div className="mb-4">
        <p>Moderate exercise stimulates growth hormone production</p>
        <p>Excessive high-impact exercise or extreme training before puberty might potentially limit growth in some cases</p>
        <p>Activities like swimming, basketball, and stretching exercises don't actually make you taller but may help maintain good posture and maximize existing height</p>
      </div>
      <p className="mb-4">
        The key is balanced physical activity that supports overall health without creating excessive physical stress during crucial growth periods.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="growth-spurts-development">Growth Spurts & Development Milestones</h2>
      <p className="mb-4">
        Human growth doesn't occur at a steady pace but rather in a series of spurts, with the most dramatic growth acceleration happening during puberty.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Growth Patterns by Age</h3>
      <p className="mb-4">
        Human growth follows a predictable pattern, though timing varies between individuals:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Infancy (0-1 year):</strong> The fastest growth period, with length increasing by approximately.5-10 inches in the first year</p>
        <p><strong>Early Childhood (1-4 years):</strong> Growth slows to about 2-3 inches per year</p>
        <p><strong>Middle Childhood (4-puberty):</strong> Steady growth of approximately 2-2.5 inches per year</p>
        <p><strong>Puberty:</strong> The second major growth spurt, with peak velocity typically adding 3-4 inches per year during peak growth</p>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Boys vs. Girls: Different Timing</h3>
      <p className="mb-4">
        One of the most notable differences in growth patterns between boys and girls is the timing of their pubertal growth spurts:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Girls:</strong> Typically begin puberty between ages 8-13, with peak growth velocity around age 11-12</p>
        <p><strong>Boys:</strong> Usually start puberty between ages 9-14, with peak growth velocity around age 13-14</p>
      </div>
      <p className="mb-4">
        This difference in timing explains why many girls are temporarily taller than boys in early adolescence, before boys catch up and often surpass them in later teen years.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">When Growth Stops</h3>
      <p className="mb-4">
        Growth plates are specialized areas of developing cartilage near the ends of long bones. Once these growth plates "close" or harden into bone, height increase stops permanently.
      </p>
      <p className="mb-4">
        On average, growth plates close at these ages:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Girls:</strong> 13-15 years, with minimal growth after the first menstrual period</p>
        <p><strong>Boys:</strong> 15-17 years, though some may continue growing until age 18-19</p>
      </div>
      <p className="mb-4">
        Most people reach 98% of their adult height by age 16 (girls) or 18 (boys), though some "late bloomers" may continue growing into their early twenties.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="increase-height">Can You Really Increase Your Height?</h2>
      <p className="mb-4">
        With height being such a valued physical characteristic in many societies, it's no surprise that countless products and techniques claim to increase height. But what actually works?
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Height Myths Debunked</h3>
      <p className="mb-4">
        Let's address some common height enhancement claims:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Stretching exercises:</strong> While stretching may temporarily improve posture, it doesn't actually increase skeletal height</p>
        <p><strong>"Grow taller" supplements:</strong> Most have no scientific evidence supporting their claims and may contain unregulated ingredients</p>
        <p><strong>Hanging exercises:</strong> These may decompress the spine temporarily but don't create permanent height gains</p>
        <p><strong>Special diets:</strong> While good nutrition is important for growth, no specific food will make you taller beyond your genetic potential</p>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Medical Interventions</h3>
      <p className="mb-4">
        In specific medical situations, certain interventions may influence height:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Growth hormone therapy:</strong> Only effective for children with diagnosed growth hormone deficiency or certain specific medical conditions</p>
        <p><strong>Limb lengthening surgery:</strong> A major surgical procedure with significant risks, typically only performed for severe height discrepancies or dwarfism conditions</p>
      </div>
      <p className="mb-4">
        These medical interventions are not appropriate for children of normal height and should only be considered under the guidance of specialized physicians for medically necessary reasons.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Optimizing Natural Growth Potential</h3>
      <p className="mb-4">
        Instead of seeking ways to exceed genetic height potential, focus on these evidence-based approaches to help reach your natural maximum height during growth years:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p>Maintain balanced nutrition with adequate protein, calcium, and vitamin D</p>
        <p>Ensure consistent, quality sleep of 8-10 hours daily during childhood and adolescence</p>
        <p>Stay physically active with age-appropriate exercise</p>
        <p>Avoid smoking, alcohol, and drug use, which can negatively impact growth</p>
        <p>Manage any chronic medical conditions with proper treatment</p>
      </div>
      <p className="mb-4">
        For adults whose growth plates have closed, height increase is not possible without major medical intervention. However, improving posture through core-strengthening exercises and posture training can help maximize your existing height by 1-2 cm.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="using-calculator">Using the Adult Height Calculator</h2>
      <p className="mb-4">
        Our <Link to="/adult-height-predictor-calculator" className="text-primary hover:underline">Adult Height Predictor Calculator</Link> offers a science-based approach to estimating future adult height for children and adolescents, based on birth measurements and sex.
      </p>

      <div className="flex gap-3 items-center bg-primary/10 p-4 rounded-lg mb-6">
        <Calculator className="h-6 w-6 text-primary flex-shrink-0" />
        <p className="font-medium">
          <Link to="/adult-height-predictor-calculator" className="text-primary hover:underline">Try our Adult Height Predictor Calculator</Link> to get a personalized height estimate based on birth measurements.
        </p>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">How Accurate Are the Results?</h3>
      <p className="mb-4">
        Our calculator uses validated statistical models from peer-reviewed research to predict adult height based on birth measurements, particularly the Sorensen method. Like all prediction methods, it provides an estimate with a confidence interval rather than an exact guarantee.
      </p>
      <p className="mb-4">
        Research shows that birth measurements correlate with adult height with reasonable accuracy—typically within 6-7 cm (about 2.5 inches) for 95% of individuals. The calculator provides this prediction interval so you can understand the range of likely outcomes.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Limitations to Consider</h3>
      <p className="mb-4">
        When using any height prediction method, keep these limitations in mind:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p>No prediction method is 100% accurate due to the complex nature of growth</p>
        <p>Environmental factors during childhood and adolescence can influence final height</p>
        <p>Medical conditions affecting growth may not be accounted for in general prediction models</p>
        <p>Predictions work best for populations similar to those in the original research studies</p>
      </div>
      <p className="mb-4">
        For the most comprehensive height assessment, especially if there are concerns about growth, consult with a pediatrician or pediatric endocrinologist who can evaluate multiple factors and track growth over time.
      </p>
    </>
  );
};

export default ContentSections;
