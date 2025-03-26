
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Label } from './ui/label';
import DisclaimerAlert from './DisclaimerAlert';
import InfoTooltip from './InfoTooltip';

// Country to latitude effectiveness mapping
const countryLatitudeEffectiveness = {
  "equatorial": 1.0,    // Year-round strong sun
  "tropical": 0.8,      // Strong sun most of year
  "subtropical": 0.6,   // Good sun seasonality
  "temperate": 0.4,     // Limited winter sun
  "northern": 0.2,      // Weak winter sun
  "arctic": 0.1         // Minimal winter sun
};

interface VitaminDResult {
  intake: number;
  recommendation: string;
  foodSuggestions: string;
}

const VitaminDCalculator: React.FC = () => {
  const [fish, setFish] = useState<string>("0");
  const [fortified, setFortified] = useState<string>("0");
  const [otherFoods, setOtherFoods] = useState<string>("0");
  const [sun, setSun] = useState<string>("0");
  const [country, setCountry] = useState<string>("0.6"); // Default to subtropical
  const [result, setResult] = useState<VitaminDResult | null>(null);

  const calculate = () => {
    // Parse all input values
    const fishValue = parseInt(fish);
    const fortifiedValue = parseInt(fortified);
    const otherFoodsValue = parseInt(otherFoods);
    let sunValue = parseInt(sun);
    const latitudeEffect = parseFloat(country);
    
    // Adjust sun exposure by latitude effectiveness
    sunValue = Math.round(sunValue * latitudeEffect);
    
    // Calculate weekly totals
    const weeklyFood = fishValue + (fortifiedValue * 7) + (otherFoodsValue * 7);
    const weeklySun = sunValue * (sunValue > 0 ? parseInt(sun) === 1000 ? 2 : 4 : 0);
    
    // Convert to daily average
    const dailyIU = Math.round((weeklyFood + weeklySun) / 7);
    
    // Determine recommendation and food suggestions
    let recommendation = "";
    let foodSuggestions = "";
    
    if (dailyIU < 800) {
      recommendation = "Consider adding 1,000-2,000 IU of D3 supplements daily";
      foodSuggestions = "Try adding: 2 more fatty fish meals weekly + 15 min sun daily";
    } else if (dailyIU < 2000) {
      recommendation = "You're doing OK but could optimize";
      foodSuggestions = "Try: Adding 1 more fatty fish meal weekly or 10 min extra sun";
    } else {
      recommendation = "Great! You're likely getting enough";
      foodSuggestions = "Maintain your current habits";
    }
    
    // Special winter note for northern latitudes
    if (latitudeEffect <= 0.4 && dailyIU < 2000) {
      recommendation += " (especially in winter)";
      foodSuggestions += " | In winter: Prioritize fatty fish or supplements";
    }
    
    setResult({
      intake: dailyIU,
      recommendation,
      foodSuggestions
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <DisclaimerAlert>
        This calculator provides an estimate of vitamin D intake based on diet and sunlight exposure. 
        Results are approximations and should not replace professional medical advice.
      </DisclaimerAlert>
      
      <Card className="p-6 my-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Vitamin D Intake Calculator</h2>
        <p className="text-center mb-6 text-gray-600">See if you're getting enough Vitamin D from food and sun</p>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="flex items-center">
              1. How often do you eat fatty fish (salmon, mackerel, sardines)?
              <InfoTooltip content="Fatty fish are excellent sources of vitamin D" />
            </Label>
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
            <Label className="flex items-center">
              2. Do you consume fortified foods (milk, cereal, orange juice)?
              <InfoTooltip content="Many foods are fortified with vitamin D" />
            </Label>
            <Select value={fortified} onValueChange={setFortified}>
              <SelectTrigger>
                <SelectValue placeholder="Select consumption" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No</SelectItem>
                <SelectItem value="100">1-2 fortified items daily</SelectItem>
                <SelectItem value="200">3+ fortified items daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="flex items-center">
              3. Egg yolks or mushrooms in your diet?
              <InfoTooltip content="Egg yolks and mushrooms contain small amounts of vitamin D" />
            </Label>
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
            <Label className="flex items-center">
              4. Sun exposure (bare arms/face without sunscreen):
              <InfoTooltip content="Sun exposure helps your body produce vitamin D naturally" />
            </Label>
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
            <Label className="flex items-center">
              5. Select your country:
              <InfoTooltip content="Your latitude affects how much vitamin D you can get from the sun" />
            </Label>
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
          
          <Button onClick={calculate} className="w-full">Calculate My Vitamin D</Button>
        </div>
      </Card>
      
      {result && (
        <Card className="p-6 my-6 bg-blue-50">
          <h3 className="text-xl font-bold mb-4">Your Vitamin D Results</h3>
          <div className="space-y-4">
            <p><strong>Estimated Daily Intake:</strong> {result.intake} IU</p>
            <p><strong>Recommendation:</strong> {result.recommendation}</p>
            <div className="mt-4 text-sm">
              <strong>Diet Tips:</strong> {result.foodSuggestions}
            </div>
          </div>
        </Card>
      )}
      
      <div className="text-xs text-gray-600 mt-6">
        <p><strong>Scientific basis:</strong> Vitamin D content from USDA FoodData Central (2023), sunlight calculations adjusted by latitude per Holick (2007), with recommendations aligned with Endocrine Society (2011) and IOM (2011) guidelines.</p>
      </div>
    </div>
  );
};

export default VitaminDCalculator;
