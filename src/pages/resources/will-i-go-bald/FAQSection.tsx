
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Can I really predict baldness?</h3>
            <p>
              While no prediction is 100% accurate, you can estimate your baldness risk based on genetic patterns, family history, and early symptoms. Our calculator uses these evidence-based factors to provide a reasonable prediction of your hair loss trajectory. The most reliable indicators include a strong family history of early baldness, beginning signs of recession or thinning, and characteristic patterns developing at the temples or crown. The combination of these factors can give you a good idea of whether significant hair loss is likely in your future and approximately when it might occur.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Does hair loss skip a generation?</h3>
            <p>
              The myth that baldness skips generations isn't scientifically supported. Hair loss genetics are complex and can be inherited from either side of your family. The baldness genes don't "skip" generations, though their expression may vary between individuals due to multiple genetic and environmental factors. This misconception likely arose because the inheritance pattern isn't straightforward—multiple genes influence hair loss susceptibility, and you might inherit different combinations than your parents. Also, some carriers may not express the trait strongly, giving the appearance of it "skipping" them. Looking at your entire family tree rather than just one relative provides more accurate risk assessment.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">How accurate is a baldness calculator?</h3>
            <p>
              Baldness calculators provide an estimate based on known risk factors, not a guaranteed prediction. Our calculator considers family history, current hair status, age, and other key factors that scientific research has linked to pattern baldness. While not as definitive as genetic testing, it offers a reasonable assessment of your risk level. For highest accuracy, be detailed and honest when entering your family history and current symptoms. The prediction becomes more reliable when you're already showing early signs of hair loss that follow typical androgenetic alopecia patterns. Remember that environmental factors and medical conditions can also influence hair loss, which may not be fully captured by predictive tools.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What's the best age to start preventative treatment?</h3>
            <p>
              The best time to start preventative treatment is when you first notice signs of hair thinning or recession, regardless of age. However, treatments are most effective when started early. For those with strong family histories of early baldness, some dermatologists recommend proactive measures in your 20s, even before significant hair loss occurs. The key concept is "prevention is easier than regrowth"—maintaining existing hair requires less intervention than trying to revive dormant follicles. If you're using our calculator and discover you're at high risk, consulting with a dermatologist about preventative options makes sense, even if you haven't noticed obvious thinning yet. Monitoring with regular photos can help identify subtle changes warranting early intervention.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Can stress cause permanent hair loss?</h3>
            <p>
              Acute stress typically causes temporary hair shedding (telogen effluvium) that resolves once the stress is managed. However, chronic stress may accelerate genetic pattern baldness in predisposed individuals. While stress alone rarely causes permanent baldness, it can worsen or trigger pattern hair loss in those with genetic susceptibility. The mechanism involves stress hormones like cortisol disrupting normal hair growth cycles and potentially increasing sensitivity to DHT in genetically vulnerable follicles. Managing stress through meditation, exercise, and proper sleep hygiene benefits overall health and may indirectly support hair preservation, though it won't prevent genetically-programmed hair loss. If you experience sudden, severe shedding after a stressful event, consult a dermatologist to distinguish between temporary telogen effluvium and pattern hair loss.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
