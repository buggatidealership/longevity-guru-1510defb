
import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, Info } from "lucide-react";
import { toast } from "sonner";
import InfoTooltip from "./InfoTooltip";

// Schema for form validation
const formSchema = z.object({
  sex: z.enum(["male", "female"], {
    required_error: "Please select your sex",
  }),
  heightUnit: z.enum(["cm", "ft/in"], {
    required_error: "Please select height unit",
  }),
  heightCm: z.coerce.number().min(100, { message: "Height must be at least 100 cm" }).max(250, { message: "Height must be less than 250 cm" }).optional(),
  heightFt: z.coerce.number().min(3, { message: "Height must be at least 3 ft" }).max(8, { message: "Height must be less than 8 ft" }).optional(),
  heightIn: z.coerce.number().min(0, { message: "Inches must be between 0 and 11" }).max(11, { message: "Inches must be between 0 and 11" }).optional(),
  frameSize: z.enum(["small", "medium", "large"], {
    required_error: "Please select your frame size",
  }),
});

// Helper functions
const cmToInches = (cm: number): number => cm / 2.54;
const inchesToCm = (inches: number): number => inches * 2.54;
const ftInToInches = (ft: number, inches: number): number => (ft * 12) + inches;
const kgToLbs = (kg: number): number => kg * 2.20462;
const roundToOneDecimal = (num: number): number => Math.round(num * 10) / 10;

// IBW calculation formulas
const calculateDevine = (sex: string, heightInches: number): number => {
  if (sex === "male") {
    return 50 + (2.3 * (heightInches - 60));
  } else {
    return 45.5 + (2.3 * (heightInches - 60));
  }
};

const calculateRobinson = (sex: string, heightInches: number): number => {
  if (sex === "male") {
    return 52 + (1.9 * (heightInches - 60));
  } else {
    return 49 + (1.7 * (heightInches - 60));
  }
};

const calculateMiller = (sex: string, heightInches: number): number => {
  if (sex === "male") {
    return 56.2 + (1.41 * (heightInches - 60));
  } else {
    return 53.1 + (1.36 * (heightInches - 60));
  }
};

const calculateHamwi = (sex: string, heightInches: number): number => {
  if (sex === "male") {
    return 48 + (2.7 * (heightInches - 60));
  } else {
    return 45.5 + (2.2 * (heightInches - 60));
  }
};

const calculateBroca = (sex: string, heightInches: number, frameSize: string): number => {
  const heightCm = inchesToCm(heightInches);
  let base = 0;
  
  if (sex === "male") {
    base = heightCm - 100;
  } else {
    base = heightCm - 105;
  }
  
  // Adjust for frame size
  if (frameSize === "small") {
    return base * 0.9;
  } else if (frameSize === "large") {
    return base * 1.1;
  }
  
  return base;
};

// Calculate adjusted IBW with frame size
const adjustForFrameSize = (baseWeight: number, frameSize: string): number => {
  if (frameSize === "small") {
    return baseWeight * 0.9;
  } else if (frameSize === "large") {
    return baseWeight * 1.1;
  }
  return baseWeight;
};

const IdealBodyWeightCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    devine: { kg: number; lbs: number };
    robinson: { kg: number; lbs: number };
    miller: { kg: number; lbs: number };
    hamwi: { kg: number; lbs: number };
    broca: { kg: number; lbs: number };
    average: { kg: number; lbs: number };
    range: { min: { kg: number; lbs: number }; max: { kg: number; lbs: number } };
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sex: "male",
      heightUnit: "cm",
      heightCm: 170,
      heightFt: 5,
      heightIn: 7,
      frameSize: "medium",
    },
  });

  const heightUnit = form.watch("heightUnit");
  const sex = form.watch("sex");

  // Calculate IBW based on form inputs
  const calculateIBW = (values: z.infer<typeof formSchema>) => {
    try {
      // Convert height to inches for calculations
      let heightInches = 0;
      
      if (values.heightUnit === "cm" && values.heightCm) {
        heightInches = cmToInches(values.heightCm);
      } else if (values.heightFt && values.heightIn !== undefined) {
        heightInches = ftInToInches(values.heightFt, values.heightIn);
      } else {
        toast.error("Please enter a valid height");
        return;
      }
      
      // Calculate IBW using different formulas
      const devineKg = calculateDevine(values.sex, heightInches);
      const robinsonKg = calculateRobinson(values.sex, heightInches);
      const millerKg = calculateMiller(values.sex, heightInches);
      const hamwiKg = calculateHamwi(values.sex, heightInches);
      const brocaKg = calculateBroca(values.sex, heightInches, values.frameSize);
      
      // Calculate average and range
      const weights = [devineKg, robinsonKg, millerKg, hamwiKg, brocaKg];
      const averageKg = weights.reduce((a, b) => a + b, 0) / weights.length;
      const minKg = Math.min(...weights);
      const maxKg = Math.max(...weights);
      
      // Set results
      setResults({
        devine: { kg: roundToOneDecimal(devineKg), lbs: roundToOneDecimal(kgToLbs(devineKg)) },
        robinson: { kg: roundToOneDecimal(robinsonKg), lbs: roundToOneDecimal(kgToLbs(robinsonKg)) },
        miller: { kg: roundToOneDecimal(millerKg), lbs: roundToOneDecimal(kgToLbs(millerKg)) },
        hamwi: { kg: roundToOneDecimal(hamwiKg), lbs: roundToOneDecimal(kgToLbs(hamwiKg)) },
        broca: { kg: roundToOneDecimal(brocaKg), lbs: roundToOneDecimal(kgToLbs(brocaKg)) },
        average: { kg: roundToOneDecimal(averageKg), lbs: roundToOneDecimal(kgToLbs(averageKg)) },
        range: { 
          min: { kg: roundToOneDecimal(minKg), lbs: roundToOneDecimal(kgToLbs(minKg)) },
          max: { kg: roundToOneDecimal(maxKg), lbs: roundToOneDecimal(kgToLbs(maxKg)) }
        }
      });
      
      toast.success("Ideal body weight calculated successfully");
    } catch (error) {
      toast.error("Error calculating ideal body weight");
      console.error("Calculation error:", error);
    }
  };

  // Calculate immediately if form is valid on component mount
  useEffect(() => {
    const initialData = {
      sex: form.getValues("sex"),
      heightUnit: form.getValues("heightUnit"),
      heightCm: form.getValues("heightCm"),
      heightFt: form.getValues("heightFt"),
      heightIn: form.getValues("heightIn"),
      frameSize: form.getValues("frameSize"),
    };

    if (initialData.heightCm || (initialData.heightFt && initialData.heightIn !== undefined)) {
      calculateIBW(initialData);
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="p-6 mb-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(calculateIBW)}
            className="space-y-6"
          >
            <div className="space-y-4">
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

              {/* Height unit selection */}
              <FormField
                control={form.control}
                name="heightUnit"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Height Unit</FormLabel>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cm" id="cm" />
                        <FormLabel htmlFor="cm" className="font-normal cursor-pointer">
                          Centimeters (cm)
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ft/in" id="ft-in" />
                        <FormLabel htmlFor="ft-in" className="font-normal cursor-pointer">
                          Feet & Inches
                        </FormLabel>
                      </div>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Height input */}
              {heightUnit === "cm" ? (
                <FormField
                  control={form.control}
                  name="heightCm"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-medium">Height (cm)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter height in cm"
                          min={100}
                          max={250}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                <div className="flex space-x-2">
                  <FormField
                    control={form.control}
                    name="heightFt"
                    render={({ field }) => (
                      <FormItem className="flex-1 space-y-1">
                        <FormLabel className="font-medium">Feet</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="ft"
                            min={3}
                            max={8}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="heightIn"
                    render={({ field }) => (
                      <FormItem className="flex-1 space-y-1">
                        <FormLabel className="font-medium">Inches</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="in"
                            min={0}
                            max={11}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Frame size selection */}
              <FormField
                control={form.control}
                name="frameSize"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <FormLabel className="font-medium">Body Frame Size</FormLabel>
                      <InfoTooltip content="Body frame size affects some ideal weight calculations. You can estimate your frame size by measuring your wrist circumference or by looking at the width of your elbow." />
                    </div>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your body frame size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
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
              Calculate Ideal Body Weight
            </Button>
          </form>
        </Form>
      </Card>

      {/* Results Section */}
      {results && (
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Your Ideal Body Weight Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Average Ideal Weight</h4>
                <p className="text-2xl font-bold text-primary">
                  {results.average.kg} kg / {results.average.lbs} lbs
                </p>
                <p className="text-sm text-gray-500">Average of all formulas</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">Healthy Weight Range</h4>
                <p className="text-lg font-medium">
                  {results.range.min.kg} - {results.range.max.kg} kg
                </p>
                <p className="text-lg font-medium">
                  {results.range.min.lbs} - {results.range.max.lbs} lbs
                </p>
                <p className="text-sm text-gray-500">Based on all formulas</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Results by Formula</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Devine Formula:</span>
                  <span className="font-medium">{results.devine.kg} kg / {results.devine.lbs} lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Robinson Formula:</span>
                  <span className="font-medium">{results.robinson.kg} kg / {results.robinson.lbs} lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Miller Formula:</span>
                  <span className="font-medium">{results.miller.kg} kg / {results.miller.lbs} lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hamwi Formula:</span>
                  <span className="font-medium">{results.hamwi.kg} kg / {results.hamwi.lbs} lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Broca Formula:</span>
                  <span className="font-medium">{results.broca.kg} kg / {results.broca.lbs} lbs</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg text-left">
            <h4 className="font-medium text-blue-700 mb-2">Understanding These Results</h4>
            <p className="text-sm text-blue-800">
              These formulas provide estimates based on height and sex. Your actual healthy weight may vary based on factors like muscle mass, body composition, and overall health. Consult with a healthcare provider for personalized guidance.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default IdealBodyWeightCalculator;
