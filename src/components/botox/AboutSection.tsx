
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AboutSectionProps {
  scrollToSection: (id: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <div className="mt-10 mb-8 p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Botox Dosage Calculator: Treatment Units & Cost Estimator</h2>
      
      {/* Table of Contents */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
        <ul className="space-y-1">
          <li>
            <button 
              onClick={() => scrollToSection('overview')} 
              className="text-blue-600 hover:underline text-sm"
            >
              Overview
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-blue-600 hover:underline text-sm"
            >
              How The Calculator Works
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-blue-600 hover:underline text-sm"
            >
              Key Benefits
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('considerations')} 
              className="text-blue-600 hover:underline text-sm"
            >
              Important Considerations
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-blue-600 hover:underline text-sm"
            >
              Frequently Asked Questions
            </button>
          </li>
        </ul>
      </div>
      
      <div className="space-y-4 text-gray-700">
        <div id="overview">
          <p>
            Our <strong>Botox Dosage Calculator</strong> helps estimate appropriate Botox units for different facial areas based on your individual characteristics. This tool provides guidance on potential treatment volumes and costs before consulting with a medical professional.
          </p>
        </div>
        
        <div id="how-it-works">
          <h3 className="text-xl font-medium mt-6">How The Botox Calculator Works</h3>
          <p>
            This calculator analyzes factors like gender, age, muscle strength, and treatment experience to suggest appropriate Botox dosages. It considers these personal factors along with established dosing guidelines for different facial areas to create personalized estimates.
          </p>
        </div>
        
        <div id="benefits">
          <h3 className="text-xl font-medium mt-6">Key Benefits of Using Our Calculator</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Better Preparation:</strong> Go into provider consultations with a clearer understanding of dosing concepts.
            </li>
            <li>
              <strong>Personalized Estimates:</strong> Get dosage recommendations adjusted for your specific profile.
            </li>
            <li>
              <strong>Cost Awareness:</strong> Receive approximate cost ranges for treatments in your region.
            </li>
            <li>
              <strong>Area-Specific Information:</strong> Understand typical dosages for different facial regions.
            </li>
          </ul>
        </div>
        
        <div id="considerations">
          <h3 className="text-xl font-medium mt-6">Important Considerations</h3>
          <p>
            While our calculator provides helpful estimates, final Botox dosing should always be determined by a qualified healthcare provider. Many factors affect optimal dosing, including the specific Botox formulation, injection technique, and your unique facial anatomy.
          </p>
          
          <p>
            Remember that this calculator is for educational purposes only. The results should be used as a starting point for discussions with your provider, not as a definitive recommendation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
