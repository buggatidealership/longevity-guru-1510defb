import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import DisclaimerAlert from './DisclaimerAlert';
import ResultCard from './ResultCard';
import { Slider } from '@/components/ui/slider';
const LongevityCalculator = () => {
  const [age, setAge] = useState(30);
  const [sex, setSex] = useState('male');
  const [race, setRace] = useState('white');
  const [exerciseLevel, setExerciseLevel] = useState(2);
  const [sleepHours, setSleepHours] = useState(7);
  const [smoking, setSmoking] = useState('never');
  const [alcohol, setAlcohol] = useState('moderate');
  const [diet, setDiet] = useState('balanced');
  const [stressLevel, setStressLevel] = useState('moderate');
  const [socialConnections, setSocialConnections] = useState('moderate');
  const [bmi, setBmi] = useState(24);
  const [familyHistory, setFamilyHistory] = useState(false);
  const [education, setEducation] = useState('college');
  const [income, setIncome] = useState('middle');
  const [chronicConditions, setChronicConditions] = useState<string[]>([]);
  const [airQuality, setAirQuality] = useState('moderate');
  const [healthcare, setHealthcare] = useState('regular');
  const [result, setResult] = useState({
    years: 0,
    improvement: "0",
    improvementPercentage: "0",
    baseAge: "0"
  });
  const calculateLifeExpectancy = () => {
    let baseAge = sex === 'male' ? 76.1 : 81.1;
    if (race === 'black') {
      baseAge = sex === 'male' ? 71.8 : 78.3;
    } else if (race === 'hispanic') {
      baseAge = sex === 'male' ? 78.8 : 84.3;
    } else if (race === 'asian') {
      baseAge = sex === 'male' ? 81.7 : 87.2;
    } else if (race === 'native') {
      baseAge = sex === 'male' ? 71.2 : 77.5;
    }
    const exerciseImpact = exerciseLevel * 0.8;
    let sleepImpact = 0;
    if (sleepHours < 6) sleepImpact = -2;else if (sleepHours > 9) sleepImpact = -1;else if (sleepHours >= 7 && sleepHours <= 8) sleepImpact = 1.5;
    let smokingImpact = 0;
    if (smoking === 'current') smokingImpact = -10;else if (smoking === 'former') smokingImpact = -3;
    let alcoholImpact = 0;
    if (alcohol === 'heavy') alcoholImpact = -5;else if (alcohol === 'none') alcoholImpact = -0.5;
    let dietImpact = 0;
    if (diet === 'poor') dietImpact = -3;else if (diet === 'excellent') dietImpact = 3;
    let stressImpact = 0;
    if (stressLevel === 'high') stressImpact = -2.5;else if (stressLevel === 'low') stressImpact = 1.5;
    let socialImpact = 0;
    if (socialConnections === 'strong') socialImpact = 2;else if (socialConnections === 'weak') socialImpact = -2;
    let bmiImpact = 0;
    if (bmi < 18.5) bmiImpact = -2;else if (bmi >= 18.5 && bmi < 25) bmiImpact = 1;else if (bmi >= 25 && bmi < 30) bmiImpact = -1;else if (bmi >= 30) bmiImpact = -3.5;
    const geneticImpact = familyHistory ? 2 : 0;
    let educationImpact = 0;
    if (education === 'less_than_high_school') educationImpact = -2.5;else if (education === 'high_school') educationImpact = -1;else if (education === 'graduate') educationImpact = 1.5;
    let incomeImpact = 0;
    if (income === 'low') incomeImpact = -2;else if (income === 'high') incomeImpact = 1.5;
    const chronicImpact = -1.5 * chronicConditions.length;
    let airQualityImpact = 0;
    if (airQuality === 'poor') airQualityImpact = -1.5;else if (airQuality === 'good') airQualityImpact = 0.5;
    let healthcareImpact = 0;
    if (healthcare === 'limited') healthcareImpact = -2;else if (healthcare === 'preventive') healthcareImpact = 1.5;
    const totalImpact = exerciseImpact + sleepImpact + smokingImpact + alcoholImpact + dietImpact + stressImpact + socialImpact + bmiImpact + geneticImpact + educationImpact + incomeImpact + chronicImpact + airQualityImpact + healthcareImpact;
    const lifeExpectancy = baseAge + totalImpact;
    const improvementPercentage = (totalImpact / baseAge * 100).toFixed(1);
    return {
      years: Math.round(lifeExpectancy * 10) / 10,
      improvement: totalImpact.toFixed(1),
      improvementPercentage: improvementPercentage,
      baseAge: baseAge.toFixed(1)
    };
  };
  const handleChronicConditionChange = (condition: string) => {
    if (chronicConditions.includes(condition)) {
      setChronicConditions(chronicConditions.filter(c => c !== condition));
    } else {
      setChronicConditions([...chronicConditions, condition]);
    }
  };
  useEffect(() => {
    setResult(calculateLifeExpectancy());
  }, [age, sex, race, exerciseLevel, sleepHours, smoking, alcohol, diet, stressLevel, socialConnections, bmi, familyHistory, education, income, chronicConditions, airQuality, healthcare]);
  const Label = ({
    htmlFor,
    children
  }: {
    htmlFor: string;
    children: React.ReactNode;
  }) => <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>;
  const Select = ({
    id,
    value,
    onChange,
    options
  }: {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: {
      value: string;
      label: string;
    }[];
  }) => <select id={id} value={value} onChange={onChange} className="w-full p-3 border border-gray-200 rounded-xl bg-white bg-opacity-50 backdrop-blur-xs shadow-sm input-focus-ring">
      {options.map(option => <option key={option.value} value={option.value}>
          {option.label}
        </option>)}
    </select>;
  return <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl font-display font-bold tracking-tight">Free Life Expectancy Calculator</h1>
        <p className="text-muted-foreground">Explore how different factors might influence your lifespan</p>
      </div>
      
      <DisclaimerAlert className="max-w-3xl mx-auto" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 lg:col-span-2 space-y-8">
          <div className="glass-panel p-6 animate-fadeIn" style={{
          animationDelay: '0.1s'
        }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <span className="chip">Personal Factors</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <input id="age" type="number" min="18" max="100" value={age} onChange={e => setAge(parseInt(e.target.value || "30"))} className="w-full p-3 border border-gray-200 rounded-xl bg-white bg-opacity-50 backdrop-blur-xs shadow-sm input-focus-ring" />
                  </div>
                  
                  <div>
                    <Label htmlFor="sex">Sex</Label>
                    <Select id="sex" value={sex} onChange={e => setSex(e.target.value)} options={[{
                    value: 'male',
                    label: 'Male'
                  }, {
                    value: 'female',
                    label: 'Female'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="race">Race/Ethnicity</Label>
                    <Select id="race" value={race} onChange={e => setRace(e.target.value)} options={[{
                    value: 'white',
                    label: 'White'
                  }, {
                    value: 'black',
                    label: 'Black/African American'
                  }, {
                    value: 'hispanic',
                    label: 'Hispanic/Latino'
                  }, {
                    value: 'asian',
                    label: 'Asian'
                  }, {
                    value: 'native',
                    label: 'Native American/Alaska Native'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="bmi">BMI</Label>
                    <input id="bmi" type="number" min="12" max="50" step="0.1" value={bmi} onChange={e => setBmi(parseFloat(e.target.value || "24"))} className="w-full p-3 border border-gray-200 rounded-xl bg-white bg-opacity-50 backdrop-blur-xs shadow-sm input-focus-ring" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal weight" : bmi < 30 ? "Overweight" : "Obese"}
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" checked={familyHistory} onChange={e => setFamilyHistory(e.target.checked)} className="rounded border-gray-300 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50 focus:ring-offset-0" />
                      <span className="text-sm font-medium text-gray-700">Family history of longevity</span>
                    </label>
                    <div className="text-xs text-muted-foreground mt-1 ml-6">
                      Do close relatives live(d) beyond 90?
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="education">Education Level</Label>
                    <Select id="education" value={education} onChange={e => setEducation(e.target.value)} options={[{
                    value: 'less_than_high_school',
                    label: 'Less than high school'
                  }, {
                    value: 'high_school',
                    label: 'High school'
                  }, {
                    value: 'college',
                    label: 'College degree'
                  }, {
                    value: 'graduate',
                    label: 'Graduate degree'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="income">Income Level</Label>
                    <Select id="income" value={income} onChange={e => setIncome(e.target.value)} options={[{
                    value: 'low',
                    label: 'Low income'
                  }, {
                    value: 'middle',
                    label: 'Middle income'
                  }, {
                    value: 'high',
                    label: 'High income'
                  }]} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="chip">Health & Conditions</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="airQuality">Air Quality</Label>
                    <Select id="airQuality" value={airQuality} onChange={e => setAirQuality(e.target.value)} options={[{
                    value: 'poor',
                    label: 'Poor'
                  }, {
                    value: 'moderate',
                    label: 'Moderate'
                  }, {
                    value: 'good',
                    label: 'Good'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="healthcare">Healthcare Access</Label>
                    <Select id="healthcare" value={healthcare} onChange={e => setHealthcare(e.target.value)} options={[{
                    value: 'limited',
                    label: 'Limited'
                  }, {
                    value: 'regular',
                    label: 'Regular'
                  }, {
                    value: 'preventive',
                    label: 'Preventive/Comprehensive'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="chronic">Chronic Conditions</Label>
                    <div className="mt-1 space-y-2 bg-white bg-opacity-50 p-3 rounded-xl border border-gray-200">
                      {[{
                      id: 'diabetes',
                      label: 'Diabetes'
                    }, {
                      id: 'heart_disease',
                      label: 'Heart disease'
                    }, {
                      id: 'cancer',
                      label: 'Cancer history'
                    }, {
                      id: 'hypertension',
                      label: 'Hypertension'
                    }, {
                      id: 'kidney_disease',
                      label: 'Kidney disease'
                    }].map(condition => <label key={condition.id} className="flex items-center cursor-pointer">
                          <input type="checkbox" checked={chronicConditions.includes(condition.id)} onChange={() => handleChronicConditionChange(condition.id)} className="rounded border-gray-300 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50 focus:ring-offset-0" />
                          <span className="ml-2 text-sm">{condition.label}</span>
                        </label>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 animate-fadeIn" style={{
          animationDelay: '0.2s'
        }}>
            <div className="space-y-6">
              <div>
                <span className="chip">Lifestyle Factors</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="exerciseLevel">Exercise (days per week)</Label>
                    <div className="py-4">
                      <Slider id="exerciseLevel" min={0} max={7} step={1} value={[exerciseLevel]} onValueChange={value => setExerciseLevel(value[0])} className="w-full" />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0</span>
                      <span>{exerciseLevel} days/week</span>
                      <span>7</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="sleepHours">Sleep (hours per night)</Label>
                    <div className="py-4">
                      <Slider id="sleepHours" min={4} max={12} step={0.5} value={[sleepHours]} onValueChange={value => setSleepHours(value[0])} className="w-full" />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>4</span>
                      <span>{sleepHours} hours</span>
                      <span>12</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="smoking">Smoking Status</Label>
                    <Select id="smoking" value={smoking} onChange={e => setSmoking(e.target.value)} options={[{
                    value: 'never',
                    label: 'Never smoked'
                  }, {
                    value: 'former',
                    label: 'Former smoker'
                  }, {
                    value: 'current',
                    label: 'Current smoker'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="alcohol">Alcohol Consumption</Label>
                    <Select id="alcohol" value={alcohol} onChange={e => setAlcohol(e.target.value)} options={[{
                    value: 'none',
                    label: 'None'
                  }, {
                    value: 'moderate',
                    label: 'Moderate'
                  }, {
                    value: 'heavy',
                    label: 'Heavy'
                  }]} />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="diet">Diet Quality</Label>
                    <Select id="diet" value={diet} onChange={e => setDiet(e.target.value)} options={[{
                    value: 'poor',
                    label: 'Poor'
                  }, {
                    value: 'balanced',
                    label: 'Balanced'
                  }, {
                    value: 'excellent',
                    label: 'Excellent'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="stressLevel">Stress Level</Label>
                    <Select id="stressLevel" value={stressLevel} onChange={e => setStressLevel(e.target.value)} options={[{
                    value: 'low',
                    label: 'Low'
                  }, {
                    value: 'moderate',
                    label: 'Moderate'
                  }, {
                    value: 'high',
                    label: 'High'
                  }]} />
                  </div>
                  
                  <div>
                    <Label htmlFor="socialConnections">Social Connections</Label>
                    <Select id="socialConnections" value={socialConnections} onChange={e => setSocialConnections(e.target.value)} options={[{
                    value: 'weak',
                    label: 'Weak'
                  }, {
                    value: 'moderate',
                    label: 'Moderate'
                  }, {
                    value: 'strong',
                    label: 'Strong'
                  }]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="sticky top-8 space-y-6">
            <ResultCard years={result.years} baseAge={result.baseAge} improvement={result.improvement} improvementPercentage={result.improvementPercentage} />
            
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl border border-gray-100 p-4 text-sm text-muted-foreground animate-fadeIn" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="font-medium text-foreground mb-2">About This Tool</h3>
              <div className="space-y-2">
                <p>Wondering how long you have left to live? Our Lifespan Calculator provides a personalized estimate of your life expectancy based on factors like age, gender, health habits, and lifestyle choices. Whether you're asking "When will I die?" or "How long do I have to live?", this Longevity Calculator helps you understand how your choices impact your future. Start now to see how simple changes can add years to your life!</p>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default LongevityCalculator;