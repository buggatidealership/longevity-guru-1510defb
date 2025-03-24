
import React from 'react';

const UnderstandingImplantSizesSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4" id="understanding-implant-sizes">Understanding Breast Implant Sizes</h2>
      <p className="mb-4">
        Unlike clothing sizes that vary between manufacturers, breast implant sizing follows a precise volumetric measurement system. The volume of an implant is measured in cubic centimeters (cc), which provides an exact, universal measurement regardless of manufacturer. This standardization helps surgeons communicate precisely about implant options.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-3">What Does CC Mean?</h3>
      <p className="mb-4">
        A cubic centimeter (cc) is a unit of volume equal to one milliliter (ml). For perspective, a teaspoon is about 5cc, while a standard shot glass holds approximately 45cc. Breast implants typically range from 125cc to 800cc, with most women choosing between 300cc and 400cc. This measurement represents only the volume of the implant itself—not how it will appear on your body or the cup size it will create.
      </p>
      
      <h3 className="text-xl font-medium mt-6 mb-3">Cup Size vs. Implant Volume</h3>
      <p className="mb-4">
        A common misconception is that there's a direct formula for converting implant volume to cup size—that perhaps 300cc always equals a C cup. In reality, cup size is a relative measurement that depends on your chest/underbust measurement (the band size), amount of natural breast tissue, breast width and shape, skin elasticity, height and overall body proportions.
      </p>
      
      <p className="mb-4">
        For example, 300cc implants might result in a C cup for a woman with a narrow frame and minimal natural breast tissue, a B cup for someone with a broader chest and wider natural breast base, or a full B or small C for someone with moderate existing breast tissue.
      </p>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h4 className="font-medium mb-2">Quick Reference: Approximate CC to Cup Size Increase</h4>
        <p className="text-sm mb-1">This very rough guide assumes average frame size:</p>
        <p className="text-sm">
          Approximately 150-200cc can increase cup size by 1, 250-300cc by 1-2 cup sizes, 350-400cc by 2 cup sizes, and 450-550cc by 2-3 cup sizes. These are generalizations and will vary significantly between individuals.
        </p>
        <p className="text-xs italic mt-2">Note: These are generalizations and will vary significantly between individuals.</p>
      </div>
    </section>
  );
};

export default UnderstandingImplantSizesSection;
