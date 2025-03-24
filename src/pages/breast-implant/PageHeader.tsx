
import React from 'react';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';

const PageHeader: React.FC = () => {
  return (
    <header className="max-w-6xl mx-auto pt-4 px-4">
      <Logo className="mb-2" />
      <div className="mb-6 bg-gray-100 rounded-lg text-center w-full p-1">
        <AdUnit 
          className="w-full"
          slot="1111111111" 
          format="horizontal"
          responsive={true}
        />
      </div>
    </header>
  );
};

export default PageHeader;
