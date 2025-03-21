
import React from 'react';
import { cn } from '@/lib/utils';

interface DisclaimerAlertProps {
  className?: string;
}

const DisclaimerAlert = ({ className }: DisclaimerAlertProps) => {
  return (
    <div className={cn("bg-amber-50 border border-amber-200 rounded-xl p-4 animate-fadeIn", className)}>
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-amber-800">Important</h3>
          <div className="mt-1 text-sm text-amber-700">
            <p>
              This calculator is for educational purposes only. It uses simplified estimates 
              to illustrate how different factors might affect longevity. It is not based on a validated scientific model 
              and should not be used for personal health decisions. The factor weightings are approximations rather than 
              precise values from scientific studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerAlert;
