
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RefreshCw, Syringe, Calculator } from 'lucide-react';
import { treatmentAreas } from './botoxData';

interface TreatmentAreaSelectorProps {
  selectedAreas: string[];
  onSelectArea: (area: string) => void;
  onCalculate: () => void;
  onReset: () => void;
}

const TreatmentAreaSelector: React.FC<TreatmentAreaSelectorProps> = ({
  selectedAreas,
  onSelectArea,
  onCalculate,
  onReset
}) => {
  const anyAreaSelected = selectedAreas.length > 0;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Syringe className="mr-2 h-5 w-5 text-primary" />
          Select Botox Treatment Areas
        </CardTitle>
        <CardDescription>
          Choose the areas you want to treat with Botox
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {Object.entries(treatmentAreas).map(([areaKey, areaData]) => (
            <div key={areaKey} className="border rounded-md p-2 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id={`area-${areaKey}`}
                  checked={selectedAreas.includes(areaKey)}
                  onCheckedChange={() => onSelectArea(areaKey)}
                />
                <label 
                  htmlFor={`area-${areaKey}`} 
                  className={`text-sm font-medium cursor-pointer ${selectedAreas.includes(areaKey) ? 'text-primary' : ''}`}
                >
                  {areaData.name}
                </label>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-6">
          <Button 
            onClick={onReset} 
            variant="outline"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Reset
          </Button>
          <Button 
            onClick={onCalculate} 
            disabled={!anyAreaSelected}
            className="gap-2"
          >
            <Calculator className="h-4 w-4" />
            Calculate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TreatmentAreaSelector;
