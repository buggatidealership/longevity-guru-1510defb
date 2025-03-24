
import React from 'react';

const PredictionAccuracySection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="how-accurate-are-height-predictions">How Accurate Are Height Predictions?</h2>
      <p>
        Height prediction methods have inherent limitations. The mid-parental height formula typically provides estimates with an accuracy range of ±2–3 inches (5–7.5 cm). Several factors influence this accuracy:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Accuracy Limitations</h3>
      
      <p className="mt-3 mb-4">
        <strong>Genetic complexity:</strong> Height is influenced by multiple genes, not just those from parents. Siblings with the same parents can have significantly different adult heights due to genetic variation.
      </p>
      
      <p className="mb-4">
        <strong>Environmental factors:</strong> Nutrition, sleep quality, physical activity, and overall health all impact growth potential and can cause deviations from predictions.
      </p>
      
      <p className="mb-4">
        <strong>Timing of puberty:</strong> Early or late puberty can significantly alter growth patterns. Early-maturing children might initially appear taller than peers but may finish growing sooner.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Gender Differences in Prediction Accuracy</h3>
      <p>
        Height predictions tend to be:
      </p>
      
      <p className="mt-3 mb-4">
        <strong>More accurate for girls:</strong> Female growth patterns are generally more predictable because girls typically experience less variation in the timing and intensity of growth spurts.
      </p>
      
      <p className="mb-4">
        <strong>Less accurate for boys:</strong> Male growth patterns often show greater variability, particularly during puberty when growth spurts can be dramatic and occur across a wider age range.
      </p>
    </section>
  );
};

export default PredictionAccuracySection;
