
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ContentSections: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4" id="what-causes-baldness">What Causes Baldness?</h2>
      <p>
        Hair loss isn't simply about getting older—it's a complex interplay of hormones, genetics, and time. The primary cause of pattern hair loss is a condition called androgenic alopecia, which affects both men (male pattern baldness) and women (female pattern baldness). At its core is dihydrotestosterone (DHT), a hormone derived from testosterone that shrinks hair follicles in genetically susceptible individuals. Over time, affected follicles produce thinner, shorter hairs until they eventually stop producing hair altogether.
      </p>
      
      <p className="mt-3 mb-4">
        Your genetic makeup determines how sensitive your hair follicles are to DHT. This sensitivity is inherited from both parents—not just your maternal grandfather, as popular myth suggests. Multiple genes contribute to pattern baldness, which explains why hair loss patterns vary widely even within families. Age of onset is another critical factor; earlier hair loss (beginning in your 20s) generally indicates stronger genetic influence and predicts more extensive baldness over time. Men typically experience a distinctive recession at the temples and crown that may progress to complete baldness, while women usually maintain their frontal hairline but develop diffuse thinning across the top and crown of the scalp.
      </p>

      {/* Image with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1579975096649-e773676c4276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Man examining his hairline in mirror - visual representation of early signs of male pattern baldness that the baldness risk calculator helps predict" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Early recognition of pattern hair loss can open more treatment options</p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="how-calculator-works">How the Baldness Risk Calculator Works</h2>
      <p>
        Our Baldness Risk Calculator synthesizes key predictive factors that scientific research has linked to pattern hair loss. The calculator analyzes inputs about your age, biological sex, detailed family history across both maternal and paternal sides, and your current hair health trends. To provide a comprehensive assessment, it examines the presence of baldness in first-degree relatives (parents, siblings) and second-degree relatives (grandparents, uncles), along with the age of onset in affected family members.
      </p>
      <p className="mt-3">
        It's important to understand that the calculator uses statistical modeling based on population studies, not individualized DNA testing. It estimates probability rather than certainty, giving you a risk score and projected timeline based on known risk factors. This approach provides valuable insights without requiring expensive genetic testing. For the most accurate results, be thorough when reporting your family history and current hair conditions.
      </p>
      <p className="mt-3 mb-4">
        Ready to learn more about your personal risk profile? <Link to="/baldness-risk-calculator" className="text-primary font-medium hover:underline">Check your baldness risk now</Link> with our calculator.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="hair-loss-progression">Hair Loss Progression Chart</h2>
      <p>
        Understanding the typical progression patterns of hair loss can help you identify your current stage and potential future trajectory. For men, dermatologists use the Norwood Scale (also called the Hamilton-Norwood Scale) to classify pattern baldness stages. For women, the Ludwig Scale serves a similar purpose. These standardized scales help physicians track progression and determine appropriate interventions.
      </p>

      {/* Second image with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1626954079979-ec4f5bc09779?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Man with thinning crown hair - illustration of advanced stage pattern baldness that the baldness risk calculator can help predict" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Advanced pattern baldness typically affects the crown and temples most severely</p>
      </div>

      <p className="font-medium mt-4">Norwood Scale for Men:</p>
      <p className="mt-2">
        The Norwood Scale ranges from Stage 1 (minimal or no recession) to Stage 7 (severe baldness with only a horseshoe of hair remaining). Stage 2 shows slight recession at the temples, often forming an "M" shape. By Stage 3, the recession deepens and becomes more noticeable, while Stage 4 introduces significant thinning on the crown or vertex. Stage 5 shows more extensive loss, with a thin band separating the receding front from the thinning crown. In Stage 6, this bridge disappears as the balding areas connect, and finally, Stage 7 represents the most advanced pattern with only a band of hair remaining around the sides and back of the head. Most men progress through these stages gradually over decades, though some may advance more rapidly, especially those with early onset.
      </p>

      <p className="font-medium mt-4">Ludwig Scale for Women:</p>
      <p className="mt-2">
        Women's hair loss follows a different pattern, characterized by diffuse thinning while maintaining the frontal hairline. The Ludwig Scale defines three main stages: Stage I involves mild thinning on the top of the head, often only noticeable to the woman herself. By Stage II, thinning becomes more pronounced with widening of the part and decreased overall density. Stage III represents extensive thinning with significant loss of volume and possible visibility of the scalp through the hair. Women rarely progress to complete baldness, but advanced thinning can still significantly impact appearance and confidence. Female pattern hair loss typically develops more slowly than male pattern baldness, sometimes taking decades to advance from one stage to the next.
      </p>

      <p className="mt-4">
        It's important to note that progression is rarely sudden—it typically occurs gradually over years or decades. The rate varies significantly between individuals based on genetic factors, hormone levels, age, and sometimes environmental influences. With appropriate interventions, progression can often be slowed or temporarily halted, especially when treatment begins in earlier stages.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="risk-factors">Factors That Increase Baldness Risk</h2>
      <p>
        Several key factors contribute to your likelihood of experiencing significant hair loss. Strong family history is perhaps the most reliable predictor, particularly if multiple first-degree relatives (parents, siblings) experienced early-onset baldness. The earlier baldness began in your family members, the higher your risk tends to be. Research indicates that men whose fathers experienced significant baldness are up to 2.5 times more likely to develop similar patterns. Elevated DHT sensitivity in hair follicles, which is genetically determined, makes them more vulnerable to miniaturization even with normal hormone levels. Your age is another significant factor, as the risk of developing pattern baldness increases over time—by age 50, approximately 50% of men show noticeable hair loss, and by age 80, about 80% are affected to some degree. Secondary influencers include chronic stress, which can accelerate genetic hair loss by raising cortisol levels that impact the hair growth cycle. Major illnesses or surgeries can temporarily accelerate shedding, sometimes unmasking underlying pattern hair loss. Poor nutrition, particularly deficiencies in iron, protein, zinc, and certain B vitamins, can exacerbate genetic hair loss tendencies, while certain medications (including some antidepressants, blood pressure medications, and hormonal treatments) may trigger or worsen hair loss in predisposed individuals.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4" id="prevention-options">What You Can Do If You're at Risk</h2>
      <p>
        Hair loss doesn't have to be inevitable—early intervention can often slow progression and maintain your hair density for years or even decades. The key is understanding your risk and taking proactive measures before significant thinning occurs.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">FDA-Approved Treatments</h3>
      <p>
        Two medications have solid research backing their effectiveness: Minoxidil (Rogaine), available over-the-counter as a liquid or foam applied directly to the scalp, works by increasing blood flow to hair follicles and extending their growth phase. Studies show it helps maintain existing hair and sometimes regrows miniaturized follicles in both men and women. For men, prescription finasteride (Propecia) blocks the conversion of testosterone to DHT, addressing the root cause of male pattern baldness. Clinical trials demonstrate that about 80% of men maintain their hair with daily use, with many experiencing some regrowth. These treatments work best when started early, ideally at the first signs of thinning.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Advanced Interventions</h3>
      <p>
        For those with more advanced hair loss, hair transplantation offers a permanent solution by relocating DHT-resistant follicles from the back and sides of the scalp to thinning areas. Modern techniques like Follicular Unit Extraction (FUE) create natural-looking results with minimal scarring. Newer options include platelet-rich plasma (PRP) therapy, which uses injections of growth factors from your own blood to stimulate follicle health. Low-level laser therapy (LLLT) devices, available as combs or helmets, provide another clinically-validated option that can be used at home to stimulate follicle activity and slow hair loss progression.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Lifestyle Approaches</h3>
      <p>
        While they won't reverse genetic hair loss alone, certain lifestyle measures may help optimize follicle health. DHT-blocking shampoos containing ingredients like ketoconazole or saw palmetto provide modest benefits when used consistently. Managing stress through meditation, exercise, or counseling helps regulate hormones that affect hair growth cycles. Nutritional support through a balanced diet rich in protein, iron, zinc, and vitamins D and B can create an optimal environment for hair growth. For those experiencing early signs of thinning, cosmetic strategies like specialized thickening fibers, strategic hairstyling, or scalp micropigmentation offer immediate visual improvements while medical treatments take effect.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Psychological Adaptation</h3>
      <p>
        Some individuals choose to embrace hair loss, finding confidence in a closely-cropped or fully shaved look. This approach has gained social acceptance and can be empowering. Whether pursuing treatment or acceptance, addressing the psychological impact of hair loss through support groups or counseling benefits many people. Remember that treatments are personal choices—there's no single "right" approach for everyone facing hair loss.
      </p>

      <p className="mt-4">
        The best strategy combines early awareness through tools like our <Link to="/baldness-risk-calculator" className="text-primary hover:underline">Baldness Risk Calculator</Link> with proactive consultation with a dermatologist specializing in hair loss. The earlier you understand your risk and explore options, the more control you'll have over your hair's future.
      </p>
    </>
  );
};

export default ContentSections;
