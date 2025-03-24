import React from 'react';
import { Link } from 'react-router-dom';

const OvarianReserveSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-left">Understanding Ovarian Reserve</h2>
      
      <p className="text-left">
        Along with egg quality, ovarian reserve – the number of eggs remaining in your ovaries – is the other piece of the fertility equation. Women often hear terms like "low ovarian reserve" or learn about tests for ovarian reserve when assessing fertility at 35+. Let's break down what this means.
      </p>
      
      <p className="text-left">
        Every woman is born with a finite number of eggs, and this supply declines over time through a natural process. Ovarian reserve is essentially your egg count at a given age. As mentioned earlier, the average woman has on the order of hundreds of thousands of eggs around puberty, around 25,000 by her late 30s, and only a few hundred by her 40s.
      </p>
      
      <p>
        Studies show that the rate of egg loss increases once you turn 35, which is why fertility tends to dip more noticeably around this age. By age 40, the average egg count is around 25,000 (a tiny fraction of the million-plus you had at birth), and the decline continues until menopause.
      </p>
      
      <p>
        Having a lower ovarian reserve doesn't mean you can't get pregnant – but it does mean there are fewer chances (eggs) each cycle. Some women naturally have a higher or lower egg count than average for their age. It's possible for a 38-year-old to still have a robust egg supply, or for someone at 32 to have prematurely diminished reserve.
      </p>
      
      <p>
        To get a sense of your ovarian reserve, fertility specialists commonly use ovarian reserve testing, which may include:
      </p>
      
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <strong>AMH Blood Test:</strong> Anti-Müllerian Hormone (AMH) is a substance produced by follicles (which contain eggs) in the ovaries. AMH levels correlate with how many eggs remain. A higher AMH suggests a higher egg count, whereas a low AMH (for your age) can indicate diminished ovarian reserve. AMH tends to decline with age, and very low levels in a younger woman may signal a fertility problem.
        </li>
        
        <li className="mb-2">
          <strong>FSH Test:</strong> Follicle-Stimulating Hormone (FSH) is measured on day 3 of the menstrual cycle. In women with fewer eggs, the body often produces more FSH to try to recruit an egg, so high FSH levels (above normal range) can be a sign of low reserve. This test is often done alongside estradiol levels for context.
        </li>
        
        <li className="mb-2">
          <strong>Antral Follicle Count (AFC):</strong> This is an ultrasound exam (often transvaginal) where the doctor counts the small resting follicles in the ovaries at the beginning of a cycle. Each visible follicle could potentially contain an egg for that cycle or future cycles. The count gives an estimate of how many eggs could be retrieved in fertility treatments like IVF. A low AFC means fewer observed follicles, indicating lower reserve.
        </li>
      </ul>
      
      <p>
        It's important to note that ovarian reserve tests do not measure fertility or predict exactly when you'll hit menopause. They can't tell you for sure if you'll conceive naturally or not. What they do is help doctors understand if you might have a harder time responding to fertility meds or if you might have less time remaining to conceive.
      </p>
      
      <p>
        Think of it like a fuel gauge: AMH and AFC give a sense of how much "egg fuel" is left, but even a near-empty tank can sometimes go a distance, and a half-full tank might still stall if other issues arise.
      </p>
      
      <p>
        If you're 35 or older and concerned about your fertility, talk to your healthcare provider about ovarian reserve testing. Knowing your AMH or FSH levels can provide valuable insight. For example, a significantly low AMH for your age might prompt you not to delay trying for a baby, or to consider options like IVF or egg freezing sooner rather than later. On the other hand, normal reserve tests could provide some reassurance that you have time (though they're not a guarantee).
      </p>
      
      <p>
        Our <Link to="/female-fertility-calculator" className="text-primary hover:text-primary-dark font-medium">Female Fertility Calculator</Link> can also help you estimate your fertility outlook by factoring in age and other data – it's a great starting point for a personalized perspective.
      </p>
      
      <p>
        One subtle sign of diminishing ovarian reserve that some women notice is a shortening menstrual cycle. As egg supply drops, menstrual cycles can shorten by a few days (for instance, going from a typical 30-day cycle in your 20s to a 26-day cycle in your late 30s). Not everyone experiences this, but it's a possible clue – some women with low reserve report consistently shorter cycles.
      </p>
      
      <p>
        However, many women with low reserve have no obvious symptoms at all besides difficulty conceiving. That's why testing can be helpful if you're over 35 and have been trying to get pregnant without success.
      </p>
      
      <p>
        In summary, ovarian reserve = egg quantity, which naturally declines with age. After 35, the egg pool is shrinking faster, meaning fewer eggs each year and eventually, fewer or irregular ovulations as you approach the 40s and 50s. Understanding your ovarian reserve can inform your game plan – whether it's trying sooner, consulting a specialist, or considering fertility preservation.
      </p>
    </section>
  );
};

export default OvarianReserveSection;
