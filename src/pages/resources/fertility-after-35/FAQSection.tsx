
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What is the best age to try for a baby if I'm over 35?</h3>
            <p>
              If you're already over 35 and want a baby, the best time to try is essentially now – or as soon as you feel ready. Biologically, earlier is better. Fertility is generally at its peak in your 20s and starts to decline more noticeably in the 30s. That said, many women have healthy babies in their late 30s and even early 40s.
            </p>
            <p className="mt-2">
              The chances of conception per month do drop as you age – for instance, about 20% per cycle around age 30, down to roughly 10-15% per cycle by the late 30s, and even lower in the 40s. So, if you're 35+, don't panic that you missed the only window, but do understand that sooner is better than later.
            </p>
            <p className="mt-2">
              Every year counts when it comes to fertility after 35, so if having a baby is a top priority, don't delay the effort. And if you must wait (for personal or medical reasons), just be proactive – use the time to optimize your health and maybe consult a fertility specialist to make a game plan.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Can I improve my egg quality?</h3>
            <p>
              Egg quality is largely determined by age and genetics, and unfortunately, we can't turn back the biological clock. You cannot fully reverse age-related egg changes or make an older egg "young" again. However, there is some hope: you may be able to improve the environment and energy supply of your eggs, potentially giving the eggs you do have the best chance possible.
            </p>
            <p className="mt-2">
              Supplements like CoQ10 have shown promise in this area – CoQ10 may help boost the mitochondrial function in eggs, which could support better chromosomal division. Some small studies and fertility clinics report improved embryo quality or ovarian response in women taking CoQ10.
            </p>
            <p className="mt-2">
              Beyond supplements, lifestyle factors can indirectly influence egg quality: don't smoke (smoking harms egg DNA), reduce exposure to toxins, eat a nutritious diet rich in antioxidants, maintain a healthy weight, and manage any underlying health conditions.
            </p>
            <p className="mt-2">
              You can't magically make eggs younger, but you can take steps to ensure the eggs you have are as healthy as possible. Many women over 35 do everything right and still need assistance due to egg quality issues, so don't blame yourself if that happens.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What are signs of low ovarian reserve?</h3>
            <p>
              Often, low ovarian reserve (fewer eggs remaining than expected for one's age) doesn't produce obvious signs until you face difficulty conceiving. Most women with diminished ovarian reserve have normal menstrual cycles and feel no different physically.
            </p>
            <p className="mt-2">
              However, there are a few potential indicators. Some women notice their cycle length has gotten shorter by a few days as they've gotten older. A shortening cycle can be a sign that the ovaries are working harder to recruit follicles. You might experience irregular or skipped periods in your late 30s/40s when reserve is very low. Personal history can provide clues too - prior ovarian surgery, chemotherapy, radiation, or family history of early menopause could indicate potential reserve issues. The most definitive signs come from medical testing - elevated FSH, low AMH, or low antral follicle count on ultrasound clearly indicate diminished reserve, but these require specific fertility testing.
            </p>
            <p className="mt-2">
              The signs of low ovarian reserve are usually subtle or hidden. The clearest signals come from fertility tests or failing to conceive within expected time frames. If in doubt, check it out with your healthcare provider.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
