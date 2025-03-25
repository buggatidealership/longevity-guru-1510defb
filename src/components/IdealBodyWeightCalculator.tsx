
import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import InfoTooltip from '@/components/InfoTooltip';
import { Calculator } from 'lucide-react';

interface Formula {
  name: string;
  male: (height: number) => number;
  female: (height: number) => number;
  description: string;
}

const IdealBodyWeightCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<number>(170);
  const [heightUnit, setHeightUnit] = useState<'cm' | 'in'>('cm');
  const [results, setResults] = useState<Record<string, number>>({});
  const [calculationComplete, setCalculationComplete] = useState<boolean>(false);

  // Define the ideal body weight formulas
  const formulas: Record<string, Formula> = {
    devine: {
      name: 'Devine Formula',
      male: (height) => 50 + 2.3 * ((height / 2.54) - 60),
      female: (height) => 45.5 + 2.3 * ((height / 2.54) - 60),
      description: 'Developed in 1974, the Devine Formula is commonly used in clinical settings, particularly for medication dosing.',
    },
    robinson: {
      name: 'Robinson Formula',
      male: (height) => 52 + 1.9 * ((height / 2.54) - 60),
      female: (height) => 49 + 1.7 * ((height / 2.54) - 60),
      description: 'The Robinson Formula (1983) provides a slightly different calculation that often results in a lower ideal weight than Devine.',
    },
    hamwi: {
      name: 'Hamwi Formula',
      male: (height) => 48 + 2.7 * ((height / 2.54) - 60),
      female: (height) => 45.5 + 2.2 * ((height / 2.54) - 60),
      description: 'Created in 1964, the Hamwi Formula was initially developed for determining life insurance premiums.',
    },
    miller: {
      name: 'Miller Formula',
      male: (height) => 56.2 + 1.41 * ((height / 2.54) - 60),
      female: (height) => 53.1 + 1.36 * ((height / 2.54) - 60),
      description: 'The Miller Formula often yields the lowest IBW estimates of the major formulas.',
    },
  };

  const calculateResults = () => {
    // Convert height to cm if in inches
    const heightInCm = heightUnit === 'in' ? height * 2.54 : height;
    
    // Calculate results using each formula
    const calculatedResults: Record<string, number> = {};
    
    for (const key in formulas) {
      if (heightInCm >= 150) { // Only calculate for heights where formulas are valid
        calculatedResults[key] = Math.round(formulas[key][gender](heightInCm) * 10) / 10;
      } else {
        calculatedResults[key] = 0; // Invalid range
      }
    }
    
    setResults(calculatedResults);
    setCalculationComplete(true);
  };

  const handleHeightUnitChange = (newUnit: 'cm' | 'in') => {
    // Convert the current height to the new unit
    const newHeight = newUnit === 'cm' 
      ? Math.round(height * 2.54) 
      : Math.round(height / 2.54 * 10) / 10;
    
    setHeightUnit(newUnit);
    setHeight(newHeight);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateResults();
  };
  
  return (
    <div className="ideal-body-weight-calculator">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Ideal Body Weight Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="formulas">About Formulas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calculator" className="mt-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup 
                      defaultValue="male" 
                      value={gender}
                      onValueChange={(value) => setGender(value as 'male' | 'female')}
                      className="flex flex-row space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="cursor-pointer">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="cursor-pointer">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Label>Height</Label>
                      <InfoTooltip content="Your height is the primary factor in ideal body weight calculations." />
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                        min={heightUnit === 'cm' ? 100 : 39}
                        max={heightUnit === 'cm' ? 240 : 94}
                        step={heightUnit === 'cm' ? 1 : 0.1}
                        className="flex-1"
                      />
                      <Select 
                        value={heightUnit} 
                        onValueChange={(value) => handleHeightUnitChange(value as 'cm' | 'in')}
                      >
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cm">cm</SelectItem>
                          <SelectItem value="in">inches</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">Calculate Ideal Weight</Button>
              </form>
              
              {calculationComplete && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold">Your Results</h3>
                  
                  <div className="rounded-md border">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
                      {Object.keys(formulas).map((key) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-medium text-gray-500">{formulas[key].name}</div>
                          <div className="text-xl font-bold mt-1">
                            {results[key] > 0 
                              ? `${results[key]} kg`
                              : 'N/A'
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> Ideal body weight formulas provide general guidelines rather than 
                      absolute targets. They don't account for factors like muscle mass, body composition, 
                      or individual health considerations.
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="formulas" className="mt-4 space-y-4">
              <p className="text-sm text-gray-700">
                These formulas calculate theoretical ideal weights based primarily on height. 
                Each formula uses a different approach and may give different results.
              </p>
              
              <div className="space-y-4">
                {Object.keys(formulas).map((key) => (
                  <div key={key} className="border rounded-md p-4">
                    <h3 className="font-medium">{formulas[key].name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{formulas[key].description}</p>
                    <Separator className="my-3" />
                    <div className="text-xs text-gray-500 space-y-1">
                      <div><strong>Male:</strong> 50 kg + 2.3 kg × (height in inches - 60)</div>
                      <div><strong>Female:</strong> 45.5 kg + 2.3 kg × (height in inches - 60)</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-amber-50 p-4 rounded-md text-sm text-amber-800">
                Note: These formulas were developed decades ago and may not accurately represent modern 
                diverse populations. Use these results as a general reference point, not a goal.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdealBodyWeightCalculator;
