import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, Ruler, Baby, Scale } from 'lucide-react';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AdUnit } from './AdUnit';

const AdultHeightPredictorCalculator = () => {
  const [gender, setGender] = useState<string>('male');
  const [birthWeight, setBirthWeight] = useState<string>('');
  const [birthLength, setBirthLength] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<string>('kg');
  const [lengthUnit, setLengthUnit] = useState<string>('cm');
  const [result, setResult] = useState<{
    cm: number;
    feet: number;
    inches: number;
    lowerBound: number;
    upperBound: number;
  } | null>(null);
  const [error, setError] = useState<string>('');

  const calculateAdultHeight = () => {
    setError('');

    // Validate inputs
    if (!birthWeight || !birthLength) {
      setError('Please enter both birth weight and birth length.');
      return;
    }
    const weightInput = parseFloat(birthWeight);
    const lengthInput = parseFloat(birthLength);
    if (isNaN(weightInput) || isNaN(lengthInput)) {
      setError('Please enter valid numbers.');
      return;
    }
    if (weightInput <= 0 || lengthInput <= 0) {
      setError('Values must be greater than zero.');
      return;
    }

    // Convert to grams and cm for calculation
    let weightInGrams;
    let lengthInCm;

    // Convert weight to grams based on selected unit
    if (weightUnit === 'kg') {
      weightInGrams = weightInput * 1000;
    } else if (weightUnit === 'lb') {
      weightInGrams = weightInput * 453.592;
    } else {
      weightInGrams = weightInput; // already in grams
    }

    // Convert length to cm based on selected unit
    if (lengthUnit === 'in') {
      lengthInCm = lengthInput * 2.54;
    } else {
      lengthInCm = lengthInput; // already in cm
    }

    // Calculate adult height based on the research paper
    let predictedHeight;
    let predictionInterval;
    if (gender === 'male') {
      // Males: Birth weight in kg, birth length in cm
      // Formula from Sorensen research: height in cm = 45.63 + 2.97 × birth length + 1.02 × birth weight
      predictedHeight = 45.63 + 2.97 * lengthInCm + 1.02 * (weightInGrams / 1000);
      predictionInterval = 6.85; // 95% prediction interval from research
    } else {
      // Females: Birth weight in kg, birth length in cm
      // Formula from Sorensen research: height in cm = 37.85 + 2.78 × birth length + 1.42 × birth weight
      predictedHeight = 37.85 + 2.78 * lengthInCm + 1.42 * (weightInGrams / 1000);
      predictionInterval = 6.52; // 95% prediction interval from research
    }

    // Convert to feet and inches for display
    const heightInCm = predictedHeight;
    const heightInInches = heightInCm / 2.54;
    const feet = Math.floor(heightInInches / 12);
    const inches = Math.round(heightInInches % 12 * 10) / 10;
    setResult({
      cm: Math.round(heightInCm * 10) / 10,
      feet,
      inches,
      lowerBound: Math.round((heightInCm - predictionInterval) * 10) / 10,
      upperBound: Math.round((heightInCm + predictionInterval) * 10) / 10
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  };

  return <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Adult Height Predictor Calculator</h1>
        <p className="text-muted-foreground mt-2 mb-4">
          Calculate a child's potential adult height based on birth measurements
        </p>
        <AdUnit slot="2222222222" format="horizontal" className="max-w-3xl mx-auto my-4" />
      </div>

      <DisclaimerAlert className="mb-6" />
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Baby className="h-5 w-5 text-primary" />
            Adult Height Predictor
          </CardTitle>
          <CardDescription>
            Estimate a child's potential adult height based on birth measurements from Sorensen et al. research
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="block">Gender</Label>
            <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthWeight" className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-blue-600" />
              Birth Weight
            </Label>
            <div className="flex gap-2">
              <Input id="birthWeight" type="text" inputMode="numeric" value={birthWeight} onChange={e => handleInputChange(e, setBirthWeight)} placeholder={weightUnit === 'kg' ? "e.g., 3.5" : weightUnit === 'lb' ? "e.g., 7.7" : "e.g., 3500"} className="flex-1" />
              <Select value={weightUnit} onValueChange={setWeightUnit}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="lb">lb</SelectItem>
                  <SelectItem value="g">g</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">
              Typical range: {weightUnit === 'kg' ? "2.5-4.5 kg" : weightUnit === 'lb' ? "5.5-10 lb" : "2500-4500 g"}
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthLength" className="flex items-center gap-2">
              <Ruler className="h-4 w-4 text-green-600" />
              Birth Length
            </Label>
            <div className="flex gap-2">
              <Input id="birthLength" type="text" inputMode="numeric" value={birthLength} onChange={e => handleInputChange(e, setBirthLength)} placeholder={lengthUnit === 'cm' ? "e.g., 50" : "e.g., 19.7"} className="flex-1" />
              <Select value={lengthUnit} onValueChange={setLengthUnit}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="in">inches</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">
              Typical range: {lengthUnit === 'cm' ? "45-55 cm" : "17.5-21.5 inches"}
            </p>
          </div>
          
          {error && <p className="text-destructive text-sm mb-4">{error}</p>}
          
          <Button onClick={calculateAdultHeight} className="w-full">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Predicted Height
          </Button>
        </CardContent>
      </Card>
      
      {result && <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Predicted Height Results
            </CardTitle>
            <CardDescription>
              Based on Sorensen et al. birth measurement correlation research
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold">Predicted Adult Height</div>
                  <div className="text-2xl font-bold">{result.cm} cm</div>
                </div>
                <div className="text-sm">
                  {result.feet}' {result.inches}"
                </div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="font-semibold mb-2">95% Prediction Interval</div>
                <div className="text-sm">
                  {result.lowerBound} - {result.upperBound} cm
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="italic">Note: This is an estimate based on statistical correlation. Individual growth can vary based on many factors including genetics, nutrition, and environment.</p>
            </div>
          </CardContent>
        </Card>}
    </div>;
};

export default AdultHeightPredictorCalculator;
