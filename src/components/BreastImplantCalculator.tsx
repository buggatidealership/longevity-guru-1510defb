
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";
import { useForm } from "react-hook-form";
import DisclaimerAlert from "./DisclaimerAlert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import InfoTooltip from './InfoTooltip';

interface ImplantFormValues {
  height: string;
  weight: string;
  chest: string;
  cupSize: string;
  desiredCup: string;
  frame: string;
  region: string;
  implantType: string;
}

interface CostBreakdown {
  surgeonFee: [number, number];
  anesthesiaFee: [number, number];
  facilityFee: [number, number];
  implantCost: [number, number];
  otherCosts: [number, number];
  currency: string;
}

const BreastImplantCalculator = () => {
  const [results, setResults] = useState<{
    sizeRange: string;
    newCup: string;
    costRange: string;
    regionName: string;
    breakdown: CostBreakdown;
    implantName: string;
  } | null>(null);

  const form = useForm<ImplantFormValues>({
    defaultValues: {
      height: "",
      weight: "",
      chest: "",
      cupSize: "1", // A cup
      desiredCup: "2", // +2 cup sizes
      frame: "medium",
      region: "us",
      implantType: "silicone",
    },
  });

  const onSubmit = (data: ImplantFormValues) => {
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    const chest = parseFloat(data.chest);
    const cupSize = parseInt(data.cupSize);
    const desiredIncrease = parseInt(data.desiredCup);
    const frame = data.frame;
    const region = data.region;
    const implantType = data.implantType;

    // Validate inputs
    if (!height || !weight || !chest) {
      return;
    }

    // Calculate BMI for frame adjustment
    const bmi = weight / ((height / 100) * (height / 100));

    // Base volume per cup size (approximation from research)
    const baseVolumePerCup = 175; // cc

    // Adjustments based on frame size and BMI
    let frameMultiplier = 1.0;
    if (frame === "small" || bmi < 19) {
      frameMultiplier = 0.85;
    } else if (frame === "large" || bmi > 25) {
      frameMultiplier = 1.15;
    }

    // Chest measurement adjustment
    let chestAdjustment = 1.0;
    if (chest < 75) {
      chestAdjustment = 0.9;
    } else if (chest > 90) {
      chestAdjustment = 1.1;
    }

    // Calculate baseline volume needed for desired increase
    const baselineVolume = baseVolumePerCup * desiredIncrease * frameMultiplier * chestAdjustment;

    // Create a range (±15%)
    const minVolume = Math.round(baselineVolume * 0.85);
    const maxVolume = Math.round(baselineVolume * 1.15);

    // Ensure minimum volume is not too small
    const adjustedMinVolume = Math.max(minVolume, 125);

    // Estimate new cup size
    const cupNames = ["AA", "A", "B", "C", "D", "DD", "E", "F"];
    const newCupIndex = Math.min(cupSize + desiredIncrease, cupNames.length - 1);

    // Cost calculations
    const costs = calculateCosts(region, implantType, desiredIncrease);

    setResults({
      sizeRange: `${adjustedMinVolume} - ${maxVolume}`,
      newCup: cupNames[newCupIndex],
      costRange: `${costs.currency}${costs.totalMin.toLocaleString()} - ${costs.currency}${costs.totalMax.toLocaleString()}`,
      regionName: costs.regionName,
      breakdown: {
        surgeonFee: [costs.minSurgeonFee, costs.maxSurgeonFee],
        anesthesiaFee: [costs.minAnesthesia, costs.maxAnesthesia],
        facilityFee: [costs.minFacility, costs.maxFacility],
        implantCost: [costs.minImplantCost, costs.maxImplantCost],
        otherCosts: [costs.minOther, costs.maxOther],
        currency: costs.currency
      },
      implantName: costs.implantName
    });
  };

  const calculateCosts = (region: string, implantType: string, desiredIncrease: number) => {
    // Base cost ranges by region (in USD or local equivalent)
    const regionCosts: Record<string, any> = {
      "us": {
        base: [3500, 7500],
        surgeonFee: [2000, 4000],
        anesthesia: [600, 1000],
        facility: [800, 2000],
        other: [200, 500],
        currency: "$",
        name: "United States"
      },
      "canada": {
        base: [5000, 10000],
        surgeonFee: [3000, 5000],
        anesthesia: [700, 1200],
        facility: [1000, 2500],
        other: [300, 600],
        currency: "CAD $",
        name: "Canada"
      },
      "uk": {
        base: [3500, 7000],
        surgeonFee: [2000, 3500],
        anesthesia: [500, 900],
        facility: [800, 1800],
        other: [200, 500],
        currency: "£",
        name: "the United Kingdom"
      },
      "australia": {
        base: [6000, 12000],
        surgeonFee: [3000, 6000],
        anesthesia: [800, 1500],
        facility: [1500, 3000],
        other: [400, 800],
        currency: "AUD $",
        name: "Australia"
      },
      "europe": {
        base: [3000, 7000],
        surgeonFee: [1800, 3500],
        anesthesia: [500, 1000],
        facility: [800, 1800],
        other: [200, 500],
        currency: "€",
        name: "Western Europe"
      },
      "asia": {
        base: [3000, 8000],
        surgeonFee: [1500, 4000],
        anesthesia: [500, 1000],
        facility: [800, 2000],
        other: [200, 500],
        currency: "$",
        name: "East Asia"
      },
      "latam": {
        base: [2500, 5500],
        surgeonFee: [1200, 2500],
        anesthesia: [400, 800],
        facility: [600, 1500],
        other: [150, 400],
        currency: "$",
        name: "Latin America"
      }
    };

    // Implant cost adjustments
    const implantCosts: Record<string, number[]> = {
      "saline": [800, 1200],
      "silicone": [1200, 1800],
      "cohesive": [1500, 2200]
    };

    const implantNames: Record<string, string> = {
      "saline": "Saline",
      "silicone": "Silicone Gel",
      "cohesive": "Highly Cohesive Gel"
    };

    // Get regional base costs
    const regionData = regionCosts[region];
    const currency = regionData.currency;

    // Get implant costs
    const implantCost = implantCosts[implantType];

    // Adjustments for desired increase (larger sizes may require more complex surgery)
    let sizeAdjustment = 1.0;
    if (desiredIncrease >= 3) {
      sizeAdjustment = 1.15; // 15% increase for large size changes
    } else if (desiredIncrease <= 1) {
      sizeAdjustment = 0.95; // 5% discount for modest changes
    }

    // Calculate final cost range
    const minSurgeonFee = Math.round(regionData.surgeonFee[0] * sizeAdjustment);
    const maxSurgeonFee = Math.round(regionData.surgeonFee[1] * sizeAdjustment);

    const minAnesthesia = regionData.anesthesia[0];
    const maxAnesthesia = regionData.anesthesia[1];

    const minFacility = regionData.facility[0];
    const maxFacility = regionData.facility[1];

    const minImplantCost = implantCost[0];
    const maxImplantCost = implantCost[1];

    const minOther = regionData.other[0];
    const maxOther = regionData.other[1];

    // Total costs
    const minTotal = minSurgeonFee + minAnesthesia + minFacility + minImplantCost + minOther;
    const maxTotal = maxSurgeonFee + maxAnesthesia + maxFacility + maxImplantCost + maxOther;

    return {
      regionName: regionData.name,
      currency,
      totalMin: minTotal,
      totalMax: maxTotal,
      minSurgeonFee,
      maxSurgeonFee,
      minAnesthesia,
      maxAnesthesia,
      minFacility,
      maxFacility,
      minImplantCost,
      maxImplantCost,
      minOther,
      maxOther,
      implantName: implantNames[implantType]
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-none shadow-md bg-white rounded-xl">
        <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-xl pb-4">
          <CardTitle className="text-2xl md:text-3xl text-center text-gray-900">Breast Implant Size Calculator</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Estimate appropriate implant sizes based on your body measurements and see cost estimates for breast augmentation surgery.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height (cm) <InfoTooltip content="Your height in centimeters" /></FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="e.g., 165"
                          min={140}
                          max={200}
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight (kg) <InfoTooltip content="Your weight in kilograms" /></FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="e.g., 60"
                          min={40}
                          max={120}
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="chest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chest/Underbust Measurement (cm) <InfoTooltip content="The measurement around your ribcage just under your breasts" /></FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 75"
                        min={60}
                        max={120}
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="cupSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Cup Size <InfoTooltip content="Your current cup size" /></FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cup size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0">AA</SelectItem>
                          <SelectItem value="1">A</SelectItem>
                          <SelectItem value="2">B</SelectItem>
                          <SelectItem value="3">C</SelectItem>
                          <SelectItem value="4">D</SelectItem>
                          <SelectItem value="5">DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desiredCup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired Cup Size Increase <InfoTooltip content="How many cup sizes you would like to increase" /></FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select desired increase" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">+1 Cup Size</SelectItem>
                          <SelectItem value="2">+2 Cup Sizes</SelectItem>
                          <SelectItem value="3">+3 Cup Sizes</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="frame"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Body Frame <InfoTooltip content="Your general body frame type" /></FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frame" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="small">Small Frame</SelectItem>
                          <SelectItem value="medium">Medium Frame</SelectItem>
                          <SelectItem value="large">Large Frame</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Region/Country <InfoTooltip content="Your location for cost estimation" /></FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="europe">Western Europe</SelectItem>
                          <SelectItem value="asia">East Asia</SelectItem>
                          <SelectItem value="latam">Latin America</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="implantType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Implant Type <InfoTooltip content="The type of breast implant material" /></FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select implant type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="saline">Saline Implants</SelectItem>
                          <SelectItem value="silicone">Silicone Gel Implants</SelectItem>
                          <SelectItem value="cohesive">Highly Cohesive Gel (Gummy Bear)</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary">Calculate Suggested Size & Cost</Button>
            </form>
          </Form>

          {results && (
            <div className="mt-6 bg-blue-50 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Estimated Results</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Suggested Implant Size Range:</span>{" "}
                  <span className="text-primary font-semibold">{results.sizeRange} cc</span>
                </p>
                <p>
                  <span className="font-medium">Estimated Cup Size After Surgery:</span>{" "}
                  <span className="text-primary font-semibold">{results.newCup}</span>
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-blue-100">
                <h3 className="text-lg font-semibold mb-2">Cost Estimates</h3>
                <p>Based on your selections and average pricing in {results.regionName}:</p>
                <p className="text-xl font-bold text-primary my-2">{results.costRange}</p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cost-breakdown">
                    <AccordionTrigger className="text-md font-semibold">
                      Cost Breakdown
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th className="text-left py-2 px-1 bg-blue-100 rounded-l">Component</th>
                              <th className="text-left py-2 px-1 bg-blue-100 rounded-r">Estimated Cost</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-blue-50">
                              <td className="py-2 px-1">Surgeon's Fee</td>
                              <td className="py-2 px-1">{results.breakdown.currency}{results.breakdown.surgeonFee[0].toLocaleString()} - {results.breakdown.currency}{results.breakdown.surgeonFee[1].toLocaleString()}</td>
                            </tr>
                            <tr className="border-b border-blue-50">
                              <td className="py-2 px-1">Anesthesia</td>
                              <td className="py-2 px-1">{results.breakdown.currency}{results.breakdown.anesthesiaFee[0].toLocaleString()} - {results.breakdown.currency}{results.breakdown.anesthesiaFee[1].toLocaleString()}</td>
                            </tr>
                            <tr className="border-b border-blue-50">
                              <td className="py-2 px-1">Facility/Hospital Fee</td>
                              <td className="py-2 px-1">{results.breakdown.currency}{results.breakdown.facilityFee[0].toLocaleString()} - {results.breakdown.currency}{results.breakdown.facilityFee[1].toLocaleString()}</td>
                            </tr>
                            <tr className="border-b border-blue-50">
                              <td className="py-2 px-1">Implants ({results.implantName})</td>
                              <td className="py-2 px-1">{results.breakdown.currency}{results.breakdown.implantCost[0].toLocaleString()} - {results.breakdown.currency}{results.breakdown.implantCost[1].toLocaleString()}</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-1">Other (Medication, Garments, etc.)</td>
                              <td className="py-2 px-1">{results.breakdown.currency}{results.breakdown.otherCosts[0].toLocaleString()} - {results.breakdown.currency}{results.breakdown.otherCosts[1].toLocaleString()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-gray-500 italic mt-2">
                        Note: These are average price ranges based on industry data. Actual costs vary depending on surgeon experience, location, facility type, and specific requirements.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <p className="text-xs text-gray-500 italic mt-4">
                  Note: These calculations are based on general guidelines from plastic surgery research. Individual results may vary based on many factors including breast tissue elasticity, chest wall anatomy, and implant placement.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <DisclaimerAlert
              title="Important Disclaimer"
              content="This calculator provides estimates only and is not a substitute for professional medical advice. The results should be used as a starting point for discussion with a board-certified plastic surgeon. All surgical procedures carry risks and require careful consideration."
              icon={<AlertTriangle className="h-4 w-4" />}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BreastImplantCalculator;
