
import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <Heart className="h-8 w-8 text-primary animate-pulse" fill="#ff6b6b" strokeWidth={1.5} />
      <span className="font-bold text-2xl tracking-tight">Longevity</span>
    </div>
  );
};

export default Logo;
