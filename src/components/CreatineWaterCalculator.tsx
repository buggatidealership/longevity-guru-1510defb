
import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Scale, Droplets, MoveDown, ActivitySquare } from "lucide-react";
import { toast } from "sonner";
import InfoTooltip from "./InfoTooltip";

// Schema for form validation
const formSchema = z.object({
  weight: z.coerce.number().min(30, { message: "Weight must be at least 30" }).max(300, { message: "Weight must be less than 300" }),
  weightUnit: z.enum(["kg", "lbs"], {
    required_error: "Please select weight unit",
  }),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very_active"], {
    required_error: "Please select your activity level",
  }),
  trainingIntensity: z.enum(["light", "moderate", "intense"], {
    required_error: "Please select your training intensity",
  }),
  creatineGoal: z.enum(["loading", "maintenance"], {
    required_error: "Please select your creatine goal",
  }),
  climate: z.enum(["cool", "moderate", "hot"], {
    required_error: "Please select your climate",
  }),
});

const CreatineWaterCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    baseWaterIntake: number;
    creatineAdjustedWater: number;
    creatineDose: number;
    totalWaterNeeded: number;
    extraWaterForCreatine: number;
    recommendedWaterBottles: number;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: 70,
      weightUnit: "kg",
      activityLevel: "moderate",
      trainingIntensity: "moderate",
      creatineGoal: "maintenance",
      climate: "moderate",
    },
  });

  // Helper functions for calculations
  const lbsToKg = (lbs: number): number => lbs * 0.453592;

  // Calculate water needs
  const calculateWaterNeeds = (values: z.infer<typeof formSchema>) => {
    try {
      // Convert weight to kg if needed
      let weightInKg = values.weight;
      if (values.weightUnit === "lbs") {
        weightInKg = lbsToKg(values.weight);
      }

      // Base water calculation based on weight (ml per kg)
      let baseWaterPerKg = 30; // Base value for moderate activity

      // Adjust for activity level
      switch (values.activityLevel) {
        case "sedentary":
          baseWaterPerKg = 25;
          break;
        case "light":
          baseWaterPerKg = 30;
          break;
        case "moderate":
          baseWaterPerKg = 35;
          break;
        case "active":
          baseWaterPerKg = 40;
          break;
        case "very_active":
          baseWaterPerKg = 45;
          break;
      }

      // Calculate base water intake in liters
      const baseWaterIntake = (weightInKg * baseWaterPerKg) / 1000;

      // Determine creatine dose
      let creatineDose = 5; // Default maintenance dose (g)
      if (values.creatineGoal === "loading") {
        creatineDose = 20; // Loading phase dose (g)
      }

      // Extra water needed per gram of creatine (in liters)
      const extraWaterPerGramCreatine = 0.12;
      const extraWaterForCreatine = creatineDose * extraWaterPerGramCreatine;

      // Climate adjustment
      let climateAdjustment = 1.0; // Default for moderate climate
      switch (values.climate) {
        case "cool":
          climateAdjustment = 0.9;
          break;
        case "moderate":
          climateAdjustment = 1.0;
          break;
        case "hot":
          climateAdjustment = 1.2;
          break;
      }

      // Training intensity adjustment
      let trainingIntensityAdjustment = 1.0; // Default for moderate training
      switch (values.trainingIntensity) {
        case "light":
          trainingIntensityAdjustment = 0.9;
          break;
        case "moderate":
          trainingIntensityAdjustment = 1.0;
          break;
        case "intense":
          trainingIntensityAdjustment = 1.2;
          break;
      }

      // Calculate final adjusted water intake
      const adjustedBaseWater = baseWaterIntake * climateAdjustment * trainingIntensityAdjustment;
      const totalWaterNeeded = adjustedBaseWater + extraWaterForCreatine;

      // Calculate number of standard water bottles (assume 500ml bottles)
      const waterBottles = Math.ceil(totalWaterNeeded / 0.5);

      // Set results
      setResults({
        baseWaterIntake: parseFloat(adjustedBaseWater.toFixed(1)),
        creatineAdjustedWater: parseFloat(extraWaterForCreatine.toFixed(1)),
        creatineDose: creatineDose,
        totalWaterNeeded: parseFloat(totalWaterNeeded.toFixed(1)),
        extraWaterForCreatine: parseFloat(extraWaterForCreatine.toFixed(1)),
        recommendedWaterBottles: waterBottles
      });

      toast.success("Water intake calculated successfully");
    } catch (error) {
      toast.error("Error calculating water intake");
      console.error("Calculation error:", error);
    }
  };

  // Calculate immediately if form is valid on component mount
  useEffect(() => {
    const initialData = form.getValues();
    calculateWaterNeeds(initialData);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="p-6 mb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(calculateWaterNeeds)}
            className="space-y-6"
          >
            <div className="space-y-4">
              {/* Weight input with unit selection */}
              <div className="flex space-x-2 items-end">
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem className="flex-1 space-y-1">
                      <FormLabel className="font-medium flex items-center gap-2">
                        <Scale className="h-4 w-4 text-primary" />
                        Weight
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter your weight"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weightUnit"
                  render={({ field }) => (
                    <FormItem className="w-24">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="kg">kg</SelectItem>
                          <SelectItem value="lbs">lbs</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Activity Level */}
              <FormField
                control={form.control}
                name="activityLevel"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <FormLabel className="font-medium flex items-center gap-2">
                        <ActivitySquare className="h-4 w-4 text-primary" />
                        Activity Level
                      </FormLabel>
                      <InfoTooltip content="Your general daily activity level excluding workouts" />
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your activity level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                        <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                        <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                        <SelectItem value="very_active">Very Active (very hard exercise & physical job)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Training Intensity */}
              <FormField
                control={form.control}
                name="trainingIntensity"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <FormLabel className="font-medium flex items-center gap-2">
                        <MoveDown className="h-4 w-4 text-primary" />
                        Training Intensity
                      </FormLabel>
                      <InfoTooltip content="How intense are your workouts when taking creatine" />
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your training intensity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Light (low sweat, can maintain conversation)</SelectItem>
                        <SelectItem value="moderate">Moderate (moderate sweat, can speak in short sentences)</SelectItem>
                        <SelectItem value="intense">Intense (heavy sweat, can barely speak)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Creatine Goal */}
              <FormField
                control={form.control}
                name="creatineGoal"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <FormLabel className="font-medium flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-primary" />
                        Creatine Protocol
                      </FormLabel>
                      <InfoTooltip content="Loading phase: 20g/day for 5-7 days. Maintenance: 3-5g/day" />
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your creatine goal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="loading">Loading Phase (20g/day)</SelectItem>
                        <SelectItem value="maintenance">Maintenance (5g/day)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Climate */}
              <FormField
                control={form.control}
                name="climate"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Climate</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your climate" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cool">Cool Climate (below 60°F/15°C)</SelectItem>
                        <SelectItem value="moderate">Moderate Climate (60-80°F/15-27°C)</SelectItem>
                        <SelectItem value="hot">Hot Climate (above 80°F/27°C)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              size="lg"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Water Intake
            </Button>
          </form>
        </Form>
      </Card>

      {/* Results Section */}
      {results && (
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Your Water Intake Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Total Daily Water Intake</h4>
                <p className="text-2xl font-bold text-primary">
                  {results.totalWaterNeeded} liters
                </p>
                <p className="text-sm text-gray-500">Recommended amount based on your inputs</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">Water Bottles</h4>
                <p className="text-lg font-medium">
                  {results.recommendedWaterBottles} bottles
                </p>
                <p className="text-sm text-gray-500">Standard 500ml water bottles</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Water Needs:</span>
                  <span className="font-medium">{results.baseWaterIntake} liters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Extra for Creatine:</span>
                  <span className="font-medium">{results.extraWaterForCreatine} liters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Daily Creatine Dose:</span>
                  <span className="font-medium">{results.creatineDose} grams</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg text-left">
            <h4 className="font-medium text-blue-700 mb-2">How to Spread Your Water Intake</h4>
            <p className="text-sm text-blue-800">
              Try to spread your water intake throughout the day rather than drinking large amounts at once. Aim to drink about 1-2 glasses of water with each meal and 1 glass between meals. Increase intake during and after workouts.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CreatineWaterCalculator;
