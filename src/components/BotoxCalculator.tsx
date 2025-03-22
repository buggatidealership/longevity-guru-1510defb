
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Info, DollarSign, Syringe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { AdUnit } from './AdUnit';

// Treatment area data with units range and average cost
const treatmentAreas = {
  forehead: {
    name: "Forehead Lines",
    unitsRange: [10, 30],
    defaultUnits: 20,
    averageCost: 16
  },
  glabellar: {
    name: "Glabellar Lines (Frown Lines/11s)",
    unitsRange: [15, 40],
    defaultUnits: 25,
    averageCost: 16
  },
  crowsFeet: {
    name: "Crow's Feet",
    unitsRange: [10, 30],
    defaultUnits: 24,
    averageCost: 16
  },
  bunnyLines: {
    name: "Bunny Lines (Nose)",
    unitsRange: [5, 15],
    defaultUnits: 10,
    averageCost: 15
  },
  lipLines: {
    name: "Lip Lines",
    unitsRange: [4, 10],
    defaultUnits: 6,
    averageCost: 16
  },
  chinDimpling: {
    name: "Chin Dimpling",
    unitsRange: [4, 10],
    defaultUnits: 6,
    averageCost: 15
  },
  jawline: {
    name: "Jawline (Masseter)",
    unitsRange: [20, 60],
    defaultUnits: 40,
    averageCost: 14
  },
  neckBands: {
    name: "Neck Bands (Platysmal Bands)",
    unitsRange: [25, 60],
    defaultUnits: 40,
    averageCost: 14
  },
  underarms: {
    name: "Underarms (Hyperhidrosis)",
    unitsRange: [50, 100],
    defaultUnits: 50,
    averageCost: 12
  }
};

const BotoxCalculator = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("areas");
  const [pricePerUnit, setPricePerUnit] = useState<number>(15);
  const [totalUnits, setTotalUnits] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [areaUnits, setAreaUnits] = useState<Record<string, number>>({});
  
  // Initialize default units for each area
  useEffect(() => {
    const initialAreaUnits: Record<string, number> = {};
    Object.keys(treatmentAreas).forEach(area => {
      initialAreaUnits[area] = treatmentAreas[area as keyof typeof treatmentAreas].defaultUnits;
    });
    setAreaUnits(initialAreaUnits);
  }, []);
  
  // Update calculations when selections change
  useEffect(() => {
    let units = 0;
    selectedAreas.forEach(area => {
      units += areaUnits[area] || 0;
    });
    
    setTotalUnits(units);
    setTotalCost(units * pricePerUnit);
  }, [selectedAreas, areaUnits, pricePerUnit]);
  
  // Toggle selection of treatment area
  const toggleAreaSelection = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };
  
  // Update units for a specific area
  const updateAreaUnits = (area: string, units: number) => {
    setAreaUnits(prev => ({
      ...prev,
      [area]: units
    }));
  };
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <AdUnit slot="5555555555" format="horizontal" className="max-w-3xl mx-auto my-4" />
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-4">
          <TabsTrigger value="areas" className="flex items-center">
            <Syringe className="mr-2 h-4 w-4" />
            Treatment Areas
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center">
            <Calculator className="mr-2 h-4 w-4" />
            Results
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="areas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Syringe className="mr-2 h-5 w-5 text-primary" />
                Select Botox Treatment Areas
              </CardTitle>
              <CardDescription>
                Choose the areas you want to treat with Botox and adjust the recommended units
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(treatmentAreas).map(([areaKey, areaData]) => (
                <div key={areaKey} className="border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id={`area-${areaKey}`}
                        checked={selectedAreas.includes(areaKey)}
                        onChange={() => toggleAreaSelection(areaKey)}
                        className="mt-1"
                      />
                      <div>
                        <label 
                          htmlFor={`area-${areaKey}`} 
                          className={`font-medium cursor-pointer ${selectedAreas.includes(areaKey) ? 'text-primary' : ''}`}
                        >
                          {areaData.name}
                        </label>
                        <div className="text-xs text-muted-foreground">
                          Typical range: {areaData.unitsRange[0]}-{areaData.unitsRange[1]} units
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      {selectedAreas.includes(areaKey) ? `${areaUnits[areaKey] || 0} units` : ''}
                    </div>
                  </div>
                  
                  {selectedAreas.includes(areaKey) && (
                    <div className="mt-3 grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-8 md:col-span-10">
                        <Slider
                          value={[areaUnits[areaKey] || areaData.defaultUnits]}
                          min={areaData.unitsRange[0]}
                          max={areaData.unitsRange[1]}
                          step={1}
                          onValueChange={(value) => updateAreaUnits(areaKey, value[0])}
                        />
                      </div>
                      <div className="col-span-4 md:col-span-2">
                        <Input
                          type="number"
                          min={areaData.unitsRange[0]}
                          max={areaData.unitsRange[1]}
                          value={areaUnits[areaKey] || areaData.defaultUnits}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value)) {
                              updateAreaUnits(
                                areaKey, 
                                Math.min(
                                  Math.max(value, areaData.unitsRange[0]), 
                                  areaData.unitsRange[1]
                                )
                              );
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button 
                onClick={() => setSelectedTab("results")}
                disabled={selectedAreas.length === 0}
              >
                <Calculator className="mr-2 h-4 w-4" />
                See Results
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="results" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-primary" />
                Botox Treatment Summary
              </CardTitle>
              <CardDescription>
                Your estimated Botox units and cost based on selected treatment areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {selectedAreas.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Info className="h-12 w-12 mx-auto mb-2 opacity-20" />
                  <p>No treatment areas selected.</p>
                  <p className="text-sm">Please go back and select at least one area to treat.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSelectedTab("areas")}
                  >
                    Select Treatment Areas
                  </Button>
                </div>
              ) : (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Treatment Area</TableHead>
                        <TableHead className="text-right">Units</TableHead>
                        <TableHead className="text-right">Est. Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedAreas.map(area => (
                        <TableRow key={area}>
                          <TableCell className="font-medium">{treatmentAreas[area as keyof typeof treatmentAreas].name}</TableCell>
                          <TableCell className="text-right">{areaUnits[area]}</TableCell>
                          <TableCell className="text-right">{formatCurrency(areaUnits[area] * pricePerUnit)}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="border-t-2">
                        <TableCell className="font-bold">TOTAL</TableCell>
                        <TableCell className="text-right font-bold">{totalUnits} units</TableCell>
                        <TableCell className="text-right font-bold">{formatCurrency(totalCost)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pricePerUnit" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        Price Per Unit
                      </Label>
                      <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-8 md:col-span-10">
                          <Slider
                            id="pricePerUnitSlider"
                            min={8}
                            max={25}
                            step={1}
                            value={[pricePerUnit]}
                            onValueChange={(value) => setPricePerUnit(value[0])}
                          />
                        </div>
                        <div className="col-span-4 md:col-span-2">
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                            <Input
                              id="pricePerUnit"
                              type="number"
                              min={8}
                              max={25}
                              value={pricePerUnit}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value)) {
                                  setPricePerUnit(Math.min(Math.max(value, 8), 25));
                                }
                              }}
                              className="pl-7"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Botox prices typically range from $8-$25 per unit in the US, varying by location and provider.</p>
                    </div>
                  </div>
                
                  <div className="bg-primary/5 rounded-lg p-4 mt-6">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2 text-primary" />
                      Treatment Information
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Botox results typically last 3-4 months before requiring retreatment.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Annual maintenance cost estimate: {formatCurrency(totalCost * 3)} - {formatCurrency(totalCost * 4)} per year
                    </p>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button 
                variant="outline" 
                onClick={() => setSelectedTab("areas")}
              >
                Modify Selection
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '250px' }}>
        <AdUnit
          className="w-full"
          slot="3333333333" 
          format="rectangle"
          responsive={true}
        />
      </div>
    </div>
  );
};

export default BotoxCalculator;
