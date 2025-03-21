import React, { useState, KeyboardEvent } from 'react';
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
import { Calculator, Car, Navigation, AlertTriangle, CheckCircle } from 'lucide-react';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const evModels = {
  "teslaModel3": { name: "Tesla Model 3 (SR+)", range: 267 },
  "teslaModelY": { name: "Tesla Model Y (LR)", range: 330 },
  "fordMachE": { name: "Ford Mustang Mach-E", range: 305 },
  "chevyBolt": { name: "Chevy Bolt EV", range: 259 },
  "nissanLeaf": { name: "Nissan Leaf", range: 215 },
  "hyundaiIoniq5": { name: "Hyundai Ioniq 5", range: 303 },
  "kiaEV6": { name: "Kia EV6", range: 310 },
  "volkswagenID4": { name: "Volkswagen ID.4", range: 275 },
  "audiQ4": { name: "Audi Q4 e-tron", range: 241 },
  "bmwi4": { name: "BMW i4", range: 301 },
  "polestar2": { name: "Polestar 2", range: 270 },
  "rivianR1T": { name: "Rivian R1T", range: 314 }
};

type EVModel = keyof typeof evModels;

const EVRangeCalculator = () => {
  const [evModel, setEvModel] = useState<EVModel | ''>('');
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<{
    message: string;
    type: 'success' | 'warning' | 'danger';
    distance: number;
    range: number;
    remainingRange: number;
  } | null>(null);
  
  const { toast } = useToast();

  const calculateDistance = () => {
    const seed = (startLocation.length * destination.length) % 500;
    return Math.max(25, seed + Math.floor(Math.random() * 100));
  };

  const handleCalculate = () => {
    if (!evModel || !startLocation || !destination) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to calculate your trip.",
        variant: "destructive"
      });
      return;
    }

    setCalculating(true);
    
    setTimeout(() => {
      const distance = calculateDistance();
      const selectedEv = evModels[evModel];
      const range = selectedEv.range;
      
      const remainingRange = range - distance;
      let resultMessage = '';
      let resultType: 'success' | 'warning' | 'danger' = 'success';
      
      if (remainingRange >= range * 0.2) {
        resultType = 'success';
        resultMessage = `Good to go! Your ${selectedEv.name} can easily make this trip on a full charge.`;
      } else if (remainingRange > 0) {
        resultType = 'warning';
        resultMessage = `Possible, but cutting it close. Your ${selectedEv.name} can make this trip, but you'll arrive with low battery.`;
      } else {
        resultType = 'danger';
        resultMessage = `Charging needed. Your ${selectedEv.name} cannot make this trip on a single charge.`;
      }
      
      setResult({
        message: resultMessage,
        type: resultType,
        distance,
        range,
        remainingRange: Math.max(0, remainingRange)
      });
      
      setCalculating(false);
    }, 1000);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCalculate();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">EV Range Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate if your electric vehicle can make the trip on a single charge
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            EV Range Trip Planner
          </CardTitle>
          <CardDescription>
            Check if your electric vehicle has enough range for your planned trip
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="evModel">Select your EV model</Label>
            <Select value={evModel} onValueChange={value => setEvModel(value as EVModel)}>
              <SelectTrigger>
                <SelectValue placeholder="-- Select your EV --" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(evModels).map(([key, { name, range }]) => (
                  <SelectItem key={key} value={key}>
                    {name} - {range} miles
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="startLocation">Starting Location</Label>
            <Input
              id="startLocation"
              value={startLocation}
              onChange={e => setStartLocation(e.target.value)}
              placeholder="Enter starting location"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Input
              id="destination"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              placeholder="Enter destination"
              onKeyDown={handleKeyPress}
            />
          </div>
          
          <Button 
            onClick={handleCalculate} 
            disabled={calculating}
            className="w-full"
          >
            {calculating ? "Calculating..." : "Calculate Range"}
          </Button>
          
          {result && (
            <div className={`mt-6 p-4 rounded-lg ${
              result.type === 'success' ? 'bg-green-50 border-l-4 border-green-500 text-green-700' :
              result.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700' :
              'bg-red-50 border-l-4 border-red-500 text-red-700'
            }`}>
              <div className="flex items-start gap-2">
                {result.type === 'success' && <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                {result.type === 'warning' && <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                {result.type === 'danger' && <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                <p className="font-medium">{result.message}</p>
              </div>
              
              <div className="mt-4 space-y-2 text-sm">
                <p>Trip distance: approximately {result.distance} miles</p>
                <p>{evModels[evModel].name} range: {result.range} miles</p>
                <p>Remaining range at destination: {result.remainingRange.toFixed(1)} miles</p>
                {result.remainingRange === 0 && (
                  <p>You'll need to charge approximately {Math.abs(result.range - result.distance).toFixed(1)} miles worth of battery during your trip.</p>
                )}
              </div>
            </div>
          )}
          
          <DisclaimerAlert className="mt-4" />
        </CardContent>
      </Card>
    </div>
  );
};

export default EVRangeCalculator;
