
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  text: string;
  className?: string;
}

const InfoTooltip = ({ text, className = "" }: InfoTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span className={`inline-flex items-center ${className}`}>
            <Info className="h-4 w-4 text-blue-500 cursor-help ml-1" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-[240px] text-xs p-2">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTooltip;
