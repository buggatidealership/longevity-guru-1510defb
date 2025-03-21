
import React from 'react';
import { Label } from '@/components/ui/label';
import { evModels, EVModel } from '@/data/evRangeData';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface EVModelSelectorProps {
  value: EVModel | '';
  onChange: (value: EVModel) => void;
}

const EVModelSelector: React.FC<EVModelSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="evModel">Select your EV model</Label>
      <Select value={value} onValueChange={value => onChange(value as EVModel)}>
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
  );
};

export default EVModelSelector;
