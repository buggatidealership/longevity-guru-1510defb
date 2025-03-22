
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { evModels, cityDistances, distanceRanges, type EVModel } from '@/data/evRangeData';
import { Car, Map, Battery, Thermometer, Wind, ArrowRight, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AdUnit } from './AdUnit';

const EVRangeCalculatorComponent = () => {
  const [selectedEV, setSelectedEV] = useState<EVModel>('teslaModel3');
  const [startLocation, setStartLocation] = useState('new york');
  const [endLocation, setEndLocation] = useState('boston');
  const [customDistance, setCustomDistance] = useState(0);
  const [useCustomDistance, setUseCustomDistance] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [temperature, setTemperature] = useState(70); // Fahrenheit
  const [speed, setSpeed] = useState(65); // mph
  const [hvacUsage, setHvacUsage] = useState('low');
  const [elevationGain, setElevationGain] = useState('flat');
  const [headwind, setHeadwind] = useState('none');
  
  const [distance, setDistance] = useState(0);
  const [range, setRange] = useState(0);
  const [rangeImpact, setRangeImpact] = useState(0);
  const [canReach, setCanReach] = useState(false);
  const [remainingRange, setRemainingRange] = useState(0);
  const [remainingPercentage, setRemainingPercentage] = useState(0);
  
  const [showResults, setShowResults] = useState(false);
  const [cities, setCities] = useState<string[]>([]);
  
  // Initialize city list
  useEffect(() => {
    const cityNames = Object.keys(cityDistances);
    setCities(cityNames);
  }, []);
  
  // Update distance when locations change
  useEffect(() => {
    if (!useCustomDistance && startLocation && endLocation && startLocation !== endLocation) {
      if (cityDistances[startLocation] && cityDistances[startLocation][endLocation]) {
        setDistance(cityDistances[startLocation][endLocation]);
      } else if (cityDistances[endLocation] && cityDistances[endLocation][startLocation]) {
        setDistance(cityDistances[endLocation][startLocation]);
      } else {
        // Default to a random distance in the middle range if cities don't have a defined distance
        const randomRange = distanceRanges[Math.floor(Math.random() * distanceRanges.length)];
        const randomDistance = Math.floor(Math.random() * (randomRange.max - randomRange.min + 1)) + randomRange.min;
        setDistance(randomDistance);
      }
    }
  }, [startLocation, endLocation, useCustomDistance]);
  
  const calculateRange = () => {
    // Get base range for the selected EV model
    const baseRange = evModels[selectedEV].range;
    let adjustedRange = baseRange;
    
    // Temperature impact (cold or hot weather reduces range)
    let tempFactor = 1.0;
    if (temperature < 32) {
      // Significant reduction in very cold weather (up to 40% loss)
      tempFactor = 0.6 + (temperature / 32) * 0.4;
    } else if (temperature < 60) {
      // Mild reduction in cool weather
      tempFactor = 0.9 + (temperature - 32) / (60 - 32) * 0.1;
    } else if (temperature > 90) {
      // Reduction in hot weather (up to 20% loss)
      tempFactor = 1.0 - (temperature - 90) / 70 * 0.2;
    }
    
    // Speed impact (higher speeds reduce efficiency)
    let speedFactor = 1.0;
    if (speed > 65) {
      // Exponential decrease in efficiency at higher speeds
      speedFactor = 1.0 - Math.pow((speed - 65) / 35, 1.5) * 0.3;
    } else if (speed < 45) {
      // Slight reduction at very low speeds (less regenerative braking, more stop-and-go)
      speedFactor = 0.95 + (speed / 45) * 0.05;
    }
    
    // HVAC usage impact
    let hvacFactor = 1.0;
    if (hvacUsage === 'high') {
      hvacFactor = 0.85; // Up to 15% reduction with heavy HVAC use
    } else if (hvacUsage === 'medium') {
      hvacFactor = 0.92; // About 8% reduction with moderate HVAC use
    } else if (hvacUsage === 'low') {
      hvacFactor = 0.97; // Minor impact with low HVAC use
    }
    
    // Elevation impact
    let elevationFactor = 1.0;
    if (elevationGain === 'significant') {
      elevationFactor = 0.8; // Up to 20% reduction for significant elevation gain
    } else if (elevationGain === 'moderate') {
      elevationFactor = 0.9; // About 10% reduction for moderate elevation gain
    }
    
    // Headwind impact
    let windFactor = 1.0;
    if (headwind === 'strong') {
      windFactor = 0.85; // Up to 15% reduction with strong headwinds
    } else if (headwind === 'moderate') {
      windFactor = 0.92; // About 8% reduction with moderate headwinds
    } else if (headwind === 'light') {
      windFactor = 0.97; // Minor impact with light headwinds
    }
    
    // Combine all factors
    const combinedFactor = tempFactor * speedFactor * hvacFactor * elevationFactor * windFactor;
    adjustedRange = baseRange * combinedFactor;
    
    // Adjust for current battery level
    adjustedRange = adjustedRange * (batteryLevel / 100);
    
    // Calculate range impact percentage
    const impactPercentage = ((combinedFactor - 1) * 100).toFixed(1);
    
    // Determine if destination is reachable and calculate remaining range
    const isReachable = adjustedRange >= distance;
    const remaining = adjustedRange - distance;
    const remainingPercent = (remaining / baseRange) * 100;
    
    setRange(Math.round(adjustedRange));
    setRangeImpact(parseFloat(impactPercentage));
    setCanReach(isReachable);
    setRemainingRange(Math.round(remaining));
    setRemainingPercentage(Math.round(remainingPercent));
    setShowResults(true);
  };
  
  const handleCalculate = () => {
    calculateRange();
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">EV Range Calculator</h1>
        <p className="text-muted-foreground mt-2 mb-4">
          Estimate if your electric vehicle can reach your destination on a single charge
        </p>
        <AdUnit slot="1111111111" format="horizontal" className="max-w-3xl mx-auto my-4" />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            Electric Vehicle Range Calculator
          </CardTitle>
          <CardDescription>
            Enter your vehicle details and trip information to calculate if you can reach your destination.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Vehicle Selection */}
          <div className="space-y-2">
            <Label htmlFor="evModel" className="flex items-center gap-2">
              <Car className="h-4 w-4 text-blue-600" />
              Electric Vehicle Model
            </Label>
            <Select
              value={selectedEV}
              onValueChange={(value) => setSelectedEV(value as EVModel)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select EV model" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(evModels).map(([key, model]) => (
                  <SelectItem key={key} value={key}>
                    {model.name} ({model.range} mi)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Trip Information */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-medium">Trip Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startLocation" className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-green-600" />
                  Starting Location
                </Label>
                <Select
                  value={startLocation}
                  onValueChange={setStartLocation}
                  disabled={useCustomDistance}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select starting city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city.charAt(0).toUpperCase() + city.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="endLocation" className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-red-600" />
                  Destination
                </Label>
                <Select
                  value={endLocation}
                  onValueChange={setEndLocation}
                  disabled={useCustomDistance}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city.charAt(0).toUpperCase() + city.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="useCustomDistance"
                checked={useCustomDistance}
                onChange={() => setUseCustomDistance(!useCustomDistance)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="useCustomDistance" className="text-sm font-normal cursor-pointer">
                Enter custom distance instead
              </Label>
            </div>
            
            {useCustomDistance ? (
              <div className="space-y-2">
                <Label htmlFor="customDistance">Custom Distance (miles)</Label>
                <Input
                  id="customDistance"
                  type="number"
                  min="1"
                  value={customDistance}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setCustomDistance(value);
                    setDistance(value);
                  }}
                />
              </div>
            ) : (
              <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                <div className="text-sm text-gray-500">Trip Distance:</div>
                <div className="font-medium">{distance} miles</div>
              </div>
            )}
          </div>
          
          {/* Vehicle & Conditions */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-medium">Vehicle & Conditions</h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="batteryLevel" className="flex items-center gap-2">
                  <Battery className="h-4 w-4 text-emerald-600" />
                  Starting Battery Level
                </Label>
                <span className="text-sm font-medium">{batteryLevel}%</span>
              </div>
              <div className="py-2">
                <Slider
                  id="batteryLevel"
                  min={10}
                  max={100}
                  step={1}
                  value={[batteryLevel]}
                  onValueChange={(value) => setBatteryLevel(value[0])}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>10%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="temperature" className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-red-500" />
                  Outside Temperature
                </Label>
                <span className="text-sm font-medium">{temperature}°F</span>
              </div>
              <div className="py-2">
                <Slider
                  id="temperature"
                  min={0}
                  max={100}
                  step={1}
                  value={[temperature]}
                  onValueChange={(value) => setTemperature(value[0])}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0°F</span>
                <span>100°F</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="speed" className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-blue-500" />
                  Average Speed
                </Label>
                <span className="text-sm font-medium">{speed} mph</span>
              </div>
              <div className="py-2">
                <Slider
                  id="speed"
                  min={25}
                  max={85}
                  step={5}
                  value={[speed]}
                  onValueChange={(value) => setSpeed(value[0])}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>25 mph</span>
                <span>85 mph</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hvacUsage">HVAC Usage</Label>
                <Select value={hvacUsage} onValueChange={setHvacUsage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="elevationGain">Elevation Change</Label>
                <Select value={elevationGain} onValueChange={setElevationGain}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="moderate">Moderate Hills</SelectItem>
                    <SelectItem value="significant">Significant Hills</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="headwind" className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-cyan-600" />
                  Headwind
                </Label>
                <Select value={headwind} onValueChange={setHeadwind}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="strong">Strong</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Calculate Button */}
          <Button 
            className="w-full"
            onClick={handleCalculate}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate EV Range
          </Button>
        </CardContent>
      </Card>
      
      {/* Results Section */}
      {showResults && (
        <Card className={cn(
          "border-2", 
          canReach ? "border-green-500" : "border-red-500",
          "animate-fadeIn"
        )}>
          <CardHeader className={cn(
            canReach ? "bg-green-50" : "bg-red-50",
            "rounded-t-lg"
          )}>
            <CardTitle className={cn(
              "flex items-center gap-2",
              canReach ? "text-green-700" : "text-red-700"
            )}>
              {canReach ? (
                <>
                  <div className="bg-green-100 p-1 rounded-full">
                    <ArrowRight className="h-5 w-5 text-green-600" />
                  </div>
                  You Can Reach Your Destination!
                </>
              ) : (
                <>
                  <div className="bg-red-100 p-1 rounded-full">
                    <Battery className="h-5 w-5 text-red-600" />
                  </div>
                  You Cannot Reach Your Destination
                </>
              )}
            </CardTitle>
            <CardDescription className={cn(
              canReach ? "text-green-600" : "text-red-600"
            )}>
              {canReach
                ? `Your ${evModels[selectedEV].name} can complete this ${distance} mile journey with ${remainingPercentage}% battery remaining.`
                : `Your ${evModels[selectedEV].name} can only travel ${range} miles on your current charge, which is ${Math.abs(remainingRange)} miles short of your destination.`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-500">Vehicle Range</div>
                <div className="text-xl font-medium mt-1">{evModels[selectedEV].range} mi</div>
                <div className="text-xs text-gray-500">at 100% charge</div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-500">Adjusted Range</div>
                <div className="text-xl font-medium mt-1">{range} mi</div>
                <div className="text-xs text-gray-500">
                  {rangeImpact > 0 ? "+" : ""}{rangeImpact}% impact
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-500">Trip Distance</div>
                <div className="text-xl font-medium mt-1">{distance} mi</div>
                <div className="text-xs text-gray-500">&nbsp;</div>
              </div>
              
              <div className={cn(
                "p-4 rounded-lg text-center",
                canReach ? "bg-green-50" : "bg-red-50"
              )}>
                <div className={cn(
                  "text-sm",
                  canReach ? "text-green-600" : "text-red-600"
                )}>
                  {canReach ? "Remaining Range" : "Range Deficit"}
                </div>
                <div className={cn(
                  "text-xl font-medium mt-1",
                  canReach ? "text-green-700" : "text-red-700"
                )}>
                  {Math.abs(remainingRange)} mi
                </div>
                <div className={cn(
                  "text-xs",
                  canReach ? "text-green-600" : "text-red-600"
                )}>
                  {canReach ? `${remainingPercentage}% battery left` : "Additional charge needed"}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h4 className="font-medium">Factors Affecting Your Range:</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <span className="font-medium">Temperature:</span> {temperature}°F 
                  {temperature < 32 ? " (significantly reduces range)" : 
                   temperature < 60 ? " (slightly reduces range)" :
                   temperature > 90 ? " (reduces range)" : " (optimal)"}
                </li>
                <li>
                  <span className="font-medium">Speed:</span> {speed} mph
                  {speed > 65 ? " (reduces efficiency)" :
                   speed < 45 ? " (urban driving)" : " (efficient highway speed)"}
                </li>
                <li>
                  <span className="font-medium">HVAC:</span> {hvacUsage.charAt(0).toUpperCase() + hvacUsage.slice(1)} usage
                  {hvacUsage === 'high' ? " (significant power consumption)" :
                   hvacUsage === 'medium' ? " (moderate power consumption)" :
                   hvacUsage === 'low' ? " (minimal impact)" : " (no impact)"}
                </li>
                <li>
                  <span className="font-medium">Elevation:</span> {elevationGain.charAt(0).toUpperCase() + elevationGain.slice(1)}
                  {elevationGain === 'significant' ? " (substantially increases energy use)" :
                   elevationGain === 'moderate' ? " (increases energy use)" : " (optimal)"}
                </li>
                <li>
                  <span className="font-medium">Wind:</span> {headwind.charAt(0).toUpperCase() + headwind.slice(1)} headwind
                  {headwind === 'strong' ? " (significant aerodynamic resistance)" :
                   headwind === 'moderate' ? " (increased resistance)" :
                   headwind === 'light' ? " (slight resistance)" : " (no impact)"}
                </li>
              </ul>
            </div>
            
            {!canReach && (
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 mb-2">Recommendations:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Find a charging station approximately {Math.ceil(Math.abs(remainingRange) / 2)} miles into your journey</li>
                  <li>• Reduce your speed to improve efficiency</li>
                  <li>• Minimize HVAC usage if possible</li>
                  <li>• Consider an alternative route with less elevation change</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EVRangeCalculatorComponent;
