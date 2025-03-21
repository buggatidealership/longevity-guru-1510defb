
import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Info } from 'lucide-react';
import { useLoadScript } from '@react-google-maps/api';

const libraries: ("places")[] = ["places"];

interface LocationInputsProps {
  startLocation: string;
  destination: string;
  onStartLocationChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  onPlaceSelected: (place: google.maps.places.PlaceResult | null, isStart: boolean) => void;
}

const LocationInputs: React.FC<LocationInputsProps> = ({
  startLocation,
  destination,
  onStartLocationChange,
  onDestinationChange,
  onKeyPress,
  onPlaceSelected
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBiB3iNbg53FUYQY9l3EPdJVFzeYLWGqQw", // This is a temporary client-side restricted key
    libraries
  });

  const startAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const destInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoaded && startInputRef.current) {
      startAutocompleteRef.current = new window.google.maps.places.Autocomplete(startInputRef.current, {
        types: ['geocode']
      });

      startAutocompleteRef.current.addListener('place_changed', () => {
        const place = startAutocompleteRef.current?.getPlace();
        onStartLocationChange(place?.formatted_address || place?.name || startLocation);
        onPlaceSelected(place || null, true);
      });
    }
  }, [isLoaded, onStartLocationChange, onPlaceSelected, startLocation]);

  useEffect(() => {
    if (isLoaded && destInputRef.current) {
      destAutocompleteRef.current = new window.google.maps.places.Autocomplete(destInputRef.current, {
        types: ['geocode']
      });

      destAutocompleteRef.current.addListener('place_changed', () => {
        const place = destAutocompleteRef.current?.getPlace();
        onDestinationChange(place?.formatted_address || place?.name || destination);
        onPlaceSelected(place || null, false);
      });
    }
  }, [isLoaded, onDestinationChange, onPlaceSelected, destination]);

  if (!isLoaded) {
    return (
      <>
        <div className="space-y-2">
          <Label htmlFor="startLocation">Starting Location</Label>
          <Input 
            id="startLocation"
            value={startLocation}
            onChange={e => onStartLocationChange(e.target.value)}
            placeholder="Loading Google Maps..."
            disabled
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input 
            id="destination"
            value={destination}
            onChange={e => onDestinationChange(e.target.value)}
            placeholder="Loading Google Maps..."
            disabled
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="startLocation">Starting Location</Label>
        <div className="space-y-1">
          <Input
            id="startLocation"
            ref={startInputRef}
            value={startLocation}
            onChange={e => onStartLocationChange(e.target.value)}
            placeholder="Start typing to search locations"
          />
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Info className="h-3 w-3" /> Use Google Maps search for accurate locations
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="destination">Destination</Label>
        <div className="space-y-1">
          <Input
            id="destination"
            ref={destInputRef}
            value={destination}
            onChange={e => onDestinationChange(e.target.value)}
            placeholder="Start typing to search locations"
            onKeyDown={onKeyPress}
          />
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Info className="h-3 w-3" /> Press Enter to calculate after entering destination
          </p>
        </div>
      </div>
    </>
  );
};

export default LocationInputs;
