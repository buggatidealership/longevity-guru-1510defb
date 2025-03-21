
import React, { KeyboardEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Info } from 'lucide-react';

interface LocationInputsProps {
  startLocation: string;
  destination: string;
  onStartLocationChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const LocationInputs: React.FC<LocationInputsProps> = ({
  startLocation,
  destination,
  onStartLocationChange,
  onDestinationChange,
  onKeyPress
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="startLocation">Starting Location</Label>
        <div className="space-y-1">
          <Input
            id="startLocation"
            value={startLocation}
            onChange={e => onStartLocationChange(e.target.value)}
            placeholder="Enter city name or full address"
          />
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Info className="h-3 w-3" /> Works with city names or full addresses
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="destination">Destination</Label>
        <div className="space-y-1">
          <Input
            id="destination"
            value={destination}
            onChange={e => onDestinationChange(e.target.value)}
            placeholder="Enter city name or full address"
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
