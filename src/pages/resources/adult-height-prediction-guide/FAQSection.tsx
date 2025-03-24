
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Can late bloomers catch up in height?</h3>
            <p>
              Yes, late bloomers can often catch up significantly in height. Children who enter puberty later than their peers may appear shorter initially, but they typically continue growing for a longer period. This extended growth window often allows them to reach a final adult height that's consistent with their genetic potential. Research shows that while the timing of growth may differ, late bloomers usually follow their expected growth trajectory, just on a delayed schedule. If you're concerned about delayed growth or puberty, tracking growth velocity (how quickly height increases each year) with a healthcare provider can provide valuable insights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">What's the most accurate height prediction method?</h3>
            <p>
              The most accurate height prediction method combines bone age assessment with mid-parental height calculations, typically performed by pediatric endocrinologists. This clinical approach uses X-rays of the left wrist to determine skeletal maturity, which is then analyzed alongside the child's current growth percentile and parental heights. For at-home estimation, the mid-parental height method (averaging parents' heights with gender adjustment) provides reasonable accuracy for most children, typically within about 4 inches (10 cm) of actual adult height. Our calculator uses a research-validated approach based on birth measurements, which offers another valuable data point. For the most comprehensive prediction, multiple methods used together provide more insights than any single approach.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-2">Why do some siblings have big height differences?</h3>
            <p>
              Siblings can have significant height differences because height is influenced by hundreds of genes, not just a single gene from each parent. While siblings share approximately 50% of their genetic material, each child inherits a different combination of height-related genes. Additionally, epigenetic factors (which affect how genes are expressed) can differ between siblings. Environmental influences during growth years also contribute to height differences—factors like nutrition, physical activity, sleep quality, stress levels, and illness can affect how completely each child reaches their genetic height potential. Even identical twins, who share the same DNA, can have slight height differences (usually less than 1 inch) due to these environmental factors.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQSection;
