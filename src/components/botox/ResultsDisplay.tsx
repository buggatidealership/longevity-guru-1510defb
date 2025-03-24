
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, Info } from 'lucide-react';
import { treatmentAreas } from './botoxData';

interface ResultsDisplayProps {
  results: {
    areaResults: Record<string, { units: number, cost: number }>;
    totalUnits: number;
    totalCost: number;
    minTotalCost: number;
    maxTotalCost: number;
    currency: string;
    symbol: string;
  };
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-primary" />
          Botox Treatment Summary
        </CardTitle>
        <CardDescription>
          Your personalized Botox dosage recommendations based on your profile
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Treatment Area</TableHead>
              <TableHead className="text-right">Units</TableHead>
              <TableHead className="text-right">Est. Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(results.areaResults).map(([area, data]) => (
              <TableRow key={area}>
                <TableCell className="font-medium">
                  {treatmentAreas[area as keyof typeof treatmentAreas].name}
                </TableCell>
                <TableCell className="text-right">{data.units}</TableCell>
                <TableCell className="text-right">{results.symbol}{data.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow className="border-t-2">
              <TableCell className="font-bold">TOTAL</TableCell>
              <TableCell className="text-right font-bold">{results.totalUnits} units</TableCell>
              <TableCell className="text-right font-bold">{results.symbol}{results.totalCost}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <div className="mt-6">
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-medium mb-2 flex items-center">
              <Info className="h-4 w-4 mr-2 text-primary" />
              Price Range Information
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Estimated cost range: {results.symbol}{results.minTotalCost} - {results.symbol}{results.maxTotalCost}
            </p>
            <p className="text-sm text-muted-foreground">
              Currency: {results.currency}
            </p>
          </div>
          
          <div className="text-xs text-muted-foreground mt-4 italic">
            Note: Final dosage and pricing should be determined by a qualified healthcare provider.
            Costs may vary significantly by location, provider experience, and practice type.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
