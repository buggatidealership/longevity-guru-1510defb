
import React from 'react';
import { Calculator, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({
  className
}: LogoProps) => {
  return (
    <Link to="/" className="hover:opacity-90 transition-opacity">
      <div className={cn("flex items-center justify-center gap-2", className)}>
        <div className="relative">
          <Calculator className="h-8 w-8 text-primary" strokeWidth={1.5} />
          <Heart className="h-3 w-3 text-red-500 absolute bottom-1 right-1" strokeWidth={2} fill="currentColor" />
        </div>
        <span className="font-bold text-2xl tracking-tight">Longevity Calculator</span>
      </div>
    </Link>
  );
};

export default Logo;
