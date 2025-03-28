
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

const HomeRoute: React.FC = () => {
  const location = useLocation();
  
  // Special case: Don't redirect the test homepage
  if (location.pathname === '/homepage-test') {
    return null; // Let the regular routing handle this
  }
  
  // If we're at the root path, render the HomePage
  if (location.pathname === '/') {
    return <HomePage />;
  }
  
  // If we're at /index.html, redirect to the root path
  if (location.pathname === '/index.html') {
    return <Navigate to="/" replace />;
  }
  
  // If we're at /index, redirect to the root path
  if (location.pathname === '/index') {
    return <Navigate to="/" replace />;
  }
  
  // Render the HomePage by default
  return <HomePage />;
};

export default HomeRoute;
