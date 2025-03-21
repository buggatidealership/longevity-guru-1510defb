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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const GrowthPercentileCalculator = () => {
  const [ageValue, setAgeValue] = useState<string>("5");
  const [ageUnit, setAgeUnit] = useState<string>('years');
  const [gender, setGender] = useState<string>('male');
  const [height, setHeight] = useState<string>("110");
  const [weight, setWeight] = useState<string>("18");
  const [units, setUnits] = useState<string>('metric');
  
  const growthData = {
    male: {
      height: {
        0.25: [1, 62.1, 0.03507],
        0.5: [1, 67.8, 0.03508],
        0.75: [1, 72.3, 0.03624],
        1: [1, 76.1, 0.03621],
        1.5: [1, 82.4, 0.03613],
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
        0.25: [-0.5560, 6.4, 0.14069],
        0.5: [-0.5280, 8.0, 0.13552],
        0.75: [-0.4532, 9.2, 0.13248],
        1: [-0.3716, 10.2, 0.13344],
        1.5: [-0.3804, 11.5, 0.13536],
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
        0.25: [1, 60.5, 0.03504],
        0.5: [1, 65.9, 0.03593],
        0.75: [1, 70.4, 0.03624],
        1: [1, 74.3, 0.03676],
        1.5: [1, 80.9, 0.03743],
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
        0.25: [-0.5560, 5.8, 0.14253],
        0.5: [-0.5280, 7.3, 0.13932],
        0.75: [-0.4532, 8.4, 0.13939],
        1: [-0.3716, 9.5, 0.13893],
        1.5: [-0.3804, 10.8, 0.13700],
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
  
  const getAgeInYears = () => {
    const ageNum = parseFloat(ageValue) || 0;
    if (ageUnit === 'years') {
      return ageNum;
    } else {
      return ageNum / 12;
    }
  };
  
  const getMetricValues = () => {
    const heightNum = parseFloat(height) || 0;
    const weightNum = parseFloat(weight) || 0;
    
    if (units === 'metric') {
      return { height: heightNum, weight: weightNum };
    } else {
      return {
        height: heightNum * 2.54,
        weight: weightNum * 0.453592
      };
    }
  };
  
  const calculateZScore = (measurement: number, L: number, M: number, S: number) => {
    if (L === 0) {
      return Math.log(measurement / M) / S;
    } else {
      return (Math.pow(measurement / M, L) - 1) / (L * S);
    }
  };
  
  const zScoreToPercentile = (z: number) => {
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
  
  const getClosestAgeData = (ageData: Record<string, number[]>, targetAge: number) => {
    const ages = Object.keys(ageData).map(Number);
    const closestAge = ages.reduce((prev, curr) => {
      return (Math.abs(curr - targetAge) < Math.abs(prev - targetAge) ? curr : prev);
    });
    return { age: closestAge, data: ageData[closestAge] };
  };
  
  const calculatePercentiles = () => {
    const { height: metricHeight, weight: metricWeight } = getMetricValues();
    const ageInYears = getAgeInYears();
    
    const heightData = getClosestAgeData(growthData[gender as keyof typeof growthData].height, ageInYears);
    const weightData = getClosestAgeData(growthData[gender as keyof typeof growthData].weight, ageInYears);
    
    const heightZ = calculateZScore(metricHeight, heightData.data[0], heightData.data[1], heightData.data[2]);
    const weightZ = calculateZScore(metricWeight, weightData.data[0], weightData.data[1], weightData.data[2]);
    
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

  const interpretPercentile = (percentile: number) => {
    if (percentile < 3) return "Well below average";
    if (percentile < 15) return "Below average";
    if (percentile < 50) return "Slightly below average";
    if (percentile < 85) return "Average to slightly above";
    if (percentile < 97) return "Above average";
    return "Well above average";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Children's Growth Percentile Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate your child's height and weight percentiles based on CDC pediatric growth charts
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Baby className="h-5 w-5 text-primary" />
            Children's Growth Percentile Calculator
          </CardTitle>
          <CardDescription>
            Estimate where your child falls on the pediatric growth chart percentiles for their age and gender
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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
          
          <div className="space-y-2">
            <Label htmlFor="age" className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-blue-600" />
              Age
            </Label>
            <div className="flex gap-2">
              <Input
                id="age"
                type="text"
                inputMode="numeric"
                value={ageValue}
                onChange={(e) => handleInputChange(e, setAgeValue)}
                className="flex-1"
              />
              <Select value={ageUnit} onValueChange={setAgeUnit}>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="years">Years</SelectItem>
                  <SelectItem value="months">Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">
              {ageUnit === 'years' 
                ? 'Supported age range: 3 months to 10 years' 
                : 'Supported age range: 3 to 120 months'}
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="height" className="flex items-center gap-2">
              <Ruler className="h-4 w-4 text-green-600" />
              Height ({units === 'metric' ? 'cm' : 'inches'})
            </Label>
            <Input
              id="height"
              type="text"
              inputMode="numeric"
              value={height}
              onChange={(e) => handleInputChange(e, setHeight)}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight" className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-orange-600" />
              Weight ({units === 'metric' ? 'kg' : 'pounds'})
            </Label>
            <Input
              id="weight"
              type="text"
              inputMode="numeric"
              value={weight}
              onChange={(e) => handleInputChange(e, setWeight)}
              className="w-full"
            />
          </div>
          
          <DisclaimerAlert className="mt-4" />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Growth Results
          </CardTitle>
          <CardDescription>
            Based on CDC growth references for {results.referenceAge < 1 ? `${Math.round(results.referenceAge * 12)} months` : `${results.referenceAge} ${results.referenceAge === 1 ? 'year' : 'years'}`}
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
