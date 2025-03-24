
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const ResourcePageHeader: React.FC = () => {
  return (
    <header className="max-w-6xl mx-auto pt-4 px-4">
      <Logo className="mb-2" />
      <div className="mb-2 bg-gray-50 rounded-lg text-center w-full" style={{ minHeight: '90px' }}>
        <AdUnit 
          className="w-full"
          slot="1111111111" 
          format="horizontal"
          responsive={true}
        />
      </div>
      
      {/* Breadcrumb navigation */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Resources</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default ResourcePageHeader;
