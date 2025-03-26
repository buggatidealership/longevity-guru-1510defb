
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section className="mb-12" id="faq">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-6 mt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <div className="text-gray-700">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-5 rounded-lg mt-6">
        <h3 className="text-xl font-semibold mb-2">Have More Questions?</h3>
        <p className="mb-3">
          If you have additional questions about proper hydration when taking creatine, consult with a sports nutritionist or healthcare provider familiar with sports supplements. Proper hydration needs can vary based on individual factors, medical conditions, and specific training programs.
        </p>
        <p>
          Remember that the guidance provided in this article and our calculator is based on research for generally healthy adults. Those with specific medical conditions should seek personalized advice from healthcare professionals.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
