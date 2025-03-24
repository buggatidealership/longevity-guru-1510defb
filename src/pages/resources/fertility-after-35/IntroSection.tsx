
import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-xl text-gray-700 mb-6">
        Few health topics are as confusing or emotionally charged as fertility after age 35. Search online and you'll find a maze of anecdotal advice, alarming statistics, and conflicting opinions. It's no wonder women in their late 30s and early 40s often feel scared or overwhelmed about their chances of having a baby.
      </p>
      
      <p className="text-gray-700 mb-4">
        In this article, we cut through the noise with science-backed insights and practical advice for women 35 and older. You'll learn how fertility changes after 35, what egg quality and ovarian reserve really mean, ways to improve your chances of conceiving, and when it might be time to see a fertility specialist.
      </p>
      
      <p className="text-gray-700 mb-6">
        We've also included answers to frequently asked questions and a personalized tool to help you plan your next steps. (Hint: Don't miss the <Link to="/female-fertility-calculator" className="text-primary hover:text-primary-dark font-medium">Female Fertility Calculator</Link> for tailored insights on your fertility timeline.)
      </p>
      
      <p className="text-gray-700 font-medium">Let's dive in.</p>
    </div>
  );
};

// Workaround to make the Link component available
const Link = ({ to, className, children }: { to: string; className: string; children: React.ReactNode }) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

export default IntroSection;
