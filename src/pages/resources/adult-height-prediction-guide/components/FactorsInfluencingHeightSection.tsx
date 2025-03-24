
import React from 'react';

const FactorsInfluencingHeightSection: React.FC = () => {
  return (
    <>
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
      <div className="mt-3 mb-4 space-y-2">
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
      <div className="mt-3 mb-4 space-y-2">
        <p>Moderate exercise stimulates growth hormone production</p>
        <p>Excessive high-impact exercise or extreme training before puberty might potentially limit growth in some cases</p>
        <p>Activities like swimming, basketball, and stretching exercises don't actually make you taller but may help maintain good posture and maximize existing height</p>
      </div>
      <p className="mb-4">
        The key is balanced physical activity that supports overall health without creating excessive physical stress during crucial growth periods.
      </p>
    </>
  );
};

export default FactorsInfluencingHeightSection;
