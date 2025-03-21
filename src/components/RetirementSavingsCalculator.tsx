
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
import { Slider } from '@/components/ui/slider';
import { Calculator, Coins, PiggyBank, TrendingUp } from 'lucide-react';
import RetirementResultCard from './RetirementResultCard';

const RetirementSavingsCalculator = () => {
  // State for form inputs
  const [totalSavings, setTotalSavings] = useState<number>(500000);
  const [age, setAge] = useState<number>(65);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(90);
  const [annualReturn, setAnnualReturn] = useState<number>(4);
  const [inflationRate, setInflationRate] = useState<number>(2);
  
  // State for calculated results
  const [showResults, setShowResults] = useState<boolean>(false);
  const [dailySpending, setDailySpending] = useState<number>(0);
  const [monthlySpending, setMonthlySpending] = useState<number>(0);
  const [yearlySpending, setYearlySpending] = useState<number>(0);
  const [totalYears, setTotalYears] = useState<number>(0);

  // Handle form submission and calculation
  const handleCalculate = () => {
    // Calculate remaining years
    const yearsRemaining = lifeExpectancy - age;
    setTotalYears(yearsRemaining);
    
    // Calculate the inflation-adjusted return rate (real return)
    const realReturnRate = (1 + annualReturn / 100) / (1 + inflationRate / 100) - 1;
    
    // Calculate the yearly withdrawal amount using the PMT formula
    // PMT = (PV * r) / (1 - (1 + r)^-n)
    // Where:
    // PMT = Payment (yearly spending)
    // PV = Present Value (total savings)
    // r = Real interest rate per period
    // n = Number of periods (years remaining)
    
    let yearlyAmount = 0;
    
    if (Math.abs(realReturnRate) < 0.0001) {
      // If real return rate is close to zero, use simple division
      yearlyAmount = totalSavings / yearsRemaining;
    } else {
      // Use standard formula otherwise
      yearlyAmount = (totalSavings * realReturnRate) / (1 - Math.pow(1 + realReturnRate, -yearsRemaining));
    }
    
    // Set calculated values, rounded to 2 decimal places
    setYearlySpending(Math.round(yearlyAmount));
    setMonthlySpending(Math.round(yearlyAmount / 12));
    setDailySpending(Math.round(yearlyAmount / 365));
    
    // Show results
    setShowResults(true);
  };

  // Handle input validation for numeric fields
  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {
    const value = e.target.value;
    // Allow only numbers and empty string (for backspace)
    if (value === '' || /^[0-9]*$/.test(value)) {
      setter(value === '' ? 0 : parseInt(value));
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Retirement Savings Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate how much you can spend in retirement based on your savings
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Retirement Income Calculator
          </CardTitle>
          <CardDescription>
            Fill in your details to see how much you can spend daily, monthly, and yearly in retirement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Total Savings */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="totalSavings" className="flex items-center gap-2">
                <PiggyBank className="h-4 w-4 text-blue-600" />
                Total Retirement Savings
              </Label>
              <span className="text-sm font-medium">${totalSavings.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8 md:col-span-10">
                <Slider
                  id="savingsSlider"
                  min={10000}
                  max={5000000}
                  step={10000}
                  value={[totalSavings]}
                  onValueChange={(value) => setTotalSavings(value[0])}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <Input
                  id="totalSavings"
                  type="text"
                  value={totalSavings}
                  onChange={(e) => handleNumericInput(e, setTotalSavings)}
                />
              </div>
            </div>
          </div>
          
          {/* Current Age */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="age">Current Age</Label>
              <span className="text-sm font-medium">{age} years</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8 md:col-span-10">
                <Slider
                  id="ageSlider"
                  min={55}
                  max={85}
                  step={1}
                  value={[age]}
                  onValueChange={(value) => setAge(value[0])}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <Input
                  id="age"
                  type="text"
                  value={age}
                  onChange={(e) => handleNumericInput(e, setAge)}
                />
              </div>
            </div>
          </div>
          
          {/* Life Expectancy */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="lifeExpectancy">Life Expectancy</Label>
              <span className="text-sm font-medium">{lifeExpectancy} years</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8 md:col-span-10">
                <Slider
                  id="lifeExpectancySlider"
                  min={70}
                  max={110}
                  step={1}
                  value={[lifeExpectancy]}
                  onValueChange={(value) => setLifeExpectancy(value[0])}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <Input
                  id="lifeExpectancy"
                  type="text"
                  value={lifeExpectancy}
                  onChange={(e) => handleNumericInput(e, setLifeExpectancy)}
                />
              </div>
            </div>
          </div>
          
          {/* Annual Return Rate */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="annualReturn" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                Annual Return Rate
              </Label>
              <span className="text-sm font-medium">{annualReturn}%</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8 md:col-span-10">
                <Slider
                  id="annualReturnSlider"
                  min={0}
                  max={12}
                  step={0.1}
                  value={[annualReturn]}
                  onValueChange={(value) => setAnnualReturn(value[0])}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <Input
                  id="annualReturn"
                  type="text"
                  value={annualReturn}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || /^\d*\.?\d*$/.test(value)) {
                      setAnnualReturn(value === '' ? 0 : parseFloat(value));
                    }
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Inflation Rate */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="inflationRate" className="flex items-center gap-2">
                <Coins className="h-4 w-4 text-amber-600" />
                Inflation Rate
              </Label>
              <span className="text-sm font-medium">{inflationRate}%</span>
            </div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-8 md:col-span-10">
                <Slider
                  id="inflationRateSlider"
                  min={0}
                  max={8}
                  step={0.1}
                  value={[inflationRate]}
                  onValueChange={(value) => setInflationRate(value[0])}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <Input
                  id="inflationRate"
                  type="text"
                  value={inflationRate}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || /^\d*\.?\d*$/.test(value)) {
                      setInflationRate(value === '' ? 0 : parseFloat(value));
                    }
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Calculate Button */}
          <Button 
            className="w-full"
            onClick={handleCalculate}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Retirement Spending
          </Button>
        </CardContent>
      </Card>
      
      {/* Results Section */}
      {showResults && (
        <RetirementResultCard
          dailySpending={dailySpending}
          monthlySpending={monthlySpending}
          yearlySpending={yearlySpending}
          totalYears={totalYears}
          totalSavings={totalSavings}
        />
      )}
    </div>
  );
};

export default RetirementSavingsCalculator;
