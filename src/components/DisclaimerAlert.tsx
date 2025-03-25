
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { cn } from '@/lib/utils';
import { AlertTriangle } from 'lucide-react';

interface DisclaimerAlertProps {
  className?: string;
  title?: string;
  content?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const DisclaimerAlert = ({
  className,
  title = "Medical Disclaimer",
  content,
  icon,
  children
}: DisclaimerAlertProps) => {
  const defaultContent = "This calculator provides estimates only and should not replace professional medical advice. Results are based on general data and may not apply to your specific situation.";

  return (
    <Alert className={cn("bg-amber-50 border border-amber-200", className)} variant="default">
      {icon || <AlertTriangle className="h-5 w-5 text-amber-400" />}
      <AlertTitle className="text-amber-800">{title}</AlertTitle>
      <AlertDescription className="text-amber-700 text-left">
        {content || children || defaultContent}
      </AlertDescription>
    </Alert>
  );
};

export default DisclaimerAlert;
