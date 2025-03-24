
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
      <h3 className="text-xl font-semibold mb-3">Ready to Find Your Ideal Breast Implant Size?</h3>
      <p className="mb-4 max-w-2xl mx-auto">
        Use our research-based calculator to get personalized implant size recommendations based on your unique measurements and goals. It's the perfect starting point before consulting with a surgeon.
      </p>
      <Link to="/breast-implant-size-calculator">
        <Button className="bg-primary hover:bg-primary/90">
          Try Our Free Breast Implant Calculator
        </Button>
      </Link>
      <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
        This calculator provides estimates only and should not replace professional medical advice. Always consult with a board-certified plastic surgeon for personalized recommendations.
      </p>
    </div>
  );
};

export default CallToAction;
