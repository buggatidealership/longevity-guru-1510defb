
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Alert, AlertDescription } from "./ui/alert";
import { Info } from 'lucide-react';
import InfoTooltip from './InfoTooltip';
import DisclaimerAlert from './DisclaimerAlert';

// Create a custom result card component specifically for the Ozempic calculator
const OzempicResultCard = ({ 
  startWeight, 
  bmi, 
  weightLoss, 
  newWeight, 
  percentLoss,
  isVisible,
  className 
}: { 
  startWeight: number;
  bmi: string;
  weightLoss: string;
  newWeight: string;
  percentLoss: string;
  isVisible: boolean;
  className?: string;
}) => {
  if (!isVisible) return null;
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Your Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Starting Weight</span>
            <span className="font-medium">{startWeight} kg</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">BMI</span>
            <span className="font-medium">{bmi}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Projected Weight Loss</span>
            <span className="font-medium text-lg text-blue-600">{weightLoss} kg</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Expected New Weight</span>
            <span className="font-medium">{newWeight} kg</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">% Body Weight Lost</span>
            <span className="font-medium">{percentLoss}%</span>
          </div>
          
          <hr className="my-2" />
          
          <p className="text-sm text-muted-foreground">Based on clinical studies, your results may vary. Always consult your doctor.</p>
        </div>
      </CardContent>
    </Card>
  );
};

const OzempicWeightLossCalculator = () => {
  // Form state
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [sex, setSex] = useState<string>('male');
  const [diabetes, setDiabetes] = useState<string>('no');
  const [activity, setActivity] = useState<string>('sedentary');
  const [diet, setDiet] = useState<string>('none');
  const [duration, setDuration] = useState<string>('6');
  
  // Results state
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [bmi, setBmi] = useState<string>('');
  const [weightLoss, setWeightLoss] = useState<string>('');
  const [newWeight, setNewWeight] = useState<string>('');
  const [percentLoss, setPercentLoss] = useState<string>('');
  
  const calculate = () => {
    // Parse input values
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);
    const ageVal = parseInt(age);
    const hasDiabetes = diabetes === 'yes';
    const durationVal = parseInt(duration);
    
    if (isNaN(weightVal) || isNaN(heightVal) || isNaN(ageVal)) {
      // Handle invalid inputs
      return;
    }
    
    // Calculate BMI
    const bmiVal = (weightVal / ((heightVal / 100) ** 2)).toFixed(1);
    
    // Base weight loss (from clinical trials)
    let baseLossPercent = hasDiabetes ? 0.06 : 0.12; // Diabetics lose ~6%, others ~12%
    
    // Apply adjustments based on user factors
    if (ageVal < 50) baseLossPercent *= 1.2; // Younger lose more
    if (ageVal > 65) baseLossPercent *= 0.9; // Older lose slightly less
    if (sex === 'female') baseLossPercent *= 0.95; // Women lose slightly less
    
    // Lifestyle adjustments
    if (activity === 'moderate') baseLossPercent *= 1.1;
    if (activity === 'active') baseLossPercent *= 1.15;
    if (diet === 'minor') baseLossPercent *= 1.1;
    if (diet === 'major') baseLossPercent *= 1.2;
    
    // Duration adjustment (diminishing returns after 6 months)
    if (durationVal <= 6) {
      baseLossPercent *= durationVal / 6;
    } else {
      baseLossPercent *= 1 + (durationVal - 6) * 0.02;
    }
    
    // Calculate projected loss
    const weightLossKg = (weightVal * baseLossPercent).toFixed(1);
    const newWeightVal = (weightVal - parseFloat(weightLossKg)).toFixed(1);
    const percentLossVal = (baseLossPercent * 100).toFixed(1);
    
    // Update state with results
    setBmi(bmiVal);
    setWeightLoss(weightLossKg);
    setNewWeight(newWeightVal);
    setPercentLoss(percentLossVal);
    setIsResultVisible(true);
  };
  
  // Determine result card border color based on weight loss percentage
  const getResultCardClass = () => {
    const lossPercent = parseFloat(percentLoss);
    if (lossPercent < 5) return "border-yellow-400";
    if (lossPercent < 10) return "border-blue-400";
    return "border-green-400";
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl text-center">Ozempic Weight Loss Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="weight" className="font-medium">Current Weight (kg)</Label>
              <InfoTooltip content="Enter your current weight in kilograms" />
            </div>
            <Input
              id="weight"
              type="number"
              min="40"
              max="200"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g., 80"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="height" className="font-medium">Height (cm)</Label>
              <InfoTooltip content="Enter your height in centimeters" />
            </div>
            <Input
              id="height"
              type="number"
              min="140"
              max="220"
              step="1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g., 170"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="age" className="font-medium">Age</Label>
              <InfoTooltip content="Your age affects how your body responds to weight loss treatment" />
            </div>
            <Input
              id="age"
              type="number"
              min="18"
              max="100"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g., 45"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="sex" className="font-medium">Sex</Label>
              <InfoTooltip content="Biological sex can affect weight loss response" />
            </div>
            <Select value={sex} onValueChange={setSex}>
              <SelectTrigger>
                <SelectValue placeholder="Select sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="diabetes" className="font-medium">Do you have Type 2 Diabetes?</Label>
              <InfoTooltip content="Ozempic was originally developed for Type 2 Diabetes and may have different effects" />
            </div>
            <Select value={diabetes} onValueChange={setDiabetes}>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="activity" className="font-medium">Activity Level</Label>
              <InfoTooltip content="Higher activity levels can enhance weight loss results" />
            </div>
            <Select value={activity} onValueChange={setActivity}>
              <SelectTrigger>
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                <SelectItem value="moderate">Moderate (exercise 1-3x/week)</SelectItem>
                <SelectItem value="active">Active (exercise 4-5x/week)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="diet" className="font-medium">Dietary Changes Planned</Label>
              <InfoTooltip content="Dietary improvements can significantly enhance medication effectiveness" />
            </div>
            <Select value={diet} onValueChange={setDiet}>
              <SelectTrigger>
                <SelectValue placeholder="Select dietary changes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No major changes</SelectItem>
                <SelectItem value="minor">Minor improvements</SelectItem>
                <SelectItem value="major">Major diet overhaul</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="duration" className="font-medium">Treatment Duration (months)</Label>
              <InfoTooltip content="Weight loss typically continues for 6-12 months before plateauing" />
            </div>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 months</SelectItem>
                <SelectItem value="6">6 months</SelectItem>
                <SelectItem value="9">9 months</SelectItem>
                <SelectItem value="12">12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={calculate}
          >
            Calculate My Projected Weight Loss
          </Button>
        </CardFooter>
      </Card>
      
      {isResultVisible && (
        <>
          <OzempicResultCard 
            startWeight={parseFloat(weight)}
            bmi={bmi}
            weightLoss={weightLoss}
            newWeight={newWeight}
            percentLoss={percentLoss}
            isVisible={isResultVisible}
            className={getResultCardClass()}
          />
          
          <Alert className="mt-6 bg-blue-50">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
              <AlertDescription className="text-sm">
                <strong>Scientific basis:</strong> This calculator is based on data from clinical trials including STEP 1-4 and SUSTAIN studies, with adjustments for individual factors. Results are estimates and may vary based on genetics, medication adherence, and lifestyle factors.
              </AlertDescription>
            </div>
          </Alert>
        </>
      )}
    </div>
  );
};

export default OzempicWeightLossCalculator;
