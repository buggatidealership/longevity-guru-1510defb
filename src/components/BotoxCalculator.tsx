
import React, { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Activity, Brain, Bot, Syringe } from 'lucide-react';
import { AdUnit } from './AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import InfoTooltip from '@/components/InfoTooltip';

const BotoxCalculator = () => {
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('35-50');
  const [experience, setExperience] = useState('first');
  const [muscleStrength, setMuscleStrength] = useState('average');
  const [desired, setDesired] = useState('moderate');
  const [country, setCountry] = useState('usa');
  const [customPrice, setCustomPrice] = useState(15);
  const [useCustomPrice, setUseCustomPrice] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState({
    glabellar: false,
    forehead: false,
    crowsFeet: false,
    bunnyLines: false,
    perioral: false,
    masseter: false,
    neckBands: false
  });
  
  const [showResults, setShowResults] = useState(false);

  // Country-specific pricing (average price per unit in local currency)
  const countryPricing = {
    usa: { currency: 'USD', symbol: '$', min: 10, max: 20, avg: 15 },
    uk: { currency: 'GBP', symbol: '£', min: 8, max: 15, avg: 12 },
    canada: { currency: 'CAD', symbol: 'CA$', min: 9, max: 16, avg: 12 },
    australia: { currency: 'AUD', symbol: 'A$', min: 12, max: 22, avg: 17 },
    eu: { currency: 'EUR', symbol: '€', min: 8, max: 18, avg: 13 },
    uae: { currency: 'AED', symbol: 'AED', min: 40, max: 80, avg: 60 },
    india: { currency: 'INR', symbol: '₹', min: 350, max: 600, avg: 450 },
    brazil: { currency: 'BRL', symbol: 'R$', min: 40, max: 90, avg: 65 },
    japan: { currency: 'JPY', symbol: '¥', min: 1500, max: 3000, avg: 2200 },
    southkorea: { currency: 'KRW', symbol: '₩', min: 10000, max: 30000, avg: 20000 },
    singapore: { currency: 'SGD', symbol: 'S$', min: 15, max: 25, avg: 20 },
    custom: { currency: 'Custom', symbol: '$', min: customPrice, max: customPrice, avg: customPrice }
  };

  // Base dosage ranges based on research
  const baseDosages = {
    glabellar: { min: 20, max: 40 },
    forehead: { min: 10, max: 30 },
    crowsFeet: { min: 12, max: 24 },
    bunnyLines: { min: 5, max: 10 },
    perioral: { min: 4, max: 8 },
    masseter: { min: 40, max: 60 },
    neckBands: { min: 25, max: 50 }
  };

  // Get current pricing based on selected country
  const getCurrentPricing = () => {
    if (useCustomPrice) {
      return { ...countryPricing.custom, min: customPrice, max: customPrice, avg: customPrice };
    }
    return countryPricing[country];
  };

  // Multipliers based on patient factors
  const getMultipliers = () => {
    const genderMultiplier = gender === 'male' ? 1.2 : 1.0;
    
    // Age multiplier - research shows older patients may need different dosing
    let ageMultiplier = 1.0;
    if (age === 'under35') ageMultiplier = 0.9;  // Younger patients often need less
    else if (age === 'over50') ageMultiplier = 1.1;  // Older patients may need more initially
    
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

  const calculateDosage = () => {
    const { genderMultiplier, ageMultiplier, experienceMultiplier, strengthMultiplier, desiredMultiplier } = getMultipliers();
    const totalMultiplier = genderMultiplier * ageMultiplier * experienceMultiplier * strengthMultiplier * desiredMultiplier;
    const pricing = getCurrentPricing();
    
    const results: Record<string, any> = {};
    let totalUnits = 0;
    
    for (const area in selectedAreas) {
      if (selectedAreas[area as keyof typeof selectedAreas]) {
        const base = baseDosages[area as keyof typeof baseDosages];
        
        // Special case for crow's feet and age
        let minDose = base.min;
        let maxDose = base.max;
        
        if (area === 'crowsFeet' && age === 'over50') {
          // Older patients often need more units for crow's feet
          minDose = Math.round(minDose * 1.2);
          maxDose = Math.round(maxDose * 1.2);
        } else if (area === 'forehead' && age === 'over50') {
          // Older patients may need specific adjustments for forehead
          minDose = Math.round(minDose * 1.1);
          maxDose = Math.round(maxDose * 1.1);
        }
        
        // Apply general multipliers
        minDose = Math.round(minDose * totalMultiplier);
        maxDose = Math.round(maxDose * totalMultiplier);
        
        results[area] = { 
          min: minDose, 
          max: maxDose,
          minCost: Math.round(minDose * pricing.min),
          maxCost: Math.round(maxDose * pricing.max)
        };
        totalUnits += (minDose + maxDose) / 2; // Average for total calculation
      }
    }
    
    const totalCostMin = Math.round(totalUnits * pricing.min * 0.9); // Slight discount for total estimate (min)
    const totalCostMax = Math.round(totalUnits * pricing.max * 1.1); // Upper range for total estimate (max)
    
    return { 
      areaResults: results, 
      totalUnits: Math.round(totalUnits),
      totalCostMin,
      totalCostMax,
      currency: pricing.currency,
      symbol: pricing.symbol
    };
  };

  const handleToggleArea = (area: string) => {
    setSelectedAreas({
      ...selectedAreas,
      [area]: !selectedAreas[area as keyof typeof selectedAreas]
    });
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetForm = () => {
    setGender('female');
    setAge('35-50');
    setExperience('first');
    setMuscleStrength('average');
    setDesired('moderate');
    setCountry('usa');
    setCustomPrice(15);
    setUseCustomPrice(false);
    setSelectedAreas({
      glabellar: false,
      forehead: false,
      crowsFeet: false,
      bunnyLines: false,
      perioral: false,
      masseter: false,
      neckBands: false
    });
    setShowResults(false);
  };

  const areaLabels: Record<string, string> = {
    glabellar: "Glabellar Lines (between eyebrows)",
    forehead: "Forehead Lines",
    crowsFeet: "Crow's Feet (around eyes)",
    bunnyLines: "Bunny Lines (nose)",
    perioral: "Perioral Lines (around mouth)",
    masseter: "Masseter (jaw slimming)",
    neckBands: "Neck Bands"
  };

  const results = showResults ? calculateDosage() : null;
  const anyAreaSelected = Object.values(selectedAreas).some(value => value);
  const currentPricing = getCurrentPricing();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Botox Dosage and Cost Calculator</h1>
        <p className="text-muted-foreground mt-2 mb-4">
          Estimate your Botox treatment dosage and costs based on personalized factors
        </p>
        <AdUnit slot="2222222222" format="horizontal" className="max-w-3xl mx-auto my-4" />
      </div>
      
      <DisclaimerAlert 
        title="Medical Disclaimer" 
        content="This calculator provides estimates only and should not replace professional medical advice. Actual Botox dosages and costs will vary based on your provider's assessment, technique, and local pricing." 
        icon={<Syringe className="h-5 w-5 text-amber-400" />}
      />
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Botox Treatment Calculator
          </CardTitle>
          <CardDescription>
            Calculate estimated Botox dosages and costs based on your personal factors and treatment areas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="gender">Gender</Label>
              <InfoTooltip content="Males generally require higher dosages due to stronger facial muscles" />
            </div>
            <RadioGroup 
              id="gender" 
              value={gender} 
              onValueChange={setGender} 
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="age">Age Range</Label>
              <InfoTooltip content="Dosage requirements can vary by age due to changes in muscle strength and skin elasticity" />
            </div>
            <Select value={age} onValueChange={setAge}>
              <SelectTrigger id="age">
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under35">Under 35</SelectItem>
                <SelectItem value="35-50">35-50</SelectItem>
                <SelectItem value="over50">Over 50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="experience">Treatment Experience</Label>
              <InfoTooltip content="First-time users often receive lower dosages, while experienced users might need more for the same effect" />
            </div>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger id="experience">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">First Time</SelectItem>
                <SelectItem value="some">Some Experience (1-3 treatments)</SelectItem>
                <SelectItem value="experienced">Experienced (4+ treatments)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="muscleStrength">Facial Muscle Strength</Label>
              <InfoTooltip content="Stronger facial muscles typically require higher dosages to achieve the desired effect" />
            </div>
            <Select value={muscleStrength} onValueChange={setMuscleStrength}>
              <SelectTrigger id="muscleStrength">
                <SelectValue placeholder="Select muscle strength" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weak">Weak</SelectItem>
                <SelectItem value="average">Average</SelectItem>
                <SelectItem value="strong">Strong</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="desired">Desired Result</Label>
              <InfoTooltip content="Your preference for subtle to dramatic results affects dosage recommendations" />
            </div>
            <Select value={desired} onValueChange={setDesired}>
              <SelectTrigger id="desired">
                <SelectValue placeholder="Select desired result" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="subtle">Subtle</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="dramatic">Dramatic</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="country">Country/Region</Label>
              <InfoTooltip content="Botox pricing varies significantly by country and region" />
            </div>
            <Select 
              value={country} 
              onValueChange={(value) => {
                setCountry(value);
                setUseCustomPrice(value === 'custom');
              }}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country/region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">United States (USD)</SelectItem>
                <SelectItem value="uk">United Kingdom (GBP)</SelectItem>
                <SelectItem value="canada">Canada (CAD)</SelectItem>
                <SelectItem value="australia">Australia (AUD)</SelectItem>
                <SelectItem value="eu">European Union (EUR)</SelectItem>
                <SelectItem value="uae">United Arab Emirates (AED)</SelectItem>
                <SelectItem value="india">India (INR)</SelectItem>
                <SelectItem value="brazil">Brazil (BRL)</SelectItem>
                <SelectItem value="japan">Japan (JPY)</SelectItem>
                <SelectItem value="southkorea">South Korea (KRW)</SelectItem>
                <SelectItem value="singapore">Singapore (SGD)</SelectItem>
                <SelectItem value="custom">Custom Price</SelectItem>
              </SelectContent>
            </Select>
            
            {useCustomPrice && (
              <div className="mt-2">
                <Label htmlFor="customPrice" className="text-sm">Enter Custom Price Per Unit</Label>
                <Input
                  id="customPrice"
                  type="number"
                  min="1"
                  value={customPrice}
                  onChange={(e) => setCustomPrice(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            )}
            
            {!useCustomPrice && (
              <p className="text-xs text-muted-foreground mt-1">
                Typical range in {countryPricing[country as keyof typeof countryPricing].currency}: {countryPricing[country as keyof typeof countryPricing].symbol}{countryPricing[country as keyof typeof countryPricing].min}-{countryPricing[country as keyof typeof countryPricing].max} per unit
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Treatment Areas</Label>
              <InfoTooltip content="Select all areas where you plan to receive Botox treatment" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {Object.keys(selectedAreas).map((area) => (
                <div key={area} className="flex items-start space-x-2">
                  <Checkbox 
                    id={area} 
                    checked={selectedAreas[area as keyof typeof selectedAreas]} 
                    onCheckedChange={() => handleToggleArea(area)}
                  />
                  <Label 
                    htmlFor={area} 
                    className="text-sm leading-tight"
                  >
                    {areaLabels[area]}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-6 pt-4 border-t">
            <Button
              variant="outline"
              onClick={resetForm}
            >
              Reset
            </Button>
            <Button
              disabled={!anyAreaSelected}
              onClick={handleCalculate}
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {showResults && results && (
        <Card className="mt-6 bg-primary-foreground border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Botox Treatment Results
            </CardTitle>
            <CardDescription>
              Estimated dosages and costs based on your selections
            </CardDescription>
          </CardHeader>
          <CardContent>
            {Object.keys(results.areaResults).length > 0 ? (
              <>
                <div className="space-y-4 mb-6">
                  {Object.keys(results.areaResults).map((area) => (
                    <div key={area} className="border-b pb-2">
                      <div className="flex justify-between font-medium">
                        <span>{areaLabels[area]}</span>
                        <span>
                          {results.areaResults[area].min}-{results.areaResults[area].max} units
                        </span>
                      </div>
                      <div className="flex justify-end text-sm text-muted-foreground">
                        <span>Est. Cost: {results.symbol}{results.areaResults[area].minCost}-{results.symbol}{results.areaResults[area].maxCost}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <div className="font-bold flex justify-between text-lg">
                    <span>Estimated Total:</span>
                    <span>{results.totalUnits} units</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Estimated Cost Range:</span>
                    <span className="font-medium">{results.symbol}{results.totalCostMin}-{results.symbol}{results.totalCostMax}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <span>Currency: {results.currency}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Note: Final dosage and pricing should be determined by a qualified healthcare provider.
                  Costs may vary significantly by location, provider experience, and practice type.
                </p>
              </>
            ) : (
              <p>Please select at least one treatment area.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BotoxCalculator;
