
import React from 'react';

const OptimalGrowthTipsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="tips-to-support-optimal-growth">Tips to Support Optimal Growth</h2>
      <p className="mb-6">
        While you can't change your child's genetic height potential, you can help ensure they reach their full potential through these evidence-based approaches:
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-3">Nutrition and Lifestyle</h3>
          
          <p className="mb-3">
            <strong>Balanced nutrition:</strong> Ensure adequate protein, calcium, vitamins, and minerals through a varied diet rich in whole foods.
          </p>
          
          <p className="mb-3">
            <strong>Regular meals:</strong> Consistent eating patterns help maintain the steady nutrition needed for growth.
          </p>
          
          <p className="mb-3">
            <strong>Adequate sleep:</strong> 8-10 hours of quality sleep for school-aged children and teenagers supports optimal growth hormone production.
          </p>
          
          <p className="mb-3">
            <strong>Limit screen time:</strong> Excessive sedentary time can impact physical development and often displaces sleep and active play.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">Physical Activity</h3>
          
          <p className="mb-3">
            <strong>Daily movement:</strong> Encourage at least 60 minutes of physical activity daily for proper bone and muscle development.
          </p>
          
          <p className="mb-3">
            <strong>Varied activities:</strong> Include a mix of activities that promote bone development, cardiovascular health, and strength.
          </p>
          
          <p className="mb-3">
            <strong>Age-appropriate exercise:</strong> Ensure activities are suitable for your child's age and enjoyable to encourage lifelong healthy habits.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">Health Monitoring</h3>
          
          <p className="mb-3">
            <strong>Regular checkups:</strong> Maintain consistent pediatric appointments to track growth patterns and identify concerns early.
          </p>
          
          <p className="mb-3">
            <strong>Growth concerns:</strong> Discuss any worries about growth rates or patterns with healthcare providers promptly.
          </p>
          
          <p className="mb-3">
            <strong>Preventative care:</strong> Follow through with recommended screenings and vaccinations for overall health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OptimalGrowthTipsSection;
