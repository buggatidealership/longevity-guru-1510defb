
import React from 'react';
import { Link } from 'react-router-dom';

const KeyTakeawaysSection: React.FC = () => {
  return (
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
  );
};

export default KeyTakeawaysSection;
