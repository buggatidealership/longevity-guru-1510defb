
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AdUnit } from './AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import InfoTooltip from '@/components/InfoTooltip';
import { Calculator, Activity, Scale, HeartPulse, Info } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// Unit conversion functions
const convertHeight = (value: number, fromUnit: string, toUnit: string): number => {
  // Convert to cm first
  let inCm: number;
  
  if (fromUnit === 'cm') {
    inCm = value;
  } else if (fromUnit === 'ft') {
    inCm = value * 30.48;
  } else if (fromUnit === 'in') {
    inCm = value * 2.54;
  } else if (fromUnit === 'm') {
    inCm = value * 100;
  } else {
    inCm = value;
  }
  
  // Convert from cm to target unit
  if (toUnit === 'cm') {
    return inCm;
  } else if (toUnit === 'ft') {
    return inCm / 30.48;
  } else if (toUnit === 'in') {
    return inCm / 2.54;
  } else if (toUnit === 'm') {
    return inCm / 100;
  } else {
    return inCm;
  }
};

// Convert from feet and inches to cm
const feetInchesToCm = (feet: number, inches: number): number => {
  return (feet * 30.48) + (inches * 2.54);
};

const convertWeight = (value: number, fromUnit: string, toUnit: string): number => {
  // Convert to kg first
  let inKg: number;
  
  if (fromUnit === 'kg') {
    inKg = value;
  } else if (fromUnit === 'lb') {
    inKg = value * 0.453592;
  } else if (fromUnit === 'st') {
    inKg = value * 6.35029;
  } else {
    inKg = value;
  }
  
  // Convert from kg to target unit
  if (toUnit === 'kg') {
    return inKg;
  } else if (toUnit === 'lb') {
    return inKg / 0.453592;
  } else if (toUnit === 'st') {
    return inKg / 6.35029;
  } else {
    return inKg;
  }
};

const MetabolismCalculator = () => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  
  // Updated height state for different units
  const [heightValue, setHeightValue] = useState<string>('');
  const [heightUnit, setHeightUnit] = useState<string>('cm');
  const [heightFeet, setHeightFeet] = useState<string>('');
  const [heightInches, setHeightInches] = useState<string>('');
  
  // Updated weight state for different units
  const [weightValue, setWeightValue] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<string>('kg');
  
  const [bodyFat, setBodyFat] = useState<string>('');
  const [activity, setActivity] = useState<string>('');
  const [formula, setFormula] = useState<string>('mifflin');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    bmr: 0,
    tdee: 0,
    ffm: 0,
    lbm: 0,
    maintenance: 0,
    mildDeficit: 0,
    moderateDeficit: 0,
    aggressiveDeficit: 0,
    mildSurplus: 0,
    moderateSurplus: 0
  });
  const isMobile = useIsMobile();

  const formulaDescriptions: Record<string, { description: string, recommendation: string }> = {
    mifflin: {
      description: 'Best for most people. Highly accurate for the general population.',
      recommendation: 'For most people, the Mifflin-St Jeor formula (default) provides the most accurate results. If you know your body fat percentage, consider using Katch-McArdle for improved accuracy.'
    },
    harris: {
      description: 'A classic formula, revised in 1984. Works well for average body types.',
      recommendation: 'Harris-Benedict tends to estimate slightly higher than Mifflin-St Jeor. It\'s a good alternative if you find the Mifflin formula doesn\'t match your experience.'
    },
    katch: {
      description: 'Best if you know your body fat %. Uses lean body mass for more accurate results.',
      recommendation: 'The Katch-McArdle formula is recommended if you know your body fat percentage, especially if you have more muscle mass than average.'
    },
    cunningham: {
      description: 'Designed for athletes and very active people. Requires body fat %.',
      recommendation: 'The Cunningham equation is particularly useful for athletes and those with higher muscle mass. It typically estimates higher than other formulas.'
    },
    oxford: {
      description: 'Based on 2023 research. Accounts for updated understanding of age-related metabolism.',
      recommendation: 'The Oxford Equations incorporate the latest research, particularly how metabolism changes with age. A good choice if you\'re over 60 or under 20.'
    }
  };

  // Get height in cm for calculations
  const getHeightInCm = (): number => {
    if (heightUnit === 'ft-in') {
      return feetInchesToCm(Number(heightFeet) || 0, Number(heightInches) || 0);
    } else {
      return convertHeight(Number(heightValue) || 0, heightUnit, 'cm');
    }
  };

  // Get weight in kg for calculations
  const getWeightInKg = (): number => {
    return convertWeight(Number(weightValue) || 0, weightUnit, 'kg');
  };

  const calculateEstimatedFFM = (weight: number, height: number, age: number, gender: string) => {
    let ffm = 0;
    if (gender === 'male') {
      ffm = (0.407 * weight) + (0.267 * height) - 19.2;
    } else {
      ffm = (0.252 * weight) + (0.473 * height) - 48.3;
    }
    return ffm;
  };

  const validateInputs = () => {
    const newErrors: Record<string, string> = {};
    
    const ageVal = Number(age);
    if (!age || isNaN(ageVal) || ageVal < 15 || ageVal > 100) {
      newErrors.age = "Please enter a valid age (15-100 years)";
    }
    
    if (!gender) {
      newErrors.gender = "Please select your biological sex";
    }
    
    // Validate height based on selected unit
    if (heightUnit === 'ft-in') {
      const feet = Number(heightFeet);
      const inches = Number(heightInches);
      if (!heightFeet || isNaN(feet) || feet < 3 || feet > 8) {
        newErrors.heightFeet = "Please enter valid feet (3-8)";
      }
      if (isNaN(inches) || inches < 0 || inches > 11) {
        newErrors.heightInches = "Please enter valid inches (0-11)";
      }
      
      const totalHeightCm = feetInchesToCm(feet, inches);
      if (totalHeightCm < 120 || totalHeightCm > 250) {
        newErrors.height = "Height must be between 120-250 cm (3'11\"-8'2\")";
      }
    } else {
      const heightVal = Number(heightValue);
      if (!heightValue || isNaN(heightVal)) {
        newErrors.height = `Please enter a valid height`;
      } else {
        const heightInCm = convertHeight(heightVal, heightUnit, 'cm');
        if (heightInCm < 120 || heightInCm > 250) {
          newErrors.height = "Height must be between 120-250 cm (3'11\"-8'2\")";
        }
      }
    }
    
    // Validate weight based on selected unit
    const weightVal = Number(weightValue);
    if (!weightValue || isNaN(weightVal)) {
      newErrors.weight = "Please enter a valid weight";
    } else {
      const weightInKg = convertWeight(weightVal, weightUnit, 'kg');
      if (weightInKg < 30 || weightInKg > 300) {
        newErrors.weight = "Weight must be between 30-300 kg (66-661 lbs)";
      }
    }
    
    const bodyFatVal = Number(bodyFat);
    if (bodyFat && (isNaN(bodyFatVal) || bodyFatVal < 3 || bodyFatVal > 60)) {
      newErrors.bodyFat = "Please enter a valid body fat % (3-60%)";
    }
    
    if (!activity) {
      newErrors.activity = "Please select your activity level";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMetabolism = () => {
    if (!validateInputs()) {
      return;
    }
    
    const ageVal = Number(age);
    const heightCm = getHeightInCm();
    const weightKg = getWeightInKg();
    const bodyFatVal = bodyFat ? Number(bodyFat) : 0;
    const activityVal = Number(activity);
    
    const lbm = weightKg * (1 - (bodyFatVal / 100));
    const ffm = bodyFatVal > 0 ? lbm : calculateEstimatedFFM(weightKg, heightCm, ageVal, gender);
    
    let bmr = 0;
    
    switch (formula) {
      case 'mifflin':
        if (gender === 'male') {
          bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * ageVal) + 5;
        } else {
          bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * ageVal) - 161;
        }
        break;
        
      case 'harris':
        if (gender === 'male') {
          bmr = (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * ageVal) + 88.362;
        } else {
          bmr = (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * ageVal) + 447.593;
        }
        break;
        
      case 'katch':
        if (bodyFatVal === 0) {
          alert("Body fat percentage helps with accuracy for the Katch-McArdle formula. Using estimated lean body mass instead.");
        }
        bmr = 370 + (21.6 * ffm);
        break;
        
      case 'cunningham':
        if (bodyFatVal === 0) {
          alert("Body fat percentage helps with accuracy for the Cunningham formula. Using estimated lean body mass instead.");
        }
        bmr = 500 + (22 * ffm);
        break;
        
      case 'oxford':
        if (gender === 'male') {
          bmr = (13.75 * weightKg) + (5 * heightCm) - (6.76 * ageVal) + 66;
        } else {
          bmr = (9.56 * weightKg) + (1.85 * heightCm) - (4.68 * ageVal) + 655;
        }
        break;
    }
    
    if (ageVal > 60) {
      const yearsOver60 = ageVal - 60;
      const reductionFactor = 1 - (0.007 * yearsOver60);
      bmr = bmr * reductionFactor;
    }
    
    const tdee = bmr * activityVal;
    const maintenance = Math.round(tdee);
    const mildDeficit = Math.round(tdee - 275);
    const moderateDeficit = Math.round(tdee - 550);
    const aggressiveDeficit = Math.round(tdee - 1100);
    const mildSurplus = Math.round(tdee + 250);
    const moderateSurplus = Math.round(tdee + 500);
    
    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      ffm: Math.round(ffm),
      lbm: Math.round(lbm),
      maintenance,
      mildDeficit,
      moderateDeficit,
      aggressiveDeficit,
      mildSurplus,
      moderateSurplus
    });
    
    setShowResults(true);
  };

  // Get display text for weight and height units
  const getWeightUnitDisplayText = (unit: string) => {
    switch (unit) {
      case 'kg': return 'Kilograms (kg)';
      case 'lb': return 'Pounds (lb)';
      case 'st': return 'Stone (st)';
      default: return 'Kilograms (kg)';
    }
  };

  const getHeightUnitDisplayText = (unit: string) => {
    switch (unit) {
      case 'cm': return 'Centimeters (cm)';
      case 'm': return 'Meters (m)';
      case 'ft-in': return 'Feet & Inches (ft\' in")';
      default: return 'Centimeters (cm)';
    }
  };

  // Get placeholder text based on selected unit
  const getWeightPlaceholder = (unit: string) => {
    switch (unit) {
      case 'kg': return 'Enter weight in kg';
      case 'lb': return 'Enter weight in pounds';
      case 'st': return 'Enter weight in stone';
      default: return 'Enter weight';
    }
  };

  const getHeightPlaceholder = (unit: string) => {
    switch (unit) {
      case 'cm': return 'Enter height in cm';
      case 'm': return 'Enter height in meters';
      default: return 'Enter height';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Advanced Metabolism Calculator</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) based on the latest scientific research.
        </p>
        <AdUnit slot="2222222222" format="horizontal" className="max-w-3xl mx-auto my-4" />
      </div>
      
      <DisclaimerAlert className="mb-6" />
      
      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="calculator" className="flex items-center gap-2">
            <Calculator className="w-4 h-4" /> Calculator
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center gap-2">
            <Info className="w-4 h-4" /> About & Science
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5" /> Personal Information
              </CardTitle>
              <CardDescription>
                Enter your details to calculate your metabolism.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">
                    Age (years)
                  </Label>
                  <Input 
                    id="age" 
                    type="number" 
                    placeholder="Enter your age"
                    min={15}
                    max={100}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className={errors.age ? "border-red-500" : ""}
                  />
                  {errors.age && <div className="text-red-500 text-sm">{errors.age}</div>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gender">
                    Gender
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender" className={errors.gender ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <div className="text-red-500 text-sm">{errors.gender}</div>}
                </div>
                
                {/* Height section with unit selection */}
                <div className="space-y-2">
                  <Label htmlFor="height-unit">Height</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select value={heightUnit} onValueChange={(value) => {
                      setHeightUnit(value);
                      // Clear existing values when switching units
                      setHeightValue('');
                      setHeightFeet('');
                      setHeightInches('');
                    }}>
                      <SelectTrigger id="height-unit">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cm">Centimeters (cm)</SelectItem>
                        <SelectItem value="m">Meters (m)</SelectItem>
                        <SelectItem value="ft-in">Feet & Inches</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {heightUnit === 'ft-in' ? (
                      <>
                        <Input
                          type="number"
                          placeholder="Feet"
                          min={3}
                          max={8}
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
                          className={errors.heightFeet ? "border-red-500" : ""}
                        />
                        <Input
                          type="number"
                          placeholder="Inches"
                          min={0}
                          max={11}
                          value={heightInches}
                          onChange={(e) => setHeightInches(e.target.value)}
                          className={errors.heightInches ? "border-red-500" : ""}
                        />
                      </>
                    ) : (
                      <Input
                        className={`col-span-2 ${errors.height ? "border-red-500" : ""}`}
                        type="number"
                        placeholder={getHeightPlaceholder(heightUnit)}
                        value={heightValue}
                        onChange={(e) => setHeightValue(e.target.value)}
                        step={heightUnit === 'm' ? '0.01' : '1'}
                        min={heightUnit === 'm' ? '1.20' : '120'}
                        max={heightUnit === 'm' ? '2.50' : '250'}
                      />
                    )}
                  </div>
                  {errors.height && <div className="text-red-500 text-sm">{errors.height}</div>}
                  {errors.heightFeet && <div className="text-red-500 text-sm">{errors.heightFeet}</div>}
                  {errors.heightInches && <div className="text-red-500 text-sm">{errors.heightInches}</div>}
                </div>
                
                {/* Weight section with unit selection */}
                <div className="space-y-2">
                  <Label htmlFor="weight-unit">Weight</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select value={weightUnit} onValueChange={(value) => {
                      // Convert the current weight to the new unit
                      if (weightValue && !isNaN(Number(weightValue))) {
                        const weightInKg = convertWeight(Number(weightValue), weightUnit, 'kg');
                        const newWeight = convertWeight(weightInKg, 'kg', value);
                        setWeightValue(Math.round(newWeight).toString());
                      }
                      setWeightUnit(value);
                    }}>
                      <SelectTrigger id="weight-unit">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">Kilograms (kg)</SelectItem>
                        <SelectItem value="lb">Pounds (lb)</SelectItem>
                        <SelectItem value="st">Stone (st)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      className={`col-span-2 ${errors.weight ? "border-red-500" : ""}`}
                      type="number"
                      placeholder={getWeightPlaceholder(weightUnit)}
                      value={weightValue}
                      onChange={(e) => setWeightValue(e.target.value)}
                      step="0.1"
                      min={weightUnit === 'kg' ? '30' : weightUnit === 'lb' ? '66' : '4.7'}
                      max={weightUnit === 'kg' ? '300' : weightUnit === 'lb' ? '661' : '47.2'}
                    />
                  </div>
                  {errors.weight && <div className="text-red-500 text-sm">{errors.weight}</div>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="body-fat" className="flex items-center gap-1">
                    Body Fat Percentage (optional)
                    <InfoTooltip text="Including your body fat percentage makes your calculation more accurate, especially if you have more muscle or less fat than average. This is optional but recommended if you know your body fat percentage." />
                  </Label>
                  <Input 
                    id="body-fat" 
                    type="number" 
                    placeholder="Enter your body fat % (if known)"
                    min={3}
                    max={60}
                    value={bodyFat}
                    onChange={(e) => setBodyFat(e.target.value)}
                    className={errors.bodyFat ? "border-red-500" : ""}
                  />
                  {errors.bodyFat && <div className="text-red-500 text-sm">{errors.bodyFat}</div>}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5" /> Activity Level
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="activity" className="flex items-center gap-1">
                    Daily Activity Level
                    <InfoTooltip text="Choose the option that best matches your typical weekly activity. Be honest about your actual activity level - many people overestimate this!" />
                  </Label>
                  <Select value={activity} onValueChange={setActivity}>
                    <SelectTrigger id="activity" className={errors.activity ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.2">Sedentary (little or no exercise)</SelectItem>
                      <SelectItem value="1.375">Lightly active (light exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="1.55">Moderately active (moderate exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="1.725">Very active (hard exercise 6-7 days/week)</SelectItem>
                      <SelectItem value="1.9">Extremely active (very hard exercise, physical job or training twice daily)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.activity && <div className="text-red-500 text-sm">{errors.activity}</div>}
                </div>
                
                <div className="mt-6 space-y-2">
                  <Label htmlFor="formula" className="flex items-center gap-1">
                    Calculation Formula
                    <InfoTooltip text="These are different scientific methods for calculating your metabolism. Each works better for different people. The default (Mifflin-St Jeor) works well for most people." />
                  </Label>
                  <Select value={formula} onValueChange={setFormula}>
                    <SelectTrigger id="formula">
                      <SelectValue placeholder="Select calculation formula" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mifflin">Mifflin-St Jeor</SelectItem>
                      <SelectItem value="harris">Harris-Benedict</SelectItem>
                      <SelectItem value="katch">Katch-McArdle</SelectItem>
                      <SelectItem value="cunningham">Cunningham</SelectItem>
                      <SelectItem value="oxford">Oxford Equations</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-sm text-gray-600 italic mt-1">
                    {formulaDescriptions[formula]?.description}
                  </div>
                  <div className="p-3 bg-green-50 border-l-4 border-green-500 text-sm mt-2">
                    {formulaDescriptions[formula]?.recommendation}
                  </div>
                </div>
                
                <Button 
                  onClick={calculateMetabolism} 
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Calculate Metabolism
                </Button>
              </div>
              
              {showResults && (
                <div className="mt-8 border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h3 className="text-xl font-semibold mb-4">Your Results</h3>
                  
                  <div className={`grid grid-cols-1 ${isMobile ? "" : "md:grid-cols-2"} gap-4`}>
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Basal Metabolic Rate (BMR)</span>
                          <InfoTooltip text="The number of calories your body needs at complete rest just to maintain basic functions like breathing, circulation, and cell production." />
                        </div>
                        <span className="font-bold text-lg">{results.bmr} calories/day</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Total Daily Energy Expenditure (TDEE)</span>
                          <InfoTooltip text="Your total daily calorie needs, including your BMR plus calories burned through daily activities and exercise." />
                        </div>
                        <span className="font-bold text-lg">{results.tdee} calories/day</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Fat-Free Mass (FFM)</span>
                          <InfoTooltip text="The weight of everything in your body except fat, including muscles, bones, organs, and water." />
                        </div>
                        <span className="font-bold text-lg">{results.ffm} kg</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Lean Body Mass (LBM)</span>
                          <InfoTooltip text="Similar to FFM, this is your weight excluding body fat. This is especially important as it drives your metabolism." />
                        </div>
                        <span className="font-bold text-lg">{results.lbm} kg</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Daily Calorie Targets</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Weight Loss section */}
                      <div className="p-4 bg-red-50 rounded shadow-sm border border-red-100">
                        <h5 className="font-medium mb-2 text-red-800">Weight Loss</h5>
                        <Table>
                          <TableBody>
                            <TableRow className="border-0">
                              <TableCell className="py-1 pl-0 pr-2 text-sm">Mild (0.25kg/week):</TableCell>
                              <TableCell className="py-1 px-0 text-sm font-semibold text-right">{results.mildDeficit} cal</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="py-1 pl-0 pr-2 text-sm">Moderate (0.5kg/week):</TableCell>
                              <TableCell className="py-1 px-0 text-sm font-semibold text-right">{results.moderateDeficit} cal</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="py-1 pl-0 pr-2 text-sm">Aggressive (1kg/week):</TableCell>
                              <TableCell className="py-1 px-0 text-sm font-semibold text-right">{results.aggressiveDeficit} cal</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      {/* Maintenance section - Updated design */}
                      <div className="p-4 bg-blue-50 rounded shadow-sm border border-blue-100">
                        <h5 className="font-medium mb-2 text-blue-800">Maintenance</h5>
                        <div className="flex flex-col justify-center items-center h-[80px]">
                          <div className="text-sm text-gray-600 mb-1">Daily calories to maintain weight</div>
                          <div className="font-bold text-2xl text-blue-700">{results.maintenance}</div>
                          <div className="text-xs text-gray-500 mt-1">calories/day</div>
                        </div>
                      </div>
                      
                      {/* Weight Gain section */}
                      <div className="p-4 bg-green-50 rounded shadow-sm border border-green-100">
                        <h5 className="font-medium mb-2 text-green-800">Weight Gain</h5>
                        <Table>
                          <TableBody>
                            <TableRow className="border-0">
                              <TableCell className="py-1 pl-0 pr-2 text-sm">Mild (0.25kg/week):</TableCell>
                              <TableCell className="py-1 px-0 text-sm font-semibold text-right">{results.mildSurplus} cal</TableCell>
                            </TableRow>
                            <TableRow className="border-0">
                              <TableCell className="py-1 pl-0 pr-2 text-sm">Moderate (0.5kg/week):</TableCell>
                              <TableCell className="py-1 px-0 text-sm font-semibold text-right">{results.moderateSurplus} cal</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5" /> Understanding Your Metabolism
              </CardTitle>
              <CardDescription>
                Learn how metabolism works and how to optimize it.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">What is Metabolism?</h3>
                <p>
                  Metabolism refers to all the chemical processes that occur within your body to maintain life. These processes include converting food and drinks into energy and building or repairing your body. Your metabolic rate is the rate at which your body burns calories to perform these essential functions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Understanding BMR and TDEE</h3>
                <p className="mb-2">
                  <strong>Basal Metabolic Rate (BMR):</strong> This is the number of calories your body needs at complete rest just to perform essential functions like breathing, circulation, cell production, and nutrient processing. BMR typically accounts for 60-70% of your total daily calorie expenditure.
                </p>
                <p>
                  <strong>Total Daily Energy Expenditure (TDEE):</strong> This is your total daily calorie needs, which includes your BMR plus additional calories for daily activities and exercise. TDEE is what you need to maintain your current weight.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Calculation Formulas</h3>
                <p className="mb-2">This calculator offers several well-established formulas for estimating BMR:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Mifflin-St Jeor (Default):</strong> Developed in 1990, this is considered the most accurate for most people.
                  </li>
                  <li>
                    <strong>Harris-Benedict:</strong> A classic formula originally developed in 1919 and revised in 1984.
                  </li>
                  <li>
                    <strong>Katch-McArdle:</strong> Takes into account lean body mass, making it more accurate for people who know their body fat percentage.
                  </li>
                  <li>
                    <strong>Cunningham:</strong> Similar to Katch-McArdle but uses a different formula, often preferred for athletes.
                  </li>
                  <li>
                    <strong>Oxford Equations:</strong> Based on more recent research that accounts for changing metabolic rates across different age groups.
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How to Use Your Results</h3>
                <p className="mb-2">
                  <strong>Weight Loss:</strong> To lose weight, consume fewer calories than your TDEE. A deficit of 500-1000 calories per day will result in approximately 0.5-1kg of weight loss per week.
                </p>
                <p className="mb-2">
                  <strong>Weight Maintenance:</strong> To maintain your weight, consume calories equal to your TDEE.
                </p>
                <p>
                  <strong>Weight Gain:</strong> To gain weight, consume more calories than your TDEE. A surplus of 250-500 calories per day will result in approximately 0.25-0.5kg of weight gain per week.
                </p>
              </div>
              
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold mb-2">Important Considerations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    These calculations provide estimates based on statistical averages. Individual metabolism can vary.
                  </li>
                  <li>
                    For the most accurate results, use the Katch-McArdle or Cunningham formula with a measured body fat percentage.
                  </li>
                  <li>
                    Be honest about your activity level. Many people overestimate how active they are.
                  </li>
                  <li>
                    Factors like genetics, hormones, sleep quality, stress, and certain medications can all affect your metabolism.
                  </li>
                  <li>
                    Consider tracking your actual intake and weight changes to fine-tune your calorie targets.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MetabolismCalculator;
