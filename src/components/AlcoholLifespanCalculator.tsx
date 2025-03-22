import React, { useState, useEffect } from 'react';
import { Beer, Wine, Martini, CupSoda, BarChart4 } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { AdUnit } from './AdUnit';

const AlcoholLifespanCalculator = () => {
  const [drinkType, setDrinkType] = useState('beer');
  const [drinksPerWeek, setDrinksPerWeek] = useState(7);
  const [result, setResult] = useState(null);
  
  // Define drink types and their relative impact factors
  const drinkTypes = {
    'beer': { factor: 0.8, label: 'Beer', icon: <Beer className="h-5 w-5" /> },
    'wine': { factor: 1.0, label: 'Wine', icon: <Wine className="h-5 w-5" /> },
    'spirits': { factor: 1.3, label: 'Spirits', icon: <Martini className="h-5 w-5" /> },
    'cocktails': { factor: 1.2, label: 'Cocktails', icon: <CupSoda className="h-5 w-5" /> }
  };
  
  // Minutes of life lost per standard drink (adjusted by drink type)
  const minutesLostPerDrinkPerDay = 25;
  
  // Calculate estimated impact when inputs change
  useEffect(() => {
    calculateImpact(drinksPerWeek);
  }, [drinkType, drinksPerWeek]);
  
  const calculateImpact = (weeklyDrinks) => {
    // Base impact calculation
    const drinkFactor = drinkTypes[drinkType].factor;
    const dailyDrinks = weeklyDrinks / 7;
    
    // Calculate daily minutes lost adjusted by drink type
    const dailyMinutesLost = dailyDrinks * minutesLostPerDrinkPerDay * drinkFactor;
    
    // Standard exposure period for lifetime impact calculation
    const exposureYears = 40;
    const exposureDays = exposureYears * 365;
    
    // Calculate total impact in minutes
    let totalMinutesLost = dailyMinutesLost * exposureDays;
    
    // J-curve adjustment for very light drinking of certain types
    if (weeklyDrinks > 0 && weeklyDrinks <= 3 && (drinkType === 'wine' || drinkType === 'beer')) {
      totalMinutesLost -= 28800; // Approximately 20 days worth of minutes
    }
    
    // Heavy drinking penalty
    if (weeklyDrinks > 14) {
      // Progressive risk increase with heavier drinking
      const extraPenaltyMinutes = Math.pow(1.1, weeklyDrinks - 14) * 72000; // ~50 days in minutes
      totalMinutesLost += extraPenaltyMinutes;
    }
    
    // Convert minutes to days
    const totalDaysLost = totalMinutesLost / (60 * 24);
    
    // Calculate years and remaining days
    const yearsLost = Math.floor(totalDaysLost / 365);
    const remainingDays = Math.round(totalDaysLost % 365);
    
    setResult({
      totalDaysLost: Math.round(totalDaysLost),
      yearsLost: yearsLost,
      daysLost: remainingDays,
      weeksLost: Math.round(totalDaysLost / 7),
      monthsLost: Math.round(totalDaysLost / 30),
      dailyMinutesLost: Math.round(dailyMinutesLost),
      riskLevel: getRiskLevel(totalDaysLost)
    });
  };
  
  const getRiskLevel = (daysLost) => {
    if (daysLost <= 30) return { level: 'Minimal', color: 'text-green-600' };
    if (daysLost <= 180) return { level: 'Low', color: 'text-green-500' };
    if (daysLost <= 730) return { level: 'Moderate', color: 'text-yellow-500' }; // Up to 2 years
    if (daysLost <= 1095) return { level: 'High', color: 'text-orange-500' }; // Up to 3 years
    return { level: 'Very High', color: 'text-red-600' }; // >3 years
  };
  
  return (
    <div className="space-y-6">
      <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Alcohol and Lifespan Impact Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          Based on recent research on alcohol consumption and mortality. This tool provides population-level estimates of potential lifespan reduction.
        </p>
        
        <div className="space-y-5">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Type of Alcoholic Beverage</Label>
            <ToggleGroup 
              type="single" 
              value={drinkType} 
              onValueChange={(value) => value && setDrinkType(value)}
              className="justify-between flex-wrap gap-2"
            >
              {Object.entries(drinkTypes).map(([key, { label, icon }]) => (
                <ToggleGroupItem 
                  key={key}
                  value={key} 
                  aria-label={label} 
                  className="flex flex-col items-center gap-1 px-3 py-2"
                >
                  {icon}
                  <span className="text-xs">{label}</span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium text-gray-700">Drinks Per Week</Label>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{drinksPerWeek} drinks per week</span>
              </div>
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
              <p className="text-xs text-gray-500 mt-1">
                A standard drink is: 12oz beer (5%), 5oz wine (12%), or 1.5oz spirits (40%)
              </p>
            </div>
          </div>
        </div>
        
        {result && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-semibold text-lg">Estimated Impact:</h3>
              {drinkTypes[drinkType].icon}
            </div>
            
            <div className="p-3 bg-white rounded-lg border mb-3">
              <p className="font-medium">
                Potential lifespan reduction: 
                <span className="font-bold ml-1">
                  {result.yearsLost > 0 ? `${result.yearsLost} years, ` : ''}{result.daysLost} days
                </span>
              </p>
              <p className="mt-1">
                Risk level: <span className={`font-semibold ${result.riskLevel.color}`}>
                  {result.riskLevel.level}
                </span>
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">This equals approximately:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-1">
                  <BarChart4 className="h-4 w-4 text-gray-500" />
                  {result.monthsLost} months
                </li>
                <li className="flex items-center gap-1">
                  <BarChart4 className="h-4 w-4 text-gray-500" />
                  {result.weeksLost} weeks
                </li>
                <li className="flex items-center gap-1">
                  <BarChart4 className="h-4 w-4 text-gray-500" />
                  {result.totalDaysLost} days
                </li>
                <li className="flex items-center gap-1">
                  <BarChart4 className="h-4 w-4 text-gray-500" />
                  {result.dailyMinutesLost} min/day
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlcoholLifespanCalculator;
