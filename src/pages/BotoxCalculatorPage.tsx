
import { AdUnit } from '@/components/AdUnit';
import BotoxCalculator from '@/components/BotoxCalculator';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import Logo from '@/components/Logo';
import SEOHead from '@/components/SEOHead';
import { createCalculatorSEOProps } from '@/utils/seoUtils';
import { Link } from 'react-router-dom';

const BotoxCalculatorPage = () => {
  // Use the utility function to create consistent SEO props
  const seoProps = createCalculatorSEOProps(
    "Botox Dosage Calculator", 
    "Calculate the optimal Botox dosage for different facial areas and estimate treatment costs with our free Botox Calculator. Evidence-based dosage recommendations.",
    "/botox"
  );

  return (
    <>
      <SEOHead {...seoProps} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="max-w-6xl mx-auto pt-4 px-4">
          <Logo className="mb-2" />
          <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
            <AdUnit 
              className="w-full"
              slot="7777777777" 
              format="horizontal"
              responsive={true}
            />
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2">Botox Dosage Calculator</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Calculate the recommended Botox units for different facial areas and estimate treatment costs.
          </p>
          
          <DisclaimerAlert>
            This calculator provides general estimates based on common dosage ranges. 
            Actual treatment should be determined by a qualified healthcare provider.
          </DisclaimerAlert>
          
          <BotoxCalculator />
          
          <div className="mt-8 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
            <AdUnit 
              className="w-full"
              slot="8888888888" 
              format="rectangle"
              responsive={true}
            />
          </div>
        </main>
        
        <footer className="max-w-6xl mx-auto px-4 py-6">
          <div className="border-t pt-6">
            <p className="text-center text-sm text-gray-600 mb-4">
              <Link to="/" className="text-primary hover:underline">View More Free Calculators</Link>
            </p>
            <p className="text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Longevity Calculator. For educational purposes only.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BotoxCalculatorPage;
