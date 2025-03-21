
import React, { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, Ruler, Baby, Scale, Activity } from 'lucide-react';
import DisclaimerAlert from '@/components/DisclaimerAlert';

const GrowthPercentileCalculator = () => {
  const [age, setAge] = useState<number>(5);
  const [gender, setGender] = useState<string>('male');
  const [height, setHeight] = useState<number>(110);
  const [weight, setWeight] = useState<number>(18);
  const [units, setUnits] = useState<string>('metric');
  
  // LMS parameters for height-for-age and weight-for-age
  // These are simplified reference data based on CDC growth charts
  const growthData = {
    male: {
      height: {
        // Age (years): [L, M, S] values
        2: [1, 86.8, 0.03674],
        3: [1, 94.9, 0.03762],
        4: [1, 102.9, 0.03816],
        5: [1, 109.9, 0.03848],
        6: [1, 116.1, 0.03859],
        7: [1, 121.7, 0.03850],
        8: [1, 127.0, 0.03824],
        9: [1, 132.2, 0.03790],
        10: [1, 137.5, 0.03758],
      },
      weight: {
        2: [-0.3833, 12.7, 0.14170],
        3: [-0.4201, 14.3, 0.13312],
        4: [-0.4290, 16.3, 0.12800],
        5: [-0.4374, 18.4, 0.12713],
        6: [-0.4474, 20.7, 0.13156],
        7: [-0.4838, 23.1, 0.14041],
        8: [-0.5764, 25.6, 0.15375],
        9: [-0.7080, 28.6, 0.17127],
        10: [-0.7965, 32.2, 0.18781],
      }
    },
    female: {
      height: {
        2: [1, 85.7, 0.03775],
        3: [1, 94.1, 0.03840],
        4: [1, 102.0, 0.03825],
        5: [1, 109.0, 0.03782],
        6: [1, 115.4, 0.03755],
        7: [1, 121.1, 0.03754],
        8: [1, 126.8, 0.03777],
        9: [1, 132.5, 0.03810],
        10: [1, 138.6, 0.03815],
      },
      weight: {
        2: [-0.3709, 12.2, 0.13735],
        3: [-0.3945, 14.1, 0.13151],
        4: [-0.3723, 16.0, 0.13178],
        5: [-0.3319, 17.9, 0.13583],
        6: [-0.2385, 19.9, 0.14341],
        7: [-0.1387, 22.4, 0.15341],
        8: [-0.0493, 25.8, 0.16114],
        9: [0.0161, 29.9, 0.16381],
        10: [0.0830, 34.7, 0.16232],
      }
    }
  };
  
  // Convert imperial to metric for calculations
  const getMetricValues = () => {
    if (units === 'metric') {
      return { height, weight };
    } else {
      // Convert inches to cm, pounds to kg
      return {
        height: height * 2.54,
        weight: weight * 0.453592
      };
    }
  };
  
  // Calculate z-score using LMS method
  const calculateZScore = (measurement: number, L: number, M: number, S: number) => {
    if (L === 0) {
      return Math.log(measurement / M) / S;
    } else {
      return (Math.pow(measurement / M, L) - 1) / (L * S);
    }
  };
  
  // Convert z-score to percentile
  const zScoreToPercentile = (z: number) => {
    // Approximation of the cumulative distribution function
    if (z < -6) return 0;
    if (z > 6) return 100;
    
    let p = 0;
    if (z < 0) {
      p = 0.5 * Math.exp(0.717 * z + 0.416 * z * z);
    } else {
      p = 1 - 0.5 * Math.exp(-0.717 * z - 0.416 * z * z);
    }
    
    return Math.round(p * 100);
  };
  
  // Get the closest age data
  const getClosestAgeData = (ageData: Record<string, number[]>, targetAge: number) => {
    const ages = Object.keys(ageData).map(Number);
    const closestAge = ages.reduce((prev, curr) => {
      return (Math.abs(curr - targetAge) < Math.abs(prev - targetAge) ? curr : prev);
    });
    return { age: closestAge, data: ageData[closestAge] };
  };
  
  // Calculate percentiles
  const calculatePercentiles = () => {
    const { height: metricHeight, weight: metricWeight } = getMetricValues();
    
    // Get the closest age data for height and weight
    const heightData = getClosestAgeData(growthData[gender as keyof typeof growthData].height, age);
    const weightData = getClosestAgeData(growthData[gender as keyof typeof growthData].weight, age);
    
    // Calculate z-scores
    const heightZ = calculateZScore(metricHeight, heightData.data[0], heightData.data[1], heightData.data[2]);
    const weightZ = calculateZScore(metricWeight, weightData.data[0], weightData.data[1], weightData.data[2]);
    
    // Convert to percentiles
    const heightPercentile = zScoreToPercentile(heightZ);
    const weightPercentile = zScoreToPercentile(weightZ);
    
    return {
      heightPercentile,
      weightPercentile,
      heightZ: heightZ.toFixed(2),
      weightZ: weightZ.toFixed(2),
      referenceAge: heightData.age
    };
  };
  
  const results = calculatePercentiles();

  // Interpret percentiles
  const interpretPercentile = (percentile: number) => {
    if (percentile < 3) return "Well below average";
    if (percentile < 15) return "Below average";
    if (percentile < 50) return "Slightly below average";
    if (percentile < 85) return "Average to slightly above";
    if (percentile < 97) return "Above average";
    return "Well above average";
  };

  // Handle numeric input validation
  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setter(value);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Child Growth Percentile Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate height and weight percentiles based on CDC growth charts
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Baby className="h-5 w-5 text-primary" />
            Growth Percentile Calculator
          </CardTitle>
          <CardDescription>
            Estimate where your child falls on the growth chart percentiles for their age and gender
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Units */}
          <div className="space-y-2">
            <Label className="block">Units</Label>
            <RadioGroup 
              value={units} 
              onValueChange={setUnits}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="metric" id="metric" />
                <Label htmlFor="metric">Metric (cm, kg)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial">Imperial (in, lb)</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Gender */}
          <div className="space-y-2">
            <Label className="block">Gender</Label>
            <RadioGroup 
              value={gender} 
              onValueChange={setGender}
              className="flex space-x-4"
            >
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
          
          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="age" className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-blue-600" />
              Age (years)
            </Label>
            <Input
              id="age"
              type="number"
              min="2"
              max="10"
              value={age}
              onChange={(e) => handleNumericInput(e, setAge)}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">Supported age range: 2-10 years</p>
          </div>
          
          {/* Height */}
          <div className="space-y-2">
            <Label htmlFor="height" className="flex items-center gap-2">
              <Ruler className="h-4 w-4 text-green-600" />
              Height ({units === 'metric' ? 'cm' : 'inches'})
            </Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => handleNumericInput(e, setHeight)}
              className="w-full"
            />
          </div>
          
          {/* Weight */}
          <div className="space-y-2">
            <Label htmlFor="weight" className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-orange-600" />
              Weight ({units === 'metric' ? 'kg' : 'pounds'})
            </Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => handleNumericInput(e, setWeight)}
              className="w-full"
            />
          </div>
          
          <DisclaimerAlert className="mt-4" />
        </CardContent>
      </Card>
      
      {/* Results Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Growth Results
          </CardTitle>
          <CardDescription>
            Based on CDC growth references for age {results.referenceAge}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary/20 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">Height Percentile</div>
                <div className="text-2xl font-bold">{results.heightPercentile}%</div>
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                Z-score: {results.heightZ}
              </div>
              <div className="text-sm">
                {interpretPercentile(results.heightPercentile)}
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${Math.min(100, results.heightPercentile)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-secondary/20 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">Weight Percentile</div>
                <div className="text-2xl font-bold">{results.weightPercentile}%</div>
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                Z-score: {results.weightZ}
              </div>
              <div className="text-sm">
                {interpretPercentile(results.weightPercentile)}
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${Math.min(100, results.weightPercentile)}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Note: This calculator uses simplified reference data based on CDC growth charts. For medical purposes, please consult a healthcare professional.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrowthPercentileCalculator;
