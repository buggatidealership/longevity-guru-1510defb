
import React, { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Clock, Baby, Activity } from 'lucide-react';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import FertilityResultCard from './FertilityResultCard';

const FemaleFeritilityCalculator = () => {
  // State for form inputs
  const [age, setAge] = useState<number>(30);
  const [amh, setAmh] = useState<string>('');
  const [familyHistory, setFamilyHistory] = useState<string>('no');
  const [conditions, setConditions] = useState<string[]>(['none']);
  const [smoking, setSmoking] = useState<string>('never');
  const [bmi, setBmi] = useState<string>('normal');
  
  // State for results
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<{
    fertilityStatus: string;
    yearsRemaining: number;
    estimatedAge: number;
    amhComment: string;
    factors: string[];
  } | null>(null);

  // Handle medical conditions selection
  const handleConditionChange = (condition: string) => {
    if (condition === 'none') {
      setConditions(['none']);
      return;
    }
    
    // If 'none' is currently selected and user selects another condition, remove 'none'
    if (conditions.includes('none')) {
      setConditions([condition]);
    } else {
      // Check if condition is already selected
      if (conditions.includes(condition)) {
        // Remove it
        const updatedConditions = conditions.filter(c => c !== condition);
        // If empty after removal, set to 'none'
        setConditions(updatedConditions.length > 0 ? updatedConditions : ['none']);
      } else {
        // Add it
        setConditions([...conditions, condition]);
      }
    }
  };

  // Check if a condition is selected
  const isConditionSelected = (condition: string) => {
    return conditions.includes(condition);
  };

  // Calculate fertility
  const calculateFertility = () => {
    // Validate inputs
    if (!age || age < 18 || age > 60) {
      alert("Please enter a valid age between 18 and 60");
      return;
    }
    
    // Base estimation based on age
    let estimatedAge = 0;
    let fertilityStatus = "";
    let amhComment = "";
    
    // Age is the primary factor
    if (age < 35) {
      estimatedAge = 51; // Average menopause age
      fertilityStatus = "Likely optimal";
    } else if (age < 38) {
      estimatedAge = 50;
      fertilityStatus = "Good, but beginning to decline";
    } else if (age < 40) {
      estimatedAge = 49;
      fertilityStatus = "Moderately reduced";
    } else if (age < 43) {
      estimatedAge = 48;
      fertilityStatus = "Significantly reduced";
    } else if (age < 45) {
      estimatedAge = 47;
      fertilityStatus = "Very low";
    } else if (age < 50) {
      estimatedAge = 46;
      fertilityStatus = "Extremely low";
    } else {
      estimatedAge = 45;
      fertilityStatus = "Likely post-menopausal or approaching menopause";
    }
    
    // Adjust based on AMH if provided
    const amhValue = amh ? parseFloat(amh) : null;
    if (amhValue !== null) {
      if (amhValue < 0.5) {
        estimatedAge -= 2;
        amhComment = "Your AMH level is very low for your age, suggesting diminished ovarian reserve.";
      } else if (amhValue < 1.0) {
        estimatedAge -= 1;
        amhComment = "Your AMH level is low for your age, suggesting somewhat diminished ovarian reserve.";
      } else if (amhValue > 3.0 && age > 35) {
        estimatedAge += 1;
        amhComment = "Your AMH level is good for your age, suggesting better than average ovarian reserve.";
      }
    }
    
    // Adjust for family history
    if (familyHistory === "yes") {
      estimatedAge -= 2;
    }
    
    // Adjust for conditions
    if (conditions.includes("endometriosis")) {
      estimatedAge -= 1;
    }
    
    // Adjust for smoking
    if (smoking === "current") {
      estimatedAge -= 2;
    } else if (smoking === "former") {
      estimatedAge -= 1;
    }
    
    // Adjust for BMI (extreme BMIs can affect fertility)
    if (bmi === "underweight" || bmi === "obese") {
      estimatedAge -= 1;
    }
    
    // Ensure estimated age doesn't go below current age
    estimatedAge = Math.max(estimatedAge, age + 1);
    
    // Calculate years remaining based on adjusted estimated menopause age
    const yearsRemaining = estimatedAge - age;
    
    // Add specific factors
    let factors: string[] = [];
    factors.push(`Age (${age} years)`);
    
    if (amhValue !== null) {
      factors.push(`AMH level (${amhValue} ng/mL)`);
    }
    
    if (familyHistory === "yes") {
      factors.push("Family history of early menopause");
    }
    
    if (!conditions.includes("none")) {
      const conditionNames = conditions.filter(c => c !== "none").join(", ");
      factors.push(`Medical conditions (${conditionNames})`);
    }
    
    if (smoking !== "never") {
      factors.push(`Smoking status (${smoking})`);
    }
    
    factors.push(`BMI (${bmi})`);
    
    // Set results
    setResults({
      fertilityStatus,
      yearsRemaining,
      estimatedAge,
      amhComment,
      factors
    });
    
    // Show results
    setShowResults(true);
  };

  // Handle numeric input validation
  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<any>>, isFloat: boolean = false) => {
    const value = e.target.value;
    if (value === '' || (isFloat ? /^\d*\.?\d*$/ : /^\d*$/).test(value)) {
      setter(value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Female Fertility Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Estimate your fertility status and reproductive timeline
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Baby className="h-5 w-5 text-primary" />
            Female Fertility Estimation
          </CardTitle>
          <CardDescription>
            Fill in your details to estimate your fertility status and reproductive timeline.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Age */}
          <div className="space-y-2">
            <Label htmlFor="age" className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              Current Age
            </Label>
            <Input
              id="age"
              type="number"
              min={18}
              max={60}
              value={age}
              onChange={(e) => handleNumericInput(e, setAge)}
              className="w-full"
            />
          </div>
          
          {/* AMH Level */}
          <div className="space-y-2">
            <Label htmlFor="amh" className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-600" />
              AMH Level (ng/mL, if known)
            </Label>
            <Input
              id="amh"
              type="text"
              placeholder="Leave blank if unknown"
              value={amh}
              onChange={(e) => handleNumericInput(e, setAmh, true)}
              className="w-full"
            />
          </div>
          
          {/* Family History */}
          <div className="space-y-2">
            <Label htmlFor="family-history">
              Family History of Early Menopause
            </Label>
            <Select value={familyHistory} onValueChange={setFamilyHistory}>
              <SelectTrigger id="family-history">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Medical Conditions */}
          <div className="space-y-2">
            <Label>Medical Conditions (select all that apply)</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={isConditionSelected('none') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => setConditions(['none'])}
              >
                None
              </Button>
              <Button
                type="button"
                variant={isConditionSelected('pcos') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('pcos')}
              >
                PCOS
              </Button>
              <Button
                type="button"
                variant={isConditionSelected('endometriosis') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('endometriosis')}
              >
                Endometriosis
              </Button>
              <Button
                type="button"
                variant={isConditionSelected('autoimmune') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('autoimmune')}
              >
                Autoimmune Disorders
              </Button>
            </div>
          </div>
          
          {/* Smoking Status */}
          <div className="space-y-2">
            <Label htmlFor="smoking">Smoking Status</Label>
            <Select value={smoking} onValueChange={setSmoking}>
              <SelectTrigger id="smoking">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="never">Never Smoked</SelectItem>
                <SelectItem value="former">Former Smoker</SelectItem>
                <SelectItem value="current">Current Smoker</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* BMI */}
          <div className="space-y-2">
            <Label htmlFor="bmi">BMI</Label>
            <Select value={bmi} onValueChange={setBmi}>
              <SelectTrigger id="bmi">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal (18.5-24.9)</SelectItem>
                <SelectItem value="underweight">Underweight (Below 18.5)</SelectItem>
                <SelectItem value="overweight">Overweight (25-29.9)</SelectItem>
                <SelectItem value="obese">Obese (30 or higher)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Calculate Button */}
          <Button 
            className="w-full"
            onClick={calculateFertility}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Fertility Estimate
          </Button>
          
          <DisclaimerAlert className="mt-4" />
        </CardContent>
      </Card>
      
      {/* Results Section */}
      {showResults && results && (
        <FertilityResultCard
          fertilityStatus={results.fertilityStatus}
          yearsRemaining={results.yearsRemaining}
          estimatedAge={results.estimatedAge}
          amhComment={results.amhComment}
          factors={results.factors}
        />
      )}
    </div>
  );
};

export default FemaleFeritilityCalculator;
