
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator, Info, DollarSign, Syringe, User, MapPin, RefreshCw } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { AdUnit } from './AdUnit';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InfoTooltip from './InfoTooltip';

// Treatment area data with units range and average cost
const treatmentAreas = {
  forehead: {
    name: "Forehead Lines",
    unitsRange: [10, 30],
    defaultUnits: 20
  },
  glabellar: {
    name: "Glabellar Lines (Frown Lines/11s)",
    unitsRange: [15, 40],
    defaultUnits: 25
  },
  crowsFeet: {
    name: "Crow's Feet",
    unitsRange: [10, 30],
    defaultUnits: 24
  },
  bunnyLines: {
    name: "Bunny Lines (Nose)",
    unitsRange: [5, 15],
    defaultUnits: 10
  },
  perioral: {
    name: "Perioral Lines (around mouth)",
    unitsRange: [4, 10],
    defaultUnits: 6
  },
  masseter: {
    name: "Masseter (jaw slimming)",
    unitsRange: [20, 60],
    defaultUnits: 40
  },
  neckBands: {
    name: "Neck Bands (Platysmal Bands)",
    unitsRange: [25, 60],
    defaultUnits: 40
  },
  underarms: {
    name: "Underarms (Hyperhidrosis)",
    unitsRange: [50, 100],
    defaultUnits: 50
  }
};

// Country-specific pricing
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
  custom: { currency: 'Custom', symbol: '$', min: 15, max: 15, avg: 15 }
};

const BotoxCalculator = () => {
  // Patient characteristics
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('35-50');
  const [experience, setExperience] = useState('first');
  const [muscleStrength, setMuscleStrength] = useState('average');
  const [desired, setDesired] = useState('moderate');
  
  // Pricing settings
  const [country, setCountry] = useState('usa');
  const [customPrice, setCustomPrice] = useState(15);
  const [useCustomPrice, setUseCustomPrice] = useState(false);
  
  // Treatment areas
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  
  // UI state
  const [showResults, setShowResults] = useState(false);
  
  // Get current pricing based on selected country
  const getCurrentPricing = () => {
    if (useCustomPrice) {
      return { ...countryPricing.custom, min: customPrice, max: customPrice, avg: customPrice };
    }
    return countryPricing[country as keyof typeof countryPricing];
  };
  
  // Multipliers based on patient factors
  const getMultipliers = () => {
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
  const calculateDosage = () => {
    const { genderMultiplier, ageMultiplier, experienceMultiplier, strengthMultiplier, desiredMultiplier } = getMultipliers();
    const totalMultiplier = genderMultiplier * ageMultiplier * experienceMultiplier * strengthMultiplier * desiredMultiplier;
    const pricing = getCurrentPricing();
    
    const results: any = {};
    let totalUnits = 0;
    
    selectedAreas.forEach(area => {
      const areaData = treatmentAreas[area as keyof typeof treatmentAreas];
      let baseUnits = areaData.defaultUnits;
      
      // Special case for crow's feet and age
      if (area === 'crowsFeet' && age === 'over50') {
        baseUnits = Math.round(baseUnits * 1.2);
      } else if (area === 'forehead' && age === 'over50') {
        baseUnits = Math.round(baseUnits * 1.1);
      }
      
      // Apply general multipliers
      const adjustedUnits = Math.round(baseUnits * totalMultiplier);
      
      results[area] = { 
        units: adjustedUnits,
        cost: Math.round(adjustedUnits * pricing.avg)
      };
      
      totalUnits += adjustedUnits;
    });
    
    const totalCost = Math.round(totalUnits * pricing.avg);
    const minTotalCost = Math.round(totalUnits * pricing.min);
    const maxTotalCost = Math.round(totalUnits * pricing.max);
    
    return { 
      areaResults: results, 
      totalUnits,
      totalCost,
      minTotalCost,
      maxTotalCost,
      currency: pricing.currency,
      symbol: pricing.symbol
    };
  };
  
  // Toggle selection of treatment area
  const toggleAreaSelection = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };
  
  const handleCountryChange = (value: string) => {
    setCountry(value);
    setUseCustomPrice(value === 'custom');
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
    setSelectedAreas([]);
    setShowResults(false);
  };
  
  // Format currency
  const formatCurrency = (amount: number) => {
    const pricing = getCurrentPricing();
    return `${pricing.symbol}${amount}`;
  };
  
  const results = showResults ? calculateDosage() : null;
  const anyAreaSelected = selectedAreas.length > 0;
  const currentPricing = getCurrentPricing();
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <AdUnit slot="5555555555" format="horizontal" className="max-w-3xl mx-auto my-4" />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="mr-2 h-5 w-5 text-primary" />
            Patient Characteristics
          </CardTitle>
          <CardDescription>
            Enter your details to get personalized Botox dosage recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Gender selection */}
            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup 
                value={gender} 
                onValueChange={setGender} 
                className="flex gap-4"
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
            
            {/* Age Range */}
            <div className="space-y-2">
              <Label htmlFor="age">Age Range</Label>
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
            
            {/* Treatment Experience */}
            <div className="space-y-2">
              <Label htmlFor="experience">
                Treatment Experience
                <InfoTooltip content="Your previous experience with Botox treatments" />
              </Label>
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first">First Time</SelectItem>
                  <SelectItem value="some">Some Experience (1-3 treatments)</SelectItem>
                  <SelectItem value="experienced">Experienced (4+ treatments)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Facial Muscle Strength */}
            <div className="space-y-2">
              <Label htmlFor="muscleStrength">
                Facial Muscle Strength
                <InfoTooltip content="Stronger facial muscles may require more units" />
              </Label>
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
            
            {/* Desired Result */}
            <div className="space-y-2">
              <Label htmlFor="desired">
                Desired Result
                <InfoTooltip content="How noticeable you want the results to be" />
              </Label>
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
            
            {/* Country/Region */}
            <div className="space-y-2">
              <Label htmlFor="country">
                Country/Region
                <InfoTooltip content="Affects price estimates" />
              </Label>
              <Select value={country} onValueChange={handleCountryChange}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
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
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                    <Input
                      id="customPrice"
                      type="number"
                      min={1}
                      value={customPrice}
                      onChange={(e) => setCustomPrice(Number(e.target.value))}
                      className="pl-7"
                    />
                  </div>
                </div>
              )}
              
              <p className="text-xs text-muted-foreground mt-1">
                {!useCustomPrice && `Typical range in ${currentPricing.currency}: ${currentPricing.symbol}${currentPricing.min}-${currentPricing.symbol}${currentPricing.max} per unit`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Syringe className="mr-2 h-5 w-5 text-primary" />
            Select Botox Treatment Areas
          </CardTitle>
          <CardDescription>
            Choose the areas you want to treat with Botox
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.entries(treatmentAreas).map(([areaKey, areaData]) => (
              <div key={areaKey} className="border rounded-md p-2 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id={`area-${areaKey}`}
                    checked={selectedAreas.includes(areaKey)}
                    onCheckedChange={() => toggleAreaSelection(areaKey)}
                  />
                  <label 
                    htmlFor={`area-${areaKey}`} 
                    className={`text-sm font-medium cursor-pointer ${selectedAreas.includes(areaKey) ? 'text-primary' : ''}`}
                  >
                    {areaData.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-6">
            <Button 
              onClick={resetForm} 
              variant="outline"
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Reset
            </Button>
            <Button 
              onClick={handleCalculate} 
              disabled={!anyAreaSelected}
              className="gap-2"
            >
              <Calculator className="h-4 w-4" />
              Calculate
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Results section */}
      {showResults && results && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="mr-2 h-5 w-5 text-primary" />
              Botox Treatment Summary
            </CardTitle>
            <CardDescription>
              Your personalized Botox dosage recommendations based on your profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Treatment Area</TableHead>
                  <TableHead className="text-right">Units</TableHead>
                  <TableHead className="text-right">Est. Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(results.areaResults).map(([area, data]: [string, any]) => (
                  <TableRow key={area}>
                    <TableCell className="font-medium">
                      {treatmentAreas[area as keyof typeof treatmentAreas].name}
                    </TableCell>
                    <TableCell className="text-right">{data.units}</TableCell>
                    <TableCell className="text-right">{results.symbol}{data.cost}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-t-2">
                  <TableCell className="font-bold">TOTAL</TableCell>
                  <TableCell className="text-right font-bold">{results.totalUnits} units</TableCell>
                  <TableCell className="text-right font-bold">{results.symbol}{results.totalCost}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <div className="mt-6">
              <div className="bg-primary/5 rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Info className="h-4 w-4 mr-2 text-primary" />
                  Price Range Information
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Estimated cost range: {results.symbol}{results.minTotalCost} - {results.symbol}{results.maxTotalCost}
                </p>
                <p className="text-sm text-muted-foreground">
                  Currency: {results.currency}
                </p>
              </div>
              
              <div className="text-xs text-muted-foreground mt-4 italic">
                Note: Final dosage and pricing should be determined by a qualified healthcare provider.
                Costs may vary significantly by location, provider experience, and practice type.
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
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
