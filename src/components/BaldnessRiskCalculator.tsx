
import React, { useState } from 'react';

const BaldnessRiskCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [familyHistory, setFamilyHistory] = useState({
    father: 'no',
    maternalGrandfather: 'no',
    paternalGrandfather: 'no',
    maternalUncles: 'no',
    paternalUncles: 'no'
  });
  const [earlyBaldnessAge, setEarlyBaldnessAge] = useState('');
  const [hairThinning, setHairThinning] = useState('none');
  const [recedingHairline, setRecedingHairline] = useState('no');
  const [crownThinning, setCrownThinning] = useState('no');
  const [hormoneIssues, setHormoneIssues] = useState('no');
  const [stressLevel, setStressLevel] = useState('low');
  const [diet, setDiet] = useState('balanced');
  
  const [result, setResult] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  // Handle early baldness age input with validation
  const handleEarlyBaldnessAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only accept positive numbers or empty string
    if (value === '' || (parseInt(value) >= 0 && !isNaN(parseInt(value)))) {
      setEarlyBaldnessAge(value);
    }
  };

  const calculateRisk = () => {
    // Base score starts at 0
    let score = 0;
    let maxScore = 100;
    
    // Age factor (younger onset indicates higher genetic predisposition)
    const numericAge = parseInt(age) || 0;
    if (numericAge < 25) score += 15;
    else if (numericAge < 35) score += 10;
    else if (numericAge < 45) score += 5;
    
    // Gender factor
    if (gender === 'male') score += 15;
    
    // Family history (genetic factors)
    if (familyHistory.father === 'yes') score += 15;
    if (familyHistory.maternalGrandfather === 'yes') score += 10;
    if (familyHistory.paternalGrandfather === 'yes') score += 8;
    if (familyHistory.maternalUncles === 'yes') score += 7;
    if (familyHistory.paternalUncles === 'yes') score += 5;
    
    // Current hair conditions
    if (hairThinning === 'significant') score += 15;
    else if (hairThinning === 'moderate') score += 10;
    else if (hairThinning === 'slight') score += 5;
    
    if (recedingHairline === 'yes') score += 10;
    if (crownThinning === 'yes') score += 10;
    
    // Health factors
    if (hormoneIssues === 'yes') score += 5;
    if (stressLevel === 'high') score += 5;
    else if (stressLevel === 'medium') score += 3;
    
    if (diet === 'poor') score += 5;
    
    // Ensure score doesn't exceed maximum
    score = Math.min(score, maxScore);
    
    // Calculate risk category
    let riskCategory = '';
    let recommendations: string[] = [];
    
    if (score < 20) {
      riskCategory = 'Low Risk';
      recommendations = [
        'Maintain a healthy diet rich in vitamins and minerals',
        'Regular check of hair density during annual health exams',
        'Minimize harsh hairstyling practices'
      ];
    } else if (score < 40) {
      riskCategory = 'Moderate Risk';
      recommendations = [
        'Consider regular photos to monitor any changes',
        'Ensure diet includes adequate protein and iron',
        'Discuss early intervention options with a dermatologist',
        'Reduce heat styling and chemical treatments'
      ];
    } else if (score < 60) {
      riskCategory = 'Elevated Risk';
      recommendations = [
        'Consult with a dermatologist or trichologist',
        'Consider minoxidil as a preventive measure',
        'Monitor DHT levels through blood tests',
        'Avoid high-stress situations when possible',
        'Ensure adequate sleep and nutrition'
      ];
    } else {
      riskCategory = 'High Risk';
      recommendations = [
        'Immediate consultation with a dermatologist specializing in hair loss',
        'Consider prescription treatments like finasteride (if male)',
        'Explore PRP or other emerging treatments',
        'Monitor progression with regular photos and dermatologist visits',
        'Consider planning for potential lifestyle adaptations'
      ];
    }
    
    // Calculate estimated age of extreme baldness
    let extremeBaldnessAge = calculateExtremeBaldnessAge(score);
    
    setResult({
      score,
      riskCategory,
      recommendations,
      extremeBaldnessAge
    });
    
    setShowResults(true);
  };
  
  const calculateExtremeBaldnessAge = (riskScore: number) => {
    // Base calculations
    const currentAge = parseInt(age) || 30; // Default to 30 if not provided
    
    // Base factor for prediction (higher risk = faster progression)
    let timeToExtremeBaldness;
    
    // Current symptoms indicate we're already partway through the progression
    let currentProgressionFactor = 0;
    if (hairThinning === 'slight') currentProgressionFactor = 0.15;
    else if (hairThinning === 'moderate') currentProgressionFactor = 0.3;
    else if (hairThinning === 'significant') currentProgressionFactor = 0.5;
    
    if (recedingHairline === 'yes') currentProgressionFactor += 0.1;
    if (crownThinning === 'yes') currentProgressionFactor += 0.1;
    
    // Family history data - if relatives went bald early, likely you will too
    let geneticSpeedFactor = 1.0;
    const earliestBaldnessAge = parseInt(earlyBaldnessAge) || 0;
    
    if (earliestBaldnessAge > 0) {
      // Direct data from family member
      if (earliestBaldnessAge < 30) geneticSpeedFactor = 1.4;
      else if (earliestBaldnessAge < 40) geneticSpeedFactor = 1.2;
      else if (earliestBaldnessAge < 50) geneticSpeedFactor = 1.0;
      else geneticSpeedFactor = 0.8;
    } else {
      // No direct age data, use risk score as proxy
      if (riskScore > 70) geneticSpeedFactor = 1.3;
      else if (riskScore > 50) geneticSpeedFactor = 1.1;
    }
    
    // Base timeline adjusted by risk score
    if (riskScore < 20) {
      timeToExtremeBaldness = 45; // Very slow progression or may never happen
    } else if (riskScore < 40) {
      timeToExtremeBaldness = 35;
    } else if (riskScore < 60) {
      timeToExtremeBaldness = 25;
    } else {
      timeToExtremeBaldness = 15; // Fast progression
    }
    
    // Adjust for current progression
    timeToExtremeBaldness *= (1 - currentProgressionFactor);
    
    // Adjust for genetic speed
    timeToExtremeBaldness /= geneticSpeedFactor;
    
    // Calculate final age
    let predictedAge = Math.round(currentAge + timeToExtremeBaldness);
    
    // Cap the maximum age at 95 (realistic lifespan)
    predictedAge = Math.min(predictedAge, 95);
    
    // If already having significant symptoms and high risk, minimum is current age + 5
    if (currentProgressionFactor > 0.4 && riskScore > 60) {
      predictedAge = Math.max(predictedAge, currentAge + 5);
    }
    
    // If the person is already older with no symptoms, prediction should be higher
    if (currentAge > 50 && currentProgressionFactor < 0.2 && predictedAge < 65) {
      predictedAge = Math.max(65, predictedAge);
    }
    
    return predictedAge;
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Baldness Risk Calculator</h2>
      <p className="mb-4 text-sm text-gray-600">Based on scientific research factors including genetics, current symptoms, and lifestyle factors. This tool provides an estimate only and is not a medical diagnosis.</p>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Age</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          min="0"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Gender</label>
        <select
          className="w-full p-2 border rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Family History of Baldness</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm mb-1">Father is/was bald</label>
            <select
              className="w-full p-2 border rounded"
              value={familyHistory.father}
              onChange={(e) => setFamilyHistory({...familyHistory, father: e.target.value})}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Maternal grandfather</label>
            <select
              className="w-full p-2 border rounded"
              value={familyHistory.maternalGrandfather}
              onChange={(e) => setFamilyHistory({...familyHistory, maternalGrandfather: e.target.value})}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Paternal grandfather</label>
            <select
              className="w-full p-2 border rounded"
              value={familyHistory.paternalGrandfather}
              onChange={(e) => setFamilyHistory({...familyHistory, paternalGrandfather: e.target.value})}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Maternal uncles</label>
            <select
              className="w-full p-2 border rounded"
              value={familyHistory.maternalUncles}
              onChange={(e) => setFamilyHistory({...familyHistory, maternalUncles: e.target.value})}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Age Earliest Relative Went Bald (if known)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={earlyBaldnessAge}
          onChange={handleEarlyBaldnessAgeChange}
          placeholder="Optional - Age when earliest family member went bald"
          min="0"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Current Hair Condition</label>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block text-sm mb-1">Hair thinning</label>
            <select
              className="w-full p-2 border rounded"
              value={hairThinning}
              onChange={(e) => setHairThinning(e.target.value)}
            >
              <option value="none">None</option>
              <option value="slight">Slight</option>
              <option value="moderate">Moderate</option>
              <option value="significant">Significant</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Receding hairline</label>
            <select
              className="w-full p-2 border rounded"
              value={recedingHairline}
              onChange={(e) => setRecedingHairline(e.target.value)}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Crown thinning</label>
            <select
              className="w-full p-2 border rounded"
              value={crownThinning}
              onChange={(e) => setCrownThinning(e.target.value)}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Health Factors</label>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block text-sm mb-1">Hormonal issues (thyroid, PCOS, etc.)</label>
            <select
              className="w-full p-2 border rounded"
              value={hormoneIssues}
              onChange={(e) => setHormoneIssues(e.target.value)}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Stress level</label>
            <select
              className="w-full p-2 border rounded"
              value={stressLevel}
              onChange={(e) => setStressLevel(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm mb-1">Diet quality</label>
            <select
              className="w-full p-2 border rounded"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
            >
              <option value="balanced">Balanced/Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          onClick={calculateRisk}
        >
          Calculate Risk
        </button>
      </div>
      
      {showResults && result && (
        <div className="mt-8 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-bold mb-2">Your Results</h3>
          <div className="mb-3">
            <p className="text-sm text-gray-600">Risk Score:</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  result.score < 20 ? 'bg-green-600' : 
                  result.score < 40 ? 'bg-yellow-400' : 
                  result.score < 60 ? 'bg-orange-500' : 'bg-red-600'
                }`}
                style={{width: `${result.score}%`}}
              ></div>
            </div>
            <p className="mt-1"><strong>{result.score}%</strong> - {result.riskCategory}</p>
          </div>
          
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
            <h4 className="font-bold text-blue-800">Baldness Prediction</h4>
            <p className="text-blue-800">
              Based on your risk factors, you may experience extreme baldness by approximately <strong>age {result.extremeBaldnessAge}</strong>.
            </p>
            <p className="text-xs mt-1 text-blue-600">
              This is an estimate based on current progression, family history, and risk factors.
            </p>
          </div>
          
          <div>
            <p className="font-medium mb-2">Recommendations:</p>
            <ul className="list-disc pl-5 space-y-1">
              {result.recommendations.map((rec: string, index: number) => (
                <li key={index} className="text-sm">{rec}</li>
              ))}
            </ul>
          </div>
          
          <p className="mt-4 text-xs text-gray-500">Note: This calculator provides estimates based on known risk factors. For a definitive assessment, please consult with a dermatologist or trichologist.</p>
        </div>
      )}
    </div>
  );
};

export default BaldnessRiskCalculator;
