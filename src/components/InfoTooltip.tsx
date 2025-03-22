
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  text: string;
  className?: string;
  position?: "top" | "right" | "bottom" | "left";
  size?: "sm" | "md" | "lg";
}

const InfoTooltip = ({ 
  text, 
  className = "", 
  position = "top", 
  size = "md" 
}: InfoTooltipProps) => {
  const sizeClass = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  }[size];

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span className={`inline-flex items-center ${className}`}>
            <Info className={`${sizeClass} text-blue-500 cursor-help ml-1`} />
          </span>
        </TooltipTrigger>
        <TooltipContent side={position} className="max-w-[240px] text-xs p-2">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTooltip;
