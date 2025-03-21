
import React from 'react';
import { cn } from '@/lib/utils';

interface ResultCardProps {
  years: number;
  baseAge: string;
  improvement: string;
  improvementPercentage: string;
  className?: string;
}

const ResultCard = ({ years, baseAge, improvement, improvementPercentage, className }: ResultCardProps) => {
  const isPositive = parseFloat(improvement) > 0;
  
  return (
    <div className={cn("glass-panel p-8 animate-slideUp", className)}>
      <div className="space-y-6 text-center">
        <div>
          <span className="chip">Results</span>
          <h2 className="text-2xl font-medium mt-2">Your Estimated Life Expectancy</h2>
        </div>
        
        <div className="relative">
          <div className="text-6xl font-display font-bold tracking-tight text-primary">{years}</div>
          <div className="text-lg mt-1 font-medium">years</div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/5 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-primary/5 rounded-full animate-pulse delay-300 opacity-70"></div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            Base life expectancy for your demographic: <span className="font-medium text-foreground">{baseAge} years</span>
          </div>
          
          <div className="text-lg">
            <span className={cn(
              "font-medium", 
              isPositive ? "text-emerald-600" : "text-rose-600"
            )}>
              {isPositive ? `+${improvement}` : improvement} years
            </span>
            <span className="text-muted-foreground"> compared to base expectancy</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            This represents a <span className="font-medium">{improvementPercentage}%</span> {isPositive ? "increase" : "decrease"} from baseline
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
