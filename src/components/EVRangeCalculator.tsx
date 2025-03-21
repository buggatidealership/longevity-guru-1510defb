
import React, { useState, KeyboardEvent } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car } from 'lucide-react';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import { useToast } from '@/hooks/use-toast';
import { EVModel, evModels } from '@/data/evRangeData';
import { calculateGoogleMapsDistance, calculateDistance } from '@/utils/distanceCalculator';
import EVModelSelector from '@/components/EVModelSelector';
import LocationInputs from '@/components/LocationInputs';
import EVRangeResult, { RangeResult } from '@/components/EVRangeResult';
import { useLoadScript } from '@react-google-maps/api';

const libraries: ("places")[] = ["places"];

const EVRangeCalculator = () => {
  const [evModel, setEvModel] = useState<EVModel | ''>('');
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<RangeResult | null>(null);
  const [startCoords, setStartCoords] = useState<google.maps.LatLngLiteral | null>(null);
  const [destCoords, setDestCoords] = useState<google.maps.LatLngLiteral | null>(null);
  
  const { toast } = useToast();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBiB3iNbg53FUYQY9l3EPdJVFzeYLWGqQw", // This is a temporary client-side restricted key
    libraries
  });

  const handlePlaceSelected = (
    place: google.maps.places.PlaceResult | null, 
    isStart: boolean
  ) => {
    if (place && place.geometry && place.geometry.location) {
      const coords = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      if (isStart) {
        setStartCoords(coords);
      } else {
        setDestCoords(coords);
      }
    }
  };

  const handleCalculate = async () => {
    if (!evModel || !startLocation || !destination) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to calculate your trip.",
        variant: "destructive"
      });
      return;
    }

    setCalculating(true);
    
    try {
      // Try to use Google Maps Distance Matrix API first
      let distance: number;
      
      if (isLoaded && startCoords && destCoords) {
        try {
          distance = await calculateGoogleMapsDistance(startCoords, destCoords);
        } catch (error) {
          console.error("Google Maps distance calculation failed:", error);
          // Fallback to our own distance calculation
          distance = calculateDistance(startLocation, destination);
        }
      } else {
        // Fallback if we don't have coordinates or Google Maps isn't loaded
        distance = calculateDistance(startLocation, destination);
      }
      
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
    } catch (error) {
      console.error("Error calculating distance:", error);
      toast({
        title: "Error calculating distance",
        description: "Could not calculate the distance between the locations. Please try again or use different locations.",
        variant: "destructive"
      });
    } finally {
      setCalculating(false);
    }
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
          <EVModelSelector 
            value={evModel} 
            onChange={setEvModel} 
          />
          
          <LocationInputs
            startLocation={startLocation}
            destination={destination}
            onStartLocationChange={setStartLocation}
            onDestinationChange={setDestination}
            onKeyPress={handleKeyPress}
            onPlaceSelected={handlePlaceSelected}
          />
          
          <Button 
            onClick={handleCalculate} 
            disabled={calculating}
            className="w-full"
          >
            {calculating ? "Calculating..." : "Calculate Range"}
          </Button>
          
          <EVRangeResult result={result} evModel={evModel} />
          
          <DisclaimerAlert className="mt-4" />
        </CardContent>
      </Card>
    </div>
  );
};

export default EVRangeCalculator;
