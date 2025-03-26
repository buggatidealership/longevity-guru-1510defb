
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Alert, AlertDescription } from "./ui/alert";
import ResultCard from './ResultCard';
import { Info } from 'lucide-react';
import InfoTooltip from './InfoTooltip';
import DisclaimerAlert from './DisclaimerAlert';

const VitaminDCalculator = () => {
  // Form state
  const [fish, setFish] = useState('0');
  const [fortified, setFortified] = useState('0');
  const [otherFoods, setOtherFoods] = useState('0');
  const [sun, setSun] = useState('0');
  const [country, setCountry] = useState('0.4'); // Default to temperate
  
  // Results state
  const [dailyIU, setDailyIU] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState('');
  const [foodSuggestions, setFoodSuggestions] = useState('');
  
  const calculate = () => {
    // Get all values
    const fishVal = parseInt(fish);
    const fortifiedVal = parseInt(fortified);
    const otherFoodsVal = parseInt(otherFoods);
    let sunVal = parseInt(sun);
    const latitudeEffect = parseFloat(country);
    
    // Adjust sun exposure by latitude effectiveness
    sunVal = Math.round(sunVal * latitudeEffect);
    
    // Calculate weekly totals
    const weeklyFood = fishVal + (fortifiedVal * 7) + (otherFoodsVal * 7);
    const weeklySun = sunVal * (sunVal > 0 ? (parseInt(sun) > 0 ? 1 : 0) : 0);
    
    // Convert to daily average
    const calculatedDailyIU = Math.round((weeklyFood + weeklySun) / 7);
    
    // Set results
    setDailyIU(calculatedDailyIU);
    
    let recommendationText = "";
    let foodsText = "";
    
    if (calculatedDailyIU < 800) {
      recommendationText = "Consider adding 1,000-2,000 IU of D3 supplements daily";
      foodsText = "Try adding: 2 more fatty fish meals weekly + 15 min sun daily";
    } else if (calculatedDailyIU < 2000) {
      recommendationText = "You're doing OK but could optimize";
      foodsText = "Try: Adding 1 more fatty fish meal weekly or 10 min extra sun";
    } else {
      recommendationText = "Great! You're likely getting enough";
      foodsText = "Maintain your current habits";
    }
    
    // Special winter note for northern latitudes
    if (latitudeEffect <= 0.4 && calculatedDailyIU < 2000) {
      recommendationText += " (especially in winter)";
      foodsText += " | In winter: Prioritize fatty fish or supplements";
    }
    
    setRecommendation(recommendationText);
    setFoodSuggestions(foodsText);
  };
  
  // Creating the result object for the ResultCard component
  const resultData = dailyIU !== null ? {
    title: "Your Vitamin D Results",
    details: [
      { label: "Estimated Daily Intake", value: `${dailyIU} IU` },
      { label: "Recommendation", value: recommendation },
      { label: "Diet Tips", value: foodSuggestions }
    ],
    className: dailyIU < 800 ? "border-red-400" : 
              dailyIU < 2000 ? "border-yellow-400" : "border-green-400"
  } : null;
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <DisclaimerAlert className="mb-6" />
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl text-center">Vitamin D Intake Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="fish" className="font-medium">
                1. How often do you eat fatty fish (salmon, mackerel, sardines)?
              </Label>
              <InfoTooltip content="Fish like salmon and mackerel are excellent natural sources of vitamin D" />
            </div>
            <Select value={fish} onValueChange={setFish}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Never or rarely</SelectItem>
                <SelectItem value="200">1-2 times per week (small portion)</SelectItem>
                <SelectItem value="400">3+ times per week (good portion)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="fortified" className="font-medium">
                2. Do you consume fortified foods (milk, cereal, orange juice)?
              </Label>
              <InfoTooltip content="Many foods are fortified with vitamin D to help people meet their daily requirements" />
            </div>
            <Select value={fortified} onValueChange={setFortified}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No</SelectItem>
                <SelectItem value="100">1-2 fortified items daily</SelectItem>
                <SelectItem value="200">3+ fortified items daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="otherFoods" className="font-medium">
                3. Egg yolks or mushrooms in your diet?
              </Label>
              <InfoTooltip content="Egg yolks and some mushrooms contain moderate amounts of vitamin D" />
            </div>
            <Select value={otherFoods} onValueChange={setOtherFoods}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Rarely</SelectItem>
                <SelectItem value="50">A few times weekly</SelectItem>
                <SelectItem value="100">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="sun" className="font-medium">
                4. Sun exposure (bare arms/face without sunscreen):
              </Label>
              <InfoTooltip content="Sun exposure is the most natural way to get vitamin D, but balance it with skin cancer risk" />
            </div>
            <Select value={sun} onValueChange={setSun}>
              <SelectTrigger>
                <SelectValue placeholder="Select exposure" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Little to none</SelectItem>
                <SelectItem value="1000">15-30 min, 2-3x/week (summer)</SelectItem>
                <SelectItem value="2000">30+ min, 4+ times/week (summer)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="country" className="font-medium">
                5. Select your region:
              </Label>
              <InfoTooltip content="Your geographic location affects how much vitamin D your skin can produce from sunlight" />
            </div>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1.0">Equatorial (Indonesia, Kenya, Colombia)</SelectItem>
                <SelectItem value="0.8">Tropical (India, Mexico, Nigeria)</SelectItem>
                <SelectItem value="0.6">Subtropical (USA South, Southern Europe)</SelectItem>
                <SelectItem value="0.4">Temperate (USA North, Central Europe)</SelectItem>
                <SelectItem value="0.2">Northern (Canada, UK, Scandinavia)</SelectItem>
                <SelectItem value="0.1">Arctic (Alaska, Northern Russia)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={calculate}
          >
            Calculate My Vitamin D
          </Button>
        </CardFooter>
      </Card>
      
      {resultData && (
        <>
          <ResultCard 
            title={resultData.title}
            details={resultData.details}
            className={resultData.className}
          />
          
          <Alert className="mt-6 bg-blue-50">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
              <AlertDescription className="text-sm">
                <strong>Scientific basis:</strong> Vitamin D content from USDA FoodData Central (2023), sunlight calculations adjusted by latitude per Holick (2007), with recommendations aligned with Endocrine Society (2011) and IOM (2011) guidelines.
              </AlertDescription>
            </div>
          </Alert>
        </>
      )}
    </div>
  );
};

export default VitaminDCalculator;
