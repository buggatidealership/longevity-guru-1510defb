
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4" id="real-examples">Real-World Testimonials and Examples</h2>
      <p className="mb-4">
        While every woman's experience is unique, these composite examples (based on typical outcomes) illustrate how different factors affect results:
      </p>
      
      <div className="space-y-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-1">Emily, 32</h4>
          <p className="text-sm mb-2"><strong>Profile:</strong> 5'4", 125 lbs, small frame, A cup starting size</p>
          <p className="text-sm mb-2"><strong>Goal:</strong> Natural-looking B/C cup for her petite frame</p>
          <p className="text-sm mb-2"><strong>Choice:</strong> 275cc moderate-profile silicone implants, placed under the muscle</p>
          <p className="text-sm"><strong>Outcome:</strong> "I went with slightly smaller implants than I initially wanted after trying sizers during my consultation. I'm so glad I did—they look completely natural on my frame but still give me the boost I wanted. I can still run comfortably and don't have to buy specialty bras."</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-1">Rachel, 28</h4>
          <p className="text-sm mb-2"><strong>Profile:</strong> 5'9", 155 lbs, athletic build, B cup starting size</p>
          <p className="text-sm mb-2"><strong>Goal:</strong> Proportional increase while maintaining her active lifestyle</p>
          <p className="text-sm mb-2"><strong>Choice:</strong> 375cc high-profile silicone implants, placed using the dual-plane technique</p>
          <p className="text-sm"><strong>Outcome:</strong> "With my broader shoulders and taller height, I needed something substantial to create the proportion I wanted. The high-profile implants give me projection without excessive width, and they look completely natural in athletic wear."</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-1">Nicole, 35</h4>
          <p className="text-sm mb-2"><strong>Profile:</strong> 5'6", 140 lbs, medium frame, post-pregnancy AA cup</p>
          <p className="text-sm mb-2"><strong>Goal:</strong> Restore volume lost after breastfeeding two children</p>
          <p className="text-sm mb-2"><strong>Choice:</strong> 325cc moderate-plus profile silicone implants with a small lift</p>
          <p className="text-sm"><strong>Outcome:</strong> "I just wanted to look like 'me' again after my body changed so much from pregnancy. The combination of the lift and moderately-sized implants restored my pre-pregnancy C cup, but with better shape. I can wear my old clothes again, and the results look and feel natural."</p>
        </div>
      </div>
      
      <p className="text-sm italic">
        Note: These are composite examples representing typical experiences rather than specific individuals.
      </p>
    </section>
  );
};

export default TestimonialsSection;
