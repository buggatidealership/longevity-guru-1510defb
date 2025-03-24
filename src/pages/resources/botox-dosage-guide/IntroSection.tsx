
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <div>
      <p className="mb-4 text-lg">
        Getting the right Botox dosage is crucial for achieving natural-looking results while 
        ensuring you're not overpaying or compromising safety. Whether you're considering your 
        first Botox treatment or you're a regular, understanding how many units you truly need 
        can make a significant difference in your experience and satisfaction.
      </p>
      
      <p className="mb-4">
        Different facial areas require different amounts of Botox. For example, treating 
        forehead lines typically requires 10-20 units, while jaw slimming can require up to 50 units 
        per side. Getting the dosage wrong means risking either disappointing results (if too little) 
        or an unnatural, "frozen" appearance (if too much).
      </p>
      
      <p className="mb-4">
        Your ideal dosage is also influenced by several personal factors, including your:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Gender (men typically require more units than women)</li>
        <li>Age and skin condition</li>
        <li>Facial muscle strength</li>
        <li>Treatment history</li>
        <li>Aesthetic goals</li>
      </ul>
      
      <p className="mb-4">
        Our <Link to="/botox-calculator" className="text-primary hover:underline">Botox Dosage Calculator</Link> can 
        help you get a personalized estimate based on these factors, giving you a more 
        informed starting point for your consultation with a healthcare provider.
      </p>
      
      <p className="italic text-gray-600 border-l-4 border-primary pl-4 py-2">
        <strong>Note:</strong> While this guide provides evidence-based recommendations, 
        the final decision about Botox dosage should always be made by a qualified medical 
        professional based on your in-person assessment.
      </p>
    </div>
  );
};

export default IntroSection;
