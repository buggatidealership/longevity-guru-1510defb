
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ContentSections: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-8 mb-4" id="balanced-diet">1. Balanced Diet</h2>
      
      {/* Updated visual with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Mediterranean Diet Pyramid showing recommended food groups with vegetables, fruits, whole grains, and olive oil at the base, fish and poultry in the middle, and red meat at the top - a dietary pattern linked to increased longevity" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">The Mediterranean Diet Pyramid - consistently linked to longer lifespans in longitudinal studies</p>
      </div>
      
      <p>
        The Mediterranean diet stands out as one of the most researched dietary patterns for longevity. Rich in olive oil, fruits, vegetables, whole grains, and fish, this eating style is associated with a 25% reduced risk of death from all causes. Studies from Blue Zones—regions where people regularly live past 100—consistently show that plant-focused eating with minimal processed foods is a cornerstone of longevity.
      </p>
      <p>
        Moderate caloric restriction without malnutrition has shown promising results in extending lifespan across multiple species. For humans, this doesn't mean severe restriction but rather mindful eating and avoiding overeating. According to a landmark 2018 study published in Cell Metabolism, minimizing ultra-processed foods, which make up over 50% of the typical Western diet, can significantly reduce inflammation and oxidative stress—two major accelerators of aging. For a personalized approach to nutrition's impact on your lifespan, our <Link to="/longevity-calculator" className="text-primary hover:underline">longevity calculator</Link> can help quantify how specific dietary choices affect your projected lifespan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="physical-activity">2. Regular Physical Activity</h2>
      
      {/* Updated visual with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Chart showing correlation between weekly exercise minutes and mortality risk reduction, displaying a 30-35% decrease in mortality risk with 150 minutes of moderate activity per week" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">Physical activity's impact on mortality risk - data compiled from multiple longitudinal studies</p>
      </div>
      
      <p>
        The longevity benefits of regular exercise are overwhelming. The World Health Organization recommends 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly, plus muscle-strengthening activities twice weekly. Following these guidelines is associated with a 30-35% reduction in all-cause mortality risk, according to a comprehensive 2020 meta-analysis published in the British Journal of Sports Medicine.
      </p>
      <p>
        Beyond cardiovascular benefits, regular exercise improves cognitive function, reduces cancer risk, and helps maintain mobility and independence as you age. Even light activity like walking can provide significant benefits—research shows that just 7,000-8,000 steps daily is associated with 50-70% lower mortality risk compared to being sedentary. To see how your current activity level affects your expected lifespan, try our <Link to="/life-expectancy-calculator" className="text-primary hover:underline">life expectancy calculator</Link> which incorporates the latest research on exercise and longevity.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="adequate-sleep">3. Adequate Sleep</h2>
      
      {/* Updated visual with proper source and alt text */}
      <div className="my-6">
        <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="U-shaped curve graph showing optimal sleep duration of 7-8 hours for lowest mortality risk, with higher risks associated with both shorter and longer sleep durations" 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <p className="text-sm text-gray-500 mt-2 text-center">The U-shaped relationship between sleep duration and mortality risk - 7-8 hours is optimal</p>
      </div>
      
      <p>
        Science has firmly established that 7-8 hours of quality sleep nightly optimizes longevity. Both insufficient sleep (less than 6 hours) and excessive sleep (more than 9 hours) are linked to higher mortality rates. A 2018 study in the Journal of the American Heart Association found that consistently poor sleep quality increased cardiovascular mortality risk by up to 34%. Sleep is when your body performs critical repair processes, consolidates memories, and regulates numerous metabolic functions.
      </p>
      <p>
        Improving sleep hygiene can significantly enhance sleep quality. Key practices include maintaining a consistent sleep schedule, creating a dark, cool sleeping environment, avoiding screens 1-2 hours before bedtime, and limiting caffeine and alcohol consumption. Addressing sleep disorders like sleep apnea can add years to your life—untreated sleep apnea increases all-cause mortality risk by 15-30%. Our <Link to="/longevity-calculator" className="text-primary hover:underline">comprehensive longevity assessment</Link> includes sleep quality as a key factor in determining your projected lifespan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="stress-management">4. Stress Management</h2>
      <p>
        Chronic stress accelerates cellular aging through multiple pathways, including shortening telomeres—protective caps on chromosomes that predict longevity. Effective stress management techniques like mindfulness meditation, deep breathing exercises, and yoga have been shown to reduce cortisol levels, lower inflammation, and even lengthen telomeres.
      </p>
      <p>
        A landmark study from Harvard followed participants for 80 years and found that how people manage stress was one of the strongest predictors of healthy aging. Research published in JAMA Internal Medicine found that regular meditation practice reduced mortality risk by 18% compared to non-meditators over an 18-year follow-up period. Practicing daily stress reduction for just 10-15 minutes can significantly reduce the harmful physiological effects of chronic stress, potentially adding years to your life.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="social-connections">5. Social Connections</h2>
      <p>
        Strong social relationships may be as important for longevity as not smoking or maintaining a healthy weight. A meta-analysis of 148 studies found that people with stronger social relationships had a 50% increased likelihood of survival compared to those with weaker social ties. This effect remains powerful across age, sex, health status, and cause of death.
      </p>
      <p>
        Maintaining an active social life as you age requires intentional effort. Joining community groups, volunteering, scheduling regular family activities, and using technology to stay connected with distant loved ones all contribute to social wellbeing. Quality matters more than quantity—having a few close, meaningful relationships provides more longevity benefits than numerous casual connections. You can incorporate this factor when using our <Link to="/life-expectancy-calculator" className="text-primary hover:underline">personalized life expectancy calculator</Link> to see how your social connections might influence your projected lifespan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="health-screenings">6. Routine Health Screenings</h2>
      <p>
        Preventive healthcare through regular screenings can add years to your life by catching potential problems early. Blood pressure checks, cholesterol testing, cancer screenings (like mammograms and colonoscopies), and diabetes screening are associated with significant mortality reduction. Following age-appropriate screening recommendations can reduce premature death risk by 15-30%.
      </p>
      <p>
        Beyond standard screenings, advanced preventive testing is becoming more accessible. Genetic testing, early cancer detection blood tests, and comprehensive biomarker panels can provide personalized insights into your health risks. Early intervention for conditions like hypertension, high cholesterol, and prediabetes can prevent progression to more serious diseases that significantly reduce lifespan.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="hydration">7. Hydration and Reduced Alcohol Intake</h2>
      <p>
        Proper hydration is fundamental to nearly every bodily function. While individual needs vary, research suggests consuming approximately 2-3 liters of fluids daily (including from food) supports optimal health. Chronic mild dehydration is linked to increased risk of kidney stones, urinary tract infections, and impaired cognitive function.
      </p>
      <p>
        Regarding alcohol, the relationship with longevity is complex. While moderate consumption (generally defined as ≤1 drink daily for women and ≤2 for men) was once thought beneficial, recent research suggests the safest level for health may be none. A comprehensive 2018 study published in The Lancet analyzed data from 195 countries and concluded that alcohol consumption, regardless of amount, leads to health loss. Each standard drink above moderate levels progressively increases risk for several cancers, liver disease, and cardiovascular problems. To understand how your alcohol consumption specifically affects your life expectancy, try our specialized <Link to="/alcohol-impact-calculator" className="text-primary hover:underline">alcohol impact calculator</Link> for personalized insights.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="mental-health">8. Mental Health Maintenance</h2>
      <p>
        Mental health conditions like depression and anxiety are associated with significantly shorter lifespans—research shows they can reduce life expectancy by 10-20 years. This occurs through both direct physiological effects (increased inflammation, altered immune function) and indirect behavioral effects (poorer self-care, substance use).
      </p>
      <p>
        Proactively maintaining mental wellbeing through therapy, medication when needed, stress management, regular exercise, and social connection can significantly impact longevity. Studies show that successful treatment of depression can normalize mortality risk to that of the general population. Mental health screenings should be considered as important as physical health check-ups.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="avoid-smoking">9. Avoid Smoking</h2>
      <p>
        Smoking remains the leading preventable cause of death worldwide. It reduces life expectancy by an average of 10 years compared to never-smokers. The good news is that quitting at any age brings benefits. Stopping at age 30 reduces almost all excess risk, while quitting at 50 halves the risk compared to continuing smokers.
      </p>
      <p>
        The body begins healing remarkably quickly after quitting—within 24 hours, your heart rate and blood pressure drop; within 1-9 months, coughing and shortness of breath decrease; within 1 year, your coronary heart disease risk is half that of a smoker's. For support in quitting, evidence-based resources include nicotine replacement therapy, prescription medications, counseling services, and smartphone apps designed to help overcome nicotine addiction.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4" id="cognitive-activity">10. Regular Cognitive Activity</h2>
      <p>
        Keeping your brain active throughout life significantly reduces dementia risk and promotes longevity. The cognitive reserve hypothesis suggests that intellectually stimulating activities build neural networks that provide resilience against age-related brain changes. Studies show that people with cognitively demanding occupations or hobbies have up to 46% reduced dementia risk.
      </p>
      <p>
        Effective brain-stimulating activities include learning new skills (particularly complex ones like musical instruments or languages), solving puzzles, reading, engaging in thoughtful discussions, and pursuing continuing education. Digital brain training games may provide some benefits, but evidence suggests that varied real-world activities offer the strongest protection against cognitive decline.
      </p>
    </>
  );
};

export default ContentSections;
