
import React from 'react';
import { Link } from 'react-router-dom';

const HowHeightPredictionSection: React.FC = () => {
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
    </>
  );
};

export default HowHeightPredictionSection;
