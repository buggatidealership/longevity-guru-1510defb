
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
import { Calculator, Clock, Baby, Activity, Heart, Zap, Shield, AlertCircle } from 'lucide-react';
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
    
    if (conditions.includes('none')) {
      setConditions([condition]);
    } else {
      if (conditions.includes(condition)) {
        const updatedConditions = conditions.filter(c => c !== condition);
        setConditions(updatedConditions.length > 0 ? updatedConditions : ['none']);
      } else {
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
    if (!age || age < 18 || age > 60) {
      alert("Please enter a valid age between 18 and 60");
      return;
    }
    
    let fertilityStatus = "";
    let baseYearsRemaining = 0;
    let estimatedAge = 51;
    
    if (age < 30) {
      fertilityStatus = "Optimal";
      baseYearsRemaining = Math.max(5, 35 - age);
      estimatedAge = 51;
    } else if (age < 35) {
      fertilityStatus = "Good";
      baseYearsRemaining = Math.max(3, 38 - age);
      estimatedAge = 51;
    } else if (age < 38) {
      fertilityStatus = "Moderate";
      baseYearsRemaining = Math.max(2, 40 - age);
      estimatedAge = 50;
    } else if (age < 40) {
      fertilityStatus = "Declining";
      baseYearsRemaining = Math.max(1, 42 - age);
      estimatedAge = 49;
    } else if (age < 43) {
      fertilityStatus = "Low";
      baseYearsRemaining = 1;
      estimatedAge = 48;
    } else if (age < 45) {
      fertilityStatus = "Very Low";
      baseYearsRemaining = 0;
      estimatedAge = 47;
    } else {
      fertilityStatus = "Minimal or None";
      baseYearsRemaining = 0;
      estimatedAge = 46;
    }
    
    let yearAdjustment = 0;
    let statusAdjustment = 0;
    let amhComment = "";
    
    const amhValue = amh ? parseFloat(amh) : null;
    if (amhValue !== null) {
      if (age < 35) {
        if (amhValue < 1.0) {
          yearAdjustment -= 3;
          statusAdjustment -= 1;
          amhComment = "Your AMH level is low for your age, suggesting diminished ovarian reserve.";
        } else if (amhValue < 2.0) {
          yearAdjustment -= 1;
          amhComment = "Your AMH level is below average for your age group.";
        } else if (amhValue > 3.5) {
          yearAdjustment += 1;
          amhComment = "Your AMH level is excellent for your age, suggesting good ovarian reserve.";
        } else {
          amhComment = "Your AMH level is within the expected range for your age.";
        }
      } else if (age < 40) {
        if (amhValue < 0.5) {
          yearAdjustment -= 3;
          statusAdjustment -= 1;
          amhComment = "Your AMH level is very low for your age, suggesting significantly diminished ovarian reserve.";
        } else if (amhValue < 1.0) {
          yearAdjustment -= 2;
          amhComment = "Your AMH level is low for your age group, suggesting somewhat diminished ovarian reserve.";
        } else if (amhValue > 2.0) {
          yearAdjustment += 1;
          statusAdjustment += 1;
          amhComment = "Your AMH level is better than average for your age, suggesting better ovarian reserve.";
        } else {
          amhComment = "Your AMH level is within the expected range for your age.";
        }
      } else {
        if (amhValue < 0.3) {
          yearAdjustment -= 2;
          statusAdjustment -= 1;
          amhComment = "Your AMH level is very low, suggesting significantly diminished ovarian reserve.";
        } else if (amhValue < 0.5) {
          yearAdjustment -= 1;
          amhComment = "Your AMH level is low for your age group.";
        } else if (amhValue > 1.0) {
          yearAdjustment += 1;
          statusAdjustment += 1;
          amhComment = "Your AMH level is better than average for your age, suggesting better ovarian reserve.";
        } else {
          amhComment = "Your AMH level is within the expected range for your age.";
        }
      }
    }
    
    if (familyHistory === "yes") {
      yearAdjustment -= 4;
      statusAdjustment -= 1;
    }
    
    let conditionImpact = 0;
    
    if (conditions.includes("pcos")) {
      conditionImpact += 2;
    }
    
    if (conditions.includes("endometriosis")) {
      conditionImpact += 3;
    }
    
    if (conditions.includes("poi")) {
      conditionImpact += 5;
    }
    
    if (conditions.includes("fibroids")) {
      conditionImpact += 2;
    }
    
    if (conditions.includes("pid")) {
      conditionImpact += 3;
    }
    
    if (conditions.includes("thyroid")) {
      conditionImpact += 2;
    }
    
    if (conditions.includes("asherman")) {
      conditionImpact += 3;
    }
    
    if (conditions.includes("autoimmune")) {
      conditionImpact += 3;
    }
    
    if (conditions.includes("uterine_anomalies")) {
      conditionImpact += 3;
    }
    
    if (conditions.includes("premature_ovarian_failure")) {
      conditionImpact += 6;
    }
    
    if (!conditions.includes("none")) {
      const conditionCount = conditions.length;
      
      if (conditionCount >= 3) {
        yearAdjustment -= Math.min(conditionImpact, 8);
        statusAdjustment -= 2;
      } else {
        yearAdjustment -= Math.min(conditionImpact / 2, 5);
        statusAdjustment -= 1;
      }
    }
    
    if (smoking === "current") {
      yearAdjustment -= 2;
      statusAdjustment -= 1;
    } else if (smoking === "former") {
      yearAdjustment -= 1;
    }
    
    if (bmi === "underweight" || bmi === "obese") {
      yearAdjustment -= 2;
      statusAdjustment -= 1;
    } else if (bmi === "overweight") {
      yearAdjustment -= 1;
    }
    
    let yearsRemaining = Math.max(0, baseYearsRemaining + yearAdjustment);
    
    const statusLevels = ["Minimal or None", "Very Low", "Low", "Declining", "Moderate", "Good", "Optimal"];
    let statusIndex = statusLevels.indexOf(fertilityStatus);
    statusIndex = Math.max(0, Math.min(statusLevels.length - 1, statusIndex + statusAdjustment));
    fertilityStatus = statusLevels[statusIndex];
    
    estimatedAge = Math.max(age + 1, estimatedAge + yearAdjustment);
    
    let factors: string[] = [];
    factors.push(`Age (${age} years)`);
    
    if (amhValue !== null) {
      factors.push(`AMH level (${amhValue} ng/mL)`);
    }
    
    if (familyHistory === "yes") {
      factors.push("Family history of early menopause");
    }
    
    if (!conditions.includes("none")) {
      const conditionNames = conditions.map(c => {
        switch(c) {
          case "pcos": return "PCOS";
          case "endometriosis": return "Endometriosis";
          case "poi": return "Primary Ovarian Insufficiency";
          case "fibroids": return "Uterine Fibroids";
          case "pid": return "Pelvic Inflammatory Disease";
          case "thyroid": return "Thyroid Disorders";
          case "asherman": return "Asherman's Syndrome";
          case "autoimmune": return "Autoimmune Disorders";
          case "uterine_anomalies": return "Uterine Anomalies";
          case "premature_ovarian_failure": return "Premature Ovarian Failure";
          default: return c;
        }
      }).join(", ");
      factors.push(`Medical conditions (${conditionNames})`);
    }
    
    if (smoking !== "never") {
      factors.push(`Smoking status (${smoking} smoker)`);
    }
    
    factors.push(`BMI (${bmi})`);
    
    switch(fertilityStatus) {
      case "Optimal":
        fertilityStatus = "Optimal - Fertility at peak levels for your age";
        break;
      case "Good":
        fertilityStatus = "Good - Fertility is strong with minimal decline";
        break;
      case "Moderate":
        fertilityStatus = "Moderate - Some fertility decline is present";
        break;
      case "Declining":
        fertilityStatus = "Declining - Notable reduction in fertility potential";
        break;
      case "Low":
        fertilityStatus = "Low - Significant fertility challenges likely";
        break;
      case "Very Low":
        fertilityStatus = "Very Low - Fertility severely compromised";
        break;
      case "Minimal or None":
        fertilityStatus = "Minimal or None - Extremely limited or no fertility potential";
        break;
    }
    
    setResults({
      fertilityStatus,
      yearsRemaining,
      estimatedAge,
      amhComment,
      factors
    });
    
    setShowResults(true);
  };

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<any>>, isFloat: boolean = false) => {
    const value = e.target.value;
    if (value === '' || (isFloat ? /^\d*\.?\d*$/ : /^\d*$/).test(value)) {
      setter(value);
    }
  };

  return (
    <div className="space-y-6">
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
          
          <div className="space-y-2">
            <Label className="mb-2 block">Medical Conditions (select all that apply)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Button
                type="button"
                variant={isConditionSelected('none') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => setConditions(['none'])}
              >
                <AlertCircle className="mr-2 h-4 w-4" />
                None
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('pcos') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('pcos')}
              >
                <Activity className="mr-2 h-4 w-4" />
                PCOS
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('endometriosis') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('endometriosis')}
              >
                <Heart className="mr-2 h-4 w-4" />
                Endometriosis
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('poi') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('poi')}
              >
                <Zap className="mr-2 h-4 w-4" />
                Primary Ovarian Insufficiency
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('fibroids') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('fibroids')}
              >
                <Heart className="mr-2 h-4 w-4" />
                Uterine Fibroids
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('pid') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('pid')}
              >
                <AlertCircle className="mr-2 h-4 w-4" />
                Pelvic Inflammatory Disease
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('thyroid') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('thyroid')}
              >
                <Activity className="mr-2 h-4 w-4" />
                Thyroid Disorders
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('asherman') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('asherman')}
              >
                <Heart className="mr-2 h-4 w-4" />
                Asherman's Syndrome
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('autoimmune') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('autoimmune')}
              >
                <Shield className="mr-2 h-4 w-4" />
                Autoimmune Disorders
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('uterine_anomalies') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('uterine_anomalies')}
              >
                <Heart className="mr-2 h-4 w-4" />
                Congenital Uterine Anomalies
              </Button>
              
              <Button
                type="button"
                variant={isConditionSelected('premature_ovarian_failure') ? 'default' : 'outline'}
                className="justify-start"
                onClick={() => handleConditionChange('premature_ovarian_failure')}
              >
                <Zap className="mr-2 h-4 w-4" />
                Premature Ovarian Failure
              </Button>
            </div>
          </div>
          
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
          
          <Button 
            className="w-full"
            onClick={calculateFertility}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Fertility Estimate
          </Button>
        </CardContent>
      </Card>
      
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
