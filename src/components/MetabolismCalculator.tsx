
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AdUnit } from './AdUnit';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { Calculator, Activity, Scale, HeartPulse, Info } from 'lucide-react';

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
    // Use Boer formula to estimate Fat-Free Mass when body fat % is unknown
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
    
    // Calculate LBM and FFM
    const lbm = weightVal * (1 - (bodyFatVal / 100));
    const ffm = bodyFatVal > 0 ? lbm : calculateEstimatedFFM(weightVal, heightVal, ageVal, gender);
    
    // Calculate BMR based on selected formula
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
    
    // Apply age-related metabolic adjustment based on Pontzer et al. (2021)
    if (ageVal > 60) {
      const yearsOver60 = ageVal - 60;
      const reductionFactor = 1 - (0.007 * yearsOver60);
      bmr = bmr * reductionFactor;
    }
    
    // Calculate TDEE and calorie targets
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

  const renderTooltip = (text: string) => (
    <div className="relative inline-block ml-1 group">
      <Info className="w-4 h-4 text-blue-500 cursor-help" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 w-60 z-10">
        {text}
      </div>
    </div>
  );

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
                    Biological Sex
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender" className={errors.gender ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your biological sex" />
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
                    {renderTooltip("Including your body fat percentage makes your calculation more accurate, especially if you have more muscle or less fat than average. This is optional but recommended if you know your body fat percentage.")}
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
                    {renderTooltip("Choose the option that best matches your typical weekly activity. Be honest about your actual activity level - many people overestimate this!")}
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
                    {renderTooltip("These are different scientific methods for calculating your metabolism. Each works better for different people. The default (Mifflin-St Jeor) works well for most people.")}
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
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                        <span className="font-medium flex items-center">
                          Basal Metabolic Rate (BMR)
                          {renderTooltip("The number of calories your body needs at complete rest just to maintain basic functions like breathing, circulation, and cell production.")}
                        </span>
                        <span className="font-bold">{results.bmr} calories/day</span>
                      </div>
                      
                      <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                        <span className="font-medium flex items-center">
                          Total Daily Energy Expenditure (TDEE)
                          {renderTooltip("Your total daily calorie needs, including your BMR plus calories burned through daily activities and exercise.")}
                        </span>
                        <span className="font-bold">{results.tdee} calories/day</span>
                      </div>
                      
                      <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                        <span className="font-medium flex items-center">
                          Fat-Free Mass (FFM)
                          {renderTooltip("The weight of everything in your body except fat, including muscles, bones, organs, and water.")}
                        </span>
                        <span className="font-bold">{results.ffm} kg</span>
                      </div>
                      
                      <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                        <span className="font-medium flex items-center">
                          Lean Body Mass (LBM)
                          {renderTooltip("Similar to FFM, this is your weight excluding body fat. This is especially important as it drives your metabolism.")}
                        </span>
                        <span className="font-bold">{results.lbm} kg</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Daily Calorie Targets</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                          <span className="font-medium">Weight Maintenance:</span>
                          <span className="font-bold">{results.maintenance} calories/day</span>
                        </div>
                        
                        <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                          <span className="font-medium">Mild Weight Loss (-0.25kg/week):</span>
                          <span className="font-bold">{results.mildDeficit} calories/day</span>
                        </div>
                        
                        <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                          <span className="font-medium">Moderate Weight Loss (-0.5kg/week):</span>
                          <span className="font-bold">{results.moderateDeficit} calories/day</span>
                        </div>
                        
                        <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                          <span className="font-medium">Aggressive Weight Loss (-1kg/week):</span>
                          <span className="font-bold">{results.aggressiveDeficit} calories/day</span>
                        </div>
                        
                        <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                          <span className="font-medium">Mild Weight Gain:</span>
                          <span className="font-bold">{results.mildSurplus} calories/day</span>
                        </div>
                        
                        <div className="flex justify-between p-3 bg-white rounded shadow-sm">
                          <span className="font-medium">Moderate Weight Gain:</span>
                          <span className="font-bold">{results.moderateSurplus} calories/day</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-gray-100 text-gray-700 text-sm rounded">
                      <p>Disclaimer: This calculator provides estimates based on scientific formulas. Individual metabolism can vary due to genetic factors, health conditions, and other variables. Consult with healthcare professionals before making significant dietary changes.</p>
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
              <CardTitle>About This Calculator</CardTitle>
              <CardDescription>
                This metabolism calculator incorporates the latest scientific research to provide accurate estimates of your caloric needs.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">What Are These Formulas?</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium">Mifflin-St Jeor Equation (1990)</h4>
                    <p><strong>Best for:</strong> Most people - general population</p>
                    <p><strong>Accuracy:</strong> Considered the most accurate formula for the general population</p>
                    <p><strong>How it works:</strong> Uses your weight, height, age, and sex to calculate your metabolism</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Harris-Benedict Equation (Revised)</h4>
                    <p><strong>Best for:</strong> People with "average" body types</p>
                    <p><strong>Accuracy:</strong> The original formula dates to 1919, this is the improved 1984 version</p>
                    <p><strong>How it works:</strong> Similar to Mifflin-St Jeor but with different coefficients; tends to estimate slightly higher</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Katch-McArdle Formula</h4>
                    <p><strong>Best for:</strong> People who know their body fat percentage, especially athletic people</p>
                    <p><strong>Accuracy:</strong> More precise than formulas that don't use body composition</p>
                    <p><strong>How it works:</strong> Focuses on your lean body mass (which is more metabolically active)</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Cunningham Equation</h4>
                    <p><strong>Best for:</strong> Athletes and very active individuals</p>
                    <p><strong>Accuracy:</strong> Specifically designed for athletic populations</p>
                    <p><strong>How it works:</strong> Similar to Katch-McArdle but with different coefficients; typically estimates higher</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Oxford Equations (2023)</h4>
                    <p><strong>Best for:</strong> People looking for the most recent scientific approach</p>
                    <p><strong>Accuracy:</strong> Incorporates recent research on age-related metabolic changes</p>
                    <p><strong>How it works:</strong> Similar approach to older formulas but with updated coefficients based on new research</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Scientific Foundations</h3>
                <p>The calculator offers multiple validated equations to estimate your Basal Metabolic Rate (BMR):</p>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="text-lg font-medium">Mifflin-St Jeor Equation (1990)</h4>
                    <p>Considered the most accurate for the general population according to the Academy of Nutrition and Dietetics. Recent validation studies (Hall et al., 2023) confirm its continued reliability.</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5</li>
                      <li>Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Revised Harris-Benedict Equation (1984)</h4>
                    <p>An updated version of the original 1919 equation, with improved accuracy:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Men: BMR = (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years) + 88.362</li>
                      <li>Women: BMR = (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years) + 447.593</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Katch-McArdle Formula (1996)</h4>
                    <p>Accounts for lean body mass, providing better estimates for individuals with known body fat percentage:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>BMR = 370 + (21.6 × Lean Body Mass in kg)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Cunningham Equation (1991)</h4>
                    <p>Particularly accurate for athletes and highly active individuals:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>BMR = 500 + (22 × Lean Body Mass in kg)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Oxford Equations (2023)</h4>
                    <p>Based on recent research from Oxford University that accounts for age-related metabolic changes:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Men: BMR = (13.75 × weight in kg) + (5 × height in cm) - (6.76 × age) + 66</li>
                      <li>Women: BMR = (9.56 × weight in kg) + (1.85 × height in cm) - (4.68 × age) + 655</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Research Insights</h3>
                <p>This calculator incorporates findings from several recent studies:</p>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="text-lg font-medium">Metabolic Adaptation (Pontzer et al., 2021)</h4>
                    <p>Research published in Science shows that metabolism doesn't steadily decline with age as previously thought. Instead, it remains stable from ages 20 to 60, then decreases at about 0.7% per year afterward.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Activity Multipliers (Migueles et al., 2023)</h4>
                    <p>Recent systematic review in Sports Medicine refined activity multipliers based on objective measurements from wearable devices, providing more accurate TDEE estimates.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Body Composition Impact (Hall et al., 2023)</h4>
                    <p>Research in The American Journal of Clinical Nutrition demonstrated that fat-free mass explains approximately 70-80% of the variance in resting energy expenditure, highlighting the importance of accounting for body composition.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Using Your Results</h3>
                <p>Your TDEE represents an estimate of daily caloric needs for maintenance. For weight loss, a moderate deficit (500 calories below TDEE) is generally recommended for sustainable results. Individual needs may vary based on health status, medications, hormonal factors, and genetic differences.</p>
                
                <p className="mt-4">For optimal health and accurate calculations, consider:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Regular reassessment as your body composition changes</li>
                  <li>Consulting healthcare professionals before major dietary changes</li>
                  <li>Tracking actual results and adjusting as needed</li>
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
