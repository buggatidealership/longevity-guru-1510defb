
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import { AdUnit } from '@/components/AdUnit';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const ResourcePageHeader: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Get the last segment of the path and format it for display
  const getCurrentPageTitle = () => {
    if (pathSegments.length < 2) return 'Resources';
    
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
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
          {pathSegments.length > 1 ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/resources">Resources</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{getCurrentPageTitle()}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>Resources</BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default ResourcePageHeader;
