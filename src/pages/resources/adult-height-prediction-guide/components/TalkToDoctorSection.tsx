
import React from 'react';

const TalkToDoctorSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="when-to-talk-to-a-doctor">When to Talk to a Doctor</h2>
      <p>
        While variations in growth patterns are normal, certain signs warrant professional evaluation. Consult with a pediatrician if you notice:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Growth Pattern Red Flags</h3>
      
      <p className="mt-3 mb-4">
        <strong>Percentile shifts:</strong> If your child drops or jumps across multiple major percentile lines on growth charts
      </p>
      
      <p className="mb-4">
        <strong>Extreme percentiles:</strong> Consistent measurements below the 3rd percentile or above the 97th percentile
      </p>
      
      <p className="mb-4">
        <strong>Growth velocity changes:</strong> Unusually slow or rapid growth for age, particularly outside of expected growth spurt periods
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Puberty Timing Concerns</h3>
      
      <p className="mt-3 mb-4">
        <strong>Early puberty signs:</strong> For girls before age 8 or boys before age 9
      </p>
      
      <p className="mb-4">
        <strong>Delayed puberty:</strong> No signs of puberty in girls by age 13 or boys by age 14
      </p>
      
      <p className="mb-4">
        <strong>Significant height discrepancy:</strong> Child's height differs substantially from siblings or parents with no apparent explanation
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Other Concerning Signs</h3>
      
      <p className="mt-3 mb-4">
        Growth plateau (no measurable height increase over 6-12 months during childhood)
      </p>
      
      <p className="mb-4">
        Significant imbalance between height and weight percentiles
      </p>
      
      <p className="mb-4">
        Disproportionate body parts or unusual physical features
      </p>
      
      <p className="mb-4">
        Chronic fatigue, weakness, or other symptoms that might indicate underlying health issues
      </p>
    </section>
  );
};

export default TalkToDoctorSection;
