
import React from 'react';

const BiggerNotBetterSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4" id="bigger-isnt-better">Why Bigger Isn't Always Better</h2>
      <p className="mb-4">
        While it's natural to get excited about the transformation breast augmentation can create, experienced surgeons often caution against automatically choosing the largest possible implants. Board-certified plastic surgeon Dr. Jennifer Hayes explains: <em>"I regularly see patients who initially request very large implants revise to something smaller years later. The initial excitement about dramatic change often gives way to practical concerns about comfort, clothing fit, and long-term health."</em>
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-3">Physical Comfort Considerations</h3>
      <div className="space-y-2 mb-4">
        <p><strong>Weight:</strong> Larger implants are heavier—a 400cc silicone implant weighs about a pound</p>
        <p><strong>Back and neck strain:</strong> The added weight can contribute to discomfort, especially for petite women</p>
        <p><strong>Activity limitations:</strong> Very large implants may interfere with certain exercises or sports</p>
        <p><strong>Sleep discomfort:</strong> Some women find that large implants make comfortable sleeping positions limited</p>
      </div>
      
      <h3 className="text-xl font-medium mt-6 mb-3">Long-Term Aesthetic Considerations</h3>
      <div className="space-y-2 mb-6">
        <p><strong>Accelerated sagging:</strong> Larger, heavier implants may cause tissue stretching over time</p>
        <p><strong>Visible implant edges:</strong> Oversized implants may show obvious edges or rippling</p>
        <p><strong>Less natural movement:</strong> Very large implants tend to move less naturally with the body</p>
        <p><strong>More noticeable in clothing:</strong> Dramatic size increases can limit clothing options</p>
      </div>
      
      <p className="italic mb-6">
        "Finding the sweet spot between enhancement and proportion is key to long-term satisfaction. The goal isn't just to look great the first year—it's to create results you'll be happy with for many years to come." — Dr. Michael Chen, Board-Certified Plastic Surgeon
      </p>
    </section>
  );
};

export default BiggerNotBetterSection;
