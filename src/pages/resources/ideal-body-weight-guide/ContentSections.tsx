
import React from 'react';

const ContentSections = () => {
  return (
    <div className="space-y-12 mt-8 text-left">
      <section id="what-is-ibw" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight mb-4">What Is Ideal Body Weight & Why Was It Created?</h2>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The concept of "ideal body weight" (IBW) originated in the early 20th century, primarily for insurance and pharmaceutical purposes—not as a comprehensive health metric. Insurance companies wanted to correlate weight with mortality risks, while the medical field needed standardized dosing guidelines for medications.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Dr. B.J. Devine created one of the first widely-used IBW formulas in 1974 to help calculate medication dosages. His formula wasn't designed to determine aesthetic ideals or even optimal health weights—it was developed to estimate pharmacokinetic parameters (how drugs move through the body) based on average body sizes.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Today, ideal body weight formulas are used in various health contexts, from setting weight loss goals to determining nutritional needs in clinical settings. However, many health professionals now recognize these formulas as overly simplistic starting points rather than definitive targets.
        </p>
      </section>
      
      <section id="common-formulas" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight mb-4">The 5 Most Common Ideal Weight Formulas Explained</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Several formulas have been developed over the decades, each with different approaches and assumptions. Here are the five most widely used:
        </p>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">1. Devine Formula (1974)</h3>
            <p className="text-gray-700 mb-2">The most commonly used formula in clinical settings:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Men:</strong> IBW (kg) = 50 + 2.3 × (height in inches - 60)</li>
              <li><strong>Women:</strong> IBW (kg) = 45.5 + 2.3 × (height in inches - 60)</li>
            </ul>
            <p className="text-gray-600 text-sm mt-2 italic">Most widely used in pharmaceutical contexts and medication dosing.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">2. Robinson Formula (1983)</h3>
            <p className="text-gray-700 mb-2">A slight modification of Devine's work:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Men:</strong> IBW (kg) = 52 + 1.9 × (height in inches - 60)</li>
              <li><strong>Women:</strong> IBW (kg) = 49 + 1.7 × (height in inches - 60)</li>
            </ul>
            <p className="text-gray-600 text-sm mt-2 italic">Often yields slightly higher values for shorter individuals compared to Devine.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">3. Hamwi Formula (1964)</h3>
            <p className="text-gray-700 mb-2">One of the earliest formulas, developed for quick estimations:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Men:</strong> IBW (kg) = 48 + 2.7 × (height in inches - 60)</li>
              <li><strong>Women:</strong> IBW (kg) = 45.5 + 2.2 × (height in inches - 60)</li>
            </ul>
            <p className="text-gray-600 text-sm mt-2 italic">Typically yields higher weights for taller individuals than other formulas.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">4. Miller Formula (1983)</h3>
            <p className="text-gray-700 mb-2">A lesser-known but scientifically validated approach:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Men:</strong> IBW (kg) = 56.2 + 1.41 × (height in inches - 60)</li>
              <li><strong>Women:</strong> IBW (kg) = 53.1 + 1.36 × (height in inches - 60)</li>
            </ul>
            <p className="text-gray-600 text-sm mt-2 italic">Generally provides higher base weights but less increase per inch compared to other formulas.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">5. Broca Index (Modified)</h3>
            <p className="text-gray-700 mb-2">A simplified approach with European origins:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Men:</strong> IBW (kg) = [height in cm - 100] - ([height in cm - 100] × 0.1)</li>
              <li><strong>Women:</strong> IBW (kg) = [height in cm - 100] - ([height in cm - 100] × 0.15)</li>
            </ul>
            <p className="text-gray-600 text-sm mt-2 italic">Widely used in European countries and easy to calculate mentally.</p>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mt-6">
          Some calculators also include adjustments for frame size, typically adding 10% for large frames and subtracting 10% for small frames. However, these adjustments are rarely based on rigorous scientific data and rely on subjective assessments of frame size.
        </p>
      </section>
      
      <section id="limitations" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Scientific Limitations of Ideal Body Weight Calculations</h2>
        
        <div className="relative float-right ml-6 mb-4 w-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1581595219315-a187bd094cdf?auto=format&fit=crop&w=600&q=80" 
            alt="Diverse group of people with different body types, illustrating that ideal weight varies by individual" 
            className="rounded-lg w-full"
            width={600}
            height={400}
          />
          <p className="text-xs text-gray-500 mt-1">Body composition varies widely among individuals of the same height.</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Despite their widespread use, ideal body weight formulas have significant scientific limitations that you should understand:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Limited variables:</strong> Most formulas consider only height and sex, ignoring crucial factors like age, ethnicity, muscle mass, and body composition.
          </li>
          <li>
            <strong>Outdated research:</strong> Many formulas were developed decades ago based on limited population samples that don't reflect today's diversity.
          </li>
          <li>
            <strong>No consideration of metabolic health:</strong> These formulas don't account for metabolic indicators like blood pressure, cholesterol, blood sugar, or fitness level.
          </li>
          <li>
            <strong>Body composition ignored:</strong> Two people can weigh exactly the same but have drastically different body compositions (fat vs. muscle ratio), which impacts health outcomes significantly.
          </li>
          <li>
            <strong>No adjustment for age:</strong> Healthy weight ranges typically shift with age, but most IBW formulas don't account for these natural changes.
          </li>
          <li>
            <strong>Athletic populations:</strong> Athletes and highly muscular individuals will almost always exceed their "ideal weight" without any health detriment.
          </li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          A 2016 study published in the <em>Journal of Clinical Medicine</em> found that IBW formulas consistently underestimated healthy weight in older adults and often provided unrealistic targets for athletic individuals. Research increasingly suggests that body composition and metabolic health markers are more relevant than simple weight-for-height calculations.
        </p>
      </section>
      
      <section id="better-metrics" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Better Ways to Assess Your Healthy Weight Range</h2>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Rather than relying solely on ideal body weight formulas, consider these more comprehensive approaches to determining your healthy weight range:
        </p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Body Mass Index (BMI) Range</h3>
            <p className="text-gray-700">
              While BMI has its own limitations, considering a range rather than a specific number provides more flexibility. A BMI between 18.5-24.9 is generally considered healthy, though this may not apply to everyone. Use our <a href="/bmi-calculator" className="text-blue-600 hover:text-blue-800">BMI Calculator</a> alongside other metrics.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Body Composition Analysis</h3>
            <p className="text-gray-700">
              Body fat percentage provides more meaningful information than weight alone. Methods include DEXA scans, bioelectrical impedance scales, or skinfold measurements. Healthy ranges vary by age and sex (generally 10-20% for men and 18-28% for women).
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Waist Circumference & Waist-to-Height Ratio</h3>
            <p className="text-gray-700">
              Abdominal fat correlates strongly with health risks. A waist measurement of less than half your height is a good target. Specifically, waist measurements exceeding 35 inches (88 cm) for women and 40 inches (102 cm) for men indicate increased health risks.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Metabolic Health Markers</h3>
            <p className="text-gray-700">
              Blood pressure, blood sugar, cholesterol levels, and resting heart rate provide valuable information about how your weight is affecting your health. Many people can be metabolically healthy across a range of weights.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Functional Fitness & Energy Levels</h3>
            <p className="text-gray-700">
              Consider your physical capabilities: Can you perform daily activities without excessive fatigue? Do you have energy throughout the day? Can you engage in physical activities you enjoy? These practical measures often matter more than a specific weight.
            </p>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          The American Council on Exercise and many health professionals now recommend using a combination of these metrics rather than any single measurement to assess healthy weight. Our <a href="/tdee-calculator" className="text-blue-600 hover:text-blue-800">TDEE Calculator</a> can also help you understand your body's energy needs based on your activity level.
        </p>
      </section>
      
      <section id="how-to-use" className="scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight mb-4">How to Use Our Ideal Body Weight Calculator</h2>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Our <a href="/ideal-body-weight-calculator" className="text-blue-600 hover:text-blue-800">Ideal Body Weight Calculator</a> incorporates multiple formulas to provide a comprehensive overview rather than a single target weight. Here's how to interpret and use the results effectively:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>
            <strong>View it as a range, not a target:</strong> Consider the results from different formulas as establishing a potential range rather than fixating on any single number.
          </li>
          <li>
            <strong>Use it as a starting point:</strong> The calculator provides a reference point based on population averages—a starting point for discussion with healthcare providers, not a final prescription.
          </li>
          <li>
            <strong>Consider your personal context:</strong> Your ethnicity, age, fitness level, and body composition all affect what weight is truly "ideal" for you.
          </li>
          <li>
            <strong>Combine with other assessments:</strong> Use the calculator alongside other tools like BMI, waist-to-height ratio, and body composition measurements.
          </li>
          <li>
            <strong>Focus on health improvements, not just weight:</strong> Pay attention to how dietary and activity changes affect your energy, mood, sleep quality, and other health markers—not just the number on the scale.
          </li>
        </ol>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          Many healthcare professionals now use ideal body weight calculations primarily in clinical contexts (like medication dosing) rather than as weight management targets. For general health, consider working with a healthcare provider who can help you determine appropriate personal goals based on your complete health profile.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <p className="text-gray-700">
            <strong>Remember:</strong> There is substantial evidence that health can be improved through positive lifestyle changes regardless of whether you reach a specific "ideal" weight. Regular physical activity, nutritious eating patterns, adequate sleep, and stress management benefit health at any size.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
