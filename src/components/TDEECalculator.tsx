
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

interface TDEEResult {
  tdee: number;
  maintenance: [number, number];
  cutting: [number, number];
  bulking: [number, number];
}

const TDEECalculator = () => {
  const [age, setAge] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('');
  const [measurementSystem, setMeasurementSystem] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<TDEEResult | null>(null);
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

  // Calculate calorie ranges for different goals
  const calculateCalorieRanges = (tdee: number): { maintenance: [number, number], cutting: [number, number], bulking: [number, number] } => {
    return {
      maintenance: [Math.round(tdee * 0.95), Math.round(tdee * 1.05)],
      cutting: [Math.round(tdee * 0.8), Math.round(tdee * 0.9)],
      bulking: [Math.round(tdee * 1.1), Math.round(tdee * 1.2)]
    };
  };

  const validateInputs = (): boolean => {
    if (!age || isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 120) {
      toast.error('Please enter a valid age between 1 and 120');
      return false;
    }
    
    if (!sex) {
      toast.error('Please select your biological sex');
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
      const bmr = calculateBMR(heightCm, weightKg, ageYears, sex);
      
      // Calculate TDEE
      const tdee = calculateTDEE(bmr, activityLevel);
      
      // Calculate calorie ranges
      const { maintenance, cutting, bulking } = calculateCalorieRanges(tdee);
      
      // Set result
      setResult({
        tdee,
        maintenance,
        cutting,
        bulking
      });
      
      setShowResult(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultElement = document.getElementById('tdee-result');
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
    setSex('');
    setHeight('');
    setWeight('');
    setActivityLevel('');
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border shadow-sm">
        <CardContent className="pt-6">
          <Tabs defaultValue="metric" onValueChange={(value) => setMeasurementSystem(value as 'metric' | 'imperial')}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">TDEE Calculator</h2>
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
                  <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-1">
                    Biological Sex
                    <InfoTooltip content="Biological sex is needed for accurate BMR calculation based on body composition differences." />
                  </label>
                  <Select value={sex} onValueChange={setSex}>
                    <SelectTrigger id="sex" className="w-full">
                      <SelectValue placeholder="Select your sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
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
              
              <div className="flex flex-col sm:flex-row gap-2 mt-6">
                <Button type="button" onClick={handleCalculate} className="flex-1">
                  Calculate TDEE
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
        <Card className="mt-6 border shadow-sm" id="tdee-result">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Your TDEE Results</h3>
            
            <div className="mb-4">
              <p className="font-medium">Total Daily Energy Expenditure (TDEE):</p>
              <p className="text-2xl font-bold text-primary mt-1">{result.tdee} calories/day</p>
              <p className="text-sm text-gray-600 mt-1">
                This is the estimated number of calories you burn per day based on your BMR and activity level.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Daily Calorie Goals by Objective:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Maintenance</p>
                  <p className="text-xl font-bold text-blue-900">{result.maintenance[0]} - {result.maintenance[1]} cal</p>
                  <p className="text-xs text-blue-700 mt-1">To maintain your current weight</p>
                </div>
                
                <div className="p-3 bg-amber-50 rounded-lg">
                  <p className="font-medium text-amber-800">Cutting</p>
                  <p className="text-xl font-bold text-amber-900">{result.cutting[0]} - {result.cutting[1]} cal</p>
                  <p className="text-xs text-amber-700 mt-1">For weight loss (caloric deficit)</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Bulking</p>
                  <p className="text-xl font-bold text-green-900">{result.bulking[0]} - {result.bulking[1]} cal</p>
                  <p className="text-xs text-green-700 mt-1">For weight gain (caloric surplus)</p>
                </div>
              </div>
              
              <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Important Note:</p>
                    <p className="text-gray-600 mt-1">
                      These are estimates based on statistical averages. Individual metabolism can vary. Adjust your calorie intake based on your actual results over time. For personalized advice, consult with a registered dietitian or healthcare provider.
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

export default TDEECalculator;
