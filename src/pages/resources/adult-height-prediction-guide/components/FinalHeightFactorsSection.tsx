
import React from 'react';

const FinalHeightFactorsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="what-influences-final-height">What Influences a Child's Final Height</h2>
      <p>
        While genetics provides the foundation for height potential, several other factors play significant roles in determining whether a child reaches their full genetic height potential:
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Genetic Factors (Approximately 80%)</h3>
      <p>
        Genetics is the primary determinant of height, accounting for approximately 80% of the variation in adult height within a population. Research from twin studies confirms this strong hereditary component. However, it's important to note that:
      </p>
      
      <p className="mt-3 mb-4">
        Height is polygenic (influenced by many genes), not just from parents.
      </p>
      
      <p className="mb-4">
        Family height patterns often continue across generations.
      </p>
      
      <p className="mb-4">
        Some genetic conditions can significantly impact growth patterns.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Nutrition and Sleep (Approximately 20%)</h3>
      <p>
        Proper nutrition is essential for reaching full height potential. Key nutritional factors include:
      </p>
      
      <p className="mt-3 mb-4">
        <strong>Protein intake:</strong> Essential for tissue growth and development.
      </p>
      
      <p className="mb-4">
        <strong>Calcium and Vitamin D:</strong> Critical for bone development and density.
      </p>
      
      <p className="mb-4">
        <strong>Overall caloric adequacy:</strong> Sufficient energy to support growth processes.
      </p>
      
      <p className="mb-4">
        <strong>Sleep quality:</strong> Growth hormone is primarily released during deep sleep.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Physical Activity</h3>
      <p>
        Regular physical activity supports healthy growth by:
      </p>
      
      <p className="mt-3 mb-4">
        Promoting bone density and strength.
      </p>
      
      <p className="mb-4">
        Stimulating growth hormone release.
      </p>
      
      <p className="mb-4">
        Supporting overall metabolic health.
      </p>
      
      <p>
        However, excessive high-impact exercise during critical growth periods can potentially impact growth plate development, which is why monitoring is important for young athletes in certain sports.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Hormonal and Health Conditions</h3>
      <p>
        Several medical factors can influence height:
      </p>
      
      <p className="mt-3 mb-4">
        <strong>Growth hormone deficiency:</strong> Can significantly limit height potential without treatment.
      </p>
      
      <p className="mb-4">
        <strong>Thyroid disorders:</strong> Can affect growth rate and development.
      </p>
      
      <p className="mb-4">
        <strong>Chronic illnesses:</strong> Conditions affecting nutrient absorption or overall health can impact growth.
      </p>
      
      <p className="mb-4">
        <strong>Medications:</strong> Some medications, particularly long-term corticosteroids, may affect growth.
      </p>
    </section>
  );
};

export default FinalHeightFactorsSection;
