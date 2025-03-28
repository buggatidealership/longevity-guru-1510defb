
import React, { useState } from 'react';
import { createCalculatorSEOProps } from '@/utils/canonical-utils';
import SEOHead from '@/components/SEOHead';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/utils/schema-utils';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Info } from 'lucide-react';
import InfoTooltip from '@/components/InfoTooltip';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import FooterWithCollapsibleLinks from '@/components/FooterWithCollapsibleLinks';
import { AdUnit } from '@/components/AdUnit';
import { useNavigate } from 'react-router-dom';

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
type Goal = 'muscle-gain' | 'fat-loss' | 'maintenance';
type Units = 'metric' | 'imperial';
type Gender = 'male' | 'female';

const IdealProteinIntakeCalculatorPage: React.FC = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [gender, setGender] = useState<Gender>('male');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintenance');
  const [units, setUnits] = useState<Units>('metric');
  const [result, setResult] = useState<number | null>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  // Convert imperial to metric for calculations
  const getMetricWeight = (): number => {
    return units === 'imperial' ? weight * 0.453592 : weight; // lbs to kg
  };

  const getMetricHeight = (): number => {
    return units === 'imperial' ? height * 2.54 : height; // inches to cm
  };

  // Calculate BMR using Mifflin-St Jeor equation
  const calculateBMR = (): number => {
    const weightKg = getMetricWeight();
    const heightCm = getMetricHeight();
    
    if (gender === 'male') {
      return (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
      return (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
  };

  // Calculate daily protein needs
  const calculateProteinNeeds = (): number => {
    const weightKg = getMetricWeight();
    let proteinMultiplier = 0;
    
    // Base multiplier by activity level
    switch (activityLevel) {
      case 'sedentary':
        proteinMultiplier = 0.8; // g/kg for sedentary
        break;
      case 'light':
        proteinMultiplier = 1.0; // g/kg for lightly active
        break;
      case 'moderate':
        proteinMultiplier = 1.2; // g/kg for moderately active
        break;
      case 'active':
        proteinMultiplier = 1.4; // g/kg for active
        break;
      case 'very-active':
        proteinMultiplier = 1.6; // g/kg for very active
        break;
    }
    
    // Adjust multiplier based on goal
    switch (goal) {
      case 'muscle-gain':
        proteinMultiplier += 0.4; // Additional protein for muscle building
        break;
      case 'fat-loss':
        proteinMultiplier += 0.2; // Slightly more protein for fat loss
        break;
      case 'maintenance':
        // No adjustment needed
        break;
    }
    
    // Further adjust based on age (older adults need more protein)
    if (age > 65) {
      proteinMultiplier += 0.2;
    }
    
    // Calculate and round to nearest whole number
    return Math.round(weightKg * proteinMultiplier);
  };

  const handleCalculate = () => {
    const proteinNeeds = calculateProteinNeeds();
    setResult(proteinNeeds);
    setHasCalculated(true);
    
    // Log for tracking
    console.log('Calculation performed:', {
      age,
      weight: getMetricWeight(),
      height: getMetricHeight(),
      gender,
      activityLevel,
      goal,
      result: proteinNeeds
    });
  };

  const getGoalText = (): string => {
    switch (goal) {
      case 'muscle-gain':
        return 'build muscle';
      case 'fat-loss':
        return 'lose fat';
      case 'maintenance':
        return 'maintain health';
      default:
        return 'achieve your goals';
    }
  };

  const getActivityText = (): string => {
    switch (activityLevel) {
      case 'sedentary':
        return 'sedentary lifestyle';
      case 'light':
        return 'lightly active lifestyle';
      case 'moderate':
        return 'moderately active lifestyle';
      case 'active':
        return 'active lifestyle';
      case 'very-active':
        return 'very active lifestyle';
      default:
        return 'activity level';
    }
  };

  // Schema markup for the calculator
  const schemas = [
    generateWebPageSchema(
      "Ideal Protein Intake Calculator – Optimize Your Daily Protein Needs",
      "Calculate your optimal daily protein intake based on your age, body metrics, and goals. Ideal for muscle gain, weight loss, or overall health.",
      "ideal-protein-intake-calculator"
    ),
    generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Calculators', path: '/' },
      { name: 'Ideal Protein Intake Calculator', path: '/ideal-protein-intake-calculator' }
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Ideal Protein Intake Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Calculate your optimal daily protein intake based on your age, body metrics, and goals. Ideal for muscle gain, weight loss, or overall health."
    },
    generateFAQSchema([
      {
        question: "How much protein do I need per day?",
        answer: "Protein needs vary based on factors like weight, activity level, and goals. Generally, active individuals need 1.2-2.0g of protein per kg of body weight daily, while sedentary people may need 0.8g/kg. Our calculator provides personalized recommendations."
      },
      {
        question: "Should I eat more protein to build muscle?",
        answer: "Yes, when your goal is to build muscle, increasing protein intake supports muscle protein synthesis. For muscle growth, aim for 1.6-2.2g of protein per kg of body weight daily, combined with strength training."
      },
      {
        question: "Is higher protein intake good for weight loss?",
        answer: "Yes, a higher protein intake (1.2-1.6g/kg) during weight loss helps preserve lean muscle mass while promoting fat loss. Protein increases satiety, helping you feel fuller longer and potentially reducing overall calorie intake."
      },
      {
        question: "How accurate is this protein calculator?",
        answer: "Our calculator uses established formulas based on body weight, activity level, age, and goals to provide research-backed recommendations. However, individual needs may vary based on genetics, medical conditions, and specific training regimens."
      },
      {
        question: "Can I eat too much protein?",
        answer: "For healthy individuals with normal kidney function, consuming higher protein levels (up to 2.2g/kg/day) appears safe. However, those with kidney disease should consult with healthcare providers before significantly increasing protein intake."
      }
    ])
  ];

  // SEO props
  const seoProps = createCalculatorSEOProps(
    "Ideal Protein Intake Calculator",
    "Calculate your optimal daily protein intake based on your age, body metrics, and goals. Ideal for muscle gain, weight loss, or overall health.",
    "ideal-protein-intake-calculator"
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* SEO Head */}
      <SEOHead 
        title={seoProps.title}
        description={seoProps.description}
        canonicalUrl={seoProps.canonicalUrl}
        keywords="protein calculator, protein intake, daily protein needs, muscle building protein, protein for weight loss, nutrition calculator"
        ogType="website"
        ogImage="https://longevitycalculator.xyz/protein-calculator-og.png"
        schemas={schemas}
      />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Top AdSense Placement */}
        <div className="mb-6">
          <AdUnit adSlot="ideal-protein-calculator-top" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Ideal Protein Intake Calculator
        </h1>
        
        <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
          Calculate your optimal daily protein intake based on your age, body metrics, and goals.
          Perfect for muscle gain, weight loss, or maintaining overall health.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Calculate Your Ideal Protein Intake</CardTitle>
                <CardDescription>
                  Enter your details to get a personalized protein recommendation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="metric" value={units} onValueChange={(value) => setUnits(value as Units)} className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="metric">Metric (kg/cm)</TabsTrigger>
                    <TabsTrigger value="imperial">Imperial (lb/in)</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="age" className="mb-2 block">
                      Age (years)
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      min="18"
                      max="120"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      placeholder="Enter your age"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="gender" className="mb-2 block">
                      Gender
                    </Label>
                    <Select value={gender} onValueChange={(value) => setGender(value as Gender)}>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="weight" className="mb-2 block">
                      Weight ({units === 'metric' ? 'kg' : 'lbs'})
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      min="30"
                      max={units === 'metric' ? '250' : '550'}
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      placeholder={`Enter weight in ${units === 'metric' ? 'kg' : 'lbs'}`}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="height" className="mb-2 block">
                      Height ({units === 'metric' ? 'cm' : 'inches'})
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      min={units === 'metric' ? '120' : '48'}
                      max={units === 'metric' ? '250' : '96'}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      placeholder={`Enter height in ${units === 'metric' ? 'cm' : 'inches'}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Label htmlFor="activity" className="block">
                        Activity Level
                      </Label>
                      <InfoTooltip content="How active are you on a daily basis? This affects your protein requirements." />
                    </div>
                    <Select value={activityLevel} onValueChange={(value) => setActivityLevel(value as ActivityLevel)}>
                      <SelectTrigger id="activity">
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                        <SelectItem value="light">Lightly Active (1-2 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderately Active (3-5 days/week)</SelectItem>
                        <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                        <SelectItem value="very-active">Very Active (twice daily)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Label htmlFor="goal" className="block">
                        Primary Goal
                      </Label>
                      <InfoTooltip content="Your goal affects how much protein is optimal for your needs." />
                    </div>
                    <Select value={goal} onValueChange={(value) => setGoal(value as Goal)}>
                      <SelectTrigger id="goal">
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="muscle-gain">Build Muscle</SelectItem>
                        <SelectItem value="fat-loss">Lose Fat</SelectItem>
                        <SelectItem value="maintenance">Maintain Health</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  onClick={handleCalculate}
                  size="lg"
                >
                  Calculate Protein Needs
                </Button>
              </CardContent>
            </Card>

            {/* Results Card */}
            {hasCalculated && result !== null && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl">Your Ideal Protein Intake</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-primary">{result}</span>
                    <span className="text-xl ml-2">grams per day</span>
                  </div>
                  
                  <p className="mb-4">
                    Based on your inputs, we recommend consuming approximately <strong>{result} grams</strong> of 
                    protein daily to support your goal to {getGoalText()} with your {getActivityText()}.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-blue-600" />
                      Recommendation Details
                    </h3>
                    <p className="text-sm">
                      For a {age}-year-old {gender} weighing {units === 'metric' ? weight : Math.round(weight * 0.453592)} kg 
                      with a {getActivityText()}, this protein intake is designed to optimally support your goal 
                      to {getGoalText()}. Spread your protein intake across multiple meals throughout the day for 
                      best results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About Protein Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Protein is essential for building and repairing tissues, making enzymes and hormones, 
                    and supporting overall health. Your protein needs depend on many factors, including:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Body weight and composition</li>
                    <li>Activity level and exercise type</li>
                    <li>Age and gender</li>
                    <li>Health goals (muscle gain, fat loss, general health)</li>
                  </ul>
                  
                  <p>
                    Our calculator provides personalized recommendations based on scientific research to help
                    you optimize your nutrition for your specific goals.
                  </p>
                  
                  <div className="py-3">
                    <h3 className="font-semibold mb-2">Related Resources:</h3>
                    <ul className="space-y-2">
                      <li>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-800"
                          onClick={() => navigate('/resources/macronutrient-calculator-guide')}
                        >
                          Macronutrients Guide
                        </Button>
                      </li>
                      <li>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-800"
                          onClick={() => navigate('/macronutrient-calculator')}
                        >
                          Macronutrient Calculator
                        </Button>
                      </li>
                      <li>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-blue-600 hover:text-blue-800"
                          onClick={() => navigate('/tdee-calculator')}
                        >
                          TDEE Calculator
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* In-content AdSense Placement */}
            <div className="mt-6">
              <AdUnit adSlot="ideal-protein-calculator-sidebar" />
            </div>
          </div>
        </div>
        
        {/* Middle AdSense Placement */}
        <div className="my-8">
          <AdUnit adSlot="ideal-protein-calculator-middle" />
        </div>
        
        {/* Educational Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Understanding Protein Needs</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Why Protein Matters</h3>
              <p>
                Protein is a crucial macronutrient involved in nearly all bodily functions. It provides the building 
                blocks (amino acids) necessary for muscle growth and repair, enzyme and hormone production, immune 
                function, and more. Getting adequate protein is essential for overall health, but optimal intake 
                varies widely based on individual factors.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Protein for Different Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Muscle Building</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Higher protein intake (1.6-2.2g/kg) supports muscle protein synthesis and growth when 
                      combined with resistance training. Timing protein around workouts can enhance results.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Fat Loss</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Increased protein (1.2-1.6g/kg) helps preserve lean muscle mass during calorie restriction 
                      and boosts satiety, potentially reducing overall calorie intake.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">General Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Moderate protein intake (0.8-1.2g/kg) supports basic bodily functions and health maintenance, 
                      with higher needs for active individuals and older adults.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Protein Quality Matters</h3>
              <p>
                Not all protein sources are equal. Complete proteins contain all nine essential amino acids and are 
                primarily found in animal products (meat, dairy, eggs) and some plant sources like soy and quinoa. 
                Combining various plant proteins can help vegetarians and vegans meet their amino acid needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Timing Your Protein Intake</h3>
              <p>
                Distributing protein intake evenly throughout the day (20-40g per meal) appears more beneficial for 
                muscle protein synthesis than consuming the same amount in fewer, larger servings. For active individuals, 
                consuming protein within a couple of hours after exercise may help optimize recovery and adaptation.
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">How much protein do I need per day?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Protein needs vary based on factors like weight, activity level, and goals. Generally, active 
                  individuals need 1.2-2.0g of protein per kg of body weight daily, while sedentary people may 
                  need 0.8g/kg. Our calculator provides personalized recommendations based on your specific profile.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Should I eat more protein to build muscle?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, when your goal is to build muscle, increasing protein intake supports muscle protein synthesis. 
                  For muscle growth, aim for 1.6-2.2g of protein per kg of body weight daily, combined with strength 
                  training. Consuming protein around your workout windows can be particularly beneficial.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Is higher protein intake good for weight loss?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, a higher protein intake (1.2-1.6g/kg) during weight loss helps preserve lean muscle mass while 
                  promoting fat loss. Protein increases satiety, helping you feel fuller longer and potentially reducing 
                  overall calorie intake. It also has a higher thermic effect than other macronutrients, slightly 
                  increasing calorie burn.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">How accurate is this protein calculator?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our calculator uses established formulas based on body weight, activity level, age, and goals to 
                  provide research-backed recommendations. However, individual needs may vary based on genetics, 
                  medical conditions, and specific training regimens. Use our calculator as a starting point and 
                  adjust based on your personal results and feelings.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Can I eat too much protein?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  For healthy individuals with normal kidney function, consuming higher protein levels (up to 
                  2.2g/kg/day) appears safe. However, those with kidney disease should consult with healthcare 
                  providers before significantly increasing protein intake. Very high protein diets may displace 
                  other important nutrients if not properly balanced.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Disclaimer */}
        <DisclaimerAlert className="mb-8">
          This calculator provides estimates based on general formulas and should not replace professional 
          medical or nutritional advice. Individual protein needs may vary based on specific health conditions, 
          medications, and other factors not accounted for in this calculator.
        </DisclaimerAlert>
        
        {/* Bottom AdSense Placement */}
        <div className="mt-10 mb-8">
          <AdUnit adSlot="ideal-protein-calculator-bottom" />
        </div>
      </main>

      {/* Footer */}
      <FooterWithCollapsibleLinks />
    </div>
  );
};

export default IdealProteinIntakeCalculatorPage;
