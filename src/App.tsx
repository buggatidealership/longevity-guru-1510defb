
import { Routes, Route, Navigate } from 'react-router-dom';
import LongevityCalculatorPage from './pages/LongevityCalculatorPage';
import RetirementCalculator from './pages/RetirementCalculator';
import FertilityCalculator from './pages/FertilityCalculator';
import NotFound from './pages/NotFound';
import Index from './pages/Index';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import BreastImplantCalculatorPage from './pages/BreastImplantCalculatorPage';
import GrowthPercentilePage from './pages/GrowthPercentilePage';
import BotoxCalculatorPage from './pages/BotoxCalculatorPage';
import AdultHeightPredictorPage from './pages/AdultHeightPredictorPage';
import MetabolismCalculatorPage from './pages/MetabolismCalculatorPage';
import AlcoholCalculatorPage from './pages/AlcoholCalculatorPage';
import BaldnessRiskCalculatorPage from './pages/BaldnessRiskCalculatorPage';
import TDEECalculatorPage from './pages/TDEECalculatorPage';
import MacronutrientCalculatorPage from './pages/MacronutrientCalculatorPage';
import IdealBodyWeightCalculatorPage from './pages/IdealBodyWeightCalculatorPage';
import VitaminDCalculatorPage from './pages/VitaminDCalculatorPage';
import CreatineWaterCalculatorPage from './pages/CreatineWaterCalculatorPage';
import OzempicWeightLossCalculatorPage from './pages/OzempicWeightLossCalculatorPage';

// Resource pages
import Resources from './pages/resources';
import HowToIncreaseLifeExpectancy from './pages/resources/how-to-increase-life-expectancy';
import HowMuchToSaveForRetirement from './pages/resources/how-much-to-save-for-retirement';
import FertilityAfter35 from './pages/resources/fertility-after-35';
import SaveForRetirementLowIncome from './pages/resources/save-for-retirement-low-income';
import BreastImplantSizeGuide from './pages/resources/breast-implant-size-guide';
import HowToBoostYourMetabolism from './pages/resources/how-to-boost-your-metabolism';
import BotoxDosageGuide from './pages/resources/botox-dosage-guide';
import HowToPredictYourChildsAdultHeight from './pages/resources/how-to-predict-your-childs-adult-height';
import AlcoholAndLongevity from './pages/resources/alcohol-and-longevity';
import AdultHeightPredictionGuide from './pages/resources/adult-height-prediction-guide';
import WillIGoBald from './pages/resources/will-i-go-bald';
import HowToUseYourBMI from './pages/resources/how-to-use-your-bmi';
import HowToCalculateYourTDEE from './pages/resources/how-to-calculate-your-tdee';
import MacronutrientCalculatorGuide from './pages/resources/macronutrient-calculator-guide';
import IdealBodyWeightGuide from './pages/resources/ideal-body-weight-guide';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Calculator Pages */}
        <Route path="/life-expectancy-calculator" element={<LongevityCalculatorPage />} />
        <Route path="/retirement-savings-calculator" element={<RetirementCalculator />} />
        <Route path="/female-fertility-calculator" element={<FertilityCalculator />} />
        <Route path="/growth-percentile-calculator" element={<GrowthPercentilePage />} />
        <Route path="/adult-height-predictor-calculator" element={<AdultHeightPredictorPage />} />
        <Route path="/metabolism-calculator" element={<MetabolismCalculatorPage />} />
        <Route path="/breast-implant-calculator" element={<BreastImplantCalculatorPage />} />
        <Route path="/botox-calculator" element={<BotoxCalculatorPage />} />
        <Route path="/alcohol-impact-calculator" element={<AlcoholCalculatorPage />} />
        <Route path="/baldness-risk-calculator" element={<BaldnessRiskCalculatorPage />} />
        <Route path="/tdee-calculator" element={<TDEECalculatorPage />} />
        <Route path="/macronutrient-calculator" element={<MacronutrientCalculatorPage />} />
        <Route path="/ideal-body-weight-calculator" element={<IdealBodyWeightCalculatorPage />} />
        <Route path="/vitamin-d-calculator" element={<VitaminDCalculatorPage />} />
        <Route path="/creatine-water-calculator" element={<CreatineWaterCalculatorPage />} />
        <Route path="/ozempic-weight-loss-calculator" element={<OzempicWeightLossCalculatorPage />} />
        
        {/* Resource Pages */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/how-to-increase-life-expectancy" element={<HowToIncreaseLifeExpectancy />} />
        <Route path="/resources/how-much-to-save-for-retirement" element={<HowMuchToSaveForRetirement />} />
        <Route path="/resources/fertility-after-35" element={<FertilityAfter35 />} />
        <Route path="/resources/save-for-retirement-low-income" element={<SaveForRetirementLowIncome />} />
        <Route path="/resources/breast-implant-size-guide" element={<BreastImplantSizeGuide />} />
        <Route path="/resources/how-to-boost-your-metabolism" element={<HowToBoostYourMetabolism />} />
        <Route path="/resources/botox-dosage-guide" element={<BotoxDosageGuide />} />
        <Route path="/resources/how-to-predict-your-childs-adult-height" element={<HowToPredictYourChildsAdultHeight />} />
        <Route path="/resources/alcohol-and-longevity" element={<AlcoholAndLongevity />} />
        <Route path="/resources/adult-height-prediction-guide" element={<AdultHeightPredictionGuide />} />
        <Route path="/resources/will-i-go-bald" element={<WillIGoBald />} />
        <Route path="/resources/how-to-use-your-bmi" element={<HowToUseYourBMI />} />
        <Route path="/resources/how-to-calculate-your-tdee" element={<HowToCalculateYourTDEE />} />
        <Route path="/resources/macronutrient-calculator-guide" element={<MacronutrientCalculatorGuide />} />
        <Route path="/resources/ideal-body-weight-guide" element={<IdealBodyWeightGuide />} />
        
        {/* Backward Compatibility Redirects */}
        <Route path="/child-growth-percentile-calculator" element={<Navigate to="/growth-percentile-calculator" replace />} />
        
        {/* Legal Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        
        {/* 404 - Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
