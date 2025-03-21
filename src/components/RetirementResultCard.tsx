
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, Ticket } from 'lucide-react';

interface RetirementResultCardProps {
  dailySpending: number;
  monthlySpending: number;
  yearlySpending: number;
  totalYears: number;
  totalSavings: number;
  age: number; // Add age prop
  className?: string;
}

const RetirementResultCard = ({ 
  dailySpending, 
  monthlySpending, 
  yearlySpending, 
  totalYears,
  totalSavings,
  age, // Include age in destructuring
  className 
}: RetirementResultCardProps) => {
  
  const handleShareViaWhatsApp = () => {
    const message = `According to my retirement calculator, I can spend $${dailySpending} per day, $${monthlySpending} per month, or $${yearlySpending.toLocaleString()} per year in retirement with my $${totalSavings.toLocaleString()} savings! Calculate yours at https://lifespan-calculator.com/retirement-calculator`;
    
    // Encode the message for use in a URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp share URL
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    // Open the URL in a new tab
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className={cn("glass-panel p-8 animate-slideUp w-full", className)}>
      <div className="space-y-6 text-center">
        <div>
          <span className="chip">Results</span>
          <h2 className="text-2xl font-medium mt-2">Your Retirement Spending Capacity</h2>
          <p className="text-muted-foreground mt-1">Based on your retirement savings of ${totalSavings.toLocaleString()} lasting {totalYears} years.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <div className="text-sm font-medium text-muted-foreground">Daily Spending</div>
            <div className="text-3xl font-bold text-primary mt-2">${dailySpending}</div>
            <div className="text-sm text-muted-foreground mt-1">per day</div>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-xl">
            <div className="text-sm font-medium text-muted-foreground">Monthly Spending</div>
            <div className="text-3xl font-bold text-primary mt-2">${monthlySpending.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground mt-1">per month</div>
          </div>
          
          <div className="bg-primary/15 p-6 rounded-xl">
            <div className="text-sm font-medium text-muted-foreground">Annual Spending</div>
            <div className="text-3xl font-bold text-primary mt-2">${yearlySpending.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground mt-1">per year</div>
          </div>
        </div>
        
        <div className="pt-4">
          <div className="text-sm text-muted-foreground mb-2">
            <Calendar className="inline h-4 w-4 mr-1 -mt-0.5" />
            Your funds are projected to last until age {totalYears + age}.
          </div>
        </div>
        
        <Button 
          variant="secondary" 
          onClick={handleShareViaWhatsApp}
          className="w-full group"
        >
          <MessageCircle className="mr-2 h-4 w-4 text-green-600 group-hover:rotate-12 transition-transform" />
          Share via WhatsApp
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full group"
          onClick={() => window.open("https://blueprint.bryanjohnson.com/SFDFHXRX", "_blank")}
        >
          <Ticket className="mr-2 h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          Save $25 on Brian Johnson's Blueprint Program
        </Button>
      </div>
    </div>
  );
};

export default RetirementResultCard;
