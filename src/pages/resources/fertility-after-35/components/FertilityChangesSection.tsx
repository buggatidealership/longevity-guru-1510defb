
import React, { useState } from 'react';

const FertilityChangesSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">How Fertility Changes After 35</h2>
      
      <p>
        By our mid-30s, fertility begins a notable decline – a biological reality often referred to as the "fertility cliff." In truth, there's no single cliff-edge moment, but rather a steady drop that accelerates in one's late 30s. Women are most fertile in their late teens and early 20s, with roughly a 25% chance of getting pregnant each month. Fertility gradually declines throughout a woman's 20s, and by age 30 the chance of conceiving each cycle is about 20%.
      </p>
      
      <p>
        After 35, this decline speeds up significantly – which is why doctors often use 35 as a benchmark for "advanced maternal age." One major reason fertility drops is the number and quality of eggs. Women are born with all the eggs they will ever have, and the supply dwindles over time.
      </p>
      
      <div className="my-8 relative rounded-xl overflow-hidden">
        {imageError ? (
          <div className="bg-gray-100 p-6 rounded-xl text-center">
            <p className="text-gray-500">Image unavailable</p>
          </div>
        ) : (
          <img 
            src="https://images.unsplash.com/photo-1612551984821-84b94c57c1a3?auto=format&fit=crop&w=1200&q=80" 
            alt="Woman in her late 30s reviewing fertility planning options with a doctor" 
            className="w-full object-cover rounded-xl"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
        <p className="mt-2 text-sm text-gray-500 italic text-center">
          Fertility awareness becomes increasingly important after 35 — tracking and professional support can help you navigate your options.
        </p>
      </div>
      
      <p>
        At birth, a female has about 1–2 million oocytes (immature eggs); by puberty, roughly 300,000–400,000 remain. This egg pool continues to deplete each year. By age 37, the average woman's egg count has dropped to around 25,000, and by menopause (around age 51) only about 1,000 eggs are left.
      </p>
      
      <p>
        In other words, the ovarian reserve (egg supply) is much lower at 35+ than in your 20s, meaning fewer chances each cycle for a healthy egg to be released. Egg quality also diminishes with age. Eggs in a woman's late 30s and 40s are more likely to carry chromosomal abnormalities (DNA errors).
      </p>
      
      <p>
        This is why women over 35 experience higher rates of infertility, miscarriage, and conditions like Down syndrome in babies. For example, one large study found that by age 40, more than half of pregnancies end in miscarriage, and by 45 this miscarriage risk exceeds 90%. Likewise, the chance of having a baby with Down syndrome rises from about 1 in 1,200 at age 25 to 1 in 30 by age 45.
      </p>
      
      <p>
        These sobering statistics fuel the fear around fertility after 35. That said, it's important to remember that 35 is not a fertility "on/off" switch. Many women in their mid-to-late 30s have healthy pregnancies. The decline is a spectrum, not a sudden drop-off.
      </p>
      
      <p>
        The phrase "advanced maternal age" can sound intimidating, but it's mainly used to ensure extra care (like earlier fertility evaluation or additional prenatal testing) – not to say that pregnancy is unlikely. In fact, plenty of women 35+ conceive naturally or with minimal intervention. The key is understanding the facts behind the fears. Yes, fertility does decline with age, especially after 35, but knowing what's happening to your body can empower you to take action and make informed decisions.
      </p>
    </section>
  );
};

export default FertilityChangesSection;
