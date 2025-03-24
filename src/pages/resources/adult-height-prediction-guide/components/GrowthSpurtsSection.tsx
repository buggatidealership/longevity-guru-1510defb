
import React from 'react';

const GrowthSpurtsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-4" id="growth-spurts-development">Growth Spurts & Development Milestones</h2>
      <p className="mb-4">
        Human growth doesn't occur at a steady pace but rather in a series of spurts, with the most dramatic growth acceleration happening during puberty.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Growth Patterns by Age</h3>
      <p className="mb-4">
        Human growth follows a predictable pattern, though timing varies between individuals:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Infancy (0-1 year):</strong> The fastest growth period, with length increasing by approximately.5-10 inches in the first year</p>
        <p><strong>Early Childhood (1-4 years):</strong> Growth slows to about 2-3 inches per year</p>
        <p><strong>Middle Childhood (4-puberty):</strong> Steady growth of approximately 2-2.5 inches per year</p>
        <p><strong>Puberty:</strong> The second major growth spurt, with peak velocity typically adding 3-4 inches per year during peak growth</p>
      </div>

      <h3 className="text-xl font-medium mt-6 mb-3">Boys vs. Girls: Different Timing</h3>
      <p className="mb-4">
        One of the most notable differences in growth patterns between boys and girls is the timing of their pubertal growth spurts:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Girls:</strong> Typically begin puberty between ages 8-13, with peak growth velocity around age 11-12</p>
        <p><strong>Boys:</strong> Usually start puberty between ages 9-14, with peak growth velocity around age 13-14</p>
      </div>
      <p className="mb-4">
        This difference in timing explains why many girls are temporarily taller than boys in early adolescence, before boys catch up and often surpass them in later teen years.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">When Growth Stops</h3>
      <p className="mb-4">
        Growth plates are specialized areas of developing cartilage near the ends of long bones. Once these growth plates "close" or harden into bone, height increase stops permanently.
      </p>
      <p className="mb-4">
        On average, growth plates close at these ages:
      </p>
      <div className="mt-3 mb-4 space-y-2">
        <p><strong>Girls:</strong> 13-15 years, with minimal growth after the first menstrual period</p>
        <p><strong>Boys:</strong> 15-17 years, though some may continue growing until age 18-19</p>
      </div>
      <p className="mb-4">
        Most people reach 98% of their adult height by age 16 (girls) or 18 (boys), though some "late bloomers" may continue growing into their early twenties.
      </p>
    </>
  );
};

export default GrowthSpurtsSection;
