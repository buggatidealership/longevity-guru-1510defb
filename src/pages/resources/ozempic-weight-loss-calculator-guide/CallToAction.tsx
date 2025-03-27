
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="my-12 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Potential Weight Loss with Ozempic?</h2>
        
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Take the guesswork out of your weight loss journey. Use our free Ozempic Weight Loss Calculator to get personalized projections based on your specific profile and treatment details.
        </p>
        
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link to="/ozempic-weight-loss-calculator" className="inline-flex items-center">
            Try the Ozempic Weight Loss Calculator <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        
        <p className="mt-4 text-sm text-gray-600">
          Free, no registration required. Get instant results to help plan your weight management strategy.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
