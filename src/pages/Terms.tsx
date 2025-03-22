
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';

const Terms = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service | Longevity Calculators"
        description="Our terms of service outline the conditions for using our calculators and tools. Understand your rights and responsibilities when using our educational health and financial calculators."
        canonicalUrl="https://longevitycalculator.xyz/terms"
        keywords="terms of service, user agreement, calculator terms, disclaimer, legal terms, educational purpose, service conditions"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/longevity-calculator-og.png"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Link to="/">
            <Logo className="mb-6" />
          </Link>
        </header>
        
        <main className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
            <p className="mb-4">
              Welcome to Longevity Calculators. These terms and conditions outline the rules and regulations for the use of our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Educational Purpose</h2>
            <p className="mb-4">
              The calculators provided on this website are for educational and informational purposes only. They are not intended to
              replace professional medical, financial, or other expert advice. The calculations are based on statistical models and
              research, but individual results may vary significantly.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Not Medical Advice</h2>
            <p className="mb-4">
              The health-related calculators on this website do not provide medical advice. Always consult with qualified healthcare
              providers regarding any medical questions or conditions.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Not Financial Advice</h2>
            <p className="mb-4">
              The financial calculators on this website do not provide financial or investment advice. Always consult with qualified
              financial advisors regarding your specific financial situation.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Accuracy of Information</h2>
            <p className="mb-4">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information,
              calculators, or related graphics contained on this website.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to These Terms</h2>
            <p className="mb-4">
              We may update our terms of service from time to time. We will notify you of any changes by posting the new
              terms on this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these terms of service, please contact us at terms@longevitycalculator.xyz.
            </p>
          </div>
        </main>
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
            <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Longevity Calculator. For educational purposes only.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Terms;
