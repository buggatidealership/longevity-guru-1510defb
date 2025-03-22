
import React, { useState, useEffect } from 'react';

const AlcoholLifespanCalculator = () => {
  const [age, setAge] = useState(35);
  const [gender, setGender] = useState('male');
  const [drinksPerWeek, setDrinksPerWeek] = useState(7);
  const [result, setResult] = useState(null);
  
  // Calculate estimated impact when inputs change
  useEffect(() => {
    calculateImpact();
  }, [age, gender, drinksPerWeek]);
  
  const calculateImpact = () => {
    // More conservative base impact factors based on epidemiological studies
    // Research suggests approximately 30 minutes of life lost per standard drink
    // Translated to regular drinking patterns and adjusted for long-term effects
    const daysPerDrinkPerYear = {
      male: 0.9, // ~0.9 days lost per weekly drink per year
      female: 1.2, // ~1.2 days lost per weekly drink per year (women affected more)
    }[gender];
    
    // Life expectancy remaining (simplified approximation)
    let yearsRemaining = 85 - age; // Using 85 as rough average life expectancy
    if (gender === 'female') yearsRemaining = 88 - age; // Women tend to live longer
    
    // Calculate cumulative impact over remaining lifespan
    // For older people, we need to consider BOTH:
    // 1. Future impact (based on remaining years)
    // 2. Past accumulated impact (based on assumed drinking history)
    
    // Future impact calculation
    const exposureYears = Math.max(Math.min(yearsRemaining, 40), 1); // Cap at 40 years of exposure, minimum 1 year
    
    let impactDays = daysPerDrinkPerYear * drinksPerWeek * exposureYears;
    
    // Age modifier (impact is more significant for younger people)
    let ageModifier = 1.0;
    if (age < 30) ageModifier = 1.2;
    else if (age < 45) ageModifier = 1.1;
    else if (age < 65) ageModifier = 0.9;
    else ageModifier = 0.7;
    
    impactDays *= ageModifier;
    
    // Past accumulated impact for older individuals
    // Assume similar drinking pattern for previous years
    if (age > 65) {
      // Simplified past impact calculation - assume same drinking pattern
      // for the previous 20 years (or less if person is younger)
      const pastYears = Math.min(age - 45, 20); // Assume impactful drinking for up to 20 years prior
      const pastImpact = daysPerDrinkPerYear * drinksPerWeek * pastYears * 0.8; // 80% weight for past impact
      
      // Add past impact to current calculation
      impactDays += pastImpact;
    }
    
    // J-curve adjustment for moderate drinking in older adults
    // Some studies still show potential small cardiovascular benefits
    let jCurveAdjustment = 0;
    if (drinksPerWeek > 0 && drinksPerWeek <= 3 && age > 45) {
      jCurveAdjustment = -20; // Small potential benefit for very light drinking in older adults
    }
    
    // Heavy drinking penalty - progressive risk increase
    let heavyDrinkingPenalty = 0;
    if (drinksPerWeek > 14) {
      // Progressive risk increase with heavier drinking
      heavyDrinkingPenalty = Math.pow(1.1, drinksPerWeek - 14) * 50;
    }
    
    // Calculate total impact in days with adjustments
    const totalDaysImpact = impactDays + jCurveAdjustment + heavyDrinkingPenalty;
    
    // Convert to years and days
    const yearsImpact = Math.floor(totalDaysImpact / 365);
    const remainingDays = Math.round(totalDaysImpact % 365);
    
    setResult({
      totalDays: Math.round(totalDaysImpact),
      years: yearsImpact,
      days: remainingDays,
      riskLevel: getRiskLevel(totalDaysImpact)
    });
  };
  
  // Updated to use actual calculated impact
  const getRiskLevel = (impactDays) => {
    if (impactDays <= 30) return 'Minimal';
    if (impactDays <= 180) return 'Low';
    if (impactDays <= 730) return 'Moderate'; // Up to 2 years
    if (impactDays <= 1095) return 'High'; // Up to 3 years
    return 'Very High'; // >3 years
  };
  
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Alcohol and Lifespan Impact Calculator</h2>
      <p className="mb-4 text-sm text-gray-600">
        Based on recent research on alcohol consumption and mortality. This tool provides population-level estimates of potential lifespan reduction.
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="range"
            min="18"
            max="90"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center">{age} years</div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Biological Sex</label>
          <div className="flex space-x-4 mt-1">
            <button
              className={`px-4 py-2 rounded-md ${gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setGender('male')}
            >
              Male
            </button>
            <button
              className={`px-4 py-2 rounded-md ${gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setGender('female')}
            >
              Female
            </button>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Standard Drinks Per Week: {drinksPerWeek}
          </label>
          <input
            type="range"
            min="0"
            max="35"
            value={drinksPerWeek}
            onChange={(e) => setDrinksPerWeek(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0</span>
            <span>7</span>
            <span>14</span>
            <span>21</span>
            <span>28</span>
            <span>35</span>
          </div>
        </div>
      </div>
      
      {result && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h3 className="font-semibold text-lg">Estimated Impact:</h3>
          <div className="mt-2">
            <p className="font-medium">
              Potential lifespan reduction: {result.years > 0 ? `${result.years} years, ` : ''}{result.days} days
            </p>
            <p className="mt-1">Risk level: <span className={`font-semibold ${
              result.riskLevel === 'Minimal' ? 'text-green-600' :
              result.riskLevel === 'Low' ? 'text-green-500' :
              result.riskLevel === 'Moderate' ? 'text-yellow-500' :
              result.riskLevel === 'High' ? 'text-orange-500' : 'text-red-600'
            }`}>{result.riskLevel}</span></p>
          </div>
          <div className="mt-2 p-2 bg-gray-100 rounded text-sm">
            <p className="font-medium">Risk Level Scale:</p>
            <ul className="list-disc pl-5 mt-1">
              <li><span className="text-green-600 font-medium">Minimal</span>: Less than 1 month impact</li>
              <li><span className="text-green-500 font-medium">Low</span>: 1-6 months impact</li>
              <li><span className="text-yellow-500 font-medium">Moderate</span>: 6 months to 2 years impact</li>
              <li><span className="text-orange-500 font-medium">High</span>: 2-3 years impact</li>
              <li><span className="text-red-600 font-medium">Very High</span>: More than 3 years impact</li>
            </ul>
          </div>
          <p className="mt-4 text-xs text-gray-600">
            Note: This calculator provides population-level estimates based on published research. 
            Individual results may vary based on genetics, lifestyle factors, and other health conditions.
            Consult healthcare professionals for personalized advice.
          </p>
        </div>
      )}
    </div>
  );
};

export default AlcoholLifespanCalculator;
