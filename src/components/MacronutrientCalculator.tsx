import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { toast } from 'sonner';

const calculatorSchema = z.object({
  age: z.coerce.number().min(15, "Must be at least 15 years old").max(100, "Must be 100 or younger"),
  sex: z.enum(["male", "female"]),
  heightUnit: z.enum(["cm", "ft"]),
  heightCm: z.coerce.number().optional(),
  heightFt: z.coerce.number().optional(),
  heightIn: z.coerce.number().optional(),
  weightUnit: z.enum(["kg", "lbs"]),
  weightKg: z.coerce.number().optional(),
  weightLbs: z.coerce.number().optional(),
  activityLevel: z.enum(["sedentary", "light", "moderate", "very", "super"]),
  goal: z.enum(["loseFat", "maintain", "buildMuscle"])
}).refine(
  (data) => {
    if (data.heightUnit === "cm") {
      return data.heightCm !== undefined && data.heightCm > 0;
    } else {
      return data.heightFt !== undefined && data.heightFt > 0;
    }
  },
  {
    message: "Height is required",
    path: ["heightCm"],
  }
).refine(
  (data) => {
    if (data.weightUnit === "kg") {
      return data.weightKg !== undefined && data.weightKg > 0;
    } else {
      return data.weightLbs !== undefined && data.weightLbs > 0;
    }
  },
  {
    message: "Weight is required",
    path: ["weightKg"],
  }
);

type CalculatorFormValues = z.infer<typeof calculatorSchema>;

interface MacroResult {
  calories: number;
  protein: {
    grams: number;
    calories: number;
    percentage: number;
  };
  carbs: {
    grams: number;
    calories: number;
    percentage: number;
  };
  fat: {
    grams: number;
    calories: number;
    percentage: number;
  };
}

const MacronutrientCalculator: React.FC = () => {
  const [result, setResult] = useState<MacroResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      age: 30,
      sex: "male",
      heightUnit: "cm",
      heightCm: 175,
      heightFt: 5,
      heightIn: 9,
      weightUnit: "kg",
      weightKg: 70,
      weightLbs: 154,
      activityLevel: "moderate",
      goal: "maintain"
    }
  });

  const { watch, setValue } = form;
  
  const heightUnit = watch("heightUnit");
  const weightUnit = watch("weightUnit");
  const heightCm = watch("heightCm");
  const heightFt = watch("heightFt");
  const heightIn = watch("heightIn");
  const weightKg = watch("weightKg");
  const weightLbs = watch("weightLbs");

  useEffect(() => {
    if (heightUnit === "cm" && heightCm) {
      const totalInches = heightCm / 2.54;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      setValue("heightFt", feet);
      setValue("heightIn", inches);
    } else if (heightUnit === "ft" && heightFt && heightIn !== undefined) {
      const totalInches = (heightFt * 12) + (heightIn || 0);
      const cm = Math.round(totalInches * 2.54);
      setValue("heightCm", cm);
    }
  }, [heightUnit, heightCm, heightFt, heightIn, setValue]);

  useEffect(() => {
    if (weightUnit === "kg" && weightKg) {
      const lbs = Math.round(weightKg * 2.20462);
      setValue("weightLbs", lbs);
    } else if (weightUnit === "lbs" && weightLbs) {
      const kg = Math.round(weightLbs / 2.20462);
      setValue("weightKg", kg);
    }
  }, [weightUnit, weightKg, weightLbs, setValue]);

  const onSubmit = (data: CalculatorFormValues) => {
    try {
      let weightInKg = data.weightUnit === "kg" ? data.weightKg! : data.weightLbs! / 2.20462;
      let heightInCm = data.heightUnit === "cm" ? data.heightCm! : ((data.heightFt! * 12) + (data.heightIn || 0)) * 2.54;
      
      let bmr;
      if (data.sex === "male") {
        bmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * data.age) + 5;
      } else {
        bmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * data.age) - 161;
      }
      
      const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        very: 1.725,
        super: 1.9
      };
      
      const tdee = bmr * activityMultipliers[data.activityLevel];
      
      const goalModifiers = {
        loseFat: 0.8,
        maintain: 1.0,
        buildMuscle: 1.15
      };
      
      const adjustedCalories = Math.round(tdee * goalModifiers[data.goal]);
      
      let proteinPercentage, fatPercentage, carbPercentage;
      
      if (data.goal === "loseFat") {
        proteinPercentage = 0.4;
        fatPercentage = 0.35;
        carbPercentage = 0.25;
      } else if (data.goal === "maintain") {
        proteinPercentage = 0.3;
        fatPercentage = 0.3;
        carbPercentage = 0.4;
      } else {
        proteinPercentage = 0.25;
        fatPercentage = 0.25;
        carbPercentage = 0.5;
      }
      
      const proteinCalories = adjustedCalories * proteinPercentage;
      const fatCalories = adjustedCalories * fatPercentage;
      const carbCalories = adjustedCalories * carbPercentage;
      
      const proteinGrams = Math.round(proteinCalories / 4);
      const fatGrams = Math.round(fatCalories / 9);
      const carbGrams = Math.round(carbCalories / 4);
      
      setResult({
        calories: adjustedCalories,
        protein: {
          grams: proteinGrams,
          calories: Math.round(proteinCalories),
          percentage: Math.round(proteinPercentage * 100)
        },
        carbs: {
          grams: carbGrams,
          calories: Math.round(carbCalories),
          percentage: Math.round(carbPercentage * 100)
        },
        fat: {
          grams: fatGrams,
          calories: Math.round(fatCalories),
          percentage: Math.round(fatPercentage * 100)
        }
      });
      
      setShowResults(true);
      toast.success("Your macronutrient breakdown has been calculated!");
    } catch (error) {
      console.error("Calculation error:", error);
      toast.error("There was an error calculating your macros. Please check your inputs and try again.");
    }
  };

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4 text-left">
              <h2 className="text-xl font-bold">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem className="text-left">
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter your age"
                            {...field}
                            min={15}
                            max={100}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div>
                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem className="text-left">
                        <FormLabel>Sex</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your sex" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div>
                <FormField
                  control={form.control}
                  name="heightUnit"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>Height</FormLabel>
                      <div className="flex items-center space-x-4">
                        <FormControl>
                          <RadioGroup
                            className="flex space-x-4" 
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <div className="flex items-center space-x-1">
                              <RadioGroupItem value="cm" id="cm" />
                              <Label htmlFor="cm">cm</Label>
                            </div>
                            <div className="flex items-center space-x-1">
                              <RadioGroupItem value="ft" id="ft" />
                              <Label htmlFor="ft">ft/in</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="mt-2">
                  {heightUnit === "cm" ? (
                    <FormField
                      control={form.control}
                      name="heightCm"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Height in cm"
                              {...field}
                              min={100}
                              max={250}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ) : (
                    <div className="flex space-x-2">
                      <FormField
                        control={form.control}
                        name="heightFt"
                        render={({ field }) => (
                          <FormItem className="flex-1 text-left">
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Feet"
                                {...field}
                                min={1}
                                max={8}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="heightIn"
                        render={({ field }) => (
                          <FormItem className="flex-1 text-left">
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Inches"
                                {...field}
                                min={0}
                                max={11}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <FormField
                  control={form.control}
                  name="weightUnit"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>Weight</FormLabel>
                      <div className="flex items-center space-x-4">
                        <FormControl>
                          <RadioGroup
                            className="flex space-x-4" 
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <div className="flex items-center space-x-1">
                              <RadioGroupItem value="kg" id="kg" />
                              <Label htmlFor="kg">kg</Label>
                            </div>
                            <div className="flex items-center space-x-1">
                              <RadioGroupItem value="lbs" id="lbs" />
                              <Label htmlFor="lbs">lbs</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="mt-2">
                  {weightUnit === "kg" ? (
                    <FormField
                      control={form.control}
                      name="weightKg"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Weight in kg"
                              {...field}
                              min={30}
                              max={300}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ) : (
                    <FormField
                      control={form.control}
                      name="weightLbs"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Weight in lbs"
                              {...field}
                              min={66}
                              max={660}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </div>
              
              <div>
                <FormField
                  control={form.control}
                  name="activityLevel"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>Activity Level</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your activity level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                          <SelectItem value="light">Lightly active (light exercise 1-3 days/week)</SelectItem>
                          <SelectItem value="moderate">Moderately active (moderate exercise 3-5 days/week)</SelectItem>
                          <SelectItem value="very">Very active (hard exercise 6-7 days/week)</SelectItem>
                          <SelectItem value="super">Super active (very intense exercise or physical job)</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              
              <div>
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>Goal</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your goal" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="loseFat">Lose Fat</SelectItem>
                          <SelectItem value="maintain">Maintain</SelectItem>
                          <SelectItem value="buildMuscle">Build Muscle</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
              >
                Calculate My Macros
              </Button>
            </div>
          </form>
        </Form>
        
        {showResults && result && (
          <div className="mt-8 border-t pt-6 text-left">
            <h2 className="text-xl font-bold mb-4">Your Daily Macronutrient Targets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-2">Daily Calorie Target</h3>
                  <p className="text-3xl font-bold text-primary">{result.calories} calories</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Protein</h3>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-2xl font-bold text-indigo-600">{result.protein.grams}g</p>
                        <p className="text-sm text-gray-500">{result.protein.calories} calories</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-indigo-600">{result.protein.percentage}%</p>
                        <p className="text-sm text-gray-500">of total calories</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Carbohydrates</h3>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-2xl font-bold text-green-600">{result.carbs.grams}g</p>
                        <p className="text-sm text-gray-500">{result.carbs.calories} calories</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">{result.carbs.percentage}%</p>
                        <p className="text-sm text-gray-500">of total calories</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Fat</h3>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-2xl font-bold text-amber-600">{result.fat.grams}g</p>
                        <p className="text-sm text-gray-500">{result.fat.calories} calories</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-600">{result.fat.percentage}%</p>
                        <p className="text-sm text-gray-500">of total calories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold mb-4 self-start">Macronutrient Ratio</h3>
                <div className="w-full h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Protein', value: result.protein.percentage },
                          { name: 'Carbs', value: result.carbs.percentage },
                          { name: 'Fat', value: result.fat.percentage }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={renderCustomizedLabel}
                      >
                        {[
                          { name: 'Protein', value: result.protein.percentage },
                          { name: 'Carbs', value: result.carbs.percentage },
                          { name: 'Fat', value: result.fat.percentage }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MacronutrientCalculator;
