
import React from 'react';

interface TableOfContentsProps {
  onSectionClick: (id: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ onSectionClick }) => {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
      <ul className="space-y-1">
        <li>
          <button 
            onClick={() => onSectionClick('overview')} 
            className="text-blue-600 hover:underline text-sm"
          >
            Overview
          </button>
        </li>
        <li>
          <button 
            onClick={() => onSectionClick('how-it-works')} 
            className="text-blue-600 hover:underline text-sm"
          >
            How The Calculator Works
          </button>
        </li>
        <li>
          <button 
            onClick={() => onSectionClick('benefits')} 
            className="text-blue-600 hover:underline text-sm"
          >
            Key Benefits
          </button>
        </li>
        <li>
          <button 
            onClick={() => onSectionClick('considerations')} 
            className="text-blue-600 hover:underline text-sm"
          >
            Important Considerations
          </button>
        </li>
        <li>
          <button 
            onClick={() => onSectionClick('faq')} 
            className="text-blue-600 hover:underline text-sm"
          >
            Frequently Asked Questions
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContents;
