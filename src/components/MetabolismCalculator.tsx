import React, { useState } from 'react';
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

const MetabolismCalculator = () => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
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
    
    const heightVal = Number(height);
    if (!height || isNaN(heightVal) || heightVal < 120 || heightVal > 250) {
      newErrors.height = "Please enter a valid height (120-250 cm)";
    }
    
    const weightVal = Number(weight);
    if (!weight || isNaN(weightVal) || weightVal < 30 || weightVal > 300) {
      newErrors.weight = "Please enter a valid weight (30-300 kg)";
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
    const heightVal = Number(height);
    const weightVal = Number(weight);
    const bodyFatVal = bodyFat ? Number(bodyFat) : 0;
    const activityVal = Number(activity);
    
    const lbm = weightVal * (1 - (bodyFatVal / 100));
    const ffm = bodyFatVal > 0 ? lbm : calculateEstimatedFFM(weightVal, heightVal, ageVal, gender);
    
    let bmr = 0;
    
    switch (formula) {
      case 'mifflin':
        if (gender === 'male') {
          bmr = (10 * weightVal) + (6.25 * heightVal) - (5 * ageVal) + 5;
        } else {
          bmr = (10 * weightVal) + (6.25 * heightVal) - (5 * ageVal) - 161;
        }
        break;
        
      case 'harris':
        if (gender === 'male') {
          bmr = (13.397 * weightVal) + (4.799 * heightVal) - (5.677 * ageVal) + 88.362;
        } else {
          bmr = (9.247 * weightVal) + (3.098 * heightVal) - (4.330 * ageVal) + 447.593;
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
          bmr = (13.75 * weightVal) + (5 * heightVal) - (6.76 * ageVal) + 66;
        } else {
          bmr = (9.56 * weightVal) + (1.85 * heightVal) - (4.68 * ageVal) + 655;
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
                
                <div className="space-y-2">
                  <Label htmlFor="height">
                    Height (cm)
                  </Label>
                  <Input 
                    id="height" 
                    type="number" 
                    placeholder="Enter your height in cm"
                    min={120}
                    max={250}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className={errors.height ? "border-red-500" : ""}
                  />
                  {errors.height && <div className="text-red-500 text-sm">{errors.height}</div>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="weight">
                    Weight (kg)
                  </Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder="Enter your weight in kg"
                    min={30}
                    max={300}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={errors.weight ? "border-red-500" : ""}
                  />
                  {errors.weight && <div className="text-red-500 text-sm">{errors.weight}</div>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="body-fat" className="flex items-center">
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
                  <Label htmlFor="activity" className="flex items-center">
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
                  <Label htmlFor="formula" className="flex items-center">
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
                        <div className="flex items-center">
                          <span className="font-medium">Basal Metabolic Rate (BMR)</span>
                          <InfoTooltip text="The number of calories your body needs at complete rest just to maintain basic functions like breathing, circulation, and cell production." />
                        </div>
                        <span className="font-bold text-lg">{results.bmr} calories/day</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium">Total Daily Energy Expenditure (TDEE)</span>
                          <InfoTooltip text="Your total daily calorie needs, including your BMR plus calories burned through daily activities and exercise." />
                        </div>
                        <span className="font-bold text-lg">{results.tdee} calories/day</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium">Fat-Free Mass (FFM)</span>
                          <InfoTooltip text="The weight of everything in your body except fat, including muscles, bones, organs, and water." />
                        </div>
                        <span className="font-bold text-lg">{results.ffm} kg</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center">
                          <span className="font-medium">Lean Body Mass (LBM)</span>
                          <InfoTooltip text="Similar to FFM, this is your weight excluding body fat. This is especially important as it drives your metabolism." />
                        </div>
                        <span className="font-bold text-lg">{results.lbm} kg</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Daily Calorie Targets</h4>
                    

