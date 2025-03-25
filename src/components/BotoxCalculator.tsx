
import React, { useState } from 'react';
import { AdUnit } from './AdUnit';
import PatientCharacteristicsForm from './botox/PatientCharacteristicsForm';
import TreatmentAreaSelector from './botox/TreatmentAreaSelector';
import ResultsDisplay from './botox/ResultsDisplay';
import { calculateDosage, PatientCharacteristics, PricingSettings } from './botox/botoxCalculatorUtils';

const BotoxCalculator = () => {
  // Patient characteristics
  const [characteristics, setCharacteristics] = useState<PatientCharacteristics>({
    gender: 'female',
    age: '35-50',
    experience: 'first',
    muscleStrength: 'average',
    desired: 'moderate'
  });
  
  // Pricing settings
  const [pricingSettings, setPricingSettings] = useState<PricingSettings>({
    country: 'usa',
    customPrice: 15,
    useCustomPrice: false
  });
  
  // Treatment areas
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  
  // UI state
  const [showResults, setShowResults] = useState(false);
  
  // Update characteristics
  const handleCharacteristicsChange = (updates: Partial<PatientCharacteristics>) => {
    setCharacteristics({ ...characteristics, ...updates });
  };
  
  // Update pricing settings
  const handlePricingSettingsChange = (updates: Partial<PricingSettings>) => {
    setPricingSettings({ ...pricingSettings, ...updates });
  };
  
  // Toggle selection of treatment area
  const toggleAreaSelection = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };
  
  const handleCalculate = () => {
    setShowResults(true);
  };
  
  const resetForm = () => {
    setCharacteristics({
      gender: 'female',
      age: '35-50',
      experience: 'first',
      muscleStrength: 'average',
      desired: 'moderate'
    });
    setPricingSettings({
      country: 'usa',
      customPrice: 15,
      useCustomPrice: false
    });
    setSelectedAreas([]);
    setShowResults(false);
  };
  
  const results = showResults ? calculateDosage(characteristics, pricingSettings, selectedAreas) : null;
  
  return (
    <div className="space-y-6">
      <div className="ad-container mb-8">
        <AdUnit slot="5555555555" format="horizontal" className="max-w-3xl mx-auto my-4" />
      </div>
      
      <PatientCharacteristicsForm 
        characteristics={characteristics}
        pricingSettings={pricingSettings}
        onCharacteristicsChange={handleCharacteristicsChange}
        onPricingSettingsChange={handlePricingSettingsChange}
      />
      
      <TreatmentAreaSelector 
        selectedAreas={selectedAreas}
        onSelectArea={toggleAreaSelection}
        onCalculate={handleCalculate}
        onReset={resetForm}
      />
      
      {/* Results section */}
      {showResults && results && (
        <ResultsDisplay results={results} />
      )}
      
      <div className="bg-gray-50 rounded-lg w-full ad-container" style={{ minHeight: '250px' }}>
        <AdUnit
          className="w-full"
          slot="3333333333" 
          format="rectangle"
          responsive={true}
        />
      </div>
    </div>
  );
};

export default BotoxCalculator;
