
import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator } from "lucide-react";
import { toast } from "sonner";
import InfoTooltip from "./InfoTooltip";

// Schema for form validation
const formSchema = z.object({
  weight: z.coerce.number().min(40, { message: "Weight must be at least 40 kg" }).max(200, { message: "Weight must be less than 200 kg" }),
  height: z.coerce.number().min(140, { message: "Height must be at least 140 cm" }).max(220, { message: "Height must be less than 220 cm" }),
  age: z.coerce.number().min(18, { message: "Age must be at least 18" }).max(100, { message: "Age must be less than 100" }),
  sex: z.enum(["male", "female"], {
    required_error: "Please select your sex",
  }),
  diabetes: z.enum(["yes", "no"], {
    required_error: "Please indicate if you have Type 2 Diabetes",
  }),
  activity: z.enum(["sedentary", "moderate", "active"], {
    required_error: "Please select your activity level",
  }),
  diet: z.enum(["none", "minor", "major"], {
    required_error: "Please select your planned dietary changes",
  }),
  duration: z.enum(["3", "6", "9", "12"], {
    required_error: "Please select your treatment duration",
  }),
});

const OzempicWeightLossCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    startingWeight: number;
    bmi: number;
    weightLoss: number;
    newWeight: number;
    percentLoss: number;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: 80,
      height: 170,
      age: 40,
      sex: "female",
      diabetes: "no",
      activity: "moderate",
      diet: "minor",
      duration: "6",
    },
  });

  // Calculate weight loss based on form inputs
  const calculateWeightLoss = (values: z.infer<typeof formSchema>) => {
    try {
      const weight = parseFloat(values.weight.toString());
      const height = parseFloat(values.height.toString());
      const age = parseInt(values.age.toString());
      const sex = values.sex;
      const hasDiabetes = values.diabetes === 'yes';
      const activity = values.activity;
      const diet = values.diet;
      const duration = parseInt(values.duration);

      // Calculate BMI
      const bmi = parseFloat((weight / ((height / 100) ** 2)).toFixed(1));

      // Base weight loss (from clinical trials)
      let baseLossPercent = hasDiabetes ? 0.06 : 0.12; // Diabetics lose ~6%, others ~12%

      // Apply adjustments based on user factors
      if (age < 50) baseLossPercent *= 1.2; // Younger lose more
      if (age > 65) baseLossPercent *= 0.9; // Older lose slightly less
      if (sex === 'female') baseLossPercent *= 0.95; // Women lose slightly less

      // Lifestyle adjustments
      if (activity === 'moderate') baseLossPercent *= 1.1;
      if (activity === 'active') baseLossPercent *= 1.15;
      if (diet === 'minor') baseLossPercent *= 1.1;
      if (diet === 'major') baseLossPercent *= 1.2;

      // Duration adjustment (diminishing returns after 6 months)
      if (duration <= 6) {
        baseLossPercent *= duration / 6;
      } else {
        baseLossPercent *= 1 + (duration - 6) * 0.02;
      }

      // Calculate projected loss
      const weightLossKg = parseFloat((weight * baseLossPercent).toFixed(1));
      const newWeight = parseFloat((weight - weightLossKg).toFixed(1));
      const percentLoss = parseFloat((baseLossPercent * 100).toFixed(1));

      // Set results
      setResults({
        startingWeight: weight,
        bmi: bmi,
        weightLoss: weightLossKg,
        newWeight: newWeight,
        percentLoss: percentLoss,
      });
      
      toast.success("Weight loss projection calculated successfully");
    } catch (error) {
      toast.error("Error calculating weight loss projection");
      console.error("Calculation error:", error);
    }
  };

  // Calculate immediately if form is valid on component mount
  useEffect(() => {
    const initialData = {
      weight: form.getValues("weight"),
      height: form.getValues("height"),
      age: form.getValues("age"),
      sex: form.getValues("sex"),
      diabetes: form.getValues("diabetes"),
      activity: form.getValues("activity"),
      diet: form.getValues("diet"),
      duration: form.getValues("duration"),
    };

    calculateWeightLoss(initialData);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="p-6 mb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(calculateWeightLoss)}
            className="space-y-6"
          >
            <div className="space-y-4">
              {/* Weight */}
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Current Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your current weight"
                        min={40}
                        max={200}
                        step={0.1}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Height */}
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Height (cm)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your height"
                        min={140}
                        max={220}
                        step={1}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Age */}
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your age"
                        min={18}
                        max={100}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Sex selection */}
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Sex</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your sex" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Diabetes */}
              <FormField
                control={form.control}
                name="diabetes"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <FormLabel className="font-medium">Do you have Type 2 Diabetes?</FormLabel>
                      <InfoTooltip content="Patients with Type 2 Diabetes typically show different weight loss patterns when using GLP-1 agonists like Ozempic." />
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select yes or no" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Activity Level */}
              <FormField
                control={form.control}
                name="activity"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Activity Level</FormLabel>
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
                        <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                        <SelectItem value="moderate">Moderate (exercise 1-3x/week)</SelectItem>
                        <SelectItem value="active">Active (exercise 4-5x/week)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Dietary Changes */}
              <FormField
                control={form.control}
                name="diet"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Dietary Changes Planned</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your planned dietary changes" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">No major changes</SelectItem>
                        <SelectItem value="minor">Minor improvements</SelectItem>
                        <SelectItem value="major">Major diet overhaul</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Treatment Duration */}
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Treatment Duration (months)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your treatment duration" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="3">3 months</SelectItem>
                        <SelectItem value="6">6 months</SelectItem>
                        <SelectItem value="9">9 months</SelectItem>
                        <SelectItem value="12">12 months</SelectItem>
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
              Calculate My Projected Weight Loss
            </Button>
          </form>
        </Form>
      </Card>

      {/* Results Section */}
      {results && (
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Your Weight Loss Projection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Starting Information</h4>
                <p className="flex justify-between">
                  <span>Starting Weight:</span>
                  <span className="font-medium">{results.startingWeight} kg</span>
                </p>
                <p className="flex justify-between">
                  <span>BMI:</span>
                  <span className="font-medium">{results.bmi}</span>
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">Projected Results</h4>
                <p className="flex justify-between">
                  <span>Projected Weight Loss:</span>
                  <span className="text-xl font-bold text-primary">{results.weightLoss} kg</span>
                </p>
                <p className="flex justify-between">
                  <span>Expected New Weight:</span>
                  <span className="font-medium">{results.newWeight} kg</span>
                </p>
                <p className="flex justify-between">
                  <span>Body Weight Percentage Lost:</span>
                  <span className="font-medium">{results.percentLoss}%</span>
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-left">
              <h4 className="font-medium text-blue-700 mb-2">Understanding Your Results</h4>
              <p className="text-sm text-blue-800 mb-2">
                This estimate is based on clinical trial data from STEP 1-4 and SUSTAIN trials. Individual results vary based on:
              </p>
              <ul className="text-sm text-blue-800 list-disc pl-5 space-y-1">
                <li>Medication adherence and dosage</li>
                <li>Genetic factors</li>
                <li>Individual metabolism</li>
                <li>Diet and exercise changes</li>
                <li>Pre-existing conditions</li>
              </ul>
              <p className="text-sm text-blue-800 mt-2 font-medium">
                Always consult with a healthcare provider before starting any weight loss medication.
              </p>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p className="mb-2"><strong>Important:</strong> Ozempic (semaglutide) is FDA-approved primarily for Type 2 Diabetes management. Weight loss is considered a secondary effect. Wegovy is the branded version approved specifically for weight management.</p>
            <p>These projections assume consistent medication use without significant side effects that might require dosage adjustment or discontinuation.</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default OzempicWeightLossCalculator;
