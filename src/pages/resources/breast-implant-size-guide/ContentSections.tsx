
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Understanding Breast Implant Sizes Section */}
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
          A common misconception is that there's a direct formula for converting implant volume to cup size—that perhaps 300cc always equals a C cup. In reality, cup size is a relative measurement that depends on your:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Chest/underbust measurement (the band size)</li>
          <li>Amount of natural breast tissue</li>
          <li>Breast width and shape</li>
          <li>Skin elasticity</li>
          <li>Height and overall body proportions</li>
        </ul>
        
        <p className="mb-4">
          For example, 300cc implants might result in:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>A C cup for a woman with a narrow frame and minimal natural breast tissue</li>
          <li>A B cup for someone with a broader chest and wider natural breast base</li>
          <li>A full B or small C for someone with moderate existing breast tissue</li>
        </ul>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-medium mb-2">Quick Reference: Approximate CC to Cup Size Increase</h4>
          <p className="text-sm mb-1">This very rough guide assumes average frame size:</p>
          <ul className="text-sm list-disc pl-6 space-y-1">
            <li>150-200cc: Approximately 1 cup size increase</li>
            <li>250-300cc: Approximately 1-2 cup size increase</li>
            <li>350-400cc: Approximately 2 cup size increase</li>
            <li>450-550cc: Approximately 2-3 cup size increase</li>
          </ul>
          <p className="text-xs italic mt-2">Note: These are generalizations and will vary significantly between individuals.</p>
        </div>
      </section>
      
      {/* How to Use the Calculator Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4" id="using-the-calculator">How to Use the Breast Implant Size Calculator</h2>
        <p className="mb-4">
          Our calculator uses a combination of anatomical measurements and research-based algorithms to suggest implant size ranges that may work well for your body. Follow these steps to get the most accurate results:
        </p>
        
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          <li>
            <strong>Enter your basic measurements:</strong> Height, weight, and chest/underbust measurement provide the calculator with your frame size reference.
          </li>
          <li>
            <strong>Select your current cup size:</strong> This helps establish your starting point and existing breast tissue.
          </li>
          <li>
            <strong>Choose your desired increase:</strong> Rather than choosing a specific cup size, indicate how many cup sizes you'd like to increase.
          </li>
          <li>
            <strong>Input additional preferences:</strong> Frame size, geographical region (for cost estimates), and implant material preference.
          </li>
          <li>
            <strong>Review your results:</strong> The calculator will provide a suggested implant size range in cubic centimeters (cc), estimated cup size, and approximate cost.
          </li>
        </ol>
        
        <p className="mb-6">
          Remember that this calculator provides estimates only, and your surgeon may recommend different sizes based on your in-person examination, chest wall anatomy, and specific goals. Use these results as a starting point for your consultation, not as a final decision.
        </p>
        
        <div className="my-6">
          <img 
            src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1200&q=80" 
            alt="Doctor explaining breast implant sizing options to patient" 
            className="w-full rounded-xl shadow-md object-cover"
          />
          <p className="text-sm text-gray-500 italic mt-2 text-center">
            Your surgeon will help you understand how different implant sizes will work with your unique anatomy.
          </p>
        </div>
      </section>
      
      {/* Factors That Affect Final Appearance Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4" id="appearance-factors">Factors That Affect Final Appearance</h2>
        <p className="mb-4">
          The same implant size can look dramatically different depending on several key factors:
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Body Frame</h3>
        <p className="mb-4">
          Your natural body proportions create the framework for your implants. Particularly important are:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Chest width:</strong> A wider chest can "absorb" larger implants without looking disproportionate</li>
          <li><strong>Shoulder width:</strong> Broader shoulders may balance larger implants aesthetically</li>
          <li><strong>Breast base width:</strong> The natural width of your breast tissue affects how wide an implant can be placed</li>
          <li><strong>Height:</strong> Taller women can often accommodate larger implants while maintaining proportion</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Skin Elasticity</h3>
        <p className="mb-4">
          Your skin's ability to stretch and support the weight of implants is crucial for long-term results. Factors that affect skin elasticity include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Age (younger skin typically has more elasticity)</li>
          <li>Pregnancy history</li>
          <li>Weight fluctuations</li>
          <li>Genetics</li>
          <li>Sun exposure history</li>
        </ul>
        <p className="mb-4">
          Women with limited skin elasticity may need to consider smaller implants or additional procedures like a breast lift to achieve optimal results.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Implant Placement</h3>
        <p className="mb-4">
          The position of the implant relative to your chest muscles affects both appearance and recovery:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Subglandular (over the muscle):</strong> May make implants more visible, especially in thin women with minimal breast tissue</li>
          <li><strong>Submuscular (under the muscle):</strong> Often creates a more natural slope and better coverage, but with a slightly longer recovery</li>
          <li><strong>Dual-plane (partially under the muscle):</strong> A hybrid approach that may offer the benefits of both techniques</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Implant Profile</h3>
        <p className="mb-4">
          Profile refers to how much the implant projects forward from the chest wall:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Low profile:</strong> Wider base, less projection, often suitable for women with wider chests</li>
          <li><strong>Moderate profile:</strong> Balanced width and projection, works well for many body types</li>
          <li><strong>High profile:</strong> Narrower base with more forward projection, often recommended for narrower chests</li>
          <li><strong>Extra-high/ultra-high profile:</strong> Maximum projection, narrowest base width</li>
        </ul>
        
        <p className="mb-4">
          The same volume (e.g., 350cc) in different profiles will create distinctly different looks. A high-profile 350cc implant will appear more projected and "perky" than a moderate-profile implant of the same volume.
        </p>
      </section>
      
      {/* Why Bigger Isn't Always Better Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4" id="bigger-isnt-better">Why Bigger Isn't Always Better</h2>
        <p className="mb-4">
          While it's natural to get excited about the transformation breast augmentation can create, experienced surgeons often caution against automatically choosing the largest possible implants. Board-certified plastic surgeon Dr. Jennifer Hayes explains: <em>"I regularly see patients who initially request very large implants revise to something smaller years later. The initial excitement about dramatic change often gives way to practical concerns about comfort, clothing fit, and long-term health."</em>
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Physical Comfort Considerations</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Weight:</strong> Larger implants are heavier—a 400cc silicone implant weighs about a pound</li>
          <li><strong>Back and neck strain:</strong> The added weight can contribute to discomfort, especially for petite women</li>
          <li><strong>Activity limitations:</strong> Very large implants may interfere with certain exercises or sports</li>
          <li><strong>Sleep discomfort:</strong> Some women find that large implants make comfortable sleeping positions limited</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Long-Term Aesthetic Considerations</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Accelerated sagging:</strong> Larger, heavier implants may cause tissue stretching over time</li>
          <li><strong>Visible implant edges:</strong> Oversized implants may show obvious edges or rippling</li>
          <li><strong>Less natural movement:</strong> Very large implants tend to move less naturally with the body</li>
          <li><strong>More noticeable in clothing:</strong> Dramatic size increases can limit clothing options</li>
        </ul>
        
        <p className="italic mb-6">
          "Finding the sweet spot between enhancement and proportion is key to long-term satisfaction. The goal isn't just to look great the first year—it's to create results you'll be happy with for many years to come." — Dr. Michael Chen, Board-Certified Plastic Surgeon
        </p>
      </section>
      
      {/* Real-World Testimonials and Examples Section */}
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
      
      {/* Key Takeaways Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4" id="key-takeaways">Key Takeaways</h2>
        
        <div className="bg-gray-50 p-5 rounded-lg mb-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Think in CCs, not cup sizes:</strong> Understanding that implant volume (cc) is more precise than cup size goals will help you communicate effectively with your surgeon.
            </li>
            <li>
              <strong>Consider your entire body:</strong> Your frame, existing breast tissue, skin elasticity, and lifestyle all affect which implant size will work best for you.
            </li>
            <li>
              <strong>Profile matters as much as size:</strong> Two implants with identical volume can create dramatically different results depending on their profile.
            </li>
            <li>
              <strong>Balance enhancement with practicality:</strong> The "perfect" size balances your aesthetic goals with comfort and long-term health considerations.
            </li>
            <li>
              <strong>Trust the process:</strong> Use our calculator as a starting point, but rely on in-person consultations with board-certified plastic surgeons for final decisions.
            </li>
          </ul>
        </div>
        
        <p className="mb-4">
          Remember that choosing breast implant size is a deeply personal decision. While scientific measurements and calculator tools provide valuable guidance, your comfort level, lifestyle needs, and aesthetic preferences should ultimately drive your decision.
        </p>
        
        <p>
          We encourage you to use our <Link to="/breastimplant" className="text-primary hover:underline">Breast Implant Size Calculator</Link> to generate a personalized starting point, then take those numbers to consultations with multiple board-certified plastic surgeons. The right surgeon will spend time understanding your goals and help you select implants that achieve the look you want while respecting your body's natural proportions.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
