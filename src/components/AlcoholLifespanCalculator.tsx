
import React, { useState, useEffect } from 'react';
import { Beer, Wine, Martini, CupSoda, GlassWater } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Slider } from '@/components/ui/slider';

const AlcoholLifespanCalculator = () => {
  const [drinkType, setDrinkType] = useState('beer');
  const [drinksPerWeek, setDrinksPerWeek] = useState(7);
  const [result, setResult] = useState(null);
  
  // Calculate estimated impact when inputs change
  useEffect(() => {
    calculateImpact();
  }, [drinkType, drinksPerWeek]);
  
  const calculateImpact = () => {
    // Base impact factors based on epidemiological studies
    // Approximately 30 minutes of life lost per standard drink
    // Adjusted for drink type and regular drinking patterns
    const baseDaysPerDrinkPerYear = 0.9; // Base value for standard drinks
    
    // Drink type modifiers based on alcohol content and typical serving size
    const drinkTypeModifiers = {
      'beer': 0.8,           // Lower alcohol content per typical serving
      'wine': 1.0,           // Medium alcohol content
      'spirits': 1.3,        // Higher alcohol content
      'cocktails': 1.2,      // Mixed drinks, typically stronger
      'lowAlcohol': 0.5,     // Low alcohol options
    };
    
    // Standard exposure period for lifetime impact calculation
    const exposureYears = 40;
    
    // Calculate impact with drink type modifier
    const modifier = drinkTypeModifiers[drinkType] || 1.0;
    let impactDays = baseDaysPerDrinkPerYear * modifier * drinksPerWeek * exposureYears;
    
    // J-curve adjustment for moderate drinking 
    // Small potential benefit for very light drinking of certain types
    let jCurveAdjustment = 0;
    if (drinksPerWeek > 0 && drinksPerWeek <= 3 && (drinkType === 'wine' || drinkType === 'beer')) {
      jCurveAdjustment = -20; // Small potential benefit for light wine/beer consumption
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
  
  const getRiskLevel = (impactDays) => {
    if (impactDays <= 30) return 'Minimal';
    if (impactDays <= 180) return 'Low';
    if (impactDays <= 730) return 'Moderate'; // Up to 2 years
    if (impactDays <= 1095) return 'High'; // Up to 3 years
    return 'Very High'; // >3 years
  };

  // Get drink type icon based on selected drink
  const getDrinkIcon = () => {
    switch(drinkType) {
      case 'beer': return <Beer className="h-5 w-5" />;
      case 'wine': return <Wine className="h-5 w-5" />;
      case 'spirits': return <Martini className="h-5 w-5" />;
      case 'cocktails': return <Martini className="h-5 w-5" />;
      case 'lowAlcohol': return <CupSoda className="h-5 w-5" />;
      default: return <GlassWater className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Alcohol and Lifespan Impact Calculator</h2>
      <p className="mb-4 text-sm text-gray-600">
        Based on recent research on alcohol consumption and mortality. This tool provides population-level estimates of potential lifespan reduction.
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type of Alcoholic Beverage</label>
          <ToggleGroup 
            type="single" 
            value={drinkType} 
            onValueChange={(value) => value && setDrinkType(value)}
            className="justify-between flex-wrap gap-2"
          >
            <ToggleGroupItem value="beer" aria-label="Beer" className="flex flex-col items-center gap-1 px-3 py-2">
              <Beer className="h-5 w-5" />
              <span className="text-xs">Beer</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="wine" aria-label="Wine" className="flex flex-col items-center gap-1 px-3 py-2">
              <Wine className="h-5 w-5" />
              <span className="text-xs">Wine</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="spirits" aria-label="Spirits" className="flex flex-col items-center gap-1 px-3 py-2">
              <Martini className="h-5 w-5" />
              <span className="text-xs">Spirits</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="cocktails" aria-label="Cocktails" className="flex flex-col items-center gap-1 px-3 py-2">
              <CupSoda className="h-5 w-5" />
              <span className="text-xs">Cocktails</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="lowAlcohol" aria-label="Low Alcohol" className="flex flex-col items-center gap-1 px-3 py-2">
              <GlassWater className="h-5 w-5" />
              <span className="text-xs">Low Alcohol</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Standard Drinks Per Week: {drinksPerWeek}
          </label>
          <Slider
            defaultValue={[7]}
            max={35}
            step={1}
            value={[drinksPerWeek]}
            onValueChange={(value) => setDrinksPerWeek(value[0])}
            className="my-4"
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
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">Estimated Impact:</h3>
            {getDrinkIcon()}
          </div>
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
