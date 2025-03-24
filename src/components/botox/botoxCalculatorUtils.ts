
import { countryPricing, treatmentAreas } from './botoxData';

export type PatientCharacteristics = {
  gender: string;
  age: string;
  experience: string;
  muscleStrength: string;
  desired: string;
}

export type PricingSettings = {
  country: string;
  customPrice: number;
  useCustomPrice: boolean;
}

// Get current pricing based on selected country
export const getCurrentPricing = (pricingSettings: PricingSettings) => {
  const { country, customPrice, useCustomPrice } = pricingSettings;
  
  if (useCustomPrice) {
    return { ...countryPricing.custom, min: customPrice, max: customPrice, avg: customPrice };
  }
  return countryPricing[country as keyof typeof countryPricing];
};

// Multipliers based on patient factors
export const getMultipliers = (characteristics: PatientCharacteristics) => {
  const { gender, age, experience, muscleStrength, desired } = characteristics;
  
  const genderMultiplier = gender === 'male' ? 1.2 : 1.0;
  
  // Age multiplier
  let ageMultiplier = 1.0;
  if (age === 'under35') ageMultiplier = 0.9;
  else if (age === 'over50') ageMultiplier = 1.1;
  
  let experienceMultiplier = 1.0;
  if (experience === 'first') experienceMultiplier = 0.8;
  else if (experience === 'experienced') experienceMultiplier = 1.1;
  
  let strengthMultiplier = 1.0;
  if (muscleStrength === 'weak') strengthMultiplier = 0.9;
  else if (muscleStrength === 'strong') strengthMultiplier = 1.2;
  
  let desiredMultiplier = 1.0;
  if (desired === 'subtle') desiredMultiplier = 0.85;
  else if (desired === 'dramatic') desiredMultiplier = 1.15;
  
  return {
    genderMultiplier,
    ageMultiplier,
    experienceMultiplier,
    strengthMultiplier,
    desiredMultiplier
  };
};

// Calculate recommended Botox dosages based on all factors
export const calculateDosage = (
  characteristics: PatientCharacteristics,
  pricingSettings: PricingSettings,
  selectedAreas: string[]
) => {
  const multipliers = getMultipliers(characteristics);
  const { genderMultiplier, ageMultiplier, experienceMultiplier, strengthMultiplier, desiredMultiplier } = multipliers;
  
  const totalMultiplier = genderMultiplier * ageMultiplier * experienceMultiplier * strengthMultiplier * desiredMultiplier;
  const pricing = getCurrentPricing(pricingSettings);
  
  const areaResults: Record<string, { units: number, cost: number }> = {};
  let totalUnits = 0;
  
  selectedAreas.forEach(area => {
    const areaData = treatmentAreas[area as keyof typeof treatmentAreas];
    let baseUnits = areaData.defaultUnits;
    
    // Special case for crow's feet and age
    if (area === 'crowsFeet' && characteristics.age === 'over50') {
      baseUnits = Math.round(baseUnits * 1.2);
    } else if (area === 'forehead' && characteristics.age === 'over50') {
      baseUnits = Math.round(baseUnits * 1.1);
    }
    
    // Apply general multipliers
    const adjustedUnits = Math.round(baseUnits * totalMultiplier);
    
    areaResults[area] = { 
      units: adjustedUnits,
      cost: Math.round(adjustedUnits * pricing.avg)
    };
    
    totalUnits += adjustedUnits;
  });
  
  const totalCost = Math.round(totalUnits * pricing.avg);
  const minTotalCost = Math.round(totalUnits * pricing.min);
  const maxTotalCost = Math.round(totalUnits * pricing.max);
  
  return { 
    areaResults, 
    totalUnits,
    totalCost,
    minTotalCost,
    maxTotalCost,
    currency: pricing.currency,
    symbol: pricing.symbol
  };
};

// Format currency
export const formatCurrency = (amount: number, pricingSettings: PricingSettings) => {
  const pricing = getCurrentPricing(pricingSettings);
  return `${pricing.symbol}${amount}`;
};
