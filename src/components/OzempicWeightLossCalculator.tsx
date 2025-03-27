
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

// Custom result card component for the Ozempic calculator
const OzempicResultCard = ({ title, details, className }: { 
  title: string, 
  details: { label: string, value: string }[],
  className?: string 
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm text-muted-foreground">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
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
  const [sex, setSex] = useState<string>('female');
  const [diabetes, setDiabetes] = useState<string>('no');
  const [activity, setActivity] = useState<string>('sedentary');
  const [diet, setDiet] = useState<string>('none');
  const [duration, setDuration] = useState<string>('6');
  
  // Results state
  const [startWeight, setStartWeight] = useState<number | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightLoss, setWeightLoss] = useState<number | null>(null);
  const [newWeight, setNewWeight] = useState<number | null>(null);
  const [percentLoss, setPercentLoss] = useState<number | null>(null);
  
  const calculate = () => {
    // Parse input values
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseInt(age);
    const hasDiabetes = diabetes === 'yes';
    const durationMonths = parseInt(duration);
    
    // Calculate BMI
    const calculatedBmi = weightKg / ((heightCm / 100) ** 2);
    
    // Base weight loss (from clinical trials)
    let baseLossPercent = hasDiabetes ? 0.06 : 0.12; // Diabetics lose ~6%, others ~12%

    // Apply adjustments based on user factors
    if (ageYears < 50) baseLossPercent *= 1.2; // Younger lose more
    if (ageYears > 65) baseLossPercent *= 0.9; // Older lose slightly less
    if (sex === 'female') baseLossPercent *= 0.95; // Women lose slightly less

    // Lifestyle adjustments
    if (activity === 'moderate') baseLossPercent *= 1.1;
    if (activity === 'active') baseLossPercent *= 1.15;
    if (diet === 'minor') baseLossPercent *= 1.1;
    if (diet === 'major') baseLossPercent *= 1.2;

    // Duration adjustment (diminishing returns after 6 months)
    if (durationMonths <= 6) {
      baseLossPercent *= durationMonths / 6;
    } else {
      baseLossPercent *= 1 + (durationMonths - 6) * 0.02;
    }

    // Calculate projected loss
    const calculatedWeightLoss = weightKg * baseLossPercent;
    const calculatedNewWeight = weightKg - calculatedWeightLoss;
    const calculatedPercentLoss = baseLossPercent * 100;
    
    // Set results
    setStartWeight(weightKg);
    setBmi(calculatedBmi);
    setWeightLoss(calculatedWeightLoss);
    setNewWeight(calculatedNewWeight);
    setPercentLoss(calculatedPercentLoss);
  };
  
  // Creating the result object for the ResultCard component
  const resultData = startWeight !== null ? {
    title: "Your Ozempic Weight Loss Results",
    details: [
      { label: "Starting Weight", value: `${startWeight.toFixed(1)} kg` },
      { label: "BMI", value: `${bmi!.toFixed(1)}` },
      { label: "Projected Weight Loss", value: `${weightLoss!.toFixed(1)} kg` },
      { label: "Expected New Weight", value: `${newWeight!.toFixed(1)} kg` },
      { label: "% Body Weight Lost", value: `${percentLoss!.toFixed(1)}%` }
    ],
    className: "border-primary"
  } : null;
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl text-center">Ozempic Weight Loss Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="weight" className="font-medium">
                Current Weight (kg)
              </Label>
              <InfoTooltip content="Enter your current weight in kilograms" />
            </div>
            <Input
              id="weight"
              type="number"
              min="40"
              max="200"
              step="0.1"
              placeholder="e.g., 75"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="height" className="font-medium">
                Height (cm)
              </Label>
              <InfoTooltip content="Enter your height in centimeters" />
            </div>
            <Input
              id="height"
              type="number"
              min="140"
              max="220"
              step="1"
              placeholder="e.g., 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="age" className="font-medium">
                Age
              </Label>
              <InfoTooltip content="Your current age in years" />
            </div>
            <Input
              id="age"
              type="number"
              min="18"
              max="100"
              placeholder="e.g., 45"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="sex" className="font-medium">
                Sex
              </Label>
              <InfoTooltip content="Select your biological sex at birth" />
            </div>
            <Select value={sex} onValueChange={setSex}>
              <SelectTrigger>
                <SelectValue placeholder="Select your sex" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="diabetes" className="font-medium">
                Do you have Type 2 Diabetes?
              </Label>
              <InfoTooltip content="People with Type 2 Diabetes may experience different weight loss results" />
            </div>
            <Select value={diabetes} onValueChange={setDiabetes}>
              <SelectTrigger>
                <SelectValue placeholder="Select yes/no" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="activity" className="font-medium">
                Activity Level
              </Label>
              <InfoTooltip content="Your typical level of physical activity" />
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
              <Label htmlFor="diet" className="font-medium">
                Dietary Changes Planned
              </Label>
              <InfoTooltip content="Dietary improvements can enhance weight loss results" />
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
              <Label htmlFor="duration" className="font-medium">
                Treatment Duration (months)
              </Label>
              <InfoTooltip content="How long you plan to use Ozempic" />
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
      
      {resultData && (
        <>
          <OzempicResultCard 
            title={resultData.title}
            details={resultData.details}
            className={resultData.className}
          />
          
          <DisclaimerAlert 
            className="mt-6"
            title="Medical Disclaimer"
            content="This calculator provides estimates based on clinical trial data (STEP 1-4, SUSTAIN trials). Individual results vary based on adherence, genetics, and lifestyle factors. Ozempic is primarily a diabetes medication; weight loss is a secondary effect. Always consult your doctor before starting any medication."
          />
          
          <Alert className="mt-4 bg-blue-50">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
              <AlertDescription className="text-sm">
                <strong>Scientific basis:</strong> Results are modeled on data from clinical trials including STEP 1-4 and SUSTAIN trials, adjusted for individual factors known to influence weight loss outcomes.
              </AlertDescription>
            </div>
          </Alert>
        </>
      )}
    </div>
  );
};

export default OzempicWeightLossCalculator;
