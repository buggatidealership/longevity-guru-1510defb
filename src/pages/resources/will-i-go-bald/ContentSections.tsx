
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSections: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">What Causes Baldness?</h2>
        <p className="mb-3">
          The primary cause of pattern hair loss is a condition called <strong>androgenic alopecia</strong>, which affects both men and women. This genetic condition makes hair follicles sensitive to dihydrotestosterone (DHT), a hormone derived from testosterone. When DHT binds to susceptible follicles, it causes them to shrink gradually over time, resulting in progressively thinner hair and eventually no hair production at all.
        </p>
        <p className="mb-3">
          Male pattern baldness typically begins with a receding hairline at the temples and/or thinning at the crown. Female pattern hair loss usually presents as diffuse thinning across the top of the scalp, often with preservation of the frontal hairline. While men are more likely to experience complete baldness in affected areas, women typically maintain some hair, albeit much thinner.
        </p>
        <p>
          The likelihood of developing androgenic alopecia is largely determined by your genetics. If you have close relatives who experienced early or significant hair loss, your risk increases substantially. This inheritance pattern is complex and can come from either side of the family—not just the maternal line as commonly believed.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">How the Baldness Risk Calculator Works</h2>
        <p className="mb-3">
          Our <Link to="/baldness-risk-calculator" className="text-primary hover:underline">Baldness Risk Calculator</Link> uses statistical modeling based on several key factors that research has linked to hair loss probability:
        </p>
        <div className="space-y-2 mb-3">
          <p><strong>Age:</strong> Pattern hair loss is progressive and age-dependent, with risk increasing over time.</p>
          <p><strong>Biological sex:</strong> Men and women experience different patterns and probabilities of hair loss.</p>
          <p><strong>Family history:</strong> The presence and severity of baldness in your immediate family, particularly parents and grandparents.</p>
          <p><strong>Current hair status:</strong> Early signs of thinning, recession, or miniaturization are strong predictors of future progression.</p>
          <p><strong>Hair loss pattern:</strong> The specific pattern of your hair loss provides clues about its likely trajectory.</p>
        </div>
        <p className="mb-4">
          Unlike genetic testing, our calculator can't provide absolute certainty about your hair loss future. However, by analyzing these evidence-based risk factors together, it can give you a reasonable estimation of your personal risk level and potential timeline.
        </p>
        <div className="bg-primary/5 p-4 rounded-md border border-primary/20">
          <p className="font-medium text-center">
            Ready to discover your personal risk? Try our <Link to="/baldness-risk-calculator" className="text-primary font-bold hover:underline">Baldness Risk Calculator</Link> now.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Hair Loss Progression Chart</h2>
        <p className="mb-3">
          Hair loss typically follows predictable patterns that dermatologists have classified into scales. Understanding these patterns can help you identify your current stage and potential future progression:
        </p>
        
        <h3 className="text-xl font-medium mt-4 mb-2">Male Pattern Baldness (Norwood Scale)</h3>
        <div className="space-y-1 mb-4">
          <p><strong>Stage 1:</strong> Little to no visible recession; baseline mature hairline</p>
          <p><strong>Stage 2:</strong> Slight recession at the temples, creating an "M" shape</p>
          <p><strong>Stage 3:</strong> Deeper temple recession and/or thinning at the crown</p>
          <p><strong>Stage 4:</strong> More severe recession and crown thinning, with solid hair between</p>
          <p><strong>Stage 5:</strong> Larger balding areas with a narrower band of hair separating them</p>
          <p><strong>Stage 6:</strong> Temple and crown balding areas connect, with significant hair loss</p>
          <p><strong>Stage 7:</strong> Only a horseshoe pattern of hair remains around the sides and back</p>
        </div>
        
        <h3 className="text-xl font-medium mt-4 mb-2">Female Pattern Hair Loss (Ludwig Scale)</h3>
        <div className="space-y-1 mb-4">
          <p><strong>Grade 1:</strong> Minimal thinning at the part line, often only noticeable to the individual</p>
          <p><strong>Grade 2:</strong> Increased thinning and widening of the part, with moderate reduction in hair volume</p>
          <p><strong>Grade 3:</strong> Significant diffuse thinning across the crown, often with visible scalp</p>
        </div>
        
        <p>
          Progression between stages is typically gradual, occurring over years or decades. The rate varies significantly between individuals and can be influenced by factors like genetics, hormonal changes, and age. Some people may progress through all stages, while others may stabilize at an intermediate point.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Factors That Increase Baldness Risk</h2>
        <p className="mb-3">
          Several factors can significantly influence your likelihood of experiencing pattern hair loss:
        </p>
        
        <h3 className="text-lg font-medium mt-4 mb-2">Primary Risk Factors</h3>
        <div className="space-y-2 mb-4">
          <p>
            <strong>Genetic predisposition:</strong> Having first-degree relatives (parents or siblings) with early-onset baldness substantially increases your risk. The strongest predictor is having multiple affected family members who lost hair at a young age.
          </p>
          <p>
            <strong>Age:</strong> The probability of pattern hair loss increases with age. By age 50, approximately 50% of men and 25% of women show noticeable signs of pattern hair loss.
          </p>
          <p>
            <strong>DHT sensitivity:</strong> Some individuals have hair follicles that are genetically more sensitive to DHT, which means they'll experience more significant miniaturization and loss over time.
          </p>
          <p>
            <strong>Hormonal factors:</strong> Conditions that affect hormone levels, such as polycystic ovary syndrome in women or testosterone therapy, can accelerate pattern hair loss in susceptible individuals.
          </p>
        </div>
        
        <h3 className="text-lg font-medium mt-4 mb-2">Secondary Influences</h3>
        <div className="space-y-2 mb-3">
          <p>
            <strong>Chronic stress:</strong> While stress alone doesn't cause pattern baldness, it can accelerate hair loss in those with genetic predisposition and trigger temporary shedding (telogen effluvium).
          </p>
          <p>
            <strong>Poor nutrition:</strong> Severe nutritional deficiencies, particularly of protein, iron, zinc, and certain vitamins, can worsen hair thinning.
          </p>
          <p>
            <strong>Certain medications:</strong> Some drugs, including certain antidepressants, beta-blockers, and anticoagulants, may accelerate hair thinning as a side effect.
          </p>
          <p>
            <strong>Smoking:</strong> Research suggests smokers may experience earlier onset and more severe pattern baldness, possibly due to oxidative stress and reduced blood flow to the scalp.
          </p>
        </div>
        
        <p>
          It's important to note that while these secondary factors can influence hair loss, they generally won't cause pattern baldness in someone without genetic susceptibility. However, they may accelerate the process or trigger earlier onset in those already predisposed.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">What You Can Do If You're at Risk</h2>
        <p className="mb-3">
          If our calculator indicates you're at high risk for significant hair loss, there are several evidence-based approaches you can consider:
        </p>
        
        <h3 className="text-lg font-medium mt-4 mb-2">FDA-Approved Treatments</h3>
        <div className="space-y-2 mb-4">
          <p>
            <strong>Minoxidil (Rogaine):</strong> Available over-the-counter as a liquid or foam, this medication helps maintain and sometimes regrow hair by improving blood flow to the follicles. It's approved for both men and women.
          </p>
          <p>
            <strong>Finasteride (Propecia):</strong> A prescription pill that blocks DHT production, effectively slowing or stopping hair loss progression in most men. It's only approved for male pattern baldness and carries potential sexual side effects.
          </p>
          <p>
            <strong>Low-level laser therapy:</strong> FDA-cleared devices like laser combs and helmets can stimulate hair growth, typically used alongside other treatments.
          </p>
        </div>
        
        <h3 className="text-lg font-medium mt-4 mb-2">Advanced Interventions</h3>
        <div className="space-y-2 mb-4">
          <p>
            <strong>Hair transplantation:</strong> Surgical procedure that moves hair follicles from the back and sides of the scalp (which are resistant to DHT) to thinning areas. Modern techniques like FUE (Follicular Unit Extraction) can provide natural-looking results.
          </p>
          <p>
            <strong>PRP (Platelet-Rich Plasma):</strong> A treatment that uses your own blood cells to stimulate hair growth, potentially improving hair density when used regularly.
          </p>
          <p>
            <strong>Prescription combinations:</strong> Dermatologists often recommend combination therapies, such as finasteride with minoxidil, for enhanced effectiveness.
          </p>
        </div>
        
        <h3 className="text-lg font-medium mt-4 mb-2">Lifestyle Approaches</h3>
        <div className="space-y-2 mb-4">
          <p>
            <strong>Anti-DHT shampoos:</strong> Containing ingredients like ketoconazole, saw palmetto, or pumpkin seed extract, these may provide modest benefits by reducing scalp DHT levels.
          </p>
          <p>
            <strong>Nutritional support:</strong> Ensuring adequate protein, iron, zinc, vitamin D, and B vitamins can optimize hair growth conditions.
          </p>
          <p>
            <strong>Stress management:</strong> Regular exercise, meditation, and adequate sleep may help reduce stress-related hair shedding.
          </p>
        </div>
        
        <p className="mb-3">
          The key to effective hair loss prevention is early intervention. The sooner you begin treatment, the more hair you can potentially maintain. Most treatments are more effective at preserving existing hair than regrowing lost hair.
        </p>
        
        <p>
          If hair loss causes significant distress, consider consulting with a board-certified dermatologist who specializes in hair disorders. They can provide personalized recommendations based on your specific pattern, stage, and medical history.
        </p>
      </section>
    </div>
  );
};

export default ContentSections;
