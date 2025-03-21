
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';

const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | Longevity Calculators"
        description="Privacy policy for Longevity Calculators - how we protect your data and privacy."
        canonicalUrl="https://longevitycalculator.xyz/privacy"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Link to="/">
            <Logo className="mb-6" />
          </Link>
        </header>
        
        <main className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
            <p className="mb-4">
              Welcome to Longevity Calculators. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">The Data We Collect</h2>
            <p className="mb-4">
              When you use our calculators, we may collect certain information that you input into our forms.
              This information is used solely to provide you with calculation results and is not stored on our servers.
              We do not share this information with any third parties.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Cookies and Tracking</h2>
            <p className="mb-4">
              We use Google Analytics to track visitor behavior anonymously on our website. This helps us understand
              how users interact with our calculators and improve our services. Google Analytics uses cookies to collect
              this information. You can opt out of Google Analytics by using the Google Analytics Opt-Out Browser Add-on.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Advertising</h2>
            <p className="mb-4">
              We display advertisements from Google AdSense on our website. Google AdSense uses cookies to personalize ads
              based on your browsing history. You can opt out of personalized advertising by visiting Google's Ad Settings.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us at privacy@longevitycalculator.xyz.
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

export default Privacy;
