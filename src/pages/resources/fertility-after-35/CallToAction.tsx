
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">Your Next Step</h2>
      
      <div className="prose prose-lg max-w-none">
        <p>
          Facing the realities of fertility after 35 can be intimidating, but it's also empowering. You now know the facts behind the "fertility after 35" headlines – yes, fertility declines with age (especially egg quantity and quality), and yes, it's harder (not impossible!) to get pregnant in your late 30s and 40s. But you also know there are concrete steps you can take and resources available to support you.
        </p>
        
        <p>
          Whether it's optimizing your health, leveraging medical help, or adjusting your family-building plans, you have options. Every woman's journey is unique. Some will conceive naturally at 38 without a hitch; others might struggle at 34 and need IVF; still others might decide to use donor eggs at 43, or to embrace a childfree life or adoption. There is no right or wrong – just what's right for you.
        </p>
        
        <p>
          The key is to make informed decisions rather than ones based on myths or fear. If you're ready to apply this knowledge to your own situation, a great starting point is to get a personalized assessment.
        </p>
      </div>
      
      <Card className="p-6 bg-primary/5 border-primary/20 mt-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Think of it as a fertility check-in you can do right now</h3>
          <p className="mb-6">
            Our Female Fertility Calculator can estimate your current fertility outlook and future chances based on age and other factors. It's a free tool designed to give you insight into where you stand and what steps might make sense.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link to="/female-fertility-calculator">
              Calculate Your Fertility Outlook
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Armed with that information (and everything you've learned in this guide), you can approach the path ahead with clarity and confidence. Remember, knowledge is power – and when it comes to fertility after 35, you now have plenty of both.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default CallToAction;
