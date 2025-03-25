
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InfoTooltip from '@/components/InfoTooltip';
import { AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

interface MacronutrientResult {
  tdee: number;
  protein: number;
  carbs: number;
  fats: number;
  proteinPercentage: number;
  carbsPercentage: number;
  fatsPercentage: number;
}

const MacronutrientCalculator = () => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [bodyFat, setBodyFat] = useState<string>('');
  const [measurementSystem, setMeasurementSystem] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<MacronutrientResult | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Convert height and weight based on measurement system
  const getMetricValues = () => {
    if (measurementSystem === 'metric') {
      return {
        heightCm: parseFloat(height),
        weightKg: parseFloat(weight)
      };
    } else {
      // Convert from imperial to metric
      // Height from inches to cm (1 inch = 2.54 cm)
      // Weight from lbs to kg (1 lb = 0.453592 kg)
      return {
        heightCm: parseFloat(height) * 2.54,
        weightKg: parseFloat(weight) * 0.453592
      };
    }
  };

  // Calculate BMR using Mifflin-St Jeor Equation
  const calculateBMR = (heightCm: number, weightKg: number, ageYears: number, gender: string): number => {
    if (gender === 'male') {
      return 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
    } else {
      return 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
    }
  };

  // Calculate TDEE based on activity level
  const calculateTDEE = (bmr: number, activity: string): number => {
    const activityMultipliers = {
      'sedentary': 1.2, // Little or no exercise
      'lightly-active': 1.375, // Light exercise/sports 1-3 days/week
      'moderately-active': 1.55, // Moderate exercise/sports 3-5 days/week
      'very-active': 1.725, // Hard exercise/sports 6-7 days/week
      'extra-active': 1.9 // Very hard exercise, physical job or training twice a day
    };
    
    const multiplier = activityMultipliers[activity as keyof typeof activityMultipliers] || 1.2;
    return Math.round(bmr * multiplier);
  };

  // Calculate macronutrient ratios based on goal
  const calculateMacros = (tdee: number, goal: string): MacronutrientResult => {
    let proteinPercentage: number;
    let carbsPercentage: number;
    let fatsPercentage: number;
    
    // Adjust macronutrient ratios based on goal
    switch (goal) {
      case 'lose-fat':
        // Higher protein, moderate fat, lower carbs for weight loss
        proteinPercentage = 0.40; // 40%
        fatsPercentage = 0.35; // 35%
        carbsPercentage = 0.25; // 25%
        break;
      case 'gain-muscle':
        // Higher protein and carbs, moderate fat for muscle gain
        proteinPercentage = 0.30; // 30%
        carbsPercentage = 0.50; // 50%
        fatsPercentage = 0.20; // 20%
        break;
      case 'maintain':
      default:
        // Balanced macros for maintenance
        proteinPercentage = 0.30; // 30%
        carbsPercentage = 0.40; // 40%
        fatsPercentage = 0.30; // 30%
        break;
    }
    
    // Calculate macronutrients in grams
    // Protein and carbs have 4 calories per gram, fat has 9 calories per gram
    const proteinCalories = tdee * proteinPercentage;
    const carbsCalories = tdee * carbsPercentage;
    const fatsCalories = tdee * fatsPercentage;
    
    const protein = Math.round(proteinCalories / 4);
    const carbs = Math.round(carbsCalories / 4);
    const fats = Math.round(fatsCalories / 9);
    
    return {
      tdee,
      protein,
      carbs,
      fats,
      proteinPercentage,
      carbsPercentage,
      fatsPercentage
    };
  };

  const validateInputs = (): boolean => {
    if (!age || isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 120) {
      toast.error('Please enter a valid age between 1 and 120');
      return false;
    }
    
    if (!gender) {
      toast.error('Please select your gender');
      return false;
    }
    
    if (!height || isNaN(Number(height)) || Number(height) <= 0) {
      toast.error(`Please enter a valid height${measurementSystem === 'metric' ? ' in centimeters' : ' in inches'}`);
      return false;
    }
    
    if (!weight || isNaN(Number(weight)) || Number(weight) <= 0) {
      toast.error(`Please enter a valid weight${measurementSystem === 'metric' ? ' in kilograms' : ' in pounds'}`);
      return false;
    }
    
    if (!activityLevel) {
      toast.error('Please select your activity level');
      return false;
    }
    
    if (!goal) {
      toast.error('Please select your goal');
      return false;
    }
    
    if (bodyFat && (isNaN(Number(bodyFat)) || Number(bodyFat) < 0 || Number(bodyFat) > 70)) {
      toast.error('Please enter a valid body fat percentage between 0 and 70');
      return false;
    }
    
    return true;
  };

  const handleCalculate = () => {
    if (!validateInputs()) {
      return;
    }
    
    try {
      const { heightCm, weightKg } = getMetricValues();
      const ageYears = parseInt(age);
      
      // Calculate BMR
      const bmr = calculateBMR(heightCm, weightKg, ageYears, gender);
      
      // Calculate TDEE
      const tdee = calculateTDEE(bmr, activityLevel);
      
      // Calculate macronutrients
      const macros = calculateMacros(tdee, goal);
      
      // Set result
      setResult(macros);
      setShowResult(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultElement = document.getElementById('macro-result');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error('Calculation error:', error);
      toast.error('An error occurred during calculation. Please check your inputs and try again.');
    }
  };

  const handleReset = () => {
    setAge('');
    setGender('');
    setHeight('');
    setWeight('');
    setActivityLevel('');
    setGoal('');
    setBodyFat('');
    setResult(null);
    setShowResult(false);
  };

  // Format percentage for display
  const formatPercentage = (decimal: number): string => {
    return `${Math.round(decimal * 100)}%`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border shadow-sm">
        <CardContent className="pt-6">
          <Tabs defaultValue="metric" onValueChange={(value) => setMeasurementSystem(value as 'metric' | 'imperial')}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Macronutrient Calculator</h2>
              <TabsList>
                <TabsTrigger value="metric">Metric</TabsTrigger>
                <TabsTrigger value="imperial">Imperial</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age (years)
                  </label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    min="1"
                    max="120"
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                    <InfoTooltip content="Biological sex is needed for accurate BMR calculation based on body composition differences." />
                  </label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender" className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <TabsContent value="metric" className="space-y-4 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="height-cm" className="block text-sm font-medium text-gray-700 mb-1">
                      Height (cm)
                    </label>
                    <Input
                      id="height-cm"
                      type="number"
                      placeholder="Enter height in cm"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      min="50"
                      max="250"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="weight-kg" className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (kg)
                    </label>
                    <Input
                      id="weight-kg"
                      type="number"
                      placeholder="Enter weight in kg"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      min="20"
                      max="300"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="imperial" className="space-y-4 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="height-in" className="block text-sm font-medium text-gray-700 mb-1">
                      Height (inches)
                    </label>
                    <Input
                      id="height-in"
                      type="number"
                      placeholder="Enter height in inches"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      min="20"
                      max="96"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="weight-lb" className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (pounds)
                    </label>
                    <Input
                      id="weight-lb"
                      type="number"
                      placeholder="Enter weight in pounds"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      min="44"
                      max="660"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <div>
                <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
                  Activity Level
                  <InfoTooltip content="Your general activity level affects your daily calorie needs." />
                </label>
                <Select value={activityLevel} onValueChange={setActivityLevel}>
                  <SelectTrigger id="activity" className="w-full">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                    <SelectItem value="lightly-active">Lightly Active (light exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderately-active">Moderately Active (moderate exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="very-active">Very Active (hard exercise 6-7 days/week)</SelectItem>
                    <SelectItem value="extra-active">Extra Active (very hard exercise & physical job or 2x training)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                  Goal
                  <InfoTooltip content="Your fitness goal determines your ideal macro ratio." />
                </label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger id="goal" className="w-full">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose-fat">Lose Fat</SelectItem>
                    <SelectItem value="maintain">Maintain</SelectItem>
                    <SelectItem value="gain-muscle">Gain Muscle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="body-fat" className="block text-sm font-medium text-gray-700 mb-1">
                  Body Fat % (optional)
                  <InfoTooltip content="Optional: Adding your body fat percentage can improve calculation accuracy." />
                </label>
                <Input
                  id="body-fat"
                  type="number"
                  placeholder="Enter body fat percentage (optional)"
                  value={bodyFat}
                  onChange={(e) => setBodyFat(e.target.value)}
                  min="1"
                  max="70"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 mt-6">
                <Button type="button" onClick={handleCalculate} className="flex-1">
                  Calculate Macros
                </Button>
                <Button type="button" variant="outline" onClick={handleReset} className="flex-1">
                  Reset
                </Button>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
      
      {showResult && result && (
        <Card className="mt-6 border shadow-sm" id="macro-result">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Your Macronutrient Results</h3>
            
            <div className="mb-4">
              <p className="font-medium">Daily Calorie Target:</p>
              <p className="text-2xl font-bold text-primary mt-1">{result.tdee} calories</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Daily Macronutrient Breakdown:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Protein</p>
                  <p className="text-xl font-bold text-blue-900">{result.protein}g</p>
                  <p className="text-xs text-blue-700 mt-1">{formatPercentage(result.proteinPercentage)} of total calories</p>
                  <p className="text-xs text-blue-700 mt-1">{Math.round(result.protein * 4)} calories</p>
                </div>
                
                <div className="p-3 bg-amber-50 rounded-lg">
                  <p className="font-medium text-amber-800">Carbohydrates</p>
                  <p className="text-xl font-bold text-amber-900">{result.carbs}g</p>
                  <p className="text-xs text-amber-700 mt-1">{formatPercentage(result.carbsPercentage)} of total calories</p>
                  <p className="text-xs text-amber-700 mt-1">{Math.round(result.carbs * 4)} calories</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Fats</p>
                  <p className="text-xl font-bold text-green-900">{result.fats}g</p>
                  <p className="text-xs text-green-700 mt-1">{formatPercentage(result.fatsPercentage)} of total calories</p>
                  <p className="text-xs text-green-700 mt-1">{Math.round(result.fats * 9)} calories</p>
                </div>
              </div>
              
              <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Important Note:</p>
                    <p className="text-gray-600 mt-1">
                      These are estimates based on statistical averages. Individual metabolism can vary. For personalized advice, consult with a registered dietitian or healthcare provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MacronutrientCalculator;
