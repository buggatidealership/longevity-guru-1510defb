
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

interface FertilityResultCardProps {
  fertilityStatus: string;
  yearsRemaining: number;
  estimatedAge: number;
  amhComment: string;
  factors: string[];
}

const FertilityResultCard = ({
  fertilityStatus,
  yearsRemaining,
  estimatedAge,
  amhComment,
  factors
}: FertilityResultCardProps) => {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm animate-fadeIn">
      <CardHeader className="bg-blue-50 border-b border-blue-100">
        <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Your Fertility Estimation Results
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-1">Current Fertility Status</h3>
            <p className="text-lg font-medium text-blue-700">{fertilityStatus}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Estimated Time Until Significant Fertility Decline</h3>
                  <p className="text-md">
                    {yearsRemaining <= 5 
                      ? `${yearsRemaining} years or less` 
                      : `Approximately ${yearsRemaining} years`}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Estimated Age at Menopause</h3>
                  <p className="text-md">Around age {estimatedAge}</p>
                </div>
              </div>
            </div>
          </div>
          
          {amhComment && (
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">AMH Analysis</h3>
                  <p className="text-md">{amhComment}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Key Factors Affecting Your Estimate</h3>
            <ul className="list-disc pl-5 space-y-1">
              {factors.map((factor, index) => (
                <li key={index} className="text-sm text-gray-600">{factor}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            <strong>Important:</strong> This is an estimation based on general population data and the information you provided. 
            Individual fertility varies widely. For a comprehensive evaluation, please consult with a reproductive endocrinologist 
            or fertility specialist.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FertilityResultCard;
