
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User } from 'lucide-react';
import InfoTooltip from '@/components/InfoTooltip';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryPricing } from './botoxData';
import { PatientCharacteristics, PricingSettings } from './botoxCalculatorUtils';

interface PatientCharacteristicsFormProps {
  characteristics: PatientCharacteristics;
  pricingSettings: PricingSettings;
  onCharacteristicsChange: (characteristics: Partial<PatientCharacteristics>) => void;
  onPricingSettingsChange: (settings: Partial<PricingSettings>) => void;
}

const PatientCharacteristicsForm: React.FC<PatientCharacteristicsFormProps> = ({
  characteristics,
  pricingSettings,
  onCharacteristicsChange,
  onPricingSettingsChange
}) => {
  const { gender, age, experience, muscleStrength, desired } = characteristics;
  const { country, customPrice, useCustomPrice } = pricingSettings;
  
  const handleCountryChange = (value: string) => {
    onPricingSettingsChange({ 
      country: value, 
      useCustomPrice: value === 'custom' 
    });
  };
  
  const currentPricing = countryPricing[country as keyof typeof countryPricing];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="mr-2 h-5 w-5 text-primary" />
          Patient Characteristics
        </CardTitle>
        <CardDescription>
          Enter your details to get personalized Botox dosage recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Gender selection - Now using dropdown */}
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select 
              value={gender} 
              onValueChange={(value) => onCharacteristicsChange({ gender: value })}
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Age Range */}
          <div className="space-y-2">
            <Label htmlFor="age">Age Range</Label>
            <Select 
              value={age} 
              onValueChange={(value) => onCharacteristicsChange({ age: value })}
            >
              <SelectTrigger id="age">
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under35">Under 35</SelectItem>
                <SelectItem value="35-50">35-50</SelectItem>
                <SelectItem value="over50">Over 50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Treatment Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience">
              Treatment Experience
              <InfoTooltip content="Your previous experience with Botox treatments" />
            </Label>
            <Select 
              value={experience} 
              onValueChange={(value) => onCharacteristicsChange({ experience: value })}
            >
              <SelectTrigger id="experience">
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">First Time</SelectItem>
                <SelectItem value="some">Some Experience (1-3 treatments)</SelectItem>
                <SelectItem value="experienced">Experienced (4+ treatments)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Facial Muscle Strength */}
          <div className="space-y-2">
            <Label htmlFor="muscleStrength">
              Facial Muscle Strength
              <InfoTooltip content="Stronger facial muscles may require more units" />
            </Label>
            <Select 
              value={muscleStrength} 
              onValueChange={(value) => onCharacteristicsChange({ muscleStrength: value })}
            >
              <SelectTrigger id="muscleStrength">
                <SelectValue placeholder="Select muscle strength" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weak">Weak</SelectItem>
                <SelectItem value="average">Average</SelectItem>
                <SelectItem value="strong">Strong</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Desired Result */}
          <div className="space-y-2">
            <Label htmlFor="desired">
              Desired Result
              <InfoTooltip content="How noticeable you want the results to be" />
            </Label>
            <Select 
              value={desired} 
              onValueChange={(value) => onCharacteristicsChange({ desired: value })}
            >
              <SelectTrigger id="desired">
                <SelectValue placeholder="Select desired result" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="subtle">Subtle</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="dramatic">Dramatic</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Country/Region */}
          <div className="space-y-2">
            <Label htmlFor="country">
              Country/Region
              <InfoTooltip content="Affects price estimates" />
            </Label>
            <Select value={country} onValueChange={handleCountryChange}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">United States (USD)</SelectItem>
                <SelectItem value="uk">United Kingdom (GBP)</SelectItem>
                <SelectItem value="canada">Canada (CAD)</SelectItem>
                <SelectItem value="australia">Australia (AUD)</SelectItem>
                <SelectItem value="eu">European Union (EUR)</SelectItem>
                <SelectItem value="uae">United Arab Emirates (AED)</SelectItem>
                <SelectItem value="india">India (INR)</SelectItem>
                <SelectItem value="brazil">Brazil (BRL)</SelectItem>
                <SelectItem value="japan">Japan (JPY)</SelectItem>
                <SelectItem value="southkorea">South Korea (KRW)</SelectItem>
                <SelectItem value="singapore">Singapore (SGD)</SelectItem>
                <SelectItem value="custom">Custom Price</SelectItem>
              </SelectContent>
            </Select>
            
            {useCustomPrice && (
              <div className="mt-2">
                <Label htmlFor="customPrice" className="text-sm">Enter Custom Price Per Unit</Label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                  <Input
                    id="customPrice"
                    type="number"
                    min={1}
                    value={customPrice}
                    onChange={(e) => onPricingSettingsChange({ customPrice: Number(e.target.value) })}
                    className="pl-7"
                  />
                </div>
              </div>
            )}
            
            <p className="text-xs text-muted-foreground mt-1">
              {!useCustomPrice && `Typical range in ${currentPricing.currency}: ${currentPricing.symbol}${currentPricing.min}-${currentPricing.symbol}${currentPricing.max} per unit`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCharacteristicsForm;
