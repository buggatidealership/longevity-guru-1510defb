
import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Info } from 'lucide-react';

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
  const startInputRef = useRef<HTMLInputElement>(null);
  const destInputRef = useRef<HTMLInputElement>(null);

  // Manually initialize autocomplete when component mounts
  useEffect(() => {
    let startAutocomplete: google.maps.places.Autocomplete | null = null;
    let destAutocomplete: google.maps.places.Autocomplete | null = null;
    
    // Only initialize if the Google Maps API is loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      if (startInputRef.current) {
        startAutocomplete = new window.google.maps.places.Autocomplete(startInputRef.current, {
          types: ['geocode']
        });

        startAutocomplete.addListener('place_changed', () => {
          const place = startAutocomplete?.getPlace();
          onStartLocationChange(place?.formatted_address || place?.name || startLocation);
          onPlaceSelected(place || null, true);
        });
      }

      if (destInputRef.current) {
        destAutocomplete = new window.google.maps.places.Autocomplete(destInputRef.current, {
          types: ['geocode']
        });

        destAutocomplete.addListener('place_changed', () => {
          const place = destAutocomplete?.getPlace();
          onDestinationChange(place?.formatted_address || place?.name || destination);
          onPlaceSelected(place || null, false);
        });
      }
    }

    // Cleanup function
    return () => {
      if (startAutocomplete && google.maps.event) {
        google.maps.event.clearInstanceListeners(startAutocomplete);
      }
      if (destAutocomplete && google.maps.event) {
        google.maps.event.clearInstanceListeners(destAutocomplete);
      }
    };
  }, [startLocation, destination, onStartLocationChange, onDestinationChange, onPlaceSelected]);

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
