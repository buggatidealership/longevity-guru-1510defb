
import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { EVModel, evModels } from '@/data/evRangeData';

export interface RangeResult {
  message: string;
  type: 'success' | 'warning' | 'danger';
  distance: number;
  range: number;
  remainingRange: number;
}

interface EVRangeResultProps {
  result: RangeResult | null;
  evModel: EVModel | '';
}

const EVRangeResult: React.FC<EVRangeResultProps> = ({ result, evModel }) => {
  if (!result) return null;

  return (
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
        {evModel && <p>{evModels[evModel].name} range: {result.range} miles</p>}
        <p>Remaining range at destination: {result.remainingRange.toFixed(1)} miles</p>
        {result.remainingRange === 0 && (
          <p>You'll need to charge approximately {Math.abs(result.range - result.distance).toFixed(1)} miles worth of battery during your trip.</p>
        )}
      </div>
    </div>
  );
};

export default EVRangeResult;
