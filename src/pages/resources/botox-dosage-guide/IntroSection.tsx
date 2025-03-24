
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <p className="text-lg mb-6">
      When it comes to Botox treatments, precision matters—too few units can lead to disappointing results, while too many can create an unnatural "frozen" appearance and unnecessary expense. Understanding appropriate dosage is crucial because each facial area requires different amounts based on muscle size, strength, and treatment goals. This guide explains exactly how much Botox you might need for specific treatment areas, adjusted for factors like age, gender, and muscle strength. For personalized dosage estimates before your next appointment, try our <Link to="/botox-calculator" className="text-primary hover:underline">Botox Dosage Calculator</Link> to get a science-based preview of your potential treatment plan.
    </p>
  );
};

export default IntroSection;
